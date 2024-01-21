// import logo from './logo.svg';
import Header from './Components/Header_table';
import Detail from './Components/Detail_table';
import Aside from './Components/Aside';
import './App.css';


function App() {
  return (
    <>
    {/* d-flex gap-4 */}
      <div className='d-flex gap-4'>
        <div>
          <Header />
          <Detail />
        </div>
        <div className=''>
          <Aside />
        </div>
      </div>
    </>
  );
}

export default App;
