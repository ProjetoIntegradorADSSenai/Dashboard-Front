import { 
  SiNextdotjs, 
  SiReact, 
  SiExpo, 
  SiFlask, 
  SiPython, 
  SiTailwindcss, 
  SiAmazon, 
  SiAwslambda, 
  SiMysql,
  SiNodedotjs
} from 'react-icons/si';

export default function TechnologiesPage() {
  const technologies = [
    {
      name: 'Next.js',
      description: 'Framework React para aplicações server-side rendering e estáticas',
      icon: <SiNextdotjs className="w-full h-full" />,
      category: 'Front-end'
    },
    {
      name: 'React',
      description: 'Biblioteca JavaScript para construção de interfaces de usuário',
      icon: <SiReact className="w-full h-full" />,
      category: 'Front-end'
    },
    {
      name: 'Expo',
      description: 'Plataforma para desenvolvimento de aplicativos React Native',
      icon: <SiExpo className="w-full h-full" />,
      category: 'Mobile'
    },
    {
      name: 'Flask',
      description: 'Microframework Python para desenvolvimento web back-end',
      icon: <SiFlask className="w-full h-full" />,
      category: 'Back-end'
    },
    {
      name: 'Python',
      description: 'Linguagem de programação para desenvolvimento back-end e data science',
      icon: <SiPython className="w-full h-full" />,
      category: 'Back-end'
    },
    {
      name: 'CLP',
      description: 'Controlador Lógico Programável para automação industrial',
      icon: <div className="w-full h-full flex items-center justify-center text-2xl">CLP</div>,
      category: 'Hardware'
    },
    {
      name: 'Tailwind CSS',
      description: 'Framework CSS utilitário para design rápido de interfaces',
      icon: <SiTailwindcss className="w-full h-full" />,
      category: 'Front-end'
    },
    {
      name: 'AWS',
      description: 'Plataforma de computação em nuvem da Amazon',
      icon: <SiAmazon className="w-full h-full" />,
      category: 'Cloud'
    },
    {
      name: 'AWS Lambda',
      description: 'Serviço de computação serverless para execução de código',
      icon: <SiAwslambda className="w-full h-full" />,
      category: 'Cloud'
    },
    {
      name: 'MySQL',
      description: 'Sistema de gerenciamento de banco de dados relacional',
      icon: <SiMysql className="w-full h-full" />,
      category: 'Database'
    },
    {
      name: 'Node-RED',
      description: 'Ferramenta de programação visual para conexão de dispositivos IoT',
      icon: <SiNodedotjs className="w-full h-full" style={{ color: '#8f0000' }} />,
      category: 'IoT'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Cabeçalho */}
      <header className="pt-20 pb-12 text-center">
        <h1 className="text-5xl font-bold text-white mb-4">
          Tecnologias Utilizadas
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          O ecossistema tecnológico que impulsiona nossa solução
        </p>
      </header>

      {/* Grid de tecnologias */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="rounded-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20"
            >
              <div className="p-6 flex flex-col items-center h-full">
                <div className="w-20 h-20 mb-4 flex items-center justify-center text-5xl text-white">
                  {tech.icon}
                </div>
                <div className="text-center flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2">{tech.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tech.description}</p>
                </div>
                <div className="mt-auto w-full">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-gray-700 text-purple-300">
                    {tech.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rodapé */}
      <footer className="py-8 text-center border-t border-gray-800">
        <p className="text-gray-400">
          Stack tecnológica completa do projeto - {new Date().getFullYear()}
        </p>
      </footer>
    </div>
  );
}