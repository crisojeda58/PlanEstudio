export interface Course {
  id: string;
  categoryId: string;
  title: string;
  provider: string;
  details: {
    instructor?: string;
    focus: string;
    dynamics?: string;
    value: string;
  };
  link: string;
}

export interface Category {
  id: string;
  title: string;
}

export const categories: Category[] = [
  { id: 'ai-ml', title: '1. Inteligencia Artificial y Machine Learning' },
  { id: 'cloud', title: '2. Cloud Computing y Arquitectura de Sistemas' },
  { id: 'security', title: '3. Ciberseguridad' },
  { id: 'dev-arch', title: '4. Arquitectura y Desarrollo Avanzado' },
  { id: 'management', title: '5. Gestión y Liderazgo Técnico (Tech Lead / Agile)' },
];

export const courses: Course[] = [
  // --- IA & Machine Learning ---
  {
    id: 'ibm-ai',
    categoryId: 'ai-ml',
    title: 'IBM AI Engineering Professional Certificate',
    provider: 'IBM',
    details: {
      focus: 'Práctico para ingenieros. Implementación, entrenamiento y despliegue de modelos con Python, Scikit-learn, PyTorch y TensorFlow.',
      dynamics: 'Videos interactivos, cuestionarios y laboratorios de programación en Jupyter Notebooks.',
      value: 'Credencial oficial emitida por IBM; ideal para roles de Machine Learning Engineer.'
    },
    link: 'https://www.coursera.org/professional-certificates/ai-engineer'
  },
  {
    id: 'ml-specialization',
    categoryId: 'ai-ml',
    title: 'Machine Learning Specialization',
    provider: 'DeepLearning.AI & Stanford',
    details: {
      instructor: 'Andrew Ng (pionero mundial de la IA).',
      focus: 'Fundamentos matemáticos y algorítmicos explicados de forma muy visual y práctica con laboratorios de código en Python.',
      value: 'Uno de los programas con mayor reputación técnica a nivel internacional.'
    },
    link: 'https://www.coursera.org/specializations/machine-learning-introduction'
  },

  // --- Cloud Computing ---
  {
    id: 'gcp-architect',
    categoryId: 'cloud',
    title: 'Google Cloud Cloud Architect Professional Certificate',
    provider: 'Google Cloud',
    details: {
      focus: 'Redes virtuales, infraestructura, almacenamiento, contenedores (Kubernetes) y seguridad en la nube de Google.',
      dynamics: 'Prácticas directas con Qwiklabs en consolas reales de Google Cloud en tiempo real.',
      value: 'Alineado directamente con la exigente certificación oficial de Google Cloud Architect.'
    },
    link: 'https://www.coursera.org/professional-certificates/gcp-cloud-architect'
  },

  // --- Ciberseguridad ---
  {
    id: 'google-cybersecurity',
    categoryId: 'security',
    title: 'Google Cybersecurity Professional Certificate',
    provider: 'Google',
    details: {
      focus: 'Detección de amenazas con herramientas SIEM (Splunk, Chronicle), automatización defensiva con Python y administración segura en Linux.',
      dynamics: 'Laboratorios interactivos que simulan ataques e incidentes cibernéticos reales.',
      value: 'Excelente credencial para roles de analista SOC y seguridad de infraestructura.'
    },
    link: 'https://www.coursera.org/professional-certificates/google-cybersecurity'
  },
  {
    id: 'ibm-cybersecurity',
    categoryId: 'security',
    title: 'IBM Cybersecurity Analyst Professional Certificate',
    provider: 'IBM',
    details: {
      focus: 'Inteligencia de amenazas, seguridad de bases de datos, vulnerabilidades de red, y uso avanzado de herramientas de análisis y penetración (penetration testing).',
      dynamics: 'Estudios de caso y laboratorios prácticos en entornos virtualizados.',
      value: 'Complemento perfecto a Google. Se centra más en herramientas empresariales y análisis de incidentes de bajo nivel.'
    },
    link: 'https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst'
  },
  {
    id: 'microsoft-cybersecurity',
    categoryId: 'security',
    title: 'Microsoft Cybersecurity Professional Certificate',
    provider: 'Microsoft',
    details: {
      focus: 'Gestión de identidades (Entra ID), seguridad en la nube de Azure, prevención de pérdida de datos y mitigación de riesgos.',
      dynamics: 'Preparación directa para la certificación oficial SC-900 de Microsoft.',
      value: 'Imprescindible si en tu carrera como ingeniero apuntarás a ecosistemas empresariales basados en Microsoft y Azure.'
    },
    link: 'https://www.coursera.org/professional-certificates/microsoft-cybersecurity'
  },

  // --- Arquitectura y Desarrollo Avanzado ---
  {
    id: 'software-architecture',
    categoryId: 'dev-arch',
    title: 'Software Design and Architecture Specialization',
    provider: 'University of Alberta',
    details: {
      focus: 'Diseño orientado a objetos, UML, patrones de diseño (Gang of Four) y arquitectura de software a nivel empresarial.',
      dynamics: 'Proyectos de diseño arquitectónico desde cero, evaluando mantenibilidad y escalabilidad.',
      value: 'Fundamental para pasar de ser un "programador" a un Ingeniero de Software / Arquitecto. Fuerte peso conceptual.'
    },
    link: 'https://www.coursera.org/specializations/software-design-architecture'
  },

  // --- Gestión y Liderazgo ---
  {
    id: 'google-pm',
    categoryId: 'management',
    title: 'Certificado Profesional de Gestión de Proyectos de Google',
    provider: 'Google',
    details: {
      focus: 'Metodologías ágiles, marcos de trabajo Scrum, estimación de presupuestos de software, control de riesgos y manejo de stakeholders.',
      dynamics: 'Muy interactivo, basado en resolver problemas cotidianos de empresas tecnológicas.',
      value: 'Clave para saltar a roles de Tech Lead o Scrum Master. Otorga horas válidas para certificaciones del PMI.'
    },
    link: 'https://www.coursera.org/professional-certificates/google-project-management'
  }
];
