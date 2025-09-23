const Footer = () => {
  return (
    <div className="w-screen h-fit py-10 px-6 md:px-20 flex flex-col bg-black gap-10">
        <div className="flex flex-row gap-10 items-center justify-between">
            <img src="/logo.svg" alt="logo" className="w-[145.68px] object-cover" />
            <div className="flex flex-row gap-4">
                <img onClick={() => window.open('https://www.instagram.com/comandodf/', '_blank')} src="/whatsapp.svg" alt="logo" className="w-[20px] object-cover cursor-pointer hover:scale-110 transition-all duration-300" />
                <img onClick={() => window.open('https://www.instagram.com/comandodf/', '_blank')} src="/instagram.svg" alt="logo" className="w-[20px] object-cover cursor-pointer hover:scale-110 transition-all duration-300 border-white" />
            </div>
        </div>
        <div className="border-t border-white/20 w-full"></div>
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-white text-sm font-medium">© 2025 Comando Segurança. Todos os direitos reservados.</h1>
          <h1 className="text-white text-sm font-medium">Made by <a href="https://nicollas.n3.dev" target="_blank" className="text-white text-sm font-medium hover:text-blue-200 transition-all duration-300">Nicollas.N3</a></h1>

        </div>
    </div>
  )
}

export default Footer