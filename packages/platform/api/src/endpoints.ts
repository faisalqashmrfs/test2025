export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    ME: '/auth/me',
  },
  CARS: {
    LIST: '/cars',
    DETAILS: (id: string) => `/cars/${id}`,
    CREATE: '/cars',
  },
} as const;