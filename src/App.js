import Header from './components/navbar/Header';
import Sidebar from './components/Sidebar/Sidebar'
import Feed from './components/Feed/Feed';


function App() {
  return (
    <div className="app">
         <Header/>


         <div className="app_body">
            <Sidebar/>
            <Feed/>
         </div>



   </div>

   

    
  
  );
}

export default App;
