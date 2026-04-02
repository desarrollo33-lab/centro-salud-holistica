/**
 * Programmatic SEO: Symptom/Condition pages
 *
 * These pages target long-tail searches like:
 *   "dolor de mandibula santiago"
 *   "caries dental tratamiento natural"
 *   "bruxismo dentista santiago"
 *
 * Each page maps a symptom → relevant services + guide + FAQ
 * and generates a full static page with proper schema markup.
 */

export interface SymptomPage {
  slug: string;
  /** H1 and title keyword */
  symptom: string;
  /** Short meta description */
  description: string;
  /** H2 section: what is this condition */
  explanation: string;
  /** H2 section: how we treat it */
  treatment: string;
  /** Related service slugs */
  services: string[];
  /** Related guide slug */
  guide?: string;
  /** Related tool/resource slug */
  tool?: string;
  /** FAQs specific to this symptom */
  faqs: { question: string; answer: string }[];
  /** CTA text */
  cta: string;
}

export const symptomPages: SymptomPage[] = [
  {
    slug: "dolor-de-mandibula",
    symptom: "Dolor de Mandíbula",
    description:
      "Dolor de mandíbula, chasquidos al abrir la boca y cefaleas matutinas. Tratamiento integral de ATM en Santiago con enfoque biológico.",
    explanation:
      "El dolor de mandíbula suele estar causado por disfunción de la articulación temporomandibular (ATM), bruxismo nocturno, o desalineación de la mordida. El estrés crónico es un factor frecuente que agrava el problema. Si sientes dolor al masticar, abrir la boca o hablar, es importante evaluar la causa raíz antes de que el daño sea irreversible.",
    treatment:
      "En el Centro de Salud Evolutiva evaluamos la mordida, los músculos masticatorios y la postura de forma integral. Usamos aparatos ortopédicos removibles, terapia neural, y coordinamos con fisioterapia cuando es necesario. El objetivo no es solo eliminar el dolor, sino corregir la causa.",
    services: ["tratamiento-atm", "acupuntura"],
    guide: "estres-y-salud-dental",
    tool: "guia-manejo-estres",
    faqs: [
      {
        question: "¿El dolor de mandíbula puede ser por estrés?",
        answer:
          "Sí. El estrés causa bruxismo (apretar o rechinar dientes) que fatiga los músculos masticatorios y genera dolor. El cortisol también aumenta la inflamación articular.",
      },
      {
        question: "¿Necesito cirugía para el dolor de mandíbula?",
        answer:
          "En la gran mayoría de los casos no. Los tratamientos conservadores con aparatos ortopédicos, terapia y ajustes de la mordida resuelven el problema sin cirugía.",
      },
      {
        question: "¿Cuánto dura el tratamiento de ATM?",
        answer:
          "La mayoría de los pacientes mejoran significativamente en 3-6 meses. Los casos crónicos pueden requerir más tiempo con seguimiento a largo plazo.",
      },
    ],
    cta: "Agenda una evaluación de ATM sin compromiso",
  },
  {
    slug: "amalgamas-de-mercurio",
    symptom: "Amalgamas de Mercurio",
    description:
      "Retiro seguro de amalgamas de mercurio con Protocolo IAOMT certificado en Santiago. Elimina metales pesados de tu cuerpo de forma protegida.",
    explanation:
      "Las amalgamas de mercurio (empastes plateados) contienen aproximadamente 50% de mercurio, un metal pesado tóxico. Con el tiempo pueden filtrar vapores de mercurio que se absorben por los pulmones y se acumulan en el cuerpo. Muchos pacientes reportan mejoras en fatiga crónica, dolores de cabeza y sensibilidades después del retiro.",
    treatment:
      "Seguimos el Protocolo IAOMT completo: aislamiento con goma dique, oxígeno nasal durante el procedimiento, aspiración especializada de vapores, y reemplazo inmediato con materiales biocompatibles (cerámica o composite). Preparamos tu cuerpo con suplementos de soporte semanas antes.",
    services: ["eliminacion-amalgamas", "ozonoterapia"],
    guide: "caries-prevencion-natural",
    tool: "checklist-retiro-amalgamas",
    faqs: [
      {
        question: "¿Es peligroso retirar las amalgamas?",
        answer:
          "Si se hace sin protocolo, sí. El Protocolo IAOMT minimiza drásticamente la exposición con goma dique, oxígeno nasal y aspiración especializada.",
      },
      {
        question: "¿Cuántas amalgamas se pueden retirar por sesión?",
        answer:
          "Generalmente 1-4 por sesión, dependiendo de tu historial médico y tolerancia. Siempre priorizamos la seguridad.",
      },
      {
        question: "¿Con qué se reemplazan?",
        answer:
          "Con restauraciones de cerámica o composite biocompatible. No usamos materiales con metales pesados. El reemplazo es inmediato en la misma sesión.",
      },
    ],
    cta: "Consulta tu caso de amalgamas sin compromiso",
  },
  {
    slug: "caries-dental",
    symptom: "Caries Dental",
    description:
      "Caries dental: causas reales más allá del azúcar, prevención natural y tratamiento biomimético que conserva tu diente. Santiago.",
    explanation:
      "La caries es una enfermedad multifactorial. Más allá del azúcar, las deficiencias nutricionales (vitamina K2, D, minerales), la dieta alta en ultraprocesados y la flora oral desequilibrada son causas fundamentales. Los cazadores-recolectores casi no tenían caries a pesar de no cepillarse.",
    treatment:
      "Nuestro enfoque combina odontología biomimética (conservar el diente natural al máximo) con orientación nutricional personalizada. Tratamos la caries con materiales biocompatibles que sellan y fortalecen el diente, y te ayudamos a corregir las deficiencias que causaron el problema.",
    services: ["odontologia-biomimetica", "nutricion", "ozonoterapia"],
    guide: "caries-prevencion-natural",
    faqs: [
      {
        question: "¿Se pueden revertir las caries de forma natural?",
        answer:
          "Las caries incipientes pueden remineralizarse corrigiendo deficiencias nutricionales. Las caries avanzadas requieren tratamiento dental profesional.",
      },
      {
        question: "¿Qué es la odontología biomimética?",
        answer:
          "Es un enfoque que conserva el diente natural al máximo, usando restauraciones que imitan la estructura original del diente en lugar de coronas que requieren cortar 60-70% del tejido.",
      },
    ],
    cta: "Agenda una evaluación de caries sin compromiso",
  },
  {
    slug: "encias-sangrantes",
    symptom: "Encías Sangrantes",
    description:
      "Encías sangrantes, inflamadas o retraídas. Tratamiento periodontal integral con enfoque biológico en Santiago. Detén la enfermedad a tiempo.",
    explanation:
      "Las encías que sangran al cepillar son la señal más común de gingivitis o periodontitis. Esto no es normal y indica inflamación activa. La enfermedad periodontal no solo afecta la boca: se conecta con mayor riesgo de infarto, diabetes y complicaciones del embarazo.",
    treatment:
      "Combinamos tratamiento periodontal convencional con ozonoterapia para esterilización sin antibióticos, nutrición antiinflamatoria personalizada, y seguimiento estrecho. No solo tratamos el síntoma: atacamos la inflamación sistémica que lo causa.",
    services: ["tratamiento-atm", "nutricion", "ozonoterapia"],
    guide: "enfermedad-periodontal-guia",
    tool: "autoevaluacion-salud-bucal",
    faqs: [
      {
        question: "¿Es normal que sangren las encías al cepillar?",
        answer:
          "No. El sangrado indica inflamación activa. Con una buena higiene y tratamiento adecuado, las encías deben dejar de sangrar.",
      },
      {
        question: "¿La enfermedad de las encías afecta el corazón?",
        answer:
          "Sí. La inflamación crónica de las encías permite que bacterias entren al torrente sanguíneo, promoviendo aterosclerosis y aumentando el riesgo cardiovascular.",
      },
    ],
    cta: "Evalúa la salud de tus encías sin compromiso",
  },
  {
    slug: "bruxismo-rechinar-dientes",
    symptom: "Bruxismo",
    description:
      "Bruxismo: rechinar o apretar los dientes por estrés. Tratamiento con aparatos ortopédicos, acupuntura y manejo del estrés en Santiago.",
    explanation:
      "El bruxismo es el apretamiento o rechinar de dientes, generalmente durante el sueño. Está directamente relacionado con el estrés crónico y la ansiedad. Puede causar desgaste dental severo, dolor de mandíbula, cefaleas matutinas y fracturas de dientes. Muchas personas no saben que lo hacen hasta que el desgaste es visible.",
    treatment:
      "Tratamos el bruxismo de forma integral: aparatos ortopédicos para proteger los dientes, acupuntura para reducir la tensión muscular y el estrés, y evaluación de la mordida para corregir desalineaciones que contribuyen al problema.",
    services: ["tratamiento-atm", "acupuntura"],
    guide: "estres-y-salud-dental",
    tool: "guia-manejo-estres",
    faqs: [
      {
        question: "¿El bruxismo tiene cura?",
        answer:
          "Se puede controlar eficazmente con una combinación de aparatos ortopédicos, manejo del estrés y corrección de la mordida. La mayoría de los pacientes logran eliminar el dolor y prevenir más desgaste.",
      },
      {
        question: "¿La acupuntura sirve para el bruxismo?",
        answer:
          "Sí. La acupuntura reduce la actividad muscular mandibular, disminuye los niveles de cortisol y promueve la relajación. Muchos pacientes reportan mejora significativa.",
      },
    ],
    cta: "Evalúa tu bruxismo sin compromiso",
  },
  {
    slug: "sensibilidad-dental",
    symptom: "Sensibilidad Dental",
    description:
      "Sensibilidad dental al frío, calor o dulce. Causas reales y tratamiento biomimético que sella y protege tu diente. Santiago.",
    explanation:
      "La sensibilidad dental puede tener muchas causas: esmalte desgastado, encías retraídas, filtración bajo restauraciones antiguas, o abrasión por cepillado agresivo. No es algo que debas 'aguantar': indica que el diente está expuesto y vulnerable a caries e infecciones.",
    treatment:
      "Identificamos la causa exacta con diagnóstico digital. Tratamos con odontología biomimética (sellado del diente con materiales adhesivos), ozonoterapia para reducir la sensibilidad, y corregimos hábitos que causan el desgaste.",
    services: ["odontologia-biomimetica", "ozonoterapia"],
    guide: "nutricion-para-dientes-sanos",
    faqs: [
      {
        question: "¿La sensibilidad dental se puede curar?",
        answer:
          "Sí, en la mayoría de los casos. Sellando la zona expuesta con materiales biomiméticos y corrigiendo la causa (cepillado, dieta, bruxismo) se elimina la sensibilidad.",
      },
    ],
    cta: "Agenda una evaluación dental sin compromiso",
  },
  {
    slug: "implantes-sin-titanio",
    symptom: "Implantes sin Titanio",
    description:
      "Implantes dentales de cerámica (óxido de circonio) 100% libres de titanio. Para pacientes sensibles a metales. Santiago, Chile.",
    explanation:
      "Algunas personas desarrollan sensibilidad o reacción al titanio usado en implantes convencionales. Los implantes cerámicos de óxido de circonio son una alternativa biocompatible que se integra naturalmente con el hueso, sin liberar iones metálicos y sin generar respuestas inmunes.",
    treatment:
      "Planificamos con tomografía 3D y cirugía guiada por computadora. El procedimiento es mínimamente invasivo y puede realizarse con técnica flapless (sin incisiones). Tras 3-6 meses de osteointegración, colocamos la corona de cerámica definitiva.",
    services: ["implantes-ceramicos", "eliminacion-amalgamas"],
    faqs: [
      {
        question: "¿Son igual de fuertes que los de titanio?",
        answer:
          "Sí. Los implantes cerámicos tienen tasas de éxito comparables al titanio. La cerámica no se corroe y no genera sensibilidad metálica.",
      },
      {
        question: "¿Puedo cambiar mis implantes de titanio por cerámica?",
        answer:
          "Depende del caso. Agenda una evaluación con tomografía 3D para evaluar la viabilidad de cambiar tus implantes existentes.",
      },
    ],
    cta: "Consulta sobre implantes cerámicos sin compromiso",
  },
  {
    slug: "salud-dental-embarazo",
    symptom: "Salud Dental en el Embarazo",
    description:
      "Cuidado dental seguro durante el embarazo. Gingivitis gestacional, caries y prevención para mamá y bebé. Santiago.",
    explanation:
      "Los cambios hormonales del embarazo aumentan el riesgo de gingivitis, caries y movilidad dental. La salud bucal materna afecta directamente al desarrollo del bebé: la periodontitis severa se asocia con parto prematuro y bajo peso al nacer.",
    treatment:
      "Ofrecemos limpiezas y controles seguros durante el embarazo, orientación nutricional para madre e hijo, y tratamientos con materiales biocompatibles. El segundo trimestre es el período ideal para procedimientos electivos.",
    services: ["nutricion", "odontologia-biomimetica"],
    guide: "nutricion-para-dientes-sanos",
    tool: "checklist-embarazo-dental",
    faqs: [
      {
        question: "¿Es seguro ir al dentista durante el embarazo?",
        answer:
          "Sí. Los controles y limpiezas son seguros y recomendados. El segundo trimestre es ideal para tratamientos electivos.",
      },
      {
        question: "¿La salud dental de la madre afecta al bebé?",
        answer:
          "Sí. La periodontitis severa se asocia con parto prematuro y bajo peso al nacer. Las bacterias orales pueden transmitirse al bebé.",
      },
    ],
    cta: "Agenda un control dental seguro durante tu embarazo",
  },
];
