import "./Section6.css";
import down from "../../images/icons/down-icon.png";

function Section6() {
    return (
        <div className="section6">
            <h2>More questions?</h2>
            <div className="questions">
                <div className="question">
                    <button>
                        <img src={down} alt="" />
                    </button>
                    <p>How does HelloFresh’s meal kit delivery service work?</p>
                </div>
                <div className="question">
                    <button>
                        <img src={down} alt="" />
                    </button>
                    <p>
                        Which food meal plans & recipes does HelloFresh offer?
                    </p>
                </div>
                <div className="question">
                    <button>
                        <img src={down} alt="" />
                    </button>
                    <p>How many times a week does HelloFresh deliver?</p>
                </div>
                <div className="question">
                    <button>
                        <img src={down} alt="" />
                    </button>
                    <p>Does HelloFresh give nutrition & calorie information?</p>
                </div>
                <div className="question">
                    <button>
                        <img src={down} alt="" />
                    </button>
                    <p>How do I recycle my HelloFresh box?</p>
                </div>
                <div className="question">
                    <button>
                        <img src={down} alt="" />
                    </button>
                    <p>
                        Why should I choose HelloFresh as my meal kit service?
                    </p>
                </div>
                <div className="question">
                    <button>
                        <img src={down} alt="" />
                    </button>
                    <p>How much does HelloFresh cost?</p>
                </div>
                <div className="question">
                    <button>
                        <img src={down} alt="" />
                    </button>
                    <p>Does HelloFresh support a healthy lifestyle?</p>
                </div>
                <div className="question">
                    <button>
                        <img src={down} alt="" />
                    </button>
                    <p>Can I skip a week of delivery?</p>
                </div>
            </div>
        </div>
    );
}

export default Section6;
