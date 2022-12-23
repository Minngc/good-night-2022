import React from "react";
import style from "./index.module.scss";

type cardConponentsProps<T> = {
  children: React.FC<T>;
  aguments?: T;
  title?: string;
};

function cardConponents<T>(props: cardConponentsProps<T>): React.FC {
  const Children = props.children;
  const title = props.title;
  return () => {
    return (
      <>
        <div className={style.title}>{title ?? ""}</div>
        <div className={style["wish-card"]}>
          <Children {...(props.aguments as T)} as T />
        </div>
      </>
    );
  };
}

export default cardConponents;
