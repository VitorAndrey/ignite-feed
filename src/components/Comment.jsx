import { formatDistanceToNow } from "date-fns";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";
import { ptBR } from "date-fns/locale";

export function Comment({ name, src, publishedAt, content }) {
  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "long",
    hour: "2-digit",
    minute: "2-digit",
  }).format(publishedAt);

  const toNowDate = formatDistanceToNow(publishedAt, { locale: ptBR, addSuffix: true });

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
            <button title="Deletar comentário" type="button">
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
