import { useNavigate } from 'react-router-dom';

export default function AvisoLegal() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <button 
          onClick={handleBackClick}
          className="mb-8 text-[#227461] hover:text-[#1a5a4a] flex items-center gap-2 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Volver al inicio
        </button>

        <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8">Aviso Legal</h1>

        <div className="prose prose-neutral max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">Responsable del Sitio Web</h2>
            <p className="text-neutral-600">
              Ester Sarto Jorba con 77304640F es una marca comercial con domicilio en Avd verge de la Salut 7, 08187, Sta. Eulalia roncana Barcelona. El teléfono es 93446939 y el correo electrónico es info@veterinario-en-santa-eulalia.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">Propiedad Intelectual e Industrial</h2>
            <p className="text-neutral-600">
              Todos los contenidos del sitio web, incluyendo, sin carácter limitativo, textos, gráficos, imágenes, su diseño y los derechos de propiedad intelectual que pudieran corresponder a dichos contenidos, así como todas las marcas, nombres comerciales o cualquier otro signo distintivo son propiedad de Ester Sarto Jorba o de sus legítimos propietarios, quedando reservados todos los derechos sobre los mismos.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">Responsabilidad de los Contenidos</h2>
            <p className="text-neutral-600">
              Ester Sarto Jorba no se hace responsable de la legalidad de otros sitios web de terceros desde los que pueda accederse al portal. Tampoco responde por la legalidad de otros sitios web de terceros que pudieran estar vinculados o enlazados desde este portal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">Modificaciones del Aviso Legal</h2>
            <p className="text-neutral-600">
              Ester Sarto Jorba se reserva el derecho a realizar cambios en su sitio web sin previo aviso, con el fin de mantener actualizada su información, añadiendo, modificando, corrigiendo o eliminando los contenidos publicados o el diseño del portal.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
