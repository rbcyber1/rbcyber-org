export const getAvatarUrl = (username: string): string => {
    if (!username) {
        return "/images/avatar.png"; // Default avatar for guests
    }
    return `/images/avatars/${username}.png`; // Custom avatar based on username
};
