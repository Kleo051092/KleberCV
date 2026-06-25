import { Skill, Project, TimelineItem, ChartDataPoint, EducationItem, CertificationItem, AdditionalInfo } from './types';

// ==========================================
// SPANISH DATA (DATA EN ESPAÑOL)
// ==========================================

export const skillsDataEs: Skill[] = [
  {
    name: 'Python (ML & Pandas)',
    category: 'core',
    icon: 'Binary',
    description: 'Análisis de datos avanzado, automatización y modelado predictivo de riesgo utilizando pandas, numpy y scikit-learn.'
  },
  {
    name: 'Power BI & DAX',
    category: 'tool',
    icon: 'BarChart3',
    description: 'Diseño de modelos semánticos robustos, dashboards interactivos y modelado DAX avanzado para la toma de decisiones ejecutivas.'
  },
  {
    name: 'SQL Server',
    category: 'core',
    icon: 'Database',
    description: 'Diseño de consultas complejas, optimización de queries, procesos ETL y flujos de integración de datos heterogéneos.'
  },
  {
    name: 'Inteligencia Artificial',
    category: 'ai',
    icon: 'Brain',
    description: 'Integración de modelos generativos, algoritmos clásicos de Machine Learning y automatización con agentes inteligentes.'
  },
  {
    name: 'Riesgo Financiero',
    category: 'domain',
    icon: 'TrendingUp',
    description: 'Modelación de ICL, calce de plazos, sistemas de alertas tempranas, cumplimiento normativo SUGEF y directrices de Basilea.'
  },
  {
    name: 'Cloud & Pipelines',
    category: 'tool',
    icon: 'Cpu',
    description: 'Certificado Google Cloud Digital Leader. Integración con sistemas ERP/SAP y flujos de automatización en la nube.'
  }
];

export const projectDataEs: Project = {
  id: 'torre-control',
  title: 'Torre de Control de Riesgo Financiero',
  description: 'Sistema automatizado que extrae diariamente indicadores macroeconómicos del webservice del BCCR (TBP, tipo de cambio, TPM) y los cruza con métricas internas de riesgo de liquidez (ICL, Ltd, calce de plazos, mora legal). Sirve como base proactiva para informes presentados ante la Junta Directiva bajo la normativa SUGEF 2-10.',
  tags: ['Python', 'BCCR Webservice', 'Power BI', 'SQL Server', 'SUGEF 2-10', 'Excel (VBA)'],
  metrics: [
    { label: 'Tiempo de Cierre Mensual', value: '-60.0%', improved: true },
    { label: 'Tiempo de Respuesta', value: '-40.0%', improved: true },
    { label: 'Inconsistencias de Registros', value: '-45.0%', improved: true },
    { label: 'Volumen Registros Analizados', value: '300K+', improved: true }
  ]
};

