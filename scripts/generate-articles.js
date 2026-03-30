import PocketBase from 'pocketbase';

const PB_URL = 'http://64.176.16.231:8090';
const ADMIN_EMAIL = 'admin@centro-salud.cl';
const ADMIN_PASSWORD = 'NuevaSalud2026!';

const TOPICS = {
  'evolucion-cultural-vs-natural': [
    'La evolucion no va al ritmo de nuestra civilizacion',
    'Como la agricultura transformo nuestra salud bucal',
    'El discrepancy cuando lo moderno daña lo antiguo'
  ],
  'enfermedades-orales-como-enfermedades-de-civilizacion': [
    'Caries una enfermedad de civilizacion no inevitable',
    'Enfermedad periodontal la pandemia silenciosa',
    'Como los alimentos procesados afectan tus dientes'
  ],
  'el-tripode-de-la-salud': [
    'Los tres pilares de la salud holistica',
    'Por que la nutricion es tu primera medicina',
    'Sueno estres y su impacto en tu boca'
  ],
  'que-hacer-tratamientos': [
    'Tratamientos biologicos una nueva era',
    'Como elegir un dentista holistico',
    'Lo que nadie te cuenta sobre los implantes'
  ]
};

function generateExcerpt(title) {
  return 'Artículo sobre ' + title + ' basado en el libro "Salud Evolutiva" del Dr. Ipinza.';
}

function generateContent(topic, chapterSlug) {
  const templates = {
    caries: '\n## ¿Qué son las caries?\n\nLas caries son uno de los problemas de salud más comunes. Pero nuestros ancestros apenas las padecían.\n\n### La perspectiva evolutiva\n\nDurante millones de años, nuestros dientes evolucionaron para procesar alimentos naturales.\n\n### Factores clave\n\n1. **Alimentación**: Los azúcares refinados alimentan bacterias\n2. **Minerales**: La falta de minerales debilita el esmalte\n3. **Saliva**: Una boca seca no puede neutralizar\n\n### Prevención natural\n\n- Minimiza azúcares y carbohidratos refinados\n- Asegura suficiente vitamina K2 y minerales\n',
    periodontal: '\n## Enfermedad Periodontal\n\nLa enfermedad de las encías afecta a más del 50% de la población adulta.\n\n### ¿Qué es la enfermedad periodontal?\n\nEs una infección crónica de las encías que puede llevar a la pérdida de dientes.\n\n### Enfoque holístico\n\n1. Tratar la causa, no solo los síntomas\n2. Nutrición con vitamina C\n3. Higiene suave\n',
    estilo: '\n## Estrés y Salud Dental\n\n¿Bruxismo? ¿Encías que sangran? Podría estar relacionado con tu nivel de estrés.\n\n### Cómo el estrés afecta tu boca\n\n1. **Bruxismo**: El rechinar de dientes\n2. **Encías**: El estrés crónico debilita\n3. **Saliva**: El estrés reduce la producción\n\n### Estrategias de manejo\n\n- Técnicas de respiración\n- Ejercicio regular\n- Horarios de sueño consistentes\n',
    nutricion: '\n## Nutrición para Dientes Sanos\n\nSomos lo que comemos.\n\n### Los minerales clave\n\n1. **Calcio**: Fundamental para dientes fuertes\n2. **Vitamina D**: Necesaria para absorber el calcio\n3. **Vitamina K2**: Dirige el calcio hacia los huesos\n\n### Alimentos que fortalecen\n\n- Verduras de hoja verde oscuro\n- Lácteos orgánicos\n- Huesos carnosos y caldos\n'
  };

  if (topic.toLowerCase().includes('caries')) return templates.caries;
  if (topic.toLowerCase().includes('periodontal') || topic.toLowerCase().includes('encias')) return templates.periodontal;
  if (topic.toLowerCase().includes('estilo') || topic.toLowerCase().includes('estres')) return templates.estilo;
  return templates.nutricion;
}

async function main() {
  console.log('Iniciando generación de artículos...');

  const pb = new PocketBase(PB_URL);
  
  try {
    await pb.admins.authWithPassword(ADMIN_EMAIL, ADMIN_PASSWORD);
    console.log('Conectado a PocketBase');

    const chapters = await pb.collection('chapters').getFullList({
      filter: 'status = "published"'
    });
    console.log('Capítulos encontrados:', chapters.length);

    let articlesCreated = 0;
    
    for (const [slug, topics] of Object.entries(TOPICS)) {
      const chapter = chapters.find(c => c.slug === slug);
      if (!chapter) continue;

      for (const topic of topics) {
        const slugified = topic.toLowerCase()
          .replace(/[¿?¡!]/g, '')
          .replace(/\s+/g, '-')
          .substring(0, 50);

        const article = {
          title: topic,
          slug: slugified + '-' + Date.now(),
          content_markdown: generateContent(topic, slug),
          excerpt: generateExcerpt(topic),
          author_type: 'automated',
          topic: slug,
          tags: [chapter.title, 'salud bucal', 'odontología holística'],
          status: 'draft',
          published_at: new Date().toISOString()
        };

        try {
          const record = await pb.collection('blog').create(article);
          console.log('Creado:', topic);
          articlesCreated++;
        } catch (e) {
          if (e.data?.data?.slug?.code === 'validation_not_unique') {
            console.log('Ya existe:', topic);
          } else {
            console.log('Error:', e.message);
          }
        }
      }
    }

    console.log('Proceso completado. Artículos creados:', articlesCreated);

  } catch (e) {
    console.error('Error:', e.message);
    process.exit(1);
  }
}

main();
