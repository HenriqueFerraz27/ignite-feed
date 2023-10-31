import { Avatar } from "../index";
import styles from "./styles.module.css";

export const Post = () => {
  return (
    <section className={styles.post}>
      <header>
        <div className={styles["avatar-infos"]}>
          <Avatar
            src="https://github.com/HenriqueFerraz27.png"
            alt="Author Avatar"
          />

          <div className={styles["avatar-infos__infos"]}>
            <strong>Henrique Ferraz</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title="31 de Outubro às 15:38" dateTime="2023-10-31">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.post__content}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita vero
        debitis repellendus repudiandae quibusdam ex quis nobis atque eaque hic
        dolorum sit tempora, rem sed praesentium quisquam accusamus iure
        eveniet.
      </div>

      <form className={styles["post__comment-form"]}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Escreva um comentário..." />

        <button type="submit">Comentar</button>
      </form>
    </section>
  );
};
