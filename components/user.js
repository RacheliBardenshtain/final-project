import { ModeContext } from "../App";
import { Button } from "@mui/base";
import { useState } from "react";
import store from "../dataStores/services";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Box, List, ListItem } from "@mui/material";
import { observer } from "mobx-react";
import DoneIcon from '@mui/icons-material/Done';
import AddMeeting from "./addMeeting";
import BusinessComponent from "./business.component";
import ServiceDetails from "./serviceDetails";


const User = observer(() => {

    const [open, setOPen] = useState(false);
    const [openMessage, setOpenMessage] = useState(false);
    const services = store.getServices;
    const [service, setService] = useState(null);
    const handleOpen = (service) => {
        setService(service);
        setOPen(true);
    }

    const handleClose = () => {
        setOPen(false);
        handleOpenMessage();
    }
    const handleCancel = () => {
        setOPen(false);
    }

    const handleOpenMessage = () => {
        setOpenMessage(true);
    }
    const handleCloseMessage = () => {
        setOpenMessage(false);
    }

    const dialog = () => (<Dialog open={open} onClose={handleCancel}>
        <DialogTitle>הזמנת פגישה</DialogTitle>
        <DialogContent>
            <DialogContentText>

            </DialogContentText>
            <AddMeeting selectedService={service} closeDialog={handleClose}></AddMeeting>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleCancel}>ביטול</Button>
            <Button onClick={handleCancel}>הזמנה</Button>
        </DialogActions>
    </Dialog>)

    const successMessage = () => (<Dialog open={openMessage} onClose={handleCloseMessage} >

        <DialogContent sx={{ textAlign: 'center', alignItems: 'center', backgroundColor: '#57db25c2' }}>
            <DialogContentText sx={{ textAlign: 'center', alignItems: 'center' }}>
                הפגישה נקבעה בהצלחה <DoneIcon ></DoneIcon>
            </DialogContentText>
        </DialogContent>
    </Dialog>)





    return (<>
        <ModeContext.Provider value={{ isAdmin: false }}>
            <BusinessComponent></BusinessComponent>
        </ModeContext.Provider>
        {open && dialog()}
        {openMessage && successMessage()}
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center" >

            <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', direction: 'rtl', textAlign: 'center' }}>
                {services.map((service) => <ListItem container item xs={2} >
                    <ModeContext.Provider value={{ isAdmin: false }}>
                        <ServiceDetails {...service} key={service.id} openDialog={handleOpen} />
                    </ModeContext.Provider>
                </ListItem>
                )}</List></Grid>
        </>)
})
        export default User;
