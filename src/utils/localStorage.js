export function getStorage(key) {
	const appData = localStorage.getItem('RTapp');
	const parsedData = JSON.parse(appData || '{}');
	return parsedData[key];
}

export function setStorage(key, value) {
	const appData = localStorage.getItem('RTapp');
	const parsedData = JSON.parse(appData || '{}');

	let newData = {};
	newData[key] = value;

	const stringifyData = JSON.stringify({
		...parsedData,
		...newData
	});

	localStorage.setItem('RTapp', stringifyData);
}