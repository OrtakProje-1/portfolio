export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "CloudSync",
    description: "Çoklu bulut servislerini tek bir panel üzerinden yönetmeye olanak sağlayan açık kaynaklı bir platform. AWS, GCP ve Azure entegrasyonu mevcut.",
    tags: ["React", "TypeScript", "Node.js", "AWS", "Docker"],
    demoUrl: "https://cloudsync.demo.com",
    githubUrl: "https://github.com/memetsoftware/cloudsync",
    featured: true
  },
  {
    id: 2,
    title: "DevPortal",
    description: "Geliştiriciler için kişisel portfolyo ve blog platformu. Modern teknolojiler kullanılarak geliştirilmiş, tamamen özelleştirilebilir şablonlar sunar.",
    tags: ["Next.js", "Tailwind CSS", "GraphQL", "PostgreSQL"],
    demoUrl: "https://devportal.demo.com",
    githubUrl: "https://github.com/memetsoftware/devportal",
    featured: true
  },
  {
    id: 3,
    title: "MicroServe",
    description: "Mikroservis mimarisi için hafif bir orkestrasyon ve servis keşfi platformu. Kubernetes üzerinde çalışabilir ve API gateway entegrasyonu sunar.",
    tags: ["Go", "Kubernetes", "gRPC", "Prometheus", "Microservices"],
    demoUrl: "https://microserve.demo.com",
    githubUrl: "https://github.com/memetsoftware/microserve",
    featured: true
  },
  {
    id: 4,
    title: "DataVizAI",
    description: "Büyük veri setlerini yapay zeka yardımıyla otomatik olarak analiz eden ve görselleştiren bir araç. Özelleştirilebilir grafikler ve dışa aktarma özellikleri vardır.",
    tags: ["Python", "React", "TensorFlow", "D3.js", "Machine Learning"],
    demoUrl: "https://datavizai.demo.com",
    githubUrl: "https://github.com/memetsoftware/datavizai"
  },
  {
    id: 5,
    title: "SecureAuth",
    description: "Modern kimlik doğrulama ve yetkilendirme kütüphanesi. OAuth 2.0, OpenID Connect, FIDO2 ve çoklu faktör kimlik doğrulama desteği sunar.",
    tags: ["TypeScript", "Node.js", "Security", "OAuth", "API"],
    githubUrl: "https://github.com/memetsoftware/secureauth"
  },
  {
    id: 6,
    title: "EcoTrack",
    description: "IoT cihazlarla çevresel verileri toplayan ve analiz eden sürdürülebilirlik odaklı bir platform. Karbon ayak izi hesaplaması ve enerji optimizasyonu önerileri sunar.",
    tags: ["Vue.js", "Python", "IoT", "Machine Learning", "MongoDB"],
    demoUrl: "https://ecotrack.demo.com"
  },
  {
    id: 7,
    title: "CodeMentor",
    description: "Programlama eğitimi için interaktif öğrenim platformu. Canlı kod düzenleme, otomatik değerlendirme ve kişiselleştirilmiş öğrenim yolları sunar.",
    tags: ["React", "Firebase", "WebSockets", "EdTech", "JavaScript"],
    demoUrl: "https://codementor.demo.com",
    githubUrl: "https://github.com/memetsoftware/codementor"
  },
  {
    id: 8,
    title: "HealthAPI",
    description: "Sağlık verileri için güvenli ve ölçeklenebilir API sistemi. HL7 FHIR standardını destekler ve HIPAA uyumludur.",
    tags: ["Java", "Spring Boot", "FHIR", "Healthcare", "RESTful API"],
    githubUrl: "https://github.com/memetsoftware/healthapi"
  },
  {
    id: 9,
    title: "EventFlow",
    description: "Event-driven mimari için açık kaynaklı mesaj işleme sistemi. Yüksek verimlilik ve düşük gecikme süresi odaklı tasarlanmıştır.",
    tags: ["Rust", "Kafka", "RabbitMQ", "Distributed Systems", "Performance"],
    demoUrl: "https://eventflow.demo.com",
    githubUrl: "https://github.com/memetsoftware/eventflow"
  }
];

export const featuredProjects = projects.filter(project => project.featured);