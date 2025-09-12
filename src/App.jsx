import React, { useState, useEffect } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar' 
import Problemas from './components/Problemas'
import Loading from './components/Loading'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Solucao from './components/Solucao'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});


function App() {
  const [isLoading, setIsLoading] = useState(true)

  // Bloqueia o scroll enquanto o loading estiver ativo
  useEffect(() => {
    const originalHtmlOverflow = document.documentElement.style.overflow
    const originalBodyOverflow = document.body.style.overflow
    const originalBodyPosition = document.body.style.position
    const originalBodyWidth = document.body.style.width

    if (isLoading) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.width = '100%'
    } else {
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.width = ''
    }

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow
      document.body.style.overflow = originalBodyOverflow
      document.body.style.position = originalBodyPosition
      document.body.style.width = originalBodyWidth
    }
  }, [isLoading])

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <>
      {/* Tela de loading sobrepondo tudo */}
      {isLoading && <Loading onComplete={handleLoadingComplete} />}
      <main className='relative h-100dvh w-100dvh bg-white overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Problemas />
        <Solucao />
      </main>
    </>
  )
}

export default App