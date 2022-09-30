import {CssBaseline,ThemeProvider, createTheme, IconButton } from "@mui/material";
import React, { useState} from "react";
import Brightness7 from '@mui/icons-material/Brightness7'
import Brightness4 from '@mui/icons-material/Brightness4'
import { orange,lightBlue,deepOrange,deepPurple, grey } from "@mui/material/colors";

export default function Theme() {
  const [darkMode, setDarkMode] = useState(false);
  const mainPrimaryColor = darkMode ? orange[500] : lightBlue[500];
  const mainSecondaryColor = darkMode ? deepOrange[900] : deepPurple[500];
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      primary: {
        main: mainPrimaryColor
      },
      secondary: {
        main: mainSecondaryColor
      }
    },
    })
    //changes color of the icon based on if dark, or light is clicked


    const handleThemeChange = () => {
      setDarkMode(!darkMode);
    };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <IconButton  
         id='dark-mode'
         color='secondary'
         checked={darkMode} onClick={handleThemeChange}>
          {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4/>}
        </IconButton>
    </ThemeProvider>
  );
}
