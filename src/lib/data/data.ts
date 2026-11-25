import type { ProjectProps } from "../types";

export const personalInfo = {
  cta: "Dev Front-End especializada em React e Designer UI/UX focada em criar interfaces envolventes, intuitivas e atrativas ao usuário.",
  githubUrl: "https://github.com/tat4Souza",
  linkedinUrl: "https://www.linkedin.com/in/tais-f-souza",
  email: "tais.fernandes.ssouza@gmail.com",
  roles: ["Dev Frontend", "Designer UI/UX"],
  resumeUrl: null,
  technologies: {
    frontend: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind",
      "Shadcn/ui",
      "JavaFX",
    ],
    backend: ["Node.js", "Fastify", "Python", "Flask", "Java", "API RESTful"],
    database: ["PostgreeSQL", "MySQL", "Prisma", "Docker"],
  },
  aboutMeSummary:
    " Utilizo o Design UI/UX para expandir os limites do que entrego em código, garantindo experiências digitais fluidas e memoráveis. Minha bagagem artística me permite unir sensibilidade estética, técnica e teorica na hora de construir interfaces.",
  workStyleSummary:
    "Tenho muita dedicação, proatividade e motivação por desafios. Possuo facilidade para colaborar em equipe, assumindo responsabilidades com empolgação e contribuindo ativamente com idéias e discussões.",
};

