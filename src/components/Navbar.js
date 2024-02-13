// Navbar.js
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
    Icon
} from '@chakra-ui/react';
import { SearchIcon, BellIcon, ArrowDownIcon } from '@chakra-ui/icons';
import { BsArrowDown } from 'react-icons/bs';
import logo from "../assets/images/logo.png";

const Navbar = () => {
    const NotificationCount = 6;
    return (
        <Flex direction="row" align="center">
            {/* Logo */}
            <Box
                height="65px"
                color="white"
                fontWeight="bold"
                width="250px"
                marginRight="60px"
                marginLeft="50px"
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

                <InputGroup width="35%" marginStart="10px" backgroundColor="white" borderRadius="40px">
                    <Input
                        placeholder="Search..."
                        pr="4.5rem"
                        color="gray"
                        marginLeft="5px"
                        borderRadius="40px"
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
                <Flex align="center" ml="4px">
                    {/* Notification icon */}
                    <Box position="relative" mr="4" >
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

                    {/* Avatar and Name */}
                    <Flex align="center">
                        <Avatar size="sm" src="url_to_avatar_image.jpg" mr="2" />
                        <Flex flexDirection="column">
                            <Text fontSize="sm" color="#434343">Moni Roy</Text>
                            <Text fontSize="sm" color="#434343">Admin</Text>
                        </Flex>

                    </Flex>

                    {/* Down button */}
                    <Button
                        mt="2"
                        colorScheme="whiteAlpha"
                        backgroundColor="#181818"
                        borderRadius="50%" 
                        border="1px solid #434343"
                        color="#434343"
                        width="1.0rem" 
                        height="2rem" 
                    >
                        <Icon as={ArrowDownIcon} boxSize="0.9rem" />
                    </Button>

                </Flex>
            </Flex>
        </Flex>
    );
}

export default Navbar;
