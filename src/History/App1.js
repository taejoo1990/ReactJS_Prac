// import Button from "./Button";
// import styles from "./App.module.css";
// import { useEffect, useState } from "react";
// function App() {
//   const [counter, setCounter] = useState(0);
//   const [keyword, setKeyword] = useState("");
//   const onChange = (event) => setKeyword(event.target.value);
//   const onClick = () => setCounter((prev)=> prev + 1)
//   console.log("all Time")
  
//   //useEffect protect to run function when it is initialize.
//   useEffect(()=>{
//     console.log("I run only once")
//   }, []);
//   //wehn valiable change , run function
//   useEffect(()=>{
//     console.log("detect to change counter or keyword")
//   },[counter, keyword]);
  
//   return (
//     <div>
//       <input onChange={onChange} type="text" placeholder="search here..."></input>>
//       <h1 className={styles.title}>{counter}</h1>
//       <button onClick={onClick}>Click Me!</button>
//       <Button text={"its Button"}/>
//     </div>
//   );
// }
// export default App;