export const academicProjects: ProjectProps[] = [
  {
    videoName: "API 3° Semestre",
    videoUrl: "videos/ordens-servico.mp4",
    projectName: "Sistema de Ordens de Serviço",
    roles: ["Scrum Master", "Designer UI/UX", "Dev Frontend"],
    partnerCompany: "Altave",
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Prisma",
      "MySql",
      "Docker",
      "Shadcn/ui",
      "Tailwind css",
    ],
    githubUrl: "https://github.com/FawkesCode/API-2026.02",
    demoUrl: "https://altave.kalynox.tech/",
    problemDescription:
      "A Altave identificou gargalos de comunicação e falta de padronização na gestão de ordens de serviço, pois cada equipe utilizava ferramentas e fluxos próprios. Essa fragmentação dificultava o acompanhamento global das demandas e o alinhamento interdepartamental.",
    solutionDescription:
      "Criamos uma plataforma centralizada para o gerenciamento de projetos, tickets e equipes. A solução proporciona transparência sobre as demandas individuais e o progresso geral da operação, além de oferecer ao setor administrativo relatórios gerenciais detalhados sobre a produtividade das equipes e o status dos chamados.",
    acquiredKnowledgeDescription:
      "Aprofundei meu domínio no ecossistema Next.js, explorando a arquitetura de Server e Client Components. Também consolidei boas práticas de estilização ágil com Tailwind CSS e Shadcn/ui, além de estruturar integrações eficientes com os endpoints do Back-End.",
    startDate: "Ago. de 2026",
    endDate: "Nov. de 2026",
  },
  {
    videoName: "API 2° Semestre",
    videoUrl: "videos/welogic.mp4",
    projectName: "We Logic",
    roles: ["Dev Team", "Designer UI/UX", "Dev Frontend"],
    partnerCompany: "Newe Log",
    technologies: ["Java", "JavaFX", "MySQL", "SpringBoot", "Docker"],
    githubUrl: "https://github.com/tat4Souza/API-2-Semestre",
    demoUrl: null,
    problemDescription:
      "O setor administrativo enfrentava gargalos operacionais devido a um fluxo de compras descentralizado. As requisições eram recebidas via WhatsApp e transcritas manualmente para planilhas Excel, resultando frequentemente em perda de informações, retrabalho e falta de rastreabilidade.",
    solutionDescription:
      "Para otimizar a rotina dos setores administrativo e de compras, desenvolvemos uma aplicação desktop robusta para gestão de estoque, cadastro de fornecedores e controle de requisições. O sistema implementou um fluxo de estados rastreáveis, garantindo visibilidade completa de cada etapa do processo de compra.",
    acquiredKnowledgeDescription:
      "Como principal responsável pela interface e funcionamento do Front-End, enfrentei o desafio de dominar o JavaFX. Aprendi a traduzir protótipos modernos concebidos no Figma para um ecossistema de estilização desktop, superando limitações nativas para entregar uma UI limpa e funcional.",
    startDate: "Mar. de 2026",
    endDate: "Junho. de 2026",
  },
  {
    videoName: "API 1° Semestre",
    videoUrl: "videos/devloop.mp4",
    projectName: "DevLoop",
    roles: ["Product Owner", "Designer UI/UX", "Dev Frontend"],
    partnerCompany: "Cliente interno Fatec",
    technologies: [
      "Flask",
      "python",
      "mySQL",
      "javascript",
      "html",
      "css",
      "bootstrap",
      "AWS",
    ],
    githubUrl: "https://github.com/tat4Souza/API-1-Semestre",
    demoUrl: null,
    problemDescription:
      "O cliente enfrentava dificuldades para padronizar o fluxo de desenvolvimento de software entre seus colaboradores. Embora adotassem a metodologia Scrum, a falta de alinhamento gerava interpretações divergentes sobre papéis, ritos e entregas.",
    solutionDescription:
      "Desenvolvemos uma plataforma web estruturada como documentação interativa para capacitar e alinhar a equipe quanto às práticas do Scrum. O sistema conta com avaliações de fixação que alimentam um painel administrativo de métricas, permitindo que a gestão acompanhe o nível de absorção do conteúdo pelos colaboradores.",
    acquiredKnowledgeDescription:
      "Aprimorei minhas habilidades na prototipação de interfaces de alta fidelidade no Figma, na construção de componentes modulares e reutilizáveis com JavaScript puro (aplicando conceitos arquiteturais semelhantes ao React) e na integração entre lógica de negócios e interface utilizando Flask.",
    startDate: "Ago. de 2025",
    endDate: "Nov. de 2025",
  },

  {
    videoName: "Desenvolvimento Web II",
    videoUrl: "videos/spa-javascript.mp4",
    projectName: "Prática js modular e spa",
    roles: ["Designer UI/UX", "Dev Frontend"],
    partnerCompany: "Atividade Avaliativa",
    technologies: ["html", "css", "javascript"],
    githubUrl: "https://github.com/tat4Souza/js-modular-spa-pratica",
    demoUrl: "https://tat4souza.github.io/js-modular-spa-pratica/",
    problemDescription:
      "O desafio consistia em desenvolver formulários dinâmicos com validações específicas e processamento de regras de negócio em JavaScript, visando a geração automatizada de relatórios analíticos a partir dos dados submetidos.",
    solutionDescription:
      "Desenvolvi uma Single Page Application (SPA) utilizando exclusivamente JavaScript Vanilla, estruturada em módulos e componentes reutilizáveis. Essa arquitetura reduziu a duplicação de código e garantiu alta escalabilidade e facilidade de manutenção.",
    acquiredKnowledgeDescription:
      "Para elevar o nível técnico da entrega, optei por replicar o comportamento reativo e componentizado de frameworks como o React utilizando apenas JavaScript puro. Esse processo consolidou minha base em manipulação avançada de arrays, gerenciamento de estado e arquitetura modular.",
    startDate: "Ago. de 2026",
    endDate: "Set. de 2026",
  },
  {
    videoName: "Técnica de programação I",
    videoUrl: "videos/greencode.png",
    projectName: "GreenCode",
    roles: ["Dev Backend"],

    partnerCompany: "Atividade Avaliativa",
    technologies: ["Node.js", "Fastify", "Prisma", "TypeScript"],
    githubUrl: "https://github.com/tat4Souza/greencode-AV2",
    demoUrl: null,
    problemDescription:
      "O descarte inadequado de lixo eletrônico gera graves impactos ambientais e desperdiça componentes reaproveitáveis, muitas vezes porque as empresas carecem de ferramentas estruturadas para rastrear e gerenciar o ciclo de vida de seus ativos tecnológicos.",
    solutionDescription:
      "Desenvolvi uma API RESTful para o cadastro de organizações parceiras e gerenciamento de lotes de equipamentos eletrônicos, permitindo o rastreamento detalhado do estado de conservação e do ciclo de vida de cada ativo até sua destinação final ou reciclagem.",
    acquiredKnowledgeDescription:
      "Adquiri sólida experiência em arquitetura Back-End e estruturação de APIs RESTful com Node.js, Fastify e Prisma ORM. Apliquei o padrão de arquitetura em camadas (Routes, Controllers, Services e Repositories), garantindo desacoplamento, legibilidade e facilidade de manutenção do código.",
    startDate: "Out. de 2026",
    endDate: "Nov. de 2026",
    image: true,
  },
];

