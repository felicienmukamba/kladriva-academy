export interface Project {
    id: number
    title: string
    description: string
    status: 'terminé' | 'en-cours' | 'non-démarré'
    position: [number, number, number] // 3D coordinates
    skills: string[]
    category: 'IA' | 'Génie Logiciel'
    completedAt?: string
    studentName: string
    image: string
}

export const projects: Project[] = [
    // --- PROJETS IA ---
    {
        id: 1,
        title: 'Drone Autonome de Surveillance',
        description: 'Système de détection d\'incendies en temps réel embarqué sur drone, utilisant YOLOv8 optimisé pour edge computing.',
        status: 'terminé',
        position: [2.5, 1.5, -2],
        skills: ['PyTorch', 'Computer Vision/YOLO', 'Edge AI'],
        category: 'IA',
        completedAt: '2024-11-20',
        studentName: 'Alex Rivère',
        image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 2,
        title: 'PredicMarket AI',
        description: 'Plateforme d\'analyse de sentiment des news financières couplée à une prédiction de volatilité des marchés cryptos.',
        status: 'terminé',
        position: [-2, 2, -3],
        skills: ['LLMs', 'NLP', 'FastAPI', 'React'],
        category: 'IA',
        completedAt: '2024-10-15',
        studentName: 'Sarah Chen',
        image: 'https://images.unsplash.com/photo-1611974765270-ca12586343bb?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 3,
        title: 'MedScan Assistant',
        description: 'Assistant radiologique intelligent capable de pré-diagnostiquer des fractures et anomalies sur des radiographies.',
        status: 'en-cours',
        position: [0, 3, -4],
        skills: ['TensorFlow', 'Medical Imaging', 'Python'],
        category: 'IA',
        studentName: 'Marc Dubois',
        image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000'
    },

    // --- PROJETS GÉNIE LOGICIEL ---
    {
        id: 4,
        title: 'Kladriva Finance Core',
        description: 'Moteur bancaire distribué capable de traiter 50k transactions/seconde avec une garantie ACID.',
        status: 'terminé',
        position: [3, -1, -3],
        skills: ['Go', 'Kafka', 'PostgreSQL', 'GRPC'],
        category: 'Génie Logiciel',
        completedAt: '2024-12-05',
        studentName: 'Elena Volkov',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 5,
        title: 'CloudMesh ERP',
        description: 'ERP modulaire pour PME, construit sur une architecture microservices auto-gérée sur Kubernetes.',
        status: 'terminé',
        position: [-3, -1.5, -2.5],
        skills: ['Kubernetes', 'Java Spring', 'React'],
        category: 'Génie Logiciel',
        completedAt: '2024-09-28',
        studentName: 'David Okafor',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000'
    },
    {
        id: 6,
        title: 'StreamFlow P2P',
        description: 'Alternative décentralisée à Twitch utilisant WebRTC pour un streaming vidéo haute définition sans serveur central.',
        status: 'en-cours',
        position: [1, -2.5, -5],
        skills: ['Rust', 'WebRTC', 'WebAssembly'],
        category: 'Génie Logiciel',
        studentName: 'Léa Bernard',
        image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000'
    }
]
