import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button} from '@mui/material';

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography variant="h5" component="div">
                  Answering and poll results
                </Typography>
              <Button href="http://localhost:8080/" variant="contained" color="success">Admin Login</Button>
            </Toolbar>
          </AppBar>
      </Box>
  )
}
