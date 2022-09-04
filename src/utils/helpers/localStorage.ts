export const LocalStorage = {
  setAuthToken: (token: string) => localStorage.setItem('kg51231-token', token),
  getAuthToken: () => localStorage.getItem('kg51231-token') as string,
  deleteAuthToken: () => localStorage.removeItem('kg51231-token'),

  setSpoiler: (spoiler: string) => localStorage.setItem('kg51231-spoiler', spoiler),
  getSpoiler: () => localStorage.getItem('kg51231-spoiler') as string,
}
