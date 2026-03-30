"""
Build all pages for Centro de Salud Holistica
"""
import os

BASE = r"C:/Users/56930/OneDrive/Escritorio/centro_build"
os.makedirs(f"{BASE}/pages/servicios", exist_ok=True)

# ── SERVICIOS INDEX ────────────────────────────────────────────────────────
servicios_index = r"""---
import Layout from "../../layouts/Layout.astro";
---

<Layout title="Servicios — Centro de Salud Holistica" description="17 tratamientos de odontologia holistica y biologica en Santiago: eliminacion de amalgamas, implantes ceramicoss, biomimetica, ATM, ozonoterapia y mas.">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 py-14">
    <nav class="text-sm text-neutral-500 mb-8 flex items-center gap-1.5">
      <a href="/" class="hover:text-teal-700 no-underline text-neutral-500">Inicio</a>
      <span class="text-neutral-300">›</span>
      <span class="text-neutral-800 font-medium">Servicios</span>
    </nav>

    <h1 class="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">Servicios clinicos</h1>
    <p class="text-neutral-500 text-lg mb-12 max-w-2xl">Tratamientos diseados para tu biocompatibilidad. Todos los procedimientos se realizan con materiales libres de metales pesados y un enfoque que considera tu salud completa.</p>

    <div class="grid sm:grid-cols-2 gap-5">
      <a href="/servicios/eliminacion-amalgamas" class="card-hover block bg-white rounded-xl p-6 border border-neutral-200 hover:border-teal-300 hover:shadow-md transition-all no-underline group">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors"><span class="text-xl">⚕️</span></div>
          <div>
            <h2 class="font-heading font-semibold text-lg text-neutral-900 group-hover:text-teal-700 transition-colors">Eliminacion de Amalgamas</h2>
            <p class="text-sm text-neutral-500 mt-1">Protocolo IAOMT certificado para remocion segura de empastes con mercurio.</p>
            <span class="inline-block mt-2 text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">Protocolo IAOMT</span>
          </div>
        </div>
      </a>

      <a href="/servicios/implantes-ceramicos" class="card-hover block bg-white rounded-xl p-6 border border-neutral-200 hover:border-teal-300 hover:shadow-md transition-all no-underline group">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors"><span class="text-xl">🦴</span></div>
          <div>
            <h2 class="font-heading font-semibold text-lg text-neutral-900 group-hover:text-teal-700 transition-colors">Implantes Ceramicoss</h2>
            <p class="text-sm text-neutral-500 mt-1">Implantes 100% libres de titanio. Ceramica biocompatible para integracion natural.</p>
            <span class="inline-block mt-2 text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">Sin metales</span>
          </div>
        </div>
      </a>

      <a href="/servicios/odontologia-biomimetica" class="card-hover block bg-white rounded-xl p-6 border border-neutral-200 hover:border-teal-300 hover:shadow-md transition-all no-underline group">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors"><span class="text-xl">✨</span></div>
          <div>
            <h2 class="font-heading font-semibold text-lg text-neutral-900 group-hover:text-teal-700 transition-colors">Odontologia Biomimetica</h2>
            <p class="text-sm text-neutral-500 mt-1">Conservacion maxima del diente natural. Restauraciones que imitan la estructura original.</p>
            <span class="inline-block mt-2 text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">Conservative</span>
          </div>
        </div>
      </a>

      <a href="/servicios/tratamiento-atm" class="card-hover block bg-white rounded-xl p-6 border border-neutral-200 hover:border-teal-300 hover:shadow-md transition-all no-underline group">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors"><span class="text-xl">💆</span></div>
          <div>
            <h2 class="font-heading font-semibold text-lg text-neutral-900 group-hover:text-teal-700 transition-colors">Tratamiento de ATM</h2>
            <p class="text-sm text-neutral-500 mt-1">Dolor de mandibula, cabeza y cuello. Ortopedia, relajacion muscular y terapia neural.</p>
            <span class="inline-block mt-2 text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">Dolor cronico</span>
          </div>
        </div>
      </a>

      <a href="/servicios/ozonoterapia" class="card-hover block bg-white rounded-xl p-6 border border-neutral-200 hover:border-teal-300 hover:shadow-md transition-all no-underline group">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors"><span class="text-xl">🌬️</span></div>
          <div>
            <h2 class="font-heading font-semibold text-lg text-neutral-900 group-hover:text-teal-700 transition-colors">Ozonoterapia Dental</h2>
            <p class="text-sm text-neutral-500 mt-1">Esterilizacion antimicrobiana natural. Sin antibioticos, sin efectos secundarios.</p>
            <span class="inline-block mt-2 text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">Biocompatible</span>
          </div>
        </div>
      </a>

      <a href="/servicios/ortodoncia-funcional" class="card-hover block bg-white rounded-xl p-6 border border-neutral-200 hover:border-teal-300 hover:shadow-md transition-all no-underline group">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors"><span class="text-xl">😁</span></div>
          <div>
            <h2 class="font-heading font-semibold text-lg text-neutral-900 group-hover:text-teal-700 transition-colors">Ortodoncia Funcional</h2>
            <p class="text-sm text-neutral-500 mt-1">Ortodoncia biologica e Invisalign. Correccion de la mordida sin extracciones innecesarias.</p>
            <span class="inline-block mt-2 text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">Invisalign disponible</span>
          </div>
        </div>
      </a>

      <a href="/servicios/estetica-facial" class="card-hover block bg-white rounded-xl p-6 border border-neutral-200 hover:border-teal-300 hover:shadow-md transition-all no-underline group">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors"><span class="text-xl">💉</span></div>
          <div>
            <h2 class="font-heading font-semibold text-lg text-neutral-900 group-hover:text-teal-700 transition-colors">Estetica Facial</h2>
            <p class="text-sm text-neutral-500 mt-1">Toxina botulinica, acido hialuronico y PRP. Armonizacion facial minima invasiva.</p>
            <span class="inline-block mt-2 text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">Minima invasiva</span>
          </div>
        </div>
      </a>

      <a href="/servicios/nutricion" class="card-hover block bg-white rounded-xl p-6 border border-neutral-200 hover:border-teal-300 hover:shadow-md transition-all no-underline group">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors"><span class="text-xl">🥗</span></div>
          <div>
            <h2 class="font-heading font-semibold text-lg text-neutral-900 group-hover:text-teal-700 transition-colors">Nutricion y Bienestar</h2>
            <p class="text-sm text-neutral-500 mt-1">Alimentacion ancestral y antiinflamatoria. Soporte nutricional para la salud bucal.</p>
            <span class="inline-block mt-2 text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">Integral</span>
          </div>
        </div>
      </a>

      <a href="/servicios/acupuntura" class="card-hover block bg-white rounded-xl p-6 border border-neutral-200 hover:border-teal-300 hover:shadow-md transition-all no-underline group">
        <div class="flex items-start gap-4">
          <div class="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-teal-500 transition-colors"><span class="text-xl">🪡</span></div>
          <div>
            <h2 class="font-heading font-semibold text-lg text-neutral-900 group-hover:text-teal-700 transition-colors">Acupuntura Dental</h2>
            <p class="text-sm text-neutral-500 mt-1">Terapia complementaria para ansiedad dental, dolor y recuperacion post-operatoria.</p>
            <span class="inline-block mt-2 text-xs font-medium text-teal-600 bg-teal-50 px-2 py-0.5 rounded-full">Terapia complementaria</span>
          </div>
        </div>
      </a>
    </div>

    <div class="mt-8 bg-neutral-100 rounded-xl p-6 text-center">
      <p class="text-neutral-600 text-sm">¿No sabes que tratamiento necesitas? <a href="/contacto" class="text-teal-700 font-semibold hover:underline no-underline">Agenda una consulta de evaluacion</a> y te orientamos sin compromiso.</p>
    </div>
  </div>
</Layout>"""

