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
}

export const projects: Project[] = [
    // --- PROJETS IA ---
    {
        id: 1,
        title: 'Navigation Autonome de Drone',
        description: 'Détection d\'objets en temps réel et calcul de trajectoire avec YOLOv8 et Apprentissage par Renforcement.',
        status: 'terminé',
        position: [2.5, 1.5, -2],
        skills: ['PyTorch', 'Computer Vision', 'ROS'],
        category: 'IA',
        completedAt: '2024-11-20',
        studentName: 'Alex Rivère'
    },
    {
        id: 2,
        title: 'Analyse de Sentiment FinTech',
        description: 'Extraction de sentiments par LLM à partir d\'actualités financières pour modèles de prédiction boursière.',
        status: 'terminé',
        position: [-2, 2, -3],
        skills: ['Transformers', 'Python', 'FastAPI'],
        category: 'IA',
        completedAt: '2024-10-15',
        studentName: 'Sarah Chen'
    },
    {
        id: 3,
        title: 'Segmentation d\'Imagerie Médicale',
        description: 'Architecture UNet pour l\'identification d\'anomalies dans les scanners IRM avec 98% de précision.',
        status: 'en-cours',
        position: [0, 3, -4],
        skills: ['TensorFlow', 'Medical IA', 'Numpy'],
        category: 'IA',
        studentName: 'Marc Dubois'
    },

    // --- PROJETS GÉNIE LOGICIEL ---
    {
        id: 4,
        title: 'Système de Registre Distribué',
        description: 'Moteur de transaction à haut débit utilisant les patterns Event Sourcing et CQRS.',
        status: 'terminé',
        position: [3, -1, -3],
        skills: ['Go', 'Kafka', 'PostgreSQL'],
        category: 'Génie Logiciel',
        completedAt: '2024-12-05',
        studentName: 'Elena Volkov'
    },
    {
        id: 5,
        title: 'ERP Cloud-Native',
        description: 'Système ERP basé sur des microservices déployé avec Kubernetes et le maillage de services Istio.',
        status: 'terminé',
        position: [-3, -1.5, -2.5],
        skills: ['Kubernetes', 'Java', 'Terraform'],
        category: 'Génie Logiciel',
        completedAt: '2024-09-28',
        studentName: 'David Okafor'
    },
    {
        id: 6,
        title: 'Mesh de Streaming Vidéo en Temps Réel',
        description: 'Réseau de diffusion vidéo peer-to-peer utilisant WebRTC et serveurs de signalisation personnalisés.',
        status: 'en-cours',
        position: [1, -2.5, -5],
        skills: ['Rust', 'WebRTC', 'WebAssembly'],
        category: 'Génie Logiciel',
        studentName: 'Léa Bernard'
    },
    {
        id: 7,
        title: 'Scanner de Sécurité Automatisé',
        description: 'Outil d\'analyse statique et dynamique pour détecter les vulnérabilités dans les pipelines CI/CD.',
        status: 'non-démarré',
        position: [-1, -3, -4.5],
        skills: ['Sécurité', 'Python', 'Docker'],
        category: 'Génie Logiciel',
        studentName: 'Thomas Wright'
    }
]
