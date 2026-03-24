import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], trim: true },
  description: { type: String, required: [true, 'Description is required'], trim: true },
  image: { type: String, required: [true, 'Image is required'], trim: true },
  sponsor: { type: String, trim: true },
  timestamp: { type: Date, required: [true, 'Timestamp is required'] }
}, { timestamps: true });

const Event = mongoose.model('Event', eventSchema);
export default Event;
