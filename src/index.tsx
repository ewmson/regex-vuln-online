import React from "react";
import ReactDOM from "react-dom"
import './index.css';
import App from './App';
import {ApolloProvider} from "@apollo/client";
import {client} from "./client";

const root = document.getElementById("root") as HTMLElement;
ReactDOM.unstable_createRoot(root).render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>
);