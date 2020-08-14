import React from 'react';

const Section = ({ bg, bgColor, opacity, mw, gutter, children }) => {
    if (!mw) mw = 'lg';
    if (!gutter || typeof gutter !== 'number') gutter = 10;
    if (!bgColor) bgColor = 'transparent';
    if (!opacity || typeof opacity !== 'number') opacity = 100;

    let background = { backgroundImage: 'transparent' }

    if (bg) {
        background = {
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPositionY: 'top'
        }
    }

    return (
        <div style={background} className={`bg-opacity-${opacity} bg-${bgColor} pt-${gutter} pb-${gutter} px-5 bg-${bg}`}>
            <div className={`mx-auto max-w-screen-${mw}`}>
                {children}
            </div>
        </div>
    );
}

export default Section;