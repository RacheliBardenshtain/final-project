import { observer } from "mobx-react";
import store from "../dataStores/meetings";
import MeetingDetails from "./meetingDetails";
import { Box, Grid, Button, List, ListItem, Typography } from "@mui/material";
const MeetingComponent = observer(() => {
    const meetings = store.getMeeting;
    return (<>
    {store.getCount==0&&<><br/><br/><Typography>אין פגישות</Typography></>}

        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            alignContent="center" >
            <List sx={{ width: '100%', maxWidth: 600, bgcolor: 'background.paper', direction: 'rtl', textAlign: 'center' }}>
                {meetings.slice()?.sort((a, b) => new Date(a.dateTime) - new Date(b.dateTime)).map((meeting) => {
                    return (<MeetingDetails {...meeting} key={meeting.id} />);
                })}</List>
        </Grid></>)
})
export default MeetingComponent;
