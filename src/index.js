import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from "react-router-dom";
import App from './components/app/App';
import ErrorBoundary from "./components/errorBoundry";
import BookStoreService from "./services/bookStoreService";
import {BookStoreServiceProvider} from "./components/bookStoreServiceContext";
import store from "./store";

const bookStoreService = new BookStoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
        <BookStoreServiceProvider value={bookStoreService}>
            <Router>
                <App/>
            </Router>
        </BookStoreServiceProvider>
    </ErrorBoundary>
  </Provider>,
  document.getElementById('root')
);
