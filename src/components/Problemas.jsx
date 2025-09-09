import { useEffect, useRef, useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardProblema = ({ imageUrl, iconUrl, title, description }) => {
  const imageRef = useRef(null)
  const [revealed, setRevealed] = useState(false)

  useEffect(() => {
    const target = imageRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true)
          observer.unobserve(entry.target)
        }
      },
      { root: null, threshold: 0.4 }
    )

    
    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  return (
    <div className='relative flex flex-col md:flex-row md:max-w-[1000px] md:items-center mx-auto md:justify-center w-full h-fit overflow-hidden'>
      {/* Imagem */}
      <div
        ref={imageRef}
        className="relative z-10 w-full md:w-1/2 h-[243px] bg-cover bg-center"
        role="img"
        aria-label={title}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      {/* Painel: desce no mobile; entra da esquerda em md+ */}
      <div
        className={`z-0 flex flex-col gap-2 w-full md:w-1/2 h-[243px] px-9 items-start align-middle justify-center bg-black transition-transform duration-[2000ms] ease-out will-change-transform ${
          revealed
            ? 'translate-y-0 md:translate-x-0'
            : '-translate-y-full md:-translate-x-full md:translate-y-0'
        }`}
      >
        <img src={iconUrl} alt="aletar" className=' ' />
        <h1 className='text-3xl font-bold text-white'>{title}</h1>
        <h1 className='text-xs font-medium text-zinc-400'>{description}</h1>
      </div>
    </div>
  )
}

const Problemas = () => {
  const linhaRef = useRef(null)

  useEffect(() => {
    const linha = linhaRef.current
    
    if (!linha) return

    // Configurar estado inicial - linha com largura 0
    gsap.set(linha, { width: 0 });

    // Criar animação com ScrollTrigger
    const animation = gsap.to(linha, {
      width: "100%",
      duration: 3,
      ease: "none",
      scrollTrigger: {
        trigger: linha,
        start: "top 800px",
        end: "bottom 300px",
        scrub: true,
        // markers: true // Remove isso em produção
      }
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [])

  return (
    <div id="problemas" className='relative h-fit w-full overflow-hidden py-12 px-6 flex flex-col gap-12 md:items-center md:justify-center md:justify-center'>
      <div className='flex flex-col gap-2'>
        <h1 className='text-3xl font-bold text-black md:text-center md:text-4xl'>Imagine acordar <br /> de madrugada com <br className="md:hidden" /> o portão aberto.</h1>
        <p className='text-base font-medium text-zinc-500 md:text-center md:w-[700px] '>Ou chegar em casa e descobrir que o sistema falhou bem na hora que você mais precisava. Infelizmente, muitos condomínios em Vicente Pires vivem exatamente isso:</p>
      </div>
      <div className='flex flex-col w-full h-fit gap-12 rounded-sm'>
        <CardProblema
          imageUrl='/Portao.webp'
          iconUrl='/aletar.svg'
          title='Portões que travam ou ficam abertos.'
          description='Um portão com falha deixa o condomínio desprotegido e expõe moradores a riscos desnecessários.'
        />
        <CardProblema 
          imageUrl='/Controle.webp'
          iconUrl='/alerta3.svg'
          title='Visitantes entrando sem controle'
          description='Sem controle de acesso, qualquer pessoa pode entrar e circular, comprometendo a segurança de todos.'
        />
        <CardProblema
          imageUrl='/Camera.webp'
          iconUrl='/alerta2.svg'
          title='Sistemas sem manutenção'
          description='Sem manutenção preventiva, os equipamentos falham justamente quando são mais necessários.'
        />
      </div>
      <div className=''>
        <h1 className='text-2xl text-center font-bold text-black md:text-center md:text-4xl'>A cada falha, sua família e seu patrimônio ficam expostos.</h1>
        <div 
          ref={linhaRef}
          className='linha bg-red-200 md:h-[45px] md:mt-[-40px] h-[70px] mt-[-65px]'
        ></div>
      </div>
    </div>
  )
}

export default Problemas