const { response } = require("express");

function submitData(userName, userEmail) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
    }),
  };
  return fetch("http://localhost:3000/users", configurationObject)
    .then((response) => response.json())
    .then((responseObject) => {
      let p = document.createElement("p");
      p.textContent = responseObject.id;
      document.body.appendChild(p);
    })
    .catch((error) => {
      let p = document.createElement("p");
      p.textContent = error.message;
      document.body.appendChild(p);
    });
}
console.log(submitData());
