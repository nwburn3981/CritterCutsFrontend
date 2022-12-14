const URI = 'http://localhost:8080/';

const AppointmentApi = {
    getAppointments: (setResult, role, id) => {
        if (role === 'ADMIN') {
            fetch(URI + `api/appointments`)
                .then(response => response.json())
                .then(data => {
                    setResult(data)
                    console.log(data);
                })
        }
        // else {
        //     console.log('USER');
        //     fetch(URI + `api/petInfo/pet_customerid/${id}`)
        //         .then(response => response.json())
        //         .then(data => {
        //             setResult(data)
        //             console.log(data);
        //         })
        // }
    }
}

export default AppointmentApi;