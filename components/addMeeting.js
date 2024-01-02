import { observer } from "mobx-react";
import meetingsStore from "../dataStores/meetings";
import servicesStore from "../dataStores/services";
import { useForm } from "react-hook-form";
import { Select } from "@mui/base";
import { MenuItem } from "@mui/base";
import { useState } from "react";
import { Button, TextField } from "@mui/material";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import dayjs from "dayjs";
import 'react-datepicker/dist/react-datepicker.css';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Alert } from "@mui/material";

const AddMeeting = observer((props) => {
    const { selectedService, closeDialog } = props;
    const [service, setService] = useState(selectedService);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedHour, setSelectedHour] = useState(null);
    const [failed, setFailed] = useState(false);
    const servicesList = servicesStore.getServices;
    // const res = meetingsStore.getStatus;
    const { register, handleSubmit } = useForm({
        defaultValues: {
            serviceName: selectedService?.name,
            serviceDescription: selectedService?.description,
            servicePrice: selectedService?.price,
            clientName: '',
            clientPhone: '',
            clientEmail: '',
        }
    })
    // function handleSelect(id) {
    //     const selected = servicesList.find(x => x.id === id);
    //     setService(selected);
    //     alert(JSON.stringify(selected));
    // }
    const handleSelectedDate = ((date) => {
        setSelectedDate(date);
    })
    async function onSubmit(data) {
        console.log(data);
        data.id = meetingsStore.getCount + 1;
        data.dateTime = dayjs(selectedDate).format('YYYY-MM-DD HH:mm:ss');
        alert(data.dateTime);
        const resValue = await meetingsStore.addMeeting(data);
        if (!resValue) {
            closeDialog();
            setFailed(false);
        }
        else {
           setFailed(true);
        }
    }
    return (<><form onSubmit={handleSubmit(onSubmit)}>
        <TextField
            {...register('serviceName')}
            disabled
            autoFocus
            margin="dense"
            id="serviceName"
            label="the service"
            type="text"
            fullWidth
            variant="standard"
        />
        <TextField
            {...register('serviceDescription')}
            disabled
            autoFocus
            margin="dense"
            id="serviceDescription"
            label="description"
            type="text"
            fullWidth
            variant="standard"
        />
        <TextField
            {...register('servicePrice')}
            disabled
            autoFocus
            margin="dense"
            id="servicePrice"
            label="Price"
            type="text"
            fullWidth
            variant="standard"
        />
        <TextField
            {...register('clientName')}
            autoFocus
            required
            margin="dense"
            id="clientName"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
        />
        <TextField
            {...register('clientPhone')}
            autoFocus
            margin="dense"
            required
            id="clientPhone"
            label="Phone"
            type="text"
            fullWidth
            variant="standard"
        />
        <TextField
            {...register('clientEmail')}
            autoFocus
            margin="dense"
            required
            id="clientEmail"
            label="Email"
            type="email"
            fullWidth
            variant="standard"
        />
        <DatePicker required selected={selectedDate} onChange={handleSelectedDate} />
        {failed && <Alert textAlign="center" severity="error">לא ניתן לקבוע פגישה בתאריך זה</Alert>}
        <Button type="submit">הזמן</Button>
    </form>
    </>)
})

export default AddMeeting;