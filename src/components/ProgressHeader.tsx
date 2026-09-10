import React from 'react';
import { Trophy } from 'lucide-react';

interface ProgressHeaderProps {
  completed: number;
  total: number;
}

export const ProgressHeader: React.FC<ProgressHeaderProps> = ({ completed, total }) => {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="mb-10 rounded-2xl bg-gradient-to-br from-dark-800 to-dark-900 p-6 border border-slate-800 shadow-xl relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-brand-500/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-emerald-400 mb-2">
            Plan de Especialización
          </h1>
          <p className="text-slate-400">
            Ruta estratégica para Ingenieros Informáticos
          </p>
        </div>

        <div className="flex flex-col min-w-[200px]">
          <div className="flex justify-between items-end mb-2">
            <span className="text-sm font-medium text-slate-300 flex items-center gap-2">
              <Trophy size={16} className="text-brand-400" />
              Progreso Global
            </span>
            <span className="text-2xl font-bold text-white">{percentage}%</span>
          </div>
          
          <div className="h-3 w-full bg-slate-800 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-brand-500 to-emerald-500 rounded-full transition-all duration-1000 ease-out"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <p className="text-xs text-slate-500 mt-2 text-right">
            {completed} de {total} cursos completados
          </p>
        </div>
      </div>
    </div>
  );
};
