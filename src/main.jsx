import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import {BrowserRouter} from 'react-router-dom';
import {UserAuthProvider} from './providers/UserAuthContext.jsx';
import {ModalProvider} from "./providers/ModalContext.jsx";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <UserAuthProvider>
                <ModalProvider>
                    <App/>
                </ModalProvider>
            </UserAuthProvider>
        </BrowserRouter>

    </React.StrictMode>,
)
