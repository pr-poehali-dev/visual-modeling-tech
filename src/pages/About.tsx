import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const About = () => {
  const goals = [
    {
      icon: 'Target',
      title: 'Наша миссия',
      description: 'Сделать технологии визуального моделирования доступными для широкой аудитории через качественные образовательные материалы',
    },
    {
      icon: 'Users',
      title: 'Для кого',
      description: 'Студенты, дизайнеры, разработчики и все, кто интересуется современными подходами к визуализации',
    },
    {
      icon: 'TrendingUp',
      title: 'Подход',
      description: 'Практико-ориентированное обучение с акцентом на реальные кейсы и актуальные инструменты',
    },
  ];

  const stats = [
    { value: '50+', label: 'Материалов' },
    { value: '15', label: 'Тем' },
    { value: '100%', label: 'Бесплатно' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <Navigation />
      
      <main className="pt-16">
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="mb-16 text-center animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                О проекте
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                VisualTech — образовательная платформа, посвящённая технологиям создания визуальных моделей. 
                Мы собрали структурированные материалы для изучения современных подходов к визуализации 
                данных, процессов и объектов.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {goals.map((goal, index) => (
                <Card
                  key={index}
                  className="p-8 text-center bg-white border-border hover:shadow-md transition-shadow animate-scale-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 mb-4">
                    <Icon name={goal.icon} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-foreground">
                    {goal.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {goal.description}
                  </p>
                </Card>
              ))}
            </div>

            <Card className="p-12 bg-white border-border mb-16 animate-fade-in">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
                Проект в цифрах
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 md:p-10 bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 animate-fade-in">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <Icon name="Sparkles" className="text-primary" size={32} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    Принципы проекта
                  </h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>Качественный контент, основанный на актуальных знаниях</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>Структурированная подача от простого к сложному</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>Фокус на практическое применение навыков</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="text-primary mt-1 flex-shrink-0" size={16} />
                      <span>Открытость и доступность для всех желающих</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-8 mt-16">
        <div className="container mx-auto px-6 text-center text-sm text-muted-foreground">
          © 2024 VisualTech. Образовательный проект
        </div>
      </footer>
    </div>
  );
};

export default About;
