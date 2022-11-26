import Grid from "@mui/material/Grid";
import {Stack} from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import {DrawerHeader} from "./TaskPageMenuComp2";
import * as React from "react";

export default function TaskBoxComp(){
    return(
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Grid container spacing={3}>
                <Grid xs>
                    <Typography>столбец Первый</Typography>
                </Grid>
                <Grid xs>
                    <Typography>Второй</Typography>
                </Grid>
                <Grid xs>
                    <Typography>Третий</Typography>
                </Grid>
            </Grid>
        </Box>
    )
}
