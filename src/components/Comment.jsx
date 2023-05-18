import styles from "./Comment.module.css";

import { useState } from "react";

import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

export function Comment({ name, src, publishedAt, content, onDeleteComment, id }) {
  const [likeCount, setLikeCount] = useState(0);

  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  const toNowDate = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

  function handleDeleteComment() {
    onDeleteComment(id);
  }

  function handleAddLike() {
    setLikeCount((prev) => {
      return prev + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar border={false} src={src} />

      <div className={styles.commentBox}>
        <div className={styles.commentCard}>
          <header>
            <div>
              <strong>{name}</strong>
              <br />
              <time title={formattedDate}>{toNowDate}</time>
            </div>
            <button onClick={handleDeleteComment} title="Deletar comentário" type="button">
              <Trash size={22} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button type="button" onClick={handleAddLike}>
            <ThumbsUp size={18} />
            <p>
              Aplaudir<span>{likeCount}</span>
            </p>
          </button>
        </footer>
      </div>
    </div>
  );
}
