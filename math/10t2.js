/**
 * 获取数字的整数部分和小数部分
 * 通过split(.)来获取数字的整数和小数
 * @param { Number }                    n 数字
 * @returns { zs: Number, xs: Number }
 */
function splitNumber(n) {
    const ns = n.toString().split(".");

    return {
        zs: ns[0] * 1,
        xs: ns.length > 1 ? (ns[1] * 1) / (ns[1].length * 10) : 0
    };
}

/**
 * 处理小数部分
 * @param {*} f
 * @returns
 */
function f10To2(f) {
    const bits = [];
    let first = f * 2;

    while (first) {
        if (bits.length >= 52) {
            break;
        }

        bits.push(Math.floor(first));

        const xs = first.toString().split(".")[1];

        if (!xs) {
            break;
        }

        first = (xs / (xs.length * 10)) * 2;
    }

    return bits;
}

/**
 * 数字在内存中的表示
 * 		0：符号位
 * 		1~11：11位用来存储指数部分
 * 		12~63：52位用来存储小数部分
 * 十进制转换二进制的方法
 *
 * 小数部分：
 * 		1. 小数部分乘以2
 * 		2. 如果超过1，则再取小数部分，记为1，否则记为0
 * 		3. 循环1-2，直到值为0或者位数超过52
 *
 * 整数部分：
 * 		1. 除以2
 * 		2. 对2取模
 * 		3. 循环1-2，直到余数<2
 *		4. 对结果倒序
 *  
 * 为什么 0.1 + 0.2 !== 0.3 ?
 * 明白了小数是如何转换二进制的，就能明白为什么会缺失精度
 * 
 *
 * @param {*} f
 * @returns
 */
function f10To2F(n) {
    const num = splitNumber(n);
    const bits = [];
    let first = num.zs;

    while (first > 1) {
        const left = first % 2;

        bits.push(left);
        first = (first - left) / 2;
    }

    bits.push(first);

    return bits
        .reverse()
        .concat(["."])
        .concat(f10To2(num.xs));
}

console.log(f10To2F(0.3).join(""));
console.log(f10To2F(0.2).join(""));
console.log(f10To2F(0.5).join(""));
console.log(f10To2F(0.9).join(""));
console.log(f10To2F(100.2).join(""));
