import { format, formatDistanceToNow } from "date-fns";
import { Avatar, Comment } from "../index";
import styles from "./styles.module.css";
import { ptBR } from "date-fns/locale";
import { useState } from "react";

export const Post = ({ author, content, published }) => {
  const [comments, setComments] = useState([]);
  const [newCommentText, setNewCommentText] = useState("");

  const handleCreateNewComment = (event) => {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (event) => {
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentDeleted) => {
    const commentsWithoutTheDeleted = comments.filter((comment) => {
      return comment !== commentDeleted;
    });

    setComments(commentsWithoutTheDeleted);
  };

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

      <form
        className={styles["post__comment-form"]}
        onSubmit={handleCreateNewComment}
      >
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Escreva um comentário..."
          value={newCommentText}
          onChange={handleNewCommentChange}
        />

        <button type="submit">Comentar</button>
      </form>

      <div className={styles["post__comments"]}>
        {comments.map((comment, index) => {
          return (
            <Comment
              key={index}
              content={comment}
              onDeleteComment={deleteComment}
            />
          );
        })}
      </div>
    </section>
  );
};
