import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MediaImage } from './components/MediaImage';
import { MediaVideo } from './components/MediaVideo';
import { translations } from './translations.js';

export default function CanPileWireframe() {
  const [language, setLanguage] = useState('ca');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxContent, setLightboxContent] = useState(null);
  const [showFloatingButton, setShowFloatingButton] = useState(false);

  const t = translations[language];

  // Blur floating button when it becomes hidden to prevent focus trap
  useEffect(() => {
    if (!showFloatingButton && document.activeElement?.getAttribute('aria-label') === 'Trucar a la clínica') {
      document.activeElement.blur();
    }
  }, [showFloatingButton]);

  const openLightbox = (content) => {
    setLightboxContent(content);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setTimeout(() => setLightboxContent(null), 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && lightboxOpen) {
        closeLightbox();
      }
    };

    if (lightboxOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroMidpoint = heroSection.offsetTop + (heroSection.offsetHeight / 2);
        const scrollPosition = window.scrollY;
        setShowFloatingButton(scrollPosition > heroMidpoint);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-800">
      {/* Header / Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur bg-[#227461]/95 border-b border-[#227461]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <MediaImage 
              category="logos" 
              filename="Logo-blanc.webp" 
              alt="Can Pilé Logo" 
              className="w-10 h-10 object-contain"
            />
            <span className="font-semibold tracking-wide text-white">{t.header.brand}</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white">
            <a href="#hero" className="hover:underline">{t.nav.home}</a>
            <a href="#services" className="hover:underline">{t.nav.services}</a>
            <a href="#gallery" className="hover:underline">{t.nav.gallery}</a>
            <a href="#team" className="hover:underline">{t.nav.team}</a>
            <a href="#contact" className="hover:underline">{t.nav.contact}</a>
            <a href="#hours" className="hover:underline">{t.nav.hours}</a>
            <div className="flex items-center gap-3 ml-2 pl-4 border-l border-white/30">
              <a href="https://www.instagram.com/vetcanpile/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.facebook.com/people/Cli%CC%81nica-Veterina%CC%80ria-Can-Pile%CC%81/100064230750842/" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <button 
                onClick={() => setLanguage(language === 'ca' ? 'es' : 'ca')} 
                className="text-xs font-medium hover:opacity-80 transition-opacity"
              >
                <span className={language === 'ca' ? 'font-bold' : 'font-normal'}>CA</span>
                <span className="mx-1">|</span>
                <span className={language === 'es' ? 'font-bold' : 'font-normal'}>ES</span>
              </button>
            </div>
          </nav>
          <div className="md:hidden flex items-center gap-3">
            <a href="https://www.instagram.com/vetcanpile/" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80" aria-label="Instagram">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="https://www.facebook.com/people/Cli%CC%81nica-Veterina%CC%80ria-Can-Pile%CC%81/100064230750842/" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80" aria-label="Facebook">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <button 
              onClick={() => setLanguage(language === 'ca' ? 'es' : 'ca')} 
              className="text-xs font-medium text-white hover:opacity-80 transition-opacity"
            >
              <span className={language === 'ca' ? 'font-bold' : 'font-normal'}>CA</span>
              <span className="mx-1">|</span>
              <span className={language === 'es' ? 'font-bold' : 'font-normal'}>ES</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero with background media */}
      <section id="hero" className="relative mb-16">
        <div className="h-[85vh] w-full bg-neutral-200 overflow-hidden relative">
          {/* Background Video */}
          <div className="absolute inset-0">
            <MediaVideo
              category="hero"
              filename="hero.mp4"
              className="w-full h-full object-cover"
              autoplay={true}
              loop={true}
              muted={true}
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-black/40"></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative z-10 h-full flex items-center justify-center text-center px-6">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-white drop-shadow-lg">
                {t.hero.title}
              </h1>
              <p className="mt-3 md:mt-4 text-white/90 max-w-2xl mx-auto drop-shadow-md">
                {t.hero.subtitle}
              </p>
              <div className="mt-6 flex items-center justify-center gap-3">
                <a href="tel:+34938446939" className="px-5 py-3 rounded-xl bg-[#227461] text-white text-sm hover:bg-[#1a5a4a] transition-colors shadow-lg inline-flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {t.hero.ctaPhone}
                </a>
                <a href="#about" className="px-5 py-3 rounded-xl border-2 border-white text-white text-sm hover:bg-white hover:text-[#227461] transition-colors shadow-lg inline-block">
                  {t.hero.ctaAbout}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Intro */}
      <section className="py-16 border-t">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <MediaImage 
            category="services" 
            filename="Clinica-desde-el-frente.webp" 
            alt={t.header.brand} 
            className="aspect-[4/3] rounded-2xl object-cover w-full"
          />
          <div>
            <h2 id="about" className="text-2xl md:text-3xl font-semibold scroll-mt-20">{t.about.title}</h2>
            <p className="mt-3 text-neutral-600">{t.about.intro}</p>
            <div className="mt-5">
              <a href="#team" className="text-[#227461] underline hover:text-[#1a5a4a]">{t.about.cta}</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section id="services" className="py-16 bg-white border-y scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">{t.services.title}</h2>
            <a className="text-sm text-[#227461] underline hover:text-[#1a5a4a]" href="#">{t.services.viewAll}</a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { nameKey: "radiology", image: "Radiologia.webp" },
              { nameKey: "ultrasound", image: "Ecografia.webp" },
              { nameKey: "surgery", image: "Cirurgia2.webp" },
              { nameKey: "lab", image: "Labratoria.webp" },
              { nameKey: "oncology", image: "BlueLight.webp" },
              { nameKey: "other", image: "Telescope.webp" }
            ].map((service) => (
              <div key={service.nameKey} className="rounded-2xl border p-5 bg-white hover:shadow-lg transition-shadow">
                <MediaImage 
                  category="services" 
                  filename={service.image} 
                  alt={t.services[service.nameKey]} 
                  className="h-36 rounded-xl mb-4 object-cover w-full"
                />
                <h3 className="font-semibold">{t.services[service.nameKey]}</h3>
                <p className="text-sm text-neutral-600 mt-1">{t.services.description}</p>
                <button className="mt-4 text-sm text-[#227461] underline hover:text-[#1a5a4a]">{t.services.learnMore}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Media */}
      <section id="gallery" className="py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">{t.gallery.title}</h2>
          <p className="text-neutral-600 mt-2">{t.gallery.subtitle}</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { type: "image", category: "gallery", filename: "recepciocanpile.webp" },
              { type: "image", category: "gallery", filename: "can pile perro en despacho.webp" },
              { type: "image", category: "team", filename: "DanaConGato.webp" },
              { type: "image", category: "gallery", filename: "PerroFeliz.webp" },
              { type: "image", category: "team", filename: "EstarDianaPerro.webp" },
              { type: "image", category: "gallery", filename: "PerroFeliz2.webp" },
              { type: "image", category: "team", filename: "EsterConFloresYPerro.webp" },
              { type: "video", category: "videos", filename: "BrownLabVid.MP4.webm" }
            ].map((item, i) => (
              item.type === "image" ? (
                <div 
                  key={i}
                  onClick={() => openLightbox(item)}
                  className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition-transform"
                >
                  <MediaImage 
                    category={item.category} 
                    filename={item.filename} 
                    alt={`${t.gallery.imageAlt} ${i + 1}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div 
                  key={i} 
                  onClick={() => openLightbox(item)}
                  className="aspect-square rounded-2xl overflow-hidden relative cursor-pointer hover:scale-105 transition-transform bg-neutral-900"
                >
                  <MediaVideo
                    category={item.category}
                    filename={item.filename}
                    className="w-full h-full object-cover"
                    autoplay={false}
                    loop={false}
                    muted={true}
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 pointer-events-none">
                    <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white border-y">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-3">
            <h2 className="text-2xl md:text-3xl font-semibold">{t.reviews.title}</h2>
            <div className="flex items-center gap-1">
              {[1,2,3,4].map((star) => (
                <svg key={star} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg className="w-5 h-5 relative" viewBox="0 0 20 20">
                <defs>
                  <linearGradient id="half-star">
                    <stop offset="50%" stopColor="rgb(250 204 21)" />
                    <stop offset="50%" stopColor="rgb(212 212 212)" />
                  </linearGradient>
                </defs>
                <path fill="url(#half-star)" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="ml-2 text-sm text-neutral-600 font-medium">4.5</span>
            </div>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-5 bg-neutral-50">
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm italic">"En la Clínica Veterinaria Can Pilé, de Sta. Eulàlia de Ronçana, son muy profesionales y competentes, además de muy amables. (Soy médico de profesión, i sé de lo que hablo, porque la vrterinària es la medicina de los animales) Soy cliente desde el inicio de la clínica, he tenido ya 5 perros, i no pienso cambiar."</p>
              <p className="mt-3 text-xs text-neutral-500 font-medium">M. Cristina Nieto Abad</p>
            </div>
            <div className="rounded-2xl border p-5 bg-neutral-50">
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg className="w-4 h-4 text-neutral-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
              <p className="text-sm italic">"Gui por primera vez pirque necesité llevar a la perrita al oftalmólogo. Las veterinarias muy amables y atentas. El especialista viene a la clínica bajo cita previa, muy profesional, con herramienta y tecnología que pudo hacer varias pruebas en situ. Se tomóel tiempo que necesitamos sin meter prisa y explicando todo. Muy sachosfecha con el trato"</p>
              <p className="mt-3 text-xs text-neutral-500 font-medium">Maria Romero</p>
            </div>
            <div className="rounded-2xl border p-5 bg-neutral-50">
              <div className="flex items-center gap-1 mb-3">
                {[1,2,3,4,5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-sm italic">"Vaig portar el meu gat i he quedat encantat amb el tracte tan proper i familiar que li han donat. Es nota la professionalitat i la cura amb què treballen. 100% recomanable! 🐾"</p>
              <p className="mt-3 text-xs text-neutral-500 font-medium">LLUJOSA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">{t.team.title}</h2>
          <div className="mt-8 grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="rounded-2xl border p-6 bg-white hover:shadow-lg transition-shadow">
              <MediaImage 
                category="team" 
                filename="EsterConPerro.webp" 
                alt={t.team.ester.name} 
                className="aspect-[4/3] rounded-xl mb-4 object-cover w-full"
              />
              <h3 className="font-semibold text-lg">{t.team.ester.name}</h3>
              <p className="text-sm text-[#227461] font-medium mb-3">{t.team.ester.title}</p>
              <ul className="text-sm text-neutral-600 space-y-1.5">
                <li>{t.team.ester.bullet1}</li>
                <li>{t.team.ester.bullet2}</li>
                <li>{t.team.ester.bullet3}</li>
                <li>{t.team.ester.bullet4}</li>
                <li>{t.team.ester.bullet5}</li>
                <li>{t.team.ester.bullet6}</li>
              </ul>
            </div>
            <div className="rounded-2xl border p-6 bg-white hover:shadow-lg transition-shadow">
              <MediaImage 
                category="team" 
                filename="DanaConPerro4.webp" 
                alt={t.team.diana.name} 
                className="aspect-[4/3] rounded-xl mb-4 object-cover w-full"
              />
              <h3 className="font-semibold text-lg">{t.team.diana.name}</h3>
              <p className="text-sm text-[#227461] font-medium mb-3">{t.team.diana.title}</p>
              <ul className="text-sm text-neutral-600 space-y-1.5">
                <li>{t.team.diana.bullet1}</li>
                <li>{t.team.diana.bullet2}</li>
                <li>{t.team.diana.bullet3}</li>
                <li>{t.team.diana.bullet4}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section id="hours" className="py-16 bg-white border-y scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{t.hours.title}</h2>
            <div className="mt-5 space-y-3 text-sm">
              <div className="flex items-center justify-between rounded-lg border p-3 bg-neutral-50">
                <span className="font-medium">{t.hours.monday}</span>
                <span className="text-neutral-600">09:30–14:30 · 17:00–19:30</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3 bg-neutral-50">
                <span className="font-medium">{t.hours.tuesday}</span>
                <span className="text-neutral-600">09:30–14:30</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3 bg-neutral-50">
                <span className="font-medium">{t.hours.wednesday}</span>
                <span className="text-neutral-600">09:30–14:30</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3 bg-neutral-50">
                <span className="font-medium">{t.hours.thursday}</span>
                <span className="text-neutral-600">09:30–14:30 · 17:00–19:30</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3 bg-neutral-50">
                <span className="font-medium">{t.hours.friday}</span>
                <span className="text-neutral-600">09:30–14:30</span>
              </div>
              <div className="flex items-center justify-between rounded-lg border p-3 bg-neutral-50">
                <span className="font-medium">{t.hours.weekendLabel}</span>
                <span className="text-neutral-600 font-semibold">{t.hours.closed}</span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">{t.hours.location}</h2>
            <div className="mt-5 aspect-video rounded-2xl overflow-hidden border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2984.0!2d2.2321075!3d41.6414639!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDM4JzI5LjMiTiAywrAxMyc1NS42IkU!5e0!3m2!1sen!2ses!4v1729512000000"
                width="100%"
                height="100%"
                style={{border:0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={t.hours.mapTitle}
              ></iframe>
            </div>
            <p className="mt-3 text-neutral-600 text-sm">
              {t.hours.addressFull}
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 scroll-mt-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold text-center">{t.contact.title}</h2>
          <p className="mt-3 text-neutral-600 text-center max-w-2xl mx-auto">
            {t.contact.subtitle}
          </p>
          
            <div className="mt-10 grid md:grid-cols-2 gap-8 max-w-5xl mx-auto items-start md:items-center">
              <div className="w-full relative top-[-1rem] md:top-[-1.5rem]">
                <MediaImage 
                  category="services"
                  filename="Waiting-room.webp"
                  alt="Sala d'espera Can Pilé"
                  className="w-full h-full max-h-80 object-cover rounded-2xl"
                />
              </div>
            
            <div className="grid gap-6">
              <a href="tel:+34938446939" className="flex flex-col items-center p-6 rounded-2xl border-2 border-[#227461] hover:bg-[#227461] hover:text-white transition-colors group">
                <svg className="w-10 h-10 mb-3 text-[#227461] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">{t.contact.phone}</h3>
                <p className="text-base">938 446 939</p>
              </a>
              
              <a href="mailto:vetcanpile@hotmail.es" className="flex flex-col items-center p-6 rounded-2xl border-2 border-[#227461] hover:bg-[#227461] hover:text-white transition-colors group">
                <svg className="w-10 h-10 mb-3 text-[#227461] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <h3 className="text-lg font-semibold mb-2">{t.contact.email}</h3>
                <p className="text-base">vetcanpile@hotmail.es</p>
              </a>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-sm text-neutral-600">
              <strong>{t.contact.addressLabel}</strong> {t.contact.addressFull}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-5 gap-8 text-sm">
          <div>
            <MediaImage 
              category="logos" 
              filename="Logo-blanc.webp" 
              alt="Can Pilé Logo" 
              className="w-12 h-12 object-contain mb-3 bg-[#227461] rounded-full p-2"
            />
            <p className="text-neutral-600">© {new Date().getFullYear()} Can Pilé</p>
          </div>
          <div>
            <p className="font-semibold mb-2">{t.footer.clinic}</p>
            <ul className="space-y-1 text-neutral-600">
              <li><a href="#about" className="hover:underline">{t.footer.about}</a></li>
              <li><a href="#services" className="hover:underline">{t.footer.services}</a></li>
              <li><a href="#team" className="hover:underline">{t.footer.team}</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">{t.footer.support}</p>
            <ul className="space-y-1 text-neutral-600">
              <li><a href="#contact" className="hover:underline">{t.footer.contact}</a></li>
              <li><a href="#hours" className="hover:underline">{t.footer.hours}</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">{t.footer.social}</p>
            <ul className="space-y-1 text-neutral-600">
              <li><a href="https://www.instagram.com/vetcanpile/" target="_blank" rel="noopener noreferrer" className="hover:underline">Instagram</a></li>
              <li><a href="https://www.facebook.com/people/Cli%CC%81nica-Veterina%CC%80ria-Can-Pile%CC%81/100064230750842/" target="_blank" rel="noopener noreferrer" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Legal</p>
            <ul className="space-y-1 text-neutral-600">
              <li><Link to="/aviso-legal" className="hover:underline">Aviso Legal</Link></li>
              <li><Link to="/politica-privacidad" className="hover:underline">Política de Privacidad</Link></li>
              <li><Link to="/politica-cookies" className="hover:underline">Política de Cookies</Link></li>
            </ul>
          </div>
        </div>
      </footer>

      {/* Lightbox Modal */}
      {lightboxOpen && lightboxContent && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-fadeIn"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-neutral-300 transition-colors z-10"
            aria-label={t.lightbox.close}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div 
            className="w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {lightboxContent.type === "image" ? (
              <MediaImage 
                category={lightboxContent.category}
                filename={lightboxContent.filename}
                alt={t.gallery.expandedAlt}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg"
              />
            ) : (
              <MediaVideo
                category={lightboxContent.category}
                filename={lightboxContent.filename}
                className="max-w-[90vw] max-h-[90vh] w-auto h-auto rounded-lg"
                autoplay={true}
                loop={true}
                muted={false}
              />
            )}
          </div>
        </div>
      )}

      {/* Floating Call Button */}
      <a
        href="tel:+34938446939"
        className={`fixed bottom-6 right-6 z-50 bg-[#227461] text-white p-4 rounded-full shadow-lg hover:bg-[#1a5a4a] transition-all duration-400 hover:scale-110 ${
          showFloatingButton 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 translate-y-5 pointer-events-none'
        }`}
        aria-label="Trucar a la clínica"
        aria-hidden={!showFloatingButton}
        tabIndex={showFloatingButton ? 0 : -1}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  );
}
