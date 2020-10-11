import { Button } from '@material-ui/core';
import React from 'react';
import './ChatInput.css'

function ChatInput({ channelName, channelId }) {
    const sendMessage = e => {
        e.preventDefault();
    }
    return (
        <div className="chatInput">
            <form>
                <input placeholder={`Message ${channelName?.toLowerCase()}`} />
                <button type="submit" onClick={sendMessage}></button>
            </form>
        </div>
    )
}

export default ChatInput
