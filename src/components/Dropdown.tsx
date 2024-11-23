import React, { useState } from "react";
import Display from "../assets/icons_FEtask/Display.svg"
import Down from "../assets/icons_FEtask/Down.svg"

const DropdownMenu: React.FC = () => {
    const [grouping, setGrouping] = useState("Status");
    const [ordering, setOrdering] = useState("Priority");

    return (
        <div className="dropdown">
            <button className="dropdown-button"><img src={Display} alt="icon" height={20} width={20}/>Display <img
                src={Down} alt="icon" height={20} width={20}/></button>
            <div className="dropdown-content">
            <div className="dropdown-item">
                    <label htmlFor="grouping" className="dropdown-label">
                        Grouping
                    </label>
                    <select
                        id="grouping"
                        className="dropdown-select"
                        value={grouping}
                        onChange={(e) => setGrouping(e.target.value)}
                    >
                        <option value="Status">Status</option>
                        <option value="Date">Date</option>
                    </select>
                </div>
                <div className="dropdown-item">
                    <label htmlFor="ordering" className="dropdown-label">
                        Ordering
                    </label>
                    <select
                        id="ordering"
                        className="dropdown-select"
                        value={ordering}
                        onChange={(e) => setOrdering(e.target.value)}
                    >
                        <option value="Priority">Priority</option>
                        <option value="Name">Name</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default DropdownMenu;
