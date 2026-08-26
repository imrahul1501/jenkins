const destinations = [
  {
    slug: 'the-salt-line',
    name: 'The Salt Line',
    country: 'Bolivia · Chile',
    code: 'LPB→CJC',
    season: 'May – Oct',
    duration: '11 days',
    price: '$2,180',
    summary: 'Overland from La Paz to the Atacama by sleeper bus and salt-flat 4x4, across the largest mirror on Earth.',
    highlights: [
      'Two nights on the Uyuni salt flats, including sunrise at Incahuasi Island',
      'A full day in the coloured lagoons of the Eduardo Avaroa reserve',
      'Border crossing overland into San Pedro de Atacama at 4,500m',
      'Star-tour in the Atacama, one of the clearest night skies on the planet'
    ],
    itinerary: [
      { day: '1–2', plan: 'Arrive La Paz. Acclimatize, market walk through Mercado de las Brujas.' },
      { day: '3–4', plan: 'Night bus to Uyuni. Salt flat crossing by 4x4, cactus island, salt hotel.' },
      { day: '5–7', plan: 'Coloured lagoons, flamingo colonies, geysers at dawn, hot springs.' },
      { day: '8–9', plan: 'Cross into Chile overland. Settle into San Pedro de Atacama.' },
      { day: '10–11', plan: 'Valle de la Luna at sunset, night sky tour, departure from Calama.' }
    ]
  },
  {
    slug: 'iron-road-east',
    name: 'Iron Road East',
    country: 'Mongolia · Russia · China',
    code: 'UGC→PEK',
    season: 'Jun – Sep',
    duration: '15 days',
    price: '$2,940',
    summary: 'A Trans-Mongolian rail crossing from Lake Baikal to Beijing, with a week in the Gobi in between.',
    highlights: [
      'Three nights on Lake Baikal, the world\u2019s deepest freshwater lake',
      'A week of ger-camp stays across the Gobi with a local herding family',
      'The full second-class sleeper crossing, Ulaanbaatar to Beijing',
      'A private evening walk on an unrestored stretch of the Great Wall'
    ],
    itinerary: [
      { day: '1–3', plan: 'Irkutsk arrival, ferry to Olkhon Island, Lake Baikal.' },
      { day: '4–5', plan: 'Overnight train south to Ulaanbaatar via the border at Naushki.' },
      { day: '6–10', plan: 'Gobi Desert: Yolyn Am gorge, singing dunes, ger camps, horseback riding.' },
      { day: '11–13', plan: 'Sleeper train to Beijing via Erenhot border crossing.' },
      { day: '14–15', plan: 'Great Wall at Jiankou, hutong walking tour, departure.' }
    ]
  },
  {
    slug: 'coastal-fold',
    name: 'The Coastal Fold',
    country: 'Japan',
    code: 'NRT→FUK',
    season: 'Mar – May, Oct – Nov',
    duration: '12 days',
    price: '$2,450',
    summary: 'A slow rail loop through the Kii Peninsula\u2019s pilgrim trails and the Seto Inland Sea\u2019s art islands.',
    highlights: [
      'Two days walking sections of the Kumano Kodo pilgrimage route',
      'A night in a 1,300-year-old temple lodging on Koyasan',
      'Island-hopping through Naoshima and Teshima\u2019s contemporary art museums',
      'Onsen evenings in the fishing town of Tomonoura'
    ],
    itinerary: [
      { day: '1–2', plan: 'Osaka arrival, train to Koyasan, temple stay and evening prayers.' },
      { day: '3–5', plan: 'Kumano Kodo trail sections, ryokan stays in Yunomine Onsen.' },
      { day: '6–7', plan: 'Coastal train to Tomonoura, slow days on the Seto Inland Sea.' },
      { day: '8–10', plan: 'Ferry to Naoshima and Teshima, art museums and island cycling.' },
      { day: '11–12', plan: 'Train to Fukuoka, Hakata food stalls, departure.' }
    ]
  },
  {
    slug: 'high-atlas-traverse',
    name: 'High Atlas Traverse',
    country: 'Morocco',
    code: 'RAK→RAK',
    season: 'Apr – Jun, Sep – Nov',
    duration: '9 days',
    price: '$1,690',
    summary: 'A mule-supported trek across Berber valleys, from the Ourika foothills to the Toubkal massif.',
    highlights: [
      'Six days of trekking with mule support and a local guide',
      'Homestays in three different Amazigh mountain villages',
      'An ascent of Jebel Toubkal, North Africa\u2019s highest peak',
      'A final night in a Marrakech riad with a hammam session'
    ],
    itinerary: [
      { day: '1', plan: 'Arrive Marrakech, transfer to Imlil, gear check.' },
      { day: '2–4', plan: 'Trek through Berber valleys, village homestays, mule support.' },
      { day: '5–6', plan: 'Toubkal base camp and summit attempt, descent to Imlil.' },
      { day: '7–8', plan: 'Transfer back to Marrakech, medina walking tour, hammam.' },
      { day: '9', plan: 'Departure.' }
    ]
  },
  {
    slug: 'fjord-and-fell',
    name: 'Fjord & Fell',
    country: 'Norway',
    code: 'BGO→TOS',
    season: 'Jun – Aug',
    duration: '10 days',
    price: '$3,120',
    summary: 'A coastal-ferry route up the western fjords, ending above the Arctic Circle for the midnight sun.',
    highlights: [
      'The full Hurtigruten coastal ferry route, Bergen to the Lofoten Islands',
      'A two-day hut-to-hut hike in Jotunheimen National Park',
      'A midnight kayak paddle under the Arctic summer sun',
      'A fishing-village stay in a restored rorbu cabin in Lofoten'
    ],
    itinerary: [
      { day: '1–2', plan: 'Bergen arrival, fjord ferry departure north along the coast.' },
      { day: '3–4', plan: 'Detour inland to Jotunheimen, hut-to-hut hiking.' },
      { day: '5–7', plan: 'Rejoin the coastal ferry north, calls at Ålesund and Trondheim.' },
      { day: '8–9', plan: 'Arrive Lofoten Islands, rorbu stay, midnight kayak paddle.' },
      { day: '10', plan: 'Fly onward from Tromsø.' }
    ]
  },
  {
    slug: 'river-of-the-north',
    name: 'River of the North',
    country: 'Laos · Thailand',
    code: 'LPQ→CNX',
    season: 'Nov – Feb',
    duration: '8 days',
    price: '$1,340',
    summary: 'A slow boat down the Mekong from Luang Prabang, crossing overland into the hills of northern Thailand.',
    highlights: [
      'Two days on a slow wooden boat down the Mekong River',
      'A morning alms-giving ceremony in Luang Prabang',
      'A homestay in a Karen hill-tribe village outside Chiang Rai',
      'A night market food crawl in Chiang Mai\u2019s old city'
    ],
    itinerary: [
      { day: '1–2', plan: 'Luang Prabang: alms ceremony, waterfalls, night market.' },
      { day: '3–4', plan: 'Slow boat down the Mekong with an overnight stop in Pak Beng.' },
      { day: '5', plan: 'Cross into Thailand at Chiang Khong, transfer to Chiang Rai.' },
      { day: '6', plan: 'Hill-tribe village homestay, tea plantation walk.' },
      { day: '7–8', plan: 'Transfer to Chiang Mai, old-city food tour, departure.' }
    ]
  }
]

export default destinations
