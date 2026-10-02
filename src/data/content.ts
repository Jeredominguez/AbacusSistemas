// Contenidos de la web, basados en la documentación comercial de Abacus.
// Editar acá los textos sin tocar los componentes.

export const services = [
  {
    icon: 'code',
    title: 'Desarrollo de software a medida',
    text: 'Diseñamos sistemas que se adaptan a los procesos reales de su organización: relevamiento, desarrollo, implementación y evolución continua.',
  },
  {
    icon: 'dashboard',
    title: 'Sistemas de gestión',
    text: 'Ventas, compras, stock, caja y contabilidad en módulos que funcionan en forma autónoma o integrada, compartiendo información entre sí.',
  },
  {
    icon: 'headset',
    title: 'Soporte técnico y mantenimiento',
    text: 'Equipo técnico especializado con soporte permanente. Mantenimiento preventivo, correctivo y reparaciones a demanda, tanto de hardware como de software de base.',
  },
  {
    icon: 'network',
    title: 'Redes y comunicaciones',
    text: 'Instalación y configuración de redes, tendido de cableado estructurado y fibra óptica, y soluciones wireless.',
  },
  {
    icon: 'server',
    title: 'Equipamiento e insumos',
    text: 'Provisión de computadoras, servidores, impresoras, UPS, accesorios e insumos de primera línea, con asesoramiento personalizado.',
  },
  {
    icon: 'shield',
    title: 'Seguridad de la información',
    text: 'Niveles de permisos por usuario, registro de cada acción para auditorías exactas y políticas de backups que resguardan sus datos.',
  },
] as const;

export const pillars = [
  { icon: 'headset', title: 'Soporte permanente', text: 'Equipo técnico que hace propias las necesidades de cada cliente.' },
  { icon: 'shield', title: 'Control por niveles de permisos', text: 'Cada usuario accede solo a lo que le corresponde.' },
  { icon: 'audit', title: 'Auditoría completa', text: 'Registro de ingresos, modificaciones y eliminaciones de datos.' },
  { icon: 'backup', title: 'Información resguardada', text: 'Política de backups pensada para la continuidad operativa.' },
] as const;

export const solutions = [
  {
    id: 'sigem',
    icon: 'dashboard',
    kicker: 'Si.Ge.Em.',
    title: 'Sistema de Gestión Empresaria',
    audience: 'Empresas comerciales y de servicios',
    text: 'Información más ágil y control más seguro de los recursos. Cada módulo cubre un sector de la empresa y todos comparten y realimentan la información entre sí, mejorando la toma de decisiones en todos los niveles.',
    modules: [
      { name: 'Ventas', text: 'Control integral del área comercial, con comprobantes configurables y potentes herramientas de consulta.' },
      { name: 'Compras', text: 'Datos históricos, concursos de precios y control completo de comprobantes y transacciones.' },
      { name: 'Stock', text: 'Múltiples depósitos y conocimiento inmediato de cantidad, ubicación y distribución de cada artículo.' },
      { name: 'Caja', text: 'Cajas definidas por circuito, con filtros, órdenes y reportes para un estricto control del flujo de dinero.' },
      { name: 'Contable', text: 'Planes de cuenta, distribuciones, monedas, asientos contables y listados a medida.' },
    ],
  },
  {
    id: 'salud',
    icon: 'health',
    kicker: 'Sistema de Salud',
    title: 'Gestión para centros de salud',
    audience: 'Hospitales, sanatorios y clínicas',
    text: 'Control más simple de los recursos y mejor aprovechamiento de los insumos, para atender mayor volumen de pacientes con más calidad de servicio y mayor satisfacción.',
    modules: [
      { name: 'Turnos', text: 'Agendas de profesionales y servicios, con horarios, feriados y licencias.' },
      { name: 'Admisión y Egreso', text: 'Internaciones, pases y altas, con control de camas y ocupación.' },
      { name: 'Autorizaciones', text: 'Control de prestaciones e internaciones de obras sociales y prepagas.' },
      { name: 'Caja', text: 'Registro de todas las transacciones abonadas por los pacientes.' },
      { name: 'Farmacia', text: 'Medicamentos e insumos con multidepósito, stock y valorización.' },
      { name: 'Laboratorio', text: 'Turnos, protocolos y resultados, con conexión a analizadores automáticos.' },
      { name: 'Imágenes', text: 'Gestión del servicio, informes médicos y control de insumos.' },
      { name: 'Facturación', text: 'Prestaciones a facturar a obras sociales y prepagas, con débitos y refacturación.' },
      { name: 'Historia Clínica', text: 'Integración de turnos, internaciones, estudios y prácticas de cada paciente.' },
    ],
  },
] as const;

export const process = [
  { step: '01', title: 'Relevamiento', text: 'Entendemos cómo trabaja su organización y qué necesita resolver.' },
  { step: '02', title: 'Diseño de la solución', text: 'Definimos módulos, alcances y circuitos junto a su equipo.' },
  { step: '03', title: 'Desarrollo', text: 'Construimos el sistema con revisiones periódicas y a su medida.' },
  { step: '04', title: 'Implementación', text: 'Puesta en marcha, migración de datos y capacitación de usuarios.' },
  { step: '05', title: 'Soporte y evolución', text: 'Acompañamos la operación y sumamos mejoras con el tiempo.' },
] as const;

export const values = [
  'Atención personalizada',
  'Soporte técnico permanente',
  'Productos y soluciones de primera línea',
] as const;
