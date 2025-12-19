import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  
  const baseUrl = 'https://www.oliveirasantanaadv.com.br' 

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly', 
      priority: 1, 
    },
    // Futuramente, se criar um blog, você adicionará as páginas aqui
  ]
}