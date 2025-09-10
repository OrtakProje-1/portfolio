import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import AnimatedGradientText from './animated-gradient-text';

export default function HeroSection() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
   
     
      <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="h-[40vh] w-[40vh] bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse" />
      </div>
      
      {/* Hero content */}
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center"
        >
          <div className="mb-6 inline-flex items-center rounded-full border border-gray-200 bg-black/5 px-3 py-1 text-sm backdrop-blur ">
            <span className="mr-2 animate-pulse rounded-full bg-green-700 h-2 w-2" />
            <span className="text-gray-600">
              Yazılım mühendisi & Teknoloji tutkunu
            </span>
          </div>

          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-4xl font-bold tracking-tight sm:text-6xl mb-6"
          >
            <AnimatedGradientText>
              Merhaba, ben Hasan
            </AnimatedGradientText>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="h-[60px] sm:h-[80px] text-2xl sm:text-4xl font-medium"
          >
            <TypeAnimation
              sequence={[
                'Yazılım Mühendisi',
                1000,
                'Mobil Geliştirici',
                1000,
                'Full-Stack Geliştirici',
                1000,
                'UI/UX Tasarımcısı',
                1000,
                'Cloud Mimarı',
                1000,
                'Açık Kaynak Katkıcısı',
                1000,

              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              className="text-gray-100 text-shadow-lg"
            />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-6 max-w-lg text-xl text-muted-foreground"
          >
            Karmaşık problemleri basit, güzel ve sezgisel çözümlere dönüştürüyorum.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 1 }}
            className="mt-10 flex flex-wrap gap-4 justify-center"
          >
            <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
              <a href="/projects">Projelerim</a>
            </Button>
            <Button variant="outline" size="lg">
              <a href="/about">Hakkımda</a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-20 animate-bounce"
          >
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full" 
              onClick={scrollToContent}
            >
              <ArrowDown className="h-6 w-6" />
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}