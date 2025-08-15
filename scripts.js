const PRODUCTS = [
  {
    id: 'p1',
    name: 'Basmati Rice',
    unit: '5 kg',
    price: 450,
    category: 'staples',
    brand: 'India Gate',
    eta: 2,
    images: [
      'https://images.unsplash.com/photo-1624216817230-129e481f8a05?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1598569330878-5deefab55690?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'p2',
    name: 'Wheat Flour (Atta)',
    unit: '5 kg',
    price: 250,
    category: 'staples',
    brand: 'Aashirvaad',
    eta: 2,
    images: [
      'https://images.unsplash.com/photo-1556910103-1b232ddc0dad?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1572448862528-5ccdb33f1e0f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'p3',
    name: 'Mustard Oil',
    unit: '1 L',
    price: 180,
    category: 'oils',
    brand: 'Fortune',
    eta: 3,
    images: [
      'https://images.unsplash.com/photo-1605474890464-0c22fe252f3f?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1562169302-2abe5cab7815?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1610395200315-f79f61592810?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'p4',
    name: 'Sugar',
    unit: '1 kg',
    price: 45,
    category: 'staples',
    brand: 'Madhur',
    eta: 2,
    images: [
      'https://images.unsplash.com/photo-1613387853096-8f7ee814eea3?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1586915497508-4c5419df6ae4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1575443755439-6ec1f80fe123?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'p5',
    name: 'Tea Powder',
    unit: '500 g',
    price: 230,
    category: 'beverages',
    brand: 'Tata Tea',
    eta: 3,
    images: [
      'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1526637673834-6f9cfaf13c3c?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'p6',
    name: 'Salt',
    unit: '1 kg',
    price: 25,
    category: 'staples',
    brand: 'Tata Salt',
    eta: 2,
    images: [
      'https://images.unsplash.com/photo-1580910051070-223f01295baf?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1597751485831-023d017aa524?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1457482511254-938b57cfaba9?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'p7',
    name: 'Detergent Powder',
    unit: '1 kg',
    price: 60,
    category: 'homecare',
    brand: 'Surf Excel',
    eta: 3,
    images: [
      'https://images.unsplash.com/photo-1598514982560-55cd9b1053a4?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1570815345910-df4af4f27090?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1588776813674-d3f0a28f5b4b?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'p8',
    name: 'Toor Dal',
    unit: '1 kg',
    price: 140,
    category: 'pulses',
    brand: 'Local',
    eta: 3,
    images: [
      'https://images.unsplash.com/photo-1587049352858-cf87316d4b84?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1562564055-a0f94b3bbf61?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1626266873192-eba457a2e40a?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'p9',
    name: 'Chana Dal',
    unit: '1 kg',
    price: 110,
    category: 'pulses',
    brand: 'Local',
    eta: 3,
    images: [
      'https://images.unsplash.com/photo-1575998051224-bf6674f9429b?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1619514577070-2dbab3361c99?auto=format&fit=crop&w=800&q=80'
    ]
  },
  {
    id: 'p10',
    name: 'Moong Dal',
    unit: '1 kg',
    price: 130,
    category: 'pulses',
    brand: 'Local',
    eta: 3,
    images: [
      'https://images.unsplash.com/photo-1510590009275-207e7e4b0ea0?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1579389083078-5ae740d4ef86?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1575952220031-b30fbd81f2cd?auto=format&fit=crop&w=800&q=80'
    ]
  },
  // Continue similarly up to 50+ items...
];