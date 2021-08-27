import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import './App.css';
import {AppBar, Box, Container, IconButton, MenuItem, Toolbar, Typography} from "@material-ui/core";

const apiKey = '6433eed6642d7a2a635b5620b5e4d4a9';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    menuButton: {
        marginRight: theme.spacing(1)
    }
}));

function App() {
    const classes = useStyles();
    let [city, setCity] = useState('');
    let [data, setData] = useState({"qwe": '123', "ert": 'wort'});


    const getWeather = async () => {
        const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${apiKey}&units=metric`);
        debugger
        const data = await response.json();
        console.log(data);
    }

    const onCityChange = (event) => {
        setCity(event.target.value)
    }

    return (
        <AppBar position="fixed">
            <Container fixed>
                <Toolbar>
                    <Typography variant={"h4"}>Город: </Typography>
                    <TextField className={classes.root}
                               onChange={onCityChange}
                               value={city}
                               id="search"
                               type="search"
                               variant="outlined"/>
                    <IconButton color="inherit"
                                className={classes.menuButton}
                                onClick={getWeather}>
                        Получить погоду
                    </IconButton>
                </Toolbar>
                <Box>
                    <MenuItem >{data.qwe}</MenuItem >
                    <MenuItem >{data.ert}</MenuItem >
                </Box>
            </Container>
        </AppBar>
    );
}

export default App;
