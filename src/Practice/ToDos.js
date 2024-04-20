import { useState } from "react";

function ToDos() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();

    if (toDo === "") {
      return;
    }
    // 기존의 배열에 요소를 추가하는 경우 전개 연산자{...} 를 사용한다. 
    // [추가할 요소, ...기존 배열] or [...기존배열, 추가요소]
    setToDos((currentArray) => [...currentArray, toDo]);
    setToDo("");

    /*  
    modifier 함수를 쓸때 두가지 방법이 있다.
      1. 값을 직접 적어준다.
      2. 함수를 적는다. 함수의 인자에서 첫번째 요소는 현재 state를 보낸다.
         
    */
  };

  console.log(toDos);

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input 
          onChange={onChange} 
          value={toDo} 
          type="text" 
          placeholder="Write youru to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr/>
      {/* map 함수는 해당 배열의 요소에 하나씩 접근 가능하게 해준다. */}
      {toDos.map((item, index) => (
        <li key={index}>{item}</li> 
      ))}
    </div>
  )
}

export default ToDos;