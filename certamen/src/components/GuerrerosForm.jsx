import { useState } from 'react';
import { Button, Card, CardActions, CardContent, CardHeader, TextField, RadioGroup, FormControlLabel, Radio, Slider, Select, MenuItem, InputLabel, FormControl, Typography, Rating } from '@mui/material';

function GuerrerosForm({ onCreateGuerrero = () => {} }) {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("Orco");
    const [nivel, setNivel] = useState(50);
    const [categoria, setCategoria] = useState("Capitán");
    const [rating, setRating] = useState(1);

    const handleSubmit = () => {
        if (!nombre) {
            alert("Debes ingresar el nombre del guerrero.");
            return;
        }

        const nuevoGuerrero = {
            nombre,
            tipo,
            nivel,
            categoria,
            rating
        };

        onCreateGuerrero(nuevoGuerrero);
        
        //Se dejan los valores a 0 por asi decirlo para que se limpien
        setNombre("");
        setTipo("Orco");
        setNivel(50);
        setCategoria("Capitán");
        setRating(1);
    };

    return (
        <Card raised>
            <CardHeader title="Registrar Guerrero" />
            <CardContent>
                <TextField 
                    label="Nombre del Guerrero" 
                    value={nombre} 
                    onChange={e => setNombre(e.target.value)} 
                    fullWidth 
                    sx={{ mb: 3 }} 
                />

                <FormControl component="fieldset" sx={{ mb: 3, display: 'block' }}>
                    <Typography variant="subtitle2" gutterBottom>Tipo de Guerrero</Typography>
                    <RadioGroup row value={tipo} onChange={e => setTipo(e.target.value)}>
                        <FormControlLabel value="Orco" control={<Radio />} label="Orco" />
                        <FormControlLabel value="Uruk" control={<Radio />} label="Uruk" />
                    </RadioGroup>
                </FormControl>

                <Typography gutterBottom>Nivel de Combate ({nivel})</Typography>
                <Slider 
                    value={nivel} 
                    onChange={(e, val) => setNivel(val)} 
                    min={1} 
                    max={100} 
                    valueLabelDisplay="auto" 
                    sx={{ mb: 3 }} 
                />

                <FormControl fullWidth sx={{ mb: 3 }}>
                    <InputLabel id="categoria-label">Categoría / Rango</InputLabel>
                    <Select 
                        labelId="categoria-label" 
                        label="Categoría / Rango" 
                        value={categoria} 
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <MenuItem value="Capitán">Capitán</MenuItem>
                        <MenuItem value="Berserker">Berserker</MenuItem>
                        <MenuItem value="Explorador">Explorador</MenuItem>
                        <MenuItem value="Asediador">Asediador</MenuItem>
                    </Select>
                </FormControl>

                <Typography gutterBottom>Nivel de Amenaza / Furia</Typography>
                <Rating 
                    value={rating} 
                    onChange={(e, val) => setRating(val || 1)} 
                    sx={{ mb: 2 }} 
                />
            </CardContent>
            <CardActions>
                <Button onClick={handleSubmit} fullWidth variant='contained' color='primary'>
                    Registrar Guerrero
                </Button>
            </CardActions>
        </Card>
    );
}

export default GuerrerosForm;