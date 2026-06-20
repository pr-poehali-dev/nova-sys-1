import Icon from "@/components/ui/icon"

const services = [
  {
    title: "Брендинг на сцене",
    description: "Ваш логотип на сцене, экранах и баннерах Огарёв Арены весь вечер перед глазами тысяч зрителей.",
    icon: "Presentation",
  },
  {
    title: "Интеграции в шоу",
    description: "Упоминание бренда ведущими, отдельная номинация имени спонсора и вручение призов от компании.",
    icon: "Trophy",
  },
  {
    title: "Охват в медиа",
    description: "Размещение в анонсах, публикациях, видеорепортажах и соцсетях мероприятия с многотысячной аудиторией.",
    icon: "Megaphone",
  },
  {
    title: "Зона бренда",
    description: "Собственная фотозона или стенд в фойе арены: прямой контакт с гостями и сбор лидов на месте.",
    icon: "Sparkles",
  },
]

export function Services() {
  return (
    <section id="packages" className="py-32 lg:py-40 px-6 lg:px-12 bg-sand/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
            Возможности для брендов
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground text-balance">
            Что получает спонсор
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-px bg-border">
          {services.map((service) => (
            <div
              key={service.title}
              className="group bg-background p-10 lg:p-14 transition-colors duration-500 hover:bg-card"
            >
              <div className="text-sage mb-6">
                <Icon name={service.icon} size={32} fallback="Star" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
