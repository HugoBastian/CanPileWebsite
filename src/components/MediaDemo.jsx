import React from 'react';
import { MediaImage } from './MediaImage';
import { MediaVideo } from './MediaVideo';

export const MediaDemo = () => {
  // Available logo files in your App Storage
  const logoFiles = [
    { name: 'Logo-blanc.webp', description: 'Logo blanc (white)' },
    { name: 'Logo-CanPile-Nombre.webp', description: 'Logo amb nom' },
    { name: 'Logo-CanPile.webp', description: 'Logo principal' },
    { name: 'Logo-CanPilee-Transparent.webp', description: 'Logo transparent' }
  ];

  return (
    <div className="p-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Demostració de Media amb App Storage
        </h1>

        {/* Logo Gallery Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">
            Els teus Logos Disponibles
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {logoFiles.map((logo) => (
              <div 
                key={logo.name}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-100 rounded p-4 mb-3">
                  <MediaImage
                    category="logos"
                    filename={logo.name}
                    alt={logo.description}
                    className="w-full h-24 object-contain"
                  />
                </div>
                <p className="text-sm text-gray-600 text-center">
                  {logo.description}
                </p>
                <p className="text-xs text-gray-400 text-center mt-1">
                  {logo.name}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* How to Add More Media */}
        <section className="mb-12 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Com Afegir Més Imatges i Vídeos
          </h2>
          <ol className="list-decimal list-inside space-y-3 text-gray-600">
            <li>
              Obre <strong>Tools → Object Storage</strong> a Replit
            </li>
            <li>
              Navega a la carpeta corresponent:
              <ul className="ml-6 mt-2 list-disc list-inside">
                <li><code className="bg-gray-100 px-2 py-1 rounded">gallery/</code> - Per a fotos generals de la clínica</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">services/</code> - Per a imatges de serveis (radiologia, cirurgia, etc.)</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">team/</code> - Per a fotos de l'equip</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">hero/</code> - Per a imatges de capçalera</li>
                <li><code className="bg-gray-100 px-2 py-1 rounded">videos/</code> - Per a vídeos</li>
              </ul>
            </li>
            <li>
              Fes clic a <strong>Upload</strong> i selecciona els teus arxius
            </li>
            <li>
              Les imatges apareixeran automàticament a la web!
            </li>
          </ol>
        </section>

        {/* Example Usage Code */}
        <section className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">
            Exemples de Codi per Utilitzar
          </h2>
          
          <div className="space-y-6">
            {/* Example 1: Single Image */}
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-600">
                Per mostrar una imatge:
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`<MediaImage 
  category="team" 
  filename="dr-ester-sarto.jpg" 
  alt="Dra. Ester Sarto"
  className="w-full h-64 object-cover rounded-lg"
/>`}
              </pre>
            </div>

            {/* Example 2: Video */}
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-600">
                Per mostrar un vídeo:
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`<MediaVideo
  category="videos"
  filename="clinic-tour.mp4"
  className="w-full rounded-lg"
/>`}
              </pre>
            </div>

            {/* Example 3: Gallery */}
            <div>
              <h3 className="text-lg font-medium mb-2 text-gray-600">
                Per crear una galeria:
              </h3>
              <pre className="bg-gray-900 text-green-400 p-4 rounded overflow-x-auto text-sm">
{`const galleryImages = [
  'photo1.jpg', 'photo2.jpg', 'photo3.jpg'
];

<div className="grid grid-cols-3 gap-4">
  {galleryImages.map(img => (
    <MediaImage
      key={img}
      category="gallery"
      filename={img}
      alt="Clínica Can Pilé"
      className="w-full h-48 object-cover"
    />
  ))}
</div>`}
              </pre>
            </div>
          </div>
        </section>

        {/* Current Storage Status */}
        <section className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2 text-blue-800">
            Estat Actual del teu App Storage
          </h3>
          <p className="text-blue-700">
            ✅ App Storage configurat correctament<br />
            ✅ 4 logos disponibles a la carpeta <code className="bg-blue-100 px-2 py-1 rounded">logos/</code><br />
            📁 Carpetes preparades per a més contingut: gallery, services, team, hero, videos
          </p>
        </section>
      </div>
    </div>
  );
};