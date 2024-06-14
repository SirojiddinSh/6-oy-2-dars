import "./Section4.css";
import section4Card1Img from "../../images/cards-image/section4-card1-img.png";
import section4Card2Img from "../../images/cards-image/section4-card2-img.png";
import section4Card3Img from "../../images/cards-image/section4-card3-img.png";
import section4Card4Img from "../../images/cards-image/section4-card4-img.png";

function Section4() {
    return (
        <div className="section4">
            <h2>Cook it. Love it. Tag it #HelloFreshPics</h2>
            <p className="section4-p">Follow us on Instagram @hellofresh</p>
            <div className="section4-cards">
                <div className="section4-card">
                    <img src={section4Card1Img} alt="" />
                    <h4>bdanielle1285</h4>
                    <p>
                        My little chef helping me make dinner tonight and trying
                        out some of his new kitchen utensils I got him!
                    </p>
                </div>
                <div className="section4-card">
                    <img src={section4Card2Img} alt="" />
                    <h4>lilpepthekelpie</h4>
                    <p>I’m helping out 🧑🏽‍🍳 #masterchef #bestboy</p>
                </div>
                <div className="section4-card">
                    <img src={section4Card3Img} alt="" />
                    <h4>mandi14eid</h4>
                    <p>
                        Drew and the kids made mom dinner tonight! Drew and I
                        had our doubts but WOW was it tasty!
                    </p>
                </div>
                <div className="section4-card">
                    <img src={section4Card4Img} alt="" />
                    <h4>our_lovely_stride</h4>
                    <p>
                        We had a cooking class yesterday and we had such an
                        amazing time. 😁 They had such a great time working as a
                        team and I can’t wait for our weekly cooking class 🙌🏻😁
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Section4;
