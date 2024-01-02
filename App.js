import './App.css';

import { BrowserRouter, Route, Routes, Outlet, useParams } from 'react-router-dom';

import LoginComponent from './components/login-component';
import Admin from './components/admin';
import User from './components/user';
import ServiceComponent from './components/service.component';
import MeetingComponent from './components/meeting.component';
import { createContext } from 'react';
import * as React from 'react';

import AppBar from '@mui/material/AppBar';

import Box from '@mui/material/Box';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import Link from '@mui/material/Link';

export const ModeContext=createContext(null);

function App() {

  return (

    <div className="App">

      <BrowserRouter>

        <Routes>

          <Route path={"/"} element={<Layout />}>

            <Route path={""} element={<User />} ></Route>

            <Route path={"login"} element={<LoginComponent />} ></Route>

            <Route path={"admin"} element={<Admin />} >

              <Route path={"Services"} element={<ModeContext.Provider value={{ isAdmin: true }}>

                <ServiceComponent />

              </ModeContext.Provider>} ></Route>

              <Route path={"Appointments"} element={<ModeContext.Provider value={{ isAdmin: true }}>

                <MeetingComponent />

              </ModeContext.Provider>} ></Route>

            </Route>

          </Route>

        </Routes>

      </BrowserRouter>

    </div>

  );

}

export default App;

function Layout() {

  return (<div>

    <header>

      <nav>

        {/* <Link to="/">Home</Link>

        <Link to="/login">admin-login</Link> */}

        <ButtonAppBar></ButtonAppBar>

      </nav>

    </header>

    <main> <br/> <br/><Outlet /></main>

  </div>)

}

function ButtonAppBar() {

  return (

    <Box sx={{ flexGrow: 1 ,position:'' }}>

      <AppBar position="static">

        <Toolbar>

          <Link href="/"><IconButton

            size="large"

            edge="start"

            aria-label="menu"

            sx={{ mr: 2, color: "White" }}

          >

            <HomeIcon />

          </IconButton></Link>

          {/* <Button color="inherit">Login</Button> */}

          <Link href="/login" underline='none' sx={{ color: 'white' }} >Login</Link>

        </Toolbar>

      </AppBar>

    </Box>

  );

}
// import './App.css';
// import { BrowserRouter, Route, Routes, Outlet, useParams } from 'react-router-dom';
// import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import HomeIcon from '@mui/icons-material/Home';
// import Link from '@mui/material/Link';
// import User from './components/user';
// import LoginComponent from './components/login-component';
// import Admin from './components/admin';
// import ServiceComponent from './components/service.component';
// import MeetingComponent from './components/meeting.component';
// import { createContext } from 'react';
// export const ModeContext=createContext(null);
// function App() {

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <Routes>
//           <Route path={"/"} element={<Layout />}>
//             <Route path={""} element={<User />} ></Route>
//             <Route path={"login"} element={<LoginComponent />} ></Route>
//             <Route path={"admin"} element={<Admin/>} >
//               <Route path={"Services"} element={<ModeContext.Provider value={{ isAdmin: true }}>
//                 <ServiceComponent />
//               </ModeContext.Provider>} ></Route>
//               <Route path={"Appointments"} element={<ModeContext.Provider value={{ isAdmin: true }}>
//                 <MeetingComponent />
//               </ModeContext.Provider>} ></Route>
//             </Route>
//           </Route>
//         </Routes>
//       </BrowserRouter>


//     </div>
//   );
// }
// export default App;

// function Layout() {
//   return (<div>
//     <header>
//       <nav>
//         {/* <Link to="/">Home</Link>
//         <Link to="/login">admin-login</Link> */}
//         <ButtonAppBar></ButtonAppBar>
//       </nav>
//     </header>
//     <main> <br/> <br/> <br/><Outlet /></main>

//   </div>)
// }


// function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Link href="/"><IconButton
//             size="large"
//             edge="start"

//             aria-label="menu"
//             sx={{ mr: 2, color: "White" }}
//           >
//             <HomeIcon />
//           </IconButton></Link>
//           {/* <Button color="inherit">Login</Button> */}
//           <Link href="/login" underline='none' sx={{ color: 'white' }} >Login</Link>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }