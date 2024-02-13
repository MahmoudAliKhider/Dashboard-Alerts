import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Header from './components/Header';
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#202020',
        padding: "10px"
      },
    },

  },
});

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Navbar />
      <Header />
    </ChakraProvider>
  );
}

export default App;
