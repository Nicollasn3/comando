import React, { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar' 
import Problemas from './components/Problemas'
import Loading from './components/Loading'
import Solucao from './components/Solucao'

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