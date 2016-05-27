Object.values = (obj: any): any[] => {
	let result: any[] = [];
	
	Object.keys(obj).forEach(key => result.push(obj[key]))
	
	return result;
}
