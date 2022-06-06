import { useState } from "react"

const Counter = ({initial, stock, title}) =>{
    const [count, setCount] = useState(initial);

    const decrement = () => setCount( count - 1);

    const increment =() =>{
        count < stock && setCount(count + 1); 
    }

    const reset = () =>{
        setCount(initial)
    }


    return (
        <>
           <button onClick={decrement}> - </button>
           <h2> {count}</h2>
           <button onClick={increment}> + </button>
           {/* <Button onClick={reset}>RESET</Button> */}
        </>
    )

    }
    export default Counter