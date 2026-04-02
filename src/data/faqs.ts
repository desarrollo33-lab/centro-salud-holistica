/**
 * FAQ data for guides, resources, and book chapters.
 * Used to generate SchemaFAQ (JSON-LD) for Google rich results.
 *
 * Each entry maps a content slug to an array of Q&A pairs.
 * These are extracted from the "Preguntas Frecuentes" sections in the markdown content.
 */

export interface FAQ {
  question: string;
  answer: string;
}

export const guideFaqs: Record<string, FAQ[]> = {
  "caries-prevencion-natural": [
    {
      question: "¿Las caries se pueden revertir de forma natural?",
      answer:
        "Existe evidencia de que corrigiendo deficiencias nutricionales es posible que las caries se remineralicen. Sin embargo, depende del estado de la lesión. No todas las caries son reversibles, especialmente las avanzadas. Es fundamental consultar con un profesional.",
    },
    {
      question: "¿El fluoruro es necesario para prevenir caries?",
      answer:
        "El fluoruro se ha usado durante décadas como medida preventiva. Sin embargo, según el Dr. Ipinza en su libro, el uso excesivo puede ser perjudicial. La prevención más efectiva viene de una buena alimentación y deficiencias nutricionales corregidas.",
    },
    {
      question: "¿Cómo sé si me falta vitamina K2?",
      answer:
        "No existen síntomas específicos de deficiencia de vitamina K2 identificables por uno mismo. La forma más segura es consultar con un profesional que pueda solicitar los análisis correspondientes.",
    },
    {
      question: "¿Los niños también pueden beneficiarse de estos conocimientos?",
      answer:
        "Absolutamente. La formación de los dientes y maxilares en la infancia es un período crítico donde los nutrientes adecuados juegan un papel fundamental para la salud bucal futura.",
    },
    {
      question: "¿Las bebidas deportivas y los jugos son perjudiciales para los dientes?",
      answer:
        "Muchas bebidas deportivas y jugos contienen cantidades significativas de azúcares y ácidos que dañan el esmalte dental. El agua sigue siendo la mejor opción para la buena hidratación y salud bucal.",
    },
  ],
  "enfermedad-periodontal-guia": [
    {
      question: "¿Cómo sé si tengo enfermedad periodontal?",
      answer:
        "Los signos más comunes incluyen encías que sangran al cepillar, encías rojas o hinchadas, mal aliento persistente, dientes que parecen más largos por retracción de encías, y dientes que se mueven. La única forma de confirmar es mediante un examen dental profesional.",
    },
    {
      question: "¿La enfermedad periodontal se puede curar?",
      answer:
        "La gingivitis (etapa inicial) es reversible con buena higiene y limpieza profesional. La periodontitis con pérdida ósea no se revierte completamente, pero el tratamiento puede detener su progresión y controlar los síntomas.",
    },
    {
      question: "¿Cómo afecta la alimentación a la salud de las encías?",
      answer:
        "La alimentación moderna rica en carbohidratos refinados crea un ambiente propicio para bacterias periodontales. Deficiencias de vitaminas K2, D y C debilitan los tejidos. Una dieta rica en frutas, verduras y proteínas de calidad mantiene encías saludables.",
    },
    {
      question: "¿Cuál es la conexión entre enfermedad periodontal y enfermedades del corazón?",
      answer:
        "La inflamación crónica de las encías permite que bacterias entren al torrente sanguíneo y alcancen las arterias, promoviendo aterosclerosis. Personas con enfermedad periodontal tienen mayor riesgo de infarto y accidente cerebrovascular.",
    },
    {
      question: "¿Con qué frecuencia debo ir al dentista para prevenir la enfermedad periodontal?",
      answer:
        "Se recomienda al menos dos veces al año para exámenes y limpiezas. Si tienes factores de riesgo como diabetes o fumas, pueden ser necesarias visitas más frecuentes.",
    },
  ],
  "estres-y-salud-dental": [
    {
      question: "¿Cómo sé si mi bruxismo está relacionado con el estrés?",
      answer:
        "Si aprietas o rechinas los dientes durante la noche, experimentas dolores de cabeza matutinos, mandíbula fatigada o desgaste visible en los dientes, es probable que el estrés esté contribuyendo. Un odontólogo puede confirmar el diagnóstico.",
    },
    {
      question: "¿Puede una mala alimentación empeorar las encías?",
      answer:
        "Sí. Dietas ricas en azúcares y ultraprocesados favorecen la placa bacteriana y la inflamación gingival. Una alimentación rica en vegetales crudos, frutas enteras y antioxidantes ayuda a mantener encías saludables.",
    },
    {
      question: "¿La vitamina D realmente influye en la salud periodontal?",
      answer:
        "Diversos estudios muestran que niveles adecuados de vitamina D mejoran la absorción de calcio y modulan la respuesta inmune, reduciendo la severidad de la periodontitis.",
    },
    {
      question: "¿Cuáles son las técnicas de relajación más efectivas para reducir el bruxismo?",
      answer:
        "La respiración diafragmática, la meditación mindfulness y el yoga han demostrado disminuir la actividad muscular mandibular y los niveles de cortisol, reduciendo el bruxismo nocturno.",
    },
    {
      question: "¿Con qué frecuencia debo ir al dentista si estoy bajo mucho estrés?",
      answer:
        "Se recomienda al menos dos visitas anuales. Si experimentas sangrado gingival, dolor mandibular o aftas recurrentes, incrementa las consultas a cada 3-4 meses.",
    },
  ],
  "nutricion-para-dientes-sanos": [
    {
      question: "¿Puedo obtener suficiente calcio sin consumir lácteos?",
      answer:
        "Sí. Fuentes vegetales como brócoli, col rizada, tofu con calcio, sardinas con espinas y semillas de sésamo proporcionan calcio biodisponible. La vitamina D adecuada potencia su absorción.",
    },
    {
      question: "¿Los jugos de frutas son recomendables para la salud dental?",
      answer:
        "Los jugos, incluso naturales, carecen de fibra y contienen azúcares concentrados que favorecen la caries. Es preferible comer la fruta entera para aprovechar la fibra y limitar el impacto ácido sobre el esmalte.",
    },
    {
      question: "¿Qué papel juegan los probióticos en la salud de las encías?",
      answer:
        "Ciertas cepas como Lactobacillus reuteri han demostrado reducir la profundidad de bolsa periodontal y el sangrado gingival en estudios clínicos. Deben usarse como complemento, no como sustituto de la higiene oral.",
    },
    {
      question: "¿Es necesario tomar suplementos de vitamina D si ya tomo sol?",
      answer:
        "Si vives en latitudes con escasa irradiación solar o usas protector solar de alta SPF constantemente, podrías tener niveles insuficientes. Un análisis de sangre indicará si necesitas suplementación.",
    },
    {
      question: "¿Cómo puedo aplicar la dieta evolutiva sin gastar mucho?",
      answer:
        "Compra verduras de temporada y congeladas, elige huevos y pollo en lugar de carnes rojas costosas, incorpora especias (económico y potente), y cocina en casa para controlar ingredientes.",
    },
  ],
  "vitamina-k2-guia-completa": [
    {
      question: "¿Es segura la vitamina K2 durante el embarazo?",
      answer:
        "Las necesidades nutricionales aumentan durante el embarazo y la vitamina K2 puede ser importante para el desarrollo óseo del feto. Sin embargo, cualquier suplementación debe ser discutida con el obstetra.",
    },
    {
      question: "¿Puede la vitamina K2 ayudar a revertir la caries dental?",
      answer:
        "La vitamina K2 contribuye a la mineralización de los dientes y puede apoyar la remineralización natural. No debe considerarse un tratamiento para caries establecidas, sino parte de una estrategia preventiva.",
    },
    {
      question: "¿Cuánto tiempo tarda en notarse algún efecto de la suplementación?",
      answer:
        "Los efectos sobre la salud ósea y dental suelen observarse después de varios meses de consumo consistente. Los parámetros de coagulación pueden modificarse más rápidamente.",
    },
    {
      question: "¿Los niños pueden beneficiarse de la vitamina K2?",
      answer:
        "Sí, los niños en crecimiento pueden beneficiarse, especialmente durante períodos de rápido desarrollo. Las dosis deben ser apropiadas para su edad y peso. Consulta con el pediatra antes de dar suplementos.",
    },
    {
      question: "¿Qué cantidad de vitamina K2 se recomienda diariamente?",
      answer:
        "No existe una ingesta diaria recomendada universalmente aceptada. Algunos expertos sugieren entre 100 y 200 microgramos diarios de MK-7 para adultos, pero puede variar según el contexto individual.",
    },
  ],
};

