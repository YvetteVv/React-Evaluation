import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import {
    getListOfAgesOfUsersWithHandler,
    getHobbiesHandler,
} from '../../apis/APIs';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
}));

export function AgeCounter() {
    const [hobbiesList, setHobbiesList] = useState([]);
    const [ageCounter, setAgeCounter] = useState([]);
    const [hobby, setHobby] = useState('')
    useEffect(() => {
        getHobbiesHandler().then((data) => {
            setHobbiesList(data);
        });
    }, []);
    const handleChange = (event) => {
        const hobbyQuery = event.target.value
        setHobby(hobbyQuery)
        getListOfAgesOfUsersWithHandler(hobbyQuery).then((data)=>{
            setAgeCounter(data)
        })
      };

    const classes = useStyles();
    return (
        <>
            <h1>Age Demographic of Users with hobby</h1>
            <FormControl className={classes.formControl}>
                <InputLabel id='demo-simple-select-label'>Hobby</InputLabel>
                <Select
                    labelId='demo-simple-select-label'
                    id='demo-simple-select'
                    value={hobby}
                    onChange={handleChange}
                >
                    {hobbiesList.map((item) => (
                        <MenuItem value={item} key={item}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>Age</TableCell>
                            <TableCell align='right'>Count</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {ageCounter.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component='th' scope='row'>
                                    {row.age}
                                </TableCell>
                                <TableCell align='right'>{row.count}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
