import { useState } from 'react';

export default function PlanAccionApp() {
  const [step, setStep] = useState(1);
  const [concerns, setConcerns] = useState('');
  const [symptoms, setSymptoms] = useState<string[]>([]);
  const [nutrition, setNutrition] = useState('');
  const [exercise, setExercise] = useState('');
  const [stress, setStress] = useState('medium');
  const [goals, setGoals] = useState('');
  const [plan, setPlan] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const symptomOptions = ['Caries frecuentes', 'Sangrado de encías', 'Sensibilidad dental', 'Mal aliento', 'Dientes flojos', 'Bruxismo', 'Dolores de cabeza', 'Dolor de mandíbula'];

  const toggleSymptom = (s: string) => {
    setSymptoms(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s]);
  };

  const generatePlan = async () => {
    setLoading(true);
    const newPlan: any = { readings: [], supplements: [], actions: [] };

    if (symptoms.includes('Caries frecuentes')) {
      newPlan.readings.push({ slug: 'caries-prevencion-natural', title: 'Caries — Prevención Natural', reason: 'Para prevenir nuevas caries' });
      newPlan.supplements.push({ name: 'Vitamina K2', reason: 'Esencial para remineralización dental' });
      newPlan.actions.push('Reducir azúcares refinados');
    }
    if (symptoms.includes('Sangrado de encías')) {
      newPlan.readings.push({ slug: 'enfermedad-periodontal-guia', title: 'Enfermedad Periodontal', reason: 'Para abordar la causa raíz' });
    }
    newPlan.readings.push({ slug: 'el-tripode-de-la-salud', title: 'El Trípode de la Salud', reason: 'La base de la prevención' });
    newPlan.readings.push({ slug: 'evolucion-cultural-vs-natural', title: 'Evolución Cultural vs Natural', reason: 'Entiende por qué tenemos estas enfermedades' });

    setPlan(newPlan);
    setStep(5);
    setLoading(false);
  };

  if (step === 1) return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">¿Cuáles son tus principales preocupaciones?</h2>
      <textarea value={concerns} onChange={e => setConcerns(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6" rows={4} placeholder="Ej: Quiero mejorar mi salud dental..." />
      <button onClick={() => setStep(2)} className="w-full bg-teal-700 text-white py-3 rounded-lg font-medium hover:bg-teal-800">Continuar</button>
    </div>
  );

  if (step === 2) return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Síntomas Actuales</h2>
      <p className="text-gray-600 mb-4">Selecciona los que apliquen:</p>
      <div className="grid md:grid-cols-2 gap-3 mb-6">
        {symptomOptions.map(s => (
          <label key={s} className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer hover:border-teal-300">
            <input type="checkbox" checked={symptoms.includes(s)} onChange={() => toggleSymptom(s)} className="w-5 h-5 text-teal-600 rounded" />
            <span>{s}</span>
          </label>
        ))}
      </div>
      <div className="flex gap-4">
        <button onClick={() => setStep(1)} className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50">Atrás</button>
        <button onClick={() => setStep(3)} className="flex-1 bg-teal-700 text-white py-3 rounded-lg font-medium hover:bg-teal-800">Continuar</button>
      </div>
    </div>
  );

  if (step === 3) return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Estilo de Vida</h2>
      <div className="space-y-6 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Alimentación</label>
          <select value={nutrition} onChange={e => setNutrition(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
            <option value="">Seleccionar</option>
            <option value="excellent">Excelente</option>
            <option value="good">Buena</option>
            <option value="average">Promedio</option>
            <option value="poor">Deficiente</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Ejercicio</label>
          <select value={exercise} onChange={e => setExercise(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg">
            <option value="">Seleccionar</option>
            <option value="daily">Diario</option>
            <option value="often">3-5 veces/semana</option>
            <option value="sometimes">1-2 veces/semana</option>
            <option value="rarely">Raramente</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Nivel de estrés: {stress}</label>
          <input type="range" min="low" max="high" value={stress} onChange={e => setStress(e.target.value)} className="w-full" />
        </div>
      </div>
      <div className="flex gap-4">
        <button onClick={() => setStep(2)} className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50">Atrás</button>
        <button onClick={() => setStep(4)} className="flex-1 bg-teal-700 text-white py-3 rounded-lg font-medium hover:bg-teal-800">Continuar</button>
      </div>
    </div>
  );

  if (step === 4) return (
    <div>
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Tus Objetivos</h2>
      <textarea value={goals} onChange={e => setGoals(e.target.value)} className="w-full px-4 py-3 border border-gray-300 rounded-lg mb-6" rows={4} placeholder="¿Qué quieres lograr?" />
      <div className="flex gap-4">
        <button onClick={() => setStep(3)} className="flex-1 border border-gray-300 py-3 rounded-lg hover:bg-gray-50">Atrás</button>
        <button onClick={generatePlan} disabled={loading} className="flex-1 bg-teal-700 text-white py-3 rounded-lg font-medium hover:bg-teal-800 disabled:opacity-50">
          {loading ? 'Generando...' : 'Generar Mi Plan'}
        </button>
      </div>
    </div>
  );

  if (step === 5 && plan) return (
    <div>
      <div className="text-center mb-8">
        <div className="text-5xl mb-4">🎉</div>
        <h2 className="text-2xl font-serif text-gray-900 mb-2">¡Tu Plan está Listo!</h2>
      </div>
      {plan.readings?.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📚 Lecturas Recomendadas</h3>
          <div className="space-y-3">
            {plan.readings.map((r: any, i: number) => (
              <a key={i} href={"/libro/" + r.slug + "/"} className="block p-4 border border-gray-200 rounded-lg hover:border-teal-300">
                <h4 className="font-medium text-teal-700">{r.title}</h4>
                <p className="text-sm text-gray-600">{r.reason}</p>
              </a>
            ))}
          </div>
        </div>
      )}
      {plan.supplements?.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">💊 Suplementos</h3>
          <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
            {plan.supplements.map((s: any, i: number) => (
              <p key={i}>• <strong>{s.name}</strong> — {s.reason}</p>
            ))}
          </div>
        </div>
      )}
      <div className="flex gap-4">
        <a href="/libro/" className="flex-1 border border-gray-300 py-3 rounded-lg text-center hover:bg-gray-50">Comenzar a Leer</a>
        <button onClick={() => { setStep(1); setPlan(null); }} className="flex-1 bg-teal-700 text-white py-3 rounded-lg font-medium hover:bg-teal-800">Modificar</button>
      </div>
    </div>
  );

  return null;
}