# ── SERVICIO GENERICO [slug] ────────────────────────────────────────────────
servicio_slug = r"""---
import Layout from "../../layouts/Layout.astro";

export async function getStaticPaths() {
  const servicios = [
    {slug: "eliminacion-amalgamas", name: "Eliminacion de Amalgamas", icon: "⚕️", tagline: "Remocion segura con protocolo IAOMT certificado.", description: "Las amalgamas contienen aproximadamente 50% de mercurio, un metal pesado toxico. Su remocion sin protocolo puede liberar vapores peligrosos. Nuestro protocolo IAOMT incluye aislacion con goma dique, oxigeno nasal, aspiracion especializada y filtrado de gases mercuriales.", steps: [{title: "Evaluacion previa", desc: "Radiografias, evaluacion del estado de las amalgamas e historial medico."}, {title: "Preparacion", desc: "Suplementos de soporte (vitamina C, selenio, glutatión) antes del procedimiento."}, {title: "Protocolo IAOMT", desc: "Aislacion con goma dique, oxigeno nasal, aspiracion especializada y remocion cuidadosa."}, {title: "Restauracion", desc: "Reemplazo con ceramica o composite biocompatible, testeado para cada paciente."}], faqs: [{q: "Es peligroso retirar amalgamas?", a: "Si no se hace con protocolo, si. El mercurio puede liberarse como vapor durante el procedimiento. El protocolo IAOMT minimiza la exposicion."}, {q: "Cuantas amalgamas por sesion?", a: "Generalmente 1-4, dependiendo de cada paciente. Evaluamos individualmente."}, {q: "Con que se reemplazan?", a: "Con restauraciones de ceramica o composite biocompatible, testeadas para cada paciente."}]},
    {slug: "implantes-ceramicos", name: "Implantes Ceramicoss", icon: "🦴", tagline: "Implantes 100% libres de titanio.", description: "Los implantes de titanio pueden causar sensibilidades en algunos pacientes. Ofrecemos implantes ceramicoss (oxido de circonio) que son completamente metalicos y biocompatibles con el hueso.", steps: [{title: "Evaluacion osea", desc: "Tomografia 3D para evaluar la calidad y cantidad de hueso disponible."}, {title: "Planificacion digital", desc: "Diseno digital del procedimiento con cirugia guiada por computadora."}, {title: "Colocacion", desc: "Implante de ceramica en una sesion con anestasia local."}, {title: "Osteointegracion", desc: "Periodo de 3-6 meses para integracion con el hueso."}], faqs: [{q: "Son iguales de fuertes que los de titanio?", a: "Si. Los implantes ceramicoss tienen tasas de exito comparables al titanio."}, {q: "Cuanto cuesta un implante ceramico?", a: "Cada caso es diferente. Agenda una evaluacion para un presupuesto personalizado."}]},
    {slug: "odontologia-biomimetica", name: "Odontologia Biomimetica", icon: "✨", tagline: "Conservamos tu diente natural al maximo.", description: "La odontologia biomimetica busca restaurar los dientes de la manera mas conservadora posible, imitando la estructura y funcion natural del diente.", steps: [{title: "Diagnostico preciso", desc: "Evaluacion detallada con camara intraoral y radiografias."}, {title: "Diseño digital", desc: "Planificacion digital de la restauracion para maxima conservacion."}, {title: "Restauracion adhesiva", desc: "Incrustaciones o carillas de ceramica pegadas al diente con adhesivos especiales."}], faqs: [{q: "Que es una restauracion biomimetica?", a: "Es una restauracion que imita la estructura natural del diente, sellando y fortaleciendo en lugar de cortar."}, {q: "Cuanto dura?", a: "Las restauraciones ceramicass pueden durar décadas con buen cuidado."}]},
    {slug: "tratamiento-atm", name: "Tratamiento de ATM", icon: "💆", tagline: "Sin dolor cronico de mandibula.", description: "La disfuncion temporomandibular causa dolor de cabeza, cuello, oidos y mandibula. Tratamos la causa raiz con un enfoque multidisciplinario.", steps: [{title: "Diagnostico", desc: "Evaluacion de la mordida, musculos y articulacion."}, {title: "Ortopedia", desc: "Aparatos removibles para relajacion muscular."}, {title: "Terapia neural", desc: "Descompresion y desinflamacion de la articulacion."}, {title: "Seguimiento", desc: "Monitoreo del progreso y ajustes necesarios."}], faqs: [{q: "Tengo dolor de cabeza frecuente, puede ser ATM?", a: "Si. Muchas cefaleas cronicas tienen origen en la articulacion temporomandibular. Una evaluacion puede confirmarlo."}]},
    {slug: "ozonoterapia", name: "Ozonoterapia Dental", icon: "🌬️", tagline: "Esterilizacion natural sin antibioticos.", description: "El ozono tiene propiedades antimicrobianas de amplio espectro. Se usa para esterilizar canales radiculares, tratar periodontitis y acelerar la cicatrizacion.", steps: [{title: "Diagnostico", desc: "Evaluacion del problema infectcioso."}, {title: "Aplicacion de ozono", desc: "Aplicacion directa de ozono medico en la zona afectada."}, {title: "Resultado", desc: "Esterilizacion natural y estimulacion de la cicatrizacion."}], faqs: [{q: "Es seguro el ozono?", a: "Si. El ozono medico se aplica en concentraciones controladas y es completamente biocompatible."}]},
    {slug: "ortodoncia-funcional", name: "Ortodoncia Funcional", icon: "😁", tagline: "Ortodoncia biologica e Invisalign.", description: "Corregimos la mordida y alineacion dental con un enfoque que prioriza la funcion sobre la estetica, usando sistemas biocompatibles.", steps: [{title: "Evaluacion osea", desc: "Analisis del crecimiento maxilofacial."}, {title: "Plan de tratamiento", desc: "Diseño de un plan personalizado, incluso con alineadores transparentes."}, {title: "Seguimiento", desc: "Ajuste mensual del tratamiento."}], faqs: [{q: "Hay Invisalign?", a: "Si. Evaluamos si eres candidato para alineadores transparentes."}]},
    {slug: "estetica-facial", name: "Estetica Facial", icon: "💉", tagline: "Armonizacion facial minima invasiva.", description: "Toxina botulinica, acido hialuronico y plasma rico en plaquetas para armonizacion facial integrada con la salud bucal.", steps: [{title: "Evaluacion", desc: "Analisis facial completo y plan de armonizacion."}, {title: "Aplicacion", desc: "Procedimientos minimos invasivos con materiales biocompatibles."}], faqs: [{q: "Que materiales usan?", a: "Solo productos biocompatibles testeados para cada paciente."}]},
    {slug: "nutricion", name: "Nutricion y Bienestar", icon: "🥗", tagline: "Alimentacion ancestral para tu salud bucal.", description: "La nutricion es fundamental para la salud periodontal y la cicatrizacion. Te orientamos en alimentacion antiinflamatoria y ancestral.", steps: [{title: "Evaluacion nutricional", desc: "Revision de habitos alimentarios y su impacto en tu salud bucal."}, {title: "Plan alimentario", desc: "Orientacion personalizada basada en la dieta mediterranea y ancestral."}], faqs: []},
    {slug: "acupuntura", name: "Acupuntura Dental", icon: "🪡", tagline: "Terapia complementaria para ansiedad y dolor.", description: "La acupuntura reduce la ansiedad dental, el dolor cronico y acelera la recuperacion post-operatoria.", steps: [{title: "Evaluacion", desc: "Revision del historial medico y dental."}, {title: "Sesiones", desc: "Tratamiento con acupuntura china para cada necesidad."}], faqs: []},
  ];
  return servicios.map(s => ({ params: { slug: s.slug }, props: { servicio: s } }));
}

const { servicio } = Astro.props;
---

<Layout title={`${servicio.name} — Centro de Salud Holistica`} description={servicio.description.slice(0, 160)}>
  <div class="max-w-3xl mx-auto px-4 sm:px-6 py-14">
    <nav class="text-sm text-neutral-500 mb-8 flex items-center gap-1.5">
      <a href="/" class="hover:text-teal-700 no-underline text-neutral-500">Inicio</a>
      <span class="text-neutral-300">›</span>
      <a href="/servicios" class="hover:text-teal-700 no-underline text-neutral-500">Servicios</a>
      <span class="text-neutral-300">›</span>
      <span class="text-neutral-800 font-medium">{servicio.name}</span>
    </nav>

    <div class="mb-8">
      <div class="w-16 h-16 bg-teal-100 rounded-2xl flex items-center justify-center text-3xl mb-6">{servicio.icon}</div>
      <h1 class="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-3">{servicio.name}</h1>
      <p class="text-teal-700 font-semibold text-lg">{servicio.tagline}</p>
    </div>

    <div class="prose-evolutiva mb-12">
      <p class="text-neutral-600 leading-relaxed text-lg">{servicio.description}</p>
    </div>

    {servicio.steps && servicio.steps.length > 0 && (
      <div class="mb-12">
        <h2 class="font-heading font-bold text-xl text-neutral-900 mb-6">Como funciona el tratamiento</h2>
        <div class="space-y-5">
          {servicio.steps.map((step, i) => (
            <div class="flex gap-4">
              <div class="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm">{i+1}</div>
              <div>
                <h3 class="font-semibold text-neutral-900 mb-1">{step.title}</h3>
                <p class="text-neutral-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}

    {servicio.faqs && servicio.faqs.length > 0 && (
      <div class="mb-12 bg-neutral-50 rounded-2xl p-8 border border-neutral-200">
        <h2 class="font-heading font-bold text-xl text-neutral-900 mb-6">Preguntas frecuentes</h2>
        <div class="space-y-5">
          {servicio.faqs.map(faq => (
            <div>
              <h3 class="font-semibold text-neutral-800 mb-2">{faq.q}</h3>
              <p class="text-neutral-600 text-sm leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    )}

    <div class="bg-gradient-to-r from-emerald-800 to-teal-700 rounded-2xl p-8 text-center">
      <h2 class="font-heading font-bold text-xl text-white mb-3">¿Quieres saber si este tratamiento es para ti?</h2>
      <p class="text-white/75 mb-6 text-sm">Agenda una primera consulta sin compromiso. Te escuchamos, evaluamos y te decimos las opciones.</p>
      <a href="/contacto" class="inline-flex items-center gap-2 bg-white text-emerald-800 font-bold px-8 py-3 rounded-xl hover:bg-teal-50 transition-colors no-underline">Agendar consulta →</a>
    </div>
  </div>
</Layout>"""

