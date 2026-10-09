import { Alert, Card, CardContent, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Chip, Button } from '@mui/material';

function GuerrerosView({ guerreros = [], onDeleteGuerrero = () => {} }) {
    if (!guerreros?.length) {
        return <Alert severity="info">No hay tropas registradas en el ejército de Sauron.</Alert>;
    }

    return (
        <Card raised>
            <CardHeader title="Despliegue del Ejército" />
            <CardContent>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Nombre del Guerrero</strong></TableCell>
                                <TableCell><strong>Tipo de Guerrero</strong></TableCell>
                                <TableCell><strong>Categoría / Rango</strong></TableCell>
                                <TableCell><strong>Nivel</strong></TableCell>
                                <TableCell><strong>Clasificación</strong></TableCell>
                                <TableCell align="center"><strong>Acción</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {guerreros.map((g, index) => (
                                <TableRow key={index}>
                                    <TableCell>{g.nombre}</TableCell>
                                    <TableCell>{g.tipo}</TableCell>
                                    <TableCell>{g.categoria}</TableCell>
                                    <TableCell>{g.nivel}</TableCell>
                                    <TableCell>
                                        <Chip 
                                            label={g.tipo} 
                                            color={g.tipo === 'Orco' ? 'secondary' : 'error'} 
                                            variant="filled" 
                                        />
                                    </TableCell>
                                    <TableCell align="center">
                                        <Button 
                                            variant="outlined" 
                                            color="error" 
                                            size="small" 
                                            onClick={() => onDeleteGuerrero(index)}
                                        >
                                            Asesinado por la aparición
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    );
}

export default GuerrerosView;