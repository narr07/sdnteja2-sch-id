/* eslint-disable no-console */
// Cache duration: 24 hours (in seconds)
const CACHE_TTL = 60 * 60 * 24 // 24 hours in seconds
const API_URL = 'https://script.google.com/macros/s/AKfycbxzignNqy2LIzEoE9QjLCUdNx4OU4OQmsqV__0u_I7wRF2pqlWSypsXX8M1kL-FEiI/exec'

export default defineCachedEventHandler(
  async (event) => {
    // Set CORS headers for all requests
    setHeaders(event, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Content-Type': 'application/json',
    })

    // Handle preflight requests
    if (getMethod(event) === 'OPTIONS') {
      return {}
    }

    try {
      console.log('📡 Fetching fresh data from Google Apps Script...')
      const response = await $fetch(API_URL, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'User-Agent': 'Mozilla/5.0 (compatible; Nuxt-Server/1.0)',
        },
        timeout: 15000, // 15 seconds timeout
      })
      console.log('✓ Successfully fetched data')
      return response
    }
    catch (error: any) {
      console.error('❌ Error fetching siswa data:', error.message)
      throw createError({
        statusCode: 500,
        statusMessage: 'Failed to fetch student data',
        data: {
          error: true,
          message: error.message || 'Unable to connect to data source',
          timestamp: new Date().toISOString(),
        },
      })
    }
  },
  {
    maxAge: CACHE_TTL, // 24 jam cache
    staleMaxAge: CACHE_TTL + 3600, // 1 jam grace period SWR
    swr: true, // melayani data lama sambil memperbarui di background
  },
)
