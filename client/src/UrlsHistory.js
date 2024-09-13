import React, { useEffect, useState } from "react";

function UrlsHistory() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/urls")
      .then((res) => res.json())
      .then((data) => {
        setUrls(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold">Historique des URLs</h1>
      <ul className="mt-4">
        {urls.map((url, index) => (
          <li key={index} className="mb-2 text-gray-800">
            {url.url}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UrlsHistory;
