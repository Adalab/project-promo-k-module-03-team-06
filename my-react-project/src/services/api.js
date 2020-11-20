

const sendData = () => {
	return fetch(
		'https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/',
		{ method: 'POST' }
	)
		.then((response) => response.json())
		.then((result) => {
			showURL(result);
		});
};

const showURL = (result) => {};




export default sendData;
