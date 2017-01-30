Fil
==============

Fil is a json file decorator

## Install

### Locally

```bash
npm install fil-file --save
```

## Usage

```javascript

var filFile = require('fil-file');

var fileDef =
        [{
        key: "$startDate",
        value: "2017-01-23T00:00:00.001Z"
        },
        {
            key: "$endDate",
            value: "2017-01-30T00:00:00.001Z"
        }];


filFile.parse(testData, fileDef, function (result) {
        console.log(result);
    });
    
 ```
