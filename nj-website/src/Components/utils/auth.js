'use client';

export const validateEmail = (email) => {
    return email.includes("@") && email.includes(".");
};

export const validateLoginForm = (email, password) => {
    if (!validateEmail(email)) {
        return { isValid: false, message: "Please enter a valid email." };
    }

    if (password.trim() === "") {
        return { isValid: false, message: "Please enter your password." };
    }

    return { isValid: true };
};

export const validateSignupForm = (username, email, password, confirmPassword) => {
    if (username.trim() === "") {
        return { isValid: false, message: "Please enter your name." };
    }

    if (!validateEmail(email)) {
        return { isValid: false, message: "Please enter a valid email." };
    }

    if (password.length < 6) {
        return { isValid: false, message: "Password must be at least 6 characters long." };
    }

    if (password !== confirmPassword) {
        return { isValid: false, message: "Passwords do not match." };
    }

    return { isValid: true };
};
