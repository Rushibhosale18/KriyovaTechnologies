/**
 * Validates that required fields are present and non-empty on a plain object.
 * Returns an array of missing field names; empty array means valid.
 *
 * @param {Object} body - The request body to validate
 * @param {string[]} requiredFields - List of field names that must be present
 * @returns {string[]} Array of missing field names
 */
const getMissingFields = (body, requiredFields) => {
  return requiredFields.filter(
    (field) => !body[field] || String(body[field]).trim() === ''
  );
};

/**
 * Sanitizes a string value by trimming whitespace and stripping dangerous chars.
 *
 * @param {string} value
 * @returns {string}
 */
const sanitizeString = (value) => {
  if (typeof value !== 'string') return value;
  return value.trim().replace(/[<>]/g, '');
};

/**
 * Sanitizes all string fields in an object (shallow).
 *
 * @param {Object} obj
 * @returns {Object}
 */
const sanitizeBody = (obj) => {
  const sanitized = {};
  for (const [key, val] of Object.entries(obj)) {
    sanitized[key] = typeof val === 'string' ? sanitizeString(val) : val;
  }
  return sanitized;
};

module.exports = { getMissingFields, sanitizeString, sanitizeBody };
