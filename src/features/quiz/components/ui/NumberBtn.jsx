import Styles from "./number.module.css";
export function NumberBtn({
  data,
  srNum,
  currentQue,
  setCurrentQue,
  visit,
  setVisit,
  queResponse,
}) {
  const queIndex = srNum - 1;
  function btnBG() {
    if (queResponse[queIndex] && visit[queIndex]) {
      return "#008000";
    } else if (visit[queIndex]) {
      return "#FFA500";
    } else {
      return "";
    }
  }
  const btn = {
    border: currentQue === queIndex ? "2px solid red" : "1px solid gray",
    backgroundColor: btnBG(),
  };
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
        style={btn}
      >
        {srNum}
      </button>
    </div>
  );
}
