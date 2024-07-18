const khansData = [
  { name: 'Kerey Khan', reign: '1465 – 1473', description: 'One of the founders of the Kazakh Khanate, Kerey Khan played a pivotal role in the establishment of a unified Kazakh state. His leadership helped consolidate the various nomadic tribes under a single political entity, laying the foundation for future growth and stability.', photo: '/kerey_khan.png' },
  { name: 'Janibek Khan', reign: '1473 – 1480', description: 'Co-founder of the Kazakh Khanate along with Kerey Khan, Janibek Khan was instrumental in strengthening the new state. His efforts in diplomacy and governance ensured the survival and initial expansion of the Khanate, making him a key figure in Kazakh history.', photo: '/janibek_khan.png' },
  { name: 'Burunduk Khan', reign: '1480 – 1511', description: 'Known for his wisdom and effective leadership, Burunduk Khan guided the Kazakh Khanate through a period of consolidation. His reign was marked by efforts to stabilize the internal structure of the Khanate and manage relations with neighboring states.', photo: 'url_to_burunduk_khan_photo' },
  { name: 'Kasym Khan', reign: '1511 – 1523', description: 'Kasym Khan is celebrated for significantly expanding the territory of the Kazakh Khanate. His military campaigns and strategic alliances increased the Khanate’s influence and territorial control, making it a major power in Central Asia during his reign.', photo: '/kasym_khan.jpg' },
  { name: 'Mamai Khan', reign: '1523 – 1538', description: 'Known for his military leadership, Mamai Khan led the Kazakh Khanate during a time of external threats and internal challenges. His reign saw numerous military campaigns aimed at defending and expanding the Khanate’s borders.', photo: 'url_to_mamai_khan_photo' },
  { name: 'Tahir Khan', reign: '1523 – 1533', description: 'Tahir Khan faced many internal conflicts during his reign, which weakened the Khanate’s central authority. Despite these challenges, he worked to maintain the unity and stability of the Kazakh territories amidst a turbulent political landscape.', photo: 'url_to_tahir_khan_photo' },
  { name: 'Buzyk Khan', reign: '1533 – 1537', description: 'Buzyk Khan’s reign was marked by internal strife and external threats, making it a turbulent period for the Kazakh Khanate. His efforts to navigate these challenges were crucial in maintaining the Khanate’s continuity.', photo: 'url_to_buzyk_khan_photo' },
  { name: 'Haq-Nazar Khan', reign: '1538 – 1580', description: 'Haq-Nazar Khan is credited with rebuilding the Kazakh Khanate after a period of internal strife. His reign was characterized by efforts to restore order, consolidate power, and strengthen the Khanate’s position among its neighbors.', photo: '/haq-nazar_khan.jpg' },
  { name: 'Shygai Khan', reign: '1580 – 1582', description: 'Although Shygai Khan’s reign was short, it was significant for its efforts in stabilizing the Khanate. He continued the policies of his predecessors to ensure the Khanate’s survival and set the stage for future expansion.', photo: 'url_to_shygai_khan_photo' },
  { name: 'Tauekel Khan', reign: '1582 – 1598', description: 'Tauekel Khan is remembered for expanding the Khanate and successfully fending off invasions. His military prowess and strategic acumen helped secure the Khanate’s borders and enhance its influence in the region.', photo: 'url_to_tauekel_khan_photo' },
  { name: 'Esim Khan', reign: '1598 – 1628', description: 'Esim Khan’s reign was a period of stabilization and consolidation for the Kazakh Khanate. He strengthened the Khanate’s internal structures and power, ensuring its continued existence and resilience against external threats.', photo: '/esim_khan.jpg' },
  { name: 'Zhantore Khan', reign: '1628 – 1652', description: 'Zhantore Khan faced significant internal and external challenges during his reign. Despite these difficulties, he worked to maintain the integrity of the Khanate and manage its complex political and military affairs.', photo: 'url_to_zhantore_khan_photo' },
  { name: 'Tauke Khan', reign: '1680 – 1718', description: 'Tauke Khan is best known for implementing the "Zhety Zhargy" code of laws, which helped to standardize and strengthen the legal framework of the Kazakh Khanate. His reign is often seen as a golden age of stability and legal reform.', photo: '/tauke_khan.jpg' },
  { name: 'Kaip Khan', reign: '1718 – 1720', description: 'Kaip Khan led the Kazakh Khanate during the difficult years of the Dzungar invasions. His leadership was crucial in organizing the defense of the Khanate and attempting to repel the invaders.', photo: 'url_to_kaip_khan_photo' },
  { name: 'Abylai Khan', reign: '1771 – 1781', description: 'Abylai Khan is celebrated for unifying the Kazakh tribes and strengthening the Khanate. His diplomatic and military skills enabled the Khanate to navigate a complex political landscape and emerge as a strong, unified entity.', photo: '/abylai_khan.jpg' },
  { name: 'Kenessary Khan', reign: '1841 – 1847', description: 'Kenessary Khan was the last Khan of the Kazakh Khanate and a key figure in the national liberation movement. He led a series of uprisings against Russian expansion, symbolizing the struggle for Kazakh independence and sovereignty.', photo: '/kenessary_khan.jpg' },
];

