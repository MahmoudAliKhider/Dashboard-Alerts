import React from 'react';
import { ChakraProvider, CSSReset, extendTheme } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Alert from './components/Alert/Alert';
const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: '#202020',
        padding: "7px"
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

      <Alert />
    </ChakraProvider>
  );
}

export default App;
