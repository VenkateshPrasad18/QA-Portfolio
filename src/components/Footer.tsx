import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Contact Information on the Left */}
          <div className="flex flex-col gap-4 text-gray-400 mb-8 md:mb-0">
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-gray-400" />
              <p>+91 0987654321</p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Mail className="w-5 h-5 text-gray-400" />
              <p>
                <a
                  href="mailto:venkateshprasad.qa@gmail.com"
                  className="hover:text-white"
                  aria-label="Send me an email"
                >
                  venkateshprasad.qa@gmail.com
                </a>
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <MapPin className="w-5 h-5 text-gray-400" />
              <p>Bengaluru, India</p> {/* Replace with your actual location */}
            </div>
          </div>

          {/* Social Links centered for large screens */}
          <div className="flex flex-col md:flex-row items-center gap-4 mb-4 md:mb-0">
            <a
              href="https://github.com/VenkateshPrasad18?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Visit my GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/venkatesh-prasad-gowd"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Visit my LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Send me an email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Copyright at the bottom */}
        <div className="text-center mt-8 text-gray-400">
          <p>© 2024 Venkatesh Prasad. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