export const personalProjects = [
  {
    videoName: "Projeto coletivo",
    videoUrl: "videos/puma.mp4",
    projectName: "PUMA - Plataforma Unificada de Materiais Acadêmicos",
    roles: ["Idealizadora Parceira", "Designer UI/UX", "Dev Frontend"],
    partnerCompany: "Projeto comunitário",
    technologies: ["React", "Vite", "sass", "TypeScript"],
    githubUrl: "https://github.com/ProjetoPUMA/PUMA",
    demoUrl: "https://projetopuma.github.io/PUMA/",
    problemDescription:
      "Durante o primeiro semestre de 2026, a instabilidade do sistema acadêmico oficial da faculdade deixou os estudantes sem acesso centralizado a cronogramas de atividades, datas de avaliações e materiais disponibilizados pelos docentes.",
    solutionDescription:
      "Como parceira de outro desenvolvedor, idealizamos e construímos o PUMA, uma plataforma web criada para centralizar e organizar as informações acadêmicas essenciais da nossa turma. A aplicação foi adotada rapidamente pelos colegas, recebendo excelente feedback pelo impacto positivo na rotina de estudos.",
    acquiredKnowledgeDescription:
      "Consolidei minha experiência com React, TypeScript e arquitetura de estilos utilizando Sass para traduzir uma identidade visual autoral e marcante para o código. O projeto encontra-se em hiato temporário, mas possui um roadmap planejado para futuras expansões.",
    startDate: "Fev. de 2026",
    endDate: "Mar. de 2026",
  },
];

export const softSkills = {
  productOwner:
    "Como Product Owner desenvolvi uma visão estratégica orientada ao produto, mapeando requisitos e definindo funcionalidades essenciais para maximizar o valor entregue ao cliente. ",
  scrumMaster:
    "Como scrum master vivenciei na prática como processos bem definidos e documentações claras eliminam ruídos de comunicação e mantêm a equipe alinhada e produtiva.",
  devTeam:
    "Ao atuar diretamente no desenvolvimento, direciono minha proatividade para aprofundar o domínio nas tecnologias da stack e apoiar os colegas, compartilhando boas práticas para o padrão de entrega do time.",
  additionalSkills: [
    "Trabalho em Equipe",
    "Proatividade",
    "Aprendizado Rápido",
    "Comunicação Assertiva",
    "Inglês Avançado",
  ],
};

export const figmaDesigns = [
  {
    figma: [{ image: "designs/storia.png", designName: "Homepage" }],
    image: "designs/storia.png",
    designName: "Storia",
    platformGoal:
      "Plataforma web voltada para escritores, oferecendo liberdade para estruturar narrativas, criar taxonomias personalizadas e reutilizar elementos de construção de mundo (worldbuilding) ao longo de seus projetos.",
    inspirations:
      "Teatros de papelão, espetáculos de marionetes e a estética visual de livros clássicos de fábulas.",
    intentionsBehindInspirations:
      "Para estimular a imaginação de escritores e criadores, busquei referências em mídias lúdicas e atemporais de contação de histórias. O objetivo foi projetar um ambiente digital acolhedor e inspirador que despertasse o prazer criativo.",
    futurePlans:
      "Desenvolver a versão funcional da plataforma para uso próprio e compartilhamento com uma comunidade fechada de escritores e amigos.",
  },
  {
    figma: [
      {
        image: "designs/VAULT76/1_landing_page.png",
        designName: "Tela de Landing page 1",
      },
      {
        image: "designs/VAULT76/2_landing_page.png",
        designName: "Tela de Landing page 2",
      },
      {
        image: "designs/VAULT76/3_landing_page.png",
        designName: "Tela de Landing page 3",
      },
      {
        image: "designs/VAULT76/4_landing_page.png",
        designName: "Tela de Landing page 4",
      },
      { image: "designs/VAULT76/5_about.png", designName: "Tela Sobre 1" },
      { image: "designs/VAULT76/6_about.png", designName: "Tela Sobre 2" },
      { image: "designs/VAULT76/7_about.png", designName: "Tela Sobre 3" },
      { image: "designs/VAULT76/8_about.png", designName: "Tela Sobre 4" },
      { image: "designs/VAULT76/9_login.png", designName: "Tela de Login" },
      {
        image: "designs/VAULT76/10_code_verification.png",
        designName: "Tela de Verificação de Código",
      },
      {
        image: "designs/VAULT76/11_dashboard_1.png",
        designName: "Tela de Dashboard 1",
      },
      {
        image: "designs/VAULT76/12_dashboard_2.png",
        designName: "Tela de Dashboard 2",
      },
      {
        image: "designs/VAULT76/13_dashboard_3.png",
        designName: "Tela de Dashboard 3",
      },
      {
        image: "designs/VAULT76/14_verify.png",
        designName: "Tela de Verificação de Senha",
      },
      {
        image: "designs/VAULT76/15_generate.png",
        designName: "Tela de Geração de Senha",
      },
    ],
    image: "designs/vault76CTA.png",
    designName: "Vault 76",
    platformGoal:
      "Gerenciador de senhas corporativo focado no armazenamento seguro e na auditoria de força e vulnerabilidade das credenciais dos usuários.",
    inspirations:
      "Estética retrofuturista e interface da franquia de jogos Fallout.",
    intentionsBehindInspirations:
      "A escolha temática dialoga diretamente com a narrativa da franquia, centrada em cofres de alta segurança (Vaults) e proteção de dados críticos. Além da coerência conceitual, a estética proporcionou um desafio enriquecedor de UI/UX na adaptação de elementos diegéticos para uma interface funcional.",
    futurePlans:
      "Implementar a aplicação completa integrando um Front-End em React a uma API RESTful dedicada.",
  },
];

