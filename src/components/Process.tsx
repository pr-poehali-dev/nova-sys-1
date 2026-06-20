const steps = [
  {
    number: "01",
    title: "Бронза",
    description:
      "Логотип на баннерах и экранах арены, упоминание бренда в соцсетях мероприятия и в общем списке партнёров.",
  },
  {
    number: "02",
    title: "Серебро",
    description:
      "Всё из пакета «Бронза», плюс стенд в фойе, упоминание ведущими со сцены и публикации в медиа-анонсах.",
  },
  {
    number: "03",
    title: "Золото",
    description:
      "Расширенный брендинг сцены, фотозона компании, вручение приза от спонсора и интеграция в видеорепортажи.",
  },
  {
    number: "04",
    title: "Платина",
    description:
      "Титульное спонсорство: имя бренда в названии номинации, главный логотип на сцене и максимальный охват во всех каналах.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          {/* Left Column - Sticky Header */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
                Спонсорские пакеты
              </p>
              <h2 className="font-serif text-4xl md:text-5xl font-light text-foreground mb-6 text-balance">
                Выберите
                <span className="italic"> формат</span>
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Четыре уровня участия — от базового присутствия до титульного партнёрства.
                Каждый пакет можно адаптировать под задачи вашего бренда.
              </p>
            </div>
          </div>

          {/* Right Column - Steps */}
          <div className="lg:col-span-8">
            <div className="space-y-0">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="group py-10 lg:py-14 border-t border-border last:border-b"
                >
                  <div className="flex gap-8 lg:gap-12">
                    <span className="font-serif text-4xl lg:text-5xl text-stone/50 group-hover:text-sage transition-colors duration-500">
                      {step.number}
                    </span>
                    <div>
                      <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-xl">{step.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
