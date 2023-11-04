import styles from "./styles.module.css";
import { Avatar } from "../../index";
import * as Icon from "phosphor-react";
import { useState } from "react";

interface CommentProps {
  content: string;
  onDeleteComment: (commentDeleted: string) => void;
}

export const Comment = ({ content, onDeleteComment }: CommentProps) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLikeComment = () => {
    const newLikeCount = likeCount + 1;

    setLikeCount(newLikeCount);
  };

  return (
    <div className={styles.comment}>
      <Avatar
        withBorder={false}
        src="https://github.com/HenriqueFerraz27.png"
        alt="Comment Avatar"
      />

      <div className={styles.comment__container}>
        <div className={styles["comment__content-container"]}>
          <header>
            <div>
              <strong>
                <a>
                  Henrique Ferraz <span>(você)</span>
                </a>
              </strong>

              <time title="13 de Setembro às 15:37" dateTime="2023-09-13">
                Cerca de 2h
              </time>
            </div>

            <button onClick={() => onDeleteComment(content)}>
              <Icon.Trash />
            </button>
          </header>

          <div className={styles.comment__content}>{content}</div>
        </div>

        <button
          className={styles.comment__feedback}
          onClick={handleLikeComment}
        >
          <Icon.ThumbsUp /> Curtir • {likeCount}
        </button>
      </div>
    </div>
  );
};
