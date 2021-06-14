import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { getUsers } from '../../apis/APIs';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));

export function AllUsers() {
    const [user, setUser] = useState([]);
    useEffect(() => {
        getUsers().then((data) => {
            setUser(data);
        });
    }, []);

    const classes = useStyles();
    return (
        <>
            <h1>All Users</h1>
            <h3>username and age</h3>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label='simple table'>
                    <TableHead>
                        <TableRow>
                            <TableCell>User Name</TableCell>
                            <TableCell align='right'>User Age</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {user.map((row) => (
                            <TableRow key={row.name}>
                                <TableCell component='th' scope='row'>
                                    {row.username}
                                </TableCell>
                                <TableCell align='right'>{row.age}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    );
}
