const mongoose = require('mongoose');
const Quote = require('../models/Quote');
const sendEmail = require('../utils/sendEmail');
const { getMissingFields, sanitizeBody } = require('../middleware/validate');

// In-memory store fallback when MongoDB connection is pending or offline
const memoryQuotes = [];

/**
 * @route  POST /api/quote
 * @desc   Submit a quote request
 * @access Public
 */
const submitQuote = async (req, res, next) => {
  try {
    const body = sanitizeBody(req.body);

    // Server-side required-field validation
    const missing = getMissingFields(body, ['name', 'email', 'projectType', 'requirements']);
    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missing.join(', ')}`,
      });
    }

    let quoteId;
    if (mongoose.connection.readyState === 1) {
      const quote = await Quote.create({
        name: body.name,
        email: body.email,
        phone: body.phone,
        projectType: body.projectType,
        requirements: body.requirements,
        budget: body.budget,
        timeline: body.timeline,
      });
      quoteId = quote._id;
    } else {
      const mockDoc = {
        _id: 'mem_quote_' + Date.now(),
        ...body,
        createdAt: new Date(),
      };
      memoryQuotes.push(mockDoc);
      quoteId = mockDoc._id;
      console.log(`[Quote received] Stored in local fallback cache: ${mockDoc.name} (${mockDoc.projectType})`);
    }

    // Optionally send notification email
    await sendEmail(
      `New Quote Request from ${body.name}`,
      `Name: ${body.name}\nEmail: ${body.email}\nProject Type: ${body.projectType}\n\nRequirements:\n${body.requirements}`,
      `<h2>New Quote Request</h2>
       <p><strong>Name:</strong> ${body.name}</p>
       <p><strong>Email:</strong> ${body.email}</p>
       <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
       <p><strong>Project Type:</strong> ${body.projectType}</p>
       <p><strong>Budget:</strong> ${body.budget || 'N/A'}</p>
       <p><strong>Timeline:</strong> ${body.timeline || 'N/A'}</p>
       <p><strong>Requirements:</strong><br>${body.requirements}</p>`
    );

    return res.status(201).json({
      success: true,
      message: 'Your quote request has been received. We will prepare a custom quote for you!',
      id: quoteId,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitQuote, memoryQuotes };
