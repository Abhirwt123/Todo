import './App.css';
import Header from './components/Header';
import Title from './components/Title';

function App() {
  return (
    <div className="App flex justify-center items-center">
      <div className='wrap w-6/12'>
      <Title/>
      <Header/>
      </div>
    </div>
  );
}

export default App;
