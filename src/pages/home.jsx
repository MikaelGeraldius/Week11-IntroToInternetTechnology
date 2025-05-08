import React from 'react'
import { useState } from 'react'

function Home({user}){
    return (
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Welcome, {user.username}!</h1>
        </div>
    );
}
export default Home;