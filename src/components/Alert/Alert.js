import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Filter from './Filter'
import AlertMessage from './AlertMessage'

const Alert = () => {
    return (
        <Flex
            marginTop="10px"
            bg="#181818"
            padding="30px"
            borderRadius="20px"
            direction={{base:"column", md:"row"}}
        >
            <Box >
                <Filter />
            </Box>
            <Box
                width="80%"
                ml="4"
            >
                <AlertMessage />
            </Box>
        </Flex>

    )
}

export default Alert