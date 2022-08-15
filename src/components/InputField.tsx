import React,{useRef} from "react";
import "./styles.css";
interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd:(e:React.FormEvent)=>void
}
const InputField = ({ todo, setTodo,handleAdd }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <form className="input" onSubmit={(e)=>{handleAdd(e);inputRef.current?.blur()}}>
      <input ref={inputRef} value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="Enter a Task" className="input__box" />
      <button type="submit" className="input_submit">
        Add
      </button>
    </form>
  );
};

export default InputField;
