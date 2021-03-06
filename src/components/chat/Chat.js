import React, { useEffect, useState } from 'react';
import './Chat.css';
import { useParams } from 'react-router-dom';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from '../../firebase';
import Message from './message/Message';
import ChatInput from './chatInput/ChatInput';

function Chat() {
    const { roomId } = useParams();
    const [RoomDetails, setRoomDetails] = useState(null);
    const [RoomMessages, setRoomMessages] = useState([])

    useEffect(() => {
        if (roomId) {
            db.collection('rooms').doc(roomId)
                .onSnapshot(snapshot => (
                    setRoomDetails(snapshot.data())
                ))
        }

        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .orderBy('timestamp', 'asc')
            .onSnapshot(snapshot => (
                setRoomMessages(
                    snapshot.docs.map(doc => doc.data())
                ))
            )
    }, [roomId]);

    console.log(RoomDetails);
    console.log(RoomMessages);
    console.log(roomId)

    return (
        <div className="chat">
            <div className="chat__header">
                <div className="chat__headerLeft">
                    <h4 className="chat__channelName">
                        <strong>#{RoomDetails?.name}</strong>
                        <StarBorderIcon />
                    </h4>
                </div>

                <div className="chat__headerRight">
                    <p>
                        <InfoOutlinedIcon /> Details
                    </p>
                </div>
            </div>

            <div className="chat__messages">
                {/* <Message ... /> */}
                {RoomMessages.map(({ message, timestamp, user, userImage }) => (
                    <Message
                        message={message}
                        timestamp={timestamp}
                        user={user}
                        userImage={userImage}
                    />
                ))}
            </div>
            <ChatInput channelName={RoomDetails?.name} channelId={roomId} />
        </div>

    )
}

export default Chat
