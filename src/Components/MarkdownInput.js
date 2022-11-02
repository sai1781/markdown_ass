import { useState } from 'react';

const MarkdownInput = ({getvalue}) => {
    const [value1, setValue1] = useState("# markdown compiler");
    const value = e => {
        const value = e.target.value;
        console.log(value);
        setValue1(value);
        getvalue(value1);
    }

    return (
        <div className="input same">
            <h1> Input <hr /> </h1>
            <textarea  className="input_textarea textarea"  onKeyUp={value} >{value1}</textarea>
            
                
           
        </div>
    )
}

export default MarkdownInput;