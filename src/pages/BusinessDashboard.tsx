import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const BusinessDashboard = () => {
  const navigate = useNavigate();
  const stats = [
    { label: 'Турпоток за месяц', value: '2 847', change: '+12%', icon: 'Users', trend: 'up' },
    { label: 'Средний чек', value: '42 500 ₽', change: '+8%', icon: 'TrendingUp', trend: 'up' },
    { label: 'Конверсия', value: '24.3%', change: '+3.2%', icon: 'Target', trend: 'up' },
    { label: 'Выручка', value: '121.3 млн ₽', change: '+15%', icon: 'DollarSign', trend: 'up' },
  ];

  const services = [
    { name: 'Размещение', revenue: 45600000, bookings: 842, occupancy: 78 },
    { name: 'Экскурсии', revenue: 28400000, bookings: 1253, occupancy: 65 },
    { name: 'Питание', revenue: 31200000, bookings: 2847, occupancy: 92 },
    { name: 'Транспорт', revenue: 16100000, bookings: 687, occupancy: 54 },
  ];

  const recentClients = [
    { name: 'Иванов П.А.', service: 'VIP тур', amount: '125 000 ₽', status: 'Оплачен' },
    { name: 'Петрова М.С.', service: 'Экотур', amount: '38 000 ₽', status: 'В обработке' },
    { name: 'Сидоров А.В.', service: 'Круиз', amount: '62 000 ₽', status: 'Оплачен' },
    { name: 'Козлова Е.И.', service: 'Горный тур', amount: '45 000 ₽', status: 'Оплачен' },
  ];

  const forecast = [
    { month: 'Декабрь', predicted: 135, actual: 121, confidence: 87 },
    { month: 'Январь', predicted: 142, actual: null, confidence: 84 },
    { month: 'Февраль', predicted: 158, actual: null, confidence: 81 },
  ];

  return (
    <div className="min-h-screen bg-[hsl(var(--business-bg))] text-white">
      <header className="sticky top-0 z-50 bg-[hsl(var(--business-bg))]/90 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/')} 
            className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
          >
            <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
              <Icon name="Globe" size={28} className="text-purple-400" />
            </div>
            <span className="text-xl font-bold">
              TravelBiz
            </span>
          </button>
          <Button variant="outline" className="border-white/20 text-white hover:bg-white/10" onClick={() => navigate('/')}>
            <Icon name="Home" size={18} className="mr-2" />
            На главную
          </Button>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Панель управления бизнесом</h1>
          <p className="text-gray-400">Аналитика, клиенты и управление услугами</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="bg-white/5 border-white/10 backdrop-blur animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                  <Icon name={stat.icon as any} className="text-primary" size={24} />
                  <Badge variant={stat.trend === 'up' ? 'default' : 'secondary'} className="bg-green-500/20 text-green-400 border-green-500/30">
                    {stat.change}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="services" className="space-y-6">
          <TabsList className="bg-white/10 border-white/10">
            <TabsTrigger value="services" className="data-[state=active]:bg-primary">
              <Icon name="Package" size={16} className="mr-2" />
              Мои услуги
            </TabsTrigger>
            <TabsTrigger value="clients" className="data-[state=active]:bg-primary">
              <Icon name="Users" size={16} className="mr-2" />
              CRM клиентов
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-primary">
              <Icon name="BarChart3" size={16} className="mr-2" />
              Аналитика продаж
            </TabsTrigger>
            <TabsTrigger value="forecast" className="data-[state=active]:bg-primary">
              <Icon name="TrendingUp" size={16} className="mr-2" />
              Прогнозирование
            </TabsTrigger>
          </TabsList>

          <TabsContent value="services" className="space-y-4">
            <Card className="bg-white/5 border-white/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Услуги и показатели</CardTitle>
                <CardDescription className="text-gray-400">Загрузка и выручка по направлениям</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {services.map((service) => (
                  <div key={service.name} className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-semibold text-white">{service.name}</p>
                        <p className="text-sm text-gray-400">{service.bookings} бронирований</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-bold text-primary">{(service.revenue / 1000000).toFixed(1)} млн ₽</p>
                        <p className="text-sm text-gray-400">Загрузка {service.occupancy}%</p>
                      </div>
                    </div>
                    <Progress value={service.occupancy} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="clients" className="space-y-4">
            <Card className="bg-white/5 border-white/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Последние клиенты</CardTitle>
                <CardDescription className="text-gray-400">Недавние бронирования и статусы</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentClients.map((client, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                          <Icon name="User" size={20} className="text-primary" />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{client.name}</p>
                          <p className="text-sm text-gray-400">{client.service}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-white">{client.amount}</p>
                        <Badge 
                          variant={client.status === 'Оплачен' ? 'default' : 'secondary'}
                          className={client.status === 'Оплачен' ? 'bg-green-500/20 text-green-400 border-green-500/30' : 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'}
                        >
                          {client.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-white">Динамика выручки</CardTitle>
                  <CardDescription className="text-gray-400">Последние 6 месяцев</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'].map((month, index) => {
                      const values = [85, 92, 78, 105, 112, 121];
                      return (
                        <div key={month}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">{month}</span>
                            <span className="font-semibold text-white">{values[index]} млн ₽</span>
                          </div>
                          <Progress value={(values[index] / 150) * 100} className="h-2" />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-white">Структура доходов</CardTitle>
                  <CardDescription className="text-gray-400">Распределение по услугам</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {services.map((service) => {
                      const total = services.reduce((acc, s) => acc + s.revenue, 0);
                      const percentage = ((service.revenue / total) * 100).toFixed(1);
                      return (
                        <div key={service.name}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">{service.name}</span>
                            <span className="font-semibold text-white">{percentage}%</span>
                          </div>
                          <Progress value={parseFloat(percentage)} className="h-2" />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="forecast" className="space-y-4">
            <Card className="bg-white/5 border-white/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2">
                  <Icon name="Brain" size={24} className="text-accent" />
                  Прогноз выручки на 3 месяца
                </CardTitle>
                <CardDescription className="text-gray-400">
                  AI-прогнозирование на основе исторических данных и трендов
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {forecast.map((item) => (
                    <div key={item.month} className="p-4 rounded-lg bg-white/5">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-semibold text-lg text-white">{item.month} 2025</h4>
                          <p className="text-sm text-gray-400">
                            {item.actual ? 'Фактическая' : 'Прогнозируемая'} выручка
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-accent">
                            {item.actual || item.predicted} млн ₽
                          </p>
                          {item.actual && (
                            <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                              <Icon name="CheckCircle" size={12} className="mr-1" />
                              Достигнуто
                            </Badge>
                          )}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-gray-400">Уверенность прогноза</span>
                          <span className="text-white font-semibold">{item.confidence}%</span>
                        </div>
                        <Progress value={item.confidence} className="h-2" />
                      </div>
                    </div>
                  ))}
                  
                  <div className="mt-6 p-4 rounded-lg bg-accent/10 border border-accent/30">
                    <div className="flex gap-3">
                      <Icon name="Lightbulb" className="text-accent flex-shrink-0" size={24} />
                      <div>
                        <h4 className="font-semibold text-white mb-2">Рекомендации системы</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                          <li className="flex items-start gap-2">
                            <Icon name="ArrowRight" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span>Увеличьте маркетинговый бюджет на 15% в январе для достижения прогноза</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="ArrowRight" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span>Рассмотрите новые экскурсионные пакеты для февраля-марта</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="ArrowRight" size={16} className="text-accent mt-0.5 flex-shrink-0" />
                            <span>Загрузка транспорта ниже оптимальной - введите комбо-предложения</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default BusinessDashboard;