import "./Section2.css";
import section2Bg from "../../images/bg/section2-bg-color.png";

function Section2() {
    return (
        <div className="section2">
            <img src={section2Bg} alt="" />
            <div>
                <h3>What’s inside each box?</h3>
                <p>
                    ✓ Easy-to-follow recipes with clear nutritional <br /> info
                </p>
                <p>
                    ✓ High-quality ingredients sourced straight from the
                    <br /> farm
                </p>
                <p>
                    ✓ Convenient meal kits that fit perfectly in the
                    <br /> fridge
                </p>
                <p>
                    ✓ A fun cooking experience that makes you feel
                    <br /> unstoppable
                </p>
                <p className="green">
                    ✓
                    <a href="#">
                        {" "}
                        Innovative packaging designed to reduce waste
                    </a>
                </p>
                <button>View our plans</button>
            </div>
        </div>
    );
}

export default Section2;
