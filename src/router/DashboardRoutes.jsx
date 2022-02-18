import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { MarvelHeroes } from '../components/MarvelHeroes'
import {DcHeroes} from '../components/DcHeroes'
import { Navbar } from '../components/ui/Navbar'
import { HeroScreen } from '../components/HeroScreen'
import { SearchScreen } from '../components/SearchScreen'
import { FightDetails } from '../components/FightDetails'
import { FightScreen } from '../components/FightScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar/>
            <div className="container mt-2">
                <Routes>
                <Route path="/marvel" element={<MarvelHeroes/>}/>
                <Route path="/dc" element={<DcHeroes/>}/>
                <Route path="/hero/:heroeId" element={<HeroScreen/>}/>
                <Route path="/search" element={<SearchScreen/>}/>
                <Route path="/fight" element={<FightScreen/>}/>
                <Route path="/heroes/:q/:her" element={<FightDetails/>}/>
                <Route path="*" element={<Navigate to ="/marvel"/>}/>
                </Routes>
            </div>
        </>
    )
}
