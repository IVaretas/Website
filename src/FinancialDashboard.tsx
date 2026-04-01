import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';
import { ChevronDown, ArrowUpRight, ArrowDownRight, Clock, Gift, Users, History, ChevronLeft, CreditCard } from 'lucide-react';

const data = [
  { name: 'Jan', value: 4 },
  { name: 'Feb', value: 3 },
  { name: 'Mar', value: 7 },
  { name: 'Apr', value: 5 },
  { name: 'May', value: 10 },
  { name: 'Jun', value: 8 },
  { name: 'Jul', value: 14 },
];

export default function FinancialDashboard({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#121212] text-white font-sans selection:bg-orange-500/30">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between px-8 py-4 border-b border-white/5">
        <div className="flex items-center gap-8">
          <button onClick={onBack} className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm">
            <ChevronLeft className="w-4 h-4" />
            Voltar ao Portefólio
          </button>
          <div className="h-4 w-px bg-white/10" />
          <div className="flex items-center gap-6 text-sm">
            <a href="#" className="text-orange-500 border-b border-orange-500 pb-1">Dashboard</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors pb-1">Gestão de cartões</a>
            <a href="#" className="text-zinc-400 hover:text-white transition-colors pb-1">Perguntas Frequentes</a>
          </div>
        </div>
        <div className="flex items-center gap-6 text-sm">
          <button className="flex items-center gap-1 text-zinc-400 hover:text-white transition-colors">
            ENG <ChevronDown className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-orange-900/50 text-orange-500 flex items-center justify-center font-medium text-xs">
              N
            </div>
            <span className="text-zinc-300">Norman K</span>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-8 max-w-[1600px] mx-auto">
        {/* Reference Notice */}
        <div className="mb-8 bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 flex items-start gap-3">
          <div className="mt-0.5 text-orange-500">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
          </div>
          <div>
            <h4 className="text-sm font-medium text-orange-500 mb-1">Projeto de Referência</h4>
            <p className="text-xs text-zinc-400">Este dashboard é uma demonstração interativa baseada num projeto financeiro real desenvolvido pela nossa equipa. Os dados apresentados são meramente ilustrativos.</p>
          </div>
        </div>

        {/* Header */}
        <div className="flex items-end justify-between mb-8">
          <div>
            <h1 className="text-3xl font-semibold mb-2">Dashboard</h1>
            <p className="text-zinc-400 text-sm">Assuma o controlo total das suas finanças — acompanhe, gira e gaste USDT facilmente.</p>
          </div>
          <button className="px-6 py-2.5 rounded-full border border-orange-500/50 text-orange-500 hover:bg-orange-500/10 transition-colors text-sm font-medium">
            Nova transferência
          </button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            {/* My Cards */}
            <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-medium">Os meus cartões</h2>
                <button className="px-4 py-1.5 rounded-full bg-white/5 text-xs font-medium hover:bg-white/10 transition-colors">
                  Gerir
                </button>
              </div>

              {/* Card Visual */}
              <div className="relative h-48 rounded-2xl bg-gradient-to-br from-orange-400 via-orange-500 to-orange-700 p-6 flex flex-col justify-between overflow-hidden shadow-lg shadow-orange-500/20 mb-6">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                <div className="flex justify-end relative z-10">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 12C4 16.4183 7.58172 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 8V16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xl tracking-widest font-mono text-white/90">1233</span>
                    <span className="text-xl tracking-widest font-mono text-white/90">****</span>
                    <span className="text-xl tracking-widest font-mono text-white/90">****</span>
                    <span className="text-xl tracking-widest font-mono text-white/90">1234</span>
                    <div className="w-4 h-4 rounded-full border-2 border-white/50 flex items-center justify-center">
                      <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
                    </div>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex gap-6">
                      <div>
                        <p className="text-[10px] text-white/60 uppercase tracking-wider mb-1">Válido Até</p>
                        <p className="text-xs font-mono">**/**</p>
                      </div>
                      <div>
                        <p className="text-[10px] text-white/60 uppercase tracking-wider mb-1">CVV</p>
                        <p className="text-xs font-mono">***</p>
                      </div>
                    </div>
                    {/* Mastercard logo mockup */}
                    <div className="flex -space-x-3">
                      <div className="w-8 h-8 rounded-full bg-white/80 mix-blend-screen" />
                      <div className="w-8 h-8 rounded-full bg-orange-300/80 mix-blend-screen" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Balance Info */}
              <div className="flex justify-between items-end mb-6">
                <div>
                  <p className="text-xs text-zinc-500 mb-1">Saldo</p>
                  <p className="text-2xl font-semibold">$ 68.402</p>
                </div>
                <div className="text-right">
                  <p className="text-xs text-zinc-500 mb-1">Moeda</p>
                  <p className="text-sm font-medium">USD/Dólar Americano</p>
                </div>
              </div>

              <button className="w-full py-3 rounded-xl bg-white/5 text-orange-500 text-sm font-medium hover:bg-white/10 transition-colors">
                Pedir Cartão
              </button>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-3 gap-4">
              <button className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/5 transition-colors group">
                <Gift className="w-6 h-6 text-orange-500 group-hover:scale-110 transition-transform" />
                <span className="text-xs font-medium text-orange-500">Recompensas</span>
              </button>
              <button className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/5 transition-colors group">
                <Users className="w-6 h-6 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all" />
                <span className="text-xs font-medium text-zinc-400 group-hover:text-white">Convites</span>
              </button>
              <button className="bg-[#1A1A1A] border border-white/5 rounded-2xl p-4 flex flex-col items-center justify-center gap-3 hover:bg-white/5 transition-colors group">
                <History className="w-6 h-6 text-zinc-400 group-hover:text-white group-hover:scale-110 transition-all" />
                <span className="text-xs font-medium text-zinc-400 group-hover:text-white">Histórico</span>
              </button>
            </div>

            {/* Annual Growth Target */}
            <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5">
              <h3 className="text-sm font-medium mb-6">Objetivo de crescimento anual</h3>
              <div className="flex items-center gap-4 mb-2">
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-orange-600 to-orange-400 w-[71%] rounded-full" />
                </div>
                <span className="text-xs text-zinc-500">71%</span>
              </div>
              <p className="text-xs text-zinc-400">+20% por ano</p>
            </div>
          </div>

          {/* Right Column (8 cols) */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* Top Row Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              
              {/* Current Balance */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 flex flex-col">
                <h3 className="text-lg font-medium mb-6">Saldo atual</h3>
                <div className="flex items-center justify-between mb-8 text-xs text-zinc-500">
                  <button className="text-orange-500 border-b border-orange-500 pb-1">1 ano</button>
                  <button className="hover:text-white transition-colors pb-1">6m</button>
                  <button className="hover:text-white transition-colors pb-1">3m</button>
                  <button className="hover:text-white transition-colors pb-1">1m</button>
                  <button className="hover:text-white transition-colors pb-1">7d</button>
                  <button className="hover:text-white transition-colors pb-1">1d</button>
                </div>
                <div className="space-y-6 mt-auto">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-xs font-bold">🇺🇸</div>
                      <span className="text-sm font-medium">$ 254,286.00</span>
                    </div>
                    <span className="text-xs text-emerald-500 flex items-center gap-1">14.20% <ArrowUpRight className="w-3 h-3" /></span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-xs font-bold">₿</div>
                      <span className="text-sm font-medium">BTC 4.03</span>
                    </div>
                    <span className="text-xs text-emerald-500 flex items-center gap-1">6.05% <ArrowUpRight className="w-3 h-3" /></span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 text-xs font-bold">₮</div>
                      <span className="text-sm font-medium">USDT 214.00</span>
                    </div>
                    <span className="text-xs text-red-500 flex items-center gap-1">3.2% <ArrowDownRight className="w-3 h-3" /></span>
                  </div>
                </div>
              </div>

              {/* Income Chart */}
              <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 flex flex-col">
                <h3 className="text-lg font-medium mb-6">Rendimento</h3>
                <div className="flex items-center justify-between mb-6 text-xs text-zinc-500">
                  <button className="hover:text-white transition-colors pb-1">1 ano</button>
                  <button className="hover:text-white transition-colors pb-1">6m</button>
                  <button className="text-orange-500 border-b border-orange-500 pb-1">3m</button>
                  <button className="hover:text-white transition-colors pb-1">1m</button>
                  <button className="hover:text-white transition-colors pb-1">7d</button>
                  <button className="hover:text-white transition-colors pb-1">1d</button>
                </div>
                <div className="flex-1 min-h-[150px] -ml-4">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data}>
                      <YAxis hide domain={['dataMin - 2', 'dataMax + 2']} />
                      <Line 
                        type="monotone" 
                        dataKey="value" 
                        stroke="#f97316" 
                        strokeWidth={2} 
                        dot={{ r: 3, fill: '#f97316', strokeWidth: 0 }} 
                        activeDot={{ r: 5, fill: '#f97316', stroke: '#fff', strokeWidth: 2 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between text-[10px] text-zinc-500 mt-2 px-2">
                  <span>Jan</span>
                  <span>Feb</span>
                  <span>Mar</span>
                </div>
              </div>

              {/* Assets & Card Summary */}
              <div className="flex flex-col gap-6">
                <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-zinc-500">Os meus ativos</span>
                    <span className="text-[10px] text-zinc-500 flex items-center gap-1"><CreditCard className="w-3 h-3" /> 51.820 USDT</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold">₮</div>
                      <span className="text-sm font-medium flex items-center gap-1">USDT <ChevronDown className="w-3 h-3 text-zinc-500" /></span>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">1.900</p>
                      <p className="text-[10px] text-zinc-500">≈1.900 USD</p>
                    </div>
                  </div>
                </div>
                
                <div className="relative flex justify-center -my-5 z-10">
                  <div className="w-8 h-8 rounded-full bg-[#121212] border border-white/5 flex items-center justify-center text-orange-500">
                    <ArrowUpRight className="w-3 h-3 absolute -mt-1 -ml-1" />
                    <ArrowDownRight className="w-3 h-3 absolute mt-1 ml-1" />
                  </div>
                </div>

                <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-xs text-zinc-500">O meu cartão</span>
                    <span className="text-[10px] text-zinc-500 flex items-center gap-1"><CreditCard className="w-3 h-3" /> 68.402 USD</span>
                  </div>
                  <div className="flex items-center justify-between mt-4">
                    <div className="w-12 h-8 rounded bg-gradient-to-br from-orange-400 to-orange-600 flex items-center px-1">
                      <span className="text-[6px] text-white/80">1233 ****</span>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-semibold">15,500</p>
                      <p className="text-[10px] text-zinc-500">≈15,500 USDT</p>
                    </div>
                  </div>
                </div>
              </div>

            </div>

            {/* Transactions */}
            <div className="bg-[#1A1A1A] rounded-2xl p-6 border border-white/5 flex-1 flex flex-col mt-6">
              <h3 className="text-lg font-medium mb-6">Transações</h3>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left">
                  <thead className="text-xs text-zinc-500 border-b border-white/5">
                    <tr>
                      <th className="pb-4 font-normal">Data/Hora</th>
                      <th className="pb-4 font-normal">Tipo</th>
                      <th className="pb-4 font-normal">Montante Cripto</th>
                      <th className="pb-4 font-normal">Montante USD</th>
                      <th className="pb-4 font-normal">Taxa</th>
                      <th className="pb-4 font-normal">Montante Total</th>
                      <th className="pb-4 font-normal">Estado</th>
                    </tr>
                  </thead>
                  <tbody className="text-zinc-300">
                    <tr className="border-b border-white/5">
                      <td className="py-4">2025-05-11 12:00</td>
                      <td className="py-4">Depósito</td>
                      <td className="py-4">10670 USDT</td>
                      <td className="py-4 text-emerald-500">+10670 USD</td>
                      <td className="py-4">--</td>
                      <td className="py-4 text-emerald-500">+10670 USD</td>
                      <td className="py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-medium border border-emerald-500/20">
                          Concluído
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4">2025-05-11 12:00</td>
                      <td className="py-4">Gasto</td>
                      <td className="py-4">--</td>
                      <td className="py-4 text-red-500">-100 USD</td>
                      <td className="py-4">8 USD</td>
                      <td className="py-4 text-red-500">-102 USD</td>
                      <td className="py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-[10px] font-medium border border-yellow-500/20">
                          Em processamento
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4">2025-05-11 12:00</td>
                      <td className="py-4">Levantamento</td>
                      <td className="py-4">1230 USDT</td>
                      <td className="py-4 text-emerald-500">+1230 USD</td>
                      <td className="py-4">12 USD</td>
                      <td className="py-4 text-emerald-500">+1230 USD</td>
                      <td className="py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-500 text-[10px] font-medium border border-emerald-500/20">
                          Concluído
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4">2025-05-11 12:00</td>
                      <td className="py-4">Depósito</td>
                      <td className="py-4">--</td>
                      <td className="py-4 text-red-500">-100 USD</td>
                      <td className="py-4">--</td>
                      <td className="py-4 text-red-500">-102 USD</td>
                      <td className="py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-[10px] font-medium border border-yellow-500/20">
                          Em processamento
                        </span>
                      </td>
                    </tr>
                    <tr className="border-b border-white/5">
                      <td className="py-4">2025-05-11 12:00</td>
                      <td className="py-4">Gasto</td>
                      <td className="py-4">670 USDT</td>
                      <td className="py-4 text-emerald-500">+670 USD</td>
                      <td className="py-4">2 USD</td>
                      <td className="py-4 text-emerald-500">+670 USD</td>
                      <td className="py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-red-500/10 text-red-500 text-[10px] font-medium border border-red-500/20">
                          Falhou
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td className="py-4">2025-05-11 12:00</td>
                      <td className="py-4">Levantamento</td>
                      <td className="py-4">30 USDT</td>
                      <td className="py-4 text-red-500">-30 USD</td>
                      <td className="py-4">0.5 USD</td>
                      <td className="py-4 text-red-500">-30 USD</td>
                      <td className="py-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-[10px] font-medium border border-yellow-500/20">
                          Em processamento
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5 text-xs text-zinc-500">
                <span>A mostrar 5 resultados</span>
                <div className="flex items-center gap-2">
                  <button className="hover:text-white transition-colors"><ChevronLeft className="w-4 h-4" /></button>
                  <button className="w-6 h-6 rounded bg-white/10 text-white flex items-center justify-center">1</button>
                  <button className="w-6 h-6 rounded hover:bg-white/5 transition-colors flex items-center justify-center">2</button>
                  <span className="px-1">...</span>
                  <button className="w-6 h-6 rounded hover:bg-white/5 transition-colors flex items-center justify-center">5</button>
                  <button className="hover:text-white transition-colors"><ChevronLeft className="w-4 h-4 rotate-180" /></button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
