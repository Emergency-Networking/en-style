import Color from 'color';

// Returns either a light or dark color for text based on the background color
export const getTextColorByBackground = (backgroundColor, { lightnessThreshold = 0.5, lightColor = '#fff', darkColor = '#000' } = {}) => {
    try {
        // Counting the perceptive luminance (human eye favors green color...)
        let color = Color(backgroundColor);
        let a = 1 - (0.299 * color.color[0] + 0.587 * color.color[1] + 0.114 * color.color[2]) / 255;
        let isLight = a < lightnessThreshold;
        return isLight ? darkColor : lightColor;
    } catch (error) {
        return darkColor;
    }
};

export default {
    getTextColorByBackground,
};
