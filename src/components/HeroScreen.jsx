import React, { useMemo } from 'react'
import { useNavigate, useParams, Navigate} from 'react-router-dom'
import { getHeroById } from '../helpers/getHeroById';

export const HeroScreen = () => {

    const {heroeId} = useParams();
    const navigate = useNavigate();

    const hero = useMemo(() => getHeroById(heroeId), [heroeId])

    const {id, superhero, publisher, alter_ego, first_appearance, characters,power,astucia,inteligencia} = hero

    if(!hero){
        return <Navigate to='/'/>
    }

    const handleReturn = ()=>{
        navigate(-1);
    }

    return (
       
        <div className="row mt-5">
            <div className="col-4">
                <img src={`../assets/Heroes/${id}.jpg`} alt="" className='img-thumbnail animate__animated animate__flash'/>                    
            </div>
            <div className="col-8">
                <h3> {superhero} </h3>
                <ul className='list-group list-group-flush'>
                    <li className='list-group-item'> <b>Alter Ego: </b> {alter_ego} </li>
                    <li className='list-group-item'> <b>Publisher: </b> {publisher} </li>
                    <li className='list-group-item'> <b>First Appereance: </b> {first_appearance} </li>
                    <li className='list-group-item'> <b>Power: </b> {power} </li>
                    <li className='list-group-item'> <b>Intelligence: </b> {inteligencia} </li>
                    <li className='list-group-item'> <b>Cunning: </b> {astucia} </li>

                </ul>
                <h5 className=''>Characters:</h5>
                <p className='char'>{characters}</p>

                <button className='btn btn-outline-info' onClick={handleReturn}>Return</button>
            </div>
        </div>

    )
}

