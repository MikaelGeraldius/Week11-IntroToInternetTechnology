import React from "react";
import { useState } from "react";

function BlueFunction(){
    const [isblue, setIsBlue] = useState(false);

    return (
        <>
            {blue ? (
                <h1 className="text-blue-600">Hello World</h1>
            ) : (
                <h1>Hello World</h1>
            )}
            <button onClick={() => setIsBlue(!isblue)}>
                Toggle Blue text
            </button>
        </>
    )
}