import React from 'react'
import "./cssComponent/footerwibu.css"
function FooterWibu() {
    return (
        <div
            className="mt-0 p-1 bg-dark text-white text-center justify-content-center"
            id="footerP"
        >
            <p>
                Made by group 5{" "}
                <a
                    href="https://github.com/tienhoangggg/cnpm.git"
                    className="text-muted"
                >
                    Github: Group 5
                </a>
            </p>
            <p>Wibu Wallpaper</p>
        </div>
    )
}

export default FooterWibu