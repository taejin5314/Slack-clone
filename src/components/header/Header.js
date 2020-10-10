import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import { useStateValue } from '../../StateProvider';
import './Header.css';

function Header() {
    const [{ user }] = useStateValue();

    return (
        <div className="header">
            <div className="header__left">
                {/* Avatars for logged in user */}
                <Avatar
                    className="header__avatar"
                    alt={user?.displayName}
                    src={user?.photoURL}
                />
                {/* Time Icon */}
                <AccessTimeIcon />
            </div>
            <div className="header__search">
                {/* Search Icon */}
                <SearchIcon />
                {/* Input */}
                <input type="text" placeholder="Search Slack Clone" />
            </div>
            <div className="header__right">
                {/* Help Icon */}
                <HelpOutlineIcon />
            </div>
        </div>
    )
}

export default Header
