import { NextResponse } from "next/server";

export async function GET() {
  // CONFIGURAÇÃO DA API DO GOOGLE (FUTURO)
  // Quando tiver a chave, basta preencher no .env.local:
  // GOOGLE_PLACES_API_KEY=sua_chave_aqui
  // GOOGLE_PLACE_ID=id_do_lugar_aqui
  
  const API_KEY = process.env.GOOGLE_PLACES_API_KEY;
  const PLACE_ID = process.env.GOOGLE_PLACE_ID;

  // Se tiver chave e ID, tenta buscar do Google
  if (API_KEY && PLACE_ID) {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total&language=pt_BR&key=${API_KEY}`
      );
      const data = await response.json();

      if (data.result) {
        return NextResponse.json({
          rating: data.result.rating,
          total: data.result.user_ratings_total,
          reviews: data.result.reviews,
        });
      }
    } catch (error) {
      console.error("Erro ao buscar API do Google, usando fallback.", error);
    }
  }

  // RETORNA OS DADOS REAIS (MANUALMENTE INSERIDOS)
  return NextResponse.json(REAL_REVIEWS_FALLBACK);
}

// --- DADOS REAIS DO GOOGLE MEU NEGÓCIO ---
const REAL_REVIEWS_FALLBACK = {
  rating: 5.0, // Nota geral mantida em 5.0 baseada nos elogios
  total: 44,   // Total de avaliações que você mencionou
  reviews: [
    {
      author_name: "Gracielle Lima",
      profile_photo_url: null,
      rating: 5,
      relative_time_description: "um mês atrás",
      text: "Fui muito bem atendida! Pessoal super prestativo, profissionais ágeis e qualificados. Conseguiram me ajudar com tudo. Recomendo demais!",
    },
    {
      author_name: "Mariano Neto",
      profile_photo_url: null,
      rating: 5,
      relative_time_description: "2 semanas atrás",
      text: "Atendimento humanizado, me ajudou de forma simples na resolução do meu problema. Indico de olhos fechados",
    },
    {
      author_name: "Raphaela de Almeida Oliveira",
      profile_photo_url: null,
      rating: 5,
      relative_time_description: "2 anos atrás",
      text: "Sem dúvidas, o melhor escritório de advocacia localizado em Garanhuns e região. Competência e presteza são sua marca. Excelente profissional! Adota postura ética e busca a melhor estratégia com base na experiência, confiança e transparência, para obtenção do resultado favorável ao cliente!",
    },
    {
      author_name: "Kallyne Rocha",
      profile_photo_url: null,
      rating: 5,
      relative_time_description: "2 anos atrás",
      text: "Uma experiência muito boa. O ambiente é agradável e organizado, o Dr. Raphael deixa a gente à vontade e tranquilo, explica bem como vai ser todo o processo e passa confiança de que vai dar tudo certo.",
    },
    {
      author_name: "Katiane Tavares",
      profile_photo_url: null,
      rating: 5,
      relative_time_description: "2 anos atrás",
      text: "Escritório mais que excelente. Dr. Raphael sem palavras pra descrever tamanha competência, eficiência, dedicação, ética e profissionalismo. Atencioso do início ao fim. Gratidão por tudo. Indico de olhos fechados.",
    },
    {
      author_name: "Ana Clécia",
      profile_photo_url: null,
      rating: 5,
      relative_time_description: "2 anos atrás",
      text: "O Oliveira & Santana destaca-se pelo profissionalismo, ética e comprometimento na resolução das demandas. Se você busca serviços jurídicos de alta qualidade e confiabilidade, indico fortemente o Oliveira & Santana. ☺️",
    },
    {
      author_name: "Fernando Fagnner", // Abreviei levemente o nome muito longo para caber melhor no card
      profile_photo_url: null,
      rating: 5,
      relative_time_description: "2 anos atrás",
      text: "Um profissional que lhe deixar bem informado, sempre atente as ligações e nunca me deixou só quando precisei, super indico!!",
    },
    {
      author_name: "Kyllder Rocha",
      profile_photo_url: null,
      rating: 5,
      relative_time_description: "2 anos atrás",
      text: "Excelente profissional, com expertise jurídica impressionante. Comunicação clara e objetiva, comprometido, pontual e ético. Recomendado sem hesitação",
    },
    {
      author_name: "Luana Wene",
      profile_photo_url: null,
      rating: 5,
      relative_time_description: "2 anos atrás",
      text: "Excelente escritório, profissional especializado, competente e atualizado. Altamente ético e atencioso com o cliente. Referência na região.",
    },
    {
      author_name: "Mychaella Menezes",
      profile_photo_url: null,
      rating: 5,
      relative_time_description: "2 anos atrás",
      text: "Sua cordialidade é exemplar, além disso, proporciona um atendimento de qualidade e um ambiente altamente agradável.",
    },
    {
      author_name: "Keylla Rocha",
      profile_photo_url: null,
      rating: 5,
      relative_time_description: "2 anos atrás",
      text: "Atendimento maravilhoso, sai com todas as minhas dúvidas esclarecidas e com a segurança de que escolhi o melhor advogado da cidade.",
    },
    {
      author_name: "Aline Peixoto",
      profile_photo_url: null,
      rating: 5,
      relative_time_description: "2 anos atrás",
      text: "Dr. Raphael atento a todos os detalhes e atencioso para me ajudar. Super indico!",
    },
  ],
};