import cv from '@u4/opencv4nodejs';

async function matchImageOnScreen(templatePath) {
    const template = await cv.imreadAsync('icon.png');
    const screen = await cv.imreadAsync('screen.png');
    const result = await cv.matchTemplateAsync(screen, template, cv.TM_CCOEFF_NORMED);
    const minMax = await cv.minMaxLocAsync(result);
    return {
        x: minMax.maxLoc.x,
        y: minMax.maxLoc.y,
        width: template.cols,
        height: template.rows
    };
}

matchImageOnScreen();