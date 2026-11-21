import axios from 'axios'

// Configurable API base URL: connects to deployed Render backend in production, or /api proxy locally
const baseURL = import.meta.env.VITE_API_URL
  ? (import.meta.env.VITE_API_URL.endsWith('/api') ? import.meta.env.VITE_API_URL : `${import.meta.env.VITE_API_URL}/api`)
  : '/api';

const api = axios.create({
  baseURL,
  timeout: 15000,
  headers: { 'Content-Type': 'application/json' },
})

// Response interceptor for normalised error messages
api.interceptors.response.use(
  (res) => res,
  (err) => {
    const message =
      err.response?.data?.message ||
      err.message ||
      'Something went wrong. Please try again.'
    return Promise.reject(new Error(message))
  }
)

/**
 * Submit contact/enquiry form
 * @param {{ name, businessName, email, phone, service, budget, description }} data
 */
export async function submitContact(data) {
  const res = await api.post('/contact', data)
  return res.data
}

/**
 * Submit quote request form
 * @param {{ name, email, phone, projectType, requirements, budget, timeline }} data
 */
export async function submitQuote(data) {
  const res = await api.post('/quote', data)
  return res.data
}

export default api
