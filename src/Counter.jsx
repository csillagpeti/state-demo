import { useState } from "react"

export default function Counter(){
  const [count, setCount] = useState(0);
  return(
    <div>
      <p>Count: {count}</p>
      <button>+1</button>
    </div>
  )
}