import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

export function App() {
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
        { type: "link", content: "Acesse e deixe seu feedback 👉vitor.com/site" },
      ],
      publishedAt: new Date("2023-05-12 13:21:00"),
    },
    {
      id: "2",
      author: {
        avatarUrl: "https://github.com/JaneDoe.png",
        name: "Jane Doe",
        role: "Designer",
      },
      content: [
        { type: "paragraph", content: "Bom dia pessoal! 👋" },
        {
          type: "paragraph",
          content:
            "Acabei de subir mais um projeto no meu portifa. É o design de um incrível app mobile com o objetivo de ensinar idosos a usar a tecnologia!!!",
        },
        { type: "link", content: "Entre para ver mais do meu trabalho 👉jane.design/idososnanet" },
      ],
      publishedAt: new Date("2023-05-12 13:25:00"),
    },
  ];

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
