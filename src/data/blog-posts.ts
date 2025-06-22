export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  readCount: number;
  likeCount: number;
  commentCount: number;
  featured?: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Modern Yazılım Mimarisi Yaklaşımları",
    excerpt: "Günümüzde yazılım mimarisi yaklaşımlarının evrimi ve mikroservis mimarisinin yükselişi üzerine bir inceleme.",
    date: "10 Haziran 2023",
    readTime: "8 dk",
    category: "Mimari",
    readCount: 1243,
    likeCount: 87,
    commentCount: 14,
    featured: true
  },
  {
    id: 2,
    title: "React vs Vue: 2023'te Frontend Çerçeveleri",
    excerpt: "React ve Vue.js'in karşılaştırmalı analizi, güçlü yönleri, zayıf yönleri ve her biri için en uygun kullanım senaryoları.",
    date: "28 Mayıs 2023",
    readTime: "6 dk",
    category: "Frontend",
    readCount: 982,
    likeCount: 62,
    commentCount: 23,
    featured: true
  },
  {
    id: 3,
    title: "DevOps Pratiklerini Geliştirme Rehberi",
    excerpt: "CI/CD süreçlerini optimize etme, test otomasyonu ve altyapı kodu ile verimli DevOps pratiklerini uygulama stratejileri.",
    date: "15 Mayıs 2023",
    readTime: "10 dk",
    category: "DevOps",
    readCount: 756,
    likeCount: 41,
    commentCount: 9,
    featured: true
  },
  {
    id: 4,
    title: "GraphQL ile API Geliştirme",
    excerpt: "GraphQL'in REST API'lere göre avantajları ve GraphQL API'leri tasarlarken dikkat edilmesi gereken noktalar.",
    date: "2 Mayıs 2023",
    readTime: "7 dk",
    category: "Backend",
    readCount: 642,
    likeCount: 38,
    commentCount: 7
  },
  {
    id: 5,
    title: "Yazılım Geliştirmede Test Otomasyonu",
    excerpt: "Birim testlerden uçtan uca testlere kadar otomatize test stratejileri ve test kapsamını artırma yöntemleri.",
    date: "18 Nisan 2023",
    readTime: "9 dk",
    category: "Testing",
    readCount: 528,
    likeCount: 29,
    commentCount: 5
  },
  {
    id: 6,
    title: "Kubernetes ile Mikroservis Orkestrasyonu",
    excerpt: "Kubernetes'in temel bileşenleri, mimari ve mikroservis uygulamalarını ölçeklendirmek için en iyi pratikler.",
    date: "5 Nisan 2023",
    readTime: "11 dk",
    category: "Mimari",
    readCount: 814,
    likeCount: 56,
    commentCount: 12
  },
  {
    id: 7,
    title: "Performans Odaklı Web Uygulamaları",
    excerpt: "Modern web performans optimizasyon teknikleri, web vitals ve daha hızlı yükleme süreleri için stratejiler.",
    date: "23 Mart 2023",
    readTime: "8 dk",
    category: "Frontend",
    readCount: 729,
    likeCount: 48,
    commentCount: 8
  },
  {
    id: 8,
    title: "Yapay Zeka ve Makine Öğrenimi Entegrasyonu",
    excerpt: "Web uygulamalarına yapay zeka ve makine öğrenimi modellerini entegre etme yöntemleri ve pratik kullanım örnekleri.",
    date: "10 Mart 2023",
    readTime: "12 dk",
    category: "AI/ML",
    readCount: 937,
    likeCount: 71,
    commentCount: 16
  },
  {
    id: 9,
    title: "Yazılım Güvenliği ve OWASP Top 10",
    excerpt: "Modern web uygulamalarında güvenlik açıklarını önleme ve OWASP Top 10 güvenlik risklerine karşı koruma stratejileri.",
    date: "25 Şubat 2023",
    readTime: "10 dk",
    category: "Güvenlik",
    readCount: 682,
    likeCount: 44,
    commentCount: 7
  }
];

export const featuredPosts = blogPosts.filter(post => post.featured);