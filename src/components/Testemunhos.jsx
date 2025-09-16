import { useEffect, useRef } from 'react'

const Testemunhos = () => {
    const containerRef = useRef(null)

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

        if (containerRef.current) {
            const elements = containerRef.current.querySelectorAll('.testimonial-card')
            elements.forEach((el) => observer.observe(el))
        }

        return () => observer.disconnect()
    }, [])

    return (
        <section 
            className="w-screen h-fit py-14 flex flex-col items-center px-6 gap-6 md:gap-14 bg-[#FAFAFA] border-y-2 border-black/10 "
            aria-labelledby="testimonials-heading"
            role="region"
        >
            <header className="flex flex-col items-center justify-center gap-2">
                <span 
                    className="md:text-sm text-xs font-bold text-center px-4 py-1 bg-azul-principal text-white rounded-full"
                    aria-label="Categoria: Testemunhos"
                >
                    Testemunhos
                </span>
                <h2 
                    id="testimonials-heading"
                    className="md:text-5xl text-2xl font-bold text-center md:leading-tight"
                >
                    Segurança automatizada, <br />acesso inteligente e moradores tranquilos.
                </h2>
            </header>
            <div 
                ref={containerRef} 
                className="max-w-[1280px] flex flex-col w-full gap-6 md:flex-row flex-wrap items-center justify-center"
                role="list"
                aria-label="Depoimentos de clientes sobre segurança automatizada"
            >
                <article 
                    className="shadow-lg testimonial-card flex flex-col w-full h-fit items-center justify-center gap-4 p-6 border-4 border-azul-principal rounded-xl max-w-[348px] opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Depoimento de síndico de condomínio sobre segurança automatizada"
                >
                    <blockquote className="md:text-base text-sm font-medium text-gray-500">
                        "Nosso portão vivia travando de madrugada. Depois que instalamos a Comando, nunca mais tivemos esse problema. Hoje, controlo o acesso pelo celular e durmo em paz."
                    </blockquote>
                    <footer className="flex w-full flex-row items-center justify-start gap-4">
                        <img 
                            src="Foto-a.png" 
                            alt="Foto do síndico de condomínio que fez o depoimento sobre segurança automatizada" 
                            className="w-10 h-10 rounded-full"
                            loading="lazy"
                        />
                        <cite className="text-base md:text-lg font-bold text-black not-italic">
                            Síndico de condomínio
                        </cite>
                    </footer>
                </article>
                <article 
                    className="shadow-lg testimonial-card flex flex-col w-full h-fit items-center justify-center gap-4 p-6 border-4 border-azul-principal rounded-xl max-w-[348px] opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-100"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Depoimento de síndico de condomínio sobre segurança automatizada"
                >
                    <blockquote className="md:text-base text-sm font-medium text-gray-500">
                        "Nosso portão vivia travando de madrugada. Depois que instalamos a Comando, nunca mais tivemos esse problema. Hoje, controlo o acesso pelo celular e durmo em paz."
                    </blockquote>
                    <footer className="flex w-full flex-row items-center justify-start gap-4">
                        <img 
                            src="Foto-a.png" 
                            alt="Foto do síndico de condomínio que fez o depoimento sobre segurança automatizada" 
                            className="w-10 h-10 rounded-full"
                            loading="lazy"
                        />
                        <cite className="text-base md:text-lg font-bold text-black not-italic">
                            Síndico de condomínio
                        </cite>
                    </footer>
                </article>
                <article 
                    className="shadow-lg testimonial-card flex flex-col w-full h-fit items-center justify-center gap-4 p-6 border-4 border-azul-principal rounded-xl max-w-[348px] opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-200"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Depoimento de síndico de condomínio sobre segurança automatizada"
                >
                    <blockquote className="md:text-base text-sm font-medium text-gray-500">
                        "Nosso portão vivia travando de madrugada. Depois que instalamos a Comando, nunca mais tivemos esse problema. Hoje, controlo o acesso pelo celular e durmo em paz."
                    </blockquote>
                    <footer className="flex w-full flex-row items-center justify-start gap-4">
                        <img 
                            src="Foto-a.png" 
                            alt="Foto do síndico de condomínio que fez o depoimento sobre segurança automatizada" 
                            className="w-10 h-10 rounded-full"
                            loading="lazy"
                        />
                        <cite className="text-base md:text-lg font-bold text-black not-italic">
                            Síndico de condomínio
                        </cite>
                    </footer>
                </article>
                <article 
                    className="shadow-lg testimonial-card flex flex-col w-full h-fit items-center justify-center gap-4 p-6 border-4 border-azul-principal rounded-xl max-w-[348px] opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-300"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Depoimento de síndico de condomínio sobre segurança automatizada"
                >
                    <blockquote className="md:text-base text-sm font-medium text-gray-500">
                        "Nosso portão vivia travando de madrugada. Depois que instalamos a Comando, nunca mais tivemos esse problema. Hoje, controlo o acesso pelo celular e durmo em paz."
                    </blockquote>
                    <footer className="flex w-full flex-row items-center justify-start gap-4">
                        <img 
                            src="Foto-a.png" 
                            alt="Foto do síndico de condomínio que fez o depoimento sobre segurança automatizada" 
                            className="w-10 h-10 rounded-full"
                            loading="lazy"
                        />
                        <cite className="text-base md:text-lg font-bold text-black not-italic">
                            Síndico de condomínio
                        </cite>
                    </footer>
                </article>
                <article 
                    className="shadow-lg testimonial-card flex flex-col w-full h-fit items-center justify-center gap-4 p-6 border-4 border-azul-principal rounded-xl max-w-[348px] opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-400"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Depoimento de síndico de condomínio sobre segurança automatizada"
                >
                    <blockquote className="md:text-base text-sm font-medium text-gray-500">
                        "Nosso portão vivia travando de madrugada. Depois que instalamos a Comando, nunca mais tivemos esse problema. Hoje, controlo o acesso pelo celular e durmo em paz."
                    </blockquote>
                    <footer className="flex w-full flex-row items-center justify-start gap-4">
                        <img 
                            src="Foto-a.png" 
                            alt="Foto do síndico de condomínio que fez o depoimento sobre segurança automatizada" 
                            className="w-10 h-10 rounded-full"
                            loading="lazy"
                        />
                        <cite className="text-base md:text-lg font-bold text-black not-italic">
                            Síndico de condomínio
                        </cite>
                    </footer>
                </article>
                <article 
                    className="shadow-lg testimonial-card flex flex-col w-full h-fit items-center justify-center gap-4 p-6 border-4 border-azul-principal rounded-xl max-w-[348px] opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-500"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Depoimento de síndico de condomínio sobre segurança automatizada"
                >
                    <blockquote className="md:text-base text-sm font-medium text-gray-500">
                        "Nosso portão vivia travando de madrugada. Depois que instalamos a Comando, nunca mais tivemos esse problema. Hoje, controlo o acesso pelo celular e durmo em paz."
                    </blockquote>
                    <footer className="flex w-full flex-row items-center justify-start gap-4">
                        <img 
                            src="Foto-a.png" 
                            alt="Foto do síndico de condomínio que fez o depoimento sobre segurança automatizada" 
                            className="w-10 h-10 rounded-full"
                            loading="lazy"
                        />
                        <cite className="text-base md:text-lg font-bold text-black not-italic">
                            Síndico de condomínio
                        </cite>
                    </footer>
                </article>
            </div>
        </section>
    )
}

export default Testemunhos