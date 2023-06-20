// import { useEffect, useState } from "react";

// function Hello(){
//     // function destroyedFn(){
//     //     console.log("distroyed :( ")
//     // }
//     // function effectFn() {
//     //     console.log("created :) ");
//     //     //when it is distroy, run function
//     //     return destroyedFn;
//     // }
//     useEffect(()=>{
//         console.log("hi");
//         return ()=>{console.log("bye")}
//     })
    
//     return <h1>Hello</h1>;
// }
// function App() {
//     const [showing, setShowing] = useState(false);
//     const onClick = () => setShowing((prev)=> !prev);
//     return (
//       <div>
//         {showing? <Hello /> : null}
//         <button onClick={onClick}>{showing? "Hide" : "Show"}</button>
//       </div>
//     );
//   }
//   export default App;