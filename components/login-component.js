import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { ModeContext } from '../App';
import { Alert, CardContent, Stack } from "@mui/material";
import axios from "axios";
import Admin from './admin';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));
function LoginComponent() {
    const [userName, setUserName] = useState("init");
    const [userPassword, setUserPassword] = useState("0");
    const [isAdmin, setIsAdmin] = useState(false);
    const [isError, setIsError] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8787/login', { name: userName, password: userPassword }).then((res) => {
            setIsAdmin(true);
            alert("success");
        }).catch((err) => {
            alert("failed");
            console.log(err);
            setIsError(true);
        });
    }
    return (
        <>
            {
                isAdmin ? <Admin /> :
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        alignContent="center"
                    ><Box sx={{ width: '50%' }}>
                            <Card sx={{ minWidth: 275, textAlign: 'center', alignContent: 'cenetr', alignItems: "center" }} >
                                <form onSubmit={handleSubmit}>
                                    <h2>לכניסה כמנהל יש להקיש שם משתמש וסיסמה</h2>
                                    <CardContent> <TextField
                                        id="username"
                                        label="שם משתמש"
                                        variant="outlined"
                                        onChange={(e) => setUserName(e.target.value)} /></CardContent>
                                    <CardContent>
                                        <TextField
                                            id="password"
                                            label="סיסמה"
                                            type='password'
                                            variant="outlined"
                                            onChange={(e) => setUserPassword(e.target.value)} /></CardContent>
                                    <CardContent><Button size="large" type='submit' variant="contained">התחבר</Button></CardContent>
                                    <CardContent>   {isError && <Alert textAlign="center" severity="error">שם המשתמש או הסיסמה אינם נכונים</Alert>}
                                        {isAdmin && <Alert severity="success">התחברת בהצלחה</Alert>}</CardContent>
                                </form>
                            </Card>
                        </Box></Grid>
            }
        </>
    );
}
export default LoginComponent;
// import React, { useRef, useState } from "react"
// import axios from "axios"
// import BusinessComponent from "./business.component"
// import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
// import { Button } from "@mui/material"

// function LoginComponent() {
//     const [userName, setUsername] = useState('')
//     const [password, setPassword] = useState('')
//     const [isAdmin, setIsAdmin] = useState(false)
//     const nameRef = useRef()
//     const passwordRef = useRef()

//     const handleSubmit = async (event) => {
//         event.preventDefault()
//         try {
//             await axios.post('http://localhost:8787/login',
//                 {
//                     name: userName,
//                     password: password
//                 }).then((res) => {
//                     setIsAdmin(true)
//                 })
//         }
//         catch (error) {
//             console.log(error)
//             alert("שם משתמש או סיסמא שגויים");
//             setIsAdmin(false)
//             restartInput()
//         }
//     }
    
//    function restartInput()
//     {
//         nameRef.current.value = ''
//         nameRef.current.placeholder = "userName"
//         passwordRef.current.value = ''
//         passwordRef.current.placeholder = "password"
//     }

//     return (<>
//         {
//             isAdmin ? <BusinessComponent/> :
//                 <div>
//                     <h1>LOGIN</h1>
//                     <form onSubmit={handleSubmit}>
//                         <input type="text" placeholder="userName" ref={nameRef} value={userName} onChange={(event) => setUsername(event.target.value)} />
//                         <input type="text" placeholder="password" ref={passwordRef} value={password} onChange={(event) => setPassword(event.target.value)} />
//                         <Button type="submit" variant="outlined">LOGIN</Button>
//                     </form>
//                 </div>
//         } </>)
// }
// export default LoginComponent