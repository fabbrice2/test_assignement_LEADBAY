import React, { useEffect, useState } from "react";

function UrlsHistory() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/urls")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUrls(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <div>
      <h1>Historique des urls</h1>
      {urls.map((url, index) => (
        <div key={index}>
          <p>{url.url}</p>
        </div>
      ))}
    </div>
  );
}

export default UrlsHistory;
