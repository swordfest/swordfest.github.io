import React from "react";

function getFlagEmoji(countryCode) {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

function getPercentage(portion, total) {
	return Math.trunc((portion * 100) / total);
}

export default {getFlagEmoji, getPercentage};