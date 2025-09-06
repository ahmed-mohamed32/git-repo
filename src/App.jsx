import './App.css'
import Description from './component/description';
import Header from './component/header';
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom';
import About from './about';

function Button({onClick}){
  return(
    <button onClick={onClick}>Click</button>
  )
}
function ContactUs(){
  return(
    <h4>hello in contactus page</h4>
  )
} 
 function App() {
 function sayhello(){
  alert("Hello ");
 }

  return (
           <BrowserRouter>
           <Header text="new" /> 
           <Description />
           <Button  onClick={sayhello}/>
           <nav>
            <Link to='/About'>ContactUs</Link> | {" "}
            <Link to='/'>Home</Link>
           </nav>
           <Routes>
            <Route path='/About'element={<About />}>contactUs</Route>
           </Routes>
           </BrowserRouter>
  )
}

export default App;
