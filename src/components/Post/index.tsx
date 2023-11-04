import { format, formatDistanceToNow } from "date-fns";
import { Avatar, Comment } from "../index";
import styles from "./styles.module.css";
import { ptBR } from "date-fns/locale";
import { ChangeEvent, FormEvent, useState } from "react";

interface AuthorProps {
  name: string;
  role: string;
  avatarURL: string;
}

interface PostProps {
  author: AuthorProps;
  content: string;
  published: Date;
}

export const Post = ({ author, content, published }: PostProps) => {
  const [comments, setComments] = useState<string[]>([]);
  const [newCommentText, setNewCommentText] = useState<string>("");

  const handleCreateNewComment = (event: FormEvent) => {
    event.preventDefault();

    setComments([...comments, newCommentText]);
    setNewCommentText("");
  };

  const handleNewCommentChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setNewCommentText(event.target.value);
  };

  const deleteComment = (commentDeleted: string) => {
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
          <Avatar src={author.avatarURL} alt="Author Avatar" />

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

        <button type="submit" disabled={newCommentText.length === 0}>
          Comentar
        </button>
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
