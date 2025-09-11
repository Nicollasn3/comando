import React, { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar' 
import Problemas from './components/Problemas'
import Loading from './components/Loading'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import Solucao from './components/Solucao'
Solucao

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

let smoother = ScrollSmoother.create({
  smooth: 2,
  effects: true,
  normalizeScroll: true
});


function App() {
  const [isLoading, setIsLoading] = useState(true)

  const handleLoadingComplete = () => {
    setIsLoading(false)
  }

  return (
    <main className='relative h-100dvh w-100dvh bg-white overflow-x-hidden'>
      <Navbar />
      <Hero />
      <Problemas />
      <Solucao />
      
      {/* Tela de loading sobrepondo tudo */}
      {isLoading && <Loading onComplete={handleLoadingComplete} />}
    </main>
  )
}

export default App