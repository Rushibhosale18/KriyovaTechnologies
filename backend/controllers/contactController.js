const mongoose = require('mongoose');
const Enquiry = require('../models/Enquiry');
const sendEmail = require('../utils/sendEmail');
const { getMissingFields, sanitizeBody } = require('../middleware/validate');

// In-memory store fallback when MongoDB connection is pending or offline
const memoryEnquiries = [];

/**
 * @route  POST /api/contact
 * @desc   Submit a contact / enquiry form
 * @access Public
 */
const submitContact = async (req, res, next) => {
  try {
    const body = sanitizeBody(req.body);

    // Server-side required-field validation
    const missing = getMissingFields(body, ['name', 'email', 'description']);
    if (missing.length > 0) {
      return res.status(400).json({
        success: false,
        message: `Missing required fields: ${missing.join(', ')}`,
      });
    }

    let enquiryId;
    if (mongoose.connection.readyState === 1) {
      const enquiry = await Enquiry.create({
        name: body.name,
        businessName: body.businessName,
        email: body.email,
        phone: body.phone,
        service: body.service,
        budget: body.budget,
        description: body.description,
      });
      enquiryId = enquiry._id;
    } else {
      const mockDoc = {
        _id: 'mem_' + Date.now(),
        ...body,
        status: 'new',
        createdAt: new Date(),
      };
      memoryEnquiries.push(mockDoc);
      enquiryId = mockDoc._id;
      console.log(`[Enquiry received] Stored in local fallback cache: ${mockDoc.name} (${mockDoc.email})`);
    }

    // Optionally send notification email
    await sendEmail(
      `New Contact Enquiry from ${body.name}`,
      `Name: ${body.name}\nEmail: ${body.email}\nService: ${body.service || 'N/A'}\n\n${body.description}`,
      `<h2>New Enquiry</h2>
       <p><strong>Name:</strong> ${body.name}</p>
       <p><strong>Business:</strong> ${body.businessName || 'N/A'}</p>
       <p><strong>Email:</strong> ${body.email}</p>
       <p><strong>Phone:</strong> ${body.phone || 'N/A'}</p>
       <p><strong>Service:</strong> ${body.service || 'N/A'}</p>
       <p><strong>Budget:</strong> ${body.budget || 'N/A'}</p>
       <p><strong>Message:</strong> ${body.description}</p>`
    );

    return res.status(201).json({
      success: true,
      message: 'Your enquiry has been submitted. We will get back to you shortly!',
      id: enquiryId,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = { submitContact, memoryEnquiries };
