import Styles from "./Button.module.css";
export function Button({ text, onClick, type = "button", isDisabled = false }) {
    const btn = {
        backgroundColor: isDisabled && "#b0afab"
    }
  return (
    <button
      className={Styles.btn}
      type={type}
      onClick={onClick}
      disabled={isDisabled}
      style = {btn}
    >
      {text}
    </button>
  );
}
