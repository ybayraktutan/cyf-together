/*eslint linebreak-style: ["error", "windows"]*/
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./Pages/Home";
import PracticePage from "./Pages/PracticePage";
import "bootstrap/dist/css/bootstrap.min.css";
import Confirmation from "./Pages/Confirmation";
import AllReflections from "./Pages/AllReflections";
import TermsConditions from "./Pages/TermsConditions";
import ReflectionDetails from "./Pages/ReflectionDetails";
import PracticesCompleted from "./Pages/PracticesCompleted";
import { PageNotFound } from "./Pages/PageNotFound";
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
					<Route path="/complete" component={PracticesCompleted}></Route>
					<Route path="/practice" component={PracticePage}></Route>
					<Route path="/confirmation" component={Confirmation}></Route>
					<Route path="/termsconditions" component={TermsConditions}></Route>;
					<Route exact path="/reflects">
						<AllReflections />
					</Route>
					<Route path="/reflects/:practiceId">
						<ReflectionDetails />
					</Route>
					<Route path="*">
						<PageNotFound />
					</Route>
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
