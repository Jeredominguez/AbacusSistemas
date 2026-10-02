// Datos institucionales de Abacus Sistemas S.R.L.
// Fuente: folletos "Productos y Servicios" y firma institucional. Confirmar antes de publicar.
export const site = {
  name: 'Abacus Sistemas',
  legalName: 'Abacus Sistemas S.R.L.',
  tagline: 'Software a medida para la gestión de su organización',
  description:
    'Abacus Sistemas S.R.L. diseña software a medida y sistemas de gestión para empresas e instituciones de salud. Soporte técnico permanente y atención personalizada desde Buenos Aires, Argentina.',
  url: 'https://www.abacunet.com.ar',
  email: 'info@abacunet.com.ar',
  // Único número de contacto (teléfono y WhatsApp).
  phones: [{ label: '11 6281-6464', href: '+5491162816464' }],
  whatsapp: {
    label: '11 6281-6464',
    href: '5491162816464',
    // Mensaje que aparece escrito al abrir el chat; el visitante solo debe enviarlo.
    message:
      'Hola, los contacto desde la web de Abacus Sistemas. Quisiera recibir información sobre sus soluciones de software.',
  },
  address: {
    street: 'Av. Ricardo Balbín 3690, piso 7º',
    zip: 'C1430AAT',
    city: 'Ciudad Autónoma de Buenos Aires',
    country: 'Argentina',
  },
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Av.+Ricardo+Balb%C3%ADn+3690%2C+Ciudad+Aut%C3%B3noma+de+Buenos+Aires',
  // Completar con el año de fundación real para mostrar "+N años de trayectoria" en la web.
  foundedYear: null as number | null,
  leadership: { name: 'Félix Javier Domínguez', role: 'Socio Gerente' },
};

export const yearsOfExperience = site.foundedYear
  ? new Date().getFullYear() - site.foundedYear
  : null;
