import React from 'react';
import { Link } from 'react-router-dom';

export const HeroCard = ({id, superhero,alter_ego ,first_appearance ,characters, clasi='card col-xs-12 col-md-4 animate__animated animate__tada mb-1'}, img='') => {

    
    return (
        
        
        <div className={clasi}>
        <img src={`./assets/Heroes/${id}.jpg`} className="card-img-top" alt={superhero}/>
        <div className="card-body row">
            <h5 className="card-title col-12 text-black">{superhero}</h5>
            <p className="card-text col-12">{alter_ego}</p>
            {(characters!==alter_ego)&&<p className="card-text col-12">{characters}</p> }
            <p className='card-text'><small className='text-muted col-12'>{first_appearance}</small></p>
            <Link to={`/hero/${id}`} className='btn btn-primary col-12'>
                ViewDetails...
            </Link>

        </div>
        </div>
    )
}
