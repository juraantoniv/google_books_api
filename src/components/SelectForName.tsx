import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useDispatch} from "react-redux";
import {pagesAddAC, searchAC} from "../redusers/bookReduser";

export default function SelectForName() {
    const [value, setAge] = React.useState('');

    const dispatch = useDispatch();

    const handleChange = (event: SelectChangeEvent) => {
        dispatch(searchAC(event.target.value))
    };

    return (
        <Box sx={{ width:190,height:10, marginTop:1,marginLeft:1,fontSize:'10px' }}>
            <FormControl>
                <InputLabel id="demo-simple-select-label">Search</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Search"
                    onChange={handleChange}
                    size={'small'}
                    sx={{width:100,marginTop:0.5}}
                >
                    <MenuItem value={'title'}>ByName</MenuItem>
                    <MenuItem value={'inauthor'}>ByAuthor</MenuItem>

                </Select>
            </FormControl>
        </Box>
    );
}