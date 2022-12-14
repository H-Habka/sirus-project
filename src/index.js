import reactDom from "react-dom"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import { Provider } from "react-redux"
import React from "react"
import { persistor, store } from "./redux/store"
import { PersistGate } from "redux-persist/integration/react"
import reportWebVitals from './reportWebVitals';

reactDom.render(
    <Provider store={store}>
        <BrowserRouter>
            <PersistGate loading={null} persistor={persistor}>
                    <App>
                    </App>
            </PersistGate>
        </BrowserRouter>

    </Provider>

    , document.getElementById("root"))

reportWebVitals();
