import React from 'react';

const Section = ({ bg, mw, children }) => {
    if (!mw) mw = 'lg';

    return (
        <div className={`pt-20 pb-20 bg-${bg}`}>
            <div className={`m-auto max-w-${mw}`}>
                {children}
            </div>
        </div>
    );
}

export default Section;