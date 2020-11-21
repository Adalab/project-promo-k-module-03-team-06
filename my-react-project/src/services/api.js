const sendData = (data) => {
  return fetch(
    "https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "content-type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((result) => {
      showURL(result, result.success, result.cardURL, result.error);
    });
};

const showURL = (result, success, url, error) => {
  console.log("result: ", result);
  console.log("success: ", success);
  console.log("url: ", url);
  console.log("error: ", error);
};

export { sendData };
