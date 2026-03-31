import React from 'react'
import {Github, Mail, Linkedin, ExternalLink, Code2, Database, Bot, ShoppingCart, Utensils} from 'lucide-react'

function App() {
  // Substitua pela URL da sua imagem
  const profileImage = 'https://i.imgur.com/RXQXpi6.jpeg'

  const projects = [
    {
      title: 'Gomes Marketplace',
      description: 'Sistema de e-commerce com React/TypeScript e MySQL. Interface moderna e responsiva para gestão de produtos e checkout.',
      tech: ['TypeScript', 'React', 'MySQL', 'Tailwind'],
      icon: ShoppingCart,
      link: 'https://github.com/28anonimo1234/Gomes',
      year: '2025'
    },
    {
      title: 'Nazuna WhatsApp Bot',
      description: 'Bot para WhatsApp com Node.js. Automatiza moderação de grupos e interações através de comandos customizados.',
      tech: ['JavaScript', 'Node.js', 'WhatsApp API'],
      icon: Bot,
      link: 'https://github.com/28anonimo1234/nazuna',
      year: '2024'
    },
    {
      title: 'Food++ Delivery',
      description: 'Plataforma para microempreendedores com sistema completo de catálogo de produtos e vendas diretas.',
      tech: ['React', 'TypeScript', 'Vite'],
      icon: Utensils,
      link: 'https://github.com/THEUZSN/foodpp',
      year: '2024'
    }
  ]

  const skills = [
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'C#', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
    { name: 'JavaScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
    { name: 'Dart', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' }
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="text-lg font-semibold">Wenvel</span>
          </div>
          <nav className="flex gap-8">
            <a href="#projetos" className="text-sm text-gray-400 hover:text-white transition-colors">Projetos</a>
            <a href="#contato" className="text-sm text-gray-400 hover:text-white transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image */}
          <div className="relative group">
            <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-white/40 transition-colors">
              <img 
                src={profileImage} 
                alt="Wenvel"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-emerald-500 rounded-full border-4 border-black"></div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 max-w-3xl">
          <div className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-xs text-emerald-400 mb-6">
            Disponível para trabalho
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Desenvolvedor Full Stack
          </h1>
          
          <p className="text-xl text-gray-400 mb-8 leading-relaxed">
            Transformando ideias em sistemas escaláveis. Especializado em automação, arquitetura de software e desenvolvimento full stack.
          </p>

          <div className="flex gap-4 mb-12">
            <a 
              href="#contato" 
              className="px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors"
            >
              Entre em contato
            </a>
            <a 
              href="#projetos" 
              className="px-6 py-3 border border-white/20 font-medium rounded hover:bg-white/5 transition-colors"
            >
              Ver projetos
            </a>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8 border-t border-white/10">
            <div>
              <div className="text-3xl font-bold text-blue-400 mb-1">380+</div>
              <div className="text-sm text-gray-500">Contribuições</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-400 mb-1">30</div>
              <div className="text-sm text-gray-500">Repositórios</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-1">2024-2026</div>
              <div className="text-sm text-gray-500">Ano ativo</div>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Tecnologias</h2>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
          {skills.map((skill) => (
            <div key={skill.name} className="flex flex-col items-center gap-3 p-4 border border-white/10 rounded hover:border-white/20 transition-colors">
              <img src={skill.logo} alt={skill.name} className="w-12 h-12" />
              <span className="text-sm text-gray-400">{skill.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Expertise */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Especialidades</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 border border-white/10 rounded">
            <Database className="w-8 h-8 text-blue-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Backend & APIs</h3>
            <p className="text-sm text-gray-400">APIs RESTful, microserviços e arquitetura de sistemas</p>
          </div>
          <div className="p-6 border border-white/10 rounded">
            <Bot className="w-8 h-8 text-emerald-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Automação</h3>
            <p className="text-sm text-gray-400">Bots inteligentes e scripts de automação</p>
          </div>
          <div className="p-6 border border-white/10 rounded">
            <Code2 className="w-8 h-8 text-purple-400 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Full Stack</h3>
            <p className="text-sm text-gray-400">Desenvolvimento completo de aplicações web</p>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projetos" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-sm text-gray-500 uppercase tracking-wider mb-6">Projetos em Destaque</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon
            return (
              <div key={index} className="border border-white/10 rounded p-6 hover:border-white/20 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-white/5 rounded">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-gray-500">{project.year}</span>
                </div>

                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-400 mb-4 leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-2 py-1 bg-white/5 text-xs rounded text-gray-400">
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                >
                  Ver projeto
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="max-w-6xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Redes para contato</h2>
          <p className="text-lg text-gray-400 mb-12">
            Disponível para projetos freelance e colaborações. Entre em contato para discutir sua ideia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://github.com/underbachi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-black font-medium rounded hover:bg-gray-200 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="mailto:wenvelk@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 font-medium rounded hover:bg-white/5 transition-colors"
            >
              <Mail className="w-5 h-5" />
              E-mail
            </a>
            <a
              href="https://www.linkedin.com/in/wenvel-kaique-989230310/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/20 font-medium rounded hover:bg-white/5 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-gray-500">
          <p>• Futuro Engenheiro Mecânico</p>
          <p className="text-gray-600 text-xs mt-2">© 2026 </p>
        </div>
      </footer>
    </div>
  )
}

export default App