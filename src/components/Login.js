import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addJwt } from '../features/jwtSlice';
import { setID, setRole } from '../features/userSlice'

const URI = 'http://3.218.164.16:8080/'

const Login = () => {

    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const dispatch = useDispatch();
    const { token } = useSelector((store) => store.jwt);
    const { userID, userRole } = useSelector((store) => store.userArr);

    const credentials = {
        "username": user,
        "password": pass
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(URI + "authenticate", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Access_Control-Allow-Origin": "*"
            },
            body: JSON.stringify(credentials)
        })
            .then((response) => response.json())
            .then(data => dispatch(addJwt("Bearer " + data.jwt)))

        fetch(URI + "api/users/details", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": token,
                "Access_Control-Allow-Origin": "*"
            },
            body: JSON.stringify(credentials)
        })
            .then((response) => response.json())
            .then(data => {

                let id = data.customer_id === null ? data.employee_id : data.customer_id;
                let role = data.role;
                console.log(data);
                console.log("ID is: " + id);
                console.log("Role is: " + role);

                dispatch(setID(id));
                dispatch(setRole(role.substr(5)));
            });
    }

    useState(() => {

    }, [token])

    return (
        <div className='mb-3 form'>
            <form onSubmit={handleSubmit} >
                <label className='form-label'>Username: </label>
                <input
                    className='form-control'
                    type='text'
                    value={user}
                    placeholder='Username'
                    onChange={(e) => setUser(e.target.value)}
                />
                <br />
                <label className='form-label'>Password: </label>
                <input
                    className='form-control'
                    type='password'
                    value={pass}
                    placeholder='Username'
                    onChange={(e) => setPass(e.target.value)}
                />
                <br />
                <input className='btn btn-light' type='submit' value='Submit' />
            </form>
        </div>
    );
};

export default Login;