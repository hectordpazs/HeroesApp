import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { useForm } from '../hooks/useForm'
import { getHeroByName } from '../helpers/getHeroByName';
import { HeroCard } from './HeroCard';

export const FightScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const {q='', her=''} = queryString.parse(location.search);

    const [values, handleInputChange] = useForm({searchHero1:q,searchHero2:her});

    const {searchHero1, searchHero2} = values;
    
    const hero1 = useMemo( () => getHeroByName(q), [q] );
    const hero2 = useMemo( () => getHeroByName(her), [her] );


    const handleSubmit = (e)=>{
        e.preventDefault();
        navigate(`?q=${searchHero1}&her=${searchHero2}`);
    }

    const handleClick = ()=>{
        navigate(`/heroes/${q}/${her}`)
    }

    return (
        <div className="container mt-5 row">
           
            <h1>Fights</h1>
            <hr />

            <form>
            <input 
                name='searchHero1' 
                onChange={handleInputChange}
                className="form-control m-1" 
                list="datalistOptions" 
                id="exampleDataList" 
                placeholder="Type to search..."
                autoComplete='off'
            />

            <h3 className='mt-3 text-center'>VS</h3>

            <input 
                name='searchHero2' 
                onChange={handleInputChange}
                className="form-control m-1" 
                list="datalistOptions" 
                id="exampleDataList" 
                placeholder="Type to search..."
                autoComplete='off'
            />
                <button onClick={handleSubmit} className='btn btn-primary w-50 mt-5 mb-5'>Search Fight</button>
                {
                    (hero1.length>0&&hero2.length>0)&&
                    <button className={'btn btn-primary w-50 mt-5 mb-5'} onClick={handleClick}>View Fight</button>
                }
            </form>

            {
                (q===''||her==='')
                ?(<div className="alert alert-info"> Search a hero </div>)
                :(hero1.length===0||hero2.length===0)&& 
                <div className="alert alert-danger"> No Results in: {q} VS {her} </div>
            }

            {   
                
                (hero1.length>0&&hero2.length>0)&&hero1.map(hero => (
                    
                    <HeroCard
                        key={ hero.id }
                        { ...hero }
                    />
                ))

            }


            {
               (hero1.length>0&&hero2.length>0)&& hero2.map(hero => (
                    <HeroCard
                        key={ hero.id }                       
                        { ...hero }
                    />
                ))
            }

           


        </div>
    )
}
