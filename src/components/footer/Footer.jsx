import "./Footer.css";
import facebook from "../../images/logos/footer-logo_facebook.png";
import twitter from "../../images/logos/footer-logo_twitter.png";
import instagram from "../../images/logos/footer-logo_instagram.png";

function Footer() {
    return (
        <div>
            <div className="footer">
                <div className="footer__container">
                    <div className="item">
                        <h4>HelloFresh</h4>
                        <ul>
                            <li>Students</li>
                            <li>Blog</li>
                            <li>Recipes</li>
                            <li>Hero Discounts</li>
                            <li>Recipe Directory</li>
                            <li>California Supply Chains Act</li>
                            <li>Delivery Options</li>
                        </ul>
                    </div>
                    <div className="item">
                        <h4>Our company</h4>
                        <ul>
                            <li>HelloFresh Group</li>
                            <li>Sustainability</li>
                            <li>Careers</li>
                            <li>Press</li>
                        </ul>
                    </div>
                    <div className="item">
                        <h4>Work with us</h4>
                        <ul>
                            <li>Partner</li>
                            <li>Influencers</li>
                            <li>Affiliates</li>
                        </ul>
                    </div>
                    <div className="item">
                        <h4>Contact us</h4>
                        <ul>
                            <li>Help Center & FAQ</li>
                            <li>Partnership Inquiries</li>
                            <li>Corporate Sales</li>
                            <li>
                                Do Not Sell My Personal <br /> Information
                            </li>
                        </ul>
                    </div>
                    <div className="imet">
                        <h4>Download our app</h4>
                        <ul>
                            <li>
                                Manage your deliveries from anywhere, anytime.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__footer">
                <div className="footer__footer__container">
                    <div className="footer__links">
                        <p>© HelloFresh 2022</p>
                        <a href="#">Terms and Conditions</a>
                        <a href="#">Privacy</a>
                        <a href="#">Accessibility</a>
                    </div>
                    <div className="footer__logo">
                        <a href="#">
                            <img src={facebook} alt="" />
                        </a>
                        <a href="#">
                            <img src={twitter} alt="" />
                        </a>
                        <a href="#">
                            <img src={instagram} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
