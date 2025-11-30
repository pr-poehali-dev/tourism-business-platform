import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const InvestorDashboard = () => {
  const portfolioStats = [
    { label: 'Общий объем инвестиций', value: '45 млн ₽', icon: 'Wallet', color: 'text-primary' },
    { label: 'Годовая доходность', value: '18.4%', icon: 'TrendingUp', color: 'text-green-400' },
    { label: 'Активных объектов', value: '12', icon: 'Building2', color: 'text-accent' },
    { label: 'Доход за месяц', value: '687 тыс ₽', icon: 'DollarSign', color: 'text-yellow-400' },
  ];

  const investments = [
    { 
      name: 'Отель "Горизонт"', 
      invested: 15000000, 
      currentValue: 17800000, 
      roi: 18.7,
      occupancy: 82,
      monthlyIncome: 245000,
      location: 'Сочи'
    },
    { 
      name: 'Экокурорт "Байкал"', 
      invested: 12000000, 
      currentValue: 14100000, 
      roi: 17.5,
      occupancy: 75,
      monthlyIncome: 198000,
      location: 'Байкал'
    },
    { 
      name: 'Круизная компания', 
      invested: 8000000, 
      currentValue: 9600000, 
      roi: 20.0,
      occupancy: 68,
      monthlyIncome: 156000,
      location: 'Крым'
    },
    { 
      name: 'Ресторанный комплекс', 
      invested: 10000000, 
      currentValue: 11500000, 
      roi: 15.0,
      occupancy: 88,
      monthlyIncome: 88000,
      location: 'СПб'
    },
  ];

  const flowMetrics = [
    { month: 'Июль', visitors: 2547, revenue: 3.2, avgCheck: 42500 },
    { month: 'Август', visitors: 2891, revenue: 3.8, avgCheck: 44200 },
    { month: 'Сентябрь', visitors: 2234, revenue: 2.9, avgCheck: 41800 },
    { month: 'Октябрь', visitors: 2678, revenue: 3.5, avgCheck: 43100 },
    { month: 'Ноябрь', visitors: 2847, revenue: 3.9, avgCheck: 42500 },
    { month: 'Декабрь', visitors: 3124, revenue: 4.3, avgCheck: 45000 },
  ];

  const recentTransactions = [
    { date: '28.11.2024', object: 'Отель "Горизонт"', amount: 245000, type: 'income' },
    { date: '27.11.2024', object: 'Экокурорт "Байкал"', amount: 198000, type: 'income' },
    { date: '25.11.2024', object: 'Круизная компания', amount: 156000, type: 'income' },
    { date: '20.11.2024', object: 'Новый объект', amount: 5000000, type: 'investment' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[hsl(var(--business-bg))] to-slate-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold mb-2">Инвестиционный портфель</h1>
          <p className="text-gray-400">Мониторинг доходности и турпотока в реальном времени</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {portfolioStats.map((stat, index) => (
            <Card 
              key={stat.label} 
              className="bg-white/5 border-white/10 backdrop-blur animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-white/10 ${stat.color}`}>
                    <Icon name={stat.icon as any} size={24} />
                  </div>
                  <div>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-gray-400">{stat.label}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Tabs defaultValue="investments" className="space-y-6">
          <TabsList className="bg-white/10 border-white/10">
            <TabsTrigger value="investments" className="data-[state=active]:bg-primary">
              <Icon name="PieChart" size={16} className="mr-2" />
              Мои инвестиции
            </TabsTrigger>
            <TabsTrigger value="flow" className="data-[state=active]:bg-primary">
              <Icon name="Users" size={16} className="mr-2" />
              Турпотоки
            </TabsTrigger>
            <TabsTrigger value="income" className="data-[state=active]:bg-primary">
              <Icon name="LineChart" size={16} className="mr-2" />
              Динамика дохода
            </TabsTrigger>
            <TabsTrigger value="transactions" className="data-[state=active]:bg-primary">
              <Icon name="Receipt" size={16} className="mr-2" />
              Транзакции
            </TabsTrigger>
          </TabsList>

          <TabsContent value="investments" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {investments.map((investment) => {
                const profit = investment.currentValue - investment.invested;
                const profitPercent = ((profit / investment.invested) * 100).toFixed(1);
                
                return (
                  <Card key={investment.name} className="bg-white/5 border-white/10 backdrop-blur">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-white text-xl">{investment.name}</CardTitle>
                          <CardDescription className="text-gray-400 flex items-center gap-1 mt-1">
                            <Icon name="MapPin" size={14} />
                            {investment.location}
                          </CardDescription>
                        </div>
                        <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                          ROI {investment.roi}%
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-1">Инвестировано</p>
                          <p className="text-lg font-semibold text-white">
                            {(investment.invested / 1000000).toFixed(1)} млн ₽
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-1">Текущая стоимость</p>
                          <p className="text-lg font-semibold text-primary">
                            {(investment.currentValue / 1000000).toFixed(1)} млн ₽
                          </p>
                        </div>
                      </div>
                      
                      <div className="p-3 rounded-lg bg-green-500/10 border border-green-500/30">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm text-gray-400">Прибыль</span>
                          <span className="text-lg font-bold text-green-400">
                            +{(profit / 1000000).toFixed(2)} млн ₽
                          </span>
                        </div>
                        <Progress value={parseFloat(profitPercent)} className="h-2" />
                        <p className="text-xs text-gray-400 mt-1">+{profitPercent}% от вложений</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10">
                        <div>
                          <p className="text-xs text-gray-400 mb-1">Загрузка</p>
                          <p className="text-base font-semibold text-white">{investment.occupancy}%</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-1">Доход / месяц</p>
                          <p className="text-base font-semibold text-accent">
                            {investment.monthlyIncome.toLocaleString()} ₽
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </TabsContent>

          <TabsContent value="flow" className="space-y-4">
            <Card className="bg-white/5 border-white/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Отчёты по турпотокам</CardTitle>
                <CardDescription className="text-gray-400">Посетители и средний чек по месяцам</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {flowMetrics.map((metric) => (
                    <div key={metric.month} className="p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="font-semibold text-white">{metric.month}</h4>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          {metric.visitors.toLocaleString()} посетителей
                        </Badge>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs text-gray-400 mb-1">Выручка</p>
                          <p className="text-lg font-bold text-primary">{metric.revenue} млн ₽</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-1">Средний чек</p>
                          <p className="text-lg font-bold text-white">{metric.avgCheck.toLocaleString()} ₽</p>
                        </div>
                        <div>
                          <p className="text-xs text-gray-400 mb-1">Рост</p>
                          <p className="text-lg font-bold text-green-400">+{(Math.random() * 10 + 5).toFixed(1)}%</p>
                        </div>
                      </div>
                      <Progress value={(metric.visitors / 3500) * 100} className="h-2 mt-3" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="income" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="bg-white/5 border-white/10 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-white">Доходность портфеля</CardTitle>
                  <CardDescription className="text-gray-400">Распределение по объектам</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {investments.map((inv) => {
                      const totalMonthly = investments.reduce((acc, i) => acc + i.monthlyIncome, 0);
                      const percentage = ((inv.monthlyIncome / totalMonthly) * 100).toFixed(1);
                      return (
                        <div key={inv.name}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">{inv.name}</span>
                            <span className="font-semibold text-white">
                              {inv.monthlyIncome.toLocaleString()} ₽ ({percentage}%)
                            </span>
                          </div>
                          <Progress value={parseFloat(percentage)} className="h-2" />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 backdrop-blur">
                <CardHeader>
                  <CardTitle className="text-white">Рост инвестиций</CardTitle>
                  <CardDescription className="text-gray-400">Увеличение стоимости за 6 месяцев</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {['Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'].map((month, index) => {
                      const values = [42.5, 43.8, 44.2, 44.9, 45.7, 47.0];
                      return (
                        <div key={month}>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm text-gray-400">{month}</span>
                            <span className="font-semibold text-white">{values[index]} млн ₽</span>
                          </div>
                          <Progress value={(values[index] / 50) * 100} className="h-2" />
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-green-500/20">
                    <Icon name="TrendingUp" size={32} className="text-green-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">Прогноз на 2025 год</h3>
                    <p className="text-gray-300 mb-4">
                      На основе текущей динамики и AI-анализа рынка, ожидаемая годовая доходность составит <span className="font-bold text-green-400">21.3%</span>
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="p-3 rounded-lg bg-white/10">
                        <p className="text-xs text-gray-400 mb-1">Q1 2025</p>
                        <p className="text-lg font-bold text-white">+4.8%</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/10">
                        <p className="text-xs text-gray-400 mb-1">Q2 2025</p>
                        <p className="text-lg font-bold text-white">+5.2%</p>
                      </div>
                      <div className="p-3 rounded-lg bg-white/10">
                        <p className="text-xs text-gray-400 mb-1">Q3-Q4 2025</p>
                        <p className="text-lg font-bold text-white">+11.3%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-4">
            <Card className="bg-white/5 border-white/10 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-white">Финансовые операции</CardTitle>
                <CardDescription className="text-gray-400">История поступлений и инвестиций</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTransactions.map((transaction, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className={`p-2 rounded-lg ${transaction.type === 'income' ? 'bg-green-500/20' : 'bg-blue-500/20'}`}>
                          <Icon 
                            name={transaction.type === 'income' ? 'ArrowDownLeft' : 'ArrowUpRight'} 
                            size={20} 
                            className={transaction.type === 'income' ? 'text-green-400' : 'text-blue-400'}
                          />
                        </div>
                        <div>
                          <p className="font-semibold text-white">{transaction.object}</p>
                          <p className="text-sm text-gray-400">{transaction.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className={`text-lg font-bold ${transaction.type === 'income' ? 'text-green-400' : 'text-blue-400'}`}>
                          {transaction.type === 'income' ? '+' : '-'}{transaction.amount.toLocaleString()} ₽
                        </p>
                        <p className="text-xs text-gray-400">
                          {transaction.type === 'income' ? 'Доход' : 'Инвестиция'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default InvestorDashboard;
