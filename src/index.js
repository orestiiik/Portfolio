import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import ThemeContext from "./context/ThemeContext";
import MainLayout from "./components/layout/MainLayout";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ThemeContext.Provider value={{
                primaryColor: '#000000',
                secondaryColor: '#FBCB83',
                backgroundColor: '#D3D3D3',
                textColor: '#FFFFFF',
                elevationColor: '#424242'
            }}>
                <MainLayout>
                    <App/>
                </MainLayout>
            </ThemeContext.Provider>
    </BrowserRouter>
</React.StrictMode>
)
;
reportWebVitals();
