import React from 'react';
import '../styles/Gallery.css'


const persons = [
    { name: 'Emily Clark', title: 'Customer Service Representative', image: "https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/people/p1.png?raw=true" },
    { name: 'James Peterson', title: 'Maintenance Supervisor', image: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/people/p2.png?raw=true' },
    { name: 'Sophia Turner', title: 'Rental Coordinator', image: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/people/p3.png?raw=true' },
    { name: 'Lily Johnson', title: 'Operations Manager', image: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/people/p4.png?raw=true' },
    { name: 'Oliver Smith', title: 'Lead Mechanic', image: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/people/p5.png?raw=true' },
    { name: 'Ethan Brown', title: 'Bike Fleet Manager', image: 'https://github.com/ToniRajamaki/moto-rental/blob/main/public/images/people/p6.png?raw=true' },
  ];
  

const Gallery = () => {
  return (
    <div>
 <h1>
          Our <span className='highlight'>Team</span>
        </h1>
        <p className='subheader'>
          We Stand As Your Partner. Our Dedication To Innovation, And Customer
          Satisfaction Sets Us Apart.
        </p>
    <div className="grid-container">
      {persons.map((person, index) => (
          <div className="gallery-grid-item" key={index}>
          <img src={person.image} alt={person.name} />
          <div className="info">
            <h3>{person.name}</h3>
            <p>{person.title}</p>
          </div>
        </div>
      ))}
    </div>
      </div>
  );
};

export default Gallery;
