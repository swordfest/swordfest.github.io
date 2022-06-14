import React, { useState, useEffect } from "react";
import axios from "axios";

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

export function GetAPIEndPoint (url) {
	const [objectAPI, setObjectAPI] = useState([]);
	
	useEffect(() => {

		axios
			.get(url)
			.then((response) => {
				setObjectAPI(response.data);
			})
			.catch((err) => {
				// console.log(err)
			});

	}, []);
	return objectAPI;
}

export default {getFlagEmoji, getPercentage, GetAPIEndPoint};