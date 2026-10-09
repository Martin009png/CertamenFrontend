import { useState } from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import GuerrerosNavbar from "../components/GuerrerosNavbar";
import GuerrerosForm from "../components/GuerrerosForm";
import GuerrerosView from "../components/GuerrerosView";

//Deje el color amarillo para ser mas unico y especial basicamente
const theme = createTheme({
    palette: {
        primary: {
            main: '#fbc02d', // Amarillo 
            contrastText: '#000', // Texto negro para que contraste bien con el amarillo
        },
    },
});

function GuerrerosContainer() {
    const [guerreros, setGuerreros] = useState([]);

    const handleCreate = (nuevoGuerrero) => {
        setGuerreros([...guerreros, nuevoGuerrero]);
    };

    const handleDelete = (indexToDelete) => {
        setGuerreros(guerreros.filter((_, index) => index !== indexToDelete));
    };

    return (

        <ThemeProvider theme={theme}>
            <div>
                <GuerrerosNavbar />
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 col-md-4 mb-3">
                            <GuerrerosForm onCreateGuerrero={handleCreate} />
                        </div>
                        <div className="col-12 col-md-8">
                            <GuerrerosView guerreros={guerreros} onDeleteGuerrero={handleDelete} />
                        </div>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default GuerrerosContainer;