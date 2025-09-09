import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Treino = () => {
  const blocoRef = useRef(null);

  useEffect(() => {
    const bloco = blocoRef.current;
    
    if (!bloco) return;

    // Criar a animação com ScrollTrigger
    const animation = gsap.to(bloco, {
      y: 1300,
      duration: 3,
      ease: "none",
      scrollTrigger: {
        trigger: bloco,
        start: "bottom 600px",
        end: "bottom 0px",
        scrub: true,
        // markers: true // Remove isso em produção
      }
    });

    // Cleanup
    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div id="treino" className='flex flex-row h-fit justify-center w-dvh gap-10'>
        <div className='relative w-[400px]'>
            <div 
              ref={blocoRef}
              className='bloco absolute top-0 left-0 h-[200px] w-[200px] bg-blue-700'
            ></div>
        </div>
        <div className='flex flex-col h-fit w-dvh gap-10'>
            <div className='flex flex-row h-[500px] w-[500px] bg-blue-700'></div>
            <div className='flex flex-row h-[500px] w-[500px] bg-blue-700'></div>
            <div className='flex flex-row h-[500px] w-[500px] bg-blue-700'></div>
        </div>
    </div>
  )
}
export default Treino