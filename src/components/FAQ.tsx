import { useState } from "react"
import { Plus } from "lucide-react"

const faqs = [
  {
    question: "С чего начинается работа над проектом?",
    answer:
      "Всё начинается с бесплатной консультации — мы знакомимся, обсуждаем ваш вкус, образ жизни, бюджет и пожелания. После этого составляем техническое задание и переходим к созданию концепции.",
  },
  {
    question: "Сколько времени занимает дизайн-проект?",
    answer:
      "Для квартиры 50–80 м² — в среднем 3–5 недель. Для загородного дома или больших площадей — до 2 месяцев. Мы всегда согласовываем сроки заранее и придерживаемся их.",
  },
  {
    question: "В каких стилях вы работаете?",
    answer:
      "Мы работаем в любых стилях: минимализм, современный, классика, скандинавский, лофт, эклектика. Главное для нас — чтобы стиль отражал именно вас, а не просто был модным.",
  },
  {
    question: "Что входит в полный дизайн-проект?",
    answer:
      "Полный проект включает: планировочное решение, 3D-визуализацию всех помещений, чертежи для строителей, спецификацию материалов и мебели, а также авторский надзор в процессе ремонта.",
  },
  {
    question: "Вы работаете только с квартирами?",
    answer:
      "Нет, мы проектируем интерьеры квартир, частных домов, загородных резиденций и дач. Любой жилой объект — наша специализация.",
  },
  {
    question: "Можно ли заказать дизайн одной комнаты?",
    answer:
      "Конечно! Мы можем разработать дизайн отдельной комнаты — спальни, гостиной, кухни или ванной. Это отличный вариант, если вы хотите начать с малого или сделать ремонт поэтапно.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 md:py-29">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mb-16">
          <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">Вопросы</p>
          <h2 className="text-6xl font-medium leading-[1.15] tracking-tight mb-6 text-balance lg:text-7xl">
            Частые вопросы
          </h2>
        </div>

        <div>
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-border">
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full py-6 flex items-start justify-between gap-6 text-left group"
              >
                <span className="text-lg font-medium text-foreground transition-colors group-hover:text-foreground/70">
                  {faq.question}
                </span>
                <Plus
                  className={`w-6 h-6 text-foreground flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-45" : "rotate-0"
                  }`}
                  strokeWidth={1.5}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="text-muted-foreground leading-relaxed pb-6 pr-12">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}