export const projectsDataListEs: Project[] = [
  {
    id: 'dashboard-resultados',
    title: 'Dashboard de Resultados Comerciales (S&OP)',
    description: 'Tabla de información de ventas con Power BI para centralizar los KPI clave que la gerencia requiere conocer mensualmente: facturación diaria, vendedor, zona geográfica, marca y volumen.',
    longDescription: 'Un cuadro de mando interactivo y multiplataforma desarrollado en Power BI para brindar una visión en tiempo real del estado de ventas de la organización. Permite a los directores comerciales y de operaciones consultar la facturación consolidada en millones de colones, analizar el rendimiento individual de cada vendedor, segmentar por marcas y filtrar por zonas geográficas de distribución (GAM y Rural). Funciona de forma multiplataforma, lo cual facilita el acceso móvil inmediato de directores y gerentes para la toma de decisiones basada en evidencia.',
    category: 'sales',
    tags: ['Power BI', 'DAX', 'Modelado Semántico', 'Control de Ventas', 'Multiplataforma', 'KPIs Gerenciales'],
    metrics: [
      { label: 'Toma de Decisiones', value: 'Tiempo Real', improved: true },
      { label: 'Centralización de KPIs', value: '100%', improved: true },
      { label: 'Acceso Gerencial', value: 'Multiplataforma', improved: true },
      { label: 'Protección de Datos', value: 'Confidencial', improved: true }
    ]
  },
  {
    id: 'torre-control',
    title: 'Torre de Control: Monitoreo Diario de Indicadores',
    description: 'Sistema automatizado que extrae diariamente indicadores macroeconómicos del webservice del BCCR y los cruza con métricas internas de riesgo de liquidez (ICL, Ltd, calce de plazos, mora legal).',
    longDescription: 'Sistema de monitoreo financiero automatizado mediante el uso de Python, que integra de manera robusta la extracción automática de variables macroeconómicas del Banco Central de Costa Rica (BCCR) tales como TBP, tipo de cambio y TPM, cruzándola directamente con métricas internas de riesgo. Monitorea proactivamente la mora legal, mora > 90 días, ratios de liquidez y calce de plazos. Consiste en transformar procesos manuales heredados en una "Torre de Control" de alta precisión analítica, permitiendo a la alta gerencia anticipar fluctuaciones del mercado, tomar decisiones informadas y cumplir con el marco regulatorio diario de la SUGEF (SUGEF 2-10).',
    category: 'finance',
    tags: ['Python', 'Webservice BCCR', 'SQL Server', 'SUGEF 2-10', 'Riesgo Financiero', 'Alertas Tempranas', 'Métricas de Liquidez'],
    metrics: [
      { label: 'Tiempo de Cierre Mensual', value: '-60.0%', improved: true },
      { label: 'Tiempo de Respuesta', value: '-40.0%', improved: true },
      { label: 'Extracción de Variables', value: 'Automática / Diaria', improved: true },
      { label: 'Mitigación de Riesgos', value: 'Proactiva', improved: true }
    ]
  },
  {
    id: 'forecasting-ventas',
    title: 'ForeCasting / Análisis de Ventas Futuras',
    description: 'Herramienta de proyección de ventas basada en el comportamiento histórico por ciclo y estacionalidad, previendo los resultados de ventas con cierto nivel de confianza.',
    longDescription: 'Herramienta analítica para análisis de información y pronóstico de ventas futuras basada en el comportamiento del histórico de ventas por ciclos y estacionalidades de mercado. Utiliza técnicas de regresión y modelado de series de tiempo para estimar volúmenes y tendencias de facturación futuras, previendo los resultados comerciales con intervalos de confianza sólidos. Facilita la planificación proactiva de inventarios, la definición de metas comerciales realistas basadas en datos y la optimización de flujos de caja.',
    category: 'predictive',
    tags: ['Power BI', 'Modelado Estadístico', 'Forecasting', 'Análisis de Ciclos', 'Series de Tiempo', 'Planificación Comercial'],
    metrics: [
      { label: 'Precisión de Pronóstico', value: '94.2%', improved: true },
      { label: 'Planificación de Stock', value: 'Optimizado', improved: true },
      { label: 'Intervalos de Confianza', value: 'Establecidos', improved: true },
      { label: 'Visión de Futuro', value: 'Basada en Datos', improved: true }
    ]
  },
  {
    id: 'distribucion-mercado',
    title: 'Dashboard de Distribución de Mercado (Suzuki CR)',
    description: 'Herramienta analítica para procesar más de 300K+ registros de ventas, analizando distribución geográfica, edad, sexo y modelo de producto.',
    longDescription: 'Herramienta diseñada para el análisis de distribución y penetración de mercado a gran escala, procesando más de 300,000 registros sintetizados del sector automotriz. El tablero integra variables demográficas como rango de edad, sexo y región de origen con variables comerciales como producto (modelos insignia como la motocicleta Suzuki GIXXER-150), mes de compra, campaña publicitaria de procedencia y origen de la venta (feria, walking, virtual). Permite optimizar el ROI de campañas de publicidad digital y segmentar con precisión quirúrgica el mercado de colocación.',
    category: 'market',
    tags: ['Power BI', '300K+ Registros', 'Segmentación Demográfica', 'Suzuki CR', 'Análisis Geográfico', 'Canales de Venta'],
    metrics: [
      { label: 'Registros Procesados', value: '300K+', improved: true },
      { label: 'Inconsistencias de Datos', value: '-45.0%', improved: true },
      { label: 'Segmentación de Mercado', value: 'Multidimensional', improved: true },
      { label: 'Trazabilidad de Campaña', value: 'Completa', improved: true }
    ]
  },
  {
    id: 'analisis-competencia',
    title: 'Dashboard de Análisis de Competencia',
    description: 'Herramienta de benchmarking comercial basada en bases de datos externas para evaluar el rendimiento de ventas interanual frente al mercado.',
    longDescription: 'Herramienta estratégica para el análisis de la competencia y el entorno del mercado, que permite visualizar cómo venden los competidores, qué productos específicos colocan en qué regiones, y a qué rangos de edad en comparación con la marca propia. Utiliza la integración de bases de datos externas del sector automotriz para ofrecer un análisis comparativo interanual detallado por grupo de marcas y categoría (Scooter, Sport, Baja Cilindrada, Alta Cilindrada, Eléctricas), determinando el Market Share y midiendo el GAP de ventas de manera precisa.',
    category: 'market',
    tags: ['Power BI', 'Benchmarking', 'Bases de Datos Externas', 'Market Share (Cuota)', 'Análisis de GAP', 'Inteligencia de Negocios'],
    metrics: [
      { label: 'Integración BD Externa', value: '100%', improved: true },
      { label: 'Análisis Comparativo', value: 'Interanual', improved: true },
      { label: 'Mapeo de Categorías', value: 'Completo', improved: true },
      { label: 'Identificación de GAPs', value: 'Inmediato', improved: true }
    ]
  }
];

