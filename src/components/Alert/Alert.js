import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import Filter from './Filter'

const Alert = () => {
    return (
        <Flex
            marginTop="10px"
            bg="#181818"
            padding="40px"
            borderRadius="20px"
        >
            <Box>
                <Filter />
            </Box>
            <Box
            >

            </Box>
        </Flex>

    )
}

export default Alert