import { Menu, X, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <div className='fixed z-30 flex flex-row top-0 left-0 justify-between items-center p-6 w-screen h-fit w-full bg-black md:px-20'>
          <img src="/logo.svg" alt="logo" className='flex' />
          <div className='hidden md:block'>
              <ul className='flex items-center gap-6'>
                  <li><a className='text-white text-sm font-bold hover:text-blue-200 transition-all duration-300' href="#hero">Home</a></li>
                  <li><a className='text-white text-sm font-bold hover:text-blue-200 transition-all duration-300' href="#problemas">Problemas</a></li>
                  <li><a className='text-white text-sm font-bold hover:text-blue-200 transition-all duration-300' href="#solucao">Soluções</a></li>
                  <li><a className='text-white text-sm font-bold hover:text-blue-200 transition-all duration-300' href="#testemunhos">Testemunhos</a></li>
              </ul>
          </div>
          <div className='md:hidden block flex items-center p-2 rounded-sm cursor-pointer' onClick={toggleSidebar}>
              <Menu className='w-6 h-6 text-white' />
          </div>
          <button className='hidden md:block bg-azul-principal text-white xl:text-sm md:text-base text-sm font-medium px-6 py-2 rounded-full hover:bg-blue-600 focus:bg-blue-600  transition-all duration-300'>Entre em contato</button>
      </div>

      {/* Sidebar Mobile */}
      <div className={`fixed inset-0 z-50 md:hidden transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
        {/* Overlay */}
        <div 
          className={`fixed inset-0 bg-black transition-opacity duration-300 ${isSidebarOpen ? 'bg-opacity-50' : 'bg-opacity-0'}`}
          onClick={toggleSidebar}
        ></div>
        
        {/* Sidebar */}
        <div className={`fixed left-0 top-0 h-full w-80 bg-black p-6 transform transition-transform duration-300 ease-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Header da Sidebar */}
          <div className='flex justify-end items-center mb-8'>
            <button onClick={toggleSidebar} className='p-2'>
              <X className={`w-6 h-6 text-white transition-transform duration-[1000ms] ease-out ${isSidebarOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
          </div>
          
          {/* Menu Items */}
          <ul className='flex flex-col gap-2'>
            <a onClick={toggleSidebar} href="#hero" className='grup flex items-center justify-between'><h1 className='text-white text-lg font-bold block py-2'>Home</h1> <ChevronRight className='w-6 h-6 text-white' /></a>
            <a onClick={toggleSidebar} href="#problemas" className='grup flex items-center justify-between'><h1 className='text-white text-lg font-bold block py-2'>Problemas</h1> <ChevronRight className='w-6 h-6 text-white' /></a>
            <a onClick={toggleSidebar} href="#solucao" className='grup flex items-center justify-between'><h1 className='text-white text-lg font-bold block py-2'>Soluções</h1> <ChevronRight className='w-6 h-6 text-white' /></a>
            <a onClick={toggleSidebar} href="#testemunhos" className='grup flex items-center justify-between'><h1 className='text-white text-lg font-bold block py-2'>Testemunhos</h1> <ChevronRight className='w-6 h-6 text-white' /></a>
          </ul>
          
          {/* Botão de Contato */}
          <div className='mt-8'>
            <button className='w-full bg-azul-principal text-white text-lg font-medium px-6 py-3 rounded-full'>
              Entre em contato
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar