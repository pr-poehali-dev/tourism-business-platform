import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';

const TouristPortal = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const tours = [
    {
      id: 1,
      title: 'Горный тур "Альпийские вершины"',
      location: 'Кавказ',
      price: '45 000 ₽',
      duration: '7 дней',
      rating: 4.9,
      category: 'adventure',
      image: '🏔️',
      highlights: ['Восхождение', 'Панорамы', 'Гид'],
    },
    {
      id: 2,
      title: 'Морской круиз "Черное море"',
      location: 'Сочи - Крым',
      price: '62 000 ₽',
      duration: '5 дней',
      rating: 4.8,
      category: 'cruise',
      image: '🚢',
      highlights: ['Яхта', 'Питание', 'Экскурсии'],
    },
    {
      id: 3,
      title: 'Экотур "Байкальские просторы"',
      location: 'Байкал',
      price: '38 000 ₽',
      duration: '6 дней',
      rating: 4.7,
      category: 'eco',
      image: '🌲',
      highlights: ['Природа', 'Треккинг', 'Фото'],
    },
    {
      id: 4,
      title: 'Гастрономический тур',
      location: 'Санкт-Петербург',
      price: '28 000 ₽',
      duration: '3 дня',
      rating: 4.9,
      category: 'gastro',
      image: '🍽️',
      highlights: ['Рестораны', 'Дегустации', 'Шеф-повара'],
    },
    {
      id: 5,
      title: 'Винный тур "Долина вин"',
      location: 'Краснодарский край',
      price: '32 000 ₽',
      duration: '4 дня',
      rating: 4.8,
      category: 'gastro',
      image: '🍷',
      highlights: ['Виноградники', 'Дегустации', 'СПА'],
    },
    {
      id: 6,
      title: 'Сафари-тур "Дикая природа"',
      location: 'Приморье',
      price: '55 000 ₽',
      duration: '8 дней',
      rating: 4.6,
      category: 'adventure',
      image: '🦁',
      highlights: ['Сафари', 'Фототур', 'Эксперт'],
    },
  ];

  const categories = [
    { value: 'all', label: 'Все категории', icon: 'Grid' },
    { value: 'adventure', label: 'Приключения', icon: 'Mountain' },
    { value: 'cruise', label: 'Круизы', icon: 'Ship' },
    { value: 'eco', label: 'Экотуры', icon: 'Trees' },
    { value: 'gastro', label: 'Гастрономия', icon: 'Utensils' },
  ];

  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tour.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || tour.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--tourist-bg))] to-white">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
          >
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
              <Icon name="Globe" size={28} className="text-primary" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              TravelBiz
            </span>
          </button>
          <Button variant="outline" onClick={() => navigate('/')}>
            <Icon name="Home" size={18} className="mr-2" />
            На главную
          </Button>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-5xl font-bold text-primary mb-4">
            Откройте мир путешествий
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Лучшие туры по России и миру. Подберите идеальное приключение для себя
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8 animate-scale-in">
          <div className="flex-1">
            <div className="relative">
              <Icon name="Search" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Поиск туров по названию или локации..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-64 h-12">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {categories.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  <div className="flex items-center gap-2">
                    <Icon name={cat.icon as any} size={16} />
                    {cat.label}
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour, index) => (
            <Card 
              key={tour.id} 
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-4">
                <div className="text-6xl mb-4 text-center">{tour.image}</div>
                <CardTitle className="text-xl">{tour.title}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  {tour.location}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {tour.highlights.map((highlight) => (
                    <Badge key={highlight} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <Icon name="Clock" size={16} className="text-muted-foreground" />
                    <span>{tour.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold">{tour.rating}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between pt-4 border-t">
                <div>
                  <p className="text-2xl font-bold text-primary">{tour.price}</p>
                  <p className="text-xs text-muted-foreground">за человека</p>
                </div>
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="ShoppingCart" size={18} className="mr-2" />
                  Купить
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {filteredTours.length === 0 && (
          <div className="text-center py-16">
            <Icon name="SearchX" size={64} className="mx-auto text-muted-foreground mb-4" />
            <h3 className="text-2xl font-semibold mb-2">Туры не найдены</h3>
            <p className="text-muted-foreground">Попробуйте изменить параметры поиска</p>
          </div>
        )}

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6 rounded-lg bg-white/50 backdrop-blur">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="text-xl font-semibold mb-2">500+ туров</h3>
            <p className="text-muted-foreground">Широкий выбор направлений</p>
          </div>
          <div className="p-6 rounded-lg bg-white/50 backdrop-blur">
            <div className="text-4xl mb-3">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">Гарантия качества</h3>
            <p className="text-muted-foreground">Проверенные партнёры</p>
          </div>
          <div className="p-6 rounded-lg bg-white/50 backdrop-blur">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="text-xl font-semibold mb-2">Удобная оплата</h3>
            <p className="text-muted-foreground">Рассрочка и кешбэк</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TouristPortal;