# ── SOBRE ──────────────────────────────────────────────────────────────────
sobre = r"""---
import Layout from "../layouts/Layout.astro";
---

<Layout title="Dr. Joaquin Ipinza — Centro de Salud Holistica" description="Cirujano dentista, especialista en Periodoncia e Implantologia. Formado en Universidad de Chile y Loma Linda University, California. Enfoque holistico integrando nutricion, acupuntura y odontologia biologica.">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 py-14">
    <nav class="text-sm text-neutral-500 mb-8 flex items-center gap-1.5">
      <a href="/" class="hover:text-teal-700 no-underline text-neutral-500">Inicio</a>
      <span class="text-neutral-300">›</span>
      <span class="text-neutral-800 font-medium">Doctor</span>
    </nav>

    <div class="mb-12">
      <div class="w-40 h-40 bg-gradient-to-br from-emerald-100 to-teal-50 rounded-full mx-auto mb-8 flex items-center justify-center text-6xl">👨‍⚕️</div>
      <h1 class="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-3 text-center">Dr. Joaquin Ipinza Hofmann</h1>
      <p class="text-teal-700 font-semibold text-center mb-8">Cirujano Dentista — Universidad de Chile</p>

      <div class="bg-white rounded-2xl border border-neutral-200 p-8 mb-8">
        <h2 class="font-heading font-bold text-xl text-neutral-900 mb-4">Formacion y credenciales</h2>
        <div class="space-y-4">
          <div class="flex items-start gap-3">
            <span class="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0"></span>
            <p class="text-neutral-600"><strong class="text-neutral-800">Cirujano Dentista</strong> — Universidad de Chile</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0"></span>
            <p class="text-neutral-600"><strong class="text-neutral-800">Especialista en Periodoncia</strong> — Sociedad de Periodoncia de Chile</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0"></span>
            <p class="text-neutral-600"><strong class="text-neutral-800">Especialista en Implantologia Buco-Maxilo-Facial</strong></p>
          </div>
          <div class="flex items-start gap-3">
            <span class="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0"></span>
            <p class="text-neutral-600"><strong class="text-neutral-800">Formacion continua</strong> — Loma Linda University, California, USA</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0"></span>
            <p class="text-neutral-600"><strong class="text-neutral-800">Miembro activo</strong> — Holistic Dental Association</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0"></span>
            <p class="text-neutral-600"><strong class="text-neutral-800">Miembro activo</strong> — Sociedad de Odontologia Integrativa de Chile (SIOCH)</p>
          </div>
          <div class="flex items-start gap-3">
            <span class="w-2 h-2 bg-teal-500 rounded-full mt-2 shrink-0"></span>
            <p class="text-neutral-600"><strong class="text-neutral-800">Protocolo IAOMT</strong> — Certificado para eliminacion segura de amalgamas</p>
          </div>
        </div>
      </div>

      <div class="bg-neutral-50 rounded-2xl p-8 mb-8">
        <h2 class="font-heading font-bold text-xl text-neutral-900 mb-4">Mi historia</h2>
        <div class="space-y-4 text-neutral-600 leading-relaxed">
          <p>Mi formacion comenzo en la Universidad de Chile, donde aprendi la odontologia convencional con excelencia. Mis profesores eran respetados y me transmitieron una base solida.</p>
          <p>Pero algo no encajaba. ¿Por que casi todas las personas tenian caries? ¿Por que la enfermedad periodontal era casi universal? ¿Por que los ninos necesitaban ortodoncia?</p>
          <p>La respuesta llegue cuando encontre los trabajos del antropologo Martin Gusinde, que documento la salud bucal de los pueblos originarios australes: <em>tenian dientes perfectos, sin caries, sin periodoncia.</em></p>
          <p>Desde entonces, mi busqueda me llevo a estudiar alimentacion ancestral, antropologia dental, odontologia biologica y, eventualmente, a integrar acupuntura, ozonoterapia y nutricion en mi practica.</p>
          <p>Hoy, mi enfoque no es solo tratar dientes. Es comprender a la persona completa — su alimentacion, su estilo de vida, su historia — y ayudarla a recuperar la salud desde la raiz.</p>
        </div>
      </div>

      <div class="bg-emerald-50 rounded-2xl p-8 border border-emerald-200 text-center">
        <h2 class="font-heading font-bold text-xl text-neutral-900 mb-3">El libro que escribi</h2>
        <p class="text-neutral-600 mb-6">Compile anos de investigacion en el libro "Salud Evolutiva", de lectura gratuita. 129 paginas sobre por que tenemos las enfermedades que tenemos y que hacer al respecto.</p>
        <a href="/libro" class="inline-flex items-center gap-2 bg-emerald-700 text-white font-semibold px-6 py-3 rounded-xl hover:bg-emerald-800 transition-colors no-underline">📖 Leer el libro gratuito →</a>
      </div>
    </div>
  </div>
</Layout>"""

