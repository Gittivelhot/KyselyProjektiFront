import PollList from './components/PollList';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';



import './App.css';
function App() {
  return (
    <div className="App">
      <Box sx={{ flexGrow: 1 }}>

        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Kyselyt
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
      <PollList />
    </div>
  );
}

export default App;
