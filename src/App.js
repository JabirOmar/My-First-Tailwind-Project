// import logo from './logo.svg';
import './App.css';
import Anouncement from './components/announcement/Anouncement';
import Contracts from './components/contracts/Contracts';
import NavBar from './components/navbar/NavBar';
import Overview from './components/overview/Overview';
import Tasks from './components/tasks/Tasks';

function App() {
  return (
    <div className='min-h-screen w-screen bg-gray-100 p-2 overflow-hidden fixed '>
    <NavBar />
    <Anouncement />
    <Overview />
    <Tasks />
    <Contracts />
    </div>
  );
}

export default App;
