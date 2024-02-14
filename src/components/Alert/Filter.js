import React, { useState } from 'react';
import {
    Box, Text,
    Select, Button,
    InputGroup, Flex,
    Input, InputRightAddon,
    Tooltip, InputLeftAddon
} from '@chakra-ui/react';
import { FiLayers, FiChevronDown } from "react-icons/fi";
import { FiCheckCircle } from "react-icons/fi";

const Filter = () => {

    const [customText, setCustomText] = useState('');
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleInputChange = (event) => {
        setCustomText(event.target.value);
        setShowOptions(true);
    };

    const handleOptionClick = (option) => {
        setCustomText(option.label);
        setSelectedOption(option.label)
    };

    const options = [
        { label: 'Low-risk', value: 'low-Risk', icon: <FiCheckCircle /> },
        { label: 'Mid-risk', value: 'mid-Risk', icon: <FiCheckCircle /> },
        { label: 'High-risk', value: 'high-Risk', icon: <FiCheckCircle /> },
        { label: 'Option text here', value: 'option-Text', icon: <FiCheckCircle /> },
    ];


    return (
        <Box p="7" bg="#212121" borderRadius="10px" color="white" width="290px">

            <Text fontSize="28px" fontWeight="bold" textAlign="center" mb="10px">
                Filters
            </Text>

            <Flex direction="column">
                <Text marginBottom="4px" color="#F0F0F0">
                    Industry
                </Text>

                <InputGroup flexDirection="row">

                    <InputLeftAddon backgroundColor="#212121"
                        borderRight="none"
                    >
                        <Tooltip label="Choose from options" >
                            <FiLayers />
                        </Tooltip>
                    </InputLeftAddon>
                    <Select placeholder="Select category" color="#A8A8A8" textAlign="left"
                        borderLeft="none"
                        borderTopLeftRadius="0px"
                        borderBottomLeftRadius="0px"
                        textDecoration="none"
                    >
                        <option selected value="healthCore">Health Core</option>
                        <option value="technology">Technology</option>
                        <option value="finance">Finance</option>
                    </Select>


                </InputGroup>
                <Text color="#434343" mt="5px" mp="4px">
                    Choose something.
                </Text>
            </Flex>

            <Flex direction="column">
                <Text mt="15" mb="3" color="#F0F0F0">Market Cap</Text>

                <InputGroup flexDirection="row">
                    <InputLeftAddon backgroundColor="#212121"
                        borderRight="none"
                    >
                        <Tooltip label="Choose from options" >
                            <FiLayers />
                        </Tooltip>
                    </InputLeftAddon>

                    <Select placeholder="Select Market" color="#A8A8A8" textAlign="left"
                        borderLeft="none"
                        borderTopLeftRadius="0px"
                        borderBottomLeftRadius="0px"
                        textDecoration="none"
                    >
                        <option selected value="healthCore">Large-Cap</option>
                        <option value="technology">Small-Cap</option>
                        <option value="finance">Min-Cap</option>
                    </Select>


                </InputGroup>
                <Text color="#434343" mt="5px" mp="3px">
                    Press Apply to see changes.
                </Text>
            </Flex>

            <Flex direction="column">
                <Text mt="15" mb="3" color="#F0F0F0">
                    Risk
                </Text>

                <InputGroup>

                    <InputLeftAddon backgroundColor="#212121"
                        borderRight="1p solid #212121"
                    >
                        <Tooltip label="Choose from options" >
                            <FiLayers />
                        </Tooltip>
                    </InputLeftAddon>

                    <Input
                        value={customText}
                        onChange={handleInputChange}
                        placeholder="Inseart text here"
                        color="#A8A8A8"
                        mb="2"
                        borderRadius="5px"
                        paddingLeft="10px"
                        borderLeft="1px solid #212121"
                        borderRight="none"
                    />

                    <InputRightAddon backgroundColor="#212121" borderLeft="none" cursor="pointer">
                        <Tooltip label="Show options" >
                            <Button
                                variant="link"
                                color="#A8A8A8"
                                onClick={() => setShowOptions(!showOptions)}
                            >
                                <FiChevronDown style={{ transform: showOptions ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                            </Button>
                        </Tooltip>
                    </InputRightAddon>

                </InputGroup>

                {showOptions && (
                    <Flex direction="column" mt="2">
                        {options.map((option) => (
                            <Button
                                key={option.value}
                                variant="ghost"
                                color={selectedOption === option.label ? 'blue.500' : '#A8A8A8'}
                                onClick={() => handleOptionClick(option)}
                                leftIcon={option.icon}
                                justifyContent="flex-start"
                                textAlign="left"
                            >
                                {option.label}
                            </Button>
                        ))}
                    </Flex>
                )}
            </Flex>

            <Flex mt="20px" mb="7px">
                <Button bg='#554DB7' size='md' width="100%" color="white" height="60px" fontSize="20px" fontWeight="bold" textAlign="center">
                    Apply Filters
                </Button>
            </Flex>
        </Box>
    );
};

export default Filter;
