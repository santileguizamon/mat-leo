// Archivo de configuración de Robots para Next.js
// IMPORTANTE: Cuando tengas tu dominio definitivo, reemplaza 'https://www.cambiame-por-tu-dominio.com.ar' por tu URL real.

export default function robots() {
  const baseUrl = 'https://www.cambiame-por-tu-dominio.com.ar';

  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
