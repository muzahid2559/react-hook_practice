import React, {useState} from 'react';

const Test = props  => {
    const testState = useState("");
    // console.log(testState);
    // console.log(testState[0]);
    // console.log(testState[1]);
    if(testState[0] === "") {
        testState[1]("muzahid");
    }

    return (
        <div>
            <h3>{testState[0]}</h3>
        </div>
    );
};

export default Test;