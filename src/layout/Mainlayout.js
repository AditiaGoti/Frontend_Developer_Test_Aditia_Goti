import FloatingLines from '../utils/background';

const MainLayout = ({ children }) => {
    return (
        <div style={{ position: 'relative', minHeight: '100vh', width: "100%" }}>
            <FloatingLines
                enabledWaves={['top', 'middle', 'bottom']}
                lineCount={[5]}
                lineDistance={[33,5]}
                bendRadius={5.0}
                bendStrength={-0.5}
                interactive={true}
                parallax={true}
                className="absolute top-0 left-0 w-full h-full z-0"
            />
            <div className="relative z-10 text-white min-h-screen px-4 md:px-8">
                {children}
            </div>
        </div>
    );
};

export default MainLayout;