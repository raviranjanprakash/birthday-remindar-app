import react,{useState} from 'react';
import './App.css';
import Data from './Data';
import List from './List';

function App() {
  const [people, setpeople]=useState(Data);
  const [btnName , SetbtnName]=useState("Clear All");
  function togal(){
   
    if (btnName === 'Clear All') {
      setpeople([]);
      SetbtnName("Show Birthday Today")
    }else{
      setpeople(Data);
      SetbtnName('Clear All');
    }
  }

  return (
   <section className='birth_sec'>
     <div className='container'>
       <h1 className='heading_t'>Birthday Reminder Application</h1>
       <h3 className='hed_bit'>{people.length} Birthdays Today</h3>
       <List mypeople={people} />
       <button className='clr-btn' onClick={()=>togal()}>{btnName}</button>
     </div>
   </section>
  );
}

export default App;
