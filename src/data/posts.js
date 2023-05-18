import { v4 as uuidv4 } from "uuid";

const posts = [
  {
    id: "1",
    author: {
      avatarUrl: "https://github.com/VitorAndrey.png",
      name: "Vitor Andrey",
      role: "Developer",
    },
    content: [
      { type: "paragraph", content: "Fala galeraa 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      { type: "paragraph", content: "Acesse e deixe seu feedback:" },
      { type: "link", content: "👉vitor.com/site" },
    ],
    publishedAt: new Date("2023-05-12 13:21:00"),
    comments: [
      {
        id: uuidv4(),
        name: "Alice Doe",
        avatarUrl: "https://github.com/Alice.png",
        content: "Parabéns pela iniciativa de criar projetos para o portifolio! 👏",
        publishedAt: new Date("2023-05-12 10:30:00"),
        likes: 0,
      },
    ],
  },
  {
    id: "2",
    author: {
      avatarUrl: "https://github.com/Alice.png",
      name: "Alice Doe",
      role: "Designer",
    },
    content: [
      { type: "paragraph", content: "Bom dia pessoal! 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É o design de um incrível app mobile com o objetivo de ensinar idosos a usar a tecnologia!!!",
      },
      { type: "paragraph", content: "Entre para ver mais do meu trabalho:" },
      { type: "link", content: "👉jane.design/idososnanet" },
    ],
    publishedAt: new Date("2023-05-12 13:25:00"),
    comments: [
      {
        id: uuidv4(),
        name: "Vitor Andrey",
        avatarUrl: "https://github.com/VitorAndrey.png",
        content: "Adorei o post! 👏",
        publishedAt: new Date("2023-05-12 10:30:00"),
        likes: 0,
      },
    ],
  },
  {
    id: "3",
    author: {
      avatarUrl: "https://github.com/Bob.png",
      name: "Bob Smith",
      role: "Programmer",
    },
    content: [
      { type: "paragraph", content: "E aí, galera? 😎" },
      {
        type: "paragraph",
        content:
          "Acabei de implementar um novo recurso no meu aplicativo de gerenciamento de tarefas! Agora, você pode categorizar suas tarefas por nível de prioridade! 🚀",
      },
      { type: "paragraph", content: "Confira o app aqui:" },
      { type: "link", content: "👉bobdev.com/tarefas" },
    ],
    publishedAt: new Date("2023-05-12 14:30:00"),
    comments: [
      {
        id: uuidv4(),
        name: "Gustavo Souza",
        avatarUrl: "https://github.com/Andrew.png",
        content: "Seu novo aplicativo de streaming de música ficou incrível! Parabéns! 🎵",
        publishedAt: new Date("2023-05-12 12:45:00"),
        likes: 0,
      },
    ],
  },
  {
    id: "4",
    author: {
      avatarUrl: "https://github.com/Karen.png",
      name: "Carol Silva",
      role: "Product Manager",
    },
    content: [
      { type: "paragraph", content: "Bom dia, pessoal! 🌞" },
      {
        type: "paragraph",
        content:
          "Gostaria de compartilhar com vocês os resultados do nosso último lançamento de produto. Estamos muito felizes com a recepção do mercado! 🚀",
      },
      { type: "paragraph", content: "Leia mais em nosso blog:" },
      { type: "link", content: "👉blogdaempresa.com.br/lancamento" },
    ],
    publishedAt: new Date("2023-05-12 15:45:00"),
    comments: [
      {
        id: uuidv4(),
        name: "Juliana Silva",
        avatarUrl: "https://github.com/Ana.png",
        content: "Gostei muito do seu artigo sobre como alavancar as vendas pelo Instagram! 👍",
        publishedAt: new Date("2023-05-12 14:20:00"),
        likes: 0,
      },
    ],
  },
  {
    id: "5",
    author: {
      avatarUrl: "https://github.com/David.png",
      name: "David Lee",
      role: "Front-end Developer",
    },
    content: [
      { type: "paragraph", content: "Oi pessoal! 👋" },
      {
        type: "paragraph",
        content:
          "Acabei de finalizar a implementação do novo layout do nosso site! Agora, ele está ainda mais moderno e fácil de navegar! 😎",
      },
      { type: "paragraph", content: "Confira o resultado:" },
      { type: "link", content: "👉meusite.com.br" },
    ],
    publishedAt: new Date("2023-05-12 16:15:00"),
    comments: [
      {
        id: uuidv4(),
        name: "Lucas Oliveira",
        avatarUrl: "https://github.com/LucasOliveira.png",
        content:
          "Seu sistema de gestão de estoque ficou ainda melhor com essa nova funcionalidade! Parabéns pelo trabalho! 👏",
        publishedAt: new Date("2023-05-12 17:30:00"),
        likes: 0,
      },
    ],
  },
  {
    id: "6",
    author: {
      avatarUrl: "https://github.com/Evelyn.png",
      name: "Evelyn Williams",
      role: "Back-end Developer",
    },
    content: [
      { type: "paragraph", content: "Olá, pessoal! 🙋‍♀️" },
      {
        type: "paragraph",
        content:
          "Acabei de implementar uma nova funcionalidade no nosso sistema de gerenciamento de pedidos! Agora, os clientes podem rastrear o status do pedido em tempo real! 🚚",
      },
      { type: "paragraph", content: "Experimente agora mesmo:" },
      { type: "link", content: "👉meusite.com.br/pedidos" },
    ],
    publishedAt: new Date("2023-05-12 17:30:00"),
    comments: [
      {
        id: uuidv4(),
        name: "Maria Souza",
        avatarUrl: "https://github.com/Maria.png",
        content:
          "Muito interessante o seu artigo sobre marketing digital! Obrigada por compartilhar seus conhecimentos! 🙏",
        publishedAt: new Date("2023-05-12 21:00:00"),
        likes: 0,
      },
    ],
  },
  {
    id: "7",
    author: {
      avatarUrl: "https://github.com/Felipe.png",
      name: "Felipe Rodrigues",
      role: "Marketing Manager",
    },
    content: [
      { type: "paragraph", content: "Oi pessoal! 👋" },
      {
        type: "paragraph",
        content:
          "Gostaria de compartilhar com vocês uma novidade incrível! Conseguimos aumentar em 30% o número de leads gerados pelo nosso site nos últimos três meses! 📈",
      },
      { type: "paragraph", content: "Saiba mais em nosso blog:" },
      { type: "link", content: "👉blogdaempresa.com.br/marketing" },
    ],
    publishedAt: new Date("2023-05-12 18:45:00"),
    comments: [],
  },
  {
    id: "8",
    author: {
      avatarUrl: "https://github.com/Gabriel.png",
      name: "Gabriel Oliveira",
      role: "UI/UX Designer",
    },
    content: [
      { type: "paragraph", content: "Olá, pessoal! 🙋‍♂️" },
      {
        type: "paragraph",
        content:
          "Acabei de concluir o redesign do nosso aplicativo de streaming de música! Agora, ele está ainda mais intuitivo e fácil de usar! 🎧",
      },
      { type: "paragraph", content: "Confira o resultado:" },
      { type: "link", content: "👉meuapp.com.br" },
    ],
    publishedAt: new Date("2023-05-12 19:30:00"),
    comments: [],
  },
  {
    id: "9",
    author: {
      avatarUrl: "https://github.com/Henrique.png",
      name: "Henrique Santos",
      role: "Full-stack Developer",
    },
    content: [
      { type: "paragraph", content: "E aí, pessoal! 😎" },
      {
        type: "paragraph",
        content:
          "Acabei de finalizar a implementação de um novo recurso no nosso sistema de gestão de estoque! Agora, é possível gerar relatórios de vendas por período! 📊",
      },
      { type: "paragraph", content: "Experimente agora mesmo:" },
      { type: "link", content: "👉meusistema.com.br/estoque" },
    ],
    publishedAt: new Date("2023-05-12 20:15:00"),
    comments: [],
  },
  {
    id: "10",
    author: {
      avatarUrl: "https://github.com/Isabell.png",
      name: "Isabela Souza",
      role: "Content Writer",
    },
    content: [
      { type: "paragraph", content: "Olá, pessoal! 🙋‍♀️" },
      {
        type: "paragraph",
        content:
          "Gostaria de compartilhar com vocês um artigo que acabei de publicar em nosso blog. Nele, explico como utilizar o Instagram para alavancar as vendas da sua empresa! 📈",
      },
      { type: "paragraph", content: "Leia agora mesmo:" },
      { type: "link", content: "👉blogdaempresa.com.br/instagram" },
    ],
    publishedAt: new Date("2023-05-12 21:30:00"),
    comments: [],
  },
];

export { posts };
