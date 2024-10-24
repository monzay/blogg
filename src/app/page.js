'use client'

import { useState, useEffect } from 'react'
import Link from "next/link"
import Image from "next/image"
import { Search, ChevronLeft, ChevronRight, Globe, Menu, X } from "lucide-react"
import { motion, AnimatePresence } from 'framer-motion'
import { format } from 'date-fns'
import { es, enUS } from 'date-fns/locale'

const datosDelBlog = {
  es: {
    entradasBlog: [
      { id: 1, titulo: "NeuroLink: La Interfaz Cerebro-Máquina del Futuro", contenido: "TechnoFuturo ha anunciado un avance revolucionario en interfaces cerebro-máquina...", extracto: "Descubre cómo NeuroLink está cambiando la forma en que interactuamos con la tecnología...", categoria: "Neurotecnología", fecha: "2023-06-15", img: "/placeholder.svg?height=200&width=300" },
      { id: 2, titulo: "RoboChef: El Asistente de Cocina Inteligente", contenido: "Nuestro último robot de cocina, RoboChef, utiliza IA avanzada para crear platos gourmet...", extracto: "Explora cómo RoboChef está revolucionando la industria culinaria...", categoria: "Robótica", fecha: "2023-06-20", img: "/placeholder.svg?height=200&width=300" },
      { id: 3, titulo: "EcoAI: Inteligencia Artificial para un Futuro Sostenible", contenido: "TechnoFuturo presenta EcoAI, un sistema de IA diseñado para optimizar el uso de recursos...", extracto: "Descubre cómo EcoAI está ayudando a combatir el cambio climático...", categoria: "IA y Sostenibilidad", fecha: "2023-06-25" },
      { id: 4, titulo: "CyberGuard: Seguridad Avanzada con IA", contenido: "Nuestro nuevo sistema de seguridad, CyberGuard, utiliza algoritmos de IA para detectar amenazas...", extracto: "Aprende cómo CyberGuard está protegiendo empresas y hogares...", categoria: "Ciberseguridad", fecha: "2023-06-30", img: "/placeholder.svg?height=200&width=300" },
      { id: 5, titulo: "MediBot: Asistencia Médica Robótica", contenido: "MediBot, nuestro último robot médico, está transformando la atención sanitaria...", extracto: "Explora cómo MediBot está mejorando la precisión en cirugías y diagnósticos...", categoria: "Robótica Médica", fecha: "2023-07-05" },
    ],
    categorias: ["Neurotecnología", "Robótica", "IA y Sostenibilidad", "Ciberseguridad", "Robótica Médica"]
  },
  en: {
    entradasBlog: [
      { id: 1, titulo: "NeuroLink: The Brain-Machine Interface of the Future", contenido: "TechnoFuturo has announced a revolutionary advancement in brain-machine interfaces...", extracto: "Discover how NeuroLink is changing the way we interact with technology...", categoria: "Neurotechnology", fecha: "2023-06-15", img: "/placeholder.svg?height=200&width=300" },
      { id: 2, titulo: "RoboChef: The Intelligent Kitchen Assistant", contenido: "Our latest kitchen robot, RoboChef, uses advanced AI to create gourmet dishes...", extracto: "Explore how RoboChef is revolutionizing the culinary industry...", categoria: "Robotics", fecha: "2023-06-20", img: "/placeholder.svg?height=200&width=300" },
      { id: 3, titulo: "EcoAI: Artificial Intelligence for a Sustainable Future", contenido: "TechnoFuturo presents EcoAI, an AI system designed to optimize resource use...", extracto: "Discover how EcoAI is helping to combat climate change...", categoria: "AI and Sustainability", fecha: "2023-06-25" },
      { id: 4, titulo: "CyberGuard: Advanced Security with AI", contenido: "Our new security system, CyberGuard, uses AI algorithms to detect threats...", extracto: "Learn how CyberGuard is protecting businesses and homes...", categoria: "Cybersecurity", fecha: "2023-06-30", img: "/placeholder.svg?height=200&width=300" },
      { id: 5, titulo: "MediBot: Robotic Medical Assistance", contenido: "MediBot, our latest medical robot, is transforming healthcare...", extracto: "Explore how MediBot is improving precision in surgeries and diagnostics...", categoria: "Medical Robotics", fecha: "2023-07-05" },
    ],
    categorias: ["Neurotechnology", "Robotics", "AI and Sustainability", "Cybersecurity", "Medical Robotics"]
  }
}

