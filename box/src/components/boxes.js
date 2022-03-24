import React, {useState} from 'react';



const Boxform = (props)  => {
    const [box, boxsetter] = useState('');
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [color, setcolor] = useState('');
    const [colors, setcolors] = useState([]);


    const handleBox = (e) => {
        boxsetter(e.target.value)
        setcolor(e.target.value)
        // console.log(e.target.value)
        // console.log({box})
    }
    
    const addBox = (e) => {
        e.preventDefault();
        setHasBeenSubmitted(true);
        setcolors([...colors,color])
        console.log(colors)
    }
    
    const boxer = () => {
        if (hasBeenSubmitted === true){
            return(
                <div style={boxStyle({box})}>
                    <p>{color}</p>
                </div>)
        }
        else{return('')}            
    }
    
    const boxStyle = (e) => ({
        backgroundColor: {e},
        height: '200px',
        width: '200px',
    });
    
    return(
        <form onSubmit={ addBox }>
            <label for="favcolor">Select your favorite color:</label>
            <br/>
            <input type="color" id="favcolor" name="favcolor" onChange={handleBox}/>
            <input type="submit" value="Add" />
            <div>{boxer()}</div>
            <div>
                <div>
                    {colors.map((color) =>{
                        return <div style={{backgroundColor:`${color}` , height: '200px', width: '200px' }}></div>
                        })}
                </div>
            </div>
    </form>
    
    )
}

export default Boxform;

