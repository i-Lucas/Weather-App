import { render } from "react-dom";
import GetLocation from "./Components/Location";

function App() {

    return (<GetLocation />)
}

render(<App />, document.querySelector(".root"));