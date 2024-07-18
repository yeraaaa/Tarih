const cultureData = [
  { name: 'Dombra', description: 'A long-necked lute and a traditional musical instrument of the Kazakh people.', photo: '/dombra.jpg' },
  { name: 'Asyk', description: 'Traditional Kazakh game played with sheep anklebones.', photo: '/asyk.jpg' },
  { name: 'Beshbarmak', description: 'A traditional Kazakh dish made of boiled meat with noodles.', photo: '/beshbarmak.jpg' },
  { name: 'Yurt', description: 'A portable, round tent covered with skins or felt, used as a dwelling by nomads.', photo: '/yurt.jpg' },
  { name: 'Kumis', description: 'A traditional fermented dairy product made from mare\'s milk.', photo: '/kumis.jpg' },
  { name: 'Shapan', description: 'A traditional Kazakh robe often made of velvet and richly embroidered.', photo: '/shapan.jpg' },
  { name: 'Saukele', description: 'A traditional Kazakh bridal headdress, often ornate and richly decorated.', photo: '/saukele.jpg' },
  { name: 'Kobyz', description: 'A traditional Kazakh string instrument, similar to a bowed lute.', photo: '/kobyz.jpg' },
  { name: 'Aitys', description: 'A traditional Kazakh musical contest involving improvisational singing.', photo: '/aitys.jpg' },
  { name: 'Kazakh tösek', description: 'Hand-woven beds featuring traditional Kazakh patterns and motifs.', photo: '/tosek.jpeg' },
  { name: 'Tumar', description: 'A traditional Kazakh amulet, believed to protect the wearer from harm.', photo: '/tumar.jpeg' },
];

export default function Symbols() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-4xl font-bold mb-10 text-primary">Symbols of Kazakh Culture</h1>
      
      <div className="relative border-l-4 border-secondary pl-4">
        {cultureData.map((culture, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute w-6 h-6 bg-secondary rounded-full mt-1.5 -left-3 border-white border-2"></div>
            {culture.photo && <img src={culture.photo} alt={culture.name} className="mb-4 w-32 h-32 object-cover rounded-full border-2 border-secondary" />}
            <h2 className="text-xl font-semibold text-primary">{culture.name}</h2>
            <p className="text-sm text-gray-600">{culture.description}</p>
          </div>
        ))}
      </div>

    </div>
  );
}
