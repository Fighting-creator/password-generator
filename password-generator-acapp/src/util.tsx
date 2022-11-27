// 随机更多安全值
export const secureMathRandom = () => {
    return window.crypto.getRandomValues(new Uint32Array(1))[0] / (Math.pow(2, 32) - 1);
};

// 生成函数
// 所有负责返回随机值的函数，我们将使用它来创建密码。
const getRandomLower = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getRandomUpper = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getRandomNumber = () => {
    return String.fromCharCode(Math.floor(secureMathRandom() * 10) + 48);
};

const getRandomSymbol = () => {
	const symbols = `!"#$%&\'()*+,-./:;<=>?@[\\]^_\`{|}~`;
	return symbols[Math.floor(Math.random() * symbols.length)];
};

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

// 负责生成密码并返回密码的函数。
export const generatePassword = (length: number, lower: boolean, upper: boolean, number: boolean, symbol: boolean) => {
	let generatedPassword = "";
	const typesCount = (lower ? 1 : 0) + (upper ? 1 : 0) + (number ? 1 : 0) + (symbol ? 1 : 0);
	const typesArr = [{ lower }, { upper }, { number }, { symbol }].filter(item => Object.values(item)[0]);
	if (typesCount === 0) {
		return "";
	}
	for (let i = 0; i < length; i++) {
		typesArr.forEach(type => {
			const funcName = Object.keys(type)[0];
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
			generatedPassword += randomFunc[funcName]();
		});
	}
	return generatedPassword.slice(0, length)
									.split('').sort(() => Math.random() - 0.5)
									.join('');
};