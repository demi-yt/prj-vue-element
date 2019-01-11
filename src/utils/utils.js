/**
 * @description 判断一个变量是否为空
 * @author demi
 * @param obj
 * @returns {boolean}
 */
function isEmpty(obj) {
    switch (typeof obj) {
        case 'undefined':
            return true;
        case 'string'://去掉首尾换行/回车/tab符号
            if (obj.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, '').length === 0) return true;
            break;
        case 'number':
            if(0 === obj || isNaN(obj)) return true;
            break;
        case 'boolean':
            if(!obj) return true;
            break;
        case 'object':
            if(null === obj || obj.length === 0) return true;
            for(let i in obj){
                return false;
            }
            return true;
    }
    return false;
}
/**
 * @description 判断是否为空
 * @author demi
 * @param obj
 * @returns {boolean}
 */
function isNull(obj){
    return typeof obj === 'undefined' || obj === null || obj === '';
}
/**
 * @description 模拟接口返回值判断
 * @author demi
 * @param obj
 * @returns {boolean}
 */
function isCode(obj) {
    if(!isNull(obj)) {
        if(obj == '0000') {
            return true;
        }else{
            return false;
        }
    }
}
export {
    isEmpty,
    isNull,
    isCode
}