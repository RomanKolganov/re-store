import React from 'react';
import {WithBookStoreService} from '../hoc'
import './app.css';
import bookStoreService from "../../services/bookStoreService";

const App = ({bookStoreService}) => {
    console.log(bookStoreService.getBooks());
    return <div>App</div>;
};

export default WithBookStoreService()(App);