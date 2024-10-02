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