import styles from "./Post.module.css";

import { Comment } from "./Comment";
import { Avatar } from "./Avatar";

export function Post() {
  return (
    <article className={styles.post}>
      {/* HEADER */}
      <header>
        <div className={styles.author}>
          <Avatar src="https://github.com/ChloeCodesThings.png" />
          <div className={styles.profileInfo}>
            <strong>Jane Cooper</strong>
            <span>Dev Front-End</span>
          </div>
        </div>

        <div>
          <time title="11 de maio ás 19:56h" dateTime="2023-05-11 19:56:00">
            Publicado há 1h
          </time>
        </div>
      </header>

      {/* CONTENT */}
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>
          Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento
          da Rocketseat. O nome do projeto é DoctorCare 🚀
        </p>
        <p>
          Acesse e deixe seu feedback 👉<a href="">jane.design/doctorcare</a>
        </p>
        <a href="">#novoprojeto #nlw #rocketseat</a>
      </div>

      {/* FORM */}
      <form className={styles.form}>
        <strong>Deixe seu feedback</strong>
        <textarea type="text" placeholder="Escreva um comentário..." />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      {/* COMMENTS */}
      <div className={styles.commentList}>
        <Comment />
        <Comment />
      </div>
    </article>
  );
}
