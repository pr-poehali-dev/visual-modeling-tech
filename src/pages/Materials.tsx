import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Materials = () => {
  const materials = [
    {
      category: 'Основы',
      title: 'Введение в визуальное моделирование',
      description: 'Базовые принципы создания визуальных моделей, типология и области применения',
      duration: '45 мин',
      level: 'Начальный',
      icon: 'BookOpen',
    },
    {
      category: 'Инструменты',
      title: 'Программное обеспечение для 3D',
      description: 'Обзор популярных инструментов: Blender, Maya, Cinema 4D',
      duration: '60 мин',
      level: 'Средний',
      icon: 'Box',
    },
    {
      category: 'Дизайн',
      title: 'Композиция и цвет',
      description: 'Теория композиции, цветовые модели и их применение в визуализации',
      duration: '40 мин',
      level: 'Начальный',
      icon: 'Palette',
    },
    {
      category: 'Практика',
      title: 'Создание интерактивных моделей',
      description: 'Разработка интерактивных визуализаций с использованием веб-технологий',
      duration: '90 мин',
      level: 'Продвинутый',
      icon: 'Zap',
    },
    {
      category: 'Теория',
      title: 'Визуализация данных',
      description: 'Методы представления сложных данных через графики и диаграммы',
      duration: '50 мин',
      level: 'Средний',
      icon: 'BarChart',
    },
    {
      category: 'Практика',
      title: 'Рендеринг и освещение',
      description: 'Продвинутые техники рендеринга, настройка света и материалов',
      duration: '75 мин',
      level: 'Продвинутый',
      icon: 'Lightbulb',
    },
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Начальный':
        return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'Средний':
        return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'Продвинутый':
        return 'bg-purple-100 text-purple-800 hover:bg-purple-100';
      default:
        return 'bg-gray-100 text-gray-800 hover:bg-gray-100';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <Navigation />
      
      <main className="pt-16">
        <section className="container mx-auto px-6 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="mb-12 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Образовательные материалы
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Структурированная коллекция материалов для изучения технологий визуального моделирования
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {materials.map((material, index) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group bg-white border-border animate-scale-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon name={material.icon} className="text-primary" size={24} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {material.category}
                        </Badge>
                        <Badge className={`text-xs ${getLevelColor(material.level)}`}>
                          {material.level}
                        </Badge>
                      </div>
                      
                      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                        {material.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground mb-3 leading-relaxed">
                        {material.description}
                      </p>
                      
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <Icon name="Clock" size={14} />
                        <span>{material.duration}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
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

export default Materials;
