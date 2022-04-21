import React, { useState } from "react";
import "./styles.css";
import PropTypes from "prop-types";

const Sender = ({ onAddMessage }) => {
    const [value, setValue] = useState("");

    const onChange = (event) => setValue(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();

        onAddMessage({
            id: Date.now(),
            avatar:
                "https://sun9-58.userapi.com/c836638/v836638514/867c/SPMigNB8gw0.jpg",
            message: value,
            date: new Date().toISOString(),
            is: "my",
            status: "sent",
        });
        setValue("");
    };

    return (
        <form className="sender" onSubmit={onSubmit}>
            <input
                placeholder="Enter your message..."
                value={value}
                onChange={onChange}
                required
            />
            <button>Send</button>
        </form>
    );
};

Sender.propTypes = {
    onAddMessage: PropTypes.func.isRequired,
};

export default Sender;
