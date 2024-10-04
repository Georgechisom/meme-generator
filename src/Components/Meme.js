import React, { useEffect, useState } from "react";
import 'boxicons'
import "../styles/Meme.css";
import '../styles/Header.css'

export default function Meme() {

    const [memeImage, setMemeImage] = useState("")

    const [meme, setMeme] = useState({
        topText: "",
        bottomText: "",
        randomImage: "https://media.istockphoto.com/id/1256314624/photo/young-caucasian-woman-with-funny-unusual-popular-emotions-and-gestures-isolated-on-white.jpg?s=612x612&w=0&k=20&c=AuRXVeFpsw-cY7s7p88BzwMlYbZtM77SocptEaEfXOc="
    })

    const [memeApiData, setMemeApiData] = useState([])

    useEffect(() => {
        async function BringMeme() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setMemeApiData(data.data.memes)
        }
        BringMeme()
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * memeApiData.length)
        const url = memeApiData[randomNumber].url

        setMeme(prevMeme => ({...prevMeme, randomImage: url}))

        // console.log(memeImage);
    }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevState => ({...prevState, [name]: value}))
        // console.log(meme);
    }

    function handleSubmit(event) {
        event.preventDefault()
    };

    // console.log(`${JSON.stringify(memeApiData, null, 2)}`);

    const myStyle = {
        backgroundImage: `url(${meme.randomImage})`,
    }


    

    return (
        <main>
            <form className="form" onSubmit={handleSubmit}>
                <div className="form-label">
                    <label htmlFor="top-text" className="label-span"> Top Text </label>
                    <input 
                        id="top-text" 
                        type="text" 
                        className="form-input" 
                        placeholder="You are not thinkng"
                        onChange={handleChange}
                        name="topText"
                        value={meme.topText}
                    />
                </div>
                <div className="form-label">
                    <label htmlFor="bottom-text" className="label-span"> Bottom Text </label>
                    <input 
                        id="bottom-text" 
                        type="text" 
                        className="form-input" 
                        placeholder="Start Thinking"
                        onChange={handleChange}
                        name="bottomText"
                        value={meme.bottomText}
                    />
                </div>
                
                <button 
                    className="form-button"
                    onClick={getMemeImage}
                >
                    <span className="button-span">
                        Get a new meme image 
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" style={{ fill: "#ffffff", transform:";msFilter:;" }}><path d="M20 2H6c-1.206 0-3 .799-3 3v14c0 2.201 1.794 3 3 3h15v-2H6.012C5.55 19.988 5 19.806 5 19s.55-.988 1.012-1H21V3a1 1 0 0 0-1-1zM9.503 5a1.503 1.503 0 1 1 0 3.006 1.503 1.503 0 0 1 0-3.006zM12 13H7l3-3 1.5 1.399L14.5 8l3.5 5h-6z"></path></svg>
                    </span>
                </button>
            </form>

            <div className="meme" style={myStyle}>
                <h2 className="meme-top-text">{meme.topText}</h2>
                <h2 className="meme-bottom-text">{meme.bottomText}</h2>
            </div>

        </main>
    )
}
