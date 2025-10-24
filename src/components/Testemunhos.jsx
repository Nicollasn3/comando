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
            id="testemunhos"
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
                    className="shadow-lg testimonial-card flex flex-col w-full h-[280px] items-center justify-between gap-4 p-6 border-4 border-azul-principal rounded-xl max-w-[348px] opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Depoimento de síndico de condomínio sobre segurança automatizada"
                >
                    <blockquote className="md:text-base text-sm font-medium text-gray-500 flex-1 flex items-center">
                    "O portão da garagem travava todo fim de semana e deixava os moradores presos. Com a Comando, agora abro pelo celular e nunca mais tivemos esse problema. A tranquilidade voltou para o condomínio."
                    </blockquote>
                    <footer className="flex w-full flex-row items-center justify-start gap-4">
                        <img 
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face&auto=format&q=80" 
                            alt="Foto do síndico Roberto que fez o depoimento sobre segurança automatizada" 
                            className="w-10 h-10 rounded-full object-cover"
                            loading="lazy"
                        />
                        <cite className="text-base md:text-lg font-bold text-black not-italic">
                        Roberto Mendes
                        </cite>
                    </footer>
                </article>
                <article 
                    className="shadow-lg testimonial-card flex flex-col w-full h-[280px] items-center justify-between gap-4 p-6 border-4 border-azul-principal rounded-xl max-w-[348px] opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-100"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Depoimento de síndico de condomínio sobre segurança automatizada"
                >
                    <blockquote className="md:text-base text-sm font-medium text-gray-500 flex-1 flex items-center">
                    "Visitantes entravam sem controle e circulavam livremente pelo condomínio. Com o sistema da Comando, agora tenho controle total de quem entra e saí. A segurança melhorou 100%."
                    </blockquote>
                    <footer className="flex w-full flex-row items-center justify-start gap-4">
                        <img 
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face&auto=format&q=80" 
                            alt="Foto do síndico Carlos que fez o depoimento sobre controle de acesso" 
                            className="w-10 h-10 rounded-full object-cover"
                            loading="lazy"
                        />
                        <cite className="text-base md:text-lg font-bold text-black not-italic">
                        Carlos Oliveira
                        </cite>
                    </footer>
                </article>
                <article 
                    className="shadow-lg testimonial-card flex flex-col w-full h-[280px] items-center justify-between gap-4 p-6 border-4 border-azul-principal rounded-xl max-w-[348px] opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-200"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Depoimento de síndico de condomínio sobre segurança automatizada"
                >
                    <blockquote className="md:text-base text-sm font-medium text-gray-500 flex-1 flex items-center">
                    "Nossas câmeras não gravavam direito à noite e o sistema falhava constantemente. Com a manutenção preventiva da Comando, tudo funciona perfeitamente. Agora monitoro 24h pelo celular."                    </blockquote>
                    <footer className="flex w-full flex-row items-center justify-start gap-4">
                        <img 
                            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face&auto=format&q=80" 
                            alt="Foto do síndico Fernando que fez o depoimento sobre monitoramento" 
                            className="w-10 h-10 rounded-full object-cover"
                            loading="lazy"
                        />
                        <cite className="text-base md:text-lg font-bold text-black not-italic">
                        Fernando Costa
                        </cite>
                    </footer>
                </article>
                <article 
                    className="shadow-lg testimonial-card flex flex-col w-full h-[280px] items-center justify-between gap-4 p-6 border-4 border-azul-principal rounded-xl max-w-[348px] opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-300"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Depoimento de síndico de condomínio sobre segurança automatizada"
                >
                    <blockquote className="md:text-base text-sm font-medium text-gray-500 flex-1 flex items-center">
                    "Acordei de madrugada com o portão aberto e fiquei desesperado. Com a Comando, tenho alertas instantâneos no celular e controle total. Nunca mais passei por essa situação."                
                    </blockquote>
                    <footer className="flex w-full flex-row items-center justify-start gap-4">
                        <img 
                            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face&auto=format&q=80" 
                            alt="Foto do síndico João que fez o depoimento sobre alertas de segurança" 
                            className="w-10 h-10 rounded-full object-cover"
                            loading="lazy"
                        />
                        <cite className="text-base md:text-lg font-bold text-black not-italic">
                        João Silva
                        </cite>
                    </footer>
                </article>
                <article 
                    className="shadow-lg testimonial-card flex flex-col w-full h-[280px] items-center justify-between gap-4 p-6 border-4 border-azul-principal rounded-xl max-w-[348px] opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-400"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Depoimento de síndico de condomínio sobre segurança automatizada"
                >
                    <blockquote className="md:text-base text-sm font-medium text-gray-500 flex-1 flex items-center">
                    "O sistema antigo falhava justamente quando mais precisávamos. Com a Comando, tenho suporte técnico imediato e tudo funciona perfeitamente. A confiança voltou para o condomínio."                
                    </blockquote>
                    <footer className="flex w-full flex-row items-center justify-start gap-4">
                        <img 
                            src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&h=150&fit=crop&crop=face&auto=format&q=80" 
                            alt="Foto do síndico Paulo que fez o depoimento sobre suporte técnico" 
                            className="w-10 h-10 rounded-full object-cover"
                            loading="lazy"
                        />
                        <cite className="text-base md:text-lg font-bold text-black not-italic">
                        Paulo Oliveira
                        </cite>
                    </footer>
                </article>
                <article 
                    className="shadow-lg testimonial-card flex flex-col w-full h-[280px] items-center justify-between gap-4 p-6 border-4 border-azul-principal rounded-xl max-w-[348px] opacity-0 transform translate-y-8 transition-all duration-700 ease-out delay-500"
                    role="listitem"
                    tabIndex="0"
                    aria-label="Depoimento de síndico de condomínio sobre segurança automatizada"
                >
                    <blockquote className="md:text-base text-sm font-medium text-gray-500 flex-1 flex items-center">
                    "A cerca elétrica falhava quase todas as madrugadas e deixava o condomínio vulnerável. Com a Comando, tenho monitoramento 24h e alertas inteligentes. A segurança é total."        
                    </blockquote>
                    <footer className="flex w-full flex-row items-center justify-start gap-4">
                        <img 
                            src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=150&h=150&fit=crop&crop=face&auto=format&q=80" 
                            alt="Foto do síndico Ricardo que fez o depoimento sobre monitoramento 24h" 
                            className="w-10 h-10 rounded-full object-cover"
                            loading="lazy"
                        />
                        <cite className="text-base md:text-lg font-bold text-black not-italic">
                        Ricardo Santos
                        </cite>
                    </footer>
                </article>
            </div>
        </section>
    )
}

export default Testemunhos