import React from 'react';
import { ResponsiveContainer, AreaChart, Area, XAxis, Tooltip } from 'recharts';
import { 
  LayoutDashboard, Users, ShoppingBag, Package, ArrowRightLeft, 
  Target, TrendingUp, Megaphone, HelpCircle, Settings, 
  Search, Bell, DollarSign, FileText, UserCheck, ChevronDown, Check, Plus, Calendar, ChevronLeft 
} from 'lucide-react';

const chartData = [
  { name: 'Jan', income: 200000, expense: 150000 },
  { name: 'Feb', income: 180000, expense: 160000 },
  { name: 'Mar', income: 250000, expense: 140000 },
  { name: 'Apr', income: 400000, expense: 200000 },
  { name: 'May', income: 300000, expense: 180000 },
  { name: 'Jun', income: 280000, expense: 150000 },
  { name: 'Jul', income: 523000, expense: 250000 },
  { name: 'Aug', income: 350000, expense: 200000 },
  { name: 'Sep', income: 300000, expense: 180000 },
  { name: 'Oct', income: 250000, expense: 150000 },
  { name: 'Nov', income: 320000, expense: 190000 },
  { name: 'Dec', income: 400000, expense: 220000 },
];

const products = [
  { id: 1, name: 'Playstation 4 Edição Limitada (com jogos)', price: '349,00 €', stock: 883, revenue: '349,00 €', status: 'Em Stock' },
  { id: 2, name: 'Cadeira Gaming, apenas recolha local', price: '120,00 €', stock: 453, revenue: '354,00 €', status: 'Em Stock' },
  { id: 3, name: 'Macbook Pro 16 polegadas (2020) Para Venda', price: '1.299,00 €', stock: 546, revenue: '739,65 €', status: 'Em Stock' },
  { id: 4, name: 'Grãos de café gourmet 500g', price: '18,50 €', stock: 120, revenue: '155,88 €', status: 'Stock Baixo' },
];

