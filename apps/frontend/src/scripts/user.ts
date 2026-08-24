export const doSignIn = () => {
    alert("Currently under maintenance. Please check back later.");
};

export const getAvatarUrl = (username: string): string | undefined => {
    if (!username) {
        return undefined;
    }
    return `/images/avatars/${username}.png`; // Custom avatar based on username
};
