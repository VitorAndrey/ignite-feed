import styles from "./App.module.css";

import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import { posts } from "./data/posts";

import { useState } from "react";

export function App() {
  const [name, setName] = useState("Vitor Andrey");
  const [role, setRole] = useState("Developer");
  const [picture, setPicture] = useState("VitorAndrey");

  function onChangeName(changes) {
    setName(changes);
  }
  function onChangeRole(changes) {
    setRole(changes);
  }
  function onChangePicture(changes) {
    setPicture(changes);
  }

  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar
          onChangeName={onChangeName}
          onChangeRole={onChangeRole}
          onChangePicture={onChangePicture}
          userName={name}
          userRole={role}
          userPicture={picture}
        />
        <main>
          {posts.map((post) => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
                comments={post.comments}
                userName={name}
                userPicture={picture}
              />
            );
          })}
        </main>
      </div>
    </>
  );
}
