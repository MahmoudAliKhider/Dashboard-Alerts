import React, { useState } from 'react';
import { Box, Text, Flex, Icon } from '@chakra-ui/react';
import { AiOutlineBorder } from 'react-icons/ai';
import { BsFileEarmarkText } from "react-icons/bs";
import { FaDollarSign } from 'react-icons/fa';
import { VscGraph } from "react-icons/vsc";
import { BiCoinStack } from "react-icons/bi";

const AlertMessage = () => {
    const [expandedAlert, setExpandedAlert] = useState(null);

    const alerts = [
        {
            id: 1, content: 'Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%..',
            keywords: [
                { word: '$TSLA', icon: <Icon as={FaDollarSign} boxSize={6} /> },
                { word: '200Contracts', icon: <Icon as={BsFileEarmarkText} boxSize={6} /> },
                { word: '12.4%', icon: <Icon as={VscGraph} boxSize={6} /> },
                { word: 'high risk', icon: <Icon as={BiCoinStack} boxSize={6} /> },
            ]
        },
        {
            id: 2, content: 'X company released a short report on $XYZ, High IV option sales opps',
            keywords: [
                { word: '$TSLA', icon: <Icon as={FaDollarSign} boxSize={6} /> },
                { word: '200Contracts', icon: <Icon as={BsFileEarmarkText} boxSize={6} /> },
                { word: '12.4%', icon: <Icon as={VscGraph} boxSize={6} /> },
                { word: 'high risk', icon: <Icon as={BiCoinStack} boxSize={6} /> },
            ]
        },

        {
            id: 3, content: '$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.',
            keywords: [
                { word: '$TSLA', icon: <Icon as={FaDollarSign} boxSize={6} /> },
                { word: '200Contracts', icon: <Icon as={BsFileEarmarkText} boxSize={6} /> },
                { word: '12.4%', icon: <Icon as={VscGraph} boxSize={6} /> },
                { word: 'high risk', icon: <Icon as={BiCoinStack} boxSize={6} /> },
            ]
        },

        {
            id: 4, content: 'Someone Just bought xxxx contracts of $XYZ, this is notable because the relative volume on this options trade is X.X%..',
            keywords: [
                { word: '$TSLA', icon: <Icon as={FaDollarSign} boxSize={6} /> },
                { word: '200Contracts', icon: <Icon as={BsFileEarmarkText} boxSize={6} /> },
                { word: '12.4%', icon: <Icon as={VscGraph} boxSize={6} /> },
                { word: 'high risk', icon: <Icon as={BiCoinStack} boxSize={6} /> },
            ]
        },
        {
            id: 5, content: '$XYZ just announced an acquisition of $ABC at $X. This is an arbitrage opportunity, with the max gain being %X if the deal closes, but the possible risk is %Y  if the deal fails.',
            keywords: [
                { word: '$TSLA', icon: <Icon as={FaDollarSign} boxSize={6} /> },
                { word: '200Contracts', icon: <Icon as={BsFileEarmarkText} boxSize={6} /> },
                { word: '12.4%', icon: <Icon as={VscGraph} boxSize={6} /> },
                { word: 'high risk', icon: <Icon as={BiCoinStack} boxSize={6} /> },
            ]
        },

    ];

    const handleAlertClick = (id) => {
        setExpandedAlert((prev) => (prev === id ? null : id));
    };

    return (
        <Box p="4" bg="#212121" borderRadius="10px" color="white" width={{base:"380px", md:"100%"}} mt={{base:"5px" }}>
            {alerts.map((alert) => (
                <Flex
                    key={alert.id}
                    direction="column"
                    pt="3"
                    pb="3"
                    mb="1"
                    borderRadius="10px"
                    overflow="hidden"
                    bgGradient={expandedAlert === alert.id ? 'linear(to-r, #212123, #31364F)' : '#212121'}
                    _hover={{ cursor: 'pointer' }}
                    onClick={() => handleAlertClick(alert.id)}
                    border="1px solid white"
                    backgroundColor="#121213"
                    // #121213
                >    
                    <Flex
                        justify="space-around"
                        width="100%"
                        direction={{ base: 'column', md: 'row' }}
                        align={{ base: 'initial', md: 'center' }}
                        textAlign={{ base: 'center', md: 'initial' }}
                    >

                        {expandedAlert === alert.id &&
                            alert.keywords.map((keyword, index) => (
                                <Flex
                                    key={index}
                                    align="center"
                                    pl={index === alert.keywords.length - 1 ? '0' : '7'}
                                    flex="1"
                                    mr={index < alert.keywords.length - 1 ? '10' : '0'}
                                    borderRight={index < alert.keywords.length - 1 ? '1px solid white' : '0'}
                                >
                                    {keyword.icon}
                                    <Text ml="3" >{keyword.word}</Text>
                                </Flex>
                            ))
                        }
                    </Flex>

                    <Box>
                        <Text ml={{ base: '0', md: '9' }} mt="2" fontSize={{ base: '14px', md: '17px' }}>{alert.content}</Text>
                    </Box>

                </Flex>
            ))}
        </Box>
    );
}

export default AlertMessage