import { format, formatDistanceToNow } from "date-fns";
import { Avatar, Comment } from "../index";
import styles from "./styles.module.css";
import { ptBR } from "date-fns/locale";

export const Post = ({ author, content, published }) => {
  const publishedDateFormatted = format(
    published,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBR,
    }
  );

  const publishedDateRelativeToNow = formatDistanceToNow(published, {
    locale: ptBR,
    addSuffix: true,
  });

  return (
    <section className={styles.post}>
      <header>
        <div className={styles["avatar-infos"]}>
          <Avatar src={author.avatarUrl} alt="Author Avatar" />

          <a className={styles["avatar-infos__infos"]}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </a>
        </div>

        <time title={publishedDateFormatted} dateTime={published.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.post__content}>{content}</div>

      <form className={styles["post__comment-form"]}>
        <strong>Deixe seu feedback</strong>

        <textarea placeholder="Escreva um comentário..." />

        <button type="submit">Comentar</button>
      </form>

      <div className="comments">
        <Comment />
      </div>
    </section>
  );
};
