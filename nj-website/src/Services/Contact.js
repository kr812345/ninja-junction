const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL;

const contactForm = {
    async create(contactData) {
        try {
            const response = await fetch(`${API_BASE_URL}/contacts`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData),
            });

            if (!response.ok) {
                throw new Error('Failed to save contact');
            }

            const data = await response.json();
            return data;
        } catch (error) {
            throw new Error(error.message || 'Failed to save contact');
        }
    }
};

export default contactForm;
