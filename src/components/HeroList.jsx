import React, { useMemo } from 'react'
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroesPublisher = useMemo(() => getHeroesByPublisher(publisher), [publisher])

    return (
        <div className='container row'>
            {
                heroesPublisher.map(hero=>(
                    <HeroCard
                        {...hero}
                        key={hero.id}
                    />
                ))
            }
        </div>
    )
}
