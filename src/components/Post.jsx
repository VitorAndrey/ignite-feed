import styles from "./Post.module.css";

import { formatDistanceToNow } from "date-fns";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import { ptBR } from "date-fns/locale";

import { comments } from "../data/comments";
// import { useState } from "react";

export function Post({ author, content, publishedAt }) {
  // const [handleComments, setHandleComments] = useState();

  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  const toNowDate = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  // function handleCreateNewComment() {
  //   event.preventDefault();

  //   setHandleComments([...comments, comments.length + 1]);

  //   console.log(handleComments);
  // }

  return (
    <article className={styles.post}>
      {/* HEADER */}
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.profileInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <div>
          <time title={formattedDate} dateTime={publishedAt.toString()}>
            {toNowDate}
          </time>
        </div>
      </header>

      {/* CONTENT */}
      <div className={styles.content}>
        {content.map((line) => {
          if (line.type === "paragraph") {
            return <p key={line.id}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      {/* FORM */}
      <form onSubmit={() => {}} className={styles.form}>
        <strong>Deixe seu feedback</strong>
        <textarea type="text" placeholder="Escreva um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      {/* COMMENTS */}
      <div className={styles.commentList}>
        {comments.map((comment) => {
          return (
            <Comment
              key={comment.id}
              name={comment.name}
              src={comment.avatarUrl}
              publishedAt={comment.publishedAt}
              content={comment.content}
            />
          );
        })}
      </div>
    </article>
  );
}
