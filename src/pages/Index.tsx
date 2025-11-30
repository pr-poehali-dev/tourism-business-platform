import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const navigate = useNavigate();

  const portals = [
    {
      id: 'tourist',
      title: 'Портал для туристов',
      description: 'Яркий каталог туров, предложений и направлений. Удобный поиск и бронирование.',
      icon: 'Palmtree',
      color: 'from-cyan-500 to-blue-600',
      path: '/portal',
      features: ['500+ туров', 'Фильтры и поиск', 'Онлайн-бронирование'],
    },
    {
      id: 'business',
      title: 'Кабинет бизнеса',
      description: 'Управление услугами, CRM, аналитика продаж и турпотока. Прогнозирование доходов.',
      icon: 'Building2',
      color: 'from-purple-600 to-indigo-700',
      path: '/business',
      features: ['CRM система', 'Аналитика', 'AI-прогнозы'],
    },
    {
      id: 'investor',
      title: 'Панель инвестора',
      description: 'Мониторинг доходности, турпотоков и ROI в реальном времени. Отчёты и прогнозы.',
      icon: 'TrendingUp',
      color: 'from-emerald-600 to-teal-700',
      path: '/investor',
      features: ['Портфель', 'Доходность', 'Отчёты 24/7'],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-block p-4 bg-primary/10 rounded-full mb-6">
            <Icon name="Globe" size={48} className="text-primary" />
          </div>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            TravelBiz Platform
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Комплексная платформа для управления туристическим бизнесом и инвестициями.
            <br />
            Три интерфейса под разные роли: туристы, бизнес, инвесторы.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {portals.map((portal, index) => (
            <Card
              key={portal.id}
              className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in cursor-pointer group"
              style={{ animationDelay: `${index * 0.15}s` }}
              onClick={() => navigate(portal.path)}
            >
              <div className={`h-2 bg-gradient-to-r ${portal.color}`} />
              <CardHeader className="pb-4">
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${portal.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={portal.icon as any} size={32} className="text-white" />
                </div>
                <CardTitle className="text-2xl mb-2">{portal.title}</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  {portal.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  {portal.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 text-sm">
                      <Icon name="Check" size={16} className="text-green-600" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full" size="lg">
                  Перейти
                  <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: 'Users', value: '50k+', label: 'Активных туристов' },
            { icon: 'Building2', value: '1,200+', label: 'Бизнес-партнёров' },
            { icon: 'Wallet', value: '850 млн ₽', label: 'Инвестиций' },
            { icon: 'TrendingUp', value: '18.4%', label: 'Средняя доходность' },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className="text-center p-6 rounded-xl bg-white/80 backdrop-blur shadow-sm animate-fade-in"
              style={{ animationDelay: `${0.6 + index * 0.1}s` }}
            >
              <Icon name={stat.icon as any} size={32} className="mx-auto text-primary mb-3" />
              <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardContent className="pt-8 pb-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-4">Как это работает?</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Туристы выбирают туры</h4>
                      <p className="text-sm text-muted-foreground">
                        Бесплатный доступ к каталогу, удобный поиск и оплата
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Бизнес управляет услугами</h4>
                      <p className="text-sm text-muted-foreground">
                        CRM, аналитика турпотока, AI-прогнозы по подписке
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent text-white flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Инвесторы отслеживают доход</h4>
                      <p className="text-sm text-muted-foreground">
                        Прозрачность инвестиций и доходности 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-4">
                <div className="p-6 bg-white rounded-lg shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <Icon name="Sparkles" className="text-yellow-500" size={24} />
                    <h4 className="font-semibold">Монетизация</h4>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      Комиссия с покупок туров
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      Подписка для бизнеса и инвесторов
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-green-600" />
                      Премиум размещение услуг
                    </li>
                  </ul>
                </div>
                <div className="p-6 bg-gradient-to-br from-primary to-secondary rounded-lg shadow text-white">
                  <h4 className="font-semibold mb-2">Ценность для бизнеса</h4>
                  <p className="text-sm text-white/90">
                    Входящий трафик, продажи в составе турпродукта, CRM система, рост среднего чека
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Index;
