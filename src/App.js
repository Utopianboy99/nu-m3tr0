import './App.css'
import React from 'react'
import {Grid, Buttons, Typograpghy, Box} from '@mui/material'
import Navigation from '../src/components/navigation/navigation'

function App() {
  return (
    <div className='App'>
      <Box>
        <Navigation />
      </Box>
    </div>
  );
}

export default App;
