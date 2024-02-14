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
import { SearchIcon, BellIcon } from '@chakra-ui/icons';
import { CgChevronDown } from "react-icons/cg";
import logo from "../assets/images/logo.png";
import avatar from "../assets/images/avatar.jpg";
const Navbar = () => {
    const NotificationCount = 6;

    return (
        <Flex direction={{ base: 'row', md: 'row' }} align="center" height="40px">
            <Box
                height={{ base: '50px', md: '40px' }}
                color="white"
                fontWeight="bold"
                width={{ base: '100px', md: '200px' }}
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
                borderRadius="17px"
                height="45px"
                p="5px"
            >
                <InputGroup
                    width={{ base: '90%', md: '35%' }}
                    marginStart={{ base: '0', md: '10px' }}
                    backgroundColor="white"
                    borderRadius="40px"
                    height="30px"

                >
                    <Input
                        placeholder="Search..."
                        pr="4.5rem"
                        color="gray"
                        marginLeft="5px"
                        borderRadius="40px"
                        width="100%"
                        height="30px"
                    />
                    <InputLeftElement pointerEvents="none">
                        <IconButton
                            icon={<SearchIcon color="gray" />}
                            aria-label="Search"
                            ml="-3rem"
                            mb="6px"
                            marginLeft="4px"
                            borderRadius="40px"
                            height="26px"

                        />
                    </InputLeftElement>
                </InputGroup>

                {/* Right side */}
                <Flex align="center" p="10px">

                    <Box position="relative" mr="4">
                        <IconButton
                            icon={<BellIcon color="#554DB7" boxSize="1.2rem" />}
                            colorScheme="#181818"
                            aria-label="Notification"
                        />
                        <Badge
                            colorScheme='green'
                            borderRadius="40px"
                            position="absolute"
                            top="1"
                            right="1"
                            fontSize="0.7rem"
                        >
                            {NotificationCount}
                        </Badge>
                    </Box>

                    {/* Avatar and Texts */}
                    <Flex align="center" mr="4">
                        <Avatar size="sm" src={avatar} mb="2" mt="2" mr="3" />
                        <Flex flexDirection="column">
                            <Text fontSize="sm" color="#434343">Moni Roy</Text>
                            <Text fontSize="sm" color="#434343">Admin</Text>
                        </Flex>
                    </Flex>

                    <Button
                        colorScheme="whiteAlpha"
                        borderRadius="60%"
                        border="1px double #434343"
                        color="#434343"
                        bg="#181818"
                        p="0px"
                        size="sm"

                    >
                        <Icon as={CgChevronDown} boxSize={4} />
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default Navbar;
