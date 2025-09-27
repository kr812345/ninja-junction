const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

// If no API base URL is configured, fall back to Next.js local API route during dev.
const CONTACT_ENDPOINT = (API_BASE_URL && API_BASE_URL.trim() !== '')
  ? `${API_BASE_URL}/api/contacts`
  : '/api/contacts';

const contactForm = {
    async create(contactData) {
        try {
            const response = await fetch(CONTACT_ENDPOINT, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            if (!response.ok) {
                let details = '';
                try {
                    const text = await response.text();
                    details = text ? `: ${text.substring(0, 200)}` : '';
                } catch (_) { /* ignore */ }
                throw new Error(`Failed to save contact (${response.status})${details}`);
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(error.message || 'Failed to save contact');
        }
    }
};

export default contactForm;
