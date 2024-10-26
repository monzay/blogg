
"use client"
import React, { createContext, useContext, useState } from 'react'

export  const CambiarIdiomaContexto = createContext()

 const CambiarIdiomaProvider = ({ children }) => {
  const [idioma, setIdioma] = useState('es')



  return (
    <CambiarIdiomaContexto.Provider value={{ idioma, setIdioma }}>
      {children}
    </CambiarIdiomaContexto.Provider>
  )
}


export default CambiarIdiomaProvider