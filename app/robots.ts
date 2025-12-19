import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  // --- IMPORTANTE: Substitua pela URL final do seu site ---
  const baseUrl = 'https://www.oliveirasantanaadv.com.br'

  return {
    rules: {
      userAgent: '*', 
      allow: '/',     
      disallow: '/private/', 
    },
    sitemap: `${baseUrl}/sitemap.xml`, 
  }
}