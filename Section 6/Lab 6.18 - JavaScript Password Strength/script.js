function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }

    if (password.includes("password")) {
        return false;
    }

    if (!/[A-Z]/.test(password)) {
        return false;
    }

    return true;
}