(function () {
    // 1.想使用flag
    if (moduleA.flag) {
        console.log('小明是天才');
    }

    // 2.想使用sum函数
    console.log(moduleA.sum(40, 50));
})()

// var aaa = require('./aaa.js')
// var flag = aaa.flag
// var sum = aaa.sum

// var { flag, sum } = require('./aaa.js')