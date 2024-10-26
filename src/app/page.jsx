'use client'

import { useState, useEffect, useContext } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { format } from 'date-fns'
import { es, enUS } from 'date-fns/locale'
import  datosDelBlog from "../json/post"
import  traducciones from "../json/traduciones"
import { CambiarIdiomaContexto } from './Providers/CambiarIdiomaContexto'

const ENTRADAS_POR_PAGINA = 3

export default function BlogTechnoFuturo() {

  const {idioma} = useContext(CambiarIdiomaContexto)

  
  const [terminoBusqueda, setTerminoBusqueda] = useState('')
  const [entradaSeleccionada, setEntradaSeleccionada] = useState(null)
  const [paginaActual, setPaginaActual] = useState(1)
  const [entradasFiltradas, setEntradasFiltradas] = useState(datosDelBlog[idioma].entradasBlog)
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)
  const [menuAbierto, setMenuAbierto]   = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [entriesLoaded, setEntriesLoaded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      if (currentScrollY > lastScrollY) {
        setIsHeaderVisible(false)
      } else {
        setIsHeaderVisible(true)
      }
      setLastScrollY(currentScrollY)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])



  useEffect(() => {
    let filtradas = datosDelBlog[idioma].entradasBlog
    if (categoriaSeleccionada) {
      filtradas = filtradas.filter(entrada => entrada.categoria === categoriaSeleccionada)
    }
    if (terminoBusqueda) {
      filtradas = filtradas.filter(entrada =>
        entrada.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
        entrada.contenido.toLowerCase().includes(terminoBusqueda.toLowerCase())
      )
    }
    setEntradasFiltradas(filtradas)
    setPaginaActual(1)
    setEntriesLoaded(false)
    setTimeout(() => setEntriesLoaded(true), 100)
  }, [terminoBusqueda, categoriaSeleccionada, idioma])

  useEffect(() => {
    if (entradaSeleccionada) {
      setEntriesLoaded(false);
      setTimeout(() => setEntriesLoaded(true), 50);
    }
  }, [entradaSeleccionada]);

  const indiceUltimaEntrada = paginaActual * ENTRADAS_POR_PAGINA
  const indicePrimeraEntrada = indiceUltimaEntrada - ENTRADAS_POR_PAGINA
  const entradasActuales = entradasFiltradas.slice(indicePrimeraEntrada, indiceUltimaEntrada)
  console.log(entradasActuales)

  const manejarBusqueda = (e) => {
    e.preventDefault()
    // La búsqueda ya está manejada por el useEffect
  }

  const manejarPaginaAnterior = () => {
    setPaginaActual(prev => Math.max(prev - 1, 1))
    setEntriesLoaded(false)
    setTimeout(() => setEntriesLoaded(true), 100)
  }

  const manejarPaginaSiguiente = () => {
    setPaginaActual(prev => Math.min(prev + 1, Math.ceil(entradasFiltradas.length / ENTRADAS_POR_PAGINA)))
    setEntriesLoaded(false)
    setTimeout(() => setEntriesLoaded(true), 100)
  }

  const formatearFecha = (fechaString) => {
    const fecha = new Date(fechaString)
    return format(fecha, "d 'de' MMMM, yyyy", { locale: idioma === 'es' ? es : enUS })
  }

  const publicacionesRecientes = datosDelBlog[idioma].entradasBlog.sort((a, b) => new Date(b.fecha) - new Date(a.fecha)).slice(0, 3)

  const cambiarIdioma = () => {
    setIdioma(prev => prev === 'es' ? 'en' : 'es')
    setEntradaSeleccionada(null)
    setCategoriaSeleccionada(null)
  }

  const validateForm = () => {
    const errors = {}
    if (!formData.nombre.trim()) {
      errors.nombre = idioma === 'es' ? 'El nombre es requerido' : 'Name is required'
    }
    if (!formData.email.trim()) {
      errors.email = idioma === 'es' ? 'El email es requerido' : 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = idioma === 'es' ? 'Email inválido' : 'Invalid email address'
    }
    if (!formData.mensaje.trim()) {
      errors.mensaje = idioma === 'es' ? 'El mensaje es requerido' : 'Message is required'
    }
    return errors
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }))
  }

  const manejarEnvioContacto = async (e) => {
    e.preventDefault()
    const errors = validateForm()
    setFormErrors(errors)

    if (Object.keys(errors).length === 0) {
      setIsSubmitting(true)
      // Simulate sending email
      await new Promise(resolve => setTimeout(resolve, 2000))
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormData({ nombre: '', email: '', mensaje: '' })
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitSuccess(false), 5000)
    }
  }

  const t = traducciones[idioma]

  const scrollToContact = () => {
    const contactForm = document.getElementById('formulario-contacto')
    if (contactForm) {
      contactForm.scrollIntoView({ behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuAbierto && !event.target.closest('nav') && !event.target.closest('button')) {
        setMenuAbierto(false)
      }
    }

    if (menuAbierto) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.body.style.overflow = 'auto'
    }
  }, [menuAbierto])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuAbierto(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-grow container mx-auto px-4 py-8 mt-20">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <form onSubmit={manejarBusqueda} className="mb-8">
              <div className="flex">
                <input 
                  type="search" 
                  placeholder={t.buscar}
                  className="w-full px-4 py-2 border rounded-l focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={terminoBusqueda}
                  onChange={(e) => setTerminoBusqueda(e.target.value)}
                />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-r hover:bg-blue-600 transition duration-300">
                  <Search className="h-4 w-4" />
                </button>
              </div>
            </form>
            
            {entradaSeleccionada ? (
              <div 
                className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 ease-in-out opacity-100 transform translate-y-0"
              >
                <button onClick={() => setEntradaSeleccionada(null)} className="mb-4 text-blue-500 hover:text-blue-600 transition duration-300">
                  <ChevronLeft className="inline-block mr-2 h-4 w-4" /> {t.volver}
                </button>
                <div className="text-sm text-gray-500 mb-2">{entradaSeleccionada.categoria} • {formatearFecha(entradaSeleccionada.fecha)}</div>
                <h2 className="text-2xl font-semibold mb-4">{entradaSeleccionada.titulo}</h2>
                {entradaSeleccionada.img && (
                  <div className="mb-4">
                    <Image
                      src={entradaSeleccionada.img}
                      alt={entradaSeleccionada.titulo}
                      width={300}
                      height={200}
                      className="rounded-lg w-full h-auto"
                    />
                     
                  </div>
                )}
                <p className="text-gray-600 whitespace-pre-line">{entradaSeleccionada.contenido}</p>
                {entradaSeleccionada.urls ? (
                   <ul>
                      {
                          entradaSeleccionada.urls.map(url => (
                          <li key={url.nombre}><a href={url.url} style={{ cursor: 'pointer' }}>{url.nombre}</a></li>
                       ))
                     }
                 </ul>
             ) : null}
              </div>
            ) : (
              <div>
                {entradasActuales.map((entrada, index) => (
                  <div 
                    key={entrada.id}
                    className={`bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 ease-in-out hover:shadow-lg ${
                      entriesLoaded 
                        ? 'opacity-100 transform translate-y-0' 
                        : 'opacity-0 transform translate-y-4'
                    }`}
                    style={{ transitionDelay: `${index * 150}ms` }}
                  >
                    <div className="text-sm text-gray-500 mb-2">{entrada.categoria} • {formatearFecha(entrada.fecha)}</div>
                    <h2 className="text-xl font-semibold mb-2">{entrada.titulo}</h2>
                    {entrada.img && (
                      <div className="mb-4">
                        <Image
                          src={entrada.img.src}
                          alt={entrada.titulo}
                          width={300}
                          height={200}
                          className="rounded-lg w-full h-auto"
                        />
                      </div>
                    )}
                    <p className="text-gray-600 mb-4">{entrada.extracto}</p>
                    <button 
                      onClick={() => setEntradaSeleccionada(entrada)}
                      className="text-blue-500 hover:text-blue-600 transition duration-300"
                    >
                      {t.leerMas}
                    </button>
                  </div> 
                ))}
              </div>
            )}

            {!entradaSeleccionada && (
              <div className="flex justify-between items-center mt-8">
                <button 
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 disabled:opacity-50"
                  onClick={manejarPaginaAnterior}
                  disabled={paginaActual === 1}
                >
                  <ChevronLeft className="inline-block mr-2 h-4 w-4" /> {t.anterior}
                </button>
                <span className="text-sm text-gray-500">
                  {t.pagina} {paginaActual} {t.de} {Math.ceil(entradasFiltradas.length / ENTRADAS_POR_PAGINA)}
                </span>
                <button 
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 disabled:opacity-50"
                  onClick={manejarPaginaSiguiente}
                  disabled={paginaActual === Math.ceil(entradasFiltradas.length / ENTRADAS_POR_PAGINA)}
                >
                  {t.siguiente} <ChevronRight className="inline-block ml-2 h-4 w-4" />
                </button>
              </div>
            )}
          </div>

          <aside className="md:w-1/3">
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="font-semibold mb-2">{t.categorias}</h3>
              <ul className="space-y-1">
                {datosDelBlog[idioma].categorias.map((categoria, index) => (
                  <li key={index}>
                    <button 
                      className="w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition duration-300"
                      onClick={() => setCategoriaSeleccionada(categoria === categoriaSeleccionada ? null : categoria)}
                    >
                      {categoria}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold mb-2">{t.publicacionesRecientes}</h3>
              <ul className="space-y-1">
                {publicacionesRecientes.map((entrada) => (
                  <li key={entrada.id}>
                    <button 
                      className="w-full text-left py-1 px-2 rounded hover:bg-gray-100 transition duration-300 text-blue-500 hover:text-blue-600"
                      onClick={() => setEntradaSeleccionada(entrada)}
                    >
                      {entrada.titulo}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mt-8">
          <h3 className="font-semibold mb-4">{t.contacto}</h3>
          {submitSuccess && (
            <div className="mb-4 p-2 bg-green-100 border border-green-400 text-green-700 rounded">
              {idioma === 'es' ? 'Mensaje enviado con éxito!' : 'Message sent successfully!'}
            </div>
          )}
          <form id="formulario-contacto" onSubmit={manejarEnvioContacto} className="space-y-4">
            <div>
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">{t.nombre}</label>
              <input 
                id="nombre" 
                name="nombre"
                type="text" 
                value={formData.nombre}
                onChange={handleInputChange}
                placeholder={t.nombre} 
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.nombre ? 'border-red-500' : ''}`}
              />
              {formErrors.nombre && <p className="text-red-500 text-xs mt-1">{formErrors.nombre}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t.email}</label>
              <input 
                id="email" 
                name="email"
                type="email" 
                value={formData.email}
                onChange={handleInputChange}
                placeholder={t.email} 
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.email ? 'border-red-500' : ''}`}
              />
              {formErrors.email && <p className="text-red-500 text-xs mt-1">{formErrors.email}</p>}
            </div>
            <div>
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">{t.mensaje}</label>
              <textarea 
                id="mensaje" 
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                placeholder={t.mensaje} 
                className={`w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${formErrors.mensaje ? 'border-red-500' : ''}`}
              ></textarea>
              {formErrors.mensaje && <p className="text-red-500 text-xs mt-1">{formErrors.mensaje}</p>}
            </div>
            <button 
              type="submit" 
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 disabled:opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? (idioma === 'es' ? 'Enviando...' : 'Sending...') : t.enviar}
            </button>
          </form>
        </div>
      </main>

      <footer className="bg-white border-t py-6">
        <div className="container mx-auto px-4 text-center text-gray-600">
          <p>&copy; 2023 TechnoFuturo. {t.pie.derechos}</p>
          <div className="mt-2">
            <Link href="#" className="text-gray-600 hover:text-gray-900 mx-2">{t.pie.acerca}</Link>
            <button onClick={scrollToContact} className="text-gray-600 hover:text-gray-900 mx-2">{t.pie.contacto}</button>
            <Link href="#" className="text-gray-600 hover:text-gray-900 mx-2">{t.pie.privacidad}</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}