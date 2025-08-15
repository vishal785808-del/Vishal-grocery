// ---------------- CONFIG ----------------
const WHATSAPP_NUMBER = '916206364936'; // change if needed (countrycode + number, no +)
const FREE_DELIVERY_MIN = 799;
const PINCODE_RULES = {
  // Basic rules: patna prefixes (802/803/800 etc) treated as local 2 days, other Bihar 3, rest of India 5
  nearPrefixes: ['800','801','802','803','804','805','806','807','808','809','821','822','823','824','825','826','827','828','829'],
  stateBihar: true
};

// ---------------- UTILS ----------------
function $(s){ return document.querySelector(s) }
function $all(s){ return Array.from(document.querySelectorAll(s)) }
function money(n){ return Number(n).toLocaleString('en-IN') }

// ---------------- PRODUCTS (50+) ----------------
// Using high-quality unsplash images (reused variety). Each product: id,name,unit,price,category,brand,eta(images)
const IMG_POOL = [
  'https://images.unsplash.com/photo-1604908554025-7a37f1e2bc94?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1548943487-a2e4e43b4855?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1568374646742-18e1b4c7bd33?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1505577076686-aedb0e1f7f66?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1484980851365-3cc3d0a0cf7b?q=80&w=1200&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=1200&auto=format&fit=crop'
];

