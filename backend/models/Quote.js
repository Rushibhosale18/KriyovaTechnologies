const mongoose = require('mongoose');

const QuoteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    lowercase: true,
    trim: true,
    match: [
      /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
      'Please provide a valid email address',
    ],
  },
  phone: {
    type: String,
    trim: true,
  },
  projectType: {
    type: String,
    required: [true, 'Project type is required'],
    enum: [
      'Website Development',
      'E-Commerce',
      'AI & Automation',
      'Custom Software',
      'Other',
    ],
  },
  requirements: {
    type: String,
    required: [true, 'Requirements are required'],
    trim: true,
    maxlength: [3000, 'Requirements cannot exceed 3000 characters'],
  },
  budget: {
    type: String,
    trim: true,
  },
  timeline: {
    type: String,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Quote', QuoteSchema);
