import React from 'react'

const ImageCard = ({ image }) => {
    console.log(image)

    const tags = image.tags.split(',');
    console.log(tags);
  return (
        <div className="max-w-sm rounded m-3 overflow-hidden shadow-lg">
          <img src={image.webformatURL} alt="" className="w-50" />
          <div className="px-6 py-4">
            <div className="font-bold text-purple-500 text-xl mb-2">
              Photo by {image.user}
            </div>
            <ul>
              <li>
                <strong>Views:</strong>
                {image.views}
              </li>
              <li>
                <strong>Downloads:</strong>
                {image.downloads}
              </li>
              <li>
                <strong>Likes:</strong>
                {image.likes}
              </li>
            </ul>
          </div>
          <div className="px-6 py-4">
          {
            tags.map((tag, index) => (
                <span key={index} className="inline-block m-1 bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                  #{tag}
                </span>
            ))
          }
          </div>
        </div>
      );
    };


export default ImageCard