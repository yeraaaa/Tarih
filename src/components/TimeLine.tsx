"use client";

import { useState } from 'react';

const timelineData = [
  { 
    year: '9th century BC – 4th century AD', 
    title: 'Ancient Kazakhstan and Nomadic Culture', 
    imageUrl: '/event1.jpg', 
    article: 'This period marks the early formation of the nomadic culture in Kazakhstan, characterized by the development of animal husbandry and the domestication of horses. The region saw the emergence of the first tribal unions and early forms of social organization. Nomadic tribes, such as the Saka, created sophisticated systems of governance and social structures. The domestication of horses revolutionized transportation, warfare, and trade, allowing these early nomads to establish extensive networks and influence across Central Asia. Archaeological findings from this era reveal the richness of their material culture, including intricate jewelry, weaponry, and artifacts that showcase their craftsmanship and artistic expression.'
  },
  { 
    year: '6th – 9th centuries', 
    title: 'Turkic Khaganate and Early Medieval States', 
    imageUrl: '/event2.jpg', 
    article: 'The Turkic Khaganate dominated Central Asia, including Kazakhstan, during this time. It was a period of cultural flourishing, with the spread of Turkic languages and the establishment of trade routes connecting the East and the West. The Khaganate facilitated the exchange of goods, ideas, and technologies between diverse cultures, contributing to the region\'s prosperity. The Silk Road played a crucial role in this era, bringing wealth and fostering cultural exchange. The influence of the Turkic Khaganate extended beyond political boundaries, leaving a lasting impact on the linguistic, cultural, and social development of the region. The era also saw the rise of other early medieval states, which further contributed to the complexity and dynamism of the region’s history.'
  },
  { 
    year: '10th – 12th centuries', 
    title: 'Kazakhstan during the Karakhanid and Karakitai Periods', 
    imageUrl: '/event3.jpeg', 
    article: 'The Karakhanid and Karakitai periods saw significant political and economic developments. The Karakhanids introduced Islam to the region, fostering religious and cultural transformation. The adoption of Islam had profound effects on the societal structure, legal systems, and daily life in Kazakhstan. The Karakitai maintained a vast empire that facilitated trade and cultural exchange, acting as a bridge between different civilizations. These periods were marked by advancements in architecture, science, and literature, reflecting the vibrant cultural life of the time. The cities of Taraz and Otrar became important centers of learning and commerce, attracting scholars, traders, and artists from various regions. The influence of these empires can still be seen in the cultural and religious landscape of modern Kazakhstan.'
  },
  { 
    year: '13th – 14th centuries', 
    title: 'Mongol Conquest and the Golden Horde', 
    imageUrl: '/event4.jpg', 
    article: 'The Mongol conquest led to the establishment of the Golden Horde, which controlled a large part of Kazakhstan. This era was marked by the integration of the region into the vast Mongol Empire and the subsequent cultural and economic influences. The Mongols introduced new administrative practices and fostered the development of trade networks that spanned Eurasia. The Pax Mongolica, a period of stability under Mongol rule, allowed for increased cultural and technological exchange between East and West. The Golden Horde also influenced the social and political structures of the region, with the local elite adapting to the new power dynamics. Despite the initial destruction brought by the conquests, the Mongol period ultimately contributed to the region\'s economic growth and cultural diversity.'
  },
  { 
    year: '15th – 16th centuries', 
    title: 'Formation of the Kazakh Khanate', 
    imageUrl: '/event5.jpg', 
    article: 'The formation of the Kazakh Khanate was a significant milestone in the history of Kazakhstan. It laid the foundation for the modern Kazakh state and established a distinct Kazakh identity, culture, and political structure. The Khanate emerged from the unification of various nomadic tribes under the leadership of Khan Kerei and Khan Janibek. This period saw the consolidation of Kazakh territories and the development of a centralized administration. The Khanate played a crucial role in defending its lands against external threats and fostering internal stability. The era also witnessed the flourishing of Kazakh culture, with advancements in literature, music, and oral traditions that continue to influence Kazakh society today. The legacy of the Kazakh Khanate is evident in the enduring sense of national identity and pride among the Kazakh people.'
  },
  { 
    year: '17th century', 
    title: 'Period of Feudal Wars and Fragmentation', 
    imageUrl: '/event6.jpg', 
    article: 'The 17th century was marked by internal conflicts and feudal wars among the Kazakh tribes. This period of fragmentation weakened the Kazakh Khanate, making it vulnerable to external threats and invasions. Rivalries between different factions led to a decline in central authority and frequent power struggles. The resulting instability hindered economic development and disrupted trade routes. Despite these challenges, the Kazakh people demonstrated resilience and adaptability. They maintained their cultural traditions and continued to engage in nomadic pastoralism, which remained a vital part of their way of life. The era also saw intermittent alliances and conflicts with neighboring powers, including the Oirat Mongols and the Russian Empire, further complicating the region\'s political landscape.'
  },
  { 
    year: '18th century', 
    title: 'Integration with Russia', 
    imageUrl: '/event7.jpg', 
    article: 'In the 18th century, Kazakhstan began to integrate with the Russian Empire. This era saw increased Russian influence in the region, leading to significant political, social, and economic changes. The Russian Empire\'s expansion into Central Asia brought new administrative structures, military presence, and economic policies. Kazakh tribes entered into protectorate agreements with Russia, seeking protection against external threats, particularly from the Jungar invasions. The integration process was complex, involving both cooperation and resistance from the Kazakh leaders and population. Russian influence introduced new technologies, agricultural practices, and trade opportunities, but also led to the erosion of traditional nomadic lifestyles and increased dependency on the Russian state. The period set the stage for further integration and eventual incorporation of Kazakhstan into the Russian Empire.'
  },
  { 
    year: '19th century', 
    title: 'Kazakhstan under the Russian Empire', 
    imageUrl: '/event8.jpg', 
    article: 'Under the Russian Empire, Kazakhstan experienced administrative reforms, economic exploitation, and cultural changes. The introduction of Russian education and infrastructure development had lasting impacts on the region. Russian settlers began to migrate into Kazakh territories, leading to demographic shifts and land disputes. The Tsarist administration implemented policies aimed at sedentarizing the nomadic population and exploiting the region\'s natural resources. Railways and telegraph lines connected Kazakhstan more closely with the rest of the empire, facilitating economic integration. However, these changes also led to social tensions and resistance movements among the Kazakhs, who sought to preserve their traditional way of life and autonomy. The period also saw the emergence of a Kazakh intellectual movement, which aimed to promote education, cultural revival, and political awareness among the Kazakh people.'
  },
  { 
    year: 'Early 20th century', 
    title: 'Revolutions and Civil War', 
    imageUrl: '/event9.jpeg', 
    article: 'The early 20th century was a turbulent period for Kazakhstan, marked by the Russian Revolution and the subsequent civil war. These events led to significant political upheaval and social changes in the region. The collapse of the Russian Empire and the Bolshevik rise to power created a power vacuum, resulting in conflicts between various factions. Kazakh leaders and intellectuals formed the Alash Orda, a nationalist movement seeking autonomy and self-determination. The civil war brought widespread disruption and suffering, as different groups vied for control. The eventual victory of the Bolsheviks led to the incorporation of Kazakhstan into the Soviet Union. The period was characterized by efforts to rebuild and stabilize the region, laying the groundwork for the radical transformations of the Soviet era.'
  },
  { 
    year: '1920s – 1930s', 
    title: 'Soviet Era: Formation and Development', 
    imageUrl: '/event10.jpg', 
    article: 'The formation of the Soviet Union brought profound changes to Kazakhstan. The region underwent collectivization, industrialization, and social transformation, which had both positive and negative impacts on the Kazakh people. The collectivization policies led to the establishment of collective farms, dramatically altering traditional agricultural practices and leading to widespread famine and displacement. Industrialization initiatives focused on exploiting Kazakhstan\'s rich natural resources, including minerals and oil, resulting in significant economic development. The era also saw efforts to promote education, healthcare, and social welfare, as well as the suppression of traditional cultural practices and the imposition of Soviet ideology. The period was marked by both progress and hardship, as Kazakhstan navigated the challenges of Soviet modernization and integration.'
  },
  { 
    year: '1940s – 1950s', 
    title: 'Soviet Era: World War II and Post-War Years', 
    imageUrl: '/event11.jpg', 
    article: 'During World War II, Kazakhstan played a crucial role in supporting the Soviet war effort. The republic provided significant resources, including food, raw materials, and manpower. Many Kazakhs served in the Soviet military, and the region hosted numerous factories relocated from the war-torn western parts of the USSR. The post-war years saw reconstruction and continued industrialization, shaping the modern economic landscape of the region. The era also witnessed the forced migration and resettlement of various ethnic groups to Kazakhstan, adding to the region\'s diverse demographic makeup. Despite the challenges of war and reconstruction, the period contributed to the development of Kazakhstan\'s industrial base and infrastructure, laying the foundation for future growth.'
  },
  { 
    year: '1960s – 1980s', 
    title: 'Soviet Era: Industrialization and Urbanization', 
    imageUrl: '/event12.jpg', 
    article: 'The Soviet era continued with rapid industrialization and urbanization. New cities and industries were established, transforming Kazakhstan into a key economic hub within the Soviet Union. The discovery and exploitation of vast natural resources, particularly in the oil and gas sectors, fueled economic growth and development. The era saw significant investments in infrastructure, education, and social services, improving the standard of living for many Kazakhs. However, the period also brought environmental degradation and social challenges, as rapid industrialization took a toll on the natural landscape and traditional ways of life. Urbanization led to the growth of cities like Almaty and Karaganda, creating new opportunities and challenges for the Kazakh population. The period was marked by both progress and the complexities of balancing development with social and environmental sustainability.'
  },
  { 
    year: '1980s – 1991', 
    title: 'Collapse of the USSR and Kazakhstan\'s Independence', 
    imageUrl: '/event13.jpeg', 
    article: 'The collapse of the Soviet Union in 1991 led to Kazakhstan declaring its independence. This period was marked by political, economic, and social challenges as the country transitioned to a sovereign state. The disintegration of the USSR created a power vacuum and economic disarray, as Kazakhstan navigated the complexities of building a new nation. The early years of independence saw efforts to establish political institutions, create a market economy, and address social issues. The country faced significant challenges, including economic instability, inflation, and unemployment. Despite these difficulties, Kazakhstan laid the foundations for its future development, embracing a new national identity and seeking to integrate into the global community. The period was characterized by both the excitement and uncertainty of forging a new path as an independent nation.'
  },
  { 
    year: '1991 – 2000s', 
    title: 'Modern Kazakhstan: Early Years of Independence', 
    imageUrl: '/event14.jpg', 
    article: 'The early years of independence were a time of nation-building and economic reforms. Kazakhstan established its political institutions, pursued economic liberalization, and sought to strengthen its international relations. The country adopted a new constitution, implemented market-oriented reforms, and attracted foreign investment to develop its vast natural resources. The leadership focused on stabilizing the economy, promoting privatization, and creating a favorable business environment. The era also saw efforts to promote national unity and cultural revival, as Kazakhstan embraced its diverse heritage while fostering a sense of national identity. The challenges of transitioning from a centrally planned economy to a market economy were significant, but the period laid the groundwork for future growth and development. The early years of independence were marked by both progress and the ongoing struggle to address the social and economic legacies of the Soviet era.'
  },
  { 
    year: '2000s – 2010s', 
    title: 'Modern Kazakhstan: Economic Development and International Politics', 
    imageUrl: '/event15.jpg', 
    article: 'Kazakhstan experienced significant economic growth and development in the 2000s. The country leveraged its natural resources, particularly oil and gas, to fuel economic expansion and improve living standards. Economic reforms, investments in infrastructure, and diversification efforts contributed to sustained growth. Kazakhstan also played an active role in international politics, seeking to establish itself as a regional leader and global player. The country pursued a multi-vector foreign policy, balancing relations with major powers such as Russia, China, and the United States. Kazakhstan\'s leadership focused on promoting stability, regional cooperation, and economic integration. The period also saw efforts to address social issues, including poverty reduction, healthcare improvements, and educational reforms. The era was characterized by a dynamic and forward-looking approach, as Kazakhstan aimed to position itself as a modern, prosperous, and influential nation on the global stage.'
  },
  { 
    year: '2010s – 2020', 
    title: 'Modern Kazakhstan: Political and Social Challenges', 
    imageUrl: '/event16.jpg', 
    article: 'The 2010s were marked by political and social challenges, including demands for political reforms and social justice. Kazakhstan faced these issues while continuing to pursue economic development and modernization. The leadership initiated various reforms aimed at improving governance, transparency, and accountability. Social movements and civic activism highlighted the need for greater political participation and human rights protections. Economic diversification efforts continued, focusing on reducing dependence on natural resources and promoting innovation and technology. The period also saw challenges related to environmental sustainability, as the country grappled with the impacts of industrialization and climate change. Despite these difficulties, Kazakhstan made strides in addressing its social and political challenges, reflecting a commitment to building a more inclusive and equitable society.'
  },
  { 
    year: '2020 – present', 
    title: 'Modern Kazakhstan: Future Prospects', 
    imageUrl: '/event17.jpeg', 
    article: 'Looking to the future, Kazakhstan aims to address ongoing challenges and capitalize on its strengths. The country is focused on sustainable development, technological innovation, and enhancing its role on the global stage. Efforts are being made to diversify the economy, promote green technologies, and improve social welfare. The leadership is committed to implementing political and economic reforms to foster a more inclusive and democratic society. Kazakhstan is also enhancing its educational and research capabilities to drive innovation and competitiveness. The country seeks to strengthen its international partnerships and play a proactive role in regional and global affairs. As Kazakhstan looks ahead, it faces both opportunities and challenges, striving to build a prosperous, sustainable, and resilient future for its people.'
  },
];

