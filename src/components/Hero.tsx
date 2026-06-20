export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 lg:px-12 pt-20">
      {/* Subtle background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-sand/30 to-background" />

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Overline */}
        <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-8">
          Коммерческое предложение для спонсоров
        </p>

        {/* Main Headline */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-light leading-[1.1] tracking-tight text-foreground mb-8 text-balance">
          Красавица города
          <span className="block text-sage">2026</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-12">
          Главный конкурс красоты Саранска. Огарёв Арена, тысячи зрителей и яркая
          возможность для вашего бренда заявить о себе перед целевой аудиторией.
        </p>

        {/* Event details */}
        <div className="flex flex-wrap gap-x-10 gap-y-4 justify-center text-sm tracking-widest uppercase text-muted-foreground mb-12">
          <span>Огарёв Арена</span>
          <span className="hidden sm:inline text-stone">·</span>
          <span>Саранск</span>
          <span className="hidden sm:inline text-stone">·</span>
          <span>2026</span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#packages"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-sage text-primary-foreground text-sm tracking-widest uppercase hover:bg-sage/90 transition-colors duration-500"
          >
            Стать спонсором
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-8 py-4 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-500"
          >
            О мероприятии
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
        <div className="w-px h-16 bg-gradient-to-b from-transparent via-stone to-transparent" />
      </div>
    </section>
  )
}
