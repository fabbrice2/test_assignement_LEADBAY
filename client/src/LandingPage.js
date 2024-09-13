import React, { useState } from "react";

function LandingPage() {
  const [url, setUrl] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (response.ok) {
        setImages(data.images);
        console.error("Erreur :", data.error);
      }
    } catch (error) {
      console.error("Erreur lors de la requête :", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <a href="/url-history" className="text-indigo-600">
        Historique des urls déjà traitées
      </a>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="url"
            className="block text-sm font-medium text-gray-900"
          >
            Entrer votre URL
          </label>
          <input
            id="url"
            name="url"
            type="url"
            required
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            className="mt-2 block w-full rounded-md border py-1.5 text-gray-900 ring-1 ring-gray-300 focus:ring-2 focus:ring-indigo-600"
            placeholder="https://exemple.com"
          />
        </div>
        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-white hover:bg-indigo-500"
          >
            Commencez
          </button>
        </div>
      </form>
      {loading && (
        <p className="mt-4 text-gray-600">
          Chargement des images, veuillez patienter...
        </p>
      )}
      {!loading && (
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {images.map((image, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={image.imgUrl}
                alt={`Scraped img ${index}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default LandingPage;
