import React from 'react'
import { useState } from 'react'
import { useReducer } from 'react';
import Class from './UI/class';

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

function Home({user}){
    const [textAreaValue, setTextAreaValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [state, dispatch] = useReducer(reducer, {
      input: '',
      count: 0,
      blueText: false
    });

    return (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Hello I'm {user.username}, I'm {user.age} and my hobby is {user.hobby}! {selectValue && "I like " + selectValue + "!"} {textAreaValue && "I Typed : " + textAreaValue}</h1>
          <div className='flex flex-col w-100 items-center justify-center justify-self-center'>
            <select
              onChange={(e) => setSelectValue(e.target.value)}
              value={selectValue} className='text-3xl border-1 rounded-2xl my-5 bg-[#242424]'
            >
              <option value='Tung Tung Tung Sahur'>Tung Tung Tung Sahur</option>
              <option value='Bombardino Coccodrillo'>Bombardino Coccodrillo</option>
              <option value='Tralalero Tralala'>Tralalero Tralala</option>
            </select>

            <textarea
              cols='50' rows='10' value={textAreaValue} className='border-1 rounded-2xl p-1 mb-10'
              onChange={(e) => setTextAreaValue(e.target.value)}
            />
          </div>

          <hr/>

          <h1 className='m-5'>Use Reducer</h1>
          <div>
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
            <hr/>
            <h1 className='m-5'>Class</h1>
            <Class />
          </div>
        </div>
    );
}
export default Home;