const traducciones = {
  es: {
    titulo: "Blog de Innovaciones TechnoFuturo",
    buscar: "Buscar artículos...",
    leerMas: "Leer más",
    volver: "Volver",
    anterior: "Anterior",
    siguiente: "Siguiente",
    pagina: "Página",
    de: "de",
    totalPaginas: "Total de páginas",
    categorias: "Categorías",
    publicacionesRecientes: "Publicaciones Recientes",
    contacto: "Contáctanos",
    nombre: "Nombre",
    email: "Correo electrónico",
    mensaje: "Mensaje",
    enviar: "Enviar mensaje",
    pie: {
      derechos: "Todos los derechos reservados.",
      acerca: "Sobre Nosotros",
      contacto: "Contacto",
      privacidad: "Política de Privacidad"
    },
    sobreNosotros: "Sobre nosotros"
  },
  en: {
    titulo: "TechnoFuturo Innovations Blog",
    buscar: "Search articles...",
    leerMas: "Read more",
    volver: "Back",
    anterior: "Previous",
    siguiente: "Next",
    pagina: "Page",
    de: "of",
    totalPaginas: "Total pages",
    categorias: "Categories",
    publicacionesRecientes: "Recent Posts",
    contacto: "Contact Us",
    nombre: "Name",
    email: "Email",
    mensaje: "Message",
    enviar: "Send message",
    pie: {
      derechos: "All rights reserved.",
      acerca: "About Us",
      contacto: "Contact",
      privacidad: "Privacy Policy"
    },
    sobreNosotros: "About us"
  }
}

const ENTRADAS_POR_PAGINA = 3

export default function BlogTechnoFuturo() {
  const [idioma, setIdioma] = useState('es')
  const [terminoBusqueda, setTerminoBusqueda] = useState('')
  const [entradaSeleccionada, setEntradaSeleccionada] = useState(null)
  const [paginaActual, setPaginaActual] = useState(1)
  const [entradasFiltradas, setEntradasFiltradas] = useState(datosDelBlog[idioma].entradasBlog)
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState(null)
  const [menuAbierto, setMenuAbierto] = useState(false)
  const [isHeaderVisible, setIsHeaderVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [formData, setFormData] = useState({ nombre: '', email: '', mensaje: '' })
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

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
  }, [terminoBusqueda, categoriaSeleccionada, idioma])

  const indiceUltimaEntrada = paginaActual * ENTRADAS_POR_PAGINA
  const indicePrimeraEntrada = indiceUltimaEntrada - ENTRADAS_POR_PAGINA
  const entradasActuales = entradasFiltradas.slice(indicePrimeraEntrada, indiceUltimaEntrada)

  const manejarBusqueda = (e) => {
    e.preventDefault()
    // La búsqueda ya está manejada por el useEffect
  }

  const manejarPaginaAnterior = () => {
    setPaginaActual(prev => Math.max(prev - 1, 1))
  }

  const manejarPaginaSiguiente = () => {
    setPaginaActual(prev => Math.min(prev + 1, Math.ceil(entradasFiltradas.length / ENTRADAS_POR_PAGINA)))
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
      <header className={`bg-white border-b fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex justify-between items-center w-full md:w-auto">
              <h1 className="text-2xl md:text-3xl font-semibold text-gray-800">{t.titulo}</h1>
              <button 
                onClick={() => setMenuAbierto(!menuAbierto)}
                className="md:hidden text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
              >
                {menuAbierto ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
            <nav className={`
              ${menuAbierto ? 'flex' : 'hidden  md:flex'} 
              flex-col md:flex-row 
              w-full md:w-auto
              items-center justify-center md:justify-end
              transition-all duration-300 ease-in-out
              mt-4 md:mt-0
            `}>
              <Link href="/sobre-nosotros" className="px-4 py-2 text-base text-gray-600 hover:text-gray-900 transition duration-300 mb-2 md:mb-0 relative group" onClick={() => setMenuAbierto(false)}>
                {t.sobreNosotros}
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
              </Link>
              <button onClick={() => { scrollToContact(); setMenuAbierto(false); }} className="px-4 py-2 text-base text-gray-600 hover:text-gray-900 transition duration-300 mb-2 md:mb-0 relative group">
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
            
            <AnimatePresence mode="wait">
              {entradaSeleccionada ? (
                <motion.div
                  key="entrada-seleccionada"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-white rounded-lg shadow-md p-6 mb-6">
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
                          width={600}
                          height={400}
                          className="rounded-lg"
                        />
                      </div>
                    )}
                    <p className="text-gray-600">{entradaSeleccionada.contenido}</p>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="lista-entradas"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {entradasActuales.map((entrada) => (
                    <motion.div
                      key={entrada.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      <div className="bg-white rounded-lg shadow-md p-6 mb-6 transition-all duration-300 ease-in-out hover:shadow-lg">
                        <div className="text-sm text-gray-500 mb-2">{entrada.categoria} • {formatearFecha(entrada.fecha)}</div>
                        <h2 className="text-xl font-semibold mb-2">{entrada.titulo}</h2>
                        {entrada.img && (
                          <div className="mb-4">
                            <Image
                              src={entrada.img}
                              alt={entrada.titulo}
                              width={300}
                              height={200}
                              className="rounded-lg"
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
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

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