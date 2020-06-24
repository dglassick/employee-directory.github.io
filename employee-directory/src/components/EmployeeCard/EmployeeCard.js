import React from "react";
import faker from "faker";

const EmployeeCard = (props) => {
    return(
        <div className ="teal card">
            <div className="content">
                <img alt="employee image" className="right floated mini ui image" />
                <div className="header">{props.name}</div>
            </div>
        </div>
    )
}

export default EmployeeCard;