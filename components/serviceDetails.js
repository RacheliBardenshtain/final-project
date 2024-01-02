import React from "react";
import { Accordion, AccordionSummary, Typography, Button, AccordionDetails } from "@mui/material";
import { useContext } from "react";
import { ModeContext } from "../App";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
export default function ServiceDetails(details) {
    const { id, name, description, price, duration, openDialog } = details;

    return (
        <>
            <Accordion sx={{ width: '100%' }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography sx={{ textAlign: 'center' }}>{(!useContext(ModeContext).isAdmin) && <Button onClick={() => openDialog(details)}><CalendarMonthIcon></CalendarMonthIcon></Button>} {details.name}</Typography>
                </AccordionSummary>
                <AccordionDetails sx={{ direction: 'rtl', textAlign: 'right' }}>
                    <Typography>{details.description}</Typography>
                    <Typography>{details.price}</Typography>
                    <Typography>{details.duration}</Typography>
                </AccordionDetails>

            </Accordion>
        </>
    )
}
