import * as eventService from '../Services/service.event.js';

export const createEvent = async (req, res, next) => {
  try {
    const event = await eventService.createEvent(req.body);
    res.status(201).json({ message: 'Event created successfully', event });
  } catch (error) {
    next(error);
  }
};

export const getEvents = async (req, res, next) => {
  try {
    const events = await eventService.getEvents();
    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};

export const getEventById = async (req, res, next) => {
  try {
    const event = await eventService.getEventById(req.params.id);
    if (!event) return res.status(404).json({ success: false, message: 'Event not found' });
    res.status(200).json(event);
  } catch (error) {
    next(error);
  }
};

export const updateEvent = async (req, res, next) => {
  try {
    const event = await eventService.updateEvent(req.params.id, req.body);
    res.status(200).json({ message: 'Event updated successfully', event });
  } catch (error) {
    next(error);
  }
};

export const deleteEvent = async (req, res, next) => {
  try {
    await eventService.deleteEvent(req.params.id);
    res.status(200).json({ message: 'Event deleted successfully' });
  } catch (error) {
    next(error);
  }
};
