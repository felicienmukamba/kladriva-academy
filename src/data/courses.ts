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
        title: 'Génie de l\'IA Générative & LLM',
        description: 'Maîtrisez l\'architecture des modèles de langage à grande échelle. Créez des systèmes RAG, affinez des modèles et intégrez l\'IA en production.',
        longDescription: 'Ce programme intensif vous emmène au cœur de la révolution de l\'IA générative. Vous apprendrez non seulement à utiliser les API existantes, mais aussi à concevoir, entraîner et déployer vos propres architectures de modèles de langage.',
        thumbnail: '/courses/ai-llm.jpg',
        progress: 0,
        skills: ['PyTorch', 'Transformers', 'LangChain', 'VectorDB'],
        duration: '6 mois',
        level: 'Avancé',
        category: 'IA',
        mentor: {
            name: 'Dr. Sarah Chen',
            role: 'Ancienne Chercheuse chez OpenAI',
            avatar: '/mentors/sarah.jpg'
        },
        prerequisites: ['Python Avancé', 'Calcul Matriciel', 'Bases du Machine Learning'],
        syllabus: [
            { title: 'Introduction aux Transformers', description: 'Comprendre l\'attention et l\'architecture de base.' },
            { title: 'Fine-tuning & RLHF', description: 'Adapter les modèles aux besoins spécifiques et au feedback humain.' },
            { title: 'Architectures RAG', description: 'Connecter les LLM à des bases de connaissances externes.' },
            { title: 'Déploiement à grande échelle', description: 'Optimisation de l\'inférence et gestion de la latence.' }
        ]
    },
    {
        id: 2,
        title: 'Vision par Ordinateur & Deep Learning',
        description: 'Apprenez à traiter les données visuelles. Implémentez des CNN, la détection d\'objets et la segmentation pour les systèmes autonomes.',
        longDescription: 'De la reconnaissance faciale à la conduite autonome, la computer vision transforme le monde. Ce cours couvre les algorithmes fondamentaux et les architectures de pointe basées sur le Deep Learning.',
        thumbnail: '/courses/ai-vision.jpg',
        progress: 0,
        skills: ['TensorFlow', 'OpenCV', 'Deep Learning', 'Python'],
        duration: '4 mois',
        level: 'Intermédiaire',
        category: 'IA',
        mentor: {
            name: 'Marc Dubois',
            role: 'Ingénieur Vision chez Tesla',
            avatar: '/mentors/marc.jpg'
        },
        prerequisites: ['NumPy/Pandas', 'Algèbre Linéaire', 'Python'],
        syllabus: [
            { title: 'Traitement d\'Image Classique', description: 'Filtres, transformations et descripteurs de base.' },
            { title: 'Réseaux de Neurones Convolutifs', description: 'Architecture CNN et transfert learning.' },
            { title: 'Détection d\'Objets', description: 'YOLO, SSD et Faster R-CNN.' },
            { title: 'Segmentation Sémantique', description: 'U-Net et architectures pixel-wise.' }
        ]
    },
    {
        id: 3,
        title: 'Fondamentaux du Machine Learning Appliqué',
        description: 'Le parcours complet du prétraitement des données au déploiement de modèles. Descente de gradient, ingénierie de caractéristiques.',
        longDescription: 'Plongez dans les fondations mathématiques et pratiques de l\'IA. Ce cours vous donne les outils pour résoudre des problèmes concrets avec les données.',
        thumbnail: '/courses/ai-ml.jpg',
        progress: 0,
        skills: ['Scikit-Learn', 'Pandas', 'NumPy', 'Stats'],
        duration: '5 mois',
        level: 'Débutant',
        category: 'IA',
        mentor: {
            name: 'Elena Rodriguez',
            role: 'Data Scientist Senior',
            avatar: '/mentors/elena.jpg'
        },
        prerequisites: ['Bases Mathématiques', 'Python Débutant'],
        syllabus: [
            { title: 'Nettoyage des Données', description: 'Handling missing values et outliers.' },
            { title: 'Algorithmes Supervisés', description: 'Régression, Arbres de décision, SVM.' },
            { title: 'Apprentissage Non Supervisé', description: 'Clustering et réduction de dimensionnalité.' },
            { title: 'Évaluation de Modèles', description: 'Métriques de performance et cross-validation.' }
        ]
    },

    // --- GÉNIE LOGICIEL ---
    {
        id: 4,
        title: 'Architecture Logicielle Moderne',
        description: 'Concevez des systèmes évolutifs et résilients. Apprenez les Microservices, l\'Architecture Orientée Événements et le DDD.',
        longDescription: 'Comment construire Netflix ou Amazon ? Ce cours explore les patterns d\'architecture distribuée utilisés par les plus grandes entreprises tech.',
        thumbnail: '/courses/se-arch.jpg',
        progress: 0,
        skills: ['Microservices', 'System Design', 'Kafka', 'DDD'],
        duration: '6 mois',
        level: 'Avancé',
        category: 'Génie Logiciel',
        mentor: {
            name: 'David Okafor',
            role: 'Principal Architect chez Netflix',
            avatar: '/mentors/david.jpg'
        },
        prerequisites: ['Expérience Full-Stack', 'Bases des Réseaux', 'Consistance Eventuelle'],
        syllabus: [
            { title: 'Pattern Microservices', description: 'Découpage du monolithe et communication inter-services.' },
            { title: 'Event-Sourcing & CQRS', description: 'Gestion de l\'état dans les systèmes distribués.' },
            { title: 'Scalabilité & Résilience', description: 'Circuit breakers, load balancing et auto-scaling.' },
            { title: 'Observabilité', description: 'Tracing distribué, logging et monitoring.' }
        ]
    },
    {
        id: 5,
        title: 'Génie Logiciel Full-Stack',
        description: 'Développement professionnel avec React, TypeScript et Go. Focus sur le code propre, les tests et les pratiques CI/CD.',
        longDescription: 'Maîtrisez la pile technique moderne pour construire des applications web robustes de A à Z avec un focus sur la performance et la maintenabilité.',
        thumbnail: '/courses/se-fullstack.jpg',
        progress: 0,
        skills: ['Go', 'React', 'TypeScript', 'Docker'],
        duration: '6 mois',
        level: 'Intermédiaire',
        category: 'Génie Logiciel',
        mentor: {
            name: 'John Doe',
            role: 'Lead Developer Open Source',
            avatar: '/mentors/john.jpg'
        },
        prerequisites: ['HTML/CSS', 'Javascript de base'],
        syllabus: [
            { title: 'Frontend Avancé', description: 'React patterns, gestion d\'état et optimisation.' },
            { title: 'Backend avec Go', description: 'Concurrency, interfaces et API design.' },
            { title: 'DevOps & Conteneurs', description: 'Docker et pipelines de déploiement automatique.' },
            { title: 'Tests Automatisés', description: 'Unitaires, intégration et E2E.' }
        ]
    },
    {
        id: 6,
        title: 'SRE & DevOps',
        description: 'Maîtrisez le cycle de vie du logiciel. Orchestration Kubernetes, automatisation, monitoring et gestion d\'infrastructure cloud.',
        longDescription: 'Pont entre le développement et les opérations. Apprenez à garantir la disponibilité et la performance des systèmes critiques.',
        thumbnail: '/courses/se-devops.jpg',
        progress: 0,
        skills: ['Kubernetes', 'Terraform', 'AWS', 'CI/CD'],
        duration: '5 mois',
        level: 'Avancé',
        category: 'Génie Logiciel',
        mentor: {
            name: 'Marcus Johnson',
            role: 'Cloud Engineer Expert',
            avatar: '/mentors/marcus.jpg'
        },
        prerequisites: ['Linux/Terminal', 'Bases de l\'Infrastructure'],
        syllabus: [
            { title: 'Infrastructure as Code', description: 'Provisionnement avec Terraform et CloudFormation.' },
            { title: 'Orchestration avec K8s', description: 'Pods, Services, Ingress et Helm.' },
            { title: 'CI/CD Pipelines', description: 'GitHub Actions, GitLab CI.' },
            { title: 'SRE Principles', description: 'SLIs, SLOs et gestion des incidents.' }
        ]
    }
]
