import OrderCatalogue from './component/home/order-catalogue.component';
import DisplayCart from './component/cart/cart.compoennt';
import HeaderFooter from './component/Header.component';
import {Route, Switch} from 'react-router-dom';

// import Catalogue from './assests/CatalogueData'

const Dashboard = () => <div>Dashborad</div>
function App() {
  return (  
            <>
             <HeaderFooter/>
                      <Switch>
                          <Route exact path='/'  component ={Dashboard}/>
                          <Route exact path='/Catalogue' component ={OrderCatalogue}/>
                          <Route exact path='/cart'  component ={DisplayCart}/>
                      </Switch>
            <HeaderFooter isFooter/>
            </>
  );
}

export default App;
