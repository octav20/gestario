import React from 'react';

function OptionProveedores({ proveedores }) {
    return (


        <>
            {
                proveedores.map((proveedor) => (
                    <option key={proveedor.codigo} value={proveedor.codigo}>{proveedor.descripcion}</option>
                ))}
        </>



    );
}

export default OptionProveedores;