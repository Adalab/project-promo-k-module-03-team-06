const sendData = (dataButton) => {
  return fetch(
    "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",
    {
      method: "POST",
      body: JSON.stringify(dataButton),
      headers: { "content-type": "application/json" },
    }
  )
    .then((response) => response.json())
    .then((result) => {
      return result;
    });
};

export { sendData };
