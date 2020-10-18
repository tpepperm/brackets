module.exports = function check(str, bracketsConfig) {
    var arr = [];
    var l = 0;
    var flag = 0;
    for (let i = 0; i < str.length; i++) {
        flag = 0;
        for (let k = 0; k < bracketsConfig.length; k++) {
            if (bracketsConfig[k][1] === str[i]) {
                if (arr[l - 1] == bracketsConfig[k][0]) {
                    arr.pop();
                    l -= 1;
                    flag = 2;
                    break;
                }
            }
        }
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (bracketsConfig[j][0] === bracketsConfig[j][1] && flag == 2) {
                break;
            }
            if (bracketsConfig[j][0] === str[i]) {
                arr.push(str[i]);
                l += 1;
                flag = 1;
                break;
            }
        }
        if (flag == 0) {
            return false;
        }
    }
    if (arr.length == 0) {
        return true;
    } else {
        return false;
    }
};
