import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { storeData } from "../redux/actions/actions";

const Company = () => {
    

    const dispatch = useDispatch();
    useEffect(() => {

        

        fetch("https://employee-s.herokuapp.com/employee")
            .then((res) => res.json())

            .then((res) => dispatch(storeData(res)))
            .catch((err) => console.log(err))
    })

    const data = useSelector((state) => state.data)



    return (
        <>
            <select>
                <option>Companies Dropdown </option>
                {
                    data.map((data) => (<option title={data.id}>{data.company}</option>))
                }
            </select>
            
            <button>ADD A NEW COMPANY</button>
        </>

    )
}

export default Company;