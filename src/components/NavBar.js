import React from "react";
// import Hello from "./greetUser.js";
import IconLogo from "../images/icon-logo.js";
import IconBuddah from "../images/icon-buddah.js";
import IconAbout from "../images/icon-about.js";
import IconMeditate from "../images/icon-meditate.js";
import IconChat from "../images/icon-chat.js";

// import Logo from "./logo.js";
// import WelcomeScene from "./welcome";

function NavBar({ setSelectedTab }) {
    return (
        <footer>
            {/* <div>
                <Hello />
            </div> */}
            <div onClick={() => setSelectedTab("home")}>
                <div>
                    <IconBuddah />
                </div>
                <div>My Zen</div>
            </div>
            <div onClick={() => setSelectedTab("study")}>
                <div>
                    <IconLogo />
                </div>
                <div>Study</div>
            </div>
            <div onClick={() => setSelectedTab("meditate")}>
                <div>
                    <IconMeditate />
                </div>
                <div>Practice</div>
            </div>
            <div onClick={() => setSelectedTab("about")}>
                <div>
                    <IconAbout />
                </div>
                <div>About</div>
            </div>
            <div onClick={() => setSelectedTab("chat")}>
                <div>
                    <IconChat />
                </div>
                <div>Chat</div>
            </div>
        </footer>
    );
}

export default NavBar;
