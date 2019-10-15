import React from 'react';
import {
  FaChevronDown,
  FaInbox,
  FaRegCalendar,
  FaRegCalendarAlt,
} from 'react-icons/fa';

const Sidebar = () => (
  <div className="sidebar" data-testid="sidebar">
    <ul className="sidebar__generic">
      <li>
        <span>
          <FaInbox />
        </span>
        <span>Inbox</span>
      </li>
      <li>
        <span>
          <FaRegCalendar />
        </span>
        <span>Today</span>
      </li>
      <li>
        <span>
          <FaRegCalendarAlt />
        </span>
        <span>Next 7 days</span>
      </li>
    </ul>
    <div className="sidebar__middle">
      <span>
        <FaChevronDown />
      </span>
      <h2>Projects</h2>
    </div>
    <ul className="sidebar__projects">
      <li>Projects will be here...</li>
    </ul>
    Add Project Component here!!!
  </div>
);

export default Sidebar;
