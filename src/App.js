import './App.css';
import Forms from './components/Forms';
import Table from './components/Table';
import AppProvider from './context/appProvider';

function App() {
  return (
    <AppProvider>
      <Forms />
      <Table />
    </AppProvider>
  );
}

export default App;
