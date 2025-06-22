import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPost {
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

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const { id, title, excerpt, date, readTime, category } = post;
  
  return (
    <Card className="h-full overflow-hidden bg-black/30 backdrop-blur-md border-gray-800 hover:border-gray-700 transition-all duration-300">
      <Link to={`/blog/${id}`} className="flex flex-col h-full">
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-blue-600/20 to-indigo-600/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-4xl">📝</span>
          </div>
        </div>

        <CardContent className="p-6 flex flex-col flex-1">
          <div className="mb-4">
            <Badge className="mb-3 bg-gradient-to-r from-blue-600 to-indigo-600">
              {category}
            </Badge>
            <h3 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-primary transition-colors">
              {title}
            </h3>
            <p className="text-muted-foreground text-sm line-clamp-3">
              {excerpt}
            </p>
          </div>

          <div className="mt-auto flex items-center text-xs text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="mr-1 h-3 w-3" />
              <span>{date}</span>
            </div>
            <div className="flex items-center ml-4">
              <Clock className="mr-1 h-3 w-3" />
              <span>{readTime}</span>
            </div>
          </div>
        </CardContent>
      </Link>
    </Card>
  );
}