const { DateTime } = require('luxon');
const HtmlMin = require('html-minifier');
const ErrorOverlay = require('eleventy-plugin-error-overlay');

module.exports = eleventyConfig => {

    // Copy the `css` directory to the output
    eleventyConfig.addPassthroughCopy('css');
  
    // Watch the `css` directory for changes
    eleventyConfig.addWatchTarget('css');

    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc' }).toFormat(
          'dd LLL yyyy'
        );
    });

    eleventyConfig.setTemplateFormats(['md']);
    eleventyConfig.addPlugin(ErrorOverlay);

    // eleventyConfig.addTransform('htmlmin', (content, outputPath) => {
    //     if (outputPath.endsWith('.html')) {
    //         let minified = HtmlMin.minify(content, {
    //             useShortDoctype: true,
    //             removeComments: true,
    //             collapseWhitespace: true,
    //         });
    //         return minified;
    //     }
    //     return content;
    // });

    return {
        dir: {
            input: 'src',
            output: '_site',
            includes: '_includes',
            data: '_data',
        },
        jsDataFileSuffix: '.data',
    };
};