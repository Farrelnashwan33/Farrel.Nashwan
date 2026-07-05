export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    link?: string;
    github?: string;
    features: string[];
    role: string;
}

export const featuredProjects: Project[] = [
    {
        id: 'nova-hr',
        title: 'Nova HR',
        description: 'Sistem Manajemen Sumber Daya Manusia (HRIS) komprehensif untuk melacak kehadiran, cuti, payroll, dan performa karyawan.',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop',
        tags: ['SvelteKit', 'TypeScript', 'TailwindCSS', 'Supabase'],
        link: 'https://novahr.example.com',
        features: [
            'Real-time Dashboard',
            'Sistem Presensi Geolocation',
            'Manajemen Cuti & Payroll',
            'Role-based Access Control (RBAC)'
        ],
        role: 'Full Stack Developer'
    },
    {
        id: 'creative-quran',
        title: 'Creative Quran',
        description: 'Aplikasi Al-Qur\'an digital modern dengan fitur audio, terjemahan multi-bahasa, dan tracking hafalan.',
        image: 'https://images.unsplash.com/photo-1608681285038-f1c50d311545?q=80&w=2070&auto=format&fit=crop',
        tags: ['Flutter', 'Dart', 'Firebase', 'REST API'],
        github: 'https://github.com/Farrelnashwan33/creative-quran',
        features: [
            'Audio Murottal',
            'Tafsir & Terjemahan',
            'Bookmark & Last Read',
            'Dark Mode Support'
        ],
        role: 'Mobile Developer'
    },
    {
        id: 'e-commerce-pro',
        title: 'E-Commerce Pro',
        description: 'Platform e-commerce dengan sistem pembayaran terintegrasi, manajemen inventaris, dan analitik penjualan.',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070&auto=format&fit=crop',
        tags: ['Next.js', 'React', 'Node.js', 'PostgreSQL'],
        link: 'https://store.example.com',
        github: 'https://github.com/Farrelnashwan33/e-commerce-pro',
        features: [
            'Payment Gateway Integration',
            'Shopping Cart & Wishlist',
            'Admin Dashboard',
            'Email Notifications'
        ],
        role: 'Backend Developer'
    },
    {
        id: 'task-master',
        title: 'TaskMaster',
        description: 'Aplikasi manajemen proyek tim dengan fitur Kanban board, time tracking, dan kolaborasi real-time.',
        image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?q=80&w=2069&auto=format&fit=crop',
        tags: ['Vue.js', 'Laravel', 'MySQL', 'Pusher'],
        github: 'https://github.com/Farrelnashwan33/task-master',
        features: [
            'Drag-and-Drop Kanban',
            'Real-time Chat',
            'Time Tracking',
            'Export Reports'
        ],
        role: 'Full Stack Developer'
    },
    {
        id: 'portfolio-v2',
        title: 'Developer Portfolio',
        description: 'Website portofolio interaktif dengan desain premium, animasi smooth, dan integrasi GitHub API.',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop',
        tags: ['Svelte', 'TailwindCSS', 'Framer Motion', 'Vite'],
        link: 'https://farrelnashwan.dev',
        github: 'https://github.com/Farrelnashwan33/portfolio-v2',
        features: [
            'Dark Mode',
            'GitHub API Integration',
            'SEO Optimized',
            'Responsive Design'
        ],
        role: 'Frontend Developer'
    },
    {
        id: 'health-track',
        title: 'HealthTrack',
        description: 'Aplikasi pelacak kebugaran dan kalori harian dengan integrasi device wearable.',
        image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
        tags: ['React Native', 'Redux', 'Express', 'MongoDB'],
        github: 'https://github.com/Farrelnashwan33/health-track',
        features: [
            'Step Counter',
            'Calorie Tracker',
            'Workout Plans',
            'Progress Charts'
        ],
        role: 'Mobile Developer'
    }
];
