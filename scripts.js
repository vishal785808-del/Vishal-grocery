// --- IMAGE HELPER + PRODUCTS (REPLACE the old PRODUCTS block with this) ---

// helper to get product-relevant images from Unsplash Source
function imgUrl(query, sig){
  // Unsplash Source returns a relevant photo for the keyword.
  // 'sig' gives a different image variation.
  return `https://source.unsplash.com/800x600/?${encodeURIComponent(query)}&sig=${sig}`;
}

const PRODUCTS = [
  {id:'p1',  name:'Basmati Rice', unit:'5 kg', price:450, category:'staples', brand:'India Gate', eta:2,
    images:[imgUrl('basmati rice',1), imgUrl('rice sack',2), imgUrl('cooked rice',3)]},

  {id:'p2',  name:'Wheat Flour (Atta)', unit:'5 kg', price:250, category:'staples', brand:'Aashirvaad', eta:2,
    images:[imgUrl('wheat flour',1), imgUrl('wheat grains',2), imgUrl('atta sack',3)]},

  {id:'p3',  name:'Mustard Oil', unit:'1 L', price:180, category:'oils', brand:'Fortune', eta:3,
    images:[imgUrl('mustard oil bottle',1), imgUrl('cooking oil bottle',2), imgUrl('mustard seeds oil',3)]},

  {id:'p4',  name:'Sugar', unit:'1 kg', price:45, category:'staples', brand:'Madhur', eta:2,
    images:[imgUrl('sugar crystals',1), imgUrl('white sugar',2), imgUrl('sugar packet',3)]},

  {id:'p5',  name:'Tea Powder', unit:'500 g', price:230, category:'beverages', brand:'Tata Tea', eta:3,
    images:[imgUrl('tea powder',1), imgUrl('cup of tea',2), imgUrl('tea leaves',3)]},

  {id:'p6',  name:'Salt', unit:'1 kg', price:25, category:'staples', brand:'Tata Salt', eta:2,
    images:[imgUrl('salt crystals',1), imgUrl('salt packet',2), imgUrl('sea salt',3)]},

  {id:'p7',  name:'Detergent Powder', unit:'1 kg', price:60, category:'homecare', brand:'Surf Excel', eta:3,
    images:[imgUrl('detergent powder pack',1), imgUrl('washing powder',2), imgUrl('laundry detergent',3)]},

  {id:'p8',  name:'Toor Dal', unit:'1 kg', price:140, category:'pulses', brand:'Local', eta:3,
    images:[imgUrl('toor dal',1), imgUrl('pulses toor dal',2), imgUrl('lentils',3)]},

  {id:'p9',  name:'Chana Dal', unit:'1 kg', price:110, category:'pulses', brand:'Local', eta:3,
    images:[imgUrl('chana dal',1), imgUrl('split chickpeas',2), imgUrl('lentils chana',3)]},

  {id:'p10', name:'Moong Dal', unit:'1 kg', price:130, category:'pulses', brand:'Local', eta:3,
    images:[imgUrl('moong dal',1), imgUrl('green gram dal',2), imgUrl('moong lentils',3)]},

  {id:'p11', name:'Corn Flour', unit:'500 g', price:90, category:'staples', brand:'Nature', eta:2,
    images:[imgUrl('corn flour',1), imgUrl('cornmeal',2), imgUrl('corn flour packet',3)]},

  {id:'p12', name:'Refined Oil', unit:'1 L', price:160, category:'oils', brand:'Dhara', eta:3,
    images:[imgUrl('refined cooking oil',1), imgUrl('cooking oil bottle',2), imgUrl('edible oil',3)]},

  {id:'p13', name:'Ghee (500g)', unit:'500 g', price:420, category:'staples', brand:'Amul', eta:3,
    images:[imgUrl('ghee jar',1), imgUrl('clarified butter',2), imgUrl('ghee pack',3)]},

  {id:'p14', name:'Besan (Gram Flour)', unit:'1 kg', price:120, category:'staples', brand:'Local', eta:2,
    images:[imgUrl('besan',1), imgUrl('gram flour',2), imgUrl('besan packet',3)]},

  {id:'p15', name:'Soyabean Oil', unit:'1 L', price:170, category:'oils', brand:'Gemini', eta:3,
    images:[imgUrl('soybean oil',1), imgUrl('cooking oil bottle',2), imgUrl('soy oil',3)]},

  {id:'p16', name:'Maida (All Purpose Flour)', unit:'1 kg', price:60, category:'staples', brand:'Local', eta:2,
    images:[imgUrl('maida flour',1), imgUrl('all purpose flour',2), imgUrl('maida packet',3)]},

  {id:'p17', name:'Poha', unit:'500 g', price:55, category:'staples', brand:'Local', eta:2,
    images:[imgUrl('poha',1), imgUrl('flattened rice poha',2), imgUrl('poha packet',3)]},

  {id:'p18', name:'Sooji (Rava)', unit:'1 kg', price:95, category:'staples', brand:'Local', eta:2,
    images:[imgUrl('suji rava',1), imgUrl('semolina',2), imgUrl('rava pack',3)]},

  {id:'p19', name:'Namkeen (Salted Snacks)', unit:'200 g', price:45, category:'snacks', brand:'Haldiram', eta:2,
    images:[imgUrl('namkeen snack',1), imgUrl('savory snacks',2), imgUrl('india namkeen',3)]},

  {id:'p20', name:'Biscuits', unit:'200 g', price:40, category:'snacks', brand:'Parle', eta:2,
    images:[imgUrl('biscuits pack',1), imgUrl('tea biscuits',2), imgUrl('cookies',3)]},

  {id:'p21', name:'Cornflakes', unit:'250 g', price:120, category:'breakfast', brand:'Kellogg', eta:3,
    images:[imgUrl('cornflakes',1), imgUrl('breakfast cereal',2), imgUrl('cornflakes bowl',3)]},

  {id:'p22', name:'Coffee (Instant)', unit:'100 g', price:150, category:'beverages', brand:'Nescafe', eta:3,
    images:[imgUrl('instant coffee jar',1), imgUrl('coffee powder',2), imgUrl('coffee cup',3)]},

  {id:'p23', name:'Honey', unit:'500 g', price:380, category:'staples', brand:'Local', eta:3,
    images:[imgUrl('honey jar',1), imgUrl('natural honey',2), imgUrl('honey spoon',3)]},

  {id:'p24', name:'Jam', unit:'500 g', price:190, category:'breakfast', brand:'Kissan', eta:3,
    images:[imgUrl('fruit jam jar',1), imgUrl('strawberry jam',2), imgUrl('jam toast',3)]},

  {id:'p25', name:'Cooking Masala', unit:'100 g', price:80, category:'spices', brand:'MDH', eta:2,
    images:[imgUrl('masala powder',1), imgUrl('spice mix',2), imgUrl('indian masala',3)]},

  {id:'p26', name:'Turmeric Powder', unit:'200 g', price:60, category:'spices', brand:'Local', eta:2,
    images:[imgUrl('turmeric powder',1), imgUrl('turmeric spice',2), imgUrl('haldi powder',3)]},

  {id:'p27', name:'Red Chilli Powder', unit:'200 g', price:70, category:'spices', brand:'Local', eta:2,
    images:[imgUrl('red chilli powder',1), imgUrl('chilli powder',2), imgUrl('mirch powder',3)]},

  {id:'p28', name:'Cashews', unit:'200 g', price:320, category:'dryfruit', brand:'Local', eta:3,
    images:[imgUrl('cashews',1), imgUrl('dry fruits cashew',2), imgUrl('cashew nuts',3)]},

  {id:'p29', name:'Raisins', unit:'200 g', price:180, category:'dryfruit', brand:'Local', eta:3,
    images:[imgUrl('raisins',1), imgUrl('dry fruit raisins',2), imgUrl('kishmish',3)]},

  {id:'p30', name:'Almonds', unit:'200 g', price:420, category:'dryfruit', brand:'Local', eta:3,
    images:[imgUrl('almonds',1), imgUrl('badam',2), imgUrl('almond nuts',3)]},

  {id:'p31', name:'Soap (Bath)', unit:'75 g', price:40, category:'homecare', brand:'Dettol', eta:2,
    images:[imgUrl('soap bar',1), imgUrl('bath soap',2), imgUrl('dettol soap',3)]},

  {id:'p32', name:'Toothpaste', unit:'100 g', price:90, category:'homecare', brand:'Colgate', eta:2,
    images:[imgUrl('toothpaste',1), imgUrl('toothpaste tube',2), imgUrl('colgate',3)]},

  {id:'p33', name:'Dishwash Liquid', unit:'500 ml', price:120, category:'homecare', brand:'Vim', eta:2,
    images:[imgUrl('dishwash liquid',1), imgUrl('dish soap',2), imgUrl('dishwashing liquid bottle',3)]},

  {id:'p34', name:'Floor Cleaner', unit:'1 L', price:150, category:'homecare', brand:'Harpic', eta:3,
    images:[imgUrl('floor cleaner bottle',1), imgUrl('cleaning liquid',2), imgUrl('harpic',3)]},

  {id:'p35', name:'Toilet Paper (Pack)', unit:'12 rolls', price:220, category:'homecare', brand:'Soft', eta:3,
    images:[imgUrl('toilet paper rolls',1), imgUrl('paper rolls pack',2), imgUrl('tissue rolls',3)]},

  {id:'p36', name:'Paper Napkins', unit:'50 pcs', price:80, category:'homecare', brand:'Local', eta:2,
    images:[imgUrl('paper napkins',1), imgUrl('napkins pack',2), imgUrl('table napkins',3)]},

  {id:'p37', name:'Soya Chunks', unit:'200 g', price:90, category:'staples', brand:'Local', eta:3,
    images:[imgUrl('soya chunks',1), imgUrl('soya chunks pack',2), imgUrl('soya nuggets',3)]},

  {id:'p38', name:'Paneer (250g) - Packaged', unit:'250 g', price:120, category:'dairy', brand:'Local', eta:2,
    images:[imgUrl('paneer pack',1), imgUrl('paneer cubes',2), imgUrl('packaged paneer',3)]},

  {id:'p39', name:'Curd (Pack)', unit:'500 g', price:60, category:'dairy', brand:'Local', eta:2,
    images:[imgUrl('curd pack',1), imgUrl('yogurt curd',2), imgUrl('dahi pack',3)]},

  {id:'p40', name:'Milk (Tetra 1L)', unit:'1 L', price:60, category:'dairy', brand:'Amul', eta:1,
    images:[imgUrl('milk tetra pack',1), imgUrl('milk pack',2), imgUrl('amul milk',3)]},

  {id:'p41', name:'Eggs (12 pcs)', unit:'12 pcs', price:90, category:'dairy', brand:'Local', eta:1,
    images:[imgUrl('eggs tray',1), imgUrl('eggs dozen',2), imgUrl('fresh eggs',3)]},

  {id:'p42', name:'Instant Noodles', unit:'70 g', price:20, category:'snacks', brand:'Maggi', eta:2,
    images:[imgUrl('instant noodles',1), imgUrl('maggi noodles',2), imgUrl('noodles bowl',3)]},

  {id:'p43', name:'Ketchup', unit:'500 g', price:140, category:'condiments', brand:'Heinz', eta:3,
    images:[imgUrl('ketchup bottle',1), imgUrl('tomato ketchup',2), imgUrl('heinz ketchup',3)]},

  {id:'p44', name:'Soy Sauce', unit:'200 ml', price:180, category:'condiments', brand:'Local', eta:3,
    images:[imgUrl('soy sauce bottle',1), imgUrl('soy sauce',2), imgUrl('asian soy sauce',3)]},

  {id:'p45', name:'Pickle', unit:'500 g', price:160, category:'condiments', brand:'Mother\'s', eta:3,
    images:[imgUrl('pickle jar',1), imgUrl('indian pickle',2), imgUrl('achar jar',3)]},

  {id:'p46', name:'Sweets (Pack)', unit:'500 g', price:420, category:'sweets', brand:'Local', eta:3,
    images:[imgUrl('indian sweets box',1), imgUrl('mithai box',2), imgUrl('sweets pack',3)]},

  {id:'p47', name:'Health Drink (Jar)', unit:'400 g', price:650, category:'beverages', brand:'Horlicks', eta:4,
    images:[imgUrl('health drink jar',1), imgUrl('horlicks jar',2), imgUrl('malted drink',3)]},

  {id:'p48', name:'Protein Bar', unit:'50 g', price:120, category:'snacks', brand:'Local', eta:3,
    images:[imgUrl('protein bar',1), imgUrl('energy bar',2), imgUrl('protein snack',3)]},

  {id:'p49', name:'Peanuts', unit:'200 g', price:90, category:'snacks', brand:'Local', eta:2,
    images:[imgUrl('peanuts pack',1), imgUrl('roasted peanuts',2), imgUrl('groundnuts',3)]},

  {id:'p50', name:'Corn Oil', unit:'1 L', price:200, category:'oils', brand:'Fortune', eta:3,
    images:[imgUrl('corn oil',1), imgUrl('cooking oil bottle',2), imgUrl('corn oil bottle',3)]},

  {id:'p51', name:'Oats', unit:'500 g', price:180, category:'breakfast', brand:'Quaker', eta:3,
    images:[imgUrl('oats pack',1), imgUrl('oatmeal bowl',2), imgUrl('quaker oats',3)]},

  {id:'p52', name:'Sattu', unit:'1 kg', price:110, category:'staples', brand:'Local', eta:3,
    images:[imgUrl('sattu pack',1), imgUrl('sattu powder',2), imgUrl('bengali sattu',3)]}
];