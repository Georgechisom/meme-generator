{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}


// const [count, setCount] = React.useState(0);

// const [star, setStar] = React.useState({
//     isFavorite: true
// });

// function toggleFavorite() {
//     setStar(prevStar => ({...prevStar, isFavorite: !prevStar.isFavorite}))
//     console.log(count);
// };

// function addCount() {
//     setCount(prevCount => prevCount + 1)
//     console.log(count);
// };

// function subCount() {
//     setCount(prevCount => prevCount - 1)
//     console.log(count);
// };


// <div onClick={subCount}>click me</div>
//             <Count number={count}/>
//             <div onClick={addCount}>click me</div>

//             <Star isFilled={star.isFavorite} handleClick={toggleFavorite}/>


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

    const [topText, setTopText] = useState("")

    function handleTopChange(event) {
        setTopText(event.target.value)
        console.log( topText);
    }

    const [bottomText, setBottomText] = useState("")

    function handleBottomChange(event) {
        setTopText(event.target.value)
        console.log( topText);
    }

    <input 
        id="top-text" 
        type="text" 
        className="form-input" 
        placeholder="top text"
        onChange={handleTopChange}
    />

    // const [memeDataArray, setmemeDataArray] = useState(MemesData)

    // function getMemeImage() {
    //     const memesArray = memeDataArray.data.memes
    //     const randomNumber = Math.floor(Math.random() * memesArray.length)
    //     const url = memesArray[randomNumber].url

    //     setMeme(prevMeme => ({...prevMeme, randomImage: url}))

    //     console.log(memeImage);
    // }

    // function handleChange(event) {
    //     const {name, value} = event.target
    //     setMeme(prevState => ({...prevState, [name]: value}))
    //     console.log(meme);
    // }

    // function handleSubmit(event) {
    //     event.preventDefault()
    // };

api 
// https://swapi.dev/api/people/1
// https://api.imgflip.com/get_memes


const [starData, setStarData] = useState({})
const [count, setCount] = useState(1)


// useEffect(() => {
//     fetch(`https://api.imgflip.com/get_memes`)
//     .then(res => res.json())
//     .then(data => setStarData(data))
// }, [count])

{/*         <div>
                <pre>
                    {JSON.stringify(starData, null, 2)}
                </pre>
                <p>this is count {count}</p>
                <button onClick={() => setCount(prevCount => prevCount + 1)}>Add</button>
            </div> */}

// wrong => useEffect(async () => {
//     const res = await fetch(`https://api.imgflip.com/get_memes`)
//     const data = await res.json()
//     setMemeApiData(data.data.memes)
// }, [])

// https://v2.scrimba.com/learn-react-c0e/~032