import React from 'react';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { fetchUserFromLocalStorage } from './redux/users/operations';
import { getUser } from "./redux/users/selectors";
import LandingPage from "./containers/LandingPage";
import LoginPage from "./containers/LoginPage";
import AccountPage from "./containers/AccountPage";
import Dashboard from "./containers/Dashboard";
import TransactionList from "./containers/TransactionList";
import './App.css';

function App() {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const user = getUser(selector);
    const userId = user ? user.id : null;
  
    useEffect(() => {
        dispatch(fetchUserFromLocalStorage());
    }, []);
  
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<LandingPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/myaccount" element={<AccountPage />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/transactionlist" element={<TransactionList />} />
            </Routes>
        </BrowserRouter>
    );
}


export default App;
