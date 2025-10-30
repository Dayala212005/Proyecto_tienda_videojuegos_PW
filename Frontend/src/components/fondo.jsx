import Galaxy from './Galaxy';

function Fondo() {
    return (
        <div
            style={{
                position: "fixed",      // se queda fijo en toda la pantalla
                top: 0,
                left: 0,
                width: "100vw",         // ocupa todo el ancho
                height: "100vh",        // ocupa todo el alto
                zIndex: -1,             // se coloca detrás de todo
                overflow: "hidden",
            }}
        >
            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <Galaxy />
            </div>


            <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <Galaxy
                    mouseRepulsion={true}
                    mouseInteraction={true}
                    density={1.5}
                    glowIntensity={0.5}
                    saturation={0.8}
                    hueShift={240}
                />
            </div>
        </div>
    );
}

export default Fondo;
