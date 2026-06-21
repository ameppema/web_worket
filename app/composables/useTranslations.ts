import type { Locale } from './useSiteLocale'

/**
 * Lightweight i18n for the marketing landing.
 *
 * The legal pages already render localized Markdown via @nuxt/content, so this
 * dictionary only covers the landing copy. Strings are taken straight from the
 * Worket iOS app (Localizable.xcstrings) and its PRD so the web mirrors the
 * product wording. Read the active locale with `const t = useT()`.
 */
export interface LandingMessages {
  nav: {
    how: string
    features: string
    pricing: string
    faq: string
    download: string
  }
  hero: {
    badge: string
    title: string
    highlight: string
    subtitle: string
    ctaPrimary: string
    ctaSecondary: string
    note: string
  }
  how: {
    title: string
    subtitle: string
    steps: { title: string; text: string }[]
  }
  features: {
    title: string
    subtitle: string
    items: { title: string; text: string }[]
  }
  showcase: {
    title: string
    subtitle: string
    points: string[]
  }
  why: {
    badge: string
    title: string
    paragraphs: string[]
    signature: string
  }
  examples: {
    title: string
    subtitle: string
    hint: string
    offers: { badge: string; tone: 'urgent' | 'today' | 'week'; title: string; text: string; location: string; rating: string }[]
  }
  testimonials: {
    title: string
    subtitle: string
    items: { quote: string; name: string; role: string }[]
  }
  pricing: {
    title: string
    subtitle: string
    perMonth: string
    billedYearly: string
    cta: string
    mostPopular: string
    plans: {
      name: string
      price: string
      tagline: string
      features: string[]
    }[]
  }
  faq: {
    title: string
    subtitle: string
    items: { q: string; a: string }[]
  }
  cta: {
    title: string
    subtitle: string
    button: string
  }
  footer: {
    tagline: string
    rights: string
  }
}