export const timelineDataEs: TimelineItem[] = [
  {
    id: 'exp-1',
    role: 'Analista de Riesgos',
    company: 'Financiera MultiMoney',
    period: 'Feb 2024 – Ago 2025',
    description: 'Estratega líder en la automatización de flujos de control de riesgos financieros y regulatorios bajo lineamientos SUGEF.',
    impactPoints: [
      'Desarrollé y automaticé reportes regulatorios SUGEF y tableros de gestión en Power BI y Excel, reduciendo en ~60% los tiempos de cierre mensual y eliminando errores manuales de consolidación.',
      'Diseñé modelos cuantitativos de riesgo (ICL, calce de plazos, alertas tempranas) integrados directamente a bases de datos SQL, aumentando la trazabilidad institucional y reduciendo el tiempo de respuesta ante desvíos en ~40%.',
      'Construí un sistema automatizado de monitoreo diario ("Torre de Control") en Python que extrae indicadores del webservice del BCCR (TBP, tipo de cambio) y los cruza con mora legal y ratios de liquidez, eliminando la recolección manual.',
      'Elaboré informes de alertas tempranas (UAIR-INF-02-25) bajo el Acuerdo SUGEF 2-10 para presentar ante el Comité de Riesgos y la Junta Directiva.'
    ],
    techUsed: ['Python', 'Power BI', 'SQL Server', 'Webservices', 'Excel (VBA)', 'SUGEF 2-10']
  },
  {
    id: 'exp-2',
    role: 'Analista de Inteligencia Empresarial',
    company: 'Santillana',
    period: 'Feb 2023 – Ene 2024',
    description: 'Responsable de la democratización de la información y la estructuración de la arquitectura analítica comercial.',
    impactPoints: [
      'Implementé modelo semántico y dashboards de autoservicio en Power BI (DAX + Power Query), reduciendo en ~50% la dependencia del área de TI para generación de reportes en áreas clave de la organización.',
      'Diseñé procesos ETL avanzados para integrar múltiples fuentes de datos heterogéneas, logrando una disminución del 35% en reprocesos y una mejora sustancial en la integridad de los datos.',
      'Identifiqué patrones comerciales mediante analítica avanzada, generando recomendaciones estratégicas que optimizaron el inventario y contribuyeron al cumplimiento de objetivos trimestrales.'
    ],
    techUsed: ['Power BI', 'DAX', 'Power Query', 'ETL', 'SQL Server', 'Modelado Semántico']
  },
  {
    id: 'exp-3',
    role: 'Analista de Datos Sr.',
    company: 'Grupo V-Motors | Motos Suzuki CR',
    period: 'Ene 2018 – Feb 2023',
    description: 'Especialista a cargo del modelado predictivo, forecasting de ventas e inteligencia competitiva sectorial.',
    impactPoints: [
      'Diseñé e implementé dashboards de KPIs de ventas y postventa en Power BI analizando más de 300K+ registros de ventas con segmentación multidimensional avanzada.',
      'Desarrollé herramienta de forecasting de ventas en Power BI con análisis estadístico de comportamiento histórico por ciclo, entregando proyecciones con intervalos de confianza.',
      'Implementé estrategias integrales de gobierno de datos en sistemas CRM, SACS y ERP, logrando estandarización de registros maestros y reducción de inconsistencias en un ~45%.',
      'Conduje análisis competitivo de mercado de motos (sell-out por unidades y montos, 2020-2022) comparando 12 categorías de producto.'
    ],
    techUsed: ['Power BI', 'Python', 'SQL Server', 'Forecasting', 'CRM', 'ERP', 'SACS']
  },
  {
    id: 'exp-4',
    role: 'Analista de Datos Jr. (Contrato Temporal)',
    company: 'P&G y Walmart',
    period: 'Feb 2016 – Nov 2017',
    description: 'A cargo de la depuración y procesamiento de datos masivos para optimizar flujos interdepartamentales.',
    impactPoints: [
      'Automaticé rutinas de extracción y depuración de grandes volúmenes de datos con Excel y VBA, reduciendo en ~70% el tiempo de generación de reportes recurrentes.',
      'Desarrollé reportes repetibles y documentados para múltiples áreas de negocio, mejorando la trazabilidad de la información y el handoff de datos entre departamentos.'
    ],
    techUsed: ['Excel', 'VBA', 'Automatización de Reportes', 'Depuración de Datos', 'Trazabilidad']
  },
  {
    id: 'exp-5',
    role: 'Asistente de Riesgos',
    company: 'Banco Cathay',
    period: 'Sep 2014 – Ene 2016',
    description: 'Responsable del cálculo, monitoreo y reportería prudencial bajo regulaciones bancarias nacionales.',
    impactPoints: [
      'Calculé y monitoreé indicadores prudenciales bajo normativa bancaria, elaborando informes para comités de riesgo y auditoría mediante Access y SQL.',
      'Desarrollé plantillas automatizadas en Excel que redujeron en ~55% los tiempos de elaboración de informes recurrentes.'
    ],
    techUsed: ['Microsoft Access', 'SQL', 'Excel', 'Indicadores Prudenciales', 'Normativa Bancaria']
  },
  {
    id: 'exp-6',
    role: 'Supervisor de Producción',
    company: 'EPTISA',
    period: 'Ago 2011 – Sep 2013',
    description: 'Líder de estandarización operacional, control de calidad documental y reportería operativa.',
    impactPoints: [
      'Estandaricé procesos productivos logrando reducción medible de costos operativos y aumento del throughput del área.',
      'Gestioné base de datos de producción y control documental, garantizando trazabilidad y disponibilidad de información crítica.'
    ],
    techUsed: ['Estandarización', 'Bases de Datos', 'Control Documental', 'Optimización Operativa']
  }
];

