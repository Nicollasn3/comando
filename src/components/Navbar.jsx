import { Menu, X, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <>
      <div className='flex justify-between items-center p-6 w-full h-fit bg-black md:px-20'>
          <img src="/logo.svg" alt="logo" className='flex' />
          <div className='hidden md:block'>
              <ul className='flex items-center gap-6'>
                  <li><a className='text-white text-sm font-bold hover:text-blue-200 transition-all duration-300' href="#">Home</a></li>
                  <li><a className='text-white text-sm font-bold hover:text-blue-200 transition-all duration-300' href="#">About</a></li>
                  <li><a className='text-white text-sm font-bold hover:text-blue-200 transition-all duration-300' href="#">Services</a></li>
                  <li><a className='text-white text-sm font-bold hover:text-blue-200 transition-all duration-300' href="#">Contact</a></li>
              </ul>
          </div>
          <div className='md:hidden block flex items-center p-2 bg-blue-700 rounded-sm cursor-pointer' onClick={toggleSidebar}>
              <Menu className='w-6 h-6 text-white' />
          </div>
          <button className='hidden md:block bg-blue-700 text-white xl:text-sm md:text-base text-sm font-medium px-6 py-2 rounded-full hover:bg-blue-600 focus:bg-blue-600  transition-all duration-300'>Entre em contato</button>
      </div>

      {/* Sidebar Mobile */}
      {isSidebarOpen && (
        <div className='fixed inset-0 z-50 md:hidden'>
          {/* Overlay */}
          <div 
            className='fixed inset-0 bg-black bg-opacity-50' 
            onClick={toggleSidebar}
          ></div>
          
          {/* Sidebar */}
          <div className='fixed left-0 top-0 h-full w-80 bg-black p-6 transform transition-transform duration-300 ease-in-out'>
            {/* Header da Sidebar */}
            <div className='flex justify-end items-center mb-8'>
              <button onClick={toggleSidebar} className='p-2'>
                <X className='w-6 h-6 text-white' />
              </button>
            </div>
            
            {/* Menu Items */}
            <ul className='flex flex-col gap-2'>
              <li className='grup flex items-center justify-between'><a className='text-white text-lg font-bold block py-2' href="#" onClick={toggleSidebar}>Home</a> <ChevronRight className='w-6 h-6 text-white' /></li>
              <li className='grup flex items-center justify-between'><a className='text-white text-lg font-bold block py-2' href="#" onClick={toggleSidebar}>About</a> <ChevronRight className='w-6 h-6 text-white' /></li>
              <li className='grup flex items-center justify-between'><a className='text-white text-lg font-bold block py-2' href="#" onClick={toggleSidebar}>Services</a> <ChevronRight className='w-6 h-6 text-white' /></li>
              <li className='grup flex items-center justify-between'><a className='text-white text-lg font-bold block py-2' href="#" onClick={toggleSidebar}>Contact</a> <ChevronRight className='w-6 h-6 text-white' /></li>
            </ul>
            
            {/* Botão de Contato */}
            <div className='mt-8'>
              <button className='w-full bg-blue-700 text-white text-lg font-medium px-6 py-3 rounded-full'>
                Entre em contato
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar