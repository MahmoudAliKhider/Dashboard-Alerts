import React from 'react';
import {
    InputGroup,
    InputLeftElement,
    Flex,
    Input,
    IconButton,
    Avatar,
    Text,
    Button,
    Box,
    Image,
    Center,
    Badge,
    Icon,
} from '@chakra-ui/react';
import { SearchIcon, BellIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { CgChevronDown } from "react-icons/cg";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.jpg";
const Navbar = () => {
    const NotificationCount = 6;

    return (
        <Flex direction={{ base: 'row', md: 'row' }} align="center">
            <Box
                height={{ base: '50px', md: '65px' }}
                color="white"
                fontWeight="bold"
                width={{ base: '100px', md: '250px' }}
                marginBottom={{ base: '10px', md: '0' }}
                marginRight={{ base: "6px", md: "50px" }}
                marginLeft={{ base: "6px", md: "50px" }}
            >
                <Center height="100%">
                    <Image src={logo} alt="Logo" height="100%" />
                </Center>
            </Box>

            <Flex
                as="nav"
                align="center"
                justify="space-between"
                padding="0.7rem"
                bg="#181818"
                color="white"
                width="100%"
                borderRadius="20px"
                height="65px"
            >
                <InputGroup
                    width={{ base: '90%', md: '35%' }}
                    marginStart={{ base: '0', md: '10px' }}
                    backgroundColor="white"
                    borderRadius="40px"
                >
                    <Input
                        placeholder="Search..."
                        pr="4.5rem"
                        color="gray"
                        marginLeft="5px"
                        borderRadius="40px"
                        width="100%"
                    />
                    <InputLeftElement pointerEvents="none">
                        <IconButton
                            icon={<SearchIcon color="gray" />}
                            aria-label="Search"
                            ml="-3rem"
                            marginLeft="4px"
                            borderRadius="40px"
                        />
                    </InputLeftElement>
                </InputGroup>

                {/* Right side */}
                <Flex align="center">
                    {/* Notification icon */}
                    <Box position="relative" mr="4">
                        <IconButton
                            icon={<BellIcon color="#554DB7" boxSize="1.5rem" />}
                            colorScheme="#181818"
                            aria-label="Notification"
                        />
                        <Badge
                            colorScheme='green'
                            borderRadius="20px"
                            position="absolute"
                            top="-1"
                            right="-1"
                            fontSize="0.8rem"
                        >
                            {NotificationCount}
                        </Badge>
                    </Box>

                    {/* Avatar and Texts */}
                    <Flex align="center" mr="4">
                        <Avatar size="sm" src={avatar} mb="1" mr="4" />
                        <Flex flexDirection="column">
                            <Text fontSize="sm" color="#434343">Moni Roy</Text>
                            <Text fontSize="sm" color="#434343">Admin</Text>
                        </Flex>
                    </Flex>

                    <Button
                        mt="2"
                        colorScheme="whiteAlpha"
                        borderRadius="60%"
                        border="1px double #434343"
                        color="#434343"
                        bg="#181818"
                        p="10px"
                    >
                        <Icon as={CgChevronDown}  />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;
