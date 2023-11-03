import styles from "./styles.module.css";
import { Avatar } from "../../index";
import * as Icon from "phosphor-react";

export const Comment = ({ content }) => {
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

            <button>
              <Icon.Trash />
            </button>
          </header>

          <div className={styles.comment__content}>{content}</div>
        </div>

        <button className={styles.comment__feedback}>
          <Icon.ThumbsUp /> Aplaudir • 33
        </button>
      </div>
    </div>
  );
};
