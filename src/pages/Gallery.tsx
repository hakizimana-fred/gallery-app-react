export const GalleryScreen = () => {
     const cardData = [
    {
      id: 1,
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Card 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae elit convallis, finibus augue quis, gravida leo.',
    },
    {
      id: 2,
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Card 2',
      description: 'Phasellus dictum tellus eget sem pulvinar, ac interdum velit dignissim. Sed eu urna dignissim, ornare urna sed, efficitur enim.',
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Card 3',
      description: 'Vivamus eget velit tincidunt, commodo mi sit amet, mollis metus. Integer a elit pharetra, venenatis nunc eget, ornare orci.',
    },
    {
      id: 3,
      imageSrc: 'https://via.placeholder.com/150',
      title: 'Card 3',
      description: 'Vivamus eget velit tincidunt, commodo mi sit amet, mollis metus. Integer a elit pharetra, venenatis nunc eget, ornare orci.',
    },
    
    
  ];
    return (
        <div className="p-4 container m-auto">
        <div className="grid grid-cols-4 gap-4 m-auto">
        {cardData.map((card) => (
          <div key={card.id} className="bg-white shadow-lg border border-gray-200 rounded-lg p-4">
            <img src={card.imageSrc} alt={card.title} className="w-full rounded-lg" />
            <h2 className="text-gray-800 font-bold text-xl mt-4 text-center">{card.title}</h2>
            <p className="text-gray-600 text-sm mt-2">{card.description}</p>
          </div>
        ))}
      </div>
      </div>

    )
}