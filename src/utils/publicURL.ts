const base = import.meta.env.BASE_URL.replace(/\/+$/, '')

export const publicUrl = (path = '') => `${base}/${String(path).replace(/^\/+/, '')}`