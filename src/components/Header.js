import React from 'react';
import { Flex, Button } from '@chakra-ui/react';

const Header = () => {
  const buttonStyle = {
    borderRight: '1px solid white',
    paddingRight: '6%',
    borderRadius: '0px',
  };

  return (
    <Flex
      as="header"
      align="center"
      justify="space-between"
      padding={{ base: '1rem', md: '1.9rem' }} 
      borderRadius="20px"
      marginTop="25px"
      bg="#181818"
      flexWrap="wrap" 
    >
      <Button
        variant="ghost"
        color="#434343"
        fontSize={{ base: '20px', md: '30px' }} 
        fontWeight="bold"
        _hover={{ color: 'white' }}
        _active={{ color: 'white', borderColor: 'white' }}
        style={buttonStyle}
      >
        Trading
      </Button>
      <Button
        variant="ghost"
        color="#434343"
        fontSize={{ base: '20px', md: '30px' }}
        fontWeight="bold"
        _hover={{ color: 'white' }}
        _active={{ color: 'white', borderColor: 'white' }}
        style={buttonStyle}
      >
        Automation
      </Button>
      <Button
        variant="ghost"
        color="#434343"
        fontSize={{ base: '20px', md: '30px' }}
        fontWeight="bold"
        _hover={{ color: 'white' }}
        _active={{ color: 'white', borderColor: 'white' }}
        style={buttonStyle}
      >
        Portfolio
      </Button>
      <Button
        variant="ghost"
        color="white"
        fontSize={{ base: '20px', md: '30px' }}
        fontWeight="bold"
        _hover={{ color: 'white' }}
        _active={{ color: 'white', borderColor: 'white' }}
        style={buttonStyle}
      >
        Alerts
      </Button>
      <Button
        variant="ghost"
        color="#434343"
        fontSize={{ base: '20px', md: '30px' }}
        fontWeight="bold"
        _hover={{ color: 'white' }}
        _active={{ color: 'white', borderColor: 'white' }}
      >
        Training
      </Button>
    </Flex>
  );
};

export default Header;
