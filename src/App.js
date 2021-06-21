import './App.css';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import UserInfo from "./components/UserInfo";
import ChooseRoom from "./components/ChooseRoom";
import Checkout from "./components/Checkout";
import Home from "./components/Home";

function App() {
  return (
   <BrowserRouter>
     <main>
       <Switch>
           <Route exact path="/" component={Home}/>
         <Route exact path="/userInfo" component={UserInfo}/>
         <Route exact path="/chooseRoom" component={ChooseRoom}/>
        <Route exact path="/checkout" component={Checkout}/>
       </Switch>
     </main>
   </BrowserRouter>
  );
}

export default App;
