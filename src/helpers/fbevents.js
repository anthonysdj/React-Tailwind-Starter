// -------------------------------------------
// FB Events emitter
// -------------------------------------------
const fbEvents = label => {
    if (window.fbq !== undefined) {
        window.fbq("track", label);
    }
};

export default fbEvents;
