export interface Module {
    title: string
    description: string
}

export interface Course {
    id: number
    title: string
    description: string
    longDescription: string
    thumbnail: string
    progress: number
    skills: string[]
    duration: string
    level: 'Débutant' | 'Intermédiaire' | 'Avancé'
    category: 'IA' | 'Génie Logiciel'
    syllabus: Module[]
    prerequisites: string[]
    mentor: {
        name: string
        role: string
        avatar: string
    }
}

export const courses: Course[] = [
    // --- INTELLIGENCE ARTIFICIELLE ---
    {
        id: 1,
        title: 'Spécialisation IA & Générative',
        description: 'Parcours complet : des bases de Python à l\'IA générative avancée (LLMs, RAG). Devenez un expert en IA appliquée.',
        longDescription: 'Ce programme phare couvre tout le spectre de l\'IA moderne. Vous commencerez par maîtiser le Prompt Engineering et les outils d\'assistance, pour finir par le fine-tuning de modèles complexes sur le Cloud.',
        thumbnail: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
        progress: 0,
        skills: ['Python', 'OpenAI API', 'HuggingFace', 'LangChain'],
        duration: '6 mois',
        level: 'Intermédiaire',
        category: 'IA',
        mentor: {
            name: 'Dr. Sarah Chen',
            role: 'Lead AI Researcher',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200'
        },
        prerequisites: ['Logique de programmation', 'Mathématiques lycée'],
        syllabus: [
            { title: 'Intro IA Générative', description: 'Comprendre les LLMs et Prompt Engineering' },
            { title: 'Outils & Productivité', description: 'Cursor, Copilot et génération de code' },
            { title: 'Fine-tuning (LoRA)', description: 'Adapter les modèles open-source' },
            { title: 'Déploiement Cloud', description: 'API et intégration d\'apps' }
        ]
    },
    {
        id: 2,
        title: 'Computer Vision & Deep Learning',
        description: 'Apprenez à faire voir les machines. Détection d\'objets, segmentation et traitement d\'images avancés.',
        longDescription: 'Un cours spécialisé pour ceux qui veulent travailler sur les voitures autonomes, la robotique ou l\'imagerie médicale.',
        thumbnail: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1000',
        progress: 0,
        skills: ['TensorFlow', 'OpenCV', 'YOLO', 'Pytorch'],
        duration: '4 mois',
        level: 'Avancé',
        category: 'IA',
        mentor: {
            name: 'Marc Dubois',
            role: 'Computer Vision Engineer',
            avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200'
        },
        prerequisites: ['Python Avancé', 'Algèbre Linéaire'],
        syllabus: [
            { title: 'Traitement d\'Image', description: 'OpenCV et manipulation de pixels' },
            { title: 'CNN Architectures', description: 'ResNet, EfficientNet' },
            { title: 'Object Detection', description: 'Entraînement de YOLOv8' },
            { title: 'Segmentation', description: 'U-Net pour l\'imagerie' }
        ]
    },

    // --- GÉNIE LOGICIEL ---
    {
        id: 3,
        title: 'Génie Logiciel & Cloud Computing',
        description: 'Devenez un architecte cloud-native. Microservices, DevOps, CI/CD et Infrastructure as Code.',
        longDescription: 'Le pilier de l\'ingénierie moderne. Apprenez à concevoir des systèmes robustes, scalables et maintenables utilisés par les géants de la tech.',
        thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000',
        progress: 0,
        skills: ['Docker', 'Kubernetes', 'AWS/Azure', 'Terraform'],
        duration: '6 mois',
        level: 'Avancé',
        category: 'Génie Logiciel',
        mentor: {
            name: 'David Okafor',
            role: 'Principal Cloud Architect',
            avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200'
        },
        prerequisites: ['Bases du Web', 'Linux Basics'],
        syllabus: [
            { title: 'Architecture Microservices', description: 'Design patterns et communication' },
            { title: 'Containerisation', description: 'Docker et Orchestration' },
            { title: 'CI/CD Pipelines', description: 'GitHub Actions automatisation' },
            { title: 'Infrastructure as Code', description: 'Provisioning cloud avec Terraform' }
        ]
    },
    {
        id: 4,
        title: 'Fullstack Modern (React/Node)',
        description: 'Le standard de l\'industrie. Créez des applications web performantes, réactives et belles.',
        longDescription: 'Maîtrisez la stack MERN (Mongo, Express, React, Node) ou T3 (Tailwind, TRPC, TypeScript) pour construire n\'importe quelle idée.',
        thumbnail: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
        progress: 0,
        skills: ['React', 'TypeScript', 'Node.js', 'Next.js'],
        duration: '5 mois',
        level: 'Débutant',
        category: 'Génie Logiciel',
        mentor: {
            name: 'Elena Rodriguez',
            role: 'Senior Frontend Dev',
            avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200'
        },
        prerequisites: ['HTML/CSS', 'Curiosité'],
        syllabus: [
            { title: 'React Fondamentaux', description: 'Hooks, Components, State' },
            { title: 'API & Backend', description: 'REST et GraphQL' },
            { title: 'Base de données', description: 'SQL vs NoSQL' },
            { title: 'Déploiement', description: 'Vercel, Netlify et CI' }
        ]
    }
]