export const toolFaqs: Record<string, FAQ[]> = {
  "checklist-retiro-amalgamas": [
    {
      question: "¿Por qué es importante prepararse antes del retiro de amalgamas?",
      answer:
        "El protocolo de preparación reduce la exposición al mercurio durante el procedimiento. Incluye suplementación con vitamina C, selenio y glutatión semanas antes del retiro.",
    },
    {
      question: "¿Cuántas amalgamas se pueden retirar por sesión?",
      answer:
        "Generalmente 1-4 por sesión, dependiendo del historial médico y tolerancia. Se evalúa individualmente priorizando la seguridad.",
    },
  ],
  "checklist-embarazo-dental": [
    {
      question: "¿Es seguro ir al dentista durante el embarazo?",
      answer:
        "Sí, las visitas de control y limpiezas son seguras y recomendadas. El segundo trimestre es el período ideal para tratamientos electivos.",
    },
    {
      question: "¿El embarazo afecta la salud dental?",
      answer:
        "Los cambios hormonales pueden aumentar el riesgo de gingivitis y caries. Es importante mantener una buena higiene bucal y visitar al dentista regularmente.",
    },
  ],
};

export const chapterFaqs: Record<string, FAQ[]> = {
  "capitulo-1": [
    {
      question: "¿Qué es el Trípode de la Salud?",
      answer:
        "El Trípode de la Salud es el concepto central del Dr. Ipinza: nutrición adecuada, sueño reparador y manejo del estrés son los tres pilares fundamentales para la salud bucal y general.",
    },
    {
      question: "¿Por qué los cazadores-recolectores tenían dientes sanos sin cepillarse?",
      answer:
        "Su dieta era rica en nutrientes esenciales (vitamina K2, D, minerales), baja en azúcares refinados, y su estilo de vida incluía actividad física regular y baja exposición al estrés crónico.",
    },
  ],
  "capitulo-2": [
    {
      question: "¿Qué es la boca como ecosistema?",
      answer:
        "La boca alberga más de 700 especies de bacterias que viven en equilibrio. Cuando este equilibrio se rompe por dieta pobre o estrés, aparecen enfermedades como caries y periodontitis.",
    },
  ],
  "capitulo-3": [
    {
      question: "¿Cómo se relaciona la nutrición con la salud dental?",
      answer:
        "Los dientes necesitan vitaminas K2, D, A, minerales y proteínas para mantenerse fuertes. Una deficiencia nutricional debilita el esmalte, las encías y el hueso que soporta los dientes.",
    },
  ],
  "capitulo-4": [
    {
      question: "¿Qué papel juega el sueño en la salud dental?",
      answer:
        "Durante el sueño el cuerpo regenera tejidos, produce hormonas de crecimiento y reduce la inflamación. La privación de sueño aumenta el cortisol, debilita las encías y favorece el bruxismo.",
    },
  ],
  "capitulo-5": [
    {
      question: "¿Cómo afecta el estrés a la boca?",
      answer:
        "El estrés crónico aumenta el cortisol, que debilita el sistema inmune y favorece la inflamación periodontal. También causa bruxismo (rechinar dientes), boca seca y alters la microbiota oral.",
    },
  ],
};

export function getFaqs(type: "guide" | "tool" | "chapter", slug: string): FAQ[] {
  switch (type) {
    case "guide":
      return guideFaqs[slug] || [];
    case "tool":
      return toolFaqs[slug] || [];
    case "chapter":
      return chapterFaqs[slug] || [];
  }
}
