import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const WebsiteCreator = () => {
  const plans = [
    {
      title: "Лёгкий сайт",
      price: "25 000₽",
      developmentTime: "3 дня",
      support: "2 500₽",
      description: "Идеально для небольших проектов и лендинг-страниц",
      features: [
        "Адаптивный дизайн",
        "До 3 страниц",
        "Базовая SEO-оптимизация",
        "Форма обратной связи",
      ],
    },
    {
      title: "Нормальный сайт",
      price: "40 000₽",
      developmentTime: "5 дней",
      support: "5 000₽",
      description: "Для среднего бизнеса и корпоративных сайтов",
      features: [
        "Всё из базового пакета",
        "До 10 страниц",
        "Анимации и интерактивность",
        "Интеграция с социальными сетями",
        "Расширенная SEO-оптимизация",
      ],
    },
    {
      title: "Сложный сайт",
      price: "70 000₽",
      developmentTime: "от 7 дней",
      support: "7 000₽",
      description: "Для крупных проектов с широким функционалом",
      features: [
        "Всё из среднего пакета",
        "Неограниченное количество страниц",
        "Интеграция с CRM и API",
        "Многоязычность",
        "Личный кабинет пользователя",
        "Система управления контентом",
      ],
    },
  ];

  const testimonials = [
    {
      name: "Анна Смирнова",
      company: "Цветочный магазин «Флора»",
      text: "Заказывали сайт для нашего магазина. Результат превзошел все ожидания! Разработчики учли все наши пожелания и предложили интересные идеи. Сайт работает безупречно, выглядит современно. Рекомендую!",
    },
    {
      name: "Игорь Петров",
      company: "ООО «Строй-Мастер»",
      text: "Сотрудничаем уже больше года. Сначала заказали базовый сайт, потом решили расширить функционал. Всегда быстрая реакция на наши запросы, сайт работает стабильно. Рад, что выбрали именно вас!",
    },
    {
      name: "Екатерина Иванова",
      company: "Салон красоты «Элегант»",
      text: "Отличная работа! Сделали красивый сайт точно в срок. Особенно порадовала система онлайн-записи – клиенты в восторге. Техподдержка всегда на связи, если возникают вопросы.",
    },
  ];

  const contacts = {
    phone: "+7 (999) 123-45-67",
    email: "info@webstudio.ru",
    telegram: "@webstudio_support",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#ffcc99] to-[#ffca86]">
      {/* Шапка */}
      <header className="container mx-auto pt-8 pb-12 px-4">
        <div className="flex justify-between items-center mb-16">
          <h1 className="text-3xl font-bold text-[#333]">WebStudio</h1>
          <div className="flex gap-6">
            <a href="#plans" className="font-medium hover:underline">
              Услуги
            </a>
            <a href="#testimonials" className="font-medium hover:underline">
              Отзывы
            </a>
            <a href="#contacts" className="font-medium hover:underline">
              Контакты
            </a>
          </div>
        </div>

        <div className="text-center max-w-3xl mx-auto mt-24 mb-16">
          <h2 className="text-5xl font-bold mb-6 text-[#333]">
            Создаем сайты для вашего бизнеса
          </h2>
          <p className="text-xl text-[#333] mb-8">
            Современные, быстрые и эффективные решения для продвижения вашего
            бизнеса в интернете
          </p>
          <Button
            size="lg"
            className="bg-[#333] hover:bg-[#555] text-white rounded-full px-8 py-6 text-lg"
          >
            Получить консультацию
          </Button>
        </div>
      </header>

      {/* Тарифы */}
      <section id="plans" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#333]">
            Наши тарифы
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card
                key={index}
                className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl font-bold text-[#333]">
                    {plan.title}
                  </CardTitle>
                  <CardDescription className="text-[#555]">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-[#333]">
                      {plan.price}
                    </span>
                  </div>
                  <div className="space-y-2 mb-6 text-[#555]">
                    <div className="flex items-center gap-2">
                      <Icon name="Clock" size={18} />
                      <span>Срок разработки: {plan.developmentTime}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Cog" size={18} />
                      <span>Поддержка: {plan.support}/месяц</span>
                    </div>
                  </div>
                  <ul className="space-y-2 text-[#555]">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Icon
                          name="Check"
                          className="text-green-500 shrink-0 mt-1"
                          size={16}
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-[#ffca86] hover:bg-[#ffcc99] text-[#333]">
                    Заказать
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Отзывы */}
      <section id="testimonials" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#333]">
            Отзывы клиентов
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-lg bg-white/90">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Icon
                        key={star}
                        name="Star"
                        className="text-yellow-500"
                        size={20}
                      />
                    ))}
                  </div>
                  <p className="text-[#555] mb-4">"{testimonial.text}"</p>
                  <div>
                    <p className="font-bold text-[#333]">{testimonial.name}</p>
                    <p className="text-[#555] text-sm">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Контакты */}
      <section id="contacts" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#333]">
            Свяжитесь с нами
          </h2>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center animate-[pulse_3s_ease-in-out_infinite]">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#ffca86] rounded-full">
                    <Icon name="Mail" size={28} className="text-[#333]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Email</h3>
                  <p className="text-[#555]">{contacts.email}</p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md hover:shadow-lg transition-shadow duration-300 text-center animate-[bounce_3s_ease-in-out_infinite]">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center bg-[#ffca86] rounded-full">
                    <Icon name="Send" size={28} className="text-[#333]" />
                  </div>
                  <h3 className="font-bold text-lg mb-2">Telegram</h3>
                  <p className="text-[#555]">{contacts.telegram}</p>
                </CardContent>
              </Card>
            </div>

            <Card className="border-0 shadow-lg animate-[fadeIn_1s_ease-in-out]">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-[#333]">
                  Оставьте заявку
                </CardTitle>
                <CardDescription>
                  Мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block mb-2 text-sm font-medium text-[#555]">
                        Имя
                      </label>
                      <input
                        type="text"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffca86]"
                        placeholder="Ваше имя"
                      />
                    </div>
                    <div>
                      <label className="block mb-2 text-sm font-medium text-[#555]">
                        Телефон
                      </label>
                      <input
                        type="tel"
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffca86]"
                        placeholder="+7 (___) ___-__-__"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm font-medium text-[#555]">
                      Сообщение
                    </label>
                    <textarea
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#ffca86] min-h-[100px]"
                      placeholder="Расскажите о вашем проекте"
                    ></textarea>
                  </div>
                </form>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#ffca86] hover:bg-[#ffcc99] text-[#333] transform transition-transform hover:scale-105">
                  Отправить заявку
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Футер */}
      <footer className="py-8 bg-[#333] text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold">СайтоДел</h2>
              <p className="text-sm text-gray-300">
                Создаем сайты для вашего бизнеса
              </p>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-[#ffca86]">
                <Icon name="Facebook" size={20} />
              </a>
              <a href="#" className="hover:text-[#ffca86]">
                <Icon name="Instagram" size={20} />
              </a>
              <a href="#" className="hover:text-[#ffca86]">
                <Icon name="Telegram" size={20} />
              </a>
              <a href="#" className="hover:text-[#ffca86]">
                <Icon name="Twitter" size={20} />
              </a>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} СайтоДел. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default WebsiteCreator;
