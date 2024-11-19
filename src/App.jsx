import { AppLayout } from "./components/layout/AppLayout";
// import DemoContainer from "./components/layout/DemoContainer";
import DemoContainer from "./components/layout/DemoContainer--uniform-scaling";
const App = () => {
  return (
    <div className="w-full min-h-screen bg-slate-100" style={gridBgStyle}>
      <DemoContainer>
        <AppLayout />
      </DemoContainer>
    </div>
  );
};

export default App; // Add this line


const gridBgStyle = {
  backgroundImage: `
    radial-gradient(circle at 1px 1px, rgb(226 232 240) 1px, transparent 0)
  `,
  backgroundSize: '24px 24px',
};