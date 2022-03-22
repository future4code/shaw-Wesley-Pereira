import React from 'react';
import './CardPequeno.css'

function CardPequeno (props) {
    return (
    <section className="smallcard-container">
        <p>{'Email: ' + props.email }</p>
    
        <p>{'Endereço: ' + props.endereco}</p> 
         
        
    </section>
       
    )
  

}

export default CardPequeno





