import React, { useState, useEffect } from 'react';
import GeneratePdf from './GeneratePdf';

export default function CvskinsModal(props) {
  console.log(props);
  const { personal, education, experience, image } = props;
  console.log('personal');

  console.log(personal);

  const [selectedOption, setSelectedOption] = useState(null);

  useEffect(() => {
    if (selectedOption) {
      import(`./${selectedOption.style}.css`).then((module) => {
        const stylesheet = document.createElement('style');
        stylesheet.innerHTML = module.default;
        document.head.appendChild(stylesheet);
      });
    }
  }, [selectedOption]);

  const cvSkinOptions = [
    {
      id: 1,
      title: 'Blue',
      description: 'This is the first CV skin option.',
      imageUrl: 'https://i.ibb.co/6md6zwD/white-Blue.png',
      style: 'orbit-1',
    },
    {
      id: 2,
      title: 'Green',
      description: 'This is the second CV skin option.',
      imageUrl: 'https://i.ibb.co/dJ840GX/white-Green.png',
      style: 'orbit-3',
    },
    {
      id: 3,
      title: 'Orange',
      description: 'This is the third CV skin option.',
      imageUrl: 'https://i.ibb.co/7VkzgQ1/white-Orange.png',
      style: 'orbit-5',
    },
  ];

  return (
    <div className="container">
      <div className="d-flex">
        {cvSkinOptions.map((option) => (
          <div className="container border  " key={option.id}>
            <h3>{option.title}</h3>
            <img className="w-50" src={option.imageUrl} alt={option.title} />
            <p>{option.description}</p>
            <button
              className="btn my-2 btn-info"
              onClick={() => setSelectedOption(option)}
            >
              Select Option
            </button>
          </div>
        ))}
      </div>
      {selectedOption && (
        <div className="p-3">
          <GeneratePdf
            personal={personal}
            education={education}
            experience={experience}
            image={image}
            style={selectedOption.style}
            selectedOption={selectedOption}
          />
          {/* <TempCv
            personal={personal}
            education={education}
            experience={experience}
            image={image}
            style={selectedOption.style}
          /> */}
        </div>
      )}
    </div>
  );
}
