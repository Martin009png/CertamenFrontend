import { AppBar, Toolbar, Typography } from '@mui/material';

function GuerrerosNavbar() {
    return (
        <AppBar position="static" color="primary">
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Typography variant="h6">Anillo Único</Typography>
                <Typography variant="subtitle1">Uno para dominarlos a todos</Typography>
            </Toolbar>
        </AppBar>
    );
}
//Que buena referencia profe
export default GuerrerosNavbar;