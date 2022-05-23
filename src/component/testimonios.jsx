import React from "react";
import './styleSheets/testimonios.css'

function Testimonio(props){
    return(
        <div className='content-testimonio'>
            <img className='img-testimonio' src={require(`../img/diego${props.imagen}.JPG`)} alt='Diego en Kiruna'/>
            <div className='content-text-testimonio'>
                <p className='title-testimonio'><strong>{props.name}</strong> in Kiruna</p> 
                <p className='sub-title-testimonio'>{props.subtitle}</p> 
                <p className='text-testimonio'>"{props.text}"</p>
            </div>
        </div>
  )
}
export default Testimonio;