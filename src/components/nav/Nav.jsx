import "./Nav.css";
import navLogo from "../../images/logos/nav-logo.png";
import down from "../../images/icons/down-icon.png";

function Nav() {
    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li>
                            <img src={navLogo} alt="" />
                        </li>
                        <li>
                            <a href="#">Our Plans</a>
                        </li>
                        <li>
                            <a href="#">How It Works</a>
                        </li>
                        <li>
                            <select>
                                <option value="1">Our Menus</option>
                            </select>
                        </li>
                        <li>
                            <a href="#">Gift Cards</a>
                        </li>
                        <li>
                            <select>
                                <option value="1">Sustainability</option>
                            </select>
                        </li>
                        <li>
                            <a href="#">Thanksgiving Box</a>
                        </li>
                    </ul>
                    <button>Login in</button>
                </nav>
                <div className="nav-bg-image">
                    <div>
                        <h2>Take the stress </h2>
                        <h2>out of mealtime</h2>
                        <p>America's Most Popular Meal Kit</p>
                        <button className="btn">View our plans</button>
                    </div>
                    <button className="down">
                        <img src={down} alt="" />
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Nav;
