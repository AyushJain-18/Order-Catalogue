import OrderCatalogue from './component/home/order-catalogue.component';
import DisplayCart from './component/cart/cart.compoennt';
import HeaderFooter from './component/Header.component';
import {Route, Switch} from 'react-router-dom';
import  Dashboard from './component/Charts/charts'
function App() {
  return (  
            <>
             <HeaderFooter/>
                      <Switch>
                          <Route exact path='/' component ={OrderCatalogue}/>
                          <Route exact path='/Charts'  component ={Dashboard}/>
                          <Route exact path='/cart'  component ={DisplayCart}/>
                      </Switch>
            <HeaderFooter isFooter/>
            </>
  );
}

export default App;
