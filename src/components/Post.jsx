import styles from "./Post.module.css";

import { useState } from "react";

import { v4 as uuidv4 } from "uuid";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post({ author, content, publishedAt, comments, userName, userPicture }) {
  const [commentList, setCommentList] = useState(comments);
  const [newCommentText, setNewcommentText] = useState("");

  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  const toNowDate = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true,
  });

  function handleCreateNewComment(event) {
    event.preventDefault();
    const newComment = {
      id: uuidv4(),
      name: userName,
      avatarUrl: `https://github.com/${userPicture}.png`,
      content: newCommentText,
      publishedAt: new Date(),
    };
    setCommentList([...commentList, newComment]);
    setNewcommentText("");
  }

  function handleCommentText(event) {
    event.target.setCustomValidity("");
    setNewcommentText(event.target.value);
  }

  function customInvalidMessage() {
    event.target.setCustomValidity("Não é possivel publicar um comentário em branco!");
  }

  function deleteComment(commentId) {
    const listWithoutDeleted = commentList.filter((comment) => comment.id !== commentId);
    setCommentList(listWithoutDeleted);
  }

  const isNewCommentEmpty = newCommentText.length == 0;

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
            return <p key={uuidv4()}>{line.content}</p>;
          } else if (line.type === "link") {
            return (
              <p key={uuidv4()}>
                <a href="#">{line.content}</a>
              </p>
            );
          }
        })}
      </div>

      {/* FORM */}
      <form onSubmit={handleCreateNewComment} className={styles.form}>
        <strong>Deixe seu feedback</strong>
        <textarea
          type="text"
          name="commentText"
          placeholder="Escreva um comentário..."
          onChange={handleCommentText}
          value={newCommentText}
          required
          onInvalid={customInvalidMessage}
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      {/* COMMENTS */}
      <div className={styles.commentList}>
        {commentList.map((comment) => {
          return (
            <Comment
              key={comment.id}
              id={comment.id}
              name={comment.name}
              src={comment.avatarUrl}
              publishedAt={comment.publishedAt}
              content={comment.content}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </article>
  );
}
