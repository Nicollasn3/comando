const Hero = () => {
  return (
    <div id="hero" className='relative h-[85vh] w-dvh overflow-hidden mt-20'>
        <div className='relative z-10 h-full flex flex-col justify-end items-center px-6 py-11  gap-5'>
            <div className='flex flex-col gap-2 xl:w-[700px] md:w-[500px]'>
                <h1 className='xl:text-5xl md:text-4xl text-3xl text-center text-white font-bold '>Seu condomínio <br /> seguro em segundos.</h1>
                <h1 className='text-zinc-200 xl:text-lg md:text-base text-sm text-center font-medium'>Chega de portões travando, câmeras falhando ou moradores vulneráveis. A Comando traz a tecnologia que protege você 24h por dia, 7 dias por semana.</h1>
            </div>
            <button className='bg-blue-700 text-white xl:text-lg md:text-base text-sm font-medium px-6 py-2 rounded-full hover:bg-white hover:text-blue-700  transition-all duration-300'>Fale no WhatsApp agora</button>
        </div>
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/0_Security_Camera_Home_Security_3840x2160.mp4" type="video/mp4" />
          Seu navegador não suporta vídeos.
        </video>
    </div>
  )
}

export default Hero