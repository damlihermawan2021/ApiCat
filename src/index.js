import './index.css';

import App from "./App"
import ReactDOM from "react-dom"
import { StrictMode } from "react/cjs/react.development";

const rootElement = document.getElementById("root");
ReactDOM.render(
    <StrictMode>
        <App />
    </StrictMode>,
    rootElement
)