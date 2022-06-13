import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { storeData } from "../redux/actions/actions";
import { Link } from "react-router-dom";
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react'

const Employee = () => {
    
    
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
            
                <TableContainer>
                    <Table variant='simple'>

                        <Thead>
                            <Tr>
                                <Th>id</Th>
                                <Th>EMPLOYEE NAME</Th>
                                <Th>COMPANY NAME</Th>
                                <Th isNumeric>CTC</Th>
                                <Th>VIEW DETAILS</Th>
                                <Th>DELETE</Th>
                                <Th>EDIT</Th>

                            </Tr>
                        </Thead>
                        {data.map(data => (
                        <Tbody>

                            <Tr>
                                <Td>{data.id}</Td>
                                <Td>{data.name}</Td>
                                <Td>{data.company}</Td>
                                <Td>{data.ctc}</Td>
                                <Td><Link to={`/employee/${data.id}`}>View</Link></Td>
                                <Td>Delete</Td>
                                <Td>Edit</Td>
                            </Tr>

                        </Tbody>
                        ))
            }
                    </Table>
                </TableContainer>
            
            <Button colorScheme='teal' size='lg' >
                Add Employee
            </Button>
        </>

    )
}

export default Employee;