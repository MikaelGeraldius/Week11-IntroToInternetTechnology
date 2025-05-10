import React from 'react'
import { useState } from 'react'

function Inputs({user}){
    const [textAreaValue, setTextAreaValue] = useState('');
    const [selectValue, setSelectValue] = useState('');

    return (
        <>
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
        </>
    )

}

export default Inputs