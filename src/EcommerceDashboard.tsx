import React from 'react';
import { 
  Menu, Search, ShoppingBag, Heart, ChevronDown, 
  Star, ArrowLeft, ChevronUp, Clock, Package, 
  Truck, CalendarDays, Info, ChevronRight
} from 'lucide-react';

export default function EcommerceDashboard({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans selection:bg-zinc-200">
      {/* Reference Notice */}
      <div className="bg-zinc-50 border-b border-zinc-200 px-6 py-3 flex items-center justify-center gap-3 text-sm">
        <Info className="w-4 h-4 text-zinc-500" />
        <span className="text-zinc-600">
          <strong className="font-semibold text-zinc-900">Projeto de Referência:</strong> Esta é uma demonstração interativa de uma plataforma e-commerce. Os dados são ilustrativos.
        </span>
      </div>

      {/* Header */}
      <header className="px-8 py-6 max-w-[1400px] mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <button onClick={onBack} className="flex items-center gap-2 px-3 py-2 hover:bg-zinc-100 rounded-lg transition-colors text-sm font-medium text-zinc-700 mr-2 border border-zinc-200">
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Voltar ao Portefólio</span>
            </button>
            <button className="p-2 hover:bg-zinc-100 rounded-full transition-colors">
              <Menu className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-zinc-900 text-white rounded-full flex items-center justify-center font-bold text-lg">N</div>
            <span className="text-xl font-semibold tracking-tight">Nextgen</span>
          </div>

          <div className="flex items-center gap-6 text-sm font-medium">
            <a href="#" className="hidden md:block hover:text-zinc-600">Sobre</a>
            <a href="#" className="hidden md:block hover:text-zinc-600">Perguntas Frequentes</a>
            <button className="w-10 h-10 border border-zinc-200 rounded-full flex items-center justify-center hover:bg-zinc-50 transition-colors relative">
              <ShoppingBag className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
            </button>
          </div>
        </div>

        {/* Sub-header Navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-full text-sm hover:bg-zinc-50 transition-colors">
              Categorias <ChevronDown className="w-4 h-4 text-zinc-400" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 border border-zinc-200 rounded-full text-sm hover:bg-zinc-50 transition-colors">
              Novo Produto <ChevronDown className="w-4 h-4 text-zinc-400" />
            </button>
            <div className="relative hidden lg:block">
              <input 
                type="text" 
                placeholder="Pesquisar" 
                className="pl-4 pr-10 py-2 border border-zinc-200 rounded-full text-sm w-64 focus:outline-none focus:border-zinc-400"
              />
              <Search className="w-4 h-4 absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400" />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="px-5 py-2 rounded-full text-sm border border-zinc-200 hover:bg-zinc-50 transition-colors">Homem</button>
            <button className="px-5 py-2 rounded-full text-sm bg-zinc-900 text-white font-medium">Mulher</button>
            <button className="px-5 py-2 rounded-full text-sm border border-zinc-200 hover:bg-zinc-50 transition-colors">Criança</button>
            <button className="px-5 py-2 rounded-full text-sm border border-zinc-200 hover:bg-zinc-50 transition-colors">Marcas</button>
          </div>
        </div>
      </header>

      <main className="max-w-[1400px] mx-auto px-8 pb-24">
        {/* Breadcrumb / Back */}
        <div className="flex items-center gap-2 text-sm text-zinc-500 mb-8">
          <button onClick={onBack} className="flex items-center gap-2 hover:text-zinc-900 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Início
          </button>
          <span>{'>'}</span>
          <span className="text-zinc-900 font-medium">Detalhes do produto</span>
        </div>

        {/* Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-[4/5] w-full bg-zinc-100 rounded-3xl overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=800&h=1000" alt="Loose Fit Hoodie" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              {/* Image pagination indicator */}
              <div className="absolute top-4 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-12 h-1 bg-white rounded-full"></div>
                <div className="w-12 h-1 bg-white/50 rounded-full"></div>
                <div className="w-12 h-1 bg-white/50 rounded-full"></div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden border-2 border-zinc-900">
                <img src="https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&q=80&w=400&h=400" alt="Thumbnail 1" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&q=80&w=400&h=400" alt="Thumbnail 2" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
                <img src="https://images.unsplash.com/photo-1509942774463-acf339cf87d5?auto=format&fit=crop&q=80&w=400&h=400" alt="Thumbnail 3" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="flex flex-col pt-4">
            <div className="inline-block px-3 py-1 border border-zinc-200 rounded-full text-xs font-medium text-zinc-600 w-fit mb-4">
              Moda Masculina
            </div>
            <h1 className="text-4xl font-semibold tracking-tight mb-4">Hoodie de Corte Largo</h1>
            <p className="text-2xl font-medium mb-6">24,99 €</p>

            <div className="flex items-center gap-2 text-sm text-zinc-600 bg-zinc-50 px-4 py-3 rounded-xl mb-8 border border-zinc-100">
              <Clock className="w-4 h-4 text-zinc-400" />
              <span>Encomende em <strong className="text-zinc-900 font-medium">02:30:25</strong> para entrega no dia seguinte</span>
            </div>

            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Selecionar Tamanho</span>
              </div>
              <div className="flex gap-3">
                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                  <button 
                    key={size}
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center text-sm font-medium transition-colors ${
                      size === 'S' 
                        ? 'bg-zinc-900 text-white' 
                        : 'bg-zinc-50 text-zinc-600 hover:bg-zinc-100 border border-zinc-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-4 mb-12">
              <button className="flex-1 bg-zinc-900 hover:bg-zinc-800 text-white rounded-full py-4 font-medium transition-colors">
                Adicionar ao Carrinho
              </button>
              <button className="w-14 h-14 rounded-full border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors shrink-0">
                <Heart className="w-5 h-5 text-zinc-600" />
              </button>
            </div>

            {/* Accordions */}
            <div className="space-y-6">
              <div className="border-t border-zinc-200 pt-6">
                <button className="w-full flex items-center justify-between font-medium mb-4">
                  Descrição e Corte
                  <ChevronUp className="w-5 h-5 text-zinc-400" />
                </button>
                <p className="text-sm text-zinc-500 leading-relaxed">
                  Camisola com capuz de corte largo em tecido de mistura de algodão de peso médio com uma silhueta generosa, mas não excessivamente grande. Capuz forrado a jersey com cordão, ombros descaídos, mangas compridas e bolso canguru. Canelado largo nos punhos e na bainha. Interior macio e escovado.
                </p>
              </div>

              <div className="border-t border-zinc-200 pt-6">
                <button className="w-full flex items-center justify-between font-medium mb-6">
                  Envio
                  <ChevronUp className="w-5 h-5 text-zinc-400" />
                </button>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                      <span className="text-xs font-bold">%</span>
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 mb-0.5">Desconto</p>
                      <p className="text-sm font-medium">Desc. 50%</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                      <Package className="w-4 h-4 text-zinc-600" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 mb-0.5">Pacote</p>
                      <p className="text-sm font-medium">Pacote Normal</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                      <Truck className="w-4 h-4 text-zinc-600" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 mb-0.5">Tempo de Entrega</p>
                      <p className="text-sm font-medium">3-4 Dias Úteis</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
                      <CalendarDays className="w-4 h-4 text-zinc-600" />
                    </div>
                    <div>
                      <p className="text-xs text-zinc-400 mb-0.5">Chegada Estimada</p>
                      <p className="text-sm font-medium">10 - 12 de Outubro de 2024</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rating & Reviews */}
        <div className="mb-24">
          <h2 className="text-2xl font-semibold tracking-tight mb-8">Avaliações e Comentários</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Score */}
            <div className="flex gap-8">
              <div>
                <div className="flex items-baseline gap-1 mb-1">
                  <span className="text-6xl font-semibold tracking-tighter">4,5</span>
                  <span className="text-xl text-zinc-400 font-medium">/5</span>
                </div>
                <p className="text-sm text-zinc-500">(50 Novas Avaliações)</p>
              </div>
              
              <div className="flex-1 space-y-2">
                {[5, 4, 3, 2, 1].map((star, i) => (
                  <div key={star} className="flex items-center gap-3">
                    <div className="flex items-center gap-1 w-8">
                      <Star className={`w-3 h-3 ${i < 2 ? 'fill-amber-400 text-amber-400' : 'fill-zinc-200 text-zinc-200'}`} />
                      <span className="text-xs font-medium text-zinc-600">{star}</span>
                    </div>
                    <div className="flex-1 h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-zinc-900 rounded-full" 
                        style={{ width: star === 5 ? '80%' : star === 4 ? '15%' : star === 3 ? '5%' : '0%' }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Review Card */}
            <div className="lg:col-span-2">
              <div className="bg-white border border-zinc-200 rounded-3xl p-8 relative shadow-sm">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="font-semibold mb-2">Alex Mathio</h4>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-zinc-400 font-medium">13 Out 2024</span>
                </div>
                <p className="text-sm text-zinc-600 leading-relaxed mb-6">
                  "A dedicação da NextGen à sustentabilidade e práticas éticas ressoa fortemente com os consumidores de hoje, posicionando a marca como uma escolha responsável no mundo da moda."
                </p>
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-zinc-100">
                    <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=100&h=100" alt="User" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  </div>
                  <div className="flex gap-1">
                    <div className="w-6 h-1 bg-zinc-900 rounded-full"></div>
                    <div className="w-2 h-1 bg-zinc-200 rounded-full"></div>
                    <div className="w-2 h-1 bg-zinc-200 rounded-full"></div>
                  </div>
                </div>
                
                {/* Next Review Button */}
                <button className="absolute -right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white border border-zinc-200 rounded-full flex items-center justify-center shadow-sm hover:bg-zinc-50 transition-colors">
                  <ChevronRight className="w-5 h-5 text-zinc-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* You might also like */}
        <div>
          <h2 className="text-3xl font-semibold tracking-tight text-center mb-12">Também poderá gostar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-zinc-100 rounded-3xl overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?auto=format&fit=crop&q=80&w=600&h=800" alt="Polo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-medium mb-2">Polo com Detalhes em Contraste</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4].map(s => <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                  <Star className="w-3 h-3 fill-zinc-200 text-zinc-200" />
                </div>
                <span className="text-xs text-zinc-500 font-medium">4.0/5</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold">212 €</span>
                <span className="text-sm text-zinc-400 line-through">242 €</span>
                <span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-0.5 rounded-full">-20%</span>
              </div>
            </div>

            {/* Product 2 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-zinc-100 rounded-3xl overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&q=80&w=600&h=800" alt="T-shirt" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-medium mb-2">T-shirt com Gráfico em Gradiente</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3].map(s => <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                  <Star className="w-3 h-3 fill-zinc-200 text-zinc-200" />
                  <Star className="w-3 h-3 fill-zinc-200 text-zinc-200" />
                </div>
                <span className="text-xs text-zinc-500 font-medium">3.5/5</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold">145 €</span>
              </div>
            </div>

            {/* Product 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-zinc-100 rounded-3xl overflow-hidden mb-4">
                <img src="https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?auto=format&fit=crop&q=80&w=600&h=800" alt="Polo" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <h3 className="font-medium mb-2">Polo com Rebordo</h3>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 fill-amber-400 text-amber-400" />)}
                </div>
                <span className="text-xs text-zinc-500 font-medium">5.0/5</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold">180 €</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
