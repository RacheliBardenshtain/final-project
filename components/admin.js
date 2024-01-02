import BusinessComponent from "./business.component";
import { ModeContext } from "../App";
import { Button } from "@mui/base";
import { Outlet } from "react-router-dom";

export default function Admin() {
    function changeToServices() {
        window.location.pathname = '/admin/Services';
    }
    function changeToAppointments() {
        window.location.pathname = '/admin/Appointments';
    }

    return (<div sx={{AlignItems:'center'}}>
        <ModeContext.Provider value={{ isAdmin: true }}>
            <BusinessComponent></BusinessComponent>
        </ModeContext.Provider>
        <Button sx={{Color:'gray'}} size="small" width="50%"  variant="outlined" onClick={changeToServices}>שירותי עסק</Button>
        <Button sx={{Color:'gray'}} size="small" width="50%"  variant="outlined" onClick={changeToAppointments}>פגישות</Button>
        <Outlet></Outlet>
    </div>)
}