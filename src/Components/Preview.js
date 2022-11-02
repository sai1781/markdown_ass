import ReactMarkdown from 'react-markdown'


// import {render}from "react-dom"

const Preview = ({ childvalue }) => {
    console.log(childvalue);

    return (
        <div className="output same">
            <h1> Output <hr /> </h1>

            <p className='output_textarea textarea' type="text" >
                <ReactMarkdown >

                    {childvalue}

                </ReactMarkdown>

            </p>
        </div>

    )
}

export default Preview;