export const courses = [
  {
    name: "Desenvolvimento de Software Multiplataforma",
    institution: "FATEC São José dos Campos - Prof Jessen Vidal",
    startDate: "2025",
    endDate: "2028",
  },
  {
    name: "Ensino médio e técnico em informática",
    institution: "Colégio Técnico Opção",
    startDate: "2022",
    endDate: "2024",
  },
  {
    name: "Curso Start 5.0",
    institution: "Escola SAGA",
    startDate: "2022",
    endDate: "2024",
  },
];

export const certificates = [
  {
    platform: "Udemy",
    courseName: "Advanced CSS and Sass",
    description:
      "Criação de arquitetura de estilos com Sass e técnicas avançadas de CSS (Grid, Flexbox)",
    documentUrl:
      "https://www.udemy.com/certificate/UC-74bc68db-eb6d-4598-bbed-911b79768630/",
  },
  {
    platform: "Cisco Networking Academy",
    courseName: "Linux Unhatched",
    description:
      "Introdução ao sistema operacional Linux e comandos básicos de linha para navegação.",
    documentUrl: null,
  },
  {
    platform: "Cursa",
    courseName: "Curso básico de git",
    description:
      "Aprendizado sobre controle de versão com Git e fluxo de trabalho para projetos de software.",
    documentUrl: "https://cursa.com.br/certificate/f0010f1b3e",
  },
  {
    platform: "Escola SAGA",
    courseName: "Arte Vetorial",
    description:
      "Uso do illustrator para criação de artes vetoriais, logotipos e ilustrações digitais.",
    documentUrl: "https://hub.saga.com.br/certificado?chave=E81A2F53",
  },
  {
    platform: "Escola SAGA",
    courseName: "Composição de Imagens",
    description:
      "Técnicas de composição e manipulação de imagens digitais usando o software Photoshop.",
    documentUrl: "https://hub.saga.com.br/certificado?chave=31A86CC3",
  },
  {
    platform: "Escola SAGA",
    courseName: "VFX e Motion Graphics",
    description:
      "Fundamentos de efeitos visuais (VFX) e criação de animações e elementos visuais.",
    documentUrl: "https://hub.saga.com.br/certificado?chave=FED0A422",
  },
  {
    platform: "Escola SAGA",
    courseName: "Pintura Digital",
    description:
      "Domínio das Ferramentas e técnicas de pintura digital, iluminação e texturização.",
    documentUrl: "https://hub.saga.com.br/certificado?chave=43639BB9",
  },
  {
    platform: "Escola SAGA",
    courseName: "3D 1 - Cenários",
    description:
      "Modelagem 3D de cenários e ambientes, incluindo texturização e renderização.",
    documentUrl: "https://hub.saga.com.br/certificado?chave=5F6448D2",
  },
  {
    platform: "Escola SAGA",
    courseName: "3D 2 - Personagens",
    description:
      "Modelagem 3D e escultura digital de personagens, retopologia e mapeamento UV.",
    documentUrl: "https://hub.saga.com.br/certificado?chave=E294BBE4",
  },
  {
    platform: "Escola SAGA",
    courseName: "3D 3 - Animação",
    description:
      "Introdução aos princípios de animação 3D, rigging de personagens e técnicas de movimentação.",
    documentUrl: "https://hub.saga.com.br/certificado?chave=792C6790  ",
  },
  {
    platform: "Escola SAGA",
    courseName: "Edição audiovisual",
    description:
      "Técnicas de edição e montagem de vídeos, incluindo correção de cor e sincronização de áudios.",
    documentUrl: "https://hub.saga.com.br/certificado?chave=29CDCC8F",
  },
];
