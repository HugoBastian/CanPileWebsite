import { MediaImage } from './components/MediaImage';

export default function CanPileWireframe() {
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
            <span className="font-semibold tracking-wide text-white">Clínica Veterinària Can Pilé</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-white">
            <a href="#hero" className="hover:underline">Inici</a>
            <a href="#services" className="hover:underline">Serveis</a>
            <a href="#gallery" className="hover:underline">Galeria</a>
            <a href="#team" className="hover:underline">Equip</a>
            <a href="#contact" className="hover:underline">Contacte</a>
            <a href="#hours" className="hover:underline">Horari</a>
          </nav>
          <button className="md:hidden px-3 py-2 border border-white text-white rounded-lg text-sm">Menu</button>
        </div>
      </header>

      {/* Hero with background media */}
      <section id="hero" className="relative">
        <div className="h-[56vh] md:h-[72vh] w-full bg-neutral-200 grid place-items-center">
          {/* Placeholder for background video/image */}
          <div className="absolute inset-0 bg-neutral-300/60 grid place-items-center">
            <div className="w-3/4 max-w-3xl aspect-video rounded-xl border-2 border-dashed border-neutral-500 flex items-center justify-center text-neutral-600 text-sm">
              Fondo: vídeo / imatge (muted, loop, lazy)
            </div>
          </div>
          <div className="relative z-10 text-center px-6">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight">Cura veterinària propera i avançada</h1>
            <p className="mt-3 md:mt-4 text-neutral-600 max-w-2xl mx-auto">Missatge breu de valor. 1–2 frases màxim. Overline/CTA clar.</p>
            <div className="mt-6 flex items-center justify-center gap-3">
              <button className="px-5 py-3 rounded-xl bg-[#227461] text-white text-sm hover:bg-[#1a5a4a] transition-colors">Demana cita</button>
              <button className="px-5 py-3 rounded-xl border border-[#227461] text-[#227461] text-sm hover:bg-[#227461] hover:text-white transition-colors">Truca</button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / badges */}
      <section className="py-8 border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1,2,3,4].map((i) => (
            <div key={i} className="h-12 rounded-lg bg-white border border-dashed grid place-items-center text-xs text-neutral-500">Insígnia / Associació</div>
          ))}
        </div>
      </section>

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="aspect-[4/3] rounded-2xl border-2 border-dashed" />
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Sobre la clínica</h2>
            <p className="mt-3 text-neutral-600">Breu introducció (80–120 paraules). Enllaç a pàgina “Nosaltres” amb més detall.</p>
            <div className="mt-5">
              <a href="#about" className="text-[#227461] underline hover:text-[#1a5a4a]">Més sobre nosaltres →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section id="services" className="py-16 bg-white border-y">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-end justify-between">
            <h2 className="text-2xl md:text-3xl font-semibold">Serveis</h2>
            <a className="text-sm text-[#227461] underline hover:text-[#1a5a4a]" href="#">Veure tots els serveis</a>
          </div>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Radiologia", "Ecografia", "Cirurgia", "Laboratori", "Oncologia", "Altres especialitats"].map((s) => (
              <div key={s} className="rounded-2xl border-2 border-dashed p-5">
                <div className="h-36 rounded-xl border-2 border-dashed mb-4 grid place-items-center text-xs text-neutral-500">Foto / vídeo (lazy)</div>
                <h3 className="font-semibold">{s}</h3>
                <p className="text-sm text-neutral-600 mt-1">Descripció breu de 2–3 línies. Botó per a més info.</p>
                <button className="mt-4 text-sm text-[#227461] underline hover:text-[#1a5a4a]">Saber-ne més</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Media */}
      <section id="gallery" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Galeria</h2>
          <p className="text-neutral-600 mt-2">Imatges i vídeos destacats de la clínica i els pacients. Lightbox / modal en producció.</p>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
            {Array.from({length:8}).map((_, i) => (
              <div key={i} className="aspect-square rounded-2xl border-2 border-dashed" />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white border-y">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Opinions</h2>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {[1,2,3].map((i) => (
              <div key={i} className="rounded-2xl border p-5 bg-neutral-50">
                <div className="h-10 w-10 rounded-full bg-neutral-200 mb-3" />
                <p className="text-sm italic">“Comentari del client. 1–3 frases.”</p>
                <p className="mt-3 text-xs text-neutral-500">Nom del client</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-semibold">Equip</h2>
          <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Veterinari/a", "Auxiliar", "Especialista"].map((role, i) => (
              <div key={i} className="rounded-2xl border p-5">
                <div className="aspect-[4/3] rounded-xl border-2 border-dashed mb-4" />
                <h3 className="font-semibold">Nom i cognoms</h3>
                <p className="text-sm text-neutral-500">{role}</p>
                <p className="text-sm text-neutral-600 mt-2">Bio breu de 2–3 línies.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Location */}
      <section id="hours" className="py-16 bg-white border-y">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Horari</h2>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {["Dl", "Dt", "Dc", "Dj", "Dv", "Ds"].map((d) => (
                <div key={d} className="flex items-center justify-between rounded-lg border p-3 bg-neutral-50">
                  <span className="font-medium">{d}</span>
                  <span className="text-neutral-600">09:00–13:00 · 16:00–20:00</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">On som</h2>
            <div className="mt-5 aspect-video rounded-2xl border-2 border-dashed grid place-items-center text-sm text-neutral-500">Mapa incrustat</div>
            <p className="mt-3 text-neutral-600 text-sm">Adreça completa · Pàrquing · Rutes</p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Contacte</h2>
            <p className="mt-2 text-neutral-600">Telèfon, email, emergències. Formulari simple validat.</p>
            <div className="mt-6 grid gap-3">
              <input className="border rounded-lg px-4 py-3" placeholder="Nom" />
              <input className="border rounded-lg px-4 py-3" placeholder="Email" />
              <textarea className="border rounded-lg px-4 py-3 h-28" placeholder="Missatge" />
              <button className="px-5 py-3 rounded-xl bg-[#227461] text-white text-sm w-max hover:bg-[#1a5a4a] transition-colors">Envia</button>
            </div>
          </div>
          <div className="rounded-2xl border-2 border-dashed p-6 grid place-items-center text-neutral-500">Espai per a foto/ vídeo ambient clinic</div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 border-t bg-white">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-4 gap-8 text-sm">
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
            <p className="font-semibold mb-2">Clínica</p>
            <ul className="space-y-1 text-neutral-600">
              <li><a href="#about" className="hover:underline">Nosaltres</a></li>
              <li><a href="#services" className="hover:underline">Serveis</a></li>
              <li><a href="#team" className="hover:underline">Equip</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Suport</p>
            <ul className="space-y-1 text-neutral-600">
              <li><a href="#contact" className="hover:underline">Contacte</a></li>
              <li><a href="#hours" className="hover:underline">Horari</a></li>
            </ul>
          </div>
          <div>
            <p className="font-semibold mb-2">Xarxes</p>
            <ul className="space-y-1 text-neutral-600">
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Facebook</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
