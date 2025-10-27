import { useNavigate } from 'react-router-dom';

export default function PoliticaPrivacidad() {
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

        <h1 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-8">Política de Privacidad</h1>

        <div className="prose prose-neutral max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">¿Quién es el responsable del tratamiento de sus datos?</h2>
            <p className="text-neutral-600">
              Ester Sarto Jorba con 77304640F es una marca comercial con domicilio en Avd verge de la Salut 7, 08187, Sta. Eulalia roncana Barcelona. El teléfono es 93446939 y el correo electrónico es info@veterinario-en-santa-eulalia.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">¿Quién es el Delegado de Protección de Datos (DPO) de dichas entidades y cómo puede ayudarle?</h2>
            <p className="text-neutral-600 mb-3">
              El DPO es una figura legalmente prevista que tiene como funciones principales las de informarnos y asesorarnos sobre las obligaciones que nos afectan en materia de protección de datos personales y supervisar su cumplimiento. Además, el DPO actúa como punto de contacto con nosotros para cualquier cuestión relativa al tratamiento de datos personales, por lo que, si lo desea, puede usted dirigirse a él.
            </p>
            <p className="text-neutral-600">
              El DPO de Ester Sarto Jorba es la misma entidad. Puede contactar con el DPO en el domicilio postal de la empresa o en la dirección de e-mail info@veterinario-en-santa-eulalia.com.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">¿Con qué finalidad tratamos sus datos personales?</h2>
            <p className="text-neutral-600 mb-3">Tratamos los datos personales que nos facilite con los siguientes fines:</p>
            <ul className="list-disc list-inside text-neutral-600 space-y-2">
              <li>El envío de comunicaciones comerciales de nuestros productos o servicios, salvo que usted manifieste su voluntad en contra por cualquier medio.</li>
              <li>La resolución de consultas o la elaboración de presupuestos que nos pueda solicitar a través de los formularios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">¿Durante cuánto tiempo trataremos sus datos?</h2>
            <p className="text-neutral-600 mb-3">
              Los datos para el envío de comunicaciones comerciales de nuestros productos o servicios serán conservados indefinidamente, hasta que, en su caso, usted nos manifieste su voluntad de suprimirlos.
            </p>
            <p className="text-neutral-600">
              Los datos facilitados para las exclusivas finalidades de resolución de consultas o elaboración de presupuestos, en caso de que marque la casilla de no querer recibir comunicaciones comerciales, serán conservados durante 2 años.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">¿Cuál es la legitimación para el tratamiento de sus datos?</h2>
            <p className="text-neutral-600">
              La legitimación para tratar sus datos para la resolución de consultas, elaboración de presupuestos y realizar acciones comerciales está basada en el consentimiento que se le solicita, pudiendo usted revocarlo en cualquier momento.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">¿A qué destinatarios se comunicarán sus datos?</h2>
            <p className="text-neutral-600">
              Los datos se comunicarán a terceras entidades para enviarle propuestas comerciales de su interés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-neutral-800 mb-3">¿Cuáles son sus derechos cuando nos facilita sus datos?</h2>
            <ul className="list-disc list-inside text-neutral-600 space-y-2">
              <li>Derecho a acceder a sus datos personales.</li>
              <li>Derecho a solicitar la rectificación de los datos inexactos.</li>
              <li>Derecho a solicitar su supresión cuando los datos ya no sean necesarios para los fines para los que fueron recogidos.</li>
              <li>Derecho a solicitar la limitación del tratamiento de sus datos.</li>
              <li>Derecho a la portabilidad de sus datos.</li>
              <li>Derecho a oponerse al tratamiento de sus datos por motivos relacionados con su situación particular.</li>
              <li>Derecho a retirar el consentimiento en cualquier momento.</li>
            </ul>
            <p className="text-neutral-600 mt-3">
              Estos derechos pueden ejercerse a través de los medios de contacto mencionados al principio de esta cláusula. También puede presentar una reclamación ante la Agencia Española de Protección de Datos (www.agpd.es) si considera que se han vulnerado sus derechos.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
