import OrderCatalogue from './component/home/order-catalogue.component';
import DisplayCart from './component/cart/cart.compoennt';
import HeaderFooter from './component/Header.component';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store/store'
function App() {
  return (  
      <Provider store={store}>
        <BrowserRouter>
            <HeaderFooter/>
            <Switch>
                <Route path='/' exact component ={OrderCatalogue}/>
                <Route path='/orderCatalogue'  exact component ={OrderCatalogue}/>
                <Route path='/cart' exact component ={DisplayCart}/>
            </Switch>
            <HeaderFooter isFooter/>
        </BrowserRouter>
      </Provider>
  );
}

export default App;
