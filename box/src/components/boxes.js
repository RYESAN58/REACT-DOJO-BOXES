import React, {useState} from 'react';



const Boxform = (props)  => {
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    const [color, setcolor] = useState('');
    const [colors, setcolors] = useState([]);
    const [heightOf, setHeight] = useState('');
    const [widthOf, setWidth] = useState('');
    const [style, setsyle] = useState({color:'', height:'', width: ''});
    const [styleOb, setOb] = useState([]);
    
    
    const addBox = (e) => {

        e.preventDefault();
        console.log(style)
        setOb([...styleOb, {
            height: style.height,
            color: style.color,
            width: style.width
        }])
        console.log('this is ',styleOb)
    }
    
    return(
        <form onSubmit={ addBox }>
            <label for="favcolor">Select your favorite color:</label>
            <br/>
            
            <input type="color" id="favcolor" name="favcolor" onChange={e => setsyle({...style , color: e.target.value})}
            value = {style.color}
            />
            
            <input type="number" id="favcolor" name="favcolor" onChange={e => setsyle({...style , height: e.target.value})}
            value = {style.height}
            />
            
            <input type="number" id="favcolor" name="favcolor" onChange={e => setsyle({...style , width: e.target.value})}
            value = {style.width}
            />
            
            <input type="submit" value="Add" />
            
            <div>
                <div>
                    {styleOb.map((obj) =>{
                        return <div style={{backgroundColor:`${obj.color}` , height: `${obj.height}px`, width: `${obj.width}px` }}></div>
                        })}
                </div>
            </div>
    </form>
    
    )
}

export default Boxform;
