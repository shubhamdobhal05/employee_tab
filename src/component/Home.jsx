import { Box, Button } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
            <Box display="flex" alignItems='center'>
                <Link to="/company">
                    <Button>COMPANIES</Button>
                </Link>
                <Link to="/employee">
                    <Button>EMPLOYEES</Button>
                </Link>
            </Box>

        </>
    )
}

export default Home;