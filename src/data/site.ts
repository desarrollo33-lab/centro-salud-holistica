export interface Service {
  slug: string;
  name: string;
  description: string;
  heroHeading: string;
  metaTitle: string;
  metaDescription: string;
  features: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  priceRange: string;
  commonIssues: string[];
  relatedServices: string[];
  icon: string;
  color: string;
}

export const services: Service[] = [
  {
    slug: "eliminacion-amalgamas",
    name: "Eliminación de Amalgamas",
    description: "Remoción segura de empastes de mercurio siguiendo el Protocolo IAOMT certificado. Protegemos tu cuerpo durante todo el procedimiento.",
    heroHeading: "Eliminación Segura de Amalgamas con Mercurio",
    metaTitle: "Eliminación de Amalgamas | Protocolo IAOMT — Centro de Salud Holística",
    metaDescription: "Remoción segura de empastes de mercurio con Protocolo IAOMT certificado. Esterilización, oxígeno nasal y protección total. Los Dominicos, Santiago.",
    features: [
      "Protocolo IAOMT certificado para remoción segura de mercurio",
      "Aislamiento con goma dique para máxima protección",
      "Oxígeno nasal durante todo el procedimiento",
      "Aspiración especializada de vapores mercuriales",
      "Test de biocompatibilidad para materiales de reemplazo",
      "Restauraciones de cerámica o composite biocompatible",
    ],
    process: [
      { step: "Evaluación previa", description: "Radiografías, evaluación del estado de las amalgamas e historial médico completo. Preparamos tu cuerpo con suplementos de soporte semanas antes." },
      { step: "Protocolo de seguridad", description: "Goma dique, oxígeno nasal, aspiración de vapores. Todo el equipo de protección personal especializado. Monitoreo constante." },
      { step: "Remoción cuidadosa", description: "Técnica de remoción mínima invasiva que evita el calor y la fragmentación. Cada amalgama se retira en bloques intactos." },
      { step: "Restauración biocompatible", description: "Reemplazo inmediato con cerámica o composite. Test de biocompatibilidad para garantizar que el material es compatible contigo." },
    ],
    faqs: [
      { question: "¿Es peligroso retirar las amalgamas?", answer: "Si se hace sin protocolo, sí. El mercurio puede liberarse como vapor durante el procedimiento convencional. El Protocolo IAOMT minimiza drásticamente la exposición: goma dique, oxígeno nasal y aspiración especializada hacen la diferencia." },
      { question: "¿Cuántas amalgamas se pueden retirar por sesión?", answer: "Generalmente 1-4 por sesión, dependiendo de tu historial médico y tolerancia. Evaluamos individualmente y siempre priorizamos tu seguridad." },
      { question: "¿Con qué se reemplazan las amalgamas?", answer: "Con restauraciones de cerámica o composite de alta estética y biocompatibilidad. No usamos materiales con metales pesados. El reemplazo se hace de inmediato, en la misma sesión." },
      { question: "¿Qué suplementos necesito antes del procedimiento?", answer: "Recomendamos vitamina C, selenio y glutatión para soportar el proceso de desintoxicación. Te entregamos un protocolo personalizado en la evaluación previa." },
    ],
    priceRange: "Desde $180.000 por amalgama",
    commonIssues: [
      "Exposición a vapores de mercurio durante remoción sin protocolo",
      "Sensibilidad metálica e inflamación crónica por metales pesados",
      "Filtración bajo empastes antiguos causando caries secundaria",
      "Deterioro estructural del diente por corrosión del amalgam",
    ],
    relatedServices: ["implantes-ceramicos", "odontologia-biomimetica", "ozonoterapia"],
    icon: "lucide:shield-check",
    color: "teal",
  },
  {
    slug: "implantes-ceramicos",
    name: "Implantes Cerámicos",
    description: "Implantes 100% libres de titanio. Cerámica de óxido de circonio biocompatible que se integra naturalmente con tu hueso, sin rechazo ni sensibilidad metálica.",
    heroHeading: "Implantes Cerámicos Sin Metales — Oxido de Circonio",
    metaTitle: "Implantes Cerámicos | Sin Titanio — Centro de Salud Holística",
    metaDescription: "Implantes de cerámica (óxido de circonio) 100% libres de titanio. Biocompatibles, estética natural y sin riesgo de corrosión. Los Dominicos, Santiago.",
    features: [
      "Implantes 100% libres de titanio y metales",
      "Cerámica de óxido de circonio de grado médico",
      "Integración natural con el hueso (osteointegración)",
      "Planificación digital con cirugía guiada por computadora",
      "Diseño de sonrisa digital previas al procedimiento",
      "Tasa de éxito comparable o superior al titanio",
    ],
    process: [
      { step: "Tomografía 3D", description: "Evaluación precisa del hueso disponible con escaneo 3D. Analizamos densidad, volumen y calidad ósea para planificar el procedimiento ideal." },
      { step: "Planificación digital", description: "Diseño digital del procedimiento con software de cirugía guiada. Puedes ver el resultado final antes de comenzar." },
      { step: "Colocación mínimamente invasiva", description: "Implante de cerámica en una sesión con anestesia local. Técnica flapless (sin incisiones) cuando es posible para mínima molestia." },
      { step: "Osteointegración y rehabilitación", description: "Periodo de 3-6 meses para integración con el hueso. Restauración provisional y finalmente corona de cerámica definitiva." },
    ],
    faqs: [
      { question: "¿Son igual de fuertes que los implantes de titanio?", answer: "Sí. Los implantes de cerámica tienen tasas de éxito comparables al titanio y en algunos estudios superiores en biocompatibilidad. La cerámica no se corroe y no genera sensibilidad metálica." },
      { question: "¿Cuánto cuesta un implante cerámico?", answer: "Cada caso es diferente según el número de implantes y la complejidad. Agenda una evaluación para un presupuesto personalizado. Los implantes cerámicos tienen un costo ligeramente superior al de titanio, pero sin los riesgos metálicos a largo plazo." },
      { question: "¿Puedo tener rechazo a un implante cerámico?", answer: "El rechazo a la cerámica es extremadamente raro. A diferencia del titanio, la cerámica no libera iones metálicos y no genera respuestas autoinmunes en pacientes sensibles." },
    ],
    priceRange: "Desde $900.000 por implante",
    commonIssues: [
      "Sensibilidad o rechazo al titanio en pacientes metálicos",
      "Corrosión de implantes metálicos con el tiempo",
      "Línea gris visible en encías con implantes de titanio",
      "Pérdida ósea por reacción inflamatoria a metales",
    ],
    relatedServices: ["eliminacion-amalgamas", "odontologia-biomimetica", "estetica-facial"],
    icon: "lucide:bone",
    color: "teal",
  },
  {
    slug: "odontologia-biomimetica",
    name: "Odontología Biomimética",
    description: "Conservación máxima del diente natural. Restauraciones que imitan exactamente la estructura y función del diente, sellando y protegiendo en lugar de cortar.",
    heroHeading: "Odontología Biomimética — Conserve Su Diente Natural",
    metaTitle: "Odontología Biomimética en Santiago | Conservación Máxima",
    metaDescription: "Odontología biomimética que conserva tu diente natural al máximo. Restauraciones de cerámica adheridas que imitan la estructura original. Los Dominicos.",
    features: [
      "Conservación máxima del tejido dentario sano",
      "Restauraciones de cerámica adheridas (inlays, onlays, carillas)",
      "Adhesivos que sellan y fortalecen el diente",
      "Eliminación mínima del tejido dental",
      "Previene tratamientos de conducto futuros",
      "Materiales testados para biocompatibilidad",
    ],
    process: [
      { step: "Diagnóstico preciso", description: "Evaluación detallada con cámara intraoral, radiografías y escaneo digital. Identificamos exactamente qué parte del diente necesita restauración." },
      { step: "Diseño digital de la restauración", description: "Planificación digital que minimiza la preparación. Puedes ver el diseño de tu restauración antes de empezar." },
      { step: "Restauración adhesiva", description: "Incrustaciones o carillas de cerámica pegadas al diente con adhesivos de última generación. El resultado sella, aísla y fortalece." },
      { step: "Resultado funcional y estético", description: "Tu diente recupera su forma, función y estética natural. No se nota la diferencia con los dientes vecinos." },
    ],
    faqs: [
      { question: "¿Qué es una restauración biomimética?", answer: "Es una restauración que imita la estructura natural del diente: esmalte, dentina y nervio. En lugar de cortar y tapar, sellamos y fortalecemos. La diferencia es que tu diente sigue vivo y funcional." },
      { question: "¿Cuánto duran las restauraciones biomiméticas?", answer: "Las restauraciones de cerámica bien mantenidas pueden durar décadas. Al sellar correctamente, impiden la filtración y la caries secundaria, que es la causa principal de fracaso de las restauraciones tradicionales." },
      { question: "¿Es mejor que una corona tradicional?", answer: "En la mayoría de los casos sí. La corona requiere cortar 60-70% del diente. La biomimética solo elimina lo dañado, conservando tu diente natural vivo y fuerte." },
    ],
    priceRange: "Desde $250.000 por restauración",
    commonIssues: [
      "Muerte del nervio por coronas que requieren corte excesivo",
      "Filtración y caries secundaria bajo restauraciones tradicionales",
      "Dientes debilitados que eventualmente se fracturan",
      "Sensibilidad térmica por falta de sellado hermético",
    ],
    relatedServices: ["implantes-ceramicos", "tratamiento-atm", "ozonoterapia"],
    icon: "lucide:gem",
    color: "teal",
  },
  {
    slug: "tratamiento-atm",
    name: "Tratamiento de ATM",
    description: "Dolor crónico de mandíbula, cabeza y cuello tiene solución. Enfoque integral con diagnóstico preciso, ortopedia, relajación muscular y terapia neural.",
    heroHeading: "Tratamiento de ATM — Sin Dolor Crónico de Mandíbula",
    metaTitle: "Tratamiento de ATM en Santiago | Dolor de Mandíbula y Cefaleas",
    metaDescription: "Tratamiento integral de la articulación temporomandibular (ATM). Dolor de mandíbula, cabeza, cuello y oídos. Enfoque multidisciplinario. Los Dominicos.",
    features: [
      "Diagnóstico integral de la mordida y la articulación",
      "Aparatos ortopédicos removibles para relajación muscular",
      "Terapia neural y desinflamatoria",
      "Rehabilitación postural integrada",
      "Seguimiento y ajuste durante todo el tratamiento",
      "Coordinación con otros especialistas si es necesario",
    ],
    process: [
      { step: "Diagnóstico completo", description: "Evaluamos la mordida, los músculos masticatorios, la articulación y la postura. Radiografías, scan de la mordida y análisis del movimiento." },
      { step: "Plan de tratamiento personalizado", description: "Diseñamos un protocolo específico para tu caso. Puede incluir aparato ortopédico, terapia manual, ejercicios y ajustes de la mordida." },
      { step: "Tratamiento activo", description: "Terapia con aparatos removibles, fisioterapia masticatoria, terapia neural y seguimiento estrecho. Ajustamos según la respuesta de tu cuerpo." },
      { step: "Estabilización", description: "Cuando el dolor cede, trabajamos en la estabilización de la mordida para prevenir recaídas. Evaluamos si se necesitan restauraciones definitivas." },
    ],
    faqs: [
      { question: "¿Cómo sé si mi dolor de cabeza es por la ATM?", answer: "Si tienes dolor de cabeza frecuente, especialmente al despertar, dolor detrás de los ojos, oídos tapados sin causa aparente, o chasquidos al abrir la boca, es muy probable que la ATM esté involucrada. Una evaluación específica lo confirma." },
      { question: "¿Cuánto dura el tratamiento?", answer: "La mayoría de los pacientes mejoran significativamente en 3-6 meses. Los casos crónicos pueden necesitar más tiempo. El seguimiento a largo plazo es parte del tratamiento." },
      { question: "¿El tratamiento incluye cirugía?", answer: "La gran mayoría de los casos se resuelven sin cirugía. Solo los casos severos con daño estructural avanzado requieren intervención quirúrgica. Siempre agotamos las opciones conservadoras primero." },
    ],
    priceRange: "Desde $120.000 por evaluación",
    commonIssues: [
      "Bruxismo y apretamiento que desgasta los dientes",
      "Dolores de cabeza crónicos sin causa neurológica",
      "Chasquidos y bloqueos al abrir la boca",
      "Dolor de cuello y hombros por tensión mandibular",
    ],
    relatedServices: ["odontologia-biomimetica", "acupuntura", "nutricion"],
    icon: "lucide:brain",
    color: "teal",
  },
  {
    slug: "ozonoterapia",
    name: "Ozonoterapia Dental",
    description: "El ozono médico tiene propiedades antimicrobianas de amplio espectro. Esterilización sin antibióticos, aceleración de la cicatrización y tratamiento de infecciones.",
    heroHeading: "Ozonoterapia Dental — Esterilización Natural Sin Antibióticos",
    metaTitle: "Ozonoterapia Dental en Santiago | Biocompatible y Efectiva",
    metaDescription: "Ozonoterapia dental para esterilización natural, tratamiento de encías y aceleración de la cicatrización. Sin antibióticos, sin efectos secundarios. Los Dominicos.",
    features: [
      "Propiedades antimicrobianas de amplio espectro",
      "Esterilización de canales radiculares sin antibióticos",
      "Tratamiento de periodontitis y encías sangrantes",
      "Aceleración de la cicatrización post-quirúrgica",
      "Tratamiento de aftas y herpes labial",
      "Aplicación indolora y biocompatible",
    ],
    process: [
      { step: "Diagnóstico del problema", description: "Evaluamos si hay infección activa, tipo de bacteria presente y extensión del daño. Seleccionamos la concentración y forma de aplicación del ozono." },
      { step: "Aplicación de ozono médico", description: "El ozono se aplica directamente en la zona afectada: encías, dientes, canales o herida quirúrgica. Es indoloro y no tiene efectos secundarios." },
      { step: "Resultado inmediato", description: "El ozono actúa en minutos eliminando bacterias, virus y hongos. Acelera la recuperación y reduce la inflamación de forma notable." },
    ],
    faqs: [
      { question: "¿Es seguro el ozono?", answer: "Sí. El ozono médico se aplica en concentraciones controladas y es completamente biocompatible. Es una de las sustancias más naturales y seguras usadas en medicina. No causa resistencia bacteriana como los antibióticos." },
      { question: "¿Para qué problemas sirve la ozonoterapia?", answer: "Tratamos encías sangrantes, periodontitis, aftas, herpes, canales infectados, heridas post-operatorias y más. Es especialmente útil cuando los antibióticos no son deseados o están contraindicados." },
    ],
    priceRange: "Desde $40.000 por sesión",
    commonIssues: [
      "Infección persistente que no responde a antibióticos",
      "Encías sangrantes crónicas (periodontitis)",
      "Cicatrización lenta después de extracciones",
      "Resistencia a antibióticos que complica tratamientos",
    ],
    relatedServices: ["tratamiento-atm", "eliminacion-amalgamas", "odontologia-biomimetica"],
    icon: "lucide:zap",
    color: "teal",
  },
  {
    slug: "ortodoncia-funcional",
    name: "Ortodoncia Biológica",
    description: "Ortodoncia que corrige la mordida y la estética dental con un enfoque que prioriza la función sobre la forma. Sin extracciones innecesarias, compatible con tu cuerpo.",
    heroHeading: "Ortodoncia Biológica e Invisalign en Santiago",
    metaTitle: "Ortodoncia Biológica en Santiago | Sin Extracciones Innecesarias",
    metaDescription: "Ortodoncia biológica e Invisalign en Santiago. Corrección de la mordida sin extracciones innecesarias. Enfoque biocompatible. Los Dominicos.",
    features: [
      "Ortodoncia sin extracciones innecesarias",
      "Sistema Invisalign disponible",
      "Ortodoncia fija biocompatible (brackets cerámicos)",
      "Corrección de la mordida, no solo estética",
      "Apoyo en respiración y postura",
      "Seguimiento integral durante todo el tratamiento",
    ],
    process: [
      { step: "Evaluación del crecimiento", description: "Analizamos el crecimiento maxilofacial, la mordida, los músculos y la postura. No solo alineamos dientes: evaluamos la función completa." },
      { step: "Plan de tratamiento", description: "Diseñamos un plan personalizado. Puede incluir Invisalign, brackets cerámicos o aparatos ortopédicos. Siempre priorizamos conservar dientes y lograr función óptima." },
      { step: "Tratamiento activo", description: "Alineadores o brackets según el plan. Ajustes mensuales y monitoreo del progreso. Incluye evaluación de la mordida en cada etapa." },
      { step: "Retención y estabilidad", description: "Cuando los dientes están alineados, usamos retenedores para mantener el resultado. Evaluamos la estabilidad a largo plazo." },
    ],
    faqs: [
      { question: "¿Hay Invisalign?", answer: "Sí. Evaluamos si eres candidato para alineadores transparentes. En muchos casos, Invisalign es la opción más cómoda y estética." },
      { question: "¿Por qué ortodoncia biológica?", answer: "La ortodoncia biológica evalúa la persona completa: mordida, postura, respiración y salud general. No solo alineamos dientes, buscamos armonía funcional de toda la boca." },
    ],
    priceRange: "Desde $1.200.000 (tratamiento completo)",
    commonIssues: [
      "Extracciones innecesarias recomendadas por ortodoncia convencional",
      " apiñamiento tratado sin resolver la causa (hábitos, respiración)",
      "Recidiva por falta de retención post-tratamiento",
    ],
    relatedServices: ["tratamiento-atm", "odontologia-biomimetica", "estetica-facial"],
    icon: "lucide:smile",
    color: "teal",
  },
  {
    slug: "estetica-facial",
    name: "Estética Facial",
    description: "Armonización facial mínima invasiva con toxina botulínica, ácido hialurónico y PRP. Trabajamos en conjunto con tu salud bucal para resultados naturales.",
    heroHeading: "Estética Facial — Armonización Mínima Invasiva",
    metaTitle: "Estética Facial en Santiago | Toxina Botulínica y Ácido Hialurónico",
    metaDescription: "Estética facial integrada: toxina botulínica, ácido hialurónico y PRP. Resultados naturales en armonía con tu salud bucal. Los Dominicos.",
    features: [
      "Toxina botulínica (Botox) para arrugas de expresión",
      "Ácido hialurónico para volumen y hidratación",
      "PRP (plasma rico en plaquetas) para rejuvenecimiento",
      "Materiales biocompatibles y testeados",
      "Coordinación con tratamientos dentales",
      "Evaluación facial completa previa",
    ],
    process: [
      { step: "Evaluación facial", description: "Analizamos tu rostro completo: expresión, volumen, simetría y relación con tu sonrisa. Diseñamos un plan de armonización que luce natural." },
      { step: "Planificación", description: "Definimos los puntos exactos, cantidades y productos. Priorizamos resultados sutiles que mantengan tu expresión natural." },
      { step: "Aplicación", description: "Procedimientos mínimos invasivos con materiales de primera calidad. El procedimiento es rápido, con mínimas molestias." },
    ],
    faqs: [
      { question: "¿Qué materiales usan?", answer: "Solo productos biocompatibles de primera línea, registrados y testeados. No usamos materiales genéricos o de origen dudoso." },
      { question: "¿Se puede combinar con tratamientos dentales?", answer: "Sí, de hecho lo recomendamos. La armonía entre tu sonrisa y tu rostro es parte de nuestro enfoque integral." },
    ],
    priceRange: "Desde $150.000 por zona",
    commonIssues: [
      "Arrugas de expresión que dan aspecto cansado",
      "Pérdida de volumen facial por edad o genética",
      "Sonrisa que no coincide con la expresión facial",
    ],
    relatedServices: ["implantes-ceramicos", "odontologia-biomimetica", "ortodoncia-funcional"],
    icon: "lucide:sparkles",
    color: "teal",
  },
  {
    slug: "nutricion",
    name: "Nutrición y Bienestar",
    description: "La nutrición es fundamental para la salud periodontal y la cicatrización. Orientación personalizada en alimentación antiinflamatoria y ancestral.",
    heroHeading: "Nutrición para la Salud Bucal — Alimentación Ancestral",
    metaTitle: "Nutrición y Bienestar | Salud Bucal y Alimentación Ancestral",
    metaDescription: "Orientación nutricional personalizada para la salud bucal. Alimentación antiinflamatoria y ancestral. Soporte para periodontitis y cicatrización. Los Dominicos.",
    features: [
      "Evaluación de hábitos alimentarios y salud bucal",
      "Plan de alimentación antiinflamatoria personalizado",
      "Alimentación ancestral y mediterránea",
      "Soporte nutricional para cicatrización post-operatoria",
      "Nutrición para periodontitis y encías",
      "Coordinación con tu equipo médico",
    ],
    process: [
      { step: "Evaluación nutricional", description: "Revisión de hábitos alimentarios, historial médico y su relación con tu salud bucal. Identificamos los cambios con mayor impacto." },
      { step: "Plan personalizado", description: "Diseño de un plan alimentario práctico, realista y adaptado a tu vida. No dietas extremas: cambios sostenibles que sostienen resultados." },
      { step: "Seguimiento", description: "Monitoreo del impacto en tu salud bucal. Ajustes según la respuesta de tus encías y tu bienestar general." },
    ],
    faqs: [
      { question: "¿Sirve para la periodontitis?", answer: "Sí. La periodontitis tiene un componente nutricional importante. Una alimentación antiinflamatoria reduce la inflamación crónica de las encías y apoya el tratamiento periodontal." },
    ],
    priceRange: "Desde $80.000 por evaluación",
    commonIssues: [
      "Periodontitis que no mejora solo con tratamiento local",
      "Inflamación crónica de encías por alimentación",
      "Cicatrización lenta después de cirugías",
    ],
    relatedServices: ["tratamiento-atm", "ozonoterapia", "acupuntura"],
    icon: "lucide:apple",
    color: "teal",
  },
  {
    slug: "acupuntura",
    name: "Acupuntura Dental",
    description: "Terapia complementaria que reduce la ansiedad dental, el dolor crónico y acelera la recuperación post-operatoria. Sesiones antes o después de procedimientos.",
    heroHeading: "Acupuntura Dental — Terapia Complementaria para Ansiedad y Dolor",
    metaTitle: "Acupuntura Dental en Santiago | Sin Ansiedad, Sin Dolor",
    metaDescription: "Acupuntura para ansiedad dental, dolor crónico y recuperación post-operatoria. Terapia complementaria integrada con tu tratamiento odontológico. Los Dominicos.",
    features: [
      "Reducción de ansiedad antes de procedimientos",
      "Control del dolor crónico sin medicamentos",
      "Aceleración de la recuperación post-operatoria",
      "Terapia para bruxismo y apretamiento",
      "Tratamiento de Neuralgia del trigémino",
      "Apoyo para dejar de fumar (salud bucal)",
    ],
    process: [
      { step: "Evaluación", description: "Revisión del historial médico, dental y de salud general. Identificamos los puntos de acupuntura con mayor efecto para tu caso." },
      { step: "Sesiones de tratamiento", description: "Tratamiento con acupuntura china clásica en consulta. Las sesiones son indoloras y relajantes, entre 30 y 45 minutos." },
      { step: "Seguimiento", description: "Monitoreo del efecto y ajustes. Para procedimientos específicos, programamos sesiones previas y posteriores." },
    ],
    faqs: [
      { question: "¿Funciona para la ansiedad dental?", answer: "Sí. La acupuntura reduce significativamente la ansiedad dental en la mayoría de los pacientes. Permite procedimientos sin estrés." },
      { question: "¿Es dolorosa la acupuntura?", answer: "No. Las agujas son extremadamente finas y su colocación es casi imperceptible. La mayoría de los pacientes se sienten profundamente relajados durante la sesión." },
    ],
    priceRange: "Desde $35.000 por sesión",
    commonIssues: [
      "Ansiedad dental extrema que evita ir al dentista",
      "Dolor crónico que no responde a analgésicos convencionales",
      "Recuperación lenta después de cirugías",
    ],
    relatedServices: ["tratamiento-atm", "ozonoterapia", "nutricion"],
    icon: "lucide:flower-2",
    color: "teal",
  },
];

