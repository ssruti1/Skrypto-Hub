import { AppBar, Toolbar, Typography, Container, Select, MenuItem, createTheme, ThemeProvider } from '@mui/material'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext';
import AuthModal from './Authentication/AuthModal';
import UserSidebar from './Authentication/UserSideBar';
import { PiWalletBold } from 'react-icons/pi'

const Header = () => {

  const navigate = useNavigate();

  const { currency, setCurrency, user } = CryptoState();  

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff", 
      },
      type: "dark",
    },
  });

  return (

    <ThemeProvider theme={darkTheme}>

      <AppBar color='transparent' position='static'>
        <Container>
          <Toolbar>
            <Typography onClick={() => navigate("/")} class="logo" variant="h3">SKRYPTO HUB</Typography>
            <Select variant='standard' style={{
              width: 100,
              height: 40,
              marginRight: 15,
              color: 'white',
            }} value={currency} onChange={(e) => setCurrency(e.target.value)}>
              <MenuItem value={"INR"}>INR</MenuItem>
              <MenuItem value={"USD"}>USD</MenuItem>            
            </Select>

            {user? <UserSidebar/>:<AuthModal /> }
            <h2><a href="https://skrypto-etherium-transfer.netlify.app/"><PiWalletBold class="link"/></a></h2>
            

          </Toolbar>
        </Container>
      </AppBar>

    </ThemeProvider>
  )
}

export default Header