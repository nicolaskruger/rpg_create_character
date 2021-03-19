import React from 'react';
import './App.css';
import {FormCharacter} from './components/form/FormCharacter'
import { ThemeProvider } from '@material-ui/core';
import { theme } from './components/theme/Theme';
import ScopedCssBaseline from '@material-ui/core/ScopedCssBaseline';

function App() {
  return (
      <ThemeProvider theme={theme} >
              <ScopedCssBaseline className = "App">

                  <FormCharacter/>

              </ScopedCssBaseline>
      </ThemeProvider>
    
  );
}

export default App;
