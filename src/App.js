import Sidebar from "./Components/Sidebar/Sidebar";
import Topbar from "./Components/Topbar/Topbar";
import "./App.css";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import UserList from "./Components/UserList/UserList";
import User from "./Components/User/User";
import NewUser from "./Components/NewUser/NewUser";
import ProductList from "./Components/ProductList/ProductList";
import Product from "./Components/Product/Product";

function App() {
  return (
    <Router>
      <>
        <Topbar />
        <div className="container">
          <Sidebar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/users">
              <UserList />
            </Route>
            <Route path="/newUser">
              <NewUser />
            </Route>
            <Route path="/user/:userId">
              <User />
            </Route>
            <Route path="/products">
              <ProductList />
            </Route>
            <Route path="/newProduct">
              <NewUser />
            </Route>
            <Route path="/Product/:productId">
              <Product />
            </Route>
          </Switch>
        </div>
      </>
    </Router>
  );
}

export default App;
