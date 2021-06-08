import React from 'react'
import "./Footer.scss"
import TwitterIcon from '@material-ui/icons/Twitter';
import TelegramIcon from '@material-ui/icons/Telegram';
import { Divider } from '@material-ui/core';

function Footer() {
    return (
        <div className="footer">
            <div className="footerContainer">
                <div className="upperFooter">
                    <div className="email subFooter">
                        <h3 className="footerSubHeading">Get the latest Polkapanda updates</h3>
                        <div className="email_Box"> 
                            <input type="email" placeholder="Your e-mail"/>
                            <h4>I'm in</h4>
                        </div>
                    </div>
                    <div className="Polkapanda subFooter">
                        <h3 className="footerSubHeading">Polkapanda</h3>
                        <ul>
                            <li>Explore</li>
                            <li>How it works</li>
                            <li>Create</li>
                            <li>Support – through to Zendesk</li>
                        </ul>
                    </div>
                    <div className="Community subFooter">
                        <h3 className="footerSubHeading">Community</h3>
                        <ul>
                            <li>Kwik Token</li>
                            <li>Discussion</li>
                            <li>Voting – Can we copy Raribles?</li>
                            <li>Suggestions?</li>

                        </ul>
                    </div>
                    <div className="Social subFooter">
                        <h3 className="footerSubHeading">Social</h3>
                        <ul>
                            <li><TwitterIcon /></li>
                            <li><TelegramIcon /></li>
                            <li><i class="fab fa-discord"></i></li>
                        </ul>
                    </div>
                </div>

                <hr />

                <div className="lowerFooter">
                    <h4>&copy; Rarible, Inc. All rights reserved.</h4>
                    <h4>Terms</h4>
                    <h4>Privacy</h4>
                </div>
            </div>
        </div>
    )
}

export default Footer
