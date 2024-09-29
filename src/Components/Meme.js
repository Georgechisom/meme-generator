import React, { useState } from "react";
import 'boxicons'
import "../styles/Meme.css";
import MemesData from "./MemesData";
import Count from "./Count";

export default function Meme() {
    // let url 

    // const urls = ['thing1', 'things2'];

    //const [isGoingout, setIsGoingout] = useState(["things1", "things2"])
    //const isGoingout = false
    // let answer = isGoingout ? "yes" : "No"
    //h1 onClick={changeMind}>{isGoingout ? "yes" : "no"}</h1>
    // function changeMind() {
    //     setIsGoingout(prevState => {
    //         return [...prevState, `Thing ${isGoingout.length + 1}`]
    //     })
    // }

    // const thingsAll = isGoingout.map(item => <p key={item}> {item}</p>)
    //<h1 onClick={changeMind}>{thingsAll}</h1>

    
    // let showUrl = pics.map(items => <p key={items}>{items}</p>)

    const [memeImage, setMemeImage] = useState("")

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://media.istockphoto.com/id/1256314624/photo/young-caucasian-woman-with-funny-unusual-popular-emotions-and-gestures-isolated-on-white.jpg?s=612x612&w=0&k=20&c=AuRXVeFpsw-cY7s7p88BzwMlYbZtM77SocptEaEfXOc="
    })

    const [memeDataArray, setmemeDataArray] = useState(MemesData)

    function getMemeImage() {
        const memesArray = memeDataArray.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url

        setMeme(prevMeme => ({...prevMeme, randomImage: url}))

        console.log(memeImage);
        
    }

    const [count, setCount] = React.useState(0);

    function addCount() {
        setCount(prevCount => prevCount + 1)
        console.log(count);
    };

    function subCount() {
        setCount(prevCount => prevCount - 1)
        console.log(count);
    };

    

    return (
        <main>
            <div className="form">
                <div className="form-label">
                    <label htmlFor="top-text" className="label-span"> Top Text </label>
                    <input id="top-text" type="text" className="form-input" placeholder="top text"/>
                </div>
                <div className="form-label">
                    <label htmlFor="bottom-text" className="label-span"> Bottom Text </label>
                    <input id="bottom-text" type="text" className="form-input" placeholder="bottom text"/>
                </div>
                
                <button 
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 
                    <span className="button-span">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" style={{ fill: "#ffffff", transform:";msFilter:;" }}><path d="M20 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V3a1 1 0 0 0-1-1zM9.503 5a1.503 1.503 0 1 1 0 3.006 1.503 1.503 0 0 1 0-3.006zM12 13H7l3-3 1.5 1.399L14.5 8l3.5 5h-6z"></path></svg>
                    </span>
                </button>
            </div>

            <img src={meme.randomImage} className="meme-image" />

            <div onClick={subCount}>click me</div>
            <Count number={count}/>
            <div onClick={addCount}>click me</div>

        </main>
    )
}
