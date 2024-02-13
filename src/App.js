import React from 'react';
import { ChakraProvider,CSSReset, extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#202020', 
        padding:"10px"
      },
    },
    
  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Navbar />
      {/* Your other components/content go here */}
    </ChakraProvider>
  );
}

export default App;
