import "./Section3.css";

function Section3() {
    return (
        <div className="section3">
            <h2>Over 30+ fresh recipes every week</h2>
            <p>Easy meals designed by professional chefs and nutritionists</p>
            <div className="section3-cards">
                <div className="section3-card1">
                    <h3>MEAT & VEGGIES</h3>
                    <p>OUR MOST POPULAR PLAN</p>
                </div>
                <div className="section3-card2">
                    <h3>VEGGIE</h3>
                    <p>& PLANT-BASED MEALS</p>
                </div>
                <div className="section3-card3">
                    <h3>FAMILY FRIENDLY</h3>
                    <p>KID-TESTED RECIPES</p>
                </div>
                <div className="section3-card4">
                    <h3>FIT & WHOLESOME</h3>
                    <p>FOR A BALANCED LIFESTYLE</p>
                </div>
            </div>
            <button>View our menus</button>
        </div>
    );
}

export default Section3;
