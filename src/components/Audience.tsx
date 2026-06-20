import Icon from "@/components/ui/icon"

const stats = [
  { value: "70%", label: "Женщины 18–35 лет", icon: "Users" },
  { value: "5 000+", label: "Гостей на Огарёв Арене", icon: "Building2" },
  { value: "100K+", label: "Охват в соцсетях и СМИ", icon: "Share2" },
  { value: "12+", label: "Городов-участников региона", icon: "MapPin" },
]

export function Audience() {
  return (
    <section id="audience" className="py-32 lg:py-40 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-xs tracking-[0.3em] uppercase text-terracotta mb-6">
            Целевая аудитория
          </p>
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light text-foreground mb-8 text-balance">
            Кто увидит ваш бренд
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Активная, платёжеспособная и вовлечённая аудитория Саранска и региона —
            зрители в зале, онлайн-зрители трансляции и подписчики мероприятия в соцсетях.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-background p-10 lg:p-12">
              <div className="text-sage mb-6">
                <Icon name={stat.icon} size={28} fallback="Circle" />
              </div>
              <p className="font-serif text-4xl lg:text-5xl text-foreground mb-3">{stat.value}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
