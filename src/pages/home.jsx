import React from 'react'
import { useState } from 'react'
import Class from './UI/class';
import Counter from './UI/counter';
import Inputs from './UI/input';

function Home({user}){

    return (
        <div className="text-center">
          <Inputs user={user}/>
          <hr/>
          <Counter />
          <hr/>
          <Class />
        </div>
    );
}
export default Home;