import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

import { ThumbsUp, Trash } from "phosphor-react";

export function Comment() {
  return (
    <div className={styles.comment}>
      <Avatar border={false} src="https://github.com/Alice.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentCard}>
          <header>
            <div>
              <strong>
                Deveon Lane <span>(você)</span>
              </strong>
              <br />
              <time>Cerca de 2h</time>
            </div>
            <button title="Deletar comentário" type="button">
              <Trash size={22} />
            </button>
          </header>
          <p>Muito bom Jane!!! 👏👏👏</p>
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
