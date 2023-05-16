import styles from "./Comment.module.css";

import { formatDistanceToNow } from "date-fns";
import { id, ptBR } from "date-fns/locale";

import { ThumbsUp, Trash } from "phosphor-react";

import { Avatar } from "./Avatar";

export function Comment({ name, src, publishedAt, content, onDeleteComment, id }) {
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
          <button type="button">
            <ThumbsUp size={18} />
            <p>
              Aplaudir<span>03</span>
            </p>
          </button>
        </footer>
      </div>
    </div>
  );
}
