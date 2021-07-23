/*eslint linebreak-style: ["error", "windows"]*/
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PracticePage from "./Pages/PracticePage";
import Note from "./Components/Note";
import Confirmation from "./Pages/Confirmation";
import "./Style/App.css";



function App() {
	return (
		<div className="app">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Login}></Route>
					<Route path="/login" component={Login}></Route>
					<Route path="/register" component={Register}></Route>
					<Route path="/home" component={Home}></Route>
					<Route path="/practice" component={PracticePage}></Route>
					{/* <Route path="/notes" component={Note}></Route> */}
					<Route path="/confirmation" component={Confirmation}></Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
