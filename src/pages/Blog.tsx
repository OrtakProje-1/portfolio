import MainLayout from '@/components/layout/MainLayout';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { Badge } from '@/components/ui/badge';
import BlogCard from '@/components/ui/blog-card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { blogPosts } from '@/data/blog-posts';
import { motion } from 'framer-motion';
import { Filter, Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function BlogPage() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('newest');

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Extract all unique categories from blog posts
  const allCategories = Array.from(
    new Set(blogPosts.map(post => post.category))
  ).sort();

  // Filter blog posts based on search query and selected category
  const filteredBlogPosts = blogPosts
    .filter(post => {
      const matchesSearch = searchQuery === '' || 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
        
      const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
        
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      if (sortBy === 'newest') {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      } else if (sortBy === 'oldest') {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      } else if (sortBy === 'popular') {
        return b.readCount - a.readCount;
      }
      return 0;
    });

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory('all');
    setSortBy('newest');
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
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <AnimatedGradientText>Blog</AnimatedGradientText>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Yazılım, teknoloji trendleri ve geliştirme süreçleri hakkında düşüncelerim
              </p>
            </motion.div>

            {/* Search and Filter */}
            <motion.div variants={itemVariants} className="mb-12">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between ">
                <div className="relative w-full md:max-w-md">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Blog yazılarında ara..."
                    className="pl-10 bg-black/5 border-black/20"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <div className="flex flex-wrap gap-3 items-center justify-start md:justify-end w-full md:w-auto">
                  <div className="flex items-center space-x-2">
                    <Filter className="h-6 w-6 text-muted-foreground mr-2"  />
                    <Select
                      value={selectedCategory}
                      onValueChange={setSelectedCategory}
                    >
                      <SelectTrigger className="w-[180px] bg-black/5 border-black/20">
                        <SelectValue placeholder="Kategori" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/10 backdrop-blur-md border-black/20">
                        <SelectItem value="all">Tüm Kategoriler</SelectItem>
                        {allCategories.map(category => (
                          <SelectItem key={category} value={category}>
                            {category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="flex items-center space-x-2">
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="w-[180px] bg-black/5 border-black/20">
                        <SelectValue placeholder="Sıralama" />
                      </SelectTrigger>
                      <SelectContent className="bg-black/10 backdrop-blur-md border-black/20 ">
                        <SelectItem value="newest">En Yeni</SelectItem>
                        <SelectItem value="oldest">En Eski</SelectItem>
                        <SelectItem value="popular">En Popüler</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  {(searchQuery || selectedCategory !== 'all' || sortBy !== 'newest') && (
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      onClick={clearFilters}
                      className="h-9 px-3"
                    >
                      <X className="h-4 w-4 mr-1" />
                      Filtreleri Temizle
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Featured Post */}
            {blogPosts.length > 0 && searchQuery === '' && selectedCategory === 'all' && sortBy === 'newest' && (
              <motion.div variants={itemVariants} className="mb-12">
                <div className="relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 aspect-[21/9]">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 md:p-10 w-full md:w-3/4">
                    <Badge className="mb-4 bg-blue-500 hover:bg-blue-600">
                      {blogPosts[0].category}
                    </Badge>
                    <h2 className="text-2xl md:text-4xl font-bold mb-3 text-white">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-200 mb-6 line-clamp-2">
                      {blogPosts[0].excerpt}
                    </p>
                    <div className="flex items-center space-x-4 ">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full mr-3 flex items-center justify-center text-lg font-bold">
                          <img src="/me.jpeg" alt="logo" className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                          <p className="font-medium text-white">Hasan UÇKUN</p>
                          <p className="text-xs text-gray-300">{blogPosts[0].date} · {blogPosts[0].readTime} okuma</p>
                        </div>
                      </div>
                      <Button asChild className="ml-auto bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white">
                        <a href={`/blog/${blogPosts[0].id}`}>Devamını Oku</a>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Blog Posts Grid */}
            <motion.div variants={itemVariants}>
              {filteredBlogPosts.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                  {filteredBlogPosts.map((post, index) => (
                    <motion.div
                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.2 + index * 0.05, duration: 0.5 }}
                    >
                      <BlogCard post={post} />
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <div className="text-5xl mb-4">🔍</div>
                  <h3 className="text-xl font-medium mb-2">Blog yazısı bulunamadı</h3>
                  <p className="text-muted-foreground mb-6">Başka anahtar kelimeler deneyebilir veya filtreleri temizleyebilirsiniz.</p>
                  <Button onClick={clearFilters}>
                    Filtreleri Temizle
                  </Button>
                </div>
              )}
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="mt-20">
              <div className="bg-white border border-gray-200 rounded-xl p-8 md:p-10">
                <div className="text-center max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Blog Yazılarımı Takip Et</h3>
                  <p className="text-muted-foreground mb-6">
                    Yeni yazılarımdan, projelerimden ve teknoloji dünyasından haberler için mail listeme kaydolabilirsin.
                  </p>
                  <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-3">
                    <Input 
                      type="email" 
                      placeholder="E-posta adresin" 
                      className="bg-white/50 border-gray-700 "
                    />
                    <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                      Abone Ol
                    </Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Bilgilerini asla üçüncü taraflarla paylaşmıyorum. İstediğin zaman abonelikten çıkabilirsin.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}