const PRODUCTS = [
  {id:'p1', name:'Basmati Rice', unit:'5 kg', price:450, category:'staples', brand:'India Gate', eta:2, images:[IMG_POOL[0],IMG_POOL[1],IMG_POOL[2]]},
  {id:'p2', name:'Wheat Flour (Atta)', unit:'5 kg', price:250, category:'staples', brand:'Aashirvaad', eta:2, images:[IMG_POOL[3],IMG_POOL[4],IMG_POOL[2]]},
  {id:'p3', name:'Mustard Oil', unit:'1 L', price:180, category:'oils', brand:'Fortune', eta:3, images:[IMG_POOL[5],IMG_POOL[6],IMG_POOL[4]]},
  {id:'p4', name:'Sugar', unit:'1 kg', price:45, category:'staples', brand:'Madhur', eta:2, images:[IMG_POOL[3],IMG_POOL[0],IMG_POOL[7]]},
  {id:'p5', name:'Tea Powder', unit:'500 g', price:230, category:'beverages', brand:'Tata Tea', eta:3, images:[IMG_POOL[1],IMG_POOL[4],IMG_POOL[7]]},
  {id:'p6', name:'Salt', unit:'1 kg', price:25, category:'staples', brand:'Tata Salt', eta:2, images:[IMG_POOL[2],IMG_POOL[6],IMG_POOL[0]]},
  {id:'p7', name:'Detergent Powder', unit:'1 kg', price:60, category:'homecare', brand:'Surf Excel', eta:3, images:[IMG_POOL[5],IMG_POOL[1],IMG_POOL[3]]},
  {id:'p8', name:'Toor Dal', unit:'1 kg', price:140, category:'pulses', brand:'Local', eta:3, images:[IMG_POOL[4],IMG_POOL[2],IMG_POOL[7]]},
  {id:'p9', name:'Chana Dal', unit:'1 kg', price:110, category:'pulses', brand:'Local', eta:3, images:[IMG_POOL[0],IMG_POOL[3],IMG_POOL[6]]},
  {id:'p10', name:'Moong Dal', unit:'1 kg', price:130, category:'pulses', brand:'Local', eta:3, images:[IMG_POOL[2],IMG_POOL[1],IMG_POOL[5]]},
  {id:'p11', name:'Corn Flour', unit:'500 g', price:90, category:'staples', brand:'Nature', eta:2, images:[IMG_POOL[6],IMG_POOL[7],IMG_POOL[0]]},
  {id:'p12', name:'Refined Oil', unit:'1 L', price:160, category:'oils', brand:'Dhara', eta:3, images:[IMG_POOL[5],IMG_POOL[3],IMG_POOL[1]]},
  {id:'p13', name:'Ghee (500g)', unit:'500 g', price:420, category:'staples', brand:'Amul', eta:3, images:[IMG_POOL[7],IMG_POOL[2],IMG_POOL[4]]},
  {id:'p14', name:'Besan (Gram Flour)', unit:'1 kg', price:120, category:'staples', brand:'Local', eta:2, images:[IMG_POOL[0],IMG_POOL[6],IMG_POOL[1]]},
  {id:'p15', name:'Soyabean Oil', unit:'1 L', price:170, category:'oils', brand:'Gemini', eta:3, images:[IMG_POOL[5],IMG_POOL[4],IMG_POOL[3]]},
  {id:'p16', name:'Maida (All Purpose Flour)', unit:'1 kg', price:60, category:'staples', brand:'Local', eta:2, images:[IMG_POOL[2],IMG_POOL[7],IMG_POOL[0]]},
  {id:'p17', name:'Poha', unit:'500 g', price:55, category:'staples', brand:'Local', eta:2, images:[IMG_POOL[1],IMG_POOL[6],IMG_POOL[5]]},
  {id:'p18', name:'Sooji (Rava)', unit:'1 kg', price:95, category:'staples', brand:'Local', eta:2, images:[IMG_POOL[0],IMG_POOL[3],IMG_POOL[1]]},
  {id:'p19', name:'Salted Snacks (Namkeen)', unit:'200 g', price:45, category:'snacks', brand:'Haldiram', eta:2, images:[IMG_POOL[6],IMG_POOL[2],IMG_POOL[7]]},
  {id:'p20', name:'Biscuits', unit:'200 g', price:40, category:'snacks', brand:'Parle', eta:2, images:[IMG_POOL[4],IMG_POOL[1],IMG_POOL[5]]},
  {id:'p21', name:'Cornflakes', unit:'250 g', price:120, category:'breakfast', brand:'Kellogg', eta:3, images:[IMG_POOL[0],IMG_POOL[2],IMG_POOL[3]]},
  {id:'p22', name:'Coffee (Instant)', unit:'100 g', price:150, category:'beverages', brand:'Nescafe', eta:3, images:[IMG_POOL[5],IMG_POOL[7],IMG_POOL[1]]},
  {id:'p23', name:'Honey', unit:'500 g', price:380, category:'staples', brand:'Local', eta:3, images:[IMG_POOL[3],IMG_POOL[6],IMG_POOL[2]]},
  {id:'p24', name:'Jam', unit:'500 g', price:190, category:'breakfast', brand:'Kissan', eta:3, images:[IMG_POOL[1],IMG_POOL[4],IMG_POOL[7]]},
  {id:'p25', name:'Cooking Masala (Masala Mix)', unit:'100 g', price:80, category:'spices', brand:'MDH', eta:2, images:[IMG_POOL[0],IMG_POOL[5],IMG_POOL[3]]},
  {id:'p26', name:'Turmeric Powder', unit:'200 g', price:60, category:'spices', brand:'Local', eta:2, images:[IMG_POOL[2],IMG_POOL[6],IMG_POOL[1]]},
  {id:'p27', name:'Red Chilli Powder', unit:'200 g', price:70, category:'spices', brand:'Local', eta:2, images:[IMG_POOL[4],IMG_POOL[7],IMG_POOL[0]]},
  {id:'p28', name:'Cashews', unit:'200 g', price:320, category:'dryfruit', brand:'Local', eta:3, images:[IMG_POOL[6],IMG_POOL[5],IMG_POOL[2]]},
  {id:'p29', name:'Raisins', unit:'200 g', price:180, category:'dryfruit', brand:'Local', eta:3, images:[IMG_POOL[1],IMG_POOL[3],IMG_POOL[7]]},
  {id:'p30', name:'Almonds', unit:'200 g', price:420, category:'dryfruit', brand:'Local', eta:3, images:[IMG_POOL[0],IMG_POOL[4],IMG_POOL[6]]},
  {id:'p31', name:'Soap (Bath)', unit:'75 g', price:40, category:'homecare', brand:'Dettol', eta:2, images:[IMG_POOL[5],IMG_POOL[1],IMG_POOL[2]]},
  {id:'p32', name:'Toothpaste', unit:'100 g', price:90, category:'homecare', brand:'Colgate', eta:2, images:[IMG_POOL[3],IMG_POOL[0],IMG_POOL[7]]},
  {id:'p33', name:'Dishwash Liquid', unit:'500 ml', price:120, category:'homecare', brand:'Vim', eta:2, images:[IMG_POOL[6],IMG_POOL[4],IMG_POOL[1]]},
  {id:'p34', name:'Floor Cleaner', unit:'1 L', price:150, category:'homecare', brand:'Harpic', eta:3, images:[IMG_POOL[2],IMG_POOL[5],IMG_POOL[7]]},
  {id:'p35', name:'Toilet Paper (Pack)', unit:'12 rolls', price:220, category:'homecare', brand:'Soft', eta:3, images:[IMG_POOL[0],IMG_POOL[1],IMG_POOL[3]]},
  {id:'p36', name:'Paper Napkins', unit:'50 pcs', price:80, category:'homecare', brand:'Local', eta:2, images:[IMG_POOL[4],IMG_POOL[6],IMG_POOL[2]]},
  {id:'p37', name:'Soya Chunks', unit:'200 g', price:90, category:'staples', brand:'Local', eta:3, images:[IMG_POOL[7],IMG_POOL[5],IMG_POOL[0]]},
  {id:'p38', name:'Paneer (250g) - Packaged', unit:'250 g', price:120, category:'dairy', brand:'Local', eta:2, images:[IMG_POOL[1],IMG_POOL[2],IMG_POOL[3]]},
  {id:'p39', name:'Curd (Pack)', unit:'500 g', price:60, category:'dairy', brand:'Local', eta:2, images:[IMG_POOL[5],IMG_POOL[4],IMG_POOL[6]]},
  {id:'p40', name:'Milk (Tetra 1L)', unit:'1 L', price:60, category:'dairy', brand:'Amul', eta:1, images:[IMG_POOL[0],IMG_POOL[1],IMG_POOL[2]]},
  {id:'p41', name:'Eggs (12 pcs)', unit:'12 pcs', price:90, category:'dairy', brand:'Local', eta:1, images:[IMG_POOL[3],IMG_POOL[4],IMG_POOL[5]]},
  {id:'p42', name:'Instant Noodles', unit:'70 g', price:20, category:'snacks', brand:'Maggi', eta:2, images:[IMG_POOL[6],IMG_POOL[2],IMG_POOL[1]]},
  {id:'p43', name:'Ketchup', unit:'500 g', price:140, category:'condiments', brand:'Heinz', eta:3, images:[IMG_POOL[7],IMG_POOL[0],IMG_POOL[3]]},
  {id:'p44', name:'Soy Sauce', unit:'200 ml', price:180, category:'condiments', brand:'Local', eta:3, images:[IMG_POOL[1],IMG_POOL[5],IMG_POOL[2]]},
  {id:'p45', name:'Pickle', unit:'500 g', price:160, category:'condiments', brand:'Mother\'s', eta:3, images:[IMG_POOL[4],IMG_POOL[6],IMG_POOL[7]]},
  {id:'p46', name:'Sweets (Pack)', unit:'500 g', price:420, category:'sweets', brand:'Local', eta:3, images:[IMG_POOL[0],IMG_POOL[3],IMG_POOL[1]]},
  {id:'p47', name:'Health Drink (Jar)', unit:'400 g', price:650, category:'beverages', brand:'Horlicks', eta:4, images:[IMG_POOL[2],IMG_POOL[6],IMG_POOL[5]]},
  {id:'p48', name:'Protein Bar', unit:'50 g', price:120, category:'snacks', brand:'Local', eta:3, images:[IMG_POOL[7],IMG_POOL[1],IMG_POOL[4]]},
  {id:'p49', name:'Peanuts', unit:'200 g', price:90, category:'snacks', brand:'Local', eta:2, images:[IMG_POOL[3],IMG_POOL[5],IMG_POOL[0]]},
  {id:'p50', name:'Corn Oil', unit:'1 L', price:200, category:'oils', brand:'Fortune', eta:3, images:[IMG_POOL[6],IMG_POOL[2],IMG_POOL[7]]},
  // extras to make >50 if needed
  {id:'p51', name:'Oats', unit:'500 g', price:180, category:'breakfast', brand:'Quaker', eta:3, images:[IMG_POOL[1],IMG_POOL[0],IMG_POOL[3]]},
  {id:'p52', name:'Sattu', unit:'1 kg', price:110, category:'staples', brand:'Local', eta:3, images:[IMG_POOL[2],IMG_POOL[7],IMG_POOL[5]]}
];

