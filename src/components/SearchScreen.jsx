import React, { useMemo } from 'react';
import { getHeroByName } from '../helpers/getHeroByName';
import queryString from 'query-string';
import {useForm} from '../hooks/useForm';
import { useLocation, useNavigate } from 'react-router-dom';
import { HeroCard } from './HeroCard';


export const SearchScreen = () => {

    const location = useLocation();
    const navigate = useNavigate();

    const {q=''} = queryString.parse(location.search)

    const [value, handleInputChange] = useForm({searchText:q})

    const {searchText} = value;

    const heroesFileted = useMemo( () => getHeroByName(q), [q] );

    const handleSearch = (e)=>{
        e.preventDefault();
        navigate(`?q=${searchText}`);
    }

    return (
        <div className='container mt-5 row'>
            <form  >

            <label className="form-label">Search a Hero</label>
            <input 
                name='searchText' 
                onChange={handleInputChange} 
                className="form-control" 
                list="datalistOptions" 
                id="exampleDataList" 
                placeholder="Type to search..."
                autoComplete='off'
            />

            <button 
                className='btn btn-primary mt-2'
                onClick={handleSearch}
            >
                Search
            </button>
            </form>

            <h4 className='mt-5'>Results:</h4>
            <hr />

            {
                (q === '')
                ? <div className="alert alert-info"> Search a hero </div>
                : ( heroesFileted.length === 0 ) 
                && <div className="alert alert-danger"> No Results: { q } </div>
            }


            {
                heroesFileted.map(hero => (
                    <HeroCard
                        key={ hero.id }
                        { ...hero }
                    />
                ))
            }

        </div>
    )
}