const messages: Record<Locale, LandingMessages> = {
  es: {
    nav: {
      how: 'Cómo funciona',
      features: 'Funciones',
      pricing: 'Planes',
      faq: 'Preguntas',
      download: 'Descargar',
    },
    hero: {
      badge: 'Microtrabajos cerca de ti',
      title: 'Encuentra trabajos puntuales cerca de ti o',
      highlight: 'publica el tuyo',
      subtitle: 'Tú decides cuándo y con quién. Conecta con gente de confianza de tu zona, acordáis los detalles y construyes tu reputación. Sin comisiones.',
      ctaPrimary: 'Descargar en App Store',
      ctaSecondary: 'Ver cómo funciona',
      note: 'Disponible para iPhone · Gratis para empezar',
    },
    how: {
      title: 'Así de fácil',
      subtitle: 'De la idea al trato cerrado en cuatro pasos.',
      steps: [
        { title: 'Publica tu oferta', text: 'Crea tu oferta en un minuto, descríbela y publícala. Recibirás a las personas interesadas.' },
        { title: 'Recibe interesados', text: 'La gente cercana con etiquetas que encajan ve tu oferta y se candidata al instante.' },
        { title: 'Chatea y elige', text: 'Habla por chat, revisa sus valoraciones y su perfil, y contrata con confianza. Vosotros acordáis los detalles.' },
        { title: 'Valora y repite', text: 'Cuando el trabajo esté hecho, finalízalo y dejad una valoración mutua que suma a vuestra reputación.' },
      ],
    },
    features: {
      title: 'Todo lo que necesitas para resolver lo puntual',
      subtitle: 'Pensado para encontrar ayuda cerca, rápido y con confianza.',
      items: [
        { title: 'Ofertas en tu zona', text: 'En tu pantalla principal verás las ofertas dentro de tu radio. Ajusta los kilómetros y descubre justo lo que hay a tu alrededor.' },
        { title: 'Las etiquetas lo conectan todo', text: 'Añade a tu perfil lo que sabes hacer. Cuando alguien publique un trabajo que encaje contigo, te avisamos al instante.' },
        { title: 'Chat por oferta', text: 'Cada conversación está ligada a una oferta. Habla con las personas interesadas y cierra los detalles sin salir de la app.' },
        { title: 'Confianza real', text: 'Perfiles con biografía, fotos y valoraciones de usuario. Contrata sabiendo con quién tratas.' },
        { title: 'Sin comisiones', text: 'Worket solo os conecta. El precio lo acordáis vosotros, sin intermediarios ni comisiones por el trabajo.' },
        { title: 'Borradores y republicar', text: 'Guarda ofertas como borrador y vuelve a publicar las que caduquen en un toque. Tus trabajos, siempre a mano.' },
      ],
    },
    showcase: {
      title: 'Hecho para tu día a día',
      subtitle: 'Desde una fuga en la cocina hasta un camarero para el sábado: si lo necesitas cerca, está en Worket.',
      points: [
        'Feed local con radio ajustable, de 5 a 150 km',
        'Filtros por prioridad, distancia y valoración',
        'Notificaciones al instante cuando algo encaja con tus etiquetas',
        'Mensajería con propuesta y cierre de trato dentro del chat',
      ],
    },
    why: {
      badge: 'Nuestra misión',
      title: 'Por qué creamos Worket',
      paragraphs: [
        'Todos hemos pasado por ahí: se sale el agua del baño un domingo, necesitas un camarero extra para el sábado o te falta una mano para una mudanza. Y casi nunca conoces a alguien de confianza que pueda echarte un cable justo cuando lo necesitas.',
        'Al mismo tiempo, hay muchísima gente cerca con tiempo y ganas de ganar un dinero extra con tareas puntuales: estudiantes, profesionales entre proyectos, vecinos con un oficio. Solo faltaba algo que los conectara.',
        'Por eso creamos Worket: para que encontrar ayuda cerca sea tan fácil como abrir el móvil, y para que ofrecer lo que sabes hacer dependa solo de ti. Sin comisiones por el trabajo, sin intermediarios. Tú decides cuándo, con quién y a qué precio. La confianza la construyen las personas, con su reputación.',
      ],
      signature: 'El equipo de Worket',
    },
    examples: {
      title: 'Esto es lo que se publica en Worket',
      subtitle: 'Desde urgencias del hogar hasta encargos creativos: échale un ojo al tipo de ofertas que puedes publicar o aceptar.',
      hint: 'Desliza para ver más →',
      offers: [
        { badge: 'Urgente', tone: 'urgent', title: 'Fontanero urgente: fuga en la cocina', text: 'Tengo una fuga bajo el fregadero y se me inunda el mueble. Necesito a alguien hoy mismo.', location: 'Sant Jordi de ses Salines · Eivissa', rating: '4,9' },
        { badge: 'Hoy', tone: 'today', title: 'Camarero/a para un evento el sábado', text: 'Refuerzo de barra para una fiesta privada de unas 60 personas. 5 horas de turno.', location: 'Eivissa · Illes Balears', rating: '4,8' },
        { badge: 'Hoy', tone: 'today', title: 'Cartelería para un evento de música', text: 'Carteles y flyers para una fiesta. Tengo el texto y la fecha, falta el diseño.', location: 'Eivissa · Illes Balears', rating: '4,9' },
        { badge: 'Hoy', tone: 'today', title: 'Limpieza de un piso turístico', text: 'Salida de inquilinos, hay que dejar el piso listo para los siguientes. Unos 70 m².', location: 'Eivissa · Eivissa', rating: '4,7' },
        { badge: 'Esta semana', tone: 'week', title: 'Maquetar el catálogo de una tienda', text: 'Tengo los textos y las fotos; necesito maquetar un PDF de 12 páginas con buen gusto.', location: 'Eivissa · Illes Balears', rating: '4,7' },
        { badge: 'Esta semana', tone: 'week', title: 'Clases de guitarra para principiantes', text: 'Busco a alguien para clases sueltas de guitarra en casa. Nivel desde cero.', location: 'Sant Antoni · Eivissa', rating: '5,0' },
        { badge: 'Esta semana', tone: 'week', title: 'Pasear a mi perro dos veces al día', text: 'Necesito a alguien de confianza para sacar a mi perro mañana y tarde esta semana.', location: 'Santa Eulària · Eivissa', rating: '4,8' },
        { badge: 'Esta semana', tone: 'week', title: 'Montar y configurar un puesto de trabajo', text: 'Mesa, monitor y cables. Lo tengo todo, solo necesito a alguien que lo deje listo.', location: 'Eivissa · Illes Balears', rating: '4,6' },
      ],
    },
    testimonials: {
      title: 'Lo que dice la gente',
      subtitle: 'Personas reales resolviendo cosas reales cerca de casa.',
      items: [
        { quote: 'Tenía una fuga en la cocina y en una hora ya tenía a alguien de confianza en casa. Increíble.', name: 'Marta R.', role: 'Eivissa' },
        { quote: 'Como diseñadora consigo encargos sueltos sin moverme de mi barrio. Las etiquetas funcionan de maravilla.', name: 'Lucía F.', role: 'Diseñadora' },
        { quote: 'Necesitaba refuerzo de barra para un evento y lo cubrí el mismo día. Sin comisiones, todo claro.', name: 'Pablo O.', role: 'Hostelería' },
        { quote: 'Me gano un extra los fines de semana paseando perros de mi zona. Elijo cuándo y con quién.', name: 'Clara M.', role: 'Estudiante' },
      ],
    },
    pricing: {
      title: 'Empieza gratis, mejora cuando quieras',
      subtitle: 'Más etiquetas, mayor alcance y más visibilidad para tus ofertas.',
      perMonth: '/mes',
      billedYearly: 'o el plan anual con descuento',
      cta: 'Empezar',
      mostPopular: 'Más popular',
      plans: [
        {
          name: 'Básico',
          price: 'Gratis',
          tagline: 'Para empezar a moverte por tu zona.',
          features: ['1 etiqueta de perfil', 'Radio de búsqueda hasta 25 km', 'Hasta 5 etiquetas por oferta', 'Chat y valoraciones'],
        },
        {
          name: 'Plus',
          price: '2,99 €',
          tagline: 'Más alcance y visibilidad.',
          features: ['3 etiquetas de perfil', 'Radio hasta 50 km', 'Hasta 10 etiquetas por oferta', '3 niveles de prioridad', 'Boost semanal de tus ofertas'],
        },
        {
          name: 'Premium',
          price: '6,99 €',
          tagline: 'Máxima presencia y comodidad.',
          features: ['Todo lo que incluye Plus', '5 etiquetas de perfil', 'Radio hasta 150 km', 'Hasta 15 etiquetas por oferta', '5 niveles de prioridad', 'Republicar caducadas en un toque'],
        },
      ],
    },
    faq: {
      title: 'Preguntas frecuentes',
      subtitle: 'Todo lo que necesitas saber antes de empezar.',
      items: [
        { q: '¿Worket cobra comisión por los trabajos?', a: 'No. Worket solo conecta a las dos partes; el precio y los detalles los acordáis vosotros directamente. No mediamos en los pagos del trabajo.' },
        { q: '¿Cómo encuentro trabajos que encajan conmigo?', a: 'Añade etiquetas a tu perfil con lo que sabes hacer. Cuando alguien publique una oferta que coincida con tus etiquetas y esté en tu radio, te avisamos al instante.' },
        { q: '¿Cómo sé que puedo confiar en la otra persona?', a: 'Cada perfil muestra biografía, fotos y valoraciones de otros usuarios. Puedes chatear y revisar su reputación antes de cerrar nada.' },
        { q: '¿Cuánto dura una oferta publicada?', a: 'Una oferta permanece activa 7 días. Cuando caduca puedes volver a publicarla, al instante si tienes Premium.' },
        { q: '¿Es gratis?', a: 'Sí, puedes empezar con el plan Básico gratuito. Los planes Plus y Premium añaden más etiquetas, mayor radio y más visibilidad.' },
        { q: '¿Está disponible en Android?', a: 'De momento Worket está disponible para iPhone. La versión para Android llegará más adelante.' },
      ],
    },
    cta: {
      title: 'Tu próxima ayuda está a la vuelta de la esquina',
      subtitle: 'Descarga Worket y empieza a publicar o encontrar trabajos cerca de ti hoy mismo.',
      button: 'Descargar en App Store',
    },
    footer: {
      tagline: 'Microtrabajos de confianza, cerca de ti.',
      rights: 'Todos los derechos reservados.',
    },
  },
  en: {
    nav: {
      how: 'How it works',
      features: 'Features',
      pricing: 'Plans',
      faq: 'FAQ',
      download: 'Download',
    },
    hero: {
      badge: 'Local gigs near you',
      title: 'Find one-off jobs near you or',
      highlight: 'post your own',
      subtitle: 'You decide when and with whom. Connect with trusted people in your area, agree the details and build your reputation. No commissions.',
      ctaPrimary: 'Download on the App Store',
      ctaSecondary: 'See how it works',
      note: 'Available for iPhone · Free to start',
    },
    how: {
      title: 'It’s this simple',
      subtitle: 'From idea to done deal in four steps.',
      steps: [
        { title: 'Post your job', text: 'Create your job in a minute, describe it and publish it. Interested people will reach out.' },
        { title: 'Get applicants', text: 'Nearby people whose tags match see your job and apply in an instant.' },
        { title: 'Chat and choose', text: 'Talk over chat, check their ratings and profile, and hire with confidence. You agree the details.' },
        { title: 'Rate and repeat', text: 'When the job is done, close it and leave a mutual rating that builds your reputation.' },
      ],
    },
    features: {
      title: 'Everything you need to get things done',
      subtitle: 'Built to find help nearby — fast and with confidence.',
      items: [
        { title: 'Jobs in your area', text: 'Your home screen shows jobs within your radius. Adjust the kilometres and discover exactly what’s around you.' },
        { title: 'Tags connect everything', text: 'Add what you can do to your profile. When someone posts a job that matches you, we notify you instantly.' },
        { title: 'Chat per job', text: 'Every conversation is tied to a job. Talk to interested people and settle the details without leaving the app.' },
        { title: 'Real trust', text: 'Profiles with bio, photos and user ratings. Hire knowing exactly who you’re dealing with.' },
        { title: 'No commissions', text: 'Worket just connects you. You agree the price between you — no middlemen, no fees on the work.' },
        { title: 'Drafts & reposting', text: 'Save jobs as drafts and repost expired ones in a tap. Your jobs, always at hand.' },
      ],
    },
    showcase: {
      title: 'Made for everyday life',
      subtitle: 'From a leak in the kitchen to a waiter for Saturday: if you need it nearby, it’s on Worket.',
      points: [
        'Local feed with adjustable radius, 5 to 150 km',
        'Filters by priority, distance and rating',
        'Instant notifications when something matches your tags',
        'Messaging with proposal and deal closing inside the chat',
      ],
    },
    why: {
      badge: 'Our mission',
      title: 'Why we built Worket',
      paragraphs: [
        'We’ve all been there: a pipe bursts on a Sunday, you need an extra waiter for Saturday, or you’re one pair of hands short for a move. And you rarely know someone you can trust to help out exactly when you need it.',
        'At the same time, there are plenty of people nearby with the time and the will to earn extra money on one-off tasks: students, professionals between projects, neighbours with a trade. All that was missing was something to connect them.',
        'That’s why we built Worket: to make finding help nearby as easy as opening your phone, and to put offering what you know how to do entirely in your hands. No fees on the work, no middlemen. You decide when, with whom and at what price. Trust is built by people, through their reputation.',
      ],
      signature: 'The Worket team',
    },
    examples: {
      title: 'This is what gets posted on Worket',
      subtitle: 'From household emergencies to creative gigs: take a look at the kind of jobs you can post or accept.',
      hint: 'Swipe to see more →',
      offers: [
        { badge: 'Urgent', tone: 'urgent', title: 'Urgent plumber: leak in the kitchen', text: 'I have a leak under the sink and the cabinet is flooding. I need someone today.', location: 'Sant Jordi de ses Salines · Eivissa', rating: '4.9' },
        { badge: 'Today', tone: 'today', title: 'Waiter for an event on Saturday', text: 'Extra bar staff for a private party of around 60 people. 5-hour shift.', location: 'Eivissa · Illes Balears', rating: '4.8' },
        { badge: 'Today', tone: 'today', title: 'Signage for a music event', text: 'Posters and flyers for a party. I have the text and the date, just need the design.', location: 'Eivissa · Illes Balears', rating: '4.9' },
        { badge: 'Today', tone: 'today', title: 'Cleaning a holiday flat', text: 'Guests are checking out, the flat needs to be ready for the next ones. Around 70 m².', location: 'Eivissa · Eivissa', rating: '4.7' },
        { badge: 'This week', tone: 'week', title: 'Lay out a shop catalogue', text: 'I have the texts and photos; I need a tasteful 12-page PDF laid out.', location: 'Eivissa · Illes Balears', rating: '4.7' },
        { badge: 'This week', tone: 'week', title: 'Guitar lessons for beginners', text: 'Looking for someone for one-off guitar lessons at home. Total beginner level.', location: 'Sant Antoni · Eivissa', rating: '5.0' },
        { badge: 'This week', tone: 'week', title: 'Walk my dog twice a day', text: 'I need someone reliable to walk my dog morning and afternoon this week.', location: 'Santa Eulària · Eivissa', rating: '4.8' },
        { badge: 'This week', tone: 'week', title: 'Set up and configure a workstation', text: 'Desk, monitor and cables. I have everything, just need someone to get it ready.', location: 'Eivissa · Illes Balears', rating: '4.6' },
      ],
    },
    testimonials: {
      title: 'What people say',
      subtitle: 'Real people solving real things close to home.',
      items: [
        { quote: 'I had a leak in the kitchen and within an hour I had someone I could trust at home. Incredible.', name: 'Marta R.', role: 'Eivissa' },
        { quote: 'As a designer I land one-off gigs without leaving my neighbourhood. The tags work brilliantly.', name: 'Lucía F.', role: 'Designer' },
        { quote: 'I needed extra bar staff for an event and covered it the same day. No commissions, all clear.', name: 'Pablo O.', role: 'Hospitality' },
        { quote: 'I earn extra at weekends walking dogs in my area. I choose when and with whom.', name: 'Clara M.', role: 'Student' },
      ],
    },
    pricing: {
      title: 'Start free, upgrade whenever',
      subtitle: 'More tags, wider reach and more visibility for your jobs.',
      perMonth: '/mo',
      billedYearly: 'or the discounted yearly plan',
      cta: 'Get started',
      mostPopular: 'Most popular',
      plans: [
        {
          name: 'Basic',
          price: 'Free',
          tagline: 'To start moving around your area.',
          features: ['1 profile tag', 'Search radius up to 25 km', 'Up to 5 tags per job', 'Chat and ratings'],
        },
        {
          name: 'Plus',
          price: '€2.99',
          tagline: 'More reach and visibility.',
          features: ['3 profile tags', 'Radius up to 50 km', 'Up to 10 tags per job', '3 priority levels', 'Weekly boost for your jobs'],
        },
        {
          name: 'Premium',
          price: '€6.99',
          tagline: 'Maximum presence and convenience.',
          features: ['Everything in Plus', '5 profile tags', 'Radius up to 150 km', 'Up to 15 tags per job', '5 priority levels', 'Repost expired jobs in one tap'],
        },
      ],
    },
    faq: {
      title: 'Frequently asked questions',
      subtitle: 'Everything you need to know before you start.',
      items: [
        { q: 'Does Worket charge commission on jobs?', a: 'No. Worket only connects both parties; you agree the price and details directly. We don’t handle payments for the work.' },
        { q: 'How do I find jobs that fit me?', a: 'Add tags to your profile with what you can do. When someone posts a job matching your tags within your radius, we notify you instantly.' },
        { q: 'How do I know I can trust the other person?', a: 'Every profile shows a bio, photos and ratings from other users. You can chat and check their reputation before committing.' },
        { q: 'How long does a posted job last?', a: 'A job stays active for 7 days. When it expires you can repost it — instantly if you have Premium.' },
        { q: 'Is it free?', a: 'Yes, you can start with the free Basic plan. Plus and Premium add more tags, a wider radius and more visibility.' },
        { q: 'Is it available on Android?', a: 'For now Worket is available for iPhone. The Android version will come later.' },
      ],
    },
    cta: {
      title: 'Your next bit of help is just around the corner',
      subtitle: 'Download Worket and start posting or finding jobs near you today.',
      button: 'Download on the App Store',
    },
    footer: {
      tagline: 'Trusted local gigs, near you.',
      rights: 'All rights reserved.',
    },
  },
}

export const useT = () => {
  const { locale } = useSiteLocale()
  return computed<LandingMessages>(() => messages[locale.value])
}
