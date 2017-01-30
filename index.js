var fil = {};

fil.parse = (function (file, params, cb) {

    var counter = 0;
    var stringifyFile = JSON.stringify(file);

    if (!!params && params.length > 0) {

        params.forEach(function (item) {

            stringifyFile = stringifyFile.replace(item.key, item.value);
            counter++;

            if (counter === params.length) {
                cb(JSON.parse(stringifyFile));
            }
        });
    }
});

module.exports = fil;
