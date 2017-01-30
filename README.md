Fil
==============

Fil is a json file decorator

## Install

### Locally

```bash
npm install fil-file --save
```

## Usage

```javacript

var filFile = require('fil-file');

var fileDef =
    [{
        key: "$date",
        value: "123"
    },
        {
            key: "$startDate",
            value: "10.10.40.60"
        }];


filFile.parse(testData, fileDef, function (result) {
        console.log(result);
    });


```