export default function AnalyticDashboard({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 font-sans flex overflow-hidden">
      
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col h-screen sticky top-0 shrink-0">
        <div className="p-4 border-b border-slate-100">
          <button onClick={onBack} className="flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors w-full p-2 rounded-lg hover:bg-slate-50">
            <ChevronLeft className="w-4 h-4" /> Voltar ao Portfólio
          </button>
        </div>
        <div className="p-6 flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white">
            <Plus className="w-5 h-5" />
          </div>
          <span className="text-xl font-semibold text-slate-900">Corelystic</span>
          <ChevronDown className="w-4 h-4 text-slate-400 ml-1" />
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-2">
          <div className="mb-6">
            <p className="text-xs font-semibold text-slate-400 mb-3 px-2">NAVEGAÇÃO PRINCIPAL</p>
            <nav className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2 bg-indigo-50 text-indigo-600 rounded-lg font-medium text-sm">
                <LayoutDashboard className="w-4 h-4" /> Painéis
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg font-medium text-sm transition-colors">
                <Users className="w-4 h-4" /> Clientes
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg font-medium text-sm transition-colors">
                <ShoppingBag className="w-4 h-4" /> Encomendas
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg font-medium text-sm transition-colors">
                <Package className="w-4 h-4" /> Produtos
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg font-medium text-sm transition-colors">
                <ArrowRightLeft className="w-4 h-4" /> Transações
              </a>
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-400 mb-3 px-2">FERRAMENTAS DE CRESCIMENTO</p>
            <nav className="space-y-1">
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg font-medium text-sm transition-colors">
                <Target className="w-4 h-4" /> Objetivos e Metas
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg font-medium text-sm transition-colors">
                <TrendingUp className="w-4 h-4" /> Desempenho de Vendas
              </a>
              <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg font-medium text-sm transition-colors">
                <Megaphone className="w-4 h-4" /> Marketing
              </a>
            </nav>
          </div>
        </div>

        <div className="p-4 border-t border-slate-200 space-y-1">
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg font-medium text-sm transition-colors">
            <HelpCircle className="w-4 h-4" /> Centro de Ajuda
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 text-slate-500 hover:bg-slate-50 rounded-lg font-medium text-sm transition-colors">
            <Settings className="w-4 h-4" /> Definições
          </a>
          
          <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between px-2 cursor-pointer">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-200 overflow-hidden">
                <img src="https://picsum.photos/seed/eugene/100/100" alt="Eugene Lamar" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">Eugene Lamar</p>
                <p className="text-[10px] text-slate-500">euglamar@lain.com</p>
              </div>
            </div>
            <ChevronDown className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        
        {/* Top Header */}
        <header className="bg-white border-b border-slate-200 px-8 py-4 flex items-center justify-between sticky top-0 z-20">
          <div className="flex items-center gap-2 text-sm text-slate-500">
            <LayoutDashboard className="w-4 h-4" />
            <span>Painéis</span>
            <span className="text-slate-300">{'>'}</span>
            <span className="font-medium text-slate-900">Dados</span>
          </div>

          <div className="relative w-96">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input 
              type="text" 
              placeholder="Pesquisar..." 
              className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-500 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1 text-[10px] text-slate-400 font-medium">
              <span className="bg-white border border-slate-200 rounded px-1.5 py-0.5">⌘</span>
              <span className="bg-white border border-slate-200 rounded px-1.5 py-0.5">F</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-50 transition-colors relative">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
            </button>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              Exportar <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </header>

        <div className="p-8 max-w-[1400px] mx-auto w-full">
          
          {/* Reference Notice */}
          <div className="mb-8 bg-teal-50 border border-teal-100 rounded-xl p-4 flex items-start gap-3 shadow-sm">
            <div className="mt-0.5 text-teal-600">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
            </div>
            <div>
              <h4 className="text-sm font-medium text-teal-800 mb-1">Projeto de Referência</h4>
              <p className="text-xs text-teal-600/80">Este dashboard é uma demonstração interativa baseada numa plataforma analítica SaaS desenvolvida pela nossa equipa. Os dados apresentados são meramente ilustrativos.</p>
            </div>
          </div>

          {/* Page Title & Actions */}
          <div className="flex items-end justify-between mb-8">
            <div>
              <h1 className="text-2xl font-semibold text-slate-900 mb-1">A sua loja num relance</h1>
              <p className="text-sm text-slate-500">Visão em tempo real de receitas, encomendas e clientes</p>
            </div>
            <button className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2">
              Personalizar Widget <Settings className="w-4 h-4" />
            </button>
          </div>

          {/* KPI Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-indigo-50/50 border border-indigo-100/50 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-indigo-100 rounded-full blur-2xl opacity-50" />
              <div className="flex justify-between items-start mb-4 relative z-10">
                <h3 className="text-sm font-medium text-slate-700">Receita Hoje</h3>
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-indigo-600 shadow-sm">
                  <DollarSign className="w-4 h-4" />
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-3xl font-bold text-slate-900 mb-2">12.840 €</p>
                <p className="text-xs font-medium text-emerald-600">+5.50% desde ontem</p>
              </div>
            </div>

            <div className="bg-emerald-50/50 border border-emerald-100/50 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-50" />
              <div className="flex justify-between items-start mb-4 relative z-10">
                <h3 className="text-sm font-medium text-slate-700">Encomendas Concluídas</h3>
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-emerald-600 shadow-sm">
                  <FileText className="w-4 h-4" />
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-3xl font-bold text-slate-900 mb-2">287</p>
                <p className="text-xs font-medium text-emerald-600">+6.20% desde ontem</p>
              </div>
            </div>

            <div className="bg-blue-50/50 border border-blue-100/50 rounded-2xl p-6 relative overflow-hidden">
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-100 rounded-full blur-2xl opacity-50" />
              <div className="flex justify-between items-start mb-4 relative z-10">
                <h3 className="text-sm font-medium text-slate-700">Clientes Recorrentes</h3>
                <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center text-blue-600 shadow-sm">
                  <UserCheck className="w-4 h-4" />
                </div>
              </div>
              <div className="relative z-10">
                <p className="text-3xl font-bold text-slate-900 mb-2">84</p>
                <p className="text-xs font-medium text-emerald-600">+8.20% desde ontem</p>
              </div>
            </div>
          </div>

          {/* Middle Section: Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            
            {/* Orders Analytics Chart */}
            <div className="lg:col-span-2 bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">Análise de Encomendas</h3>
                  <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-teal-500" />
                      <span className="text-slate-500">Rendimento</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-indigo-500" />
                      <span className="text-slate-500">Despesa</span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                  <Calendar className="w-4 h-4" /> Este Ano <ChevronDown className="w-4 h-4" />
                </button>
              </div>

              <div className="h-[250px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#0d9488" stopOpacity={0.1}/>
                        <stop offset="95%" stopColor="#0d9488" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '8px', color: '#fff' }}
                      itemStyle={{ color: '#fff' }}
                      cursor={{ stroke: '#cbd5e1', strokeWidth: 1, strokeDasharray: '4 4' }}
                    />
                    <Area type="monotone" dataKey="income" stroke="#0d9488" strokeWidth={2} fillOpacity={1} fill="url(#colorIncome)" />
                    <Area type="monotone" dataKey="expense" stroke="#6366f1" strokeWidth={2} fill="none" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Top Sales */}
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-slate-900 flex items-center gap-1">
                  Mais Vendidos <HelpCircle className="w-3 h-3 text-slate-400" />
                </h3>
                <button className="text-xs font-medium text-teal-600 bg-teal-50 px-3 py-1.5 rounded-lg hover:bg-teal-100 transition-colors">
                  Ver Detalhes
                </button>
              </div>

              <div className="mb-6">
                <div className="flex items-end gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-indigo-500 mb-1" />
                  <span className="text-3xl font-bold text-slate-900">10.432</span>
                  <span className="text-xs font-medium text-emerald-500 mb-1.5">+512</span>
                </div>
                
                {/* Abstract Density Bar */}
                <div className="h-8 w-full flex gap-[2px]">
                  {Array.from({ length: 40 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="flex-1 rounded-sm"
                      style={{ 
                        backgroundColor: i < 15 ? '#10b981' : i < 30 ? '#4f46e5' : '#0ea5e9',
                        opacity: 0.5 + (Math.random() * 0.5),
                        height: `${40 + Math.random() * 60}%`,
                        alignSelf: 'flex-end'
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="space-y-4 mt-auto">
                <div className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-sm bg-emerald-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-700 group-hover:text-teal-600 transition-colors">Smartphones</p>
                      <p className="text-xs text-slate-400">300 Unidades</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-teal-600 transition-colors" />
                </div>
                <div className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-sm bg-indigo-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-700 group-hover:text-teal-600 transition-colors">Portáteis</p>
                      <p className="text-xs text-slate-400">500 Unidades</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-teal-600 transition-colors" />
                </div>
                <div className="flex items-center justify-between group cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-sm bg-sky-500" />
                    <div>
                      <p className="text-sm font-medium text-slate-700 group-hover:text-teal-600 transition-colors">Smart TVs</p>
                      <p className="text-xs text-slate-400">237 Unidades</p>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-300 group-hover:text-teal-600 transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section: Products Table */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-slate-900">Produtos</h3>
              <div className="flex items-center gap-3">
                <div className="relative">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input 
                    type="text" 
                    placeholder="Pesquisar Produto..." 
                    className="bg-slate-50 border border-slate-200 rounded-lg pl-9 pr-4 py-1.5 text-sm focus:outline-none focus:border-teal-500 w-48 transition-colors"
                  />
                </div>
                <button className="flex items-center gap-2 px-3 py-1.5 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors">
                  Todos os Estados <ChevronDown className="w-4 h-4" />
                </button>
                <button className="bg-teal-600 hover:bg-teal-700 text-white px-3 py-1.5 rounded-lg text-sm font-medium transition-colors flex items-center gap-1.5">
                  Adicionar Novo Produto <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="py-3 px-4 w-12"><div className="w-4 h-4 rounded border border-slate-300" /></th>
                    <th className="py-3 px-4 text-sm font-semibold text-slate-900">Produto</th>
                    <th className="py-3 px-4 text-sm font-semibold text-slate-900">Preço</th>
                    <th className="py-3 px-4 text-sm font-semibold text-slate-900">Stock</th>
                    <th className="py-3 px-4 text-sm font-semibold text-slate-900">Receita</th>
                    <th className="py-3 px-4 text-sm font-semibold text-slate-900">Estado</th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, i) => (
                    <tr key={product.id} className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${i === 0 ? 'bg-teal-50/30' : ''}`}>
                      <td className="py-4 px-4">
                        <div className={`w-4 h-4 rounded flex items-center justify-center ${i === 0 ? 'bg-teal-600 text-white' : 'border border-slate-300'}`}>
                          {i === 0 && <Check className="w-3 h-3" />}
                        </div>
                      </td>
                      <td className="py-4 px-4 text-sm font-medium text-slate-700">{product.name}</td>
                      <td className="py-4 px-4 text-sm text-slate-500">{product.price}</td>
                      <td className="py-4 px-4 text-sm text-slate-500">{product.stock}</td>
                      <td className="py-4 px-4 text-sm text-slate-500">{product.revenue}</td>
                      <td className="py-4 px-4">
                        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium ${
                          product.status === 'Em Stock' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                        }`}>
                          <Check className="w-3 h-3" /> {product.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}

// Need to define ArrowUpRight locally since it wasn't imported from lucide-react in this file
function ArrowUpRight(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 7h10v10" />
      <path d="M7 17 17 7" />
    </svg>
  );
}
