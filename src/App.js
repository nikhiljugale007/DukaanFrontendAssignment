import './App.css';
import Sidebar from './components/Sidebar';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className='grid grid-cols-12 w-full h-screen'>
      <Sidebar />
      <MainComponent />
      
    </div>
  );
}

export default App;
