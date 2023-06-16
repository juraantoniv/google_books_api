import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useDispatch} from "react-redux";
import {pagesAddAC} from "../redusers/bookReduser";

export default function BasicSelect() {
    const [age, setAge] = React.useState('');

    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
        dispatch(pagesAddAC(+event.target.value))
    };

    return (
        <Box sx={{ minWidth: 120, marginTop:16,marginLeft:73 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Books</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Books"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}