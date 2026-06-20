export function Philosophy() {
  return (
    <section id="about" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5] bg-sand overflow-hidden">
            <img
              src="https://cdn.poehali.dev/projects/0f990efa-7404-4aca-b81c-6634c31fd05c/files/d493fa52-0445-40e7-a082-c7e03b157ec6.jpg"
              alt="Сцена конкурса красоты на Огарёв Арене"
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Overlay accent */}
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-terracotta/80" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
              О событии
            </p>

            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light leading-[1.1] text-foreground mb-8 text-balance">
              Главный конкурс
              <span className="italic"> красоты</span>
              <br />
              Саранска
            </h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                «Красавица города 2026» — масштабное шоу, объединяющее ярчайших девушек региона,
                звёздных гостей и тысячи зрителей. Финал пройдёт на главной площадке города —
                <em className="text-foreground"> Огарёв Арене</em>.
              </p>
              <p>
                Это не просто конкурс — это вечер красоты, культуры и эмоций, который соберёт
                внимание всего города и станет идеальной площадкой для презентации вашего бренда.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-12 border-t border-border">
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">5000+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Зрителей в зале</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">100K+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Охват в соцсетях</p>
              </div>
              <div>
                <p className="font-serif text-3xl md:text-4xl text-sage">30+</p>
                <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">Финалисток</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
