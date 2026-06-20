export function Testimonial() {
  return (
    <section className="py-32 lg:py-40 px-6 lg:px-12 bg-sage">
      <div className="max-w-5xl mx-auto text-center">
        {/* Quote Mark */}
        <div className="mb-10">
          <svg className="w-16 h-16 mx-auto text-primary-foreground/30" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>
        </div>

        {/* Quote */}
        <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl font-light text-primary-foreground leading-relaxed mb-10 text-balance">
          Партнёрство с конкурсом «Красавица города» дало нашему бренду живой контакт
          с молодой аудиторией и яркое присутствие на одном из главных событий Саранска.
          Вложения окупились вниманием и новыми клиентами.
        </blockquote>

        {/* Attribution */}
        <div>
          <p className="text-sm tracking-widest uppercase text-primary-foreground/80">Партнёр прошлого сезона</p>
          <p className="text-sm text-primary-foreground/60 mt-1">Бренд-спонсор, Саранск</p>
        </div>
      </div>
    </section>
  )
}
