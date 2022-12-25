import React from 'react';
import style from './index.module.scss';
interface submitOnClick{
  ():void
}
type SubmitProps = {
  onClick: submitOnClick
}
function Submit(props:SubmitProps) {
  return (
    <div className={style.roundButton} onClick={props.onClick}>
      <svg width="27" height="25" viewBox="0 0 27 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.87498 0.875C1.53241 0.875 1.20387 1.01109 0.961633 1.25332C0.719399 1.49555 0.583313 1.8241 0.583313 2.16667V9.39445C0.583313 10.0584 1.08628 10.6127 1.74632 10.6785L19.9583 12.5L1.74632 14.3215C1.08628 14.3873 0.583313 14.9416 0.583313 15.6055V22.8333C0.583313 23.1759 0.719399 23.5044 0.961633 23.7467C1.20387 23.9889 1.53241 24.125 1.87498 24.125C2.12158 24.1256 2.3632 24.0555 2.57127 23.9232L2.57379 23.9207L25.5639 13.7185L25.5614 13.7135C25.8115 13.6237 26.0277 13.459 26.1808 13.2419C26.3338 13.0247 26.4162 12.7657 26.4166 12.5C26.4162 12.2343 26.3338 11.9753 26.1808 11.7581C26.0277 11.541 25.8115 11.3763 25.5614 11.2865L25.5639 11.2815L2.55613 1.07178C2.35188 0.943934 2.11594 0.875774 1.87498 0.875Z" fill="black" />
      </svg>
      发射
    </div>
  );
}

export default Submit;