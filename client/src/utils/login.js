const API_BASE = "/api";

export async function login(username, password) {
    try {
        const response = await fetch(`${API_BASE}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Login failed");
        }

        localStorage.setItem("username", data.user.username);
        localStorage.setItem("token", data.token);
        localStorage.setItem("isAdmin", data.user.isAdmin);

        return { success: true, user: data.user };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export async function logout() {
    try {
        await fetch(`${API_BASE}/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        });
    } catch (error) {
        return { success: false, message: error.message };
    } finally {
        localStorage.removeItem("username");
        localStorage.removeItem("token");
        localStorage.removeItem("isAdmin");
    }
}

export async function verifyToken() {
    const token = localStorage.getItem("token");

    if (!token) {
        return { success: false, message: "No token found" };
    }

    try {
        const response = await fetch(`${API_BASE}/verify`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Token verification failed");
        }

        return { success: true, user: data.user };
    } catch (error) {
        return { success: false, message: error.message };
    }
}

export function getLoggedInUser() {
    const username = localStorage.getItem("username");
    return username || "Guest";
}

export function isAuthenticated() {
    return !!localStorage.getItem("token");
}

export function getAuthToken() {
    return localStorage.getItem("token");
}

export function isAdmin() {
    return localStorage.getItem("isAdmin") === "true";
}
