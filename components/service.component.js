import { observer } from "mobx-react";
import { useContext, useState } from "react";
import serviceDetails from "./serviceDetails";
import store from "../dataStores/services";
import { ModeContext } from "../App";
import { Form, useForm } from "react-hook-form";
import { TextField, Typography } from "@mui/material";
import { wait } from "@testing-library/user-event/dist/utils";
import { rootShouldForwardProp } from "@mui/material/styles/styled";
import { Box, Grid, Button } from "@mui/material";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import AddIcon from '@mui/icons-material/Add';
import ServiceDetails from "./serviceDetails";

const ServiceComponent = observer(() => {
    const services = store.getServices;
    const [toAdd, setToAdd] = useState(false);
    const [toInvite, setToInvite] = useState(false);
    const [selected, setSelected] = useState(null);
    const serviceId = store.countServices;
    const { register, handleSubmit } = useForm({ defaultValues: services });
    function saveDetails(details) {
        details.id = serviceId + 1;
        store.addService(details);
        setToAdd(false);

    }
    function handleClose() {
        setToAdd(false);
    }

    const dialog = () => (
        <Dialog open={toAdd} onClose={handleClose} sx={{ minWidth: 275, textAlign: 'center', alignContent: 'cenetr', alignItems: "center", direction: 'rtl' }}>
            <DialogTitle>הוספת שירות</DialogTitle>
            <DialogContent >
                <DialogContentText>
                    הזן את פרטי השירות החדש
                </DialogContentText>
                <form onSubmit={handleSubmit(saveDetails)} sx={{ direction: 'rtl' }}>
                    <TextField {...register('name')} label="שם" fullWidth></TextField>
                    <TextField {...register('description')} label="תיאור" fullWidth></TextField>
                    <TextField {...register('price')} label="מחיר" fullWidth></TextField>
                    <TextField {...register('duration')} label="משך הזמן" fullWidth></TextField>
                    <DialogActions sx={{ minWidth: 275, textAlign: 'center', alignContent: 'cenetr', alignItems: "center" }}>
                        <Button onClick={handleClose}>ביטול</Button>
                        <Button type='submit'>שמירה</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog >)
    return (
        <>
        {store.countServices==0&&<><br/><br/><Typography>אין שירותים זמינים</Typography></>}
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                alignContent="center" ><List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', direction: 'rtl', textAlign: 'center' }}>
                    {services.map((service) => <ListItem container item xs={2} >
                        <ServiceDetails {...service} key={service.id} />
                    </ListItem>
                    )}<ListItem container item xs={2}> {useContext(ModeContext).isAdmin && <Button onClick={() => { setToAdd(true) }}><AddIcon></AddIcon></Button>}</ListItem></List>
            </Grid>
            {toAdd && dialog()}


        </>


    )
})

export default ServiceComponent;