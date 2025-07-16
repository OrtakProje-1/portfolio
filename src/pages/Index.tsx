import MainLayout from "@/components/layout/MainLayout";
import AnimatedGradientText from "@/components/ui/animated-gradient-text";
import BlogCard from "@/components/ui/blog-card";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/ui/hero-section";
import ProjectCard from "@/components/ui/project-card";
import { featuredPosts } from "@/data/blog-posts";
import { featuredProjects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <MainLayout>
      <HeroSection />
    

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="py-20 px-4"
      >
        <div className="container mx-auto">
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">
              <AnimatedGradientText>Öne Çıkan Projeler</AnimatedGradientText>
            </h2>
            <Button variant="ghost" asChild>
              <Link to="/projects" className="group">
                Tüm Projeleri Gör
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="py-20 px-4"
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10">
            <h2 className="text-3xl font-bold mb-4 md:mb-0">
              <AnimatedGradientText>Son Blog Yazıları</AnimatedGradientText>
            </h2>
            <Button variant="ghost" asChild>
              <Link to="/blog" className="group">
                Tüm Yazıları Gör
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + index * 0.1, duration: 0.5 }}
              >
                <BlogCard post={post} />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.7, duration: 0.6 }}
        className="py-20 px-4"
      >
        <div className="container mx-auto">
          <div className="flex flex-col items-center text-center">
            <h2 className="text-3xl font-bold mb-6">
              <AnimatedGradientText>İletişime Geçin</AnimatedGradientText>
            </h2>
            <p className="text-muted-foreground max-w-2xl mb-8">
              Proje fikirlerinizi hayata geçirmek, yazılım geliştirme süreçleri
              hakkında konuşmak veya sadece merhaba demek için benimle iletişime
              geçin.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700"
            >
              <a href="mailto:contact@devportal.com">E-posta Gönder</a>
            </Button>
          </div>
        </div>
      </motion.section>
      
    </MainLayout>
  );
}
