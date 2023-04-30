import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './style.css'
import InventSearchResult1 from './views/invent-search-result1'
import InventLowStockItems from './views/invent-low-stock-items'
import InventDashboard from './views/invent-dashboard'
import AddInventItem from './views/add-invent-item'
import UpdateInventItem from './views/update-invent-item'
import ItemDetails from './views/item-details'
import { store } from './redux/store'
import { Provider } from 'react-redux'
import {ToastContainer} from 'react-toastify'

const App = () => {
  return (
    <Provider store ={store}>
      <ToastContainer />
        <Router>
          <div>
            <Route component={InventDashboard} exact path="/invent-dashboard" />
            <Route component={InventSearchResult1} exact path ="/invent-search-result1"/> 
            <Route component={AddInventItem} exact path="/add-invent-item" />
            <Route component={UpdateInventItem} exact path="/update-invent-item/:id" />
            <Route component={ItemDetails} exact path="/item-details/:id" />
            <Route component={InventLowStockItems} exact path ="/invent-low-stock-items"/> 
          </div>
        </Router>
    </Provider>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
