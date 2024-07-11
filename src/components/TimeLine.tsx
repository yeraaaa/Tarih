const timelineData = [
  { year: '9th century BC – 4th century AD', title: 'Ancient Kazakhstan and Nomadic Culture' },
  { year: '6th – 9th centuries', title: 'Turkic Khaganate and Early Medieval States' },
  { year: '10th – 12th centuries', title: 'Kazakhstan during the Karakhanid and Karakitai Periods' },
  { year: '13th – 14th centuries', title: 'Mongol Conquest and the Golden Horde' },
  { year: '15th – 16th centuries', title: 'Formation of the Kazakh Khanate' },
  { year: '17th century', title: 'Period of Feudal Wars and Fragmentation' },
  { year: '18th century', title: 'Integration with Russia' },
  { year: '19th century', title: 'Kazakhstan under the Russian Empire' },
  { year: 'Early 20th century', title: 'Revolutions and Civil War' },
  { year: '1920s – 1930s', title: 'Soviet Era: Formation and Development' },
  { year: '1940s – 1950s', title: 'Soviet Era: World War II and Post-War Years' },
  { year: '1960s – 1980s', title: 'Soviet Era: Industrialization and Urbanization' },
  { year: '1980s – 1991', title: 'Collapse of the USSR and Kazakhstan\'s Independence' },
  { year: '1991 – 2000s', title: 'Modern Kazakhstan: Early Years of Independence' },
  { year: '2000s – 2010s', title: 'Modern Kazakhstan: Economic Development and International Politics' },
  { year: '2010s – present', title: 'Modern Kazakhstan: Challenges and Prospects' },

];

export default function TimeLine() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-4xl font-bold mb-10 text-primary">Chronology of History</h1>
      <div className="relative border-l-4 border-secondary pl-4">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute w-6 h-6 bg-secondary rounded-full mt-1.5 -left-3 border-white border-2"></div>
            <p className="text-sm text-gray-600">{item.year}</p>
            <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
          </div>
        ))}
      </div>
      <h1 className="text-center text-xl font-bold mb-10 text-primary">Soon there will be more...</h1>
    </div>
  );
};


