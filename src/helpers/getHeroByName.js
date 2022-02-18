import { heroes } from "../data/heroes"

export const getHeroByName = (nom)=>{

    if ( nom.length === 0 ) {
        return [];
    }

    return heroes.filter(hero=> hero.superhero.toLowerCase().includes(nom.toLowerCase()));

}