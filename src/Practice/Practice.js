import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function Practice() {
//#region Effect 예제
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  }
  const onChange = (event) => {
    setKeyword(event.target.value);
  }

/*
  useEffect() 는 두가지 인자를 받는다.
    1. EffectCallback
      첫번재 인자는 한번만 실행되기 원하는 코드
    2. DependencyList. 
      [] 에 넣은 인자가 변할때 코드가 실행되도록 할 수 있음
  useEffect() 는 코드가 한번만 실행되거나 특정 키워드가 변경될때만 실행되도록 해준다.

  이를 이용해 검색을 할 때 원하는 부분만 변경되도록 할 수 있을것 같다.
*/
  // console.log("i run all the time");
  
  useEffect(() => {
    console.log("Call the API")
  }, []);

  useEffect(()=> {
    if (keyword !== "" && keyword.length > 4) {
      console.log("Search for.. ", keyword);
  }}, [keyword]);

  useEffect(() => {
    console.log("i run when 'counter' changes");
  }, [counter]);

  useEffect( () => {
    console.log("i run when 'keyword' & 'counter' change");
  }, [keyword, counter]);
  //#endregion

//#region Cleanup 예제
  const [showing, setShowing] = useState(false);
  const onClickShowing = () => setShowing((prev) => !prev);

  function Hello() {
      /*
      아래 같은 함수를 Cleanup 함수라 한다.
      해당 함수를 통해 컴포넌트가 사라질때 분석결과를 보내거나 콘솔에 출력하는등
      행동을 할 수 있다.

      useEffect( () => {
        console.log("hello");
        return () => console.log("bye");
      }, []);
      */
    function destroyedFn() {
      console.log("destroyed :(");
    }
    function createdFn() {
      console.log("created :)");
      return destroyedFn;
      // 함수를 리턴하는 것으로 Cleanup 함수를 쓸 수 있다.
      // 이런 코드(Cleanup)를 많이 작성하진 않는다.
    }
    useEffect(createdFn, []);

    return <h1>Hello</h1>
  }

  //#endregion

  return (
    <div>
      <h1 className={styles.title}>Welcome back to react!!!</h1>
      <Button text="hello"/>
      <hr/>
      
      <input 
        value={keyword} 
        onChange={onChange} 
        type="text" 
        placeholder="Search here..."
      />
      <p>{counter}</p>
      <button onClick={onClick}>click me</button>
      <hr/>

      <button onClick={onClickShowing}> {showing ? "Hide" : "Show"}</button>
      {showing ? <Hello/> : null}
    </div>
  );
}

export default Practice;
