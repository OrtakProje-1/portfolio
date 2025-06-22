import { motion } from 'framer-motion';
import MainLayout from '@/components/layout/MainLayout';
import { useState, useEffect } from 'react';
import AnimatedGradientText from '@/components/ui/animated-gradient-text';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Briefcase, Code, GraduationCap, Award, Terminal } from 'lucide-react';

export default function AboutPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

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
        <div className="container mx-auto max-w-5xl">
          <motion.div
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-12"
          >
            {/* Header */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                <AnimatedGradientText>Hakkımda</AnimatedGradientText>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Yazılım mühendisliği ve teknoloji tutkusuyla yenilikçi çözümler geliştiren bir geliştirici
              </p>
            </motion.div>

            {/* About Section */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="md:col-span-1">
                <div className="sticky top-24">
                  <div className="mb-8 w-full md:w-64 aspect-square rounded-2xl overflow-hidden relative bg-gradient-to-br from-blue-600 to-indigo-600">
                    <div className="absolute inset-1 rounded-xl bg-background/95 backdrop-blur flex items-center justify-center">
                      <span className="text-8xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        MS
                      </span>
                    </div>
                  </div>

                  <h2 className="text-xl font-bold mb-2">Mehmet Yazılımcı</h2>
                  <p className="text-muted-foreground mb-4">Kıdemli Yazılım Mühendisi</p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center">
                      <Terminal className="w-4 h-4 mr-2 text-primary" />
                      <span>10+ Yıl Deneyim</span>
                    </div>
                    <div className="flex items-center">
                      <Code className="w-4 h-4 mr-2 text-primary" />
                      <span>Full-Stack Geliştirici</span>
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2 text-primary" />
                      <span>Bilgisayar Mühendisliği, MTÜ</span>
                    </div>
                  </div>

                  <Button className="w-full mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                    <a href="/files/cv.pdf" download className="flex items-center">
                      CV İndir
                    </a>
                  </Button>
                </div>
              </div>

              <div className="md:col-span-2 space-y-12">
                <motion.div variants={itemVariants} className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Hikayem
                    </span>
                  </h2>
                  <p>
                    Yazılım dünyasına ilk adımımı lisede attım ve o zamandan beri teknolojinin sınırlarını
                    keşfetmeye devam ediyorum. 10+ yıllık profesyonel deneyimim boyunca, küçük start-up'lardan
                    Fortune 500 şirketlerine kadar farklı ölçekteki organizasyonlarda çalıştım.
                  </p>
                  <p>
                    Modern web uygulamaları, mobil çözümler ve bulut mimarileri konusunda uzmanlık sahibiyim.
                    Her projede kullanıcı deneyimini ve performansı ön planda tutarak, ölçeklenebilir ve sürdürülebilir 
                    kodlama pratikleri uyguluyorum.
                  </p>
                  <p>
                    Teknoloji topluluğuna katkıda bulunmayı seviyorum. Açık kaynak projelere katkı sağlıyor,
                    blog yazıları yazıyor ve konferanslarda konuşmalar yapıyorum. Sürekli öğrenme ve kendimi 
                    geliştirme tutkusuyla her zaman yeni teknolojileri keşfetmekten heyecan duyuyorum.
                  </p>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <Tabs defaultValue="experience" className="w-full">
                    <TabsList className="mb-8 bg-black/20">
                      <TabsTrigger value="experience" className="flex items-center">
                        <Briefcase className="mr-2 h-4 w-4" />
                        <span>Deneyim</span>
                      </TabsTrigger>
                      <TabsTrigger value="education" className="flex items-center">
                        <GraduationCap className="mr-2 h-4 w-4" />
                        <span>Eğitim</span>
                      </TabsTrigger>
                      <TabsTrigger value="skills" className="flex items-center">
                        <Code className="mr-2 h-4 w-4" />
                        <span>Yetenekler</span>
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="experience" className="space-y-4">
                      <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                        <CardContent className="pt-6">
                          <div className="flex justify-between mb-2">
                            <h3 className="text-lg font-bold">Kıdemli Yazılım Mühendisi</h3>
                            <Badge variant="outline" className="text-blue-400 border-blue-400">2020 - Şimdi</Badge>
                          </div>
                          <h4 className="text-primary mb-4">TechFuture Inc.</h4>
                          <p className="text-muted-foreground">
                            Mikroservis mimarileri tasarlama ve uygulama, büyük ölçekli sistemler geliştirme ve teknik liderlik.
                            Cloud-native uygulamalar için en iyi pratikleri uygulama ve teknik ekibi yönetme.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                        <CardContent className="pt-6">
                          <div className="flex justify-between mb-2">
                            <h3 className="text-lg font-bold">Yazılım Mühendisi</h3>
                            <Badge variant="outline" className="text-blue-400 border-blue-400">2017 - 2020</Badge>
                          </div>
                          <h4 className="text-primary mb-4">InnoSoft GmbH</h4>
                          <p className="text-muted-foreground">
                            Modern web uygulamaları geliştirme, API tasarımı ve implementasyonu, 
                            veritabanı optimizasyonu ve CI/CD süreçlerini geliştirme.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                        <CardContent className="pt-6">
                          <div className="flex justify-between mb-2">
                            <h3 className="text-lg font-bold">Junior Geliştirici</h3>
                            <Badge variant="outline" className="text-blue-400 border-blue-400">2015 - 2017</Badge>
                          </div>
                          <h4 className="text-primary mb-4">Startup Hub</h4>
                          <p className="text-muted-foreground">
                            Frontend ve backend geliştirme, kullanıcı arayüzü tasarımı, 
                            veritabanı yönetimi ve müşteri iletişimi.
                          </p>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="education" className="space-y-4">
                      <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                        <CardContent className="pt-6">
                          <div className="flex justify-between mb-2">
                            <h3 className="text-lg font-bold">Bilgisayar Mühendisliği Yüksek Lisansı</h3>
                            <Badge variant="outline" className="text-blue-400 border-blue-400">2013 - 2015</Badge>
                          </div>
                          <h4 className="text-primary mb-4">Modern Teknoloji Üniversitesi</h4>
                          <p className="text-muted-foreground">
                            Yapay zeka ve makine öğrenmesi odaklı, gerçek hayat problemlerine çözümler geliştirme
                            üzerine projeler. 3.85/4.00 not ortalaması ile mezun oldum.
                          </p>
                        </CardContent>
                      </Card>

                      <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                        <CardContent className="pt-6">
                          <div className="flex justify-between mb-2">
                            <h3 className="text-lg font-bold">Bilgisayar Mühendisliği Lisansı</h3>
                            <Badge variant="outline" className="text-blue-400 border-blue-400">2009 - 2013</Badge>
                          </div>
                          <h4 className="text-primary mb-4">Modern Teknoloji Üniversitesi</h4>
                          <p className="text-muted-foreground">
                            Veri yapıları, algoritma analizi, yazılım mühendisliği, veritabanı sistemleri ve 
                            bilgisayar ağları üzerine kapsamlı eğitim. Bölüm birincisi olarak mezun oldum.
                          </p>
                        </CardContent>
                      </Card>
                    </TabsContent>
                    
                    <TabsContent value="skills">
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                          <CardContent className="p-4 text-center">
                            <h4 className="font-semibold mb-2">Frontend</h4>
                            <div className="flex flex-wrap gap-1 justify-center">
                              <Badge variant="secondary">React</Badge>
                              <Badge variant="secondary">TypeScript</Badge>
                              <Badge variant="secondary">Next.js</Badge>
                              <Badge variant="secondary">Tailwind</Badge>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                          <CardContent className="p-4 text-center">
                            <h4 className="font-semibold mb-2">Backend</h4>
                            <div className="flex flex-wrap gap-1 justify-center">
                              <Badge variant="secondary">Node.js</Badge>
                              <Badge variant="secondary">Python</Badge>
                              <Badge variant="secondary">Go</Badge>
                              <Badge variant="secondary">GraphQL</Badge>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                          <CardContent className="p-4 text-center">
                            <h4 className="font-semibold mb-2">Veritabanı</h4>
                            <div className="flex flex-wrap gap-1 justify-center">
                              <Badge variant="secondary">PostgreSQL</Badge>
                              <Badge variant="secondary">MongoDB</Badge>
                              <Badge variant="secondary">Redis</Badge>
                              <Badge variant="secondary">Elasticsearch</Badge>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                          <CardContent className="p-4 text-center">
                            <h4 className="font-semibold mb-2">DevOps</h4>
                            <div className="flex flex-wrap gap-1 justify-center">
                              <Badge variant="secondary">Docker</Badge>
                              <Badge variant="secondary">Kubernetes</Badge>
                              <Badge variant="secondary">AWS</Badge>
                              <Badge variant="secondary">CI/CD</Badge>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                          <CardContent className="p-4 text-center">
                            <h4 className="font-semibold mb-2">Mimari</h4>
                            <div className="flex flex-wrap gap-1 justify-center">
                              <Badge variant="secondary">Mikroservisler</Badge>
                              <Badge variant="secondary">REST API</Badge>
                              <Badge variant="secondary">Serverless</Badge>
                              <Badge variant="secondary">Event-driven</Badge>
                            </div>
                          </CardContent>
                        </Card>
                        
                        <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                          <CardContent className="p-4 text-center">
                            <h4 className="font-semibold mb-2">Diğer</h4>
                            <div className="flex flex-wrap gap-1 justify-center">
                              <Badge variant="secondary">Agile/Scrum</Badge>
                              <Badge variant="secondary">Git</Badge>
                              <Badge variant="secondary">TDD</Badge>
                              <Badge variant="secondary">UI/UX</Badge>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </TabsContent>
                  </Tabs>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <Award className="mr-2 h-6 w-6 text-primary" />
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                      Ödüller & Sertifikalar
                    </span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-1">AWS Çözüm Mimarı</h3>
                        <p className="text-primary text-sm mb-2">Amazon Web Services, 2022</p>
                        <p className="text-muted-foreground text-sm">
                          AWS platformunda güvenli ve ölçeklenebilir uygulamalar tasarlama ve geliştirme uzmanlığı.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-1">Google Cloud Profesyonel Mühendis</h3>
                        <p className="text-primary text-sm mb-2">Google Cloud Platform, 2021</p>
                        <p className="text-muted-foreground text-sm">
                          GCP'de uygulama tasarımı, geliştirme ve optimize etme yetkinliği sertifikası.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-1">Tensorflow Geliştirici Sertifikası</h3>
                        <p className="text-primary text-sm mb-2">Google, 2020</p>
                        <p className="text-muted-foreground text-sm">
                          Makine öğrenmesi modellerini tasarlama ve uygulamada yetkinlik.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-gray-800 bg-black/20 backdrop-blur-sm">
                      <CardContent className="p-6">
                        <h3 className="font-bold text-lg mb-1">Yılın Geliştiricisi Ödülü</h3>
                        <p className="text-primary text-sm mb-2">TechFuture Inc., 2021</p>
                        <p className="text-muted-foreground text-sm">
                          Yenilikçi çözümler ve şirket büyümesine katkılar için takdir ödülü.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </MainLayout>
  );
}