export const educationDataEs: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Especialización en IA para Análisis de Datos Económicos',
    institution: 'Universidad de Costa Rica',
    period: '2026',
    isEnCurso: true
  },
  {
    id: 'edu-2',
    degree: 'Bachillerato en Economía',
    institution: 'Universidad de Costa Rica',
    period: '2010 – 2017'
  },
  {
    id: 'edu-3',
    degree: 'Técnico en Contabilidad',
    institution: 'Liceo Monseñor Rubén Odio Herrera',
    period: '2008 – 2009'
  },
  {
    id: 'edu-4',
    degree: 'Bachillerato en Educación Media',
    institution: 'Liceo Monseñor Rubén Odio Herrera',
    period: '2005 – 2009'
  }
];

export const certificationsDataEs: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'IA aplicada al Análisis de Datos Económicos',
    institution: 'Universidad de Costa Rica',
    date: '2026',
    isEnCurso: true
  },
  {
    id: 'cert-2',
    title: 'Manipulación de Datos en SQL',
    institution: 'Instituto Nacional de Aprendizaje (INA)',
    date: 'Ene 2026'
  },
  {
    id: 'cert-3',
    title: 'Excel Avanzado',
    institution: 'Instituto Nacional de Aprendizaje (INA)',
    date: 'Nov 2025'
  },
  {
    id: 'cert-4',
    title: 'Base de Datos Access',
    institution: 'Instituto Nacional de Aprendizaje (INA)',
    date: 'Nov 2025'
  },
  {
    id: 'cert-5',
    title: 'Cloud Digital Leader',
    institution: 'Instituto Nacional de Aprendizaje (INA)',
    date: 'Nov 2025'
  },
  {
    id: 'cert-6',
    title: 'Modelos de Riesgo Crédito con Python',
    institution: 'Udemy',
    date: 'Dic 2024'
  },
  {
    id: 'cert-7',
    title: 'Master en Python: Django, Flask y Tkinter',
    institution: 'Udemy',
    date: 'Dic 2023'
  },
  {
    id: 'cert-8',
    title: 'Curso Completo Power BI Desktop',
    institution: 'Udemy',
    date: 'Jul 2023'
  }
];

export const additionalInfoDataEs: AdditionalInfo = {
  languages: ['Español (C1 — Nativo)', 'Inglés Técnico (Lectura, Comprensión, Documentación y Negociación de Flujos Analíticos)'],
  licenses: ['A3', 'B1', 'Vehículo liviano propio'],
  availability: ['Pasaporte al día', 'Disponibilidad para viajar nacional e internacionalmente']
};

