import Illustration from "./assets/illustration-mockups.svg";
import Logo from "./assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF,
    faTwitter,
    faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import "./App.scss";

function App() {
    return (
        <main>
            <div className="container">
                <div className="container-content">
                    <div className="left">
                        <img src={Logo} alt="" className="logo" />
                        <img
                            src={Illustration}
                            alt=""
                            className="illustration"
                        />
                    </div>
                    <div className="right">
                        <div className="information">
                            <h1>Build The Community Your Fans Will Love</h1>
                            <p>
                                Huddle re-imagines the way we build communities.
                                You have a voice, but so does your audience.
                                Create connections with your users as you engage
                                in genuine discussion.{" "}
                            </p>
                            <button>Register</button>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="icon">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="icon">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                </footer>
            </div>
        </main>
    );
}

export default App;
