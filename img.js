const imagemin = require('imagemin');
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminPngquant = require('imagemin-pngquant');
 
(async () => {
    const files = await imagemin(['/home/rudra/Documents/img/*.{jpg,png}'], {
        destination: 'build/images',
        plugins: [
          imageminMozjpeg({quality: 50}),
          imageminPngquant({
            quality: [0.6, 0.8]
          })
        ]
    });
 
    console.log(files);
})();