// ---------------- CART (localStorage) ----------------
function getCart(){ try{ return JSON.parse(localStorage.getItem('vg_cart')||'[]') }catch(e){return []} }
function saveCart(cart){ localStorage.setItem('vg_cart', JSON.stringify(cart)); updateCartUI() }
function updateCartUI(){
  const cart = getCart();
  $('#cartCount').innerText = cart.reduce((s,i)=>s+i.qty,0);
  $('#cartTotal').innerText = money(cart.reduce((s,i)=>s+i.price*i.qty,0));
  // update drawer list
  const list = $('#cartList');
  if(list){
    list.innerHTML = '';
    if(!cart.length){ list.innerHTML = '<div class="muted">Your cart is empty.</div>'; return; }
    cart.forEach((it, idx)=>{
      const row = document.createElement('div'); row.className='cart-item';
      row.innerHTML = `
        <img src="${it.image}" alt="${it.name}" />
        <div>
          <div class="name">${it.name}</div>
          <div class="muted">${it.qty} × ₹${it.price}</div>
        </div>
        <div>
          <div><button class="chip" onclick="changeQty(${idx}, -1)">−</button> <button class="chip" onclick="changeQty(${idx}, 1)">+</button></div>
          <div style="margin-top:6px"><button class="chip" onclick="removeItem(${idx})">Remove</button></div>
        </div>
      `;
      list.appendChild(row);
    });
  }
}

