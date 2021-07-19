/*eslint linebreak-style: ["error", "windows"]*/
import "./Style/App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";


function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Login}></Route>
					<Route path="/login" component={Login}></Route>
					<Route path="/register" component={Register}></Route>
					<Route path="/Home" component={Home}></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
