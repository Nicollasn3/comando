import { useState, useEffect } from 'react'

const Loading = ({ onComplete }) => {
  const [progress, setProgress] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    // Animação da barra de progresso (1.5 segundos) - otimizada
    const startTime = Date.now()
    const duration = 1500

    const updateProgress = () => {
      const elapsed = Date.now() - startTime
      const progressValue = Math.min((elapsed / duration) * 100, 100)
      
      setProgress(progressValue)
      
      if (progressValue < 100) {
        requestAnimationFrame(updateProgress)
      } else {
        // Após completar, inicia a transição de saída
        setTimeout(() => {
          setIsVisible(false)
          setTimeout(() => {
            if (onComplete) onComplete()
          }, 300) // Transição mais rápida
        }, 100)
      }
    }

    requestAnimationFrame(updateProgress)
  }, [onComplete])

  return (
    <div 
      className={`absolute h-full w-full z-50 bg-white flex flex-col pt-[400px] items-center transition-opacity duration-300 ease-out overflow-auto ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* Logo */}
      <img 
        src="/logoloading.svg" 
        alt="Logo Loading" 
        className="w-16 h-16 mb-6"
      />
      
      {/* Barra de progresso */}
      <div className="w-40 h-1 bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-blue-500 transition-[width] duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      {/* Texto opcional */}
    </div>
  )
}

export default Loading