# ── CLINICA ─────────────────────────────────────────────────────────────
clinica = r"""---
import Layout from "../layouts/Layout.astro";
---

<Layout title="Nuestra Clinica — Centro de Salud Holistica" description="Consultorio en Los Dominicos, Las Condes. Tecnologia de punta, bioseguridad certificada y un ambiente de calma para tu tratamiento.">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 py-14">
    <nav class="text-sm text-neutral-500 mb-8 flex items-center gap-1.5">
      <a href="/" class="hover:text-teal-700 no-underline text-neutral-500">Inicio</a>
      <span class="text-neutral-300">›</span>
      <span class="text-neutral-800 font-medium">Clinica</span>
    </nav>

    <h1 class="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">Nuestra Clinica</h1>
    <p class="text-neutral-500 text-lg mb-12">Un espacio diseñado para que tu experiencia sea de calma, no de estres.</p>

    <div class="grid gap-6 mb-12">
      <div class="bg-gradient-to-br from-emerald-100 to-teal-50 rounded-2xl aspect-video flex items-center justify-center">
        <div class="text-center">
          <p class="text-emerald-700 font-medium">📷 Foto de la clinica</p>
          <p class="text-emerald-600 text-sm">Por confirmar con sesion fotografica</p>
        </div>
      </div>
    </div>

    <div class="grid sm:grid-cols-2 gap-6 mb-12">
      <div class="bg-white rounded-xl border border-neutral-200 p-6">
        <h2 class="font-heading font-semibold text-lg text-neutral-900 mb-3">📍 Ubicacion</h2>
        <p class="text-neutral-600 text-sm leading-relaxed">Los Dominicos, Las Condes<br />Santiago, Chile<br /><br />A pasos del metro Los Dominicos (Linea 1)</p>
      </div>
      <div class="bg-white rounded-xl border border-neutral-200 p-6">
        <h2 class="font-heading font-semibold text-lg text-neutral-900 mb-3">🕐 Horarios</h2>
        <p class="text-neutral-600 text-sm leading-relaxed">
          Lunes a Viernes: 9:00 — 18:00<br />
          Sabado y Domingo: Cerrado<br /><br />
          *Atencion con hora anticipada
        </p>
      </div>
      <div class="bg-white rounded-xl border border-neutral-200 p-6">
        <h2 class="font-heading font-semibold text-lg text-neutral-900 mb-3">🔬 Tecnologia</h2>
        <p class="text-neutral-600 text-sm leading-relaxed">Rayos X digitales, tomografo 3D, escaneo intraoral, cirugia guiada por computadora, esterilizacion certificada.</p>
      </div>
      <div class="bg-white rounded-xl border border-neutral-200 p-6">
        <h2 class="font-heading font-semibold text-lg text-neutral-900 mb-3">✅ Bioseguridad</h2>
        <p class="text-neutral-600 text-sm leading-relaxed">Pabellon certificado, esterilizacion autoclave clase B, descontaminacion de aire, protocolos IAOMT para amalgamas.</p>
      </div>
    </div>

    <div class="bg-gradient-to-r from-emerald-800 to-teal-700 rounded-2xl p-8 text-center">
      <h2 class="font-heading font-bold text-xl text-white mb-3">Agenda tu visita</h2>
      <p class="text-white/75 mb-6 text-sm">La primera consulta es una oportunidad para que nos conozcas y evaluemos tu situacion sin compromiso.</p>
      <a href="/contacto" class="inline-flex items-center gap-2 bg-white text-emerald-800 font-bold px-8 py-3 rounded-xl hover:bg-teal-50 transition-colors no-underline">Solicitar hora →</a>
    </div>
  </div>
</Layout>"""

