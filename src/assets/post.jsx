import React, { useState } from "react";
import RefreshIcon from '@mui/icons-material/Refresh';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import CheckIcon from '@mui/icons-material/Check';

import backImage from "../images/old-paper.png"


const Post = (props) => {
    const [copied, setCopied] = useState(false);
    const copyToclipboard = () => {
        const textToCopy = `${props.text1} \n ${props.text2}`;
        navigator.clipboard.writeText(textToCopy).then(()=>{
            setCopied(true);
            setTimeout(()=>
                setCopied(false), 2000);
        }).catch(err => {
            console.error("Failed to copy text", err);
        });
    };
    return (
        <>
            <div className="post w-full md:w-2/3 lg:w-1/2 my-32 mx-auto">
                <h1 className="text-center font-bold text-xl md:text-2xl lg:text-5xl m-4">{props.text1}
                    <br/><br/>{props.text2}
                </h1>
                <h2 className="mx-auto text-sm md:text-lg lg:text-3xl">{props.author}</h2>
               
            </div>

            <div className="btn w-full md:w-2/3 lg:w-1/2">
                <button id="copy" onClick={copyToclipboard}>{copied ? <CheckIcon/> :<ContentCopyIcon/>}</button>
                <button id="next" onClick={function (){
                        props.onNext();
                    }}><RefreshIcon fontSize="large"/></button>
                
            </div>
                

        </>
        
    )
}

export default Post;