'use client';

import Link from 'next/link';
import { ArrowRight, Quote } from 'lucide-react';
import { useState } from 'react';
import Image from 'next/image';

export default function HomeFounderSection() {
  const [imageError, setImageError] = useState(false);
  const [imgSrc, setImgSrc] = useState('/community/founder11.png');

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50/70 dark:bg-gray-900/40 border-t border-gray-200/60 dark:border-gray-800/60">
      <div className="max-w-5xl mx-auto">
        <div className="relative rounded-3xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 p-8 sm:p-12 shadow-sm hover:shadow-xl transition-all duration-300">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            
            {/* Founder Image Frame */}
            <div className="relative flex-shrink-0">
              <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-cyan-500/30 shadow-lg bg-gray-100 dark:bg-gray-800">
                {!imageError ? (
                  <Image
                    src={imgSrc}
                    alt="Imad Khan Lodhi"
                    fill
                    sizes="(max-width: 640px) 160px, 192px"
                    className="object-cover"
                    priority
                    onError={() => {
                      if (imgSrc === '/community/founder11.png') {
                        setImgSrc('/community/founder.png');
                      } else {
                        setImageError(true);
                      }
                    }}
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-3xl font-bold bg-gradient-to-tr from-cyan-500 to-sky-600 text-white">
                    IL
                  </div>
                )}
              </div>
              <div className="absolute -bottom-3 -right-3 w-8 h-8 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-md">
                <Quote className="w-4 h-4 fill-current" />
              </div>
            </div>

            {/* Founder Bio Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="inline-block px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
                Meet the Founder
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-950 dark:text-white tracking-tight mb-1">
                Imad Khan Lodhi
              </h3>
              
              <p className="text-sm font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
                Founder & CEO, iCreative Solutions
              </p>

              <blockquote className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed italic mb-6">
                &ldquo;We started iCreative Solutions with a straightforward mission: Pakistani retailers don&apos;t need over-complicated, bloated software — they need fast, offline-reliable systems tailored to local ground realities. We engineer software that keeps working when power drops, prevents dead stock, and lets business owners focus on growth.&rdquo;
              </blockquote>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
                <Link
                  href="/about"
                  className="inline-flex items-center space-x-2 text-sm font-bold text-gray-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  <span>Learn About Our Team & Story</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
