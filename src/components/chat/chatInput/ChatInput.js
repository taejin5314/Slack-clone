import React, { useState } from 'react';
import db from '../../../firebase';
import { useStateValue } from '../../../StateProvider';
import './ChatInput.css'
import firebase from 'firebase'

function ChatInput({ channelName, channelId }) {
    const [Input, setInput] = useState('');
    const [{ user }] = useStateValue();

    const sendMessage = e => {
        e.preventDefault();

        if (channelId) {
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: Input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
            })
        }

        setInput('');
    }
    return (
        <div className="chatInput">
            <form>
                <input
                    valule={Input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={`Message #${channelName?.toLowerCase()}`}
                />
                <button type="submit" onClick={sendMessage}>
                    SEND
                </button>
            </form>
        </div>
    )
}

export default ChatInput
