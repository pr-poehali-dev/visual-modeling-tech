import Navigation from '@/components/Navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: 'Layers',
      title: '3D Моделирование',
      description: 'Создание объёмных визуальных моделей для различных целей',
    },
    {
      icon: 'Palette',
      title: 'Дизайн систем',
      description: 'Разработка комплексных визуальных систем и интерфейсов',
    },
    {
      icon: 'Workflow',
      title: 'Процессы',
      description: 'Визуализация бизнес-процессов и алгоритмов',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <Navigation />
      
      <main className="pt-16">
        <section className="container mx-auto px-6 py-24 md:py-32">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
              Технологии создания<br />
              <span className="text-primary">визуальных моделей</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              Образовательная платформа для изучения современных подходов
              к визуализации данных и процессов
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/materials">
                <Button size="lg" className="text-base px-8">
                  Начать обучение
                </Button>
              </Link>
              <Link to="/about">
                <Button size="lg" variant="outline" className="text-base px-8">
                  О проекте
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-6 py-16">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-8 text-center hover:shadow-lg transition-shadow duration-300 animate-scale-in border-border bg-white"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                  <Icon name={feature.icon} className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-24 text-center">
          <div className="max-w-3xl mx-auto bg-white rounded-2xl p-12 shadow-sm border border-border">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Готовы начать?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Изучайте материалы в удобном темпе и осваивайте новые навыки
            </p>
            <Link to="/materials">
              <Button size="lg" className="text-base px-10">
                Перейти к материалам
              </Button>
            </Link>
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

export default Home;
