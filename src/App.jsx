import React, { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar' 
import Problemas from './components/Problemas'
import Loading from './components/Loading'

function App() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <>
      {isLoading && <Loading onComplete={() => setIsLoading(false)} />}
      <main className='relative h-100dvh w-100dvh bg-white overflow-x-hidden'>
        <Navbar />
        <Hero />
        <Problemas />
      </main>
    </>
  )
}

export default App