import { useState } from "react"

export const useCounter = (initialValue = 1) => {

    const [counter, setCounter] = useState(initialValue);

    const increment = function(value = 1){
        setCounter(counter + value);
    }

    const decrement = function(value = 1){
        setCounter(counter - value);
    }

    const reset = function(){
        setCounter(initialValue);
    }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}
