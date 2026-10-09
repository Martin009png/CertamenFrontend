import { useState } from "react";
import GuerrerosNavbar from "../components/GuerrerosNavbar";
import GuerrerosForm from "../components/GuerrerosForm";
import GuerrerosView from "../components/GuerrerosView";

function GuerrerosContainer() {
    const [guerreros, setGuerreros] = useState([]);

    const handleCreate = (nuevoGuerrero) => {
        setGuerreros([...guerreros, nuevoGuerrero]);
    };

    const handleDelete = (indexToDelete) => {
        setGuerreros(guerreros.filter((_, index) => index !== indexToDelete));
    };

    return (
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
    );
}

export default GuerrerosContainer;