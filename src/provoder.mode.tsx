import {ChangeEvent, useState} from 'react';
import './App.css';

import { ThemeProvider, createTheme } from '@mui/material/styles'
import { Switch } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline'
import Main from "./main";
function AppMode() {
    const [theme, settheme] = useState(false);
    const darkTheme = createTheme({
        palette: {
            mode: theme ? 'dark' : 'light',
        },
    });
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        settheme(event.target.checked);
    }
    return (
        <div className="App">
            <ThemeProvider theme={darkTheme}>
                <CssBaseline />
                <Main></Main>
                <label>Dark Mode</label>
                <Switch
                    checked={theme}
                    color='success'
                    onChange={handleChange} />
            </ThemeProvider>

        </div>
    );
}

export default AppMode;