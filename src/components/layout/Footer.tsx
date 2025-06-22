import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Footer() {
  return (
    <footer className="border-t border-gray-800 bg-black/50 backdrop-blur-lg mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <Link
              to="/"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent inline-block mb-4"
            >
              DevPortal
            </Link>
            <p className="text-muted-foreground mb-4 max-w-md">
              Yazılım mühendisliği ve teknoloji konularında paylaşımlar yapan kişisel
              portfolyo ve blog sitesi. Modern web geliştirme, mimari tasarım
              ve yazılım ekosistemi üzerine içerikler.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:contact@example.com" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Navigation links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projeler
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-muted-foreground hover:text-primary transition-colors">
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
                <a href="mailto:contact@example.com" className="hover:text-primary transition-colors">
                  contact@example.com
                </a>
              </li>
              <li className="text-muted-foreground hover:text-primary">
                <a href="tel:+901234567890" className="hover:text-primary transition-colors">
                  +90 (123) 456-7890
                </a>
              </li>
              <li className="text-muted-foreground">İstanbul, Türkiye</li>
              <li className="pt-2">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  İletişime Geç
                </Button>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DevPortal. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
}