export const chartDataEs: ChartDataPoint[] = [
  { month: 'Ene', accuracy: 74, baseline: 72 },
  { month: 'Feb', accuracy: 76, baseline: 72 },
  { month: 'Mar', accuracy: 79, baseline: 71 },
  { month: 'Abr', accuracy: 83, baseline: 73 },
  { month: 'May', accuracy: 87, baseline: 72 },
  { month: 'Jun', accuracy: 91, baseline: 73 },
  { month: 'Jul', accuracy: 93, baseline: 72 },
  { month: 'Ago', accuracy: 94, baseline: 74 }
];

// ==========================================
// ENGLISH DATA (DATA EN INGLÉS)
// ==========================================

export const skillsDataEn: Skill[] = [
  {
    name: 'Python (ML & Pandas)',
    category: 'core',
    icon: 'Binary',
    description: 'Advanced data analysis, automation, and predictive risk modeling using pandas, numpy, and scikit-learn.'
  },
  {
    name: 'Power BI & DAX',
    category: 'tool',
    icon: 'BarChart3',
    description: 'Design of robust semantic models, interactive dashboards, and advanced DAX modeling for executive decision-making.'
  },
  {
    name: 'SQL Server',
    category: 'core',
    icon: 'Database',
    description: 'Complex query design, query optimization, ETL processes, and integration flows of heterogeneous data.'
  },
  {
    name: 'Artificial Intelligence',
    category: 'ai',
    icon: 'Brain',
    description: 'Integration of generative models, classical Machine Learning algorithms, and automation with intelligent agents.'
  },
  {
    name: 'Financial Risk',
    category: 'domain',
    icon: 'TrendingUp',
    description: 'ICL modeling, maturity matching, early warning systems, SUGEF regulatory compliance, and Basel guidelines.'
  },
  {
    name: 'Cloud & Pipelines',
    category: 'tool',
    icon: 'Cpu',
    description: 'Certified Google Cloud Digital Leader. Integration with ERP/SAP systems and cloud automation flows.'
  }
];

export const projectDataEn: Project = {
  id: 'torre-control',
  title: 'Financial Risk Control Tower',
  description: 'Automated system that daily extracts macroeconomic indicators from the BCCR webservice (TBP, exchange rate, TPM) and crosses them with internal liquidity risk metrics (ICL, Ltd, maturity matching, legal delinquency). Serves as a proactive base for reports presented to the Board of Directors under SUGEF 2-10 regulations.',
  tags: ['Python', 'BCCR Webservice', 'Power BI', 'SQL Server', 'SUGEF 2-10', 'Excel (VBA)'],
  metrics: [
    { label: 'Monthly Closing Time', value: '-60.0%', improved: true },
    { label: 'Response Time', value: '-40.0%', improved: true },
    { label: 'Record Inconsistencies', value: '-45.0%', improved: true },
    { label: 'Analyzed Records Volume', value: '300K+', improved: true }
  ]
};

