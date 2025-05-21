import Image from 'next/image';
export default function TeamPage() {
  return (
    <div className="min-h-screen">
      {/* Cabeçalho futurista */}
      <header className="pt-16 pb-12 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Nossa Equipe
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          Os talentos por trás da inovação tecnológica
        </p>
      </header>

      {/* Grid de membros mantendo o estilo original mas com layout similar */}
      <div className="max-w-7xl mx-auto px-10 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Felipe Marques */}
          <div className="opacity-75 rounded-lg overflow-hidden border border-gray-700">
            <div className="p-6 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-gray-600 overflow-hidden">
                  <img
                    src="/img/felipe.jpeg"
                    alt="Felipe Marques"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  Front-end
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Felipe Marques</h2>
              <p className="text-gray-300 text-sm mb-3">Desenvolvedor CLP e Front-end</p>
              <p className="text-gray-300 text-center text-sm">
                Programação do sistema de automação do CLP e integração do Next Auth.
              </p>
              <div className="mt-4 w-full border-t border-gray-700 pt-3 flex justify-center space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Automação
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Next.js
                </span>
              </div>
            </div>
          </div>

          {/* Gabriel Ribeiro */}
          <div className="opacity-75 rounded-lg overflow-hidden border border-gray-700">
            <div className="p-6 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-gray-600 overflow-hidden">
                  <img 
                    src="/img/gabriel.jpeg" 
                    alt="Gabriel Ribeiro"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  Front-end
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Gabriel Ribeiro</h2>
              <p className="text-gray-300 text-sm mb-3">Desenvolvedor front e back-end</p>
              <p className="text-gray-300 text-center text-sm">
                Desenvolvimento da interface do usuário e integração com a API.
              </p>
              <div className="mt-4 w-full border-t border-gray-700 pt-3 flex justify-center space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Next.js
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Data Science
                </span>
              </div>
            </div>
          </div>

          {/* Luciano */}
          <div className="opacity-75 rounded-lg overflow-hidden border border-gray-700">
            <div className="p-6 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-gray-600 overflow-hidden">
                  <img 
                    src="/img/luciano.jpeg" 
                    alt="Luciano"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  Database
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Luciano</h2>
              <p className="text-gray-300 text-sm mb-3">Arquiteto de Banco de Dados</p>
              <p className="text-gray-300 text-center text-sm">
                Estrutura do banco de dados e relacionamento entre tabelas.
              </p>
              <div className="mt-4 w-full border-t border-gray-700 pt-3 flex justify-center space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  MySQL
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Modelagem
                </span>
              </div>
            </div>
          </div>

          {/* Giovani */}
          <div className="opacity-75 rounded-lg overflow-hidden border border-gray-700">
            <div className="p-6 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-gray-600 overflow-hidden">
                  <img 
                    src="/img/giovani.jpeg" 
                    alt="Giovani"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  Pesquisa
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Giovani</h2>
              <p className="text-gray-300 text-sm mb-3">Metodologia Científica</p>
              <p className="text-gray-300 text-center text-sm">
                Desenvolvimento do artigo e metodologia científica do projeto.
              </p>
              <div className="mt-4 w-full border-t border-gray-700 pt-3 flex justify-center space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Artigo
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Metodologia
                </span>
              </div>
            </div>
          </div>

          {/* Gabriel Faria */}
          <div className="opacity-75 rounded-lg overflow-hidden border border-gray-700">
            <div className="p-6 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-gray-600 overflow-hidden">
                  <img 
                    src="/img/faria.png" 
                    alt="Gabriel Faria"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  Cloud/Backend
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Gabriel Faria</h2>
              <p className="text-gray-300 text-sm mb-3">Arquiteto Cloud e Back-end</p>
              <p className="text-gray-300 text-center text-sm">
                API em Flask, refatoração para AWS Lambda (get e post).
              </p>
              <div className="mt-4 w-full border-t border-gray-700 pt-3 flex justify-center space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  AWS
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Flask
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Lambda
                </span>
              </div>
            </div>
          </div>

          {/* Guilherme Camargo */}
          <div className="opacity-75 rounded-lg overflow-hidden border border-gray-700">
            <div className="p-6 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-gray-600 overflow-hidden">
                  <img 
                    src="/img/camargo.png" 
                    alt="Guilherme Camargo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  Cloud/Database
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Guilherme Camargo</h2>
              <p className="text-gray-300 text-sm mb-3">Desenvolvedor Cloud e Banco de Dados</p>
              <p className="text-gray-300 text-center text-sm">
                API Gateway para integração com Lambda e MySQL no AWS RDS.
              </p>
              <div className="mt-4 w-full border-t border-gray-700 pt-3 flex justify-center space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  AWS
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  RDS
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  API Gateway
                </span>
              </div>
            </div>
          </div>

          {/* Guilherme Kaneda */}
          <div className="opacity-75 rounded-lg overflow-hidden border border-gray-700">
            <div className="p-6 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-gray-600 overflow-hidden">
                  <img 
                    src="/img/kaneda.png" 
                    alt="Guilherme Camargo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  Cloud/Database
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Guilherme Kaneda</h2>
              <p className="text-gray-300 text-sm mb-3">Desenvolvedor Clp e Back-end</p>
              <p className="text-gray-300 text-center text-sm">
                Conexão do CLP com o node red via opc ua, o qual converte os dados para um POST na API hospedada na AWS Lambda
              </p>
              <div className="mt-4 w-full border-t border-gray-700 pt-3 flex justify-center space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Clp
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Flask
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  AWS
                </span>
              </div>
            </div>
          </div>

          {/* Tomas */}
          <div className="opacity-75 rounded-lg overflow-hidden border border-gray-700">
            <div className="p-6 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-gray-600 overflow-hidden">
                  <img 
                    src="/img/tomas.jpeg" 
                    alt="Guilherme Camargo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  Expo
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">Tomas</h2>
              <p className="text-gray-300 text-sm mb-3">Desenvolvedor Mobile</p>
              <p className="text-gray-300 text-center text-sm">
                Desenvolvimento mobile em Expo
              </p>
              <div className="mt-4 w-full border-t border-gray-700 pt-3 flex justify-center space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Expo
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Verticalização / Horizontalização
                </span>
              </div>
            </div>
          </div>

          {/* João */}
          <div className="opacity-75 rounded-lg overflow-hidden border border-gray-700">
            <div className="p-6 flex flex-col items-center">
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-full border-4 border-gray-600 overflow-hidden">
                  <img 
                    src="/img/joao.jpeg" 
                    alt="Foto"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-700 text-white px-2 py-0.5 rounded-full text-xs font-bold">
                  Expo
                </div>
              </div>
              <h2 className="text-xl font-bold text-white mb-1">João</h2>
              <p className="text-gray-300 text-sm mb-3">Desenvolvedor Mobile e integração</p>
              <p className="text-gray-300 text-center text-sm">
                Desenvolvimento mobile em Expo
              </p>
              <div className="mt-4 w-full border-t border-gray-700 pt-3 flex justify-center space-x-2">
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Integração
                </span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-purple-800 text-white">
                  Mobile
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}