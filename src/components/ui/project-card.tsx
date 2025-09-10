import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ExternalLink, Eye, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  demoUrl?: string;
  githubUrl?: string;
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  showTags?: boolean;
}

export default function ProjectCard({ project, showTags = false }: ProjectCardProps) {
  const { title, description, tags, image, demoUrl, githubUrl } = project;

  return (
    <Card className="h-full overflow-hidden fade-in backdrop-blur-md border-gray-200 group hover:border-blue-400 hover:bg-blue-400/10 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-600/20 to-indigo-600/20">
        <motion.div 
          className="absolute inset-0 flex items-center justify-center text-4xl"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          {/* Project image could be here */}
          <span className="text-5xl">💻</span>
        </motion.div>
      </div>

      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">{title}</h3>
        
        <p className="text-muted-foreground mb-4 line-clamp-3">{description}</p>
        
        {showTags && (
          <div className="flex flex-wrap gap-1 mb-4">
            {tags.map(tag => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-2 mt-auto">
          {demoUrl && (
            <Button variant="outline" size="sm" className="gap-1.5">
              <a href={demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Eye className="h-4 w-4 mr-1" />
                Demo
              </a>
            </Button>
          )}
          
          {githubUrl && (
            <Button variant="outline" size="sm" className="gap-1.5">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                <Github className="h-4 w-4 mr-1" />
                Kod
              </a>
            </Button>
          )}
          
          <Button variant="ghost" size="icon" className="ml-auto">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}