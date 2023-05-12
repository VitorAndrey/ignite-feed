import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

import { PencilSimpleLine } from "phosphor-react";

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_1280.jpg"
      />

      <div className={styles.profileCard}>
        <Avatar src="https://github.com/VitorAndrey.png" />
        <strong>Vitor Andrey</strong>
        <span>Web Developer</span>
      </div>

      <footer className={styles.footer}>
        <a href="#">
          <PencilSimpleLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}
