import './App.css';
import Sidebar from './components/Sidebar';
import MainComponent from './components/MainComponent';

function App() {
  return (
    <div className='flex w-full h-screen'>
      <Sidebar />
      <MainComponent/>
    </div>
  );
}

export default App;
