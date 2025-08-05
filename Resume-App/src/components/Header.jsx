import React from "react";
import profile from "../assests/img/Jay P.jpg";

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
            <div className="contact">
                📍 Vesu, Surat · 📞 6355138841 · ✉️{" "}
                <a href="mailto:pawarjay684@gmail.com">pawarjay684@gmail.com</a>
                <br />
                🔗 GitHub:{" "}
                <a href="https://github.com/jaypawar12" target="_blank" rel="noreferrer">
                    jaypawar12
                </a>{" "}
                · 🌐 Portfolio: Coming Soon
            </div>
        </div>
    );
}
