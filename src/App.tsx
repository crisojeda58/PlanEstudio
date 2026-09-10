import { useState, useEffect, useMemo } from 'react';
import { courses, categories } from './data/courses';
import { CourseCard, type CourseStatus } from './components/CourseCard';
import { ProgressHeader } from './components/ProgressHeader';
import { Info, ChevronDown, ChevronUp } from 'lucide-react';

function App() {
  const [courseStatuses, setCourseStatuses] = useState<Record<string, CourseStatus>>({});
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
    // Inicializar todos expandidos
    const initial: Record<string, boolean> = {};
    categories.forEach(c => initial[c.id] = true);
    return initial;
  });

  // Cargar de localStorage
  useEffect(() => {
    const saved = localStorage.getItem('planEstudioProgress');
    if (saved) {
      try {
        setCourseStatuses(JSON.parse(saved));
      } catch (e) {
        console.error("Error parsing progress", e);
      }
    }
  }, []);

  // Guardar en localStorage
  useEffect(() => {
    localStorage.setItem('planEstudioProgress', JSON.stringify(courseStatuses));
  }, [courseStatuses]);

  const handleStatusChange = (courseId: string, status: CourseStatus) => {
    setCourseStatuses(prev => ({
      ...prev,
      [courseId]: status
    }));
  };

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [categoryId]: !prev[categoryId]
    }));
  };

  const completedCount = useMemo(() => {
    return Object.values(courseStatuses).filter(s => s === 'completed').length;
  }, [courseStatuses]);

  return (
    <div 
      className="min-h-screen bg-dark-900 text-slate-200 py-12 px-4 sm:px-6 lg:px-8 bg-cover bg-center bg-fixed relative"
      style={{ backgroundImage: 'url(/bg.jpg)' }}
    >
      {/* Overlay oscuro para que el texto siga siendo legible sobre la imagen */}
      <div className="absolute inset-0 bg-dark-900/75 z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <ProgressHeader completed={completedCount} total={courses.length} />

        <div className="space-y-8">
          {categories.map(category => {
            const categoryCourses = courses.filter(c => c.categoryId === category.id);
            const isExpanded = expandedCategories[category.id];

            return (
              <section key={category.id} className="bg-dark-800/50 rounded-xl border border-slate-800/50 overflow-hidden">
                <button 
                  onClick={() => toggleCategory(category.id)}
                  className="w-full flex items-center justify-between p-6 bg-dark-800 hover:bg-slate-800/50 transition-colors text-left"
                >
                  <h2 className="text-xl font-semibold text-brand-300">
                    {category.title}
                  </h2>
                  {isExpanded ? <ChevronUp className="text-slate-500" /> : <ChevronDown className="text-slate-500" />}
                </button>
                
                {isExpanded && (
                  <div className="p-6 pt-2 grid gap-6">
                    {categoryCourses.map(course => (
                      <CourseCard
                        key={course.id}
                        course={course}
                        status={courseStatuses[course.id] || 'pending'}
                        onStatusChange={(status) => handleStatusChange(course.id, status)}
                      />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="mt-12 rounded-xl bg-brand-900/20 border border-brand-500/20 p-6 flex gap-4">
          <Info className="text-brand-400 shrink-0" size={24} />
          <div>
            <h3 className="text-lg font-semibold text-brand-300 mb-2">💡 Estrategia de Costos y Acceso</h3>
            <ul className="list-disc pl-5 space-y-2 text-slate-300">
              <li><strong className="text-slate-100">Modelo de suscripción:</strong> Coursera cobra entre $39 y $49 USD mensuales mientras el certificado esté activo. Si lo terminas rápido, pagas menos meses.</li>
              <li><strong className="text-slate-100">Ayuda Económica:</strong> Si entras al enlace de cualquier curso, verás la opción "Ayuda económica disponible" al lado del botón de inscripción. Puedes postular para obtener el certificado 100% gratis.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
