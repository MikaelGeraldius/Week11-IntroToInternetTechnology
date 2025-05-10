import React from "react";
import { useState } from "react";
import { useReducer } from "react";

function reducer(state, action){
  let newCount;
  switch(action.type){
    case "update-input":
      return {...state, input: action.payload.value};
    case "increment":
      newCount = state.count + 1;
      return{
        ...state,
        count: newCount,
        blueText: newCount >= 10
      };
    case "decrement":
      newCount = state.count - 1;
      return{
        ...state,
        count: newCount,
        blueText: newCount >= 10
      }
    case "toggle-blue":
      return{...state, blueText: !state.blueText};
    default:
      return state;
  }
}

function Counter(){
    const [state, dispatch] = useReducer(reducer, {
        input: '',
        count: 0,
        blueText: false
    });

    return(
        <>
            <h1 className='m-5'>Use Reducer</h1>
            <input
              className='border-1 text-2xl p-1 m-5'
              type="text" value={state.input}
              onChange={(e) => dispatch({
                type: "update-input",
                payload: {value: e.target.value}
              })}
            />
            <br/>
            <button className='mx-3' onClick={() => dispatch({type: "increment"})}>+</button>
            <button className='mx-3' onClick={() => dispatch({type: "decrement"})}>-</button>
            <button className='mx-3' onClick={() => dispatch({type: "toggle-blue"})}>Toggle Blue Text</button>
            <div style={{color: state.blueText && "blue"}} className='m-10'>
              <h2 className='text-3xl'>Count: {state.count}</h2>
              <h2 className='text-3xl'>Input: {state.input}</h2>
            </div>
        </>
    )
}

export default Counter