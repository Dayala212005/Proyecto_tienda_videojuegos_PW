import LiquidEther from './LiquidEther.jsx';

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
            <div style={{ width: '100%', height: 600, position: 'relative' }}>
                <LiquidEther
                    colors={['#00b4d8', '#90e0ef', '#caf0f8']}
                    mouseForce={20}
                    cursorSize={100}
                    isViscous={false}
                    viscous={30}
                    iterationsViscous={32}
                    iterationsPoisson={32}
                    resolution={0.5}
                    isBounce={false}
                    autoDemo={true}
                    autoSpeed={0.5}
                    autoIntensity={2.2}
                    takeoverDuration={0.25}
                    autoResumeDelay={3000}
                    autoRampDuration={0.6}
                />
            </div>
        </div>
    );
}

export default Fondo;
