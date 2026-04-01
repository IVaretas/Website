import React from 'react';
import { ResponsiveContainer, BarChart, Bar, LineChart, Line, AreaChart, Area } from 'recharts';
import { ChevronLeft, Search, Settings, Shield, AlertTriangle, AlertCircle, ChevronDown, User, Map as MapIcon, Link as LinkIcon, Calendar, X, Plus } from 'lucide-react';

const barData = Array.from({ length: 40 }).map((_, i) => ({
  value: Math.random() * 100 + (i > 15 && i < 25 ? 50 : 0)
}));

const lineData = Array.from({ length: 20 }).map((_, i) => ({
  value: Math.sin(i / 2) * 50 + 50 + Math.random() * 20
}));

export default function SecurityDashboard({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-[#0B100E] text-zinc-300 font-sans selection:bg-emerald-500/30 overflow-x-hidden">
      {/* Top Navigation */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0B100E]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-6">
          <button onClick={onBack} className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <ChevronLeft className="w-4 h-4 text-zinc-400" />
          </button>
          <div className="text-xl font-bold text-white tracking-tight flex items-center gap-1">
            security<span className="text-emerald-500">{'>'}</span>
          </div>
          
          <div className="hidden lg:flex items-center gap-6 ml-8 text-xs font-medium text-zinc-400">
            <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <span>Pertence a:</span>
              <span className="text-zinc-200">War Room</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <span>Localização:</span>
              <span className="text-zinc-200">Ásia</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <span>Dias ativos:</span>
              <span className="text-zinc-200">360 dias</span>
              <ChevronDown className="w-3 h-3" />
            </div>
            <div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
              <span>Links:</span>
              <span className="text-zinc-200">Mapas</span>
              <ChevronDown className="w-3 h-3" />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input 
              type="text" 
              placeholder="Pesquisar por Nome, etc." 
              className="bg-white/5 border border-white/10 rounded-full pl-9 pr-4 py-1.5 text-xs text-white focus:outline-none focus:border-emerald-500/50 w-64 transition-colors"
            />
          </div>
          <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
            <Settings className="w-4 h-4 text-zinc-400" />
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="p-6 max-w-[1800px] mx-auto">
        
        {/* Reference Notice */}
        <div className="mb-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 flex items-start gap-3 shadow-[0_0_30px_rgba(16,185,129,0.05)]">
          <div className="mt-0.5 text-emerald-500">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <h4 className="text-sm font-medium text-emerald-500 mb-1">Projeto de Referência</h4>
            <p className="text-xs text-zinc-400">Este dashboard é uma demonstração interativa baseada numa plataforma de cibersegurança e monitorização desenvolvida pela nossa equipa. Os dados apresentados são meramente ilustrativos.</p>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column - System Performance */}
          <div className="lg:col-span-3 flex flex-col gap-8">
            <div>
              <h1 className="text-3xl font-semibold text-white mb-2 tracking-tight">Desempenho<br/>do Sistema</h1>
              <p className="text-xs text-zinc-500">Dados baseados na análise de 29/12</p>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium text-zinc-300 mb-4">Intensidade de Alertas em Blocos</h3>
                <div className="h-24 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={barData}>
                      <Bar dataKey="value" fill="#3f3f46" radius={[2, 2, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
                <div className="flex justify-between text-[10px] text-zinc-500 mt-2">
                  <span>316</span>
                  <span>564</span>
                </div>
              </div>

              <div className="pt-4 border-t border-white/5">
                <div className="h-16 w-full relative">
                  <div className="absolute inset-0 flex items-center justify-between px-4 z-0">
                    <div className="w-0.5 h-full bg-white/5" />
                    <div className="w-0.5 h-full bg-white/5" />
                    <div className="w-0.5 h-full bg-white/5" />
                    <div className="w-0.5 h-full bg-white/5" />
                  </div>
                  <ResponsiveContainer width="100%" height="100%" className="relative z-10">
                    <AreaChart data={lineData}>
                      <defs>
                        <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#d4d4d8" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#d4d4d8" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <Area type="monotone" dataKey="value" stroke="#d4d4d8" fillOpacity={1} fill="url(#colorValue)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                  {/* Floating markers */}
                  <div className="absolute top-2 left-1/4 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                  <div className="absolute top-6 right-1/4 w-2 h-2 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.8)]" />
                </div>
                <div className="flex justify-between text-[10px] text-zinc-500 mt-2">
                  <span>72</span>
                  <span>100</span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg py-2 px-3 text-xs flex items-center justify-between transition-colors">
                  Tendência Mensal <ChevronDown className="w-3 h-3" />
                </button>
                <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg py-2 px-3 text-xs flex items-center justify-between transition-colors">
                  Últimas 12 Horas <ChevronDown className="w-3 h-3" />
                </button>
                <button className="w-8 h-8 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg flex items-center justify-center transition-colors shrink-0">
                  <Settings className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>

          {/* Center Column - The Map */}
          <div className="lg:col-span-6 relative min-h-[400px] rounded-2xl overflow-hidden border border-white/5 bg-[#0F1614] flex items-center justify-center shadow-[inset_0_0_100px_rgba(16,185,129,0.05)]">
            {/* Dotted Map Background Effect */}
            <div className="absolute inset-0 opacity-30" style={{ backgroundImage: 'radial-gradient(#10b981 1px, transparent 1px)', backgroundSize: '12px 12px' }} />
            
            {/* Abstract Map Glows */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-emerald-500/20 rounded-full blur-[100px]" />
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-[100px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-400/10 rounded-full blur-[120px]" />

            {/* Map Nodes / Alerts */}
            <div className="absolute top-[20%] left-[30%] w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/50 animate-pulse">
              <AlertCircle className="w-3 h-3 text-orange-500" />
            </div>
            
            <div className="absolute top-[40%] left-[45%] w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/50">
              <Shield className="w-3 h-3 text-emerald-500" />
            </div>

            <div className="absolute top-[60%] right-[30%] w-6 h-6 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/50">
              <AlertCircle className="w-3 h-3 text-orange-500" />
            </div>

            <div className="absolute bottom-[30%] left-[20%] w-6 h-6 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/50">
              <AlertTriangle className="w-3 h-3 text-red-500" />
            </div>

            <div className="absolute top-[30%] right-[20%] w-6 h-6 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/50">
              <Shield className="w-3 h-3 text-emerald-500" />
            </div>

            {/* Map Controls (Bottom Center) */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#1A211E]/80 backdrop-blur-md border border-white/10 rounded-full p-1.5 shadow-xl">
              <button className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center">
                <MapIcon className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full hover:bg-white/10 text-zinc-400 flex items-center justify-center transition-colors">
                <Shield className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full hover:bg-white/10 text-zinc-400 flex items-center justify-center transition-colors">
                <AlertCircle className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded-full hover:bg-white/10 text-zinc-400 flex items-center justify-center transition-colors">
                <AlertTriangle className="w-4 h-4" />
              </button>
              <div className="w-px h-4 bg-white/10 mx-1" />
              <button className="px-3 h-8 rounded-full hover:bg-white/10 text-zinc-300 text-xs flex items-center gap-1 transition-colors">
                360 <ChevronDown className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Right Column - Stats & Users */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div className="flex gap-2 mb-2">
              <button className="flex-1 bg-white text-black rounded-full py-2 text-xs font-medium">Ver</button>
              <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full py-2 text-xs font-medium transition-colors">Gestor de políticas</button>
              <button className="flex-1 bg-white/5 hover:bg-white/10 border border-white/5 rounded-full py-2 text-xs font-medium transition-colors">Mercado</button>
            </div>

            {/* Users List */}
            <div className="space-y-2 mt-4">
              {['Sam Brinkman', 'James Carter', 'David Moore'].map((name, i) => (
                <div key={name} className="flex items-center justify-between bg-white/5 border border-white/5 rounded-xl p-3 hover:bg-white/10 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center">
                      <User className="w-3 h-3 text-zinc-400" />
                    </div>
                    <span className="text-sm text-zinc-300">{name}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-zinc-500" />
                </div>
              ))}
            </div>

            {/* Circular Stats */}
            <div className="mt-auto space-y-8">
              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-3">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="4" fill="none" />
                    <circle cx="48" cy="48" r="40" stroke="#10b981" strokeWidth="4" fill="none" strokeDasharray="251.2" strokeDashoffset="100" className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                    <circle cx="48" cy="48" r="40" stroke="#ef4444" strokeWidth="4" fill="none" strokeDasharray="251.2" strokeDashoffset="200" className="drop-shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-zinc-500">58%</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mb-1">Processos Maliciosos</p>
                <p className="text-2xl font-semibold text-white">981 <span className="text-sm text-zinc-500 font-normal">/ 1.7k</span></p>
              </div>

              <div className="flex flex-col items-center">
                <div className="relative w-24 h-24 mb-3">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.05)" strokeWidth="4" fill="none" />
                    <circle cx="48" cy="48" r="40" stroke="#f97316" strokeWidth="4" fill="none" strokeDasharray="251.2" strokeDashoffset="180" className="drop-shadow-[0_0_8px_rgba(249,115,22,0.5)]" />
                    <circle cx="48" cy="48" r="40" stroke="#10b981" strokeWidth="4" fill="none" strokeDasharray="251.2" strokeDashoffset="220" className="drop-shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs text-zinc-500">30%</span>
                  </div>
                </div>
                <p className="text-xs text-zinc-500 mb-1">Ativos Atacados</p>
                <p className="text-2xl font-semibold text-white">2.4k <span className="text-sm text-zinc-500 font-normal">/ 8k</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          
          {/* 360 View by Blocks */}
          <div className="lg:col-span-5 bg-[#121816] rounded-2xl p-6 border border-white/5">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-sm font-medium text-white">Vista 360 por Blocos</h3>
              <button className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                <ChevronLeft className="w-3 h-3 rotate-90" />
              </button>
            </div>
            
            <div className="flex gap-6">
              <div className="flex flex-col justify-between text-[10px] text-zinc-500 py-2">
                <span>Ataque</span>
                <span>Eliminar</span>
                <span>Falha</span>
                <span>Bloqueio</span>
              </div>
              
              <div className="flex-1 relative bg-[#0B100E] rounded-xl border border-white/5 p-4 overflow-hidden">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px' }} />
                
                {/* Selection Box */}
                <div className="absolute top-4 left-8 right-8 bottom-4 border border-zinc-600 border-dashed rounded-lg bg-white/[0.02] flex items-center justify-center">
                </div>

                {/* Nodes */}
                <div className="absolute top-6 left-10 w-4 h-4 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/50">
                  <Shield className="w-2 h-2 text-emerald-500" />
                </div>
                <div className="absolute top-6 right-10 w-4 h-4 bg-emerald-500/20 rounded-full flex items-center justify-center border border-emerald-500/50">
                  <Shield className="w-2 h-2 text-emerald-500" />
                </div>
                <div className="absolute bottom-6 left-12 w-4 h-4 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/50">
                  <AlertCircle className="w-2 h-2 text-orange-500" />
                </div>
                <div className="absolute bottom-8 right-16 w-4 h-4 bg-red-500/20 rounded-full flex items-center justify-center border border-red-500/50">
                  <AlertTriangle className="w-2 h-2 text-red-500" />
                </div>
                <div className="absolute bottom-6 right-10 w-4 h-4 bg-orange-500/20 rounded-full flex items-center justify-center border border-orange-500/50">
                  <AlertCircle className="w-2 h-2 text-orange-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Total Attacks by Alerts */}
          <div className="lg:col-span-7 bg-[#121816] rounded-2xl p-6 border border-white/5 flex flex-col">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-sm font-medium text-white">Total de Ataques por Alertas</h3>
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Calendar className="w-4 h-4 text-zinc-400" />
                </button>
                <button className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <ChevronLeft className="w-4 h-4 rotate-90 text-zinc-400" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4 mt-auto">
              <div className="bg-[#0B100E] rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-6">
                  <Shield className="w-4 h-4 text-emerald-500" />
                  <span className="text-xs font-medium text-zinc-300">Protegido</span>
                </div>
                <p className="text-[10px] text-zinc-500 mb-1">Ativos Atacados</p>
                <p className="text-2xl font-semibold text-white">882k <span className="text-xs text-zinc-500 font-normal">/ 992k</span></p>
              </div>

              <div className="bg-[#0B100E] rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-6">
                  <AlertTriangle className="w-4 h-4 text-red-500" />
                  <span className="text-xs font-medium text-zinc-300">Perigo</span>
                </div>
                <p className="text-[10px] text-zinc-500 mb-1">Ativos Atacados</p>
                <p className="text-2xl font-semibold text-white">1.2k <span className="text-xs text-zinc-500 font-normal">/ 992k</span></p>
              </div>

              <div className="bg-[#0B100E] rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-6">
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                  <span className="text-xs font-medium text-zinc-300">Alertas</span>
                </div>
                <p className="text-[10px] text-zinc-500 mb-1">Ativos Atacados</p>
                <p className="text-2xl font-semibold text-white">7.4k <span className="text-xs text-zinc-500 font-normal">/ 992k</span></p>
              </div>

              <div className="bg-[#0B100E] rounded-xl p-4 border border-white/5">
                <div className="flex items-center gap-2 mb-6">
                  <X className="w-4 h-4 text-zinc-500" />
                  <span className="text-xs font-medium text-zinc-300">Desconhecido</span>
                </div>
                <p className="text-[10px] text-zinc-500 mb-1">Ativos Atacados</p>
                <p className="text-2xl font-semibold text-white">1.1k <span className="text-xs text-zinc-500 font-normal">/ 992k</span></p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
