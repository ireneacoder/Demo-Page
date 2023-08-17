

import './card.css'
import { HiArrowLongRight } from "react-icons/hi2";
import { ImBullhorn } from "react-icons/im";

export default function Card(props){
    return(
        <>
            <div className='colored'>
                <div className='icon'> <ImBullhorn size={24} color='#512E70'/> </div>
                <p className='text'> {props.text} </p>
                <p className='desc'>{ props.description }</p>
                <button className='button'> View Demo <div className='gap'></div> <HiArrowLongRight size={21}/> </button>
            </div>
        
        </>
    )
}