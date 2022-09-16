import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import PetApi from "../Api-calls/PetApi";

const Pets = () => {

  const [results, setResults] = useState([])
  const { id, role } = useSelector((store) => store.userArr)

  useEffect(() => {
    PetApi.getPets(setResults, role)
  }, [])

  return (
    <div>
      <h1 className="display-1">Pets</h1>
      <table className='table' style={{ width: "70%", margin: "auto" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Breed</th>
            <th>Age</th>
            <th>Vaccinated</th>
          </tr>
        </thead>

        <tbody>
          {
            results.map((result, i) => (
              <tr key={i}>
                <td>{result.pet_name}</td>
                <td>{result.pet_type}</td>
                <td>{result.pet_breed}</td>
                <td>{result.pet_age}</td>
                <td>{result.pet_is_vaccinated === true ? `Yes` : `No`}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Pets;
