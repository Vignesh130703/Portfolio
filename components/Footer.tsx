import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-glass bg-black/50 backdrop-blur-sm mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="font-bold text-xl tracking-tighter">
              Vignesh<span className="text-gradient">.dev</span>
            </Link>
            <p className="text-gray-400 mt-2 text-sm max-w-sm">
              Building automation tools & real-time systems that save time and make money.
            </p>
          </div>

          <div className="flex space-x-6">
            <a href="https://github.com/Vignesh130703" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">GitHub</span>
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Twitter</span>
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">LinkedIn</span>
              <Linkedin size={20} />
            </a>
            <a href="mailto:hello@example.com" className="text-gray-400 hover:text-white transition-colors">
              <span className="sr-only">Email</span>
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-glass text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Vignesh.dev. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
