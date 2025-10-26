import React from "react";
import profile from "../assests/img/Jay.png";

export default function Header() {
    return (
        <div className="header">
            <img
                src={profile}
                alt="Jay Pawar"
                className="profile-img"
            />
            <h1>Jay Pawar</h1>
            <p>Full Stack Developer | MERN | Backend Enthusiast</p>
            <p className="tagline">Building Scalable Web Experiences 🚀</p>
            <div className="contact">
                📍 Vesu, Surat · 📞 9016351622 · ✉️{" "}
                <a href="mailto:pawarjay684@gmail.com">pawarjay684@gmail.com</a>
                <br />
                🔗 GitHub:{" "}
                <a href="https://github.com/jaypawar12" target="_blank" rel="noreferrer">
                    jaypawar12
                </a>{" "}
            </div>
        </div>
    );
}
