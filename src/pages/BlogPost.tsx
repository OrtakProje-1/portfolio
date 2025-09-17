import MainLayout from '@/components/layout/MainLayout';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import BlogCard from '@/components/ui/blog-card';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { blogPosts } from '@/data/blog-posts';
import { motion } from 'framer-motion';
import { Bookmark, Calendar, ChevronLeft, Clock, Copy, Facebook, Linkedin, MessageSquare, Share2, ThumbsUp, Twitter } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'sonner';

export default function BlogPostPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [post, setPost] = useState<typeof blogPosts[0] | null>(null);

  // Güvenli sosyal medya paylaşım fonksiyonu
  const shareToSocial = (platform: string) => {
    const url = encodeURIComponent(window.location.href);
    const safeUrls = {
      facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      twitter: `https://twitter.com/intent/tweet?url=${url}`,
      linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`
    };
    
    if (safeUrls[platform as keyof typeof safeUrls]) {
      window.open(safeUrls[platform as keyof typeof safeUrls], '_blank', 'noopener,noreferrer');
    }
  };
  const [relatedPosts, setRelatedPosts] = useState<typeof blogPosts>([]);
  const [likeCount, setLikeCount] = useState(0);
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
    setIsLoaded(true);
  }, []);

  // Find the post based on id parameter
  useEffect(() => {
    const currentPost = blogPosts.find(post => post.id === Number(id));
    
    if (currentPost) {
      setPost(currentPost);
      setLikeCount(currentPost.likeCount || 0);
      
      // Find related posts with the same category
      const related = blogPosts
        .filter(p => p.id !== Number(id) && p.category === currentPost.category)
        .slice(0, 3);
        
      setRelatedPosts(related);
    } else {
      // Post not found, redirect to blog listing page
      navigate('/blog');
    }
  }, [id, navigate]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked);
    toast(isBookmarked ? 'Yer işareti kaldırıldı' : 'Blog yazısı kaydedildi');
  };

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast('Link panoya kopyalandı');
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

  if (!post) {
    return (
      <MainLayout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Yükleniyor...</p>
          </div>
        </div>
      </MainLayout>
    );
  }

  return (
    <MainLayout>
      <div className="pt-16 pb-24 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-8"
          >
            {/* Back Button */}
            <motion.div variants={itemVariants}>
              <Button variant="ghost" asChild className="group mb-6">
                <Link to="/blog" className="flex items-center">
                  <ChevronLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                  Blog'a Dön
                </Link>
              </Button>
            </motion.div>

            {/* Header */}
            <motion.div variants={itemVariants} className="mb-8">
              <Badge className="mb-4 bg-gradient-to-r from-blue-600 to-indigo-600">
                {post.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center justify-between gap-4 text-sm text-muted-foreground mb-6">
                <div className="flex items-center gap-6">
                  <div className="flex items-center">
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    <span>{post.readTime} okuma</span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    
                    <DropdownMenuContent align="end" className="bg-white/10 border-black/20 shadow-lg backdrop-blur-sm ">
                      <DropdownMenuItem className='hover:bg-white' onClick={() => shareToSocial('facebook')}>
                        <Facebook className="mr-2 h-4 w-4" /> Facebook
                      </DropdownMenuItem>
                      <DropdownMenuItem className='hover:bg-white' onClick={() => shareToSocial('twitter')}>
                        <Twitter className="mr-2 h-4 w-4" /> Twitter
                      </DropdownMenuItem>
                      <DropdownMenuItem className='hover:bg-white' onClick={() => shareToSocial('linkedin')}>
                        <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
                      </DropdownMenuItem>
                      <DropdownMenuItem className='hover:bg-white' onClick={copyLinkToClipboard}>
                        <Copy className="mr-2 h-4 w-4" /> Linki Kopyala
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                  
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={handleBookmark}
                          className={isBookmarked ? "text-primary" : ""}
                        >
                          <Bookmark className={`h-5 w-5 ${isBookmarked ? "fill-primary" : ""}`} />
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{isBookmarked ? "Kaydı Kaldır" : "Kaydet"}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarFallback>
                    <img src="/me.jpeg" alt="logo" className="w-full h-full object-cover rounded-full" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Hasan UÇKUN</p>
                  <p className="text-xs text-muted-foreground">Kıdemli Yazılım Mühendisi</p>
                </div>
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div variants={itemVariants} className="mb-10">
              <div className="w-full aspect-video bg-fixed rounded-xl overflow-hidden bg-gradient-to-r from-blue-600/30 to-indigo-600/30">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-5xl">🚀</span>
                </div>
              </div>
            </motion.div>

            {/* Blog Content */}
            <motion.div variants={itemVariants} className="prose prose-invert max-w-none mb-12">
              <p className="lead text-lg">
                {post.excerpt}
              </p>
              
              <h2>Giriş</h2>
              <p>
                Yazılım dünyasında sürekli olarak yeni teknolojiler, metodolojiler ve araçlar ortaya çıkıyor. 
                Bu yazıda, modern web geliştirme ekosistemindeki son trendleri ve en iyi pratikleri inceleyeceğiz.
              </p>
              
              <h2>Modern Yazılım Geliştirme Yaklaşımları</h2>
              <p>
                Günümüzde yazılım geliştirmede çevik (agile) metodolojiler, DevOps pratikleri ve sürekli entegrasyon/sürekli dağıtım (CI/CD) 
                yaklaşımları standart hale geldi. Bu metodolojiler, hızlı geri bildirim döngüleri oluşturarak, yazılım 
                kalitesini artırmaya ve daha kısa sürede değer üretmeye odaklanıyor.
              </p>
              
              <h3>Çevik (Agile) Metodolojiler</h3>
              <p>
                Çevik metodolojiler, işbirliğini teşvik eden, müşteri geri bildirimlerine dayalı, iteratif yazılım geliştirme 
                yaklaşımlarıdır. Bu yaklaşımlar, değişen gereksinimlere hızlı adapte olabilmeyi sağlar.
              </p>
              
              <h2>Mikroservis Mimarisi</h2>
              <p>
                Monolitik uygulamalardan mikroservis mimarisine geçiş, ölçeklenebilirlik ve bakım kolaylığı sağlamaktadır. 
                Büyük ve karmaşık sistemleri daha küçük, yönetilebilir parçalara bölerek, her birini bağımsız olarak 
                geliştirme, dağıtma ve ölçeklendirme imkanı sunar.
              </p>
              
              <p>
                Bu mimarinin bazı avantajları:
              </p>
              
              <ul>
                <li>Bağımsız ölçeklendirme</li>
                <li>Teknoloji çeşitliliği</li>
                <li>Daha hızlı dağıtım</li>
                <li>İzolasyon ve dayanıklılık</li>
              </ul>
              
              <h2>Serverless Mimari</h2>
              <p>
                Serverless mimari, altyapı yönetimini soyutlayarak, geliştiricilerin kod yazmaya odaklanmalarını sağlar. 
                AWS Lambda, Azure Functions ve Google Cloud Functions gibi hizmetler sayesinde, sunucu yönetimi olmadan 
                fonksiyonları çalıştırabilir ve kullanım bazında ödeme yapabilirsiniz.
              </p>
              
              <h2>Sonuç</h2>
              <p>
                Modern yazılım geliştirme, sürekli olarak evrimleşen bir süreçtir. En son teknolojileri ve metodolojileri 
                takip etmek, rekabetçi kalmak için önemlidir. Ancak her zaman projenin ihtiyaçlarına ve ekibin uzmanlığına 
                dayalı teknoloji seçimleri yapmak gerektiğini unutmayın.
              </p>
            </motion.div>

            {/* Tags & Engagement */}
            <motion.div variants={itemVariants} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 py-6 border-t border-b border-gray-800">
              <div className="flex flex-wrap gap-2">
                {['Yazılım', 'Web Geliştirme', 'Mimari', 'Best Practices'].map(tag => (
                  <Badge key={tag} variant="outline" className="hover:bg-primary/20">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex items-center gap-2">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleLike}
                  className={`flex items-center ${isLiked ? "text-primary" : ""}`}
                >
                  <ThumbsUp className={`mr-1 h-4 w-4 ${isLiked ? "fill-primary" : ""}`} />
                  <span>{likeCount}</span>
                </Button>
                
                <Button variant="ghost" size="sm" className="flex items-center">
                  <MessageSquare className="mr-1 h-4 w-4" />
                  <span>{post.commentCount || 0}</span>
                </Button>
              </div>
            </motion.div>

            {/* Author Bio */}
            <motion.div variants={itemVariants} className="my-12">
              <div className="p-6 bg-white  border border-gray-200 rounded-xl">
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
                  <div className="w-20 h-20 rounded-xl overflow-hidden flex items-center justify-center text-2xl font-bold">
                    <img src="/me.jpeg" alt="logo" className="w-full h-full object-cover rounded-r-md" />
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold mb-2">Hasan UÇKUN</h3>
                    <p className="text-muted-foreground mb-4">
                      Kıdemli yazılım mühendisi olarak 10+ yıllık deneyime sahibim. Modern web teknolojileri, 
                      mikroservis mimarileri ve bulut çözümleri üzerine uzmanlaşmış durumdayım. 
                      Açık kaynak topluluğuna katkı sağlamayı ve bilgi paylaşımını seviyorum.
                    </p>
                    <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                      <Button variant="outline" size="sm" className="h-9">
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          GitHub
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="h-9">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          Twitter
                        </a>
                      </Button>
                      <Button variant="outline" size="sm" className="h-9">
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                          LinkedIn
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <motion.div variants={itemVariants} className="mt-16">
                <h2 className="text-2xl font-bold mb-8">
                  <AnimatedGradientText>Benzer İçerikler</AnimatedGradientText>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <BlogCard key={relatedPost.id} post={relatedPost} />
                  ))}
                </div>
              </motion.div>
            )}

            {/* Comments Section */}
            <motion.div variants={itemVariants} className="mt-16">
              <h2 className="text-2xl font-bold mb-8">
                <AnimatedGradientText>Yorumlar</AnimatedGradientText>
              </h2>

              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <p className="text-center text-muted-foreground">
                  Yorumlar yakında aktif olacak. Bu yazı hakkındaki düşüncelerini paylaşmak için Twitter veya LinkedIn üzerinden bana ulaşabilirsin.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}