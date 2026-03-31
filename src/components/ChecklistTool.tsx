import { useState, useEffect } from 'react';

const SLUG = typeof window !== 'undefined' ? window.location.pathname.split('/').pop() : '';

const TOOLS: Record<string, {
  intro: string;
  items: { q: string; cat: string }[];
  results: Record<string, { label: string; color: string; desc: string }>;
}> = {
  "autoevaluacion-salud-bucal": {
    intro: "Evalúa tu salud bucal respondiendo con honestidad. No es un diagnóstico — es una herramienta de reflexión basada en los principios del Dr. Ipinza.",
    items: [
      { q: "Cepillo mis dientes al menos 2 veces al día", cat: "Higiene" },
      { q: "Uso hilo dental o cepillo interdental diariamente", cat: "Higiene" },
      { q: "Visito al dentista al menos 1 vez al año", cat: "Prevención" },
      { q: "Tengo encías que no sangran al cepillar", cat: "Encías" },
      { q: "Mi aliento es fresco durante todo el día", cat: "Encías" },
      { q: "No tengo sensibilidad al frío o calor", cat: "Síntomas" },
      { q: "No tengo dientes flojos o que se muevan", cat: "Síntomas" },
      { q: "Mi dieta incluye alimentos naturales (no ultraprocesados)", cat: "Nutrición" },
      { q: "Consumo alimentos ricos en calcio y vitamina D", cat: "Nutrición" },
      { q: "No consumo bebidas azucaradas regularmente", cat: "Nutrición" },
      { q: "Duermo entre 7 y 8 horas cada noche", cat: "Estilo de vida" },
      { q: "Manejo el estrés de forma activa (ejercicio, meditación, etc.)", cat: "Estilo de vida" },
      { q: "No tengo amalgamas (empastes grises) en mi boca", cat: "Materiales" },
      { q: "No bruxo (aprieto o rechino los dientes) mientras duermo", cat: "Síntomas" },
      { q: "Mi lengua tiene un color rosado uniforme (no blanca ni con parches)", cat: "Síntomas" },
    ],
    results: {
      high: { label: "¡Excelente!", color: "text-primary-600", desc: "Tus hábitos reflejan un buen cuidado de tu salud bucal. Continúa así y no olvides mantener tus chequeos regulares." },
      mid: { label: "Buen punto de partida", color: "text-amber-600", desc: "Vas por buen camino, pero hay áreas que puedes mejorar. Revisa los ítems que no marcaste y considera pequeños cambios." },
      low: { label: "Hay oportunidades de mejora", color: "text-red-600", desc: "Varios de tus hábitos podrían estar afectando tu salud bucal. Te recomendamos consultar con un profesional." },
    }
  },
  "checklist-retiro-amalgamas": {
    intro: "Si estás considerando retirar amalgamas, revisa estos puntos antes de tomar la decisión. Basado en el Capítulo 4 de Salud Evolutiva.",
    items: [
      { q: "He consultado con un dentista capacitado en retiro seguro de amalgamas (protocolo SMART)", cat: "Profesional" },
      { q: "Entiendo los riesgos del mercurio durante el retiro (inhalación de vapores)", cat: "Información" },
      { q: "He evaluado si las amalgamas están dañadas o deterioradas", cat: "Evaluación" },
      { q: "Tengo un plan para reemplazo con material biocompatible (composite, porcelana)", cat: "Tratamiento" },
      { q: "El profesional usará: dique de goma, succión, mascarilla, ventilación", cat: "Protocolo" },
      { q: "He planificado desintoxicación post-retiro (vitamina C, selenio, glutation)", cat: "Post-retiro" },
      { q: "No estoy embarazada ni en periodo de lactancia", cat: "Contraindicaciones" },
      { q: "Entiendo que el retiro es opcional y que amalgamas intactas pueden no requerir extracción inmediata", cat: "Información" },
    ],
    results: {
      high: { label: "Listo para proceder", color: "text-primary-600", desc: "Has evaluado todos los aspectos importantes. Elige un profesional con experiencia en protocolos de retiro seguro." },
      mid: { label: "Casi listo", color: "text-amber-600", desc: "Te faltan algunos puntos. Revisa los ítems que no marcaste antes de proceder." },
      low: { label: "Necesitas más información", color: "text-red-600", desc: "Hay varios aspectos sin evaluar. Lee el Capítulo 4 y consulta con un profesional." },
    }
  },
  "checklist-embarazo-dental": {
    intro: "El embarazo requiere cuidados bucales especiales. Revisa esta guía basada en el Capítulo 5 de Salud Evolutiva.",
    items: [
      { q: "Visité al dentista antes de quedar embarazada (o lo haré pronto)", cat: "Prevención" },
      { q: "Mi dentista sabe que estoy embarazada", cat: "Comunicación" },
      { q: "Cepillo con cepillo suave al menos 2 veces al día", cat: "Higiene" },
      { q: "Uso hilo dental diariamente (encías más sensibles en embarazo)", cat: "Higiene" },
      { q: "Consumo suficiente calcio (lácteos, semillas, hojas verdes)", cat: "Nutrición" },
      { q: "Tomo vitamina D o me expongo al sol 15 min/día", cat: "Nutrición" },
      { q: "Evito azúcares y alimentos ultraprocesados", cat: "Nutrición" },
      { q: "Manejo náuseas sin exponer dientes a ácido frecuente (me enjuago después)", cat: "Cuidado" },
      { q: "Si tengo sangrado de encías, sé que es común pero no debo ignorarlo", cat: "Síntomas" },
      { q: "Evito radiografías innecesarias en el primer trimestre", cat: "Seguridad" },
      { q: "Conozco la relación entre salud periodontal y parto prematuro", cat: "Información" },
      { q: "Planeo la primera visita dental del bebé ~6 meses o al salir el primer diente", cat: "Planificación" },
    ],
    results: {
      high: { label: "¡Excelente cuidado!", color: "text-primary-600", desc: "Estás tomando todas las precauciones. Tu salud bucal y la de tu bebé están en buenas manos." },
      mid: { label: "Buen enfoque", color: "text-amber-600", desc: "Vas bien, pero hay puntos que podrías fortalecer. Las encías son especialmente sensibles durante el embarazo." },
      low: { label: "Atención necesaria", color: "text-red-600", desc: "La salud bucal durante el embarazo afecta al bebé. Agenda una visita dental pronto." },
    }
  },
};

