import React, {useMemo} from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { getHeroByName } from '../helpers/getHeroByName'
import { WinnerHero } from './WinnerHero';


export const FightDetails = () => {

    const {q,her} = useParams()

    const hero1= useMemo(() => getHeroByName(q), [q])
    const hero2= useMemo(() => getHeroByName(her), [her])
    
    if(!hero1||!hero2){
        <Navigate to={'/'}/>
    }
    
    const [{
        power,
        astucia,
        inteligencia,
    }] = hero1;
    
    const [{
        power:power2,
        astucia:astucia2,
        inteligencia:inteligencia2,
    }] = hero2;

    const suma_hero1 = power+astucia+inteligencia;
    const suma_hero2 = power2+astucia2+inteligencia2;


    return (
        <div className='col'>
            <h1>FightDetails</h1>
            <hr />


            <h1 className='animate__animated animate__flash'>The Winner of the Battle is:</h1>

            
            
            {  

                (suma_hero1>=suma_hero2 && hero1.map(hero=><WinnerHero key={hero.id} {...hero}/>))
                ||hero2.map(hero=><WinnerHero key={hero.id} {...hero}/>)
            }
        </div>
    )
}
