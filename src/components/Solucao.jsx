import { ArrowRight } from "lucide-react"
import { useEffect, useRef } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Solucao = () => {
  const escudoRef = useRef(null)
  const conteudoRef = useRef(null)

  useEffect(() => {
    const escudo = escudoRef.current
    const conteudo = conteudoRef.current
    
    if (!escudo || !conteudo) return

    // Animação de rotação do escudo
    const escudoAnimation = gsap.to(escudo, {
      rotation: 180,
      duration: 3,
      ease: "power2.out",
      scrollTrigger: {
        trigger: escudo,
        start: "top 500px",
        end: "bottom 130px",
        scrub: true,
        // markers: true // Remove isso em produção
      }
    });

    // Animação de descida do conteúdo (apenas em desktop)
    let conteudoAnimation;
    
    // Só cria a animação se estiver em desktop (md+)
    if (window.innerWidth >= 768) {
      conteudoAnimation = gsap.to(conteudo, {
        y: 320,
        duration: 3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: conteudo,
          start: "top 400px",
          end: "bottom 200px",
          scrub: true,
        //   markers: true // Remove isso em produção
        }
      });
    }

    // Cleanup
    return () => {
      escudoAnimation.kill();
      if (conteudoAnimation) {
        conteudoAnimation.kill();
      }
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, [])
  return (
    <div id="solucao" className="flex flex-row w-full h-fit justify-center  overflow-hidden p-14 gap-16 pb-20 ">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 ">
            <div ref={conteudoRef} data-speed="clamp(0.5)" className="flex items-center justify-center h-[288px] w-[288px] rounded-sm border-[31px] border-azul-principal rounded-sm">
                <div className="flex justify-center items-center align-middle h-[181.62px] w-[181.62px] rounded-sm bg-azul-principal border-16 border-white rounded-sm">
                    <img data-speed="clamp(0.5)"
                      ref={escudoRef}
                      id="escudo" 
                      src="/escudo.svg" 
                      alt="escudo" 
                      className="w-[105.08px] h-[105.08px]"
                    />
                </div>
            </div>
            <div 
              className="md:w-[400px] w-full h-fit flex flex-col gap-7"
            >
                <h1 className="text-3xl font-bold text-black">Com a Comando, você transforma o risco em tranquilidade:</h1>
                <div className="flex flex-row gap-6 w-full items-center">
                    <img src="/portao.svg" alt="portao" className="w-[32px] h-[32px] "/>
                    <h1 className="text-lg font-bold text-zinc-600 w-full">Portões modernos <br />com abertura pelo celular</h1>
                    <ArrowRight className="w-[30px] h-[30px] text-zinc-600"/>
                </div>
                <div className="w-full border-b-2 border-zinc-700 "></div>
                <div className="flex flex-row gap-6 w-full items-center">
                    <img src="/camera.svg" alt="camera" className="w-[32px] h-[32px] "/>
                    <h1 className="text-lg font-bold text-zinc-600 w-full">Monitoramento em tempo real</h1>
                    <ArrowRight className="w-[30px] h-[30px] text-zinc-600"/>
                </div>
                <div className="w-full border-b-2 border-zinc-700 "></div>
                <div className="flex flex-row gap-6 w-full items-center">
                    <img src="/alerta.svg" alt="alerta" className="w-[32px] h-[32px] "/>
                    <h1 className="text-lg font-bold text-zinc-600 w-full">Alarmes inteligentes <br /> e câmeras de alta precisão</h1>
                    <ArrowRight className="w-[30px] h-[30px] text-zinc-600"/>
                </div>
                <div className="w-full border-b-2 border-zinc-700 "></div>
                <div className="flex flex-row gap-6 w-full items-center">
                    <img src="/suporte.svg" alt="suporte" className="w-[32px] h-[32px] "/>
                    <h1 className="text-lg font-bold text-zinc-600 w-full">Suporte técnico imediato</h1>
                    <ArrowRight className="w-[30px] h-[30px] text-zinc-600"/>
                </div>
                <div className="w-full border-b-2 border-zinc-700 "></div>
                <a href="https://wa.link/7k63fi" target="_blank" rel="noopener noreferrer" className="w-fit bg-azul-principal text-white text-lg font-medium px-12 py-3 rounded-full hover:bg-white hover:text-azul-principal transition-all duration-300 inline-block text-center">Fale no WhatsApp agora</a>
            </div>
        </div>

    </div>
  )
}

export default Solucao