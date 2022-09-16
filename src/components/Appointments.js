import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AppointmentApi from "../Api-calls/AppointmentApi";
import AppCard from "./AppCard";

const Appointments = () => {

    const [results, setResult] = useState([])
    const { id, role } = useSelector((store) => store.userArr)

    useEffect(() => {
        AppointmentApi.getAppointments(setResult, role, id)
    }, [])



    return (
        <div>
            <h1 className="display-1">Appointments</h1>
            <table className='table' style={{ width: "70%", margin: "auto" }}>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Time</th>
                        <th>Service</th>
                        <th>Care Taker</th>
                        <th>Price</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        results.map((app, i) => {
                            return <AppCard app={app} index={i} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Appointments;
