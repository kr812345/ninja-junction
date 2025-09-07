'use client';

export default function Button({ children, onClick, className, type = 'button', disabled = false }) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`gradient-bg text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-opacity-90 transition ${className}`}
        >
            {children}
        </button>
    );
}
