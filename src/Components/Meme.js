import React from "react";
import 'boxicons'
import "../styles/Meme.css";

export default function Meme() {
    return (
        <main>
            <form className="form">
                <input type="text" className="form-input" placeholder="top text"/>
                <input type="text" className="form-input" placeholder="bottom text"/>
                <button className="form-button" >
                    Get a new meme image 
                    <box-icon type='solid' name='photo-album' color="#A626D3"></box-icon>
                </button>
            </form>
        </main>
    )
}
