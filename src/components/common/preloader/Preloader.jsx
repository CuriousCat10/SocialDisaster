import { Component } from "react";
import preLoader from "../../../assets/images/preloader.svg";

class Preloader extends Component {

    render() {
        return (
            <div>
                <img src={preLoader}/>
            </div>
        );
    }
}

export default Preloader;
