import React, {useState} from "react"
import Header from "./components/Header";
import Dialog from "./components/Dialog";
import Sender from "./components/Sender";

const App = () => {
    const [message, addMessage] = useState(null);

    return (
        <div className="container">
            <Header />
            <Dialog newMessage={message} />
            <Sender onAddMessage={addMessage} />
        </div>
    );
};

export default App;
