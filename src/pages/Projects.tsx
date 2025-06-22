import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import MainLayout from '@/components/layout/MainLayout';
import ProjectCard from '@/components/ui/project-card';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { projects } from '@/data/projects';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Search } from 'lucide-react';

export default function ProjectsPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Extract all unique tags from projects
  const allTags = Array.from(
    new Set(projects.flatMap(project => project.tags))
  ).sort();

  // Filter projects based on search query and selected tags
  const filteredProjects = projects.filter(project => {
    const matchesSearch = searchQuery === '' || 
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesTags = selectedTags.length === 0 || 
      selectedTags.every(tag => project.tags.includes(tag));
      
    return matchesSearch && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag) 
        : [...prev, tag]
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <MainLayout>
      <div className="pt-16 pb-24 px-4">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-12"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <AnimatedGradientText>Projelerim</AnimatedGradientText>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Çeşitli teknolojiler kullanarak geliştirdiğim yenilikçi projeler ve açık kaynak çalışmalar
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:max-w-md">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Projelerde ara..."
                    className="pl-10 bg-black/20 border-gray-800"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-wrap gap-2 items-center justify-start md:justify-end w-full md:w-auto">
                  <span className="text-sm text-muted-foreground mr-1">Filtrele:</span>
                  {allTags.map(tag => (
                    <Badge
                      key={tag}
                      variant={selectedTags.includes(tag) ? "default" : "outline"}
                      className={`cursor-pointer hover:bg-primary/20 ${
                        selectedTags.includes(tag) 
                          ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" 
                          : ""
                      }`}
                      onClick={() => toggleTag(tag)}
                    >
                      {tag}
                    </Badge>
                  ))}
                  {selectedTags.length > 0 && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={() => setSelectedTags([])}
                      className="ml-2 h-7 text-xs"
                    >
                      Temizle
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Projects Grid */}
            <motion.div variants={itemVariants}>
              {filteredProjects.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                    >
                      <ProjectCard project={project} showTags />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-xl font-medium mb-2">Proje bulunamadı</h3>
                  <p className="text-muted-foreground mb-6">Başka anahtar kelimeler deneyebilir veya filtreleri temizleyebilirsiniz.</p>
                  <Button onClick={() => {setSearchQuery(''); setSelectedTags([]);}}>
                    Filtreleri Temizle
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}