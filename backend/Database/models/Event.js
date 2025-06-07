import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  location: String,
  description: String,
  status: {
    type: String,
    enum: ['Pending', 'Active', 'Completed'],
    default: 'Pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Event = mongoose.model('Event', eventSchema);
export default Event;
