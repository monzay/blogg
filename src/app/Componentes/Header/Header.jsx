"use client"
import React, { useContext, useEffect, useState } from 'react'
import  { CambiarIdiomaContexto } from '../../Providers/CambiarIdiomaContexto';
import traducciones from '../../../json/traduciones';
import {X,Menu,Globe} from "lucide-react"
import Link from 'next/link';
const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false); 
  const [isHeaderVisible, setIsHeaderVisible] = useState(true); 

  const {idioma,setIdioma} = useContext(CambiarIdiomaContexto)

  const cambiarIdioma = () => {
    setIdioma(prev => prev === 'es' ? 'en' : 'es')
  }
  const t = traducciones[idioma]


  return (
    <header className={`bg-white border-b fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
    <div className="container mx-auto px-4 py-4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="flex justify-between items-center w-full md:w-auto">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">{t.titulo}</h1>
          <button 
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
          >
            {menuAbierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        <nav className={`
          ${menuAbierto ? 'flex' : 'hidden md:flex'} 
          flex-col md:flex-row 
          w-full md:w-auto
          items-center justify-center md:justify-end
          transition-all duration-300 ease-in-out
          mt-4 md:mt-0
        `}>
              <Link  href="/"   className="px-4 py-2 text-base text-gray-600 hover:text-gray-900 transition duration-300 mb-2 md:mb-0 relative group" onClick={() => setMenuAbierto(false) } replace={true}>
           {t.inicio}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
          <Link  href="./page/SobreNosotros"   className="px-4 py-2 text-base text-gray-600 hover:text-gray-900 transition duration-300 mb-2 md:mb-0 relative group" onClick={() => setMenuAbierto(false) } replace={true}>
            {t.sobreNosotros}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </Link>
      
          <button onClick={() => { setMenuAbierto(false); }} className="px-4 py-2 text-base text-gray-600 hover:text-gray-900 transition duration-300 mb-2 md:mb-0 relative group">
            {t.contacto}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </button>
          <button onClick={() => { cambiarIdioma(); setMenuAbierto(false); }} className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 text-base relative group">
            <Globe className="inline-block mr-2 h-4 w-4" />
            {idioma === 'es' ? 'EN' : 'ES'}
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
          </button>
        </nav>
      </div>
    </div>
  </header>
  )
}

export default Header