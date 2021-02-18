import React from "react";
import dataArray from "./data";
import FileteredPoemsTable from "./FileteredPoemsTable";
import SignIn from "./localStorage";
import Unsplash from "./unsplash";
// import WelcomeScene from "./welcome";
// import SignIn from "./localStorage";
// import Hello from "./hello"

/* Final Render where we pass in our data as props of FilteredPoemsTable*/

class FinalRender extends React.Component {
    render() {
        // localStorage.clear();
        // console.log(localStorage.currentPoem);
        if (localStorage.currentPoem) {
            return (
                <div>
                    <FileteredPoemsTable poems={dataArray} />
                    <Unsplash></Unsplash>
                </div>
            );
        } else {
            return (
                <div className="onboarding">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* <h1>Welcome</h1> */}
                    <h2>Learn how to be Zen...</h2>
                    <p>Greetings, may we call you by name?</p>
                    <SignIn />
                </div>
            );
        }
    }
}

export default FinalRender;
