import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux"
import { useParams } from "react-router-dom";
import { storeData } from "../redux/actions/actions";


const EmployeeDetails = () => {

    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch(`https://employee-s.herokuapp.com/employee/${id}`)
        .then((res) => res.json())
       
        .then((res) => dispatch(storeData(res)))
        .catch((err) => console.log(err))


    });


    const data = useSelector((state) => state.data)
    return (
        <div>
            <h1>Employee Details</h1>
                <div key={data.id}>
                    
                    <p>Name: {data.name}</p>
                    <p>Company: {data.company}</p>
                    <p>Salary: {data.ctc}</p>
                    <p>Phone Number: {data.number}</p>
                    <p>Email: {data.email}</p>
                </div>
            
        </div>
    )
}

export default EmployeeDetails;