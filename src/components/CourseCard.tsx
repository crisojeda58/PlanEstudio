import React from 'react';
import type { Course } from '../data/courses';
import { CheckCircle, Clock, ExternalLink, PlayCircle } from 'lucide-react';

export type CourseStatus = 'pending' | 'in-progress' | 'completed';

interface CourseCardProps {
  course: Course;
  status: CourseStatus;
  onStatusChange: (status: CourseStatus) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({ course, status, onStatusChange }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'completed': return 'border-emerald-500/50 bg-emerald-500/10';
      case 'in-progress': return 'border-brand-500/50 bg-brand-500/10';
      default: return 'border-slate-700 bg-dark-800 hover:border-slate-600';
    }
  };

  return (
    <div className={`relative flex flex-col rounded-xl border p-5 transition-all duration-300 ${getStatusColor()} shadow-lg shadow-black/20 group`}>
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span className="inline-block rounded bg-brand-700/80 px-2.5 py-1 text-xs font-semibold text-brand-100 shadow-sm backdrop-blur-sm mb-3">
            {course.provider}
          </span>
          <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors">
            {course.title}
          </h3>
        </div>
      </div>
      
      <div className="space-y-3 text-sm text-slate-300 flex-grow">
        {course.details.instructor && (
          <p><strong className="text-slate-100 font-semibold">Instructor:</strong> {course.details.instructor}</p>
        )}
        <p><strong className="text-slate-100 font-semibold">Enfoque:</strong> {course.details.focus}</p>
        {course.details.dynamics && (
          <p><strong className="text-slate-100 font-semibold">Dinámica:</strong> {course.details.dynamics}</p>
        )}
        <p><strong className="text-slate-100 font-semibold">Valor en CV:</strong> {course.details.value}</p>
      </div>

      <div className="mt-6 flex flex-wrap items-center justify-between gap-4 border-t border-slate-700/50 pt-4">
        <div className="flex gap-2">
          <button
            onClick={() => onStatusChange('pending')}
            className={`p-2 rounded-lg transition-colors ${status === 'pending' ? 'bg-slate-700 text-white' : 'text-slate-400 hover:bg-slate-800'}`}
            title="Pendiente"
          >
            <Clock size={18} />
          </button>
          <button
            onClick={() => onStatusChange('in-progress')}
            className={`p-2 rounded-lg transition-colors ${status === 'in-progress' ? 'bg-brand-600 text-white' : 'text-slate-400 hover:bg-brand-900/30'}`}
            title="En Progreso"
          >
            <PlayCircle size={18} />
          </button>
          <button
            onClick={() => onStatusChange('completed')}
            className={`p-2 rounded-lg transition-colors ${status === 'completed' ? 'bg-emerald-600 text-white' : 'text-slate-400 hover:bg-emerald-900/30'}`}
            title="Completado"
          >
            <CheckCircle size={18} />
          </button>
        </div>
        
        <a
          href={course.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-lg bg-brand-600 px-4 py-2 text-sm font-bold text-white transition-colors hover:bg-brand-500 focus:ring-2 focus:ring-brand-400 focus:outline-none"
        >
          Ver Curso
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
};
