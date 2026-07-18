import Styles from "./number.module.css";
export function NumberBtn({ data, srNum, setCurrentQue, setVisit }) {
  const queIndex = srNum - 1;
  return (
    <div>
      <button
        onClick={() => {
          setCurrentQue(queIndex);
          setVisit((pre) => {
            if (pre[queIndex]) {
              //already visit
              return pre;
            } else {
              return [...pre, (pre[queIndex] = true)];
            }
          });
        }}
        className={Styles.qBtn}
      >
        {srNum}
      </button>
    </div>
  );
}