export const siteConfig = {
  name: "Centro de Salud Holística Dr. Ipinza",
  shortName: "Centro de Salud Holística",
  url: "https://saludevolutiva.cl",
  doctor: "Dr. Joaquín Ipinza Hofmann",
  phone: "+56 9 XXXX XXXX",
  phoneTel: "+569XXXXXXXX",
  email: "contacto@saludevolutiva.cl",
  address: {
    street: "Los Dominicos, Las Condes",
    city: "Santiago",
    state: "Región Metropolitana",
    zip: "0000000",
    country: "CL",
  },
  geo: {
    latitude: -33.4031,
    longitude: -70.5329,
  },
  hours: [
    { day: "Lunes", hours: "9:00 AM - 6:00 PM" },
    { day: "Martes", hours: "9:00 AM - 6:00 PM" },
    { day: "Miércoles", hours: "9:00 AM - 6:00 PM" },
    { day: "Jueves", hours: "9:00 AM - 6:00 PM" },
    { day: "Viernes", hours: "9:00 AM - 6:00 PM" },
    { day: "Sábado", hours: "Cerrado" },
    { day: "Domingo", hours: "Cerrado" },
  ],
  openingHoursSchema: "Mo-Fr 09:00-18:00",
  stats: {
    yearsOfExperience: 20,
    patientsTreated: "5,000+",
    treatmentsCompleted: "12,000+",
    certifications: 8,
  },
  social: {
    instagram: "#",
    facebook: "#",
    youtube: "#",
  },
  certifications: [
    "Miembro — Sociedad de Periodoncia de Chile",
    "Miembro — Holistic Dental Association",
    "Miembro — Sociedad de Odontología Integrativa de Chile (SIOCH)",
    "Protocolo IAOMT Certificado",
    "Formación — Loma Linda University, California",
  ],
  usps: [
    { title: "100% Libre de Metales Pesados", description: "Eliminación segura de mercurio y uso exclusivo de materiales biocompatibles certificados." },
    { title: "Protocolo IAOMT Certificado", description: "Estandar internacional para remoción segura de amalgamas de mercurio." },
    { title: "Implantes Cerámicos (Sin Titanio)", description: "Oxido de circonio biocompatible que se integra naturalmente, sin riesgo de rechazo metálico." },
    { title: "Enfoque Integral", description: "Nutrición, acupuntura y ozonoterapia integrados con la odontología para resultados completos." },
    { title: "Consulta Sin Compromiso", description: "Te escuchamos, evaluamos y te presentamos las opciones. Sin presión, sin ventas forzadas." },
  ],
  bookTitle: "Salud Evolutiva",
  bookDescription: "129 páginas basadas en evidencia científica que explican por qué tenemos las enfermedades que tenemos — y qué hacer al respecto.",
} as const;

export function getServiceBySlug(slug: string) {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]) {
  return slugs.map((slug) => services.find((s) => s.slug === slug)).filter(Boolean) as Service[];
}
