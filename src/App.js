import { useState, useEffect } from "react";
import ImageCard from "./components/ImageCard";
import ImageSearch from "./components/ImageSearch";

function App() {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    fetch(
      `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&image_type=photo&pretty=true`
    )
      .then((res) => res.json())
      .then((data) => {
        setImages(data.hits);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, [term]);

  return (
    <div className="container mx-auto">
      {isLoading ? (
        <h1 className="text-4xl font-bold text-center mx-auto mt-32">
          Loading...
        </h1>
      ) : (
        <div>
          <h3 className="text-3xl font-bold text-center py-5 text-blue-700">
            This is me!
          </h3>
          <ImageSearch searchTerm={(text) => setTerm(text)} />

          {!isLoading && images.length === 0 && (
            <h1 className="text-4xl font-bold text-center mx-auto mt-32">
              No Result Found!
            </h1>
          )}

          <div className="grid grid-cols-4 grid-flow-row gap-4 m-5 lg:grid-cols-4 xl:grid-cols-5 md:grid-cols-4 md:gap-2 sm:grid-cols-2 sm:gap-1">
            {images.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
