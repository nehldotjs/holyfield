import React from 'react'
import "../styles/footer.css"
import { Link } from 'react-router-dom'

import logo from "../Assets/images/3bf53f3da3d8c792b88e415ffe37d611fd47e0b296bcb588b656262e105731f5.svg"
import SocialButton from "../PropAssetss/SocialButton"


function Footer() {
    return (
        <div className='footer-wrapper'>
            <div className="footer-links-wrapper">
                <div className="footerLogoWrapper">

                    <div className="footerLogoContainer">
                        <img src={logo} alt="holy field logo" />
                        <h2>Holy Field</h2>
                    </div>
                    <SocialButton />

                </div>

                <div className="footer-quick-links">
                    <h2>link Header</h2>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                </div>
                <div className="footer-quick-links">
                    <h2>link Header</h2>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                </div>
                <div className="footer-quick-links">
                    <h2>link Header</h2>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                    <Link>LINKS HERE</Link>
                </div>
            </div>

            <div className="allRightsReserved">
                All right reserved &copy; 2025 Holly-Field Inc
            </div>
        </div>
    )
}

export default Footer
