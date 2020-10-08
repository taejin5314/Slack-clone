import React from 'react';
import './Sidebar.css';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import CreateIcon from '@material-ui/icons/Create';
import SidebarOption from './sidebarOption/SidebarOption';
import CommentIcon from '@material-ui/icons/Comment';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__header">
                <div className="sidebar__info">
                    <h2>Slack Clone</h2>
                    <h3>
                        <FiberManualRecordIcon />
                        Taejin Jung
                    </h3>
                </div>
                <CreateIcon />
            </div>

            <SidebarOption Icon={CommentIcon} title="Threads" />
        </div>
    )
}

export default Sidebar
