import React from 'react';
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { AllUsers } from './component/AllUsers';
import { AgeCounter } from './component/AgeCounter';
function App() {
    return (
        <>
        <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography component="div" >
        <AllUsers />
            <AgeCounter />
        </Typography>
      </Container>
    </React.Fragment>
            
        </>
    );
}
export default App;
