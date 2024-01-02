// import { useContext, useState } from "react";

// import store from "../dataStores/business";

// import { useForm } from "react-hook-form";

// import { Box } from "@mui/system";

// import { Button, TextField, Typography, Card, List, ListItem, ListItemAvatar, Avatar } from "@mui/material";

// import Stack from '@mui/material/Stack';

// import { observer } from "mobx-react";

// import { ModeContext } from "../App";

// import { styled } from '@mui/material/styles';

// import Paper from '@mui/material/Paper';

// import { blue } from "@mui/material/colors";

// import Tooltip from "@mui/material/Tooltip";

// import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";

// import Grid from "@mui/material/Grid";

// import ListItemText from '@mui/material/ListItemText';

// import Divider from '@mui/material/Divider';

// import PhoneIcon from '@mui/icons-material/Phone';

// import HomeIcon from '@mui/icons-material/Home';

// import BusinessIcon from '@mui/icons-material/Business';

// import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

// import DetailsIcon from '@mui/icons-material/Details';

// const BusinessComponent = observer(() => {

//     const bussiness = store.getBussiness;

//     const [toEdit, setToEdit] = useState(false);

//     const { register, handleSubmit } = useForm({ defaultValues: bussiness });

//     function saveDetails(details) {

//         store.updateBussiness(details);

//         setToEdit(false);

//     }

//     function handleClose() {

//         setToEdit(false);

//     }

//     const dialog = () => (

//         <Dialog open={toEdit} onClose={handleClose} sx={{ minWidth: 275, textAlign: 'center', alignContent: 'cenetr', alignItems: "center", direction: 'rtl' }}>

//             <DialogTitle>עדכן פרטי עסק</DialogTitle>

//             <DialogContent >

//                 <DialogContentText>

//                     עדכן כאן את פרטי העסק שלך

//                 </DialogContentText>

//                 <form onSubmit={handleSubmit(saveDetails)} sx={{ direction: 'rtl' }}>

//                     <TextField

//                         {...register('name')}

//                         autoFocus

//                         margin="dense"

//                         id="name"

//                         label="שם העסק"

//                         type="text"

//                         fullWidth

                       

//                     />

//                     <TextField

//                         {...register('address')}

//                         autoFocus

//                         margin="dense"

//                         id="address"

//                         label="כתובת"

//                         type="text"

//                         fullWidth

                        

//                     />

//                     <TextField

//                         {...register('phone')}

//                         autoFocus

//                         margin="dense"

//                         id="phone"

//                         label="טלפון"

//                         type="text"

//                         fullWidth

                      

//                     />

//                     <TextField

//                         {...register('owner')}

//                         autoFocus

//                         margin="dense"

//                         id="owner"

//                         label="בעלים"

//                         type="text"

//                         fullWidth

                       

//                     />

//                     <TextField

//                         {...register('description')}

//                         autoFocus

//                         margin="dense"

//                         id="description"

//                         label="תיאור העסק"

//                         type="text"

//                         fullWidth

                      

//                     />

//                     <DialogActions sx={{ minWidth: 275, textAlign: 'center', alignContent: 'cenetr', alignItems: "center" }}>

//                         <Button onClick={handleClose}>ביטול</Button>

//                         <Button type='submit'>שמירה</Button>

//                     </DialogActions>

//                 </form>

//             </DialogContent>

//         </Dialog >)

//     return (<>

//         {useContext(ModeContext).isAdmin && toEdit && dialog()}

//         <Grid

//             container

//             direction="column"

//             justifyContent="center"

//             alignItems="center"

//             alignContent="center" ><List

//                 sx={{

//                     width: '100%',

//                     maxWidth: 500,

//                     bgcolor: 'background.paper',

//                     textAlign: 'right'

//                 }}

//             >

//                 <ListItem>

//                     <ListItemAvatar>

//                         <Avatar>

//                             <BusinessIcon />

//                         </Avatar>

//                     </ListItemAvatar>

//                     <ListItemText primary={bussiness === null ? "null" : bussiness.name} secondary="שם העסק" />

//                 </ListItem>

//                 <Divider variant="inset" component="li" />

//                 <ListItem>

//                     <ListItemAvatar>

//                         <Avatar>

//                             <PersonOutlineIcon />

//                         </Avatar>

//                     </ListItemAvatar>

//                     <ListItemText primary={bussiness === null ? "null" : bussiness.owner} secondary="בעל העסק" />

//                 </ListItem>

//                 <Divider variant="inset" component="li" />

//                 <ListItem>

//                     <ListItemAvatar>

//                         <Avatar>

//                             <PhoneIcon />

//                         </Avatar>

//                     </ListItemAvatar>

//                     <ListItemText primary={bussiness === null ? "null" : bussiness.phone} secondary="טלפון" />

