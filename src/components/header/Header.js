import { Avatar } from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import SearchIcon from '@material-ui/icons/Search';
import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                {/* Avatars for logged in user */}
                <Avatar
                    className="header__avatar"
                    alt="Taejin Jung"
                    src=""
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
