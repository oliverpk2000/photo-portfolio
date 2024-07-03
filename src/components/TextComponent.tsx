import { useState } from "react";

function TextComponent(props: { contentFilePath: string, pictureFilePath: string }) {
    const [content, setContent] = useState<string>("");

    const fetchContent = async () => {
        try{
            const response = await fetch(props.contentFilePath);
            const text = await response.text();
            setContent(text);
        }catch(error){
            console.error(`couldn't find file: ${props.contentFilePath}`);
        }
    }

    fetchContent();

    return <>
        <div className="flex-container">
            <img src={props.pictureFilePath}></img>
            <p>{content}</p>
        </div>
    </>;
}

export default TextComponent;