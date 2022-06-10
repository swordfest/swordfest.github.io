import React from "react";

export function getFlagEmoji(countryCode) {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

export function getPercentage(portion, total) {
	return Math.trunc((portion * 100) / total);
}

export default getFlagEmoji;