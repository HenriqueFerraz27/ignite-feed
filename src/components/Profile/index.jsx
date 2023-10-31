import styles from "./styles.module.css";
import { Avatar } from "../index";
import * as Icon from "phosphor-react";

export const Profile = () => {
  return (
    <section className={styles.profile}>
      <img
        className={styles.profile__background}
        src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        alt="Profile Background"
      />

      <div className={styles["avatar-infos"]}>
        <Avatar
          src="https://github.com/HenriqueFerraz27.png"
          alt="Profile Avatar"
        />

        <div className={styles["avatar-infos__infos"]}>
          <strong>Henrique Ferraz</strong>
          <span>Web Developer</span>
        </div>
      </div>

      <footer>
        <a className={styles.profile__edit}>
          <Icon.PencilLine /> Editar seu perfil
        </a>
      </footer>
    </section>
  );
};