export const projectsDataListEn: Project[] = [
  {
    id: 'dashboard-resultados',
    title: 'Commercial Results Dashboard (S&OP)',
    description: 'Sales information dashboard with Power BI to centralize key KPIs that management requires monthly: daily billing, salesperson, geographical zone, brand, and volume.',
    longDescription: 'An interactive and multiplatform dashboard developed in Power BI to provide a real-time view of the organization\'s sales status. It allows commercial and operations directors to consult consolidated billing in millions of colones, analyze the individual performance of each salesperson, segment by brand, and filter by geographical distribution zones (GAM and Rural). It works across multiple platforms, facilitating immediate mobile access for directors and managers for evidence-based decision-making.',
    category: 'sales',
    tags: ['Power BI', 'DAX', 'Semantic Modeling', 'Sales Control', 'Multiplatform', 'Management KPIs'],
    metrics: [
      { label: 'Decision Making', value: 'Real Time', improved: true },
      { label: 'KPI Centralization', value: '100%', improved: true },
      { label: 'Management Access', value: 'Multiplatform', improved: true },
      { label: 'Data Protection', value: 'Confidential', improved: true }
    ]
  },
  {
    id: 'torre-control',
    title: 'Control Tower: Daily Indicator Monitoring',
    description: 'Automated system that daily extracts macroeconomic indicators from the BCCR webservice and crosses them with internal liquidity risk metrics (ICL, Ltd, maturity matching, legal delinquency).',
    longDescription: 'Automated financial monitoring system using Python, which robustly integrates the automatic extraction of macroeconomic variables from the Central Bank of Costa Rica (BCCR) such as TBP, exchange rate, and TPM, crossing it directly with internal risk metrics. It proactively monitors legal delinquency, delinquency > 90 days, liquidity ratios, and maturity matching. It consists of transforming legacy manual processes into a high-precision analytical "Control Tower", allowing senior management to anticipate market fluctuations, make informed decisions, and comply with the daily regulatory framework of SUGEF (SUGEF 2-10).',
    category: 'finance',
    tags: ['Python', 'BCCR Webservice', 'SQL Server', 'SUGEF 2-10', 'Financial Risk', 'Early Warnings', 'Liquidity Metrics'],
    metrics: [
      { label: 'Monthly Closing Time', value: '-60.0%', improved: true },
      { label: 'Response Time', value: '-40.0%', improved: true },
      { label: 'Variable Extraction', value: 'Automatic / Daily', improved: true },
      { label: 'Risk Mitigation', value: 'Proactive', improved: true }
    ]
  },
  {
    id: 'forecasting-ventas',
    title: 'Forecasting / Future Sales Analysis',
    description: 'Sales projection tool based on historical behavior by cycle and seasonality, forecasting sales results with a certain level of confidence.',
    longDescription: 'Analytical tool for information analysis and forecasting future sales based on historical sales behavior by cycles and market seasonalities. It uses regression techniques and time series modeling to estimate future billing volumes and trends, forecasting commercial results with solid confidence intervals. It facilitates proactive inventory planning, definition of realistic sales goals based on data, and optimization of cash flows.',
    category: 'predictive',
    tags: ['Power BI', 'Statistical Modeling', 'Forecasting', 'Cycle Analysis', 'Time Series', 'Commercial Planning'],
    metrics: [
      { label: 'Forecast Accuracy', value: '94.2%', improved: true },
      { label: 'Stock Planning', value: 'Optimized', improved: true },
      { label: 'Confidence Intervals', value: 'Established', improved: true },
      { label: 'Vision of Future', value: 'Data-Driven', improved: true }
    ]
  },
  {
    id: 'distribucion-mercado',
    title: 'Market Distribution Dashboard (Suzuki CR)',
    description: 'Analytical tool to process over 300K+ sales records, analyzing geographic distribution, age, sex, and product model.',
    longDescription: 'Tool designed for large-scale market distribution and penetration analysis, processing over 300,000 synthesized records from the automotive sector. The dashboard integrates demographic variables such as age range, sex, and region of origin with commercial variables such as product (flagship models like the Suzuki GIXXER-150 motorcycle), month of purchase, originating advertising campaign, and source of sale (fair, walking, virtual). It allows optimizing the ROI of digital advertising campaigns and segmenting the placement market with surgical precision.',
    category: 'market',
    tags: ['Power BI', '300K+ Records', 'Demographic Segmentation', 'Suzuki CR', 'Geographic Analysis', 'Sales Channels'],
    metrics: [
      { label: 'Processed Records', value: '300K+', improved: true },
      { label: 'Data Inconsistencies', value: '-45.0%', improved: true },
      { label: 'Market Segmentation', value: 'Multidimensional', improved: true },
      { label: 'Campaign Traceability', value: 'Complete', improved: true }
    ]
  },
  {
    id: 'analisis-competencia',
    title: 'Competitor Analysis Dashboard',
    description: 'Commercial benchmarking tool based on external databases to evaluate year-over-year sales performance against the market.',
    longDescription: 'Strategic tool for the analysis of competitors and the market environment, which allows visualizing how competitors sell, what specific products they place in which regions, and at what age ranges compared to the own brand. It uses the integration of external databases from the automotive sector to offer a detailed year-over-year comparative analysis by brand group and category (Scooter, Sport, Low Displacement, High Displacement, Electric), determining Market Share and measuring the sales GAP precisely.',
    category: 'market',
    tags: ['Power BI', 'Benchmarking', 'External Databases', 'Market Share', 'GAP Analysis', 'Business Intelligence'],
    metrics: [
      { label: 'External DB Integration', value: '100%', improved: true },
      { label: 'Comparative Analysis', value: 'Year-over-Year', improved: true },
      { label: 'Category Mapping', value: 'Complete', improved: true },
      { label: 'GAP Identification', value: 'Immediate', improved: true }
    ]
  }
];

