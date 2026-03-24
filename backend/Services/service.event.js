import Event from '../Model/model.event.js';

export const createEvent = async (eventData) => {
  const event = new Event(eventData);
  await event.save();
  return event;
};

export const getEvents = async () => {
  return await Event.find().sort({ timestamp: -1 });
};

export const getEventById = async (id) => {
  const event = await Event.findById(id);
  if (!event) throw new Error('Event not found');
  return event;
};

export const updateEvent = async (id, eventData) => {
  const event = await Event.findByIdAndUpdate(id, eventData, { new: true, runValidators: true });
  if (!event) throw new Error('Event not found');
  return event;
};

export const deleteEvent = async (id) => {
  const event = await Event.findByIdAndDelete(id);
  if (!event) throw new Error('Event not found');
  return { message: 'Event deleted successfully' };
};
