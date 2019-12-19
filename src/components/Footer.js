import React from 'react';

function Footer (props) {
    return (
        <div>
            <footer>
                <p onClick={props.onSoundClick} className="wubba">Wubba Lubba Dub Dub®</p>
            </footer>
        </div>
    )
}

export default Footer;