const writersData = [
  { name: 'Abai Qunanbaiuly', years: '1845 – 1904', description: 'A prominent Kazakh poet, composer, and philosopher. He is considered the founder of Kazakh written literature and his works are a significant part of the national cultural heritage.', photo: '/abai.jpg' },
  { name: 'Mukhtar Auezov', years: '1897 – 1961', description: 'A renowned Kazakh writer and playwright. He is best known for his epic novel "The Path of Abai" which is dedicated to the life and legacy of Abai Qunanbaiuly.', photo: '/mukhtar_auezov.jpg' },
  { name: 'Magzhan Zhumabayev', years: '1893 – 1938', description: 'A prominent Kazakh poet, writer, and political activist. His poetry is known for its romanticism and nationalist themes, and he was a key figure in the Alash Orda movement.', photo: '/magzhan_zhumabayev.jpg' },
  { name: 'Zhambyl Zhabayuly', years: '1846 – 1945', description: 'A famous Kazakh poet known for his improvisational skills in oral poetry. He was celebrated as a national bard and his works reflect the traditions and struggles of the Kazakh people.', photo: '/zhambyl_zhabayuly.jpg' },
  { name: 'Oljas Suleimenov', years: '1936 – present', description: 'A distinguished Kazakh poet, writer, and diplomat. He is known for his diverse literary works and his involvement in political activism, particularly in the anti-nuclear movement.', photo: '/oljas_suleimenov.jpg' },
  { name: 'Mukagali Makatayev', years: '1931 – 1976', description: 'A celebrated Kazakh poet whose works are admired for their emotional depth and lyrical beauty. He is often considered one of the greatest poets in Kazakh literature.', photo: '/mukagali_makatayev.jpeg' },
  { name: 'Ilyas Zhansugurov', years: '1894 – 1938', description: 'A Kazakh poet and writer, known for his lyrical works and contributions to Kazakh literature. He was also an important figure in the development of Kazakh theater and drama.', photo: '/ilyas_zhansugurov.jpg' },
  { name: 'Gabiden Mustafin', years: '1902 – 1985', description: 'A Kazakh writer and one of the prominent figures in Soviet literature. His works often focused on social issues and the lives of ordinary people.', photo: '/gabiden_mustafin.jpg' },
];

const notableFiguresData = [
  { name: 'Alikhan Bukeikhanov', years: '1866 – 1937', description: 'A Kazakh statesman, politician, and a leader of the Alash Orda movement. He was a key figure in the early 20th-century Kazakh national liberation movement.', photo: '/alikhan_bukeikhanov.jpg' },
  { name: 'Saken Seifullin', years: '1894 – 1938', description: 'A prominent Kazakh writer, poet, and political activist. He was a leader in the early Soviet period and made significant contributions to Kazakh literature and education.', photo: '/saken_seifullin.png' },
  { name: 'Akhmet Baitursynuly', years: '1872 – 1937', description: 'A Kazakh intellectual, poet, linguist, and educator. He played a crucial role in the development of the Kazakh alphabet and was a prominent figure in the Alash Orda movement.', photo: '/akhmet_baitursynuly.jpg' },
  { name: 'Mirzhakyp Dulatuly', years: '1885 – 1935', description: 'A Kazakh writer, poet, and social activist. He was an important figure in the Alash Orda movement and is known for his works promoting Kazakh culture and independence.', photo: '/mirzhakyp_dulatuly.jpg' },
];

export default function Figures() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-4xl font-bold mb-10 text-primary">Kazakh Khans</h1>
      <div className="relative border-l-4 border-secondary pl-4">
        {khansData.map((khan, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute w-6 h-6 bg-secondary rounded-full mt-1.5 -left-3 border-white border-2"></div>
            {khan.photo && <img src={khan.photo} alt={khan.name} className="mb-4 w-32 h-32 object-cover rounded-full border-2 border-secondary" />}
            <h2 className="text-xl font-semibold text-primary">{khan.name}</h2>
            <p className="text-sm text-gray-600">{khan.reign}</p>
            <p className="text-sm text-gray-600">{khan.description}</p>
          </div>
        ))}
      </div>
      <h1 className="text-center text-4xl font-bold mb-10 text-primary">Kazakh Writers</h1>
      <div className="relative border-l-4 border-secondary pl-4">
        {writersData.map((writer, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute w-6 h-6 bg-secondary rounded-full mt-1.5 -left-3 border-white border-2"></div>
            {writer.photo && <img src={writer.photo} alt={writer.name} className="mb-4 w-32 h-32 object-cover rounded-full border-2 border-secondary" />}
            <h2 className="text-xl font-semibold text-primary">{writer.name}</h2>
            <p className="text-sm text-gray-600">{writer.years}</p>
            <p className="text-sm text-gray-600">{writer.description}</p>
          </div>
        ))}
      </div>
      <h1 className="text-center text-4xl font-bold mb-10 text-primary">Notable Kazakh Figures</h1>
      <div className="relative border-l-4 border-secondary pl-4">
        {notableFiguresData.map((figure, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute w-6 h-6 bg-secondary rounded-full mt-1.5 -left-3 border-white border-2"></div>
            {figure.photo && <img src={figure.photo} alt={figure.name} className="mb-4 w-32 h-32 object-cover rounded-full border-2 border-secondary" />}
            <h2 className="text-xl font-semibold text-primary">{figure.name}</h2>
            <p className="text-sm text-gray-600">{figure.years}</p>
            <p className="text-sm text-gray-600">{figure.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