//                 </ListItem>

//                 <Divider variant="inset" component="li" />

//                 <ListItem>

//                     <ListItemAvatar>

//                         <Avatar>

//                             <HomeIcon />

//                         </Avatar>

//                     </ListItemAvatar>

//                     <ListItemText primary={bussiness === null ? "null" : bussiness.address} secondary="כתובת" />

//                 </ListItem>

//                 <Divider variant="inset" component="li" />

//                 <ListItem>

//                     <ListItemAvatar>

//                         <Avatar>

//                             <DetailsIcon />

//                         </Avatar>

//                     </ListItemAvatar>

//                     <ListItemText primary={bussiness === null ? "null" : bussiness.description} secondary="פרטים נוספים" />

//                 </ListItem>

//                 <ListItem>

//                     {useContext(ModeContext).isAdmin && <Button sx={{ backgroundColor: 'gray' }} size="small" width="50%" variant="contained" onClick={() => { setToEdit(true) }}>עדכון</Button>}

//                 </ListItem>

//             </List>

//         </Grid>

//     </>)

// }

// )

// export default BusinessComponent;
import { useContext, useState } from "react";
import store from "../dataStores/business";
import { useForm } from "react-hook-form";
import { Button, TextField, List, ListItem, ListItemAvatar, Avatar } from "@mui/material";
import { observer } from "mobx-react";
import { ModeContext } from "../App";
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import Grid from "@mui/material/Grid";
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import PhoneIcon from '@mui/icons-material/Phone';
import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import DetailsIcon from '@mui/icons-material/Details';
import Swal from 'sweetalert2'

const BusinessComponent = observer(() => {
    const bussiness = store.getBusiness;
    const [toEdit, setToEdit] = useState(false);
    const { register, handleSubmit } = useForm({ defaultValues: bussiness });

    function saveDetails(details) {
        store.updateBusiness(details);
        Swal.fire({
            text: "השינויים נשמרו בהצלחה",
            icon: "success"
          });
        setToEdit(false);
    }

    function handleClose() {
        setToEdit(false);
    }
    
    const dialog = () => (
        <Dialog open={toEdit} onClose={handleClose} sx={{ minWidth: 275, textAlign: 'center', alignContent: 'center', alignItems: "center", direction: 'rtl' }}>
            <DialogTitle>עדכן פרטי עסק</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    עדכן כאן את פרטי העסק שלך
                </DialogContentText>
                <form onSubmit={handleSubmit(saveDetails)} sx={{ direction: 'rtl' }}>
                    <TextField
                        {...register('name')}
                        autoFocus
                        margin="dense"
                        id="name"
                        label="שם העסק"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        {...register('address')}
                        autoFocus
                        margin="dense"
                        id="address"
                        label="כתובת"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        {...register('phone')}
                        autoFocus
                        margin="dense"
                        id="phone"
                        label="טלפון"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        {...register('owner')}
                        autoFocus
                        margin="dense"
                        id="owner"
                        label="בעלים"
                        type="text"
                        fullWidth
                    />
                    <TextField
                        {...register('description')}
                        autoFocus
                        margin="dense"
                        id="description"
                        label="תיאור העסק"
                        type="text"
                        fullWidth
                    />

                    <DialogActions sx={{ minWidth: 275, textAlign: 'center', alignContent: 'center', alignItems: "center" }}>
                        <Button onClick={handleClose}>ביטול</Button>
                        <Button type='submit'>שמירה</Button>
                    </DialogActions>
                </form>
            </DialogContent>
        </Dialog>
    );

    return (
        <>
            {useContext(ModeContext).isAdmin && toEdit && dialog()}

            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                alignContent="center"
            >
                <List
                    sx={{
                        width: '100%',
                        maxWidth: 500,
                        bgcolor: 'background.paper',
                        textAlign: 'right'
                    }}
                >
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <BusinessIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={bussiness === null ? "null" : bussiness.name} secondary="שם העסק" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <PersonOutlineIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={bussiness === null ? "null" : bussiness.owner} secondary="בעל העסק" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <PhoneIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={bussiness === null ? "null" : bussiness.phone} secondary="טלפון" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <HomeIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={bussiness === null ? "null" : bussiness.address} secondary="כתובת" />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar>
                                <DetailsIcon />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={bussiness === null ? "null" : bussiness.description} secondary="פרטים נוספים" />
                    </ListItem>
                    <ListItem>
                        {useContext(ModeContext).isAdmin && (
                            <Button
                                sx={{ backgroundColor: 'gray' }}
                                size="small"
                                variant="contained"
                                onClick={() => {
                                    setToEdit(true);
                                }}
                            >
                                עדכון
                            </Button>
                        )}
                    </ListItem>
                </List>
            </Grid>
        </>
    );
});

export default BusinessComponent;