# ── INTERNACIONAL ─────────────────────────────────────────────────────────
internacional = r"""---
import Layout from "../layouts/Layout.astro";
---

<Layout title="Pacientes Internacionales — Centro de Salud Holistica" description="Programa dedicado a pacientes de otros paises. Tratamientos dentales en Santiago, Chile, con ahorros de 40-80% vs USA y Europa.">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 py-14">
    <nav class="text-sm text-neutral-500 mb-8 flex items-center gap-1.5">
      <a href="/" class="hover:text-teal-700 no-underline text-neutral-500">Inicio</a>
      <span class="text-neutral-300">›</span>
      <span class="text-neutral-800 font-medium">Internacionales</span>
    </nav>

    <span class="inline-block text-sm font-medium text-teal-600 bg-teal-50 px-4 py-1.5 rounded-full mb-4">🌍 Pacientes internacionales</span>
    <h1 class="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-4">Tu tratamiento dental en Chile</h1>
    <p class="text-neutral-500 text-lg mb-10">Ahorra entre un 40% y un 80% comparado con Estados Unidos o Europa, en odontologia de excelencia con un enfoque biologico y holistico.</p>

    <div class="bg-white rounded-2xl border border-neutral-200 p-8 mb-8">
      <h2 class="font-heading font-bold text-xl text-neutral-900 mb-6">Por que elegir Chile?</h2>
      <div class="grid sm:grid-cols-2 gap-5">
        <div class="flex items-start gap-3">
          <span class="text-2xl">💰</span>
          <div>
            <h3 class="font-semibold text-neutral-800 text-sm">Ahorro significativo</h3>
            <p class="text-neutral-500 text-sm">40-80% menos que USA, Canada o Europa para tratamientos similares.</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-2xl">🏥</span>
          <div>
            <h3 class="font-semibold text-neutral-800 text-sm">Calidad de excelencia</h3>
            <p class="text-neutral-500 text-sm">Universidad de Chile, Loma Linda, protocolos internacionales IAOMT.</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-2xl">🌎</span>
          <div>
            <h3 class="font-semibold text-neutral-800 text-sm">Un pais hermoso</h3>
            <p class="text-neutral-500 text-sm">Santiago, Patagonia, tierra de origen. Combina tu tratamiento con turismo.</p>
          </div>
        </div>
        <div class="flex items-start gap-3">
          <span class="text-2xl">🗣️</span>
          <div>
            <h3 class="font-semibold text-neutral-800 text-sm">Espa\u00f1ol o ingles</h3>
            <p class="text-neutral-500 text-sm">Atencion en espa\u00f1ol e ingl\u00e9s. Coordinamos con tu idioma.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-neutral-50 rounded-2xl p-8 border border-neutral-200 mb-8">
      <h2 class="font-heading font-bold text-xl text-neutral-900 mb-4">Como funciona</h2>
      <div class="space-y-5">
        <div class="flex gap-4">
          <div class="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm">1</div>
          <div>
            <h3 class="font-semibold text-neutral-800">Contacto inicial</h3>
            <p class="text-neutral-500 text-sm">Envianos tus radiografias y une historia clinica por email. Te respondemos en 24-48 horas con un plan tentativo.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm">2</div>
          <div>
            <h3 class="font-semibold text-neutral-800">Planificacion</h3>
            <p class="text-neutral-500 text-sm">Definimos el tratamiento, numero de viajes necesarios y te damos un presupuesto detallado.</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-8 h-8 bg-emerald-700 rounded-full flex items-center justify-center shrink-0 text-white font-bold text-sm">3</div>
          <div>
            <h3 class="font-semibold text-neutral-800">Tu viaje a Chile</h3>
            <p class="text-neutral-500 text-sm">Te ayudamos con recomendaciones de alojamiento, transporte y coordinamos cada cita.</p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-gradient-to-r from-emerald-800 to-teal-700 rounded-2xl p-8 text-center">
      <h2 class="font-heading font-bold text-xl text-white mb-3">Empieza tu evaluacion</h2>
      <p class="text-white/75 mb-6 text-sm">Escribenos a nuestro email con tus radiografias y te contestamos en 24-48 horas.</p>
      <a href="/contacto" class="inline-flex items-center gap-2 bg-white text-emerald-800 font-bold px-8 py-3 rounded-xl hover:bg-teal-50 transition-colors no-underline">Contactar ahora →</a>
    </div>
  </div>
</Layout>"""

