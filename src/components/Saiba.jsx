import { useEffect, useRef } from 'react'

const Saiba = () => {
  const imageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )

    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-screen h-fit px-6 py-12 flex flex-col md:flex-row items-center justify-center bg-azul-principal gap-6 md:gap-12">
        <div className="h-fit w-full flex flex-col gap-4 max-w-[461px]">
            <h1 className="text-4xl font-bold text-white">Mais que tecnologia, tranquilidade para você <br className="hidden md:block" />e sua família.</h1>
            <h2 className="text-base font-medium text-zinc-200">Não arrisque a segurança do seu condomínio. Clique abaixo <br className="hidden md:block" /> e fale agora com nossa equipe pelo WhatsApp.</h2>
            <a href="https://wa.link/7k63fi" target="_blank" rel="noopener noreferrer" className="bg-white w-fit text-azul-principal text-base font-medium px-6 py-2 rounded-full hidden md:block hover:bg-azul-principal hover:text-white transition-all duration-300 inline-block text-center">Fale no WhatsApp agora</a>
        </div>
        <img 
          ref={imageRef}
          src="homem.png" 
          alt="homem" 
          className="w-full h-full object-cover md:w-[461px] opacity-0 transform translate-y-8 transition-all duration-700 ease-out" 
        />
        <a href="https://wa.link/7k63fi" target="_blank" rel="noopener noreferrer" className="bg-white text-azul-principal text-lg font-medium px-6 py-2 rounded-full md:hidden hover:bg-azul-principal hover:text-white transition-all duration-300 inline-block text-center">Fale no WhatsApp agora</a>
    </div>
  )
}

export default Saiba