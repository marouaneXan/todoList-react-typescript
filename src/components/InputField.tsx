import React from "react";
import "./styles.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}
const InputField = ({ todo, setTodo }: Props) => {
  return (
    <form className="input">
      <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="Enter a Task" className="input__box" />
      <button type="submit" className="input_submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
