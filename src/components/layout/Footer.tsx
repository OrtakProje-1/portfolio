import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="border-t border-black mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link to="/" className="text-xl font-bold inline-block mb-4">
              <span className="shimmer-gradient-text">Hasan UÇKUN</span>
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Yazılım mühendisliği ve teknoloji konularında paylaşımlar yapan
              kişisel portfolyo ve blog sitesi. Modern web geliştirme, mimari
              tasarım ve yazılım ekosistemi üzerine içerikler.
            </p>
            <div className="flex gap-3">
              <Button
                id="github"
                variant="ghost"
                size="icon"
                asChild
                className="icon"
              >
                <ul className="flex flex-col items-center justify-center">
                  <li className="tooltip">GitHub</li>
                  <li>
                    <a
                      href="https://github.com/OrtakProje-1"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </Button>
              <Button
                id="linkedin"
                variant="ghost"
                size="icon"
                asChild
                className="icon"
              >
                <ul className="flex flex-col items-center justify-center">
                  <li className="tooltip">LinkedIn</li>
                  <li>
                    <a
                      href="https://tr.linkedin.com/in/hasan-u%C3%A7kun-550a62229"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </Button>
              <Button
                id="twitter"
                variant="ghost"
                size="icon"
                asChild
                className="icon"
              >
                <ul className="flex flex-col items-center justify-center">
                  <li className="tooltip">Twitter</li>
                  <li>
                    <a
                      href="https://twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </Button>
              <Button
                id="email"
                variant="ghost"
                size="icon"
                asChild
                className="icon"
              >
                <ul className="flex flex-col items-center justify-center">
                  <li className="tooltip">Email</li>
                  <li>
                    <a href="mailto:hasanuk98@gmail.com" aria-label="Email">
                      <Mail className="h-5 w-5" />
                    </a>
                  </li>
                </ul>
              </Button>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projeler
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">İletişim</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">
                <a
                  href="mailto:hasanuk98@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  hasanuk98@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground hover:text-primary">
                <a
                  href="tel:+905522434109"
                  className="hover:text-primary transition-colors"
                >
                  +90 (552) 243-4109
                </a>
              </li>
              <li className="text-muted-foreground">Ankara, Türkiye</li>
              <li className="pt-2">
                <Button className="shimmer-gradient py-2 px-6">
                  İletişime Geç
                </Button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Hasan UÇKUN. Tüm hakları saklıdır.
          </p>
        </div>
      </div>
    </footer>
  );
}
