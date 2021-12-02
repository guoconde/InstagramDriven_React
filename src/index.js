import ReactDOM from "react-dom";
import NavBar from "./NavBar";
import Corpo from "./Corpo";
import FundoMobile from "./FundoMobile";

function App() {
    return (
        <div>
            <NavBar></NavBar>
            <Corpo></Corpo>
            <FundoMobile></FundoMobile>
        </div>
    )
}

const app = App();
ReactDOM.render(app, document.querySelector(".root"));