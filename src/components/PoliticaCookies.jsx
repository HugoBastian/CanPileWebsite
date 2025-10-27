import { useNavigate } from 'react-router-dom';

export default function PoliticaCookies() {
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

        <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8">Política de Cookies</h1>

        <div className="prose prose-neutral max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">Uso de Cookies</h2>
            <p className="text-neutral-600">
              Utilizamos cookies con la finalidad de optimizar y personalizar la navegación por nuestro sitio web. Las cookies son pequeños archivos que se almacenan en el dispositivo del usuario al visitar una página web.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">Tipos de Cookies Utilizadas</h2>
            <ul className="list-disc list-inside text-neutral-600 space-y-2">
              <li><strong>Cookies Propias:</strong> Son aquellas que enviamos a tu ordenador o terminal desde nuestro sitio web.</li>
              <li><strong>Cookies de Terceros:</strong> Son aquellas que se envían a tu ordenador o terminal desde un dominio o una página web que no es gestionada por nosotros, sino por otra entidad colaboradora.</li>
              <li><strong>Cookies de Sesión:</strong> Son un tipo de cookies diseñadas para recabar y almacenar datos mientras accedes a nuestra web.</li>
              <li><strong>Cookies Persistentes:</strong> Son un tipo de cookies en el que los datos siguen almacenados en el terminal y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, y que puede ir de unos minutos a varios años.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">Finalidad de las Cookies</h2>
            <ul className="list-disc list-inside text-neutral-600 space-y-2">
              <li><strong>Técnicas:</strong> Son aquellas que permiten al usuario la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan.</li>
              <li><strong>De Personalización:</strong> Son aquellas que permiten al usuario acceder al servicio con algunas características de carácter general predefinidas.</li>
              <li><strong>De Análisis:</strong> Son aquellas que permiten al responsable de las mismas, el seguimiento y análisis del comportamiento de los usuarios de los sitios web a los que están vinculadas.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">Gestión de Cookies</h2>
            <p className="text-neutral-600 mb-3">
              Puedes permitir, bloquear o eliminar las cookies instaladas en tu equipo mediante la configuración de las opciones del navegador instalado en su ordenador.
            </p>
            <p className="text-neutral-600 mb-3">
              Cada navegador tiene un proceso diferente para permitir, bloquear o eliminar las cookies, a continuación, te proporcionamos enlaces con la información para los navegadores más populares:
            </p>
            <ul className="list-disc list-inside text-neutral-600 space-y-1">
              <li>Google Chrome</li>
              <li>Mozilla Firefox</li>
              <li>Internet Explorer</li>
              <li>Safari</li>
            </ul>
            <p className="text-neutral-600 mt-3">
              Si tienes alguna duda sobre nuestra política de cookies, puedes contactar con nosotros en info@veterinario-en-santa-eulalia.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
