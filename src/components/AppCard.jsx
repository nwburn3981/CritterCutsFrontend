import React from 'react';

const dateVal = (val) => {
    return `${val[0]} / ${val[1]} / ${val[2]}`
}

const timeVal = (val) => {
    return `${val[0]}:${val[1]}0`
}

const AppCard = ({ app }) => {
    return (
        <tr key={app.index}>
            <td>{
                dateVal(app.appointment_date)
            }
            </td>
            <td>{
                timeVal(app.appointment_time)
            }
            </td>
            <td>{app.appointment_service}</td>
            <td>{app.appointment_caretaker}</td>
            <td>${app.appointment_price}</td>
        </tr>
    );
};

export default AppCard;