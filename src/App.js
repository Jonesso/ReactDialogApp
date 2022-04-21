import React from "react"
import Header from "./components/Header";
import Dialog from "./components/Dialog";
import Sender from "./components/Sender";

const App = () => {
    return (
        <div className="container">
            <Header />
            <Dialog />
            <Sender />
        </div>
    );
};

export default App;
