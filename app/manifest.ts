import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Oliveira & Santana Advogados Associados',
    short_name: 'Oliveira & Santana',
    description: 'Estratégia jurídica para o crescimento do seu negócio. Especialistas em Direito Tributário e Empresarial.',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff', // Cor de fundo ao abrir o app
    theme_color: '#081c29', // A cor AZUL ESCURO da sua marca (pinta a barra do navegador)
    icons: [
      {
        src: '/logo.png', // Usando sua logo existente
        sizes: 'any',
        type: 'image/png',
      },
      {
        src: '/icon-192.png', // O navegador tentará buscar essa, se não achar, usa a de cima
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}