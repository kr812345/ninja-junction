const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const getHeaders = () => {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` })
  };
};

export const loginAdmin = async (username, password) => {
  const response = await fetch(`${API_URL}/users/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Invalid credentials');
  return data;
};

// --- Members API ---
export const fetchMembers = async () => {
  const response = await fetch(`${API_URL}/members`, { headers: getHeaders() });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Failed to fetch members');
  return data;
};

export const updateMemberStatus = async (id, status) => {
  const response = await fetch(`${API_URL}/members/${id}/status`, {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({ status })
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Failed to update status');
  return data;
};

export const deleteMember = async (id) => {
  const response = await fetch(`${API_URL}/members/${id}`, {
    method: 'DELETE',
    headers: getHeaders()
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.message || 'Failed to delete member');
  return data;
};

export const addMember = async (memberData) => {
  const response = await fetch(`${API_URL}/members`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(memberData)
  });
  const data = await response.json();
  if (!response.ok) {
    const errorMsg = data.errors ? `${data.message}: ${data.errors.join(', ')}` : data.message;
    throw new Error(errorMsg || 'Failed to add member');
  }
  return data;
};

// --- Events API ---
export const fetchEvents = async () => {
  const response = await fetch(`${API_URL}/events`);
  if (!response.ok) throw new Error('Failed to fetch events');
  return response.json();
};

export const createEvent = async (eventData) => {
  const response = await fetch(`${API_URL}/events`, {
    method: 'POST',
    headers: getHeaders(),
    body: JSON.stringify(eventData)
  });
  if (!response.ok) throw new Error('Failed to create event');
  return response.json();
};

export const updateEvent = async (id, eventData) => {
  const response = await fetch(`${API_URL}/events/${id}`, {
    method: 'PUT',
    headers: getHeaders(),
    body: JSON.stringify(eventData)
  });
  if (!response.ok) throw new Error('Failed to update event');
  return response.json();
};

export const deleteEvent = async (id) => {
  const response = await fetch(`${API_URL}/events/${id}`, {
    method: 'DELETE',
    headers: getHeaders()
  });
  if (!response.ok) throw new Error('Failed to delete event');
  return response.json();
};

// --- Contacts API ---
export const fetchContacts = async () => {
  const response = await fetch(`${API_URL}/contacts`, { headers: getHeaders() });
  if (!response.ok) throw new Error('Failed to fetch contacts');
  return response.json();
};

export const updateContactStatus = async (id, status) => {
  const response = await fetch(`${API_URL}/contacts/${id}/status`, {
    method: 'PATCH',
    headers: getHeaders(),
    body: JSON.stringify({ status })
  });
  if (!response.ok) throw new Error('Failed to update contact status');
  return response.json();
};

export const deleteContact = async (id) => {
  const response = await fetch(`${API_URL}/contacts/${id}`, {
    method: 'DELETE',
    headers: getHeaders()
  });
  if (!response.ok) throw new Error('Failed to delete contact');
  return response.json();
};