export default function TimeLine() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const toggleArticle = (index:any) => {
    setSelectedEvent(selectedEvent === index ? null : index);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-center text-4xl font-bold mb-10 text-primary">Chronology of History</h1>
      <div className="relative border-l-4 border-secondary pl-4">
        {timelineData.map((item, index) => (
          <div key={index} className="mb-8 ml-4">
            <div className="absolute w-6 h-6 bg-secondary rounded-full mt-1.5 -left-3 border-white border-2"></div>
            <p className="text-sm text-gray-600">{item.year}</p>
            <h2 className="text-xl font-semibold text-primary">{item.title}</h2>
            <img src={item.imageUrl} alt={item.title} className="mt-4 w-1/3 h-auto" />
            <button
              onClick={() => toggleArticle(index)}
              style={{ marginTop: '1rem', padding: '0.5rem 1rem', backgroundColor: '#3d52a0', color: 'white', borderRadius: '0.375rem' }}
            >
              {selectedEvent === index ? 'Hide' : 'Read More'}
            </button>
            {selectedEvent === index && (
              <p className="mt-4 text-gray-800">{item.article}</p>
            )}
          </div>
        ))}
      </div>
      <h1 className="text-center text-xl font-semibold mb-10 text-primary">Soon there will be more...</h1>
    </div>
  );
}
