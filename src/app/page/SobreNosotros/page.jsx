'use client'

import { useContext } from 'react'
import Image from 'next/image'
import traducciones from  "../../../json/sobreNosotrosIdiomas"
import { CambiarIdiomaContexto } from '../../Providers/CambiarIdiomaContexto'
import Link from 'next/link'
export default function SobreNosotros() {
  
  const {idioma} = useContext(CambiarIdiomaContexto)
  const t = traducciones[idioma]






  return ( 
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t.historia}</h2>
          <p className="text-gray-600">{t.historiaContenido}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t.mision}</h2>
          <p className="text-gray-600">{t.misionContenido}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t.vision}</h2>
          <p className="text-gray-600">{t.visionContenido}</p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">{t.valores}</h2>
          <ul className="list-disc pl-5 text-gray-600">
            {t.valoresLista.map((valor, index) => (
              <li key={index}>{valor}</li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">{t.equipo}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.equipoMiembros.map((miembro, index) => (
                <Link key={index} href={miembro.link}>
             <div style={{cursor:"pointer"}}  className="bg-white rounded-lg shadow-md p-6 text-center">
                <Image
                  src={miembro.imagen}
                  alt={miembro.nombre}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4"
                />
              
                <h3 className="text-xl font-semibold mb-2">{miembro.nombre}</h3>
                <p className="text-gray-600">{miembro.cargo}</p>
              </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}