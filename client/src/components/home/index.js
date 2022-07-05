import React from "react";
// import 'bootstrap/dist/css/bootstrap.min.css';
import '../home/style.css'
// import ClimbingImage from '../../assets/logo/The Climbing Wall-logos_transparent.png';

const Home = () => {


    return (
        <>
            <section className="home-holds-all">
                <div className="home-background-pic-text">
                    <div className=" banner-h-width">
                        <h1 className="logo-text">The Climbing Wall</h1>
                    </div>

                    {/* <img alt='logo' src={ClimbingImage}></img> */}
                    <div className=" banner-p-width">
                        <p className="logo-subtext">
                            Whether you're at the crag or in the gym logging your progress
                            is an important step to climbing!
                        </p>
                    </div>
                </div>

                <section className="home-holds-3part-page-info">
                    <div className="home-info-part margin-top2">
                        <h1 className="part3-text">Things to come</h1>
                        <p className="part3-subtext">Currently this is only a web app. However in the unforseen future we plan on making this a full on mobile app.</p>
                    </div>

                    <div className="home-info-part">
                        <h1 className="part3-text">We are The Climbing Wall</h1>
                        <p className="part3-subtext">Made by climbers who share the same passion for the sport as you do!</p>
                    </div>

                    <div className="home-info-part margin-top2">
                        <h1 className="part3-text">Log some sends</h1>
                        <p className="part3-subtext">Track your progress!</p>
                    </div>
                </section>

                <section className="">
                    <div className="home-holds-moreinfo">
                        <p className="part3-subtext">We've all been there. Wanting to get better and trying your hardest to do that. 
                        One big and important step to getting better is logging your sends and projects. As you train and improve you can see your strengths and weaknesses.
                         Along with what does and doesn't work for you.
                        </p>
                    </div>

                    <div className="home-holds-moreinfo">
                        <p className="part3-subtext">By also logging your progress you'll also get to see your most recent and oldest sends. </p>
                    </div>
                </section>
            </section>
        </>
    )
}

export default Home;