# ── CONTACTO ─────────────────────────────────────────────────────────────
contacto = r"""---
import Layout from "../layouts/Layout.astro";
---

<Layout title="Contacto — Centro de Salud Holistica" description="Agenda tu hora con el Dr. Joaquin Ipinza. Evaluacion sin compromiso. Los Dominicos, Las Condes, Santiago.">
  <div class="max-w-2xl mx-auto px-4 sm:px-6 py-14">
    <nav class="text-sm text-neutral-500 mb-8 flex items-center gap-1.5">
      <a href="/" class="hover:text-teal-700 no-underline text-neutral-500">Inicio</a>
      <span class="text-neutral-300">›</span>
      <span class="text-neutral-800 font-medium">Contacto</span>
    </nav>

    <h1 class="font-heading font-bold text-3xl sm:text-4xl text-neutral-900 mb-3">Agenda tu consulta</h1>
    <p class="text-neutral-500 mb-10">La primera consulta es sin compromiso. Te escuchamos, evaluamos y te presentamos las opciones. Sin presion, sin ventas.</p>

    <form class="bg-white rounded-2xl border border-neutral-200 p-8 mb-8" onsubmit="event.preventDefault(); this.querySelector('.submit-btn').textContent='Enviado ✓'; this.querySelector('.submit-btn').disabled=true;">
      <div class="space-y-5">
        <div>
          <label class="block text-sm font-medium text-neutral-700 mb-1.5">Nombre completo *</label>
          <input type="text" required placeholder="Tu nombre" class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" />
        </div>
        <div class="grid sm:grid-cols-2 gap-4">
          <div>
            <label class="block text-sm font-medium text-neutral-700 mb-1.5">Email *</label>
            <input type="email" required placeholder="tu@email.com" class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" />
          </div>
          <div>
            <label class="block text-sm font-medium text-neutral-700 mb-1.5">Telefono / WhatsApp</label>
            <input type="tel" placeholder="+56 9 XXXX XXXX" class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition" />
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-neutral-700 mb-1.5">De donde nos escribes?</label>
          <select class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition bg-white">
            <option value="">Selecciona tu pais</option>
            <option>Chile</option>
            <option>Argentina</option>
            <option>Peru</option>
            <option>Mexico</option>
            <option>Colombia</option>
            <option>Otro</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-neutral-700 mb-1.5">Que te interesa?</label>
          <select class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition bg-white">
            <option value="">Selecciona un servicio</option>
            <option>Eliminacion de amalgamas</option>
            <option>Implantes ceramicoss</option>
            <option>Odontologia biomimetica</option>
            <option>Tratamiento ATM</option>
            <option>Revision / Segunda opinion</option>
            <option>Otro tratamiento</option>
            <option>Solo informacion</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-neutral-700 mb-1.5">Cuentanos brevemente tu situacion</label>
          <textarea rows="4" placeholder="Cuanto tiempo llevas con el problema? Que tratamientos has tenido? Cual es tu pregunta principal?" class="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition resize-none"></textarea>
        </div>
        <button type="submit" class="submit-btn w-full bg-emerald-700 text-white font-semibold py-4 rounded-xl hover:bg-emerald-800 transition-colors">Enviar mensaje →</button>
        <p class="text-xs text-neutral-400 text-center">Te respondemos en 24-48 horas habiles.</p>
      </div>
    </form>

    <div class="grid sm:grid-cols-2 gap-5">
      <div class="bg-white rounded-xl border border-neutral-200 p-6">
        <h2 class="font-heading font-semibold text-neutral-900 mb-3">📍 Clinica</h2>
        <p class="text-neutral-600 text-sm leading-relaxed">Los Dominicos, Las Condes<br />Santiago, Chile<br /><a href="/clinica" class="text-teal-600 hover:underline no-underline">Ver como llegar →</a></p>
      </div>
      <div class="bg-white rounded-xl border border-neutral-200 p-6">
        <h2 class="font-heading font-semibold text-neutral-900 mb-3">📞 Telefono</h2>
        <p class="text-neutral-600 text-sm">Por confirmar</p>
        <p class="text-neutral-600 text-sm mt-1">WhatsApp disponible</p>
      </div>
    </div>
  </div>
</Layout>"""

# Write all files
files = {
    "pages/servicios/index.astro": servicios_index,
    "pages/servicios/[slug].astro": servicio_slug,
    "pages/sobre.astro": sobre,
    "pages/clinica.astro": clinica,
    "pages/internacional.astro": internacional,
    "pages/contacto.astro": contacto,
}

for path, content in files.items():
    full = f"{BASE}/{path}"
    os.makedirs(os.path.dirname(full), exist_ok=True)
    with open(full, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Written {full} ({len(content)} bytes)")

print("\nAll pages created!")
