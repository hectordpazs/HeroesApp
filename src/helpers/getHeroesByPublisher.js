import { heroes } from "../data/heroes"

export const getHeroesByPublisher = (publisher)=>{
    const validPublisher = ['Marvel Comics' , 'DC Comics'];

    if(validPublisher.includes(publisher)){
        const heroesPublisher = heroes.filter(h=> h.publisher===publisher);
        return heroesPublisher
    }else{
        throw new Error(`Publisher ${publisher} no es correcto`)
    }

    
}