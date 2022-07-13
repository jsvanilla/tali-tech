import WeatherCard from './components/organisms/weatherCard/WeatherCard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {colorCatalog} from './colors.js'

function App() {
  let name = "Jose"
  const theme = createTheme({
    palette: {
      primary: {  // city
        main: colorCatalog.primary 
      },
      secondary: {    // 36°
        main: colorCatalog.secondary  
      },
      terciary: {   // current weather
        main: colorCatalog.terciary         
      },
      primaryBackground: {
        main: colorCatalog.primaryBackground                  
      },
      sunYellow: {
        main:   colorCatalog.sunYellow                   
      },
      sunOrange: {
        main: colorCatalog.sunOrange             
      },
      iconsColor: {
        main:  colorCatalog.iconsColor                       
      },
      textSecondary: {
        main:  colorCatalog.textSecondary                       
      },
    },
  });
  return (
    <ThemeProvider theme={theme} style={{background: '#9ce2f7'}}>
      <h1 style={{color: colorCatalog.textSecondary, textAlign: 'center', alignItems: 'center' }}>Welcome {name}</h1>
      <WeatherCard/>
    </ThemeProvider>
  );
}

export default App;
