export async function POST(request) {
  try {
    const body = await request.json();

    // Basic validation
    if (!body || typeof body !== 'object') {
      return Response.json({ message: 'Invalid request body' }, { status: 400 });
    }

    const { name, email, message } = body;
    if (!name || !email || !message) {
      return Response.json({ message: 'Missing required fields: name, email, message' }, { status: 400 });
    }

    // In development, we simply acknowledge the submission.
    // Here you can integrate with your backend, email service, or database.
    // Example: forward to an external API if NEXT_PUBLIC_API_URL is set.

    return Response.json({
      message: 'Thanks! Your request has been received. We will get back to you soon.'
    }, { status: 200 });
  } catch (err) {
    return Response.json({ message: 'Failed to process request', error: err?.message }, { status: 500 });
  }
}