export default function ChecklistTool() {
  const [slug, setSlug] = useState('');
  const [answers, setAnswers] = useState<Record<string, boolean>>({});
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const path = window.location.pathname.replace(/\/+$/, '');
    setSlug(path.split('/').pop() || '');
  }, []);

  const tool = TOOLS[slug];

  if (!tool) {
    return (
      <div className="flex items-center justify-center py-16">
        <div className="text-center">
          <div className="text-4xl mb-3 animate-pulse">⏳</div>
          <p className="text-neutral-500 text-sm">Cargando checklist...</p>
        </div>
      </div>
    );
  }

  const total = tool.items.length;
  const checked = Object.values(answers).filter(Boolean).length;
  const pct = Math.round((checked / total) * 100);

  const getResult = () => {
    if (pct >= 80) return tool.results.high;
    if (pct >= 50) return tool.results.mid;
    return tool.results.low;
  };

  const categories = [...new Set(tool.items.map(i => i.cat))];

  const toggle = (key: string) => {
    setAnswers(prev => ({ ...prev, [key]: !prev[key] }));
    setShowResults(false);
  };

  const getIcon = () => pct >= 80 ? '🎉' : pct >= 50 ? '👍' : '💪';
  const getBorder = () => pct >= 80 ? 'border-emerald-300 bg-emerald-50' : pct >= 50 ? 'border-amber-300 bg-amber-50' : 'border-red-300 bg-red-50';

  return (
    <div>
      {/* Intro box */}
      <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5 mb-8">
        <p className="text-neutral-700 text-sm leading-relaxed">{tool.intro}</p>
        <p className="text-xs text-neutral-500 mt-2">
          <strong>Instrucciones:</strong> Marca las afirmaciones con las que te identificas.
        </p>
      </div>

      {/* Progress */}
      <div className="mb-8">
        <div className="flex justify-between text-sm mb-2">
          <span className="text-neutral-600 font-medium">Progreso</span>
          <span className="text-neutral-500">{checked} de {total}</span>
        </div>
        <div className="w-full h-2.5 bg-neutral-200 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full transition-all duration-300 ease-out"
               style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* Items by category */}
      {categories.map(cat => (
        <div key={cat} className="mb-8">
          <h3 className="text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3">{cat}</h3>
          <div className="space-y-2">
            {tool.items.filter(i => i.cat === cat).map((item, idx) => {
              const key = `${cat}-${idx}`;
              const on = !!answers[key];
              return (
                <button key={key} onClick={() => toggle(key)}
                  className={`w-full flex items-start gap-3 p-3.5 rounded-lg border text-left transition-all duration-150 cursor-pointer ${
                    on ? 'bg-emerald-50 border-emerald-300' : 'bg-white border-neutral-200 hover:border-neutral-300 hover:bg-neutral-50'
                  }`}>
                  <div className={`mt-0.5 w-5 h-5 rounded border-2 flex items-center justify-center shrink-0 transition-colors ${
                    on ? 'bg-emerald-500 border-emerald-500' : 'border-neutral-300'
                  }`}>
                    {on && (
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </div>
                  <span className={`text-sm leading-relaxed ${on ? 'text-neutral-800 font-medium' : 'text-neutral-600'}`}>
                    {item.q}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      ))}

      {/* Button */}
      <div className="text-center mt-10 mb-8">
        <button onClick={() => setShowResults(true)}
          disabled={checked === 0}
          className={`inline-flex items-center justify-center font-semibold px-8 py-3.5 rounded-lg text-white transition-all duration-150 ${
            checked === 0
              ? 'bg-neutral-300 cursor-not-allowed'
              : 'bg-primary-600 hover:bg-emerald-700 hover:shadow-md hover:-translate-y-0.5'
          }`}>
          {showResults ? 'Actualizar resultado' : 'Ver mi resultado'}
        </button>
      </div>

      {/* Results */}
      {showResults && (
        <div className={`rounded-xl border-2 p-6 text-center ${getBorder()}`}>
          <div className="text-4xl mb-3">{getIcon()}</div>
          <div className="text-sm text-neutral-500 mb-1">Tu puntaje: {checked}/{total} ({pct}%)</div>
          <h3 className={`text-xl font-bold mb-2 ${getResult().color}`}>
            {getResult().label}
          </h3>
          <p className="text-neutral-600 text-sm leading-relaxed max-w-md mx-auto">
            {getResult().desc}
          </p>
          {pct < 80 && (
            <div className="mt-4 pt-4 border-t border-neutral-200 text-left">
              <p className="text-xs text-neutral-500 mb-2 font-medium">Puedes mejorar en:</p>
              <ul className="text-sm text-neutral-600 space-y-1.5 max-w-sm mx-auto">
                {tool.items.map((item, idx) => {
                  const key = `${item.cat}-${idx}`;
                  if (answers[key]) return null;
                  return (
                    <li key={key} className="flex items-start gap-2">
                      <span className="text-neutral-400 mt-0.5 shrink-0">○</span>
                      <span>{item.q}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      )}

      <p className="text-xs text-neutral-400 mt-8 text-center leading-relaxed">
        Esta autoevaluación es educativa y no sustituye el diagnóstico de un profesional.
        Basada en "Salud Evolutiva" del Dr. Joaquín Ipinza.
      </p>
    </div>
  );
}
