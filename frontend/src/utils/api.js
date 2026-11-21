import axios from 'axios'

const api = axios.create({
  baseURL: '/api',
  timeout: 10000,
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
