import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router ,Route, Routes } from 'react-router-dom';
import { login } from '../actions/auth';
import { LoginScreen } from '../components/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    
    const {user, logged} = useSelector(state => state.auth);
    
    const dispatch = useDispatch();

    const [checking, setChecking] = useState(true);

    useEffect(() => {
        
        if(localStorage.getItem('user')){
            dispatch(login(user));
        }

        setChecking(false)
    
    }, [dispatch, user])

    if(checking){
        return(<h1>Wait...</h1>)
    }

    return (
        <Router>
         
            <Routes>
                <Route 
                    path='/login' 
                    element={
                        <PublicRoute isAuth={logged}>
                            <LoginScreen/>
                        </PublicRoute>
                    }
                />
                <Route 
                    path='/*' 
                    element={
                        <PrivateRoute isAuth={logged}>
                            <DashboardRoutes />
                        </PrivateRoute>
                    }
                />
            </Routes>
          
        </Router>
      );
}