export const timelineDataEn: TimelineItem[] = [
  {
    id: 'exp-1',
    role: 'Risk Analyst',
    company: 'Financiera MultiMoney',
    period: 'Feb 2024 – Aug 2025',
    description: 'Lead strategist in the automation of financial and regulatory risk control workflows under SUGEF guidelines.',
    impactPoints: [
      'Developed and automated SUGEF regulatory reports and management dashboards in Power BI and Excel, reducing monthly closing times by ~60% and eliminating manual consolidation errors.',
      'Designed quantitative risk models (ICL, maturity matching, early warnings) integrated directly with SQL databases, increasing institutional traceability and reducing response times to deviations by ~40%.',
      'Built an automated daily monitoring system ("Control Tower") in Python that extracts indicators from the BCCR webservice (TBP, exchange rate) and crosses them with legal delinquency and liquidity ratios, eliminating manual collection.',
      'Prepared early warning reports (UAIR-INF-02-25) under the SUGEF 2-10 Agreement to present before the Risk Committee and the Board of Directors.'
    ],
    techUsed: ['Python', 'Power BI', 'SQL Server', 'Webservices', 'Excel (VBA)', 'SUGEF 2-10']
  },
  {
    id: 'exp-2',
    role: 'Business Intelligence Analyst',
    company: 'Santillana',
    period: 'Feb 2023 – Jan 2024',
    description: 'Responsible for information democratization and structuring the commercial analytical architecture.',
    impactPoints: [
      'Implemented semantic models and self-service dashboards in Power BI (DAX + Power Query), reducing dependency on the IT department by ~50% for report generation in key areas of the organization.',
      'Designed advanced ETL processes to integrate multiple heterogeneous data sources, achieving a 35% reduction in reworks and a substantial improvement in data integrity.',
      'Identified commercial patterns through advanced analytics, generating strategic recommendations that optimized inventory and contributed to meeting quarterly goals.'
    ],
    techUsed: ['Power BI', 'DAX', 'Power Query', 'ETL', 'SQL Server', 'Semantic Modeling']
  },
  {
    id: 'exp-3',
    role: 'Sr. Data Analyst',
    company: 'V-Motors Group | Suzuki Motorcycles CR',
    period: 'Jan 2018 – Feb 2023',
    description: 'Specialist in charge of predictive modeling, sales forecasting, and sectorial competitive intelligence.',
    impactPoints: [
      'Designed and implemented sales and post-sales KPI dashboards in Power BI, analyzing over 300K+ sales records with advanced multidimensional segmentation.',
      'Developed a sales forecasting tool in Power BI with statistical analysis of historical behavior by cycle, delivering projections with confidence intervals.',
      'Implemented comprehensive data governance strategies in CRM, SACS, and ERP systems, achieving standardization of master records and reducing inconsistencies by ~45%.',
      'Conducted competitive market analysis of motorcycles (sell-out by units and amounts, 2020-2022) comparing 12 product categories.'
    ],
    techUsed: ['Power BI', 'Python', 'SQL Server', 'Forecasting', 'CRM', 'ERP', 'SACS']
  },
  {
    id: 'exp-4',
    role: 'Jr. Data Analyst (Temporary Contract)',
    company: 'P&G and Walmart',
    period: 'Feb 2016 – Nov 2017',
    description: 'In charge of debugging and processing massive data to optimize interdepartmental flows.',
    impactPoints: [
      'Automated extraction and debugging routines for large volumes of data using Excel and VBA, reducing recurring report generation times by ~70%.',
      'Developed repeatable and documented reports for multiple business areas, improving information traceability and data handoff between departments.'
    ],
    techUsed: ['Excel', 'VBA', 'Report Automation', 'Data Debugging', 'Traceability']
  },
  {
    id: 'exp-5',
    role: 'Risk Assistant',
    company: 'Cathay Bank',
    period: 'Sep 2014 – Jan 2016',
    description: 'Responsible for the calculation, monitoring, and prudential reporting under national banking regulations.',
    impactPoints: [
      'Calculated and monitored prudential indicators under banking regulations, preparing reports for risk and audit committees using Access and SQL.',
      'Developed automated templates in Excel that reduced recurring report preparation times by ~55%.'
    ],
    techUsed: ['Microsoft Access', 'SQL', 'Excel', 'Prudential Indicators', 'Banking Regulations']
  },
  {
    id: 'exp-6',
    role: 'Production Supervisor',
    company: 'EPTISA',
    period: 'Aug 2011 – Sep 2013',
    description: 'Operational standardization leader, document quality control, and operational reporting.',
    impactPoints: [
      'Standardized production processes achieving measurable reduction in operational costs and increase in area throughput.',
      'Managed production database and document control, ensuring traceability and availability of critical information.'
    ],
    techUsed: ['Standardization', 'Databases', 'Document Control', 'Operational Optimization']
  }
];