function addToCartObj(obj, qty=1){
  const cart = getCart();
  const found = cart.find(i=>i.id===obj.id);
  if(found){ found.qty += qty } else {
    cart.push({ id: obj.id, name: obj.name, price: obj.price, qty: qty, image: obj.images[0] });
  }
  saveCart(cart);
  alert(`${obj.name} added to cart`);
}

// change qty
function changeQty(index, delta){
  const cart = getCart();
  if(!cart[index]) return;
  cart[index].qty += delta;
  if(cart[index].qty <= 0) cart.splice(index,1);
  saveCart(cart);
  updateOrdersPage();
}
function removeItem(index){
  const cart = getCart();
  if(!cart[index]) return;
  cart.splice(index,1);
  saveCart(cart);
  updateOrdersPage();
}

// ---------------- RENDER PRODUCTS ----------------
let activeCategory = 'all';
function renderProducts(){
  const grid = $('#productGrid');
  const q = $('#searchBox').value.trim().toLowerCase();
  grid.innerHTML = '';
  const filtered = PRODUCTS.filter(p=>{
    if(activeCategory!=='all' && p.category!==activeCategory) return false;
    if(q && !(p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))) return false;
    return true;
  });
  filtered.forEach(p=>{
    const card = document.createElement('div'); card.className='card';
    card.innerHTML = `
      <div class="thumb"><img src="${p.images[0]}" alt="${p.name}"></div>
      <div class="card-body">
        <div class="title">${p.name}</div>
        <div class="unit">${p.unit} • ${p.brand}</div>
        <div class="price">₹${p.price}</div>
        <div class="row">
          <div class="qty">
            <button onclick="quickQty(this, -1)">−</button>
            <span class="qval">1</span>
            <button onclick="quickQty(this, 1)">+</button>
          </div>
          <div class="add-btn">
            <button class="btn" onclick='openModal("${p.id}")'>View</button>
            <button class="btn ghost" onclick='addToCartQuick("${p.id}", this)'>Add</button>
          </div>
        </div>
        <div class="muted" style="margin-top:8px" id="eta-${p.id}"></div>
      </div>
    `;
    grid.appendChild(card);
    // show ETA if pin set
    const etaEl = document.getElementById(`eta-${p.id}`);
    const pin = localStorage.getItem('vg_pin');
    if(pin) etaEl.innerText = 'Delivery by ' + calcDeliveryDateText(p.eta, pin);
  });
}

// quick quantity helpers
function quickQty(btn, delta){
  const qspan = btn.parentElement.querySelector('.qval');
  let val = Number(qspan.innerText);
  val += delta; if(val<1) val=1;
  qspan.innerText = val;
}
function addToCartQuick(id, btn){
  const q = Number(btn.parentElement.parentElement.querySelector('.qval').innerText || 1);
  const prod = PRODUCTS.find(p=>p.id===id);
  addToCartObj(prod, q);
}

