export const getDeviceType = () => {
    let width = window.innerWidth;

    if (width <= 1024) {
        return 'mobile';
    }
    else {
        return 'desktop';
    }
}

