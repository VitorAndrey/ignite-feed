import { Avatar } from "./Avatar";
import styles from "./Sidebar.module.css";

import { useState } from "react";

import { PencilSimpleLine, FloppyDisk, XCircle, Question } from "phosphor-react";

export function Sidebar({
  onChangeName,
  onChangeRole,
  onChangePicture,
  userName,
  userRole,
  userPicture,
}) {
  const [editingProfile, setEditingProfile] = useState(false);
  const [isQuestioning, setIsQuestioning] = useState(false);

  function changeUser(event) {
    event.preventDefault();

    if (event.target.inputName.value !== "") {
      onChangeName(event.target.inputName.value);
    } else if (event.target.inputRole.value !== "") {
      onChangeRole(event.target.inputRole.value);
    } else if (event.target.inputPicture.value !== "") {
      onChangePicture(event.target.inputPicture.value);
    }

    setEditingProfile(false);
    setIsQuestioning(false);
  }

  function cancelAll() {
    setEditingProfile(false);
    setIsQuestioning(false);
  }

  return (
    <aside className={styles.sidebar}>
      <img
        className={styles.cover}
        src="https://cdn.pixabay.com/photo/2016/06/25/12/52/laptop-1478822_1280.jpg"
      />

      <div className={styles.profileCard}>
        <Avatar src={`https://github.com/${userPicture}.png`} />
        <strong>{userName}</strong>
        <span>{userRole}</span>
      </div>

      <footer className={styles.footer}>
        {editingProfile ? (
          <form autoComplete="off" className={styles.editProfile} onSubmit={changeUser}>
            <div className={styles.inputContainer}>
              <label htmlFor="inputName">Mudar Nome:</label>
              <input type="text" placeholder={userName} name="inputName" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="inputRole">Mudar Cargo:</label>
              <input type="text" placeholder={userRole} name="inputRole" />
            </div>
            <div className={styles.inputContainer}>
              <label htmlFor="inputPicture">
                <Question
                  size={22}
                  className={styles.question}
                  onClick={() => setIsQuestioning((prev) => !prev)}
                />
                Mudar Foto:
              </label>
              {isQuestioning && (
                <p className={styles.help}>
                  A foto de perfil é definida com base em seu nick do GitHub.
                </p>
              )}
              <input type="text" placeholder={userPicture} name="inputPicture" />
            </div>
            <div className={styles.buttonContainer}>
              <button type="submit" className={styles.greenButton}>
                <FloppyDisk size={20} />
                Salvar alterações
              </button>
              <button type="button" onClick={cancelAll} className={styles.redButton}>
                Cancelar
                <XCircle size={20} />
              </button>
            </div>
          </form>
        ) : (
          <button
            type="button"
            onClick={() => setEditingProfile(true)}
            className={styles.greenButton}
          >
            <PencilSimpleLine size={20} />
            Editar seu Perfil
          </button>
        )}
      </footer>
    </aside>
  );
}