// ---------------- MODAL (quick view) ----------------
let modalQtyVal = 1, modalProduct = null;
function openModal(id){
  const p = PRODUCTS.find(x=>x.id===id);
  if(!p) return;
  modalProduct = p;
  modalQtyVal = 1;
  $('#modalMainImg').src = p.images[0];
  $('#modalTitle').innerText = p.name;
  $('#modalUnit').innerText = `${p.unit} • ${p.brand}`;
  $('#modalPrice').innerText = p.price;
  $('#modalQty').innerText = modalQtyVal;
  // thumbs
  const thumbs = $('#modalThumbs'); thumbs.innerHTML = '';
  p.images.forEach((u,idx)=>{
    const img = document.createElement('img'); img.src=u; img.className='thumb-mini' + (idx===0?' active':'');
    img.onclick = ()=>{ $('#modalMainImg').src = u; $all('.thumb-mini').forEach(t=>t.classList.remove('active')); img.classList.add('active'); };
    thumbs.appendChild(img);
  });
  // ETA
  const pin = localStorage.getItem('vg_pin');
  if(pin){ $('#modalEta').style.display='block'; $('#modalEta').innerText = 'Expected delivery: ' + calcDeliveryDateText(p.eta, pin); } else { $('#modalEta').style.display='none' }
  document.getElementById('modalAddBtn').onclick = ()=>{ addToCartObj(p, modalQtyVal); closeModal(); }
  $('#productModal').style.display = 'flex'; $('#productModal').setAttribute('aria-hidden','false');
}
function closeModal(){ $('#productModal').style.display='none'; $('#productModal').setAttribute('aria-hidden','true'); }
function modalQty(delta){ modalQtyVal += delta; if(modalQtyVal<1) modalQtyVal=1; $('#modalQty').innerText = modalQtyVal; }
function buyNowModal(){
  if(!modalProduct) return;
  const qty = modalQtyVal;
  const message = `Hello Vishal, I want to buy ${modalProduct.name} (${modalProduct.unit}) x ${qty} — ₹${modalProduct.price*qty}.`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

// ---------------- PINCODE / ETA ----------------
function savePincode(){
  const pin = ($('#pinInput').value||'').trim();
  if(!/^\d{6}$/.test(pin)){ alert('Enter a valid 6-digit pincode'); return; }
  localStorage.setItem('vg_pin', pin);
  $('#pinMsg').innerText = 'Pincode saved. Delivery dates updated.';
  // update ETA labels
  PRODUCTS.forEach(p=>{ const el = document.getElementById(`eta-${p.id}`); if(el) el.innerText = 'Delivery by ' + calcDeliveryDateText(p.eta, pin); });
  updateOrdersPage();
}
function calcDeliveryDateText(baseDays, pin){
  // determine zone
  if(!pin) pin = '';
  const prefix = pin.substring(0,3);
  let extra = 0;
  if(PINCODE_RULES.nearPrefixes.includes(prefix)) extra = 0; // local
  else {
    // simple heuristic: assume Bihar pincodes often start with 80x.. but we do not have complete mapping
    // treat anything starting with '8' as Bihar-other (3 days)
    if(pin.startsWith('8')) extra = 1;
    else extra = 3;
  }
  const days = baseDays + extra;
  const d = new Date(); d.setDate(d.getDate() + days);
  const opt = { weekday:'short', month:'short', day:'numeric' };
  return d.toLocaleDateString('en-IN', opt);
}

// ---------------- CART DRAWER ----------------
function toggleCart(open){
  const el = $('#cartDrawer');
  if(typeof open === 'undefined') open = !el.classList.contains('open');
  if(open){ el.classList.add('open'); el.setAttribute('aria-hidden','false'); } else { el.classList.remove('open'); el.setAttribute('aria-hidden','true'); }
}
function checkout(){
  const cart = getCart();
  if(!cart.length){ alert('Cart is empty!'); return; }
  let total = 0; let message = 'Hello Vishal, I want to order:\\n';
  cart.forEach(it=>{
    message += `${it.name} — ${it.qty} x ₹${it.price} = ₹${it.qty * it.price}\\n`;
    total += it.qty * it.price;
  });
  message += `Total: ₹${total}\\n`;
  const pin = localStorage.getItem('vg_pin'); if(pin) message += `Pincode: ${pin}\\n`;
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank');
}

// ---------------- NAV / FILTER / INIT ----------------
function filterCategory(cat, elBtn){
  activeCategory = cat;
  $all('.chip').forEach(c=>c.classList.remove('active'));
  elBtn.classList.add('active');
  renderProducts();
}
function openProductDirect(id){ openModal(id) }
function addToCartById(id, qty=1){ const p = PRODUCTS.find(x=>x.id===id); if(p) addToCartObj(p, qty) }

// small helpers for orders page
function updateOrdersPage(){ // update orders.html if open
  updateCartUI();
  if(location.pathname.endsWith('orders.html')){
    const list = document.getElementById('ordersList');
    if(list) {
      const cart = getCart();
      list.innerHTML = '';
      if(!cart.length) { list.innerHTML = '<div class="muted">Your cart is empty.</div>'; return; }
      cart.forEach((it,i)=>{
        const div = document.createElement('div'); div.className='order-row';
        div.innerHTML = `<strong>${it.name}</strong> • ${it.qty} × ₹${it.price} <button class="chip" onclick="removeItem(${i})">Remove</button>`;
        list.appendChild(div);
      });
    }
  }
}
function goInit(){ document.getElementById('year').innerText = new Date().getFullYear(); updateCartUI(); renderProducts(); updateOrdersPage(); }
window.addEventListener('load', goInit);

// small extras for cross-pages
function goPage(p){ location.href = p }