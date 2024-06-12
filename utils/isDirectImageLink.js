export const isDirectImageLink = (url) => {
    const imageExtensions = ['jpg', 'png'];

    const urlExtension = url.split('.').pop().split(/\#|\?/)[0];

    return imageExtensions.includes(urlExtension);
}