export const educationDataEn: EducationItem[] = [
  {
    id: 'edu-1',
    degree: 'Specialization in AI for Economic Data Analysis',
    institution: 'University of Costa Rica',
    period: '2026',
    isEnCurso: true
  },
  {
    id: 'edu-2',
    degree: 'Bachelor\'s Degree in Economics',
    institution: 'University of Costa Rica',
    period: '2010 – 2017'
  },
  {
    id: 'edu-3',
    degree: 'Accounting Technician',
    institution: 'Liceo Monseñor Rubén Odio Herrera',
    period: '2008 – 2009'
  },
  {
    id: 'edu-4',
    degree: 'High School Diploma',
    institution: 'Liceo Monseñor Rubén Odio Herrera',
    period: '2005 – 2009'
  }
];

export const certificationsDataEn: CertificationItem[] = [
  {
    id: 'cert-1',
    title: 'AI applied to Economic Data Analysis',
    institution: 'University of Costa Rica',
    date: '2026',
    isEnCurso: true
  },
  {
    id: 'cert-2',
    title: 'Data Manipulation in SQL',
    institution: 'National Learning Institute (INA)',
    date: 'Jan 2026'
  },
  {
    id: 'cert-3',
    title: 'Advanced Excel',
    institution: 'National Learning Institute (INA)',
    date: 'Nov 2025'
  },
  {
    id: 'cert-4',
    title: 'Access Database',
    institution: 'National Learning Institute (INA)',
    date: 'Nov 2025'
  },
  {
    id: 'cert-5',
    title: 'Cloud Digital Leader',
    institution: 'National Learning Institute (INA)',
    date: 'Nov 2025'
  },
  {
    id: 'cert-6',
    title: 'Credit Risk Models with Python',
    institution: 'Udemy',
    date: 'Dec 2024'
  },
  {
    id: 'cert-7',
    title: 'Python Master: Django, Flask, and Tkinter',
    institution: 'Udemy',
    date: 'Dec 2023'
  },
  {
    id: 'cert-8',
    title: 'Complete Power BI Desktop Course',
    institution: 'Udemy',
    date: 'Jul 2023'
  }
];

export const additionalInfoDataEn: AdditionalInfo = {
  languages: ['Spanish (C1 — Native)', 'Technical English (Reading, Comprehension, Documentation, and Analytical Flows Negotiation)'],
  licenses: ['A3', 'B1', 'Own light vehicle'],
  availability: ['Valid passport', 'Availability to travel nationally and internationally']
};

export const chartDataEn: ChartDataPoint[] = [
  { month: 'Jan', accuracy: 74, baseline: 72 },
  { month: 'Feb', accuracy: 76, baseline: 72 },
  { month: 'Mar', accuracy: 79, baseline: 71 },
  { month: 'Apr', accuracy: 83, baseline: 73 },
  { month: 'May', accuracy: 87, baseline: 72 },
  { month: 'Jun', accuracy: 91, baseline: 73 },
  { month: 'Jul', accuracy: 93, baseline: 72 },
  { month: 'Aug', accuracy: 94, baseline: 74 }
];

// ==========================================
// SELECTOR FUNCTIONS (FUNCIONES SELECTORAS)
// ==========================================

export const getSkillsData = (lang: 'es' | 'en'): Skill[] => {
  return lang === 'es' ? skillsDataEs : skillsDataEn;
};

export const getProjectData = (lang: 'es' | 'en'): Project => {
  return lang === 'es' ? projectDataEs : projectDataEn;
};

export const getProjectsDataList = (lang: 'es' | 'en'): Project[] => {
  return lang === 'es' ? projectsDataListEs : projectsDataListEn;
};

export const getTimelineData = (lang: 'es' | 'en'): TimelineItem[] => {
  return lang === 'es' ? timelineDataEs : timelineDataEn;
};

export const getEducationData = (lang: 'es' | 'en'): EducationItem[] => {
  return lang === 'es' ? educationDataEs : educationDataEn;
};

export const getCertificationsData = (lang: 'es' | 'en'): CertificationItem[] => {
  return lang === 'es' ? certificationsDataEs : certificationsDataEn;
};

export const getAdditionalInfoData = (lang: 'es' | 'en'): AdditionalInfo => {
  return lang === 'es' ? additionalInfoDataEs : additionalInfoDataEn;
};

export const getChartData = (lang: 'es' | 'en'): ChartDataPoint[] => {
  return lang === 'es' ? chartDataEs : chartDataEn;
};

// Default exports for backward compatibility (to prevent breaking any static imports)
export const skillsData = skillsDataEs;
export const projectData = projectDataEs;
export const projectsDataList = projectsDataListEs;
export const timelineData = timelineDataEs;
export const educationData = educationDataEs;
export const certificationsData = certificationsDataEs;
export const additionalInfoData = additionalInfoDataEs;
export const chartData = chartDataEs;
