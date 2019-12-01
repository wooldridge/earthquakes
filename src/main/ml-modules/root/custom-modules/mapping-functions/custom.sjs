'use strict';

function dateToEpoch(year, month, day, hour, minute, second) {
	let seconds = new Date(year, month-1, day, hour, minute, second).getTime() / 1000;
	return seconds;
}

const regionMap = {
	10: "Central, Western and S. Africa",
	15: "Northern Africa",
	20: "Antarctica",
	30: "East Asia",
	40: "Central Asia and Caucasus",
	50: "Kamchatka and Kuril Islands",
	60: "S. and SE. Asia and Indian Ocean",
	70: "Atlantic Ocean",
	80: "Bering Sea",
	90: "Caribbean",
	100: "Central America",
	110: "Eastern Europe",
	120: "Northern and Western Europe",
	130: "Southern Europe",
	140: "Middle East",
	150: "North America and Hawaii",
	160: "South America",
	170: "Central and South Pacific"
}

function codeToRegion(code) {
	let region = regionMap[code] ? regionMap[code] : '';
	return region;
}

module.exports = {
	dateToEpoch: dateToEpoch,
	codeToRegion: codeToRegion
};