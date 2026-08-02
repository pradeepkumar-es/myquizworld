import Styles from "./number.module.css";

// Number buttons act like a mini question navigator inside the quiz sidebar.
// They visually show whether a question is unanswered, visited, or answered correctly.
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
    // Green indicates answered correctly.
    if (queResponse[queIndex] && visit[queIndex]) {
      return "#008000";
    }

    // Orange indicates visited but not answered yet.
    if (visit[queIndex]) {
      return "#FFA500";
    }

    // Empty means not visited yet.
    return "";
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

          // Mark the selected question as visited when the user clicks it.
          setVisit((pre) => {
            if (pre[queIndex]) {
              return pre;
            }
            const next = [...pre];
            next[queIndex] = true;
            return next;
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

