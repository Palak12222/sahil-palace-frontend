// ===== AUTHENTIC SAHIL PALACE RESTAURANT MENU DATA =====
const menuData = {
  breakfast: [
    { name: "Tea", price: 30, type: "veg", desc: "Fresh hot brewed tea", img: "images/food_veg.png" },
    { name: "Special Milk Tea", price: 40, type: "veg", desc: "Rich cardamom & ginger milk tea", img: "images/food_veg.png" },
    { name: "Hot Milk", price: 40, type: "veg", desc: "Pure fresh hot milk", img: "images/food_veg.png" },
    { name: "Tandoori Aloo Prantha", price: 70, type: "veg", desc: "Spiced potato filled tandoori flatbread with butter", img: "images/food_veg.png" },
    { name: "Tandoori Gobhi Prantha", price: 70, type: "veg", desc: "Fresh cauliflower stuffed tandoori parantha", img: "images/food_veg.png" },
    { name: "Tandoori Onion Prantha", price: 70, type: "veg", desc: "Crispy spiced onion stuffed tandoori parantha", img: "images/food_veg.png" },
    { name: "Tandoori Mix Prantha", price: 80, type: "veg", desc: "Mixed veggie & potato stuffed tandoori parantha", img: "images/food_veg.png" },
    { name: "Tandoori Paneer Prantha", price: 110, type: "veg", desc: "Fresh cottage cheese stuffed tandoori parantha", img: "images/food_veg.png" },
    { name: "Lassi (Sweet / Salty)", price: 50, type: "veg", desc: "Traditional thick chilled yogurt drink", img: "images/food_veg.png" },
    { name: "Poha", price: 100, type: "veg", desc: "Flattened rice cooked with spices & peanuts", img: "images/food_veg.png" },
    { name: "Bread Omelette", price: 100, type: "nonveg", desc: "Fluffy 2-egg omelette served with toasted bread", img: "images/food_nonveg.png" },
    { name: "Omlate (2 Egg)", price: 80, type: "nonveg", desc: "2-egg Indian style masala omelette", img: "images/food_nonveg.png" },
    { name: "Bhurji (2 Egg)", price: 80, type: "nonveg", desc: "Scrambled spiced eggs with onions & tomatoes", img: "images/food_nonveg.png" },
    { name: "Half Fry (2 Egg)", price: 80, type: "nonveg", desc: "2 fried eggs sunny side up with black pepper", img: "images/food_nonveg.png" }
  ],
  maggi: [
    { name: "Plain Maggi", price: 100, type: "veg", desc: "Classic hot Maggi noodles", img: "images/food_veg.png" },
    { name: "Veg. Maggi", price: 140, type: "veg", desc: "Maggi noodles tossed with fresh vegetables", img: "images/food_veg.png" },
    { name: "Red Sauce Pasta", price: 200, type: "veg", desc: "Penne pasta in spicy tangy tomato red sauce", img: "images/food_veg.png" },
    { name: "White Sauce Pasta", price: 200, type: "veg", desc: "Creamy cheesy white sauce pasta with herbs", img: "images/food_veg.png" },
    { name: "Veg. Sandwich", price: 80, type: "veg", desc: "Fresh vegetable sandwich with green chutney", img: "images/food_veg.png" },
    { name: "Veg. Sandwich Grilled", price: 100, type: "veg", desc: "Crispy grilled sandwich packed with seasoned veggies", img: "images/food_veg.png" },
    { name: "Cheese Sandwich", price: 120, type: "veg", desc: "Melted cheese & veggie grilled sandwich", img: "images/food_veg.png" }
  ],
  snacks: [
    { name: "Paneer KFC", price: 240, type: "veg", desc: "Ultra-crispy fried cottage cheese strips", img: "images/food_paneer_tikka.png" },
    { name: "Paneer Fry", price: 200, type: "veg", desc: "Golden fried paneer cubes with chaat masala", img: "images/food_paneer_tikka.png" },
    { name: "Onion Pakora", price: 140, type: "veg", desc: "Crispy onion fritters served with chutney", img: "images/food_veg.png" },
    { name: "Chana Chilly", price: 200, type: "veg", desc: "Crispy fried chickpeas tossed in spicy Indo-Chinese sauce", img: "images/food_veg.png" },
    { name: "Paneer Pakora (4 Pcs)", price: 140, type: "veg", desc: "Soft paneer fritters dipped in spiced besan batter", img: "images/food_paneer_tikka.png" },
    { name: "Veg. Pakora", price: 140, type: "veg", desc: "Assorted vegetable pakoras served piping hot", img: "images/food_veg.png" },
    { name: "Cheese Finger", price: 240, type: "veg", desc: "Crispy breaded cheese sticks filled with gooey cheese", img: "images/food_veg.png" },
    { name: "Mushroom Duplex", price: 240, type: "veg", desc: "Stuffed mushroom caps fried to perfection", img: "images/food_veg.png" },
    { name: "Veg. Cutlet (4 Pcs)", price: 140, type: "veg", desc: "Crispy fried vegetable cutlets with mint dip", img: "images/food_veg.png" },
    { name: "Gobhi Pakora (Seasonal)", price: 140, type: "veg", desc: "Cauliflower pakoras fried crispy with spices", img: "images/food_veg.png" },
    { name: "Potato Finger Masala", price: 140, type: "veg", desc: "Crispy potato fingers tossed in spicy masala", img: "images/food_veg.png" },
    { name: "Chana Chaat (Black & White)", price: 140, type: "veg", desc: "Tangy chickpea chaat with lemon & spices", img: "images/food_veg.png" },
    { name: "Hot Chaat (Chana + Aloo)", price: 180, type: "veg", desc: "Sizzling hot chickpea & potato chaat", img: "images/food_veg.png" },
    { name: "Peanut Masala", price: 140, type: "veg", desc: "Roasted peanuts tossed with onion, tomato & lemon juice", img: "images/food_veg.png" },
    { name: "Chana Pataka", price: 160, type: "veg", desc: "Spicy fried chickpeas seasoned with Indian spices", img: "images/food_veg.png" },
    { name: "Sweetcorn Plain", price: 100, type: "veg", desc: "Steamed sweetcorn with butter & salt", img: "images/food_veg.png" },
    { name: "Crispy Corn", price: 160, type: "veg", desc: "Deep fried crispy sweet corn tossed with peppers", img: "images/food_veg.png" },
    { name: "Sweet Corn Chat", price: 140, type: "veg", desc: "Tangy spiced sweet corn salad", img: "images/food_veg.png" },
    { name: "Chana Chat & Sweetcorn", price: 180, type: "veg", desc: "Combo chana & sweetcorn spicy chaat", img: "images/food_veg.png" },
    { name: "Fresh Paneer", price: 180, type: "veg", desc: "Fresh raw cottage cheese cubes served with chaat masala", img: "images/food_paneer_tikka.png" }
  ],
  tandoori: [
    { name: "Tandoori Aloo (8 Pcs)", price: 220, type: "veg", desc: "Tandoor roasted spiced baby potatoes", img: "images/food_veg.png" },
    { name: "Haryali Chaap (8 Pcs)", price: 240, type: "veg", desc: "Soya chaap marinated in mint & coriander green paste", img: "images/food_veg.png" },
    { name: "Achari Chaap (8 Pcs)", price: 240, type: "veg", desc: "Tangy achari spiced roasted soya chaap", img: "images/food_veg.png" },
    { name: "Paneer Tikka (8 Pcs)", price: 280, type: "veg", desc: "Classic tandoor grilled paneer cubes with bell peppers", img: "images/food_paneer_tikka.png" },
    { name: "Achari Paneer Tikka (8 Pcs)", price: 280, type: "veg", desc: "Pickle-spiced grilled cottage cheese skewers", img: "images/food_paneer_tikka.png" },
    { name: "Mushroom Tikka (8 Pcs)", price: 280, type: "veg", desc: "Marinated mushrooms grilled in tandoor clay oven", img: "images/food_veg.png" },
    { name: "Cheese Seekh Tikka (8 Pcs)", price: 280, type: "veg", desc: "Melted cheese & veggie seekh kebabs", img: "images/food_paneer_tikka.png" },
    { name: "Veg. Seekh Kabab (8 Pcs)", price: 220, type: "veg", desc: "Minced vegetable kebabs grilled on skewers", img: "images/food_veg.png" },
    { name: "Hara Bhara Tikka (8 Pcs)", price: 280, type: "veg", desc: "Spinach & green pea patties cooked in tandoor", img: "images/food_veg.png" },
    { name: "Malai Chaap (8 Pcs)", price: 260, type: "veg", desc: "Creamy cashew & cardamom marinated roasted soya chaap", img: "images/food_veg.png" },
    { name: "Afgani Chaap", price: 260, type: "veg", desc: "Rich Afghani style mild creamy tandoori chaap", img: "images/food_veg.png" }
  ],
  mainveg: [
    { name: "Chef Special Paneer", price: 360, type: "veg", desc: "Signature rich gravy paneer preparation", img: "images/food_paneer_tikka.png" },
    { name: "Cheese Tomato", price: 280, type: "veg", desc: "Tangy tomato curry topped with grated cheese", img: "images/food_veg.png" },
    { name: "Shahi Paneer", price: 280, halfPrice: 150, type: "veg", desc: "Royal cottage cheese in sweet cashew cream gravy", img: "images/food_paneer_tikka.png" },
    { name: "Kadai Paneer", price: 340, halfPrice: 180, type: "veg", desc: "Paneer tossed with capsicum & fresh kadai spices", img: "images/food_paneer_tikka.png" },
    { name: "Paneer Butter Masala", price: 300, type: "veg", desc: "Paneer in smooth creamy tomato butter gravy", img: "images/food_paneer_tikka.png" },
    { name: "Paneer Do Pyaza", price: 300, type: "veg", desc: "Paneer cooked with onions in rich brown gravy", img: "images/food_paneer_tikka.png" },
    { name: "Paneer Methi Malai", price: 300, type: "veg", desc: "Paneer in fenugreek & cream rich curry", img: "images/food_paneer_tikka.png" },
    { name: "Palak Paneer", price: 280, type: "veg", desc: "Fresh spinach puree with soft paneer cubes", img: "images/food_paneer_tikka.png" },
    { name: "Matar Paneer", price: 240, halfPrice: 160, type: "veg", desc: "Green peas & paneer in spiced gravy", img: "images/food_paneer_tikka.png" },
    { name: "Paneer Bhurji", price: 250, type: "veg", desc: "Scrambled paneer sauteed with onion & tomato", img: "images/food_paneer_tikka.png" },
    { name: "Veg. Gravy", price: 180, type: "veg", desc: "Rich seasoned vegetable curry gravy", img: "images/food_veg.png" },
    { name: "Paneer Pasanda", price: 300, type: "veg", desc: "Stuffed paneer triangles in rich almond gravy", img: "images/food_paneer_tikka.png" },
    { name: "Chaap Masala Gravy", price: 280, type: "veg", desc: "Soya chaap cooked in spicy onion tomato masala", img: "images/food_veg.png" },
    { name: "Chaap Roganjosh", price: 280, type: "veg", desc: "Rogan josh style spiced vegetarian chaap curry", img: "images/food_veg.png" },
    { name: "Tawa Chaap Masala", price: 280, type: "veg", desc: "Sizzling tawa cooked chaap with green chillies", img: "images/food_veg.png" },
    { name: "Tawa Tikka Masala", price: 300, type: "veg", desc: "Roasted paneer tikka tossed on tawa with masala", img: "images/food_paneer_tikka.png" },
    { name: "Malai Kofta", price: 320, type: "veg", desc: "Fried paneer & potato balls in velvet cream gravy", img: "images/food_veg.png" },
    { name: "Palak Kofta", price: 320, type: "veg", desc: "Veg koftas simmered in healthy spinach gravy", img: "images/food_veg.png" },
    { name: "Veg Kofta", price: 280, type: "veg", desc: "Vegetable dumplings in savory spiced gravy", img: "images/food_veg.png" },
    { name: "Palak Corn", price: 280, type: "veg", desc: "Sweet corn kernels cooked in spinach gravy", img: "images/food_veg.png" },
    { name: "Mix Veg.", price: 250, halfPrice: 180, type: "veg", desc: "Assorted seasonal vegetables cooked together", img: "images/food_veg.png" },
    { name: "Mushroom Curry", price: 280, type: "veg", desc: "Button mushrooms cooked in flavorful gravy", img: "images/food_veg.png" },
    { name: "Mutter Mushroom", price: 280, type: "veg", desc: "Green peas & mushroom curry", img: "images/food_veg.png" },
    { name: "Mushroom Masala", price: 280, type: "veg", desc: "Spicy dry mushroom masala dish", img: "images/food_veg.png" },
    { name: "Mushroom Do Pyaza", price: 280, type: "veg", desc: "Mushroom cooked with abundance of caramelized onions", img: "images/food_veg.png" },
    { name: "Mushroom Corn", price: 280, type: "veg", desc: "Button mushroom and sweetcorn combo gravy", img: "images/food_veg.png" },
    { name: "Palak Mushroom", price: 300, type: "veg", desc: "Mushrooms in smooth spinach curry", img: "images/food_veg.png" },
    { name: "Mushroom Palak Corn", price: 320, type: "veg", desc: "Triple delights of mushroom, spinach & corn", img: "images/food_veg.png" },
    { name: "Jeera Aloo", price: 200, type: "veg", desc: "Crispy potatoes tossed with cumin seeds & turmeric", img: "images/food_veg.png" },
    { name: "Chana Masala", price: 200, type: "veg", desc: "Traditional Punjabi chickpea curry", img: "images/food_veg.png" },
    { name: "Kadahi Chana", price: 240, type: "veg", desc: "Chickpeas tossed in kadai spices & green peppers", img: "images/food_veg.png" },
    { name: "Mutter Methi Malai", price: 320, type: "veg", desc: "Green peas with fresh fenugreek leaves in heavy cream", img: "images/food_veg.png" },
    { name: "Aloo Gobhi", price: 220, type: "veg", desc: "Homestyle potato & cauliflower dry masala", img: "images/food_veg.png" },
    { name: "Masala Gobhi", price: 220, type: "veg", desc: "Spicy fried cauliflower dish", img: "images/food_veg.png" },
    { name: "Keema Gobhi", price: 220, type: "veg", desc: "Fine minced cauliflower stir-fry with spices", img: "images/food_veg.png" },
    { name: "Paneer Bhujiya", price: 280, type: "veg", desc: "Spiced grated paneer dry stir-fry", img: "images/food_paneer_tikka.png" },
    { name: "Paneer Tikka Butter Masala", price: 320, type: "veg", desc: "Tandoori paneer tikka in butter gravy", img: "images/food_paneer_tikka.png" },
    { name: "Kaju Kari", price: 380, type: "veg", desc: "Whole cashews cooked in rich royal golden gravy", img: "images/food_veg.png" },
    { name: "Sev Bhaji", price: 200, halfPrice: 130, type: "veg", desc: "Spicy Maharashtrian style gram flour sev curry", img: "images/food_veg.png" },
    { name: "Sev Tomato", price: 200, type: "veg", desc: "Tangy tomato curry topped with crispy sev", img: "images/food_veg.png" },
    { name: "Aloo Chana", price: 200, type: "veg", desc: "Potato and chickpea semi-dry curry", img: "images/food_veg.png" },
    { name: "Dum Aloo", price: 200, type: "veg", desc: "Baby potatoes slow cooked in rich spicy yogurt gravy", img: "images/food_veg.png" },
    { name: "Aloo Mutter", price: 200, type: "veg", desc: "Potatoes and green peas in homestyle gravy", img: "images/food_veg.png" },
    { name: "Chana Paneer", price: 220, type: "veg", desc: "Chickpeas and cottage cheese combination gravy", img: "images/food_paneer_tikka.png" }
  ],
  dal: [
    { name: "Dal Maharani", price: 200, type: "veg", desc: "Royal slow-cooked black dal with butter & spices", img: "images/food_dal_makhani.png" },
    { name: "Dal Makhani", price: 200, halfPrice: 120, type: "veg", desc: "Creamy black lentil curry slow-cooked overnight", img: "images/food_dal_makhani.png" },
    { name: "Yellow Dal Tadka", price: 160, halfPrice: 100, type: "veg", desc: "Yellow arhar dal tempered with ghee, cumin & garlic", img: "images/food_dal_makhani.png" },
    { name: "Dal Fry", price: 160, halfPrice: 100, type: "veg", desc: "Savory fried yellow lentils with onion & tomato", img: "images/food_dal_makhani.png" }
  ],
  rice: [
    { name: "Steamed Rice", price: 90, type: "veg", desc: "Plain fluffy basmati rice", img: "images/food_veg.png" },
    { name: "Jeera Rice", price: 120, type: "veg", desc: "Basmati rice tempered with cumin seeds & ghee", img: "images/food_veg.png" },
    { name: "Veg. Pulao", price: 140, type: "veg", desc: "Fragrant rice with fresh vegetables & mild spices", img: "images/food_veg.png" },
    { name: "Peas Pulao", price: 140, type: "veg", desc: "Basmati rice cooked with sweet green peas", img: "images/food_veg.png" },
    { name: "Fried Rice", price: 140, type: "veg", desc: "Indo-Chinese style vegetable fried rice", img: "images/food_veg.png" },
    { name: "Veg. Biryani", price: 160, type: "veg", desc: "Aromatic basmati rice cooked with mixed veggies & biryani spices", img: "images/food_biryani.png" },
    { name: "Egg Biryani", price: 180, type: "nonveg", desc: "Fragrant saffron rice dum cooked with spiced eggs", img: "images/food_biryani.png" },
    { name: "Chicken Biryani", price: 250, type: "nonveg", desc: "Tender chicken layered with saffron basmati rice", img: "images/food_biryani.png" },
    { name: "Chicken Biryani with Gravy", price: 300, type: "nonveg", desc: "Chicken biryani served with extra rich chicken gravy", img: "images/food_biryani.png" },
    { name: "Boneless Chicken Biryani (with Gravy)", price: 350, type: "nonveg", desc: "Boneless chicken biryani with rich gravy", img: "images/food_biryani.png" }
  ],
  bread: [
    { name: "Tandoori Roti (Plain)", price: 15, type: "veg", desc: "Crispy clay oven whole wheat bread", img: "images/food_veg.png" },
    { name: "Butter Roti", price: 18, type: "veg", desc: "Clay oven roti brushed with fresh butter", img: "images/food_veg.png" },
    { name: "Missi Roti", price: 25, type: "veg", desc: "Spiced gram flour (besan) tandoori flatbread", img: "images/food_veg.png" },
    { name: "Plain Naan", price: 30, type: "veg", desc: "Soft leavened tandoori bread", img: "images/food_veg.png" },
    { name: "Butter Naan", price: 40, type: "veg", desc: "Rich fluffy naan topped with melted butter", img: "images/food_veg.png" },
    { name: "Stuff Naan", price: 60, type: "veg", desc: "Tandoori naan stuffed with seasoned potato & paneer", img: "images/food_veg.png" },
    { name: "Garlic Naan", price: 80, type: "veg", desc: "Naan topped with minced garlic & coriander butter", img: "images/food_veg.png" },
    { name: "Lachha Parantha", price: 40, type: "veg", desc: "Multi-layered flaky tandoori whole wheat bread", img: "images/food_veg.png" },
    { name: "Onion Missi", price: 35, type: "veg", desc: "Missi roti enriched with chopped onions & spices", img: "images/food_veg.png" },
    { name: "Onion Plain", price: 25, type: "veg", desc: "Onion infused tandoori roti", img: "images/food_veg.png" },
    { name: "Churchur Naan", price: 80, type: "veg", desc: "Crispy crushed stuffed naan with extra butter", img: "images/food_veg.png" },
    { name: "Amritsari Naan", price: 80, type: "veg", desc: "Famous Amritsari style spiced potato stuffed naan", img: "images/food_veg.png" },
    { name: "Garlic Roti", price: 40, type: "veg", desc: "Whole wheat tandoori roti coated with garlic butter", img: "images/food_veg.png" },
    { name: "Gur Roti", price: 40, type: "veg", desc: "Sweet jaggery infused traditional tandoori roti", img: "images/food_veg.png" }
  ],
  chinese: [
    { name: "French Fries", price: 100, type: "veg", desc: "Crispy golden salted potato fries", img: "images/food_veg.png" },
    { name: "Honey Chilli Potato", price: 180, type: "veg", desc: "Crispy potato fingers tossed in honey chilli glaze", img: "images/food_veg.png" },
    { name: "Honey Chilli Cauliflower (Seasonal)", price: 180, type: "veg", desc: "Crispy fried cauliflower tossed in sweet spicy sauce", img: "images/food_veg.png" },
    { name: "Cheese Chilli Dry", price: 280, type: "veg", desc: "Indo-Chinese paneer tossed with capsicum & green chilli", img: "images/food_paneer_tikka.png" },
    { name: "Cheese Chilli Gravy", price: 280, type: "veg", desc: "Cottage cheese in spicy soy chilli sauce gravy", img: "images/food_paneer_tikka.png" },
    { name: "Veg. Manchurian Dry", price: 220, type: "veg", desc: "Crispy vegetable balls tossed in garlic Manchurian sauce", img: "images/food_veg.png" },
    { name: "Veg. Manchurian Gravy", price: 220, type: "veg", desc: "Vegetable balls simmered in tangy Manchurian gravy", img: "images/food_veg.png" },
    { name: "Soya Manchurian Gravy", price: 220, type: "veg", desc: "Soya chunks in savory Manchurian sauce", img: "images/food_veg.png" },
    { name: "Mushroom Chilly Dry/Gravy", price: 280, type: "veg", desc: "Mushrooms cooked in spicy chilli sauce", img: "images/food_veg.png" },
    { name: "Lemon Chaap Gravy", price: 280, type: "veg", desc: "Tangy lemon flavoured soya chaap gravy dish", img: "images/food_veg.png" },
    { name: "Hara Bhara Kabab", price: 160, type: "veg", desc: "Deep fried spinach & pea patties served with chutney", img: "images/food_veg.png" },
    { name: "Paneer Manchurian", price: 280, type: "veg", desc: "Fried paneer in zesty Indo-Chinese Manchurian sauce", img: "images/food_paneer_tikka.png" }
  ],
  raita: [
    { name: "Veg. Raita", price: 80, type: "veg", desc: "Chilled yogurt mixed with cucumber, tomato & cumin", img: "images/food_veg.png" },
    { name: "Boondi Raita", price: 80, type: "veg", desc: "Crispy chickpea flour pearls in spiced yogurt", img: "images/food_veg.png" },
    { name: "Aloo Onion Raita", price: 80, type: "veg", desc: "Yogurt with boiled potato & chopped onions", img: "images/food_veg.png" },
    { name: "Plain Curd", price: 50, type: "veg", desc: "Fresh set thick homemade yogurt", img: "images/food_veg.png" },
    { name: "Onion Salad", price: 40, type: "veg", desc: "Sliced red onions with lemon & green chilli", img: "images/food_veg.png" },
    { name: "Green Salad", price: 60, type: "veg", desc: "Fresh cucumber, tomato, carrot & onion salad", img: "images/food_veg.png" },
    { name: "Cream Salad", price: 120, type: "veg", desc: "Mixed veggies folded in fresh sweet cream", img: "images/food_veg.png" },
    { name: "Kachumber Salad", price: 100, type: "veg", desc: "Finely chopped cucumber, tomato & onion salad with chaat masala", img: "images/food_veg.png" },
    { name: "Dry Papad", price: 20, type: "veg", desc: "Roasted lentil wafer papad", img: "images/food_veg.png" },
    { name: "Fry Papad", price: 30, type: "veg", desc: "Deep fried crispy papad", img: "images/food_veg.png" },
    { name: "Masala Papad", price: 100, type: "veg", desc: "Fried papad topped with spicy chopped onions & tomatoes", img: "images/food_veg.png" },
    { name: "Dahi Fry", price: 120, type: "veg", desc: "Tempered spiced thick yogurt curry dish", img: "images/food_veg.png" }
  ],
  beverages: [
    { name: "Vanila Shake", price: 80, type: "veg", desc: "Classic creamy vanilla milk shake", img: "images/food_veg.png" },
    { name: "Chocolate Shake", price: 80, type: "veg", desc: "Rich cocoa chocolate milkshake", img: "images/food_veg.png" },
    { name: "Strawberry Shake", price: 80, type: "veg", desc: "Sweet strawberry blended milkshake", img: "images/food_veg.png" },
    { name: "Milk Shake", price: 80, type: "veg", desc: "Chilled sweetened thick milk shake", img: "images/food_veg.png" },
    { name: "Cold Coffee", price: 80, type: "veg", desc: "Chilled blended coffee topped with chocolate syrup", img: "images/food_veg.png" },
    { name: "Butterscotch Shake", price: 80, type: "veg", desc: "Crunchy butterscotch flavoured milkshake", img: "images/food_veg.png" },
    { name: "Pineapple Shake", price: 80, type: "veg", desc: "Tropical pineapple milkshake", img: "images/food_veg.png" },
    { name: "Oreo Shake", price: 100, type: "veg", desc: "Thick milkshake blended with Oreo cookies & cream", img: "images/food_veg.png" },
    { name: "Cold Drink", price: 40, type: "veg", desc: "Chilled canned/bottled soft drinks (MRP + ₹10)", img: "images/food_veg.png" },
    { name: "Soda", price: 30, type: "veg", desc: "Chilled sparkling carbonated soda", img: "images/food_veg.png" },
    { name: "Mineral Water", price: 20, type: "veg", desc: "Sealed mineral water bottle (1 Litre)", img: "images/food_veg.png" },
    { name: "Ice Cube", price: 30, type: "veg", desc: "Clean ice cubes bucket", img: "images/food_veg.png" }
  ],
  soups: [
    { name: "Veg. Tomato Soup", price: 80, type: "veg", desc: "Hot rich cream of tomato soup served with croutons", img: "images/food_veg.png" },
    { name: "Hot & Sour Soup", price: 80, type: "veg", desc: "Spicy & sour Chinese vegetable soup", img: "images/food_veg.png" },
    { name: "Sweet Corn Soup", price: 100, type: "veg", desc: "Creamy sweet corn & vegetable soup", img: "images/food_veg.png" },
    { name: "Veg. Soup", price: 80, type: "veg", desc: "Clear mixed vegetable soup with subtle herbs", img: "images/food_veg.png" }
  ],
  nonveg: [
    { name: "Chicken Pakora", price: 500, halfPrice: 300, type: "nonveg", desc: "Crispy spiced fried chicken fritters", img: "images/food_nonveg.png" },
    { name: "Chicken KFC", price: 550, halfPrice: 330, type: "nonveg", desc: "Super crunchy fried chicken pieces", img: "images/food_nonveg.png" },
    { name: "Chicken Boneless K.F.C.", price: 600, halfPrice: 380, type: "nonveg", desc: "Extra crispy boneless chicken KFC style", img: "images/food_nonveg.png" },
    { name: "Chicken Tikka Boneless", price: 550, halfPrice: 360, type: "nonveg", desc: "Tandoori grilled boneless chicken tikka", img: "images/food_nonveg.png" },
    { name: "Bonless Chicken Chilly", price: 600, halfPrice: 380, type: "nonveg", desc: "Boneless chicken tossed in chilli garlic soy sauce", img: "images/food_nonveg.png" },
    { name: "Bonless Chicken Manchurian", price: 550, halfPrice: 350, type: "nonveg", desc: "Boneless chicken in zesty Manchurian sauce", img: "images/food_nonveg.png" },
    { name: "Chicken Gravy", price: 150, type: "nonveg", desc: "Rich spiced chicken curry gravy", img: "images/food_nonveg.png" },
    { name: "Chilly Chicken", price: 550, halfPrice: 360, type: "nonveg", desc: "Classic bone-in chilli chicken Indo-Chinese dish", img: "images/food_nonveg.png" },
    { name: "Tawa Chicken", price: 600, halfPrice: 400, type: "nonveg", desc: "Sizzling tawa cooked chicken with onion green chillies", img: "images/food_nonveg.png" },
    { name: "Masala Chicken", price: 600, halfPrice: 400, type: "nonveg", desc: "Chicken cooked in thick spicy Punjabi masala", img: "images/food_nonveg.png" },
    { name: "Boneless Chicken Pakora", price: 550, halfPrice: 350, type: "nonveg", desc: "Crispy boneless chicken pakoras", img: "images/food_nonveg.png" },
    { name: "Boneless Rara Chicken", price: 600, halfPrice: 400, type: "nonveg", desc: "Boneless chicken cooked with chicken minced keema gravy", img: "images/food_nonveg.png" },
    { name: "Kadhai Chicken", price: 600, halfPrice: 400, type: "nonveg", desc: "Chicken cooked with capsicum & freshly ground kadai spices", img: "images/food_nonveg.png" },
    { name: "Kadhai Chicken Boneless", price: 600, halfPrice: 400, type: "nonveg", desc: "Boneless chicken tossed in kadai gravy", img: "images/food_nonveg.png" },
    { name: "Tangdi Kabab (Per Piece)", price: 100, type: "nonveg", desc: "Tandoori marinated roasted chicken drumstick leg piece", img: "images/food_nonveg.png" },
    { name: "Chicken Malai Tikka", price: 600, halfPrice: 350, type: "nonveg", desc: "Melt in mouth creamy cashew marinated chicken tikka", img: "images/food_nonveg.png" },
    { name: "Butter Chicken", price: 550, halfPrice: 350, type: "nonveg", desc: "Iconic tandoori chicken in velvet tomato butter gravy", img: "images/food_butter_chicken.png" },
    { name: "Jeera Chicken", price: 550, halfPrice: 330, type: "nonveg", desc: "Cumin tempered aromatic chicken dish", img: "images/food_nonveg.png" },
    { name: "Jeera Chicken Boneless", price: 600, halfPrice: 380, type: "nonveg", desc: "Boneless chicken cooked with cumin & spices", img: "images/food_nonveg.png" },
    { name: "Lemon Chicken", price: 550, halfPrice: 330, type: "nonveg", desc: "Tangy lemon juice infused spiced chicken", img: "images/food_nonveg.png" },
    { name: "Lemon Chicken Boneless", price: 600, halfPrice: 380, type: "nonveg", desc: "Tangy lemon boneless chicken curry", img: "images/food_nonveg.png" },
    { name: "Home Made Chicken", price: 550, halfPrice: 350, type: "nonveg", desc: "Desi homestyle chicken curry cooked with rustic spices", img: "images/food_nonveg.png" },
    { name: "Afgaani Chicken", price: 600, halfPrice: 350, type: "nonveg", desc: "Creamy mild & aromatic tandoori Afghani chicken", img: "images/food_nonveg.png" },
    { name: "Chicken Kalimirch", price: 550, halfPrice: 350, type: "nonveg", desc: "Black pepper spiced chicken in rich cream gravy", img: "images/food_nonveg.png" },
    { name: "Chicken Fry", price: 550, halfPrice: 350, type: "nonveg", desc: "Golden fried seasoned chicken pieces", img: "images/food_nonveg.png" },
    { name: "Boneless Butter Chicken", price: 600, halfPrice: 400, type: "nonveg", desc: "Boneless chicken in signature makhani gravy", img: "images/food_butter_chicken.png" },
    { name: "Boneless Lemon Chicken", price: 600, halfPrice: 380, type: "nonveg", desc: "Boneless chicken in zesty lemon sauce", img: "images/food_nonveg.png" },
    { name: "Punjabi Chicken", price: 550, halfPrice: 350, type: "nonveg", desc: "Spicy dhaba style Punjabi chicken curry", img: "images/food_nonveg.png" },
    { name: "Handi Chicken", price: 600, halfPrice: 400, type: "nonveg", desc: "Slow clay handi cooked chicken gravy", img: "images/food_nonveg.png" },
    { name: "Tandoori Chicken", price: 550, halfPrice: 300, type: "nonveg", desc: "Tandoor roasted whole marinated chicken", img: "images/food_nonveg.png" },
    { name: "Tandoori Butter Chicken", price: 600, halfPrice: 400, type: "nonveg", desc: "Tandoori roasted chicken cooked in rich butter sauce", img: "images/food_butter_chicken.png" },
    { name: "Chicken Leg (Extra)", price: 90, type: "nonveg", desc: "Single extra roasted chicken drumstick", img: "images/food_nonveg.png" },
    { name: "Fish Lemon Gravy", price: 380, type: "nonveg", desc: "Tender fish fillet in tangy lemon pepper curry", img: "images/food_nonveg.png" },
    { name: "Fish Pakora", price: 400, type: "nonveg", desc: "Crispy Amritsari style fried fish pakoras", img: "images/food_nonveg.png" },
    { name: "Chicken Curry", price: 550, halfPrice: 330, type: "nonveg", desc: "Classic Indian chicken curry with rich gravy", img: "images/food_nonveg.png" },
    { name: "Fish Chilly", price: 400, type: "nonveg", desc: "Fish fillets tossed in Indo-Chinese chilli sauce", img: "images/food_nonveg.png" },
    { name: "Fish Manchurian", price: 500, type: "nonveg", desc: "Fish cubes in savory Manchurian sauce", img: "images/food_nonveg.png" },
    { name: "Fish KFC", price: 400, type: "nonveg", desc: "Crunchy breaded fried fish fillets", img: "images/food_nonveg.png" },
    { name: "Fish Tikka", price: 450, type: "nonveg", desc: "Charcoal grilled spiced fish tikka kebabs", img: "images/food_nonveg.png" },
    { name: "Meat Labour", price: 400, halfPrice: 300, type: "nonveg", desc: "Slow cooked rich mutton meat curry", img: "images/food_nonveg.png" },
    { name: "Chicken Popcorn", price: 550, halfPrice: 350, type: "nonveg", desc: "Bite sized crispy fried chicken popcorns", img: "images/food_nonveg.png" }
  ]
};

// ===== STATE =====
let cart = {};
let currentCat  = "all";
let currentType = "all";

// ===== NAVBAR =====
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navLinks").classList.toggle("open");
});

// Category labels map
const categoryLabels = {
  breakfast: "🌅 Breakfast",
  maggi:     "🍝 Maggi & Pasta",
  snacks:    "🧅 Country Snacks",
  tandoori:  "🔥 Tandoori Snacks",
  mainveg:   "🥘 Main Course (Veg)",
  dal:       "🥣 Dall",
  rice:      "🍚 Rice & Biryani",
  bread:     "🫓 Indian Breads",
  chinese:   "🥢 Chinese Corner",
  raita:     "🥗 Raita & Salad",
  beverages: "🥤 Drinks & Shakes",
  soups:     "🥣 Soups",
  nonveg:    "🍗 Non-Veg Corner"
};

// ===== RENDER MENU =====
function renderMenu() {
  const searchInput = document.getElementById("menuSearch");
  const search = searchInput ? searchInput.value.toLowerCase().trim() : "";
  const grid   = document.getElementById("menuGrid");
  let   items  = [];

  const cats = currentCat === "all" ? Object.keys(menuData) : [currentCat];
  cats.forEach(cat => {
    const list = menuData[cat] || [];
    list.forEach(item => {
      if (currentType !== "all" && item.type !== currentType) return;
      if (!search || item.name.toLowerCase().includes(search) || item.desc.toLowerCase().includes(search)) {
        items.push({ ...item, cat });
      }
    });
  });

  const countElem = document.getElementById("resultsCount");
  if (countElem) countElem.textContent = `Showing ${items.length} item${items.length !== 1 ? "s" : ""}`;

  if (!items.length) {
    grid.innerHTML = `<div style="grid-column:1/-1;text-align:center;padding:60px 0;color:var(--text-light)">
      <div style="font-size:3rem;margin-bottom:16px">🔍</div>
      <p>No dishes found. Try selecting another category or searching again.</p></div>`;
    return;
  }

function getDishImage(item) {
  const name = (item.name || "").toLowerCase();
  const cat  = (item.cat  || "").toLowerCase();

  // 1. Mushroom Duplex
  if (name.includes("mushroom duplex") || name.includes("duplex")) {
    return "images/food_mushroom_duplex.png";
  }

  // 2. Sweet Corn & Crispy Corn
  if (name.includes("corn") || name.includes("sweetcorn")) {
    return "images/food_crispy_corn.png";
  }

  // 3. Cutlets & Potato Finger
  if (name.includes("cutlet") || name.includes("potato finger")) {
    return "images/food_veg_cutlet.png";
  }

  // 4. Chaats & Peanut Masala
  if (name.includes("chaat") || name.includes("chat") || name.includes("pataka") || name.includes("peanut")) {
    return "images/food_chana_chaat.png";
  }

  // 5. Specific Pastas
  if (name.includes("red sauce") || name.includes("red pasta")) {
    return "images/food_red_pasta.png";
  }
  if (name.includes("white sauce") || name.includes("white pasta")) {
    return "images/food_white_pasta.png";
  }

  // 6. Sandwiches
  if (name.includes("sandwich")) {
    return "images/food_sandwich.png";
  }

  // 7. Crispy Paneer Fry / KFC / Paneer Pakora / Cheese Finger
  if (name.includes("paneer kfc") || name.includes("paneer fry") || name.includes("paneer pakora") || name.includes("cheese finger")) {
    return "images/food_paneer_fry.png";
  }

  // 8. Pakoras & Fritters
  if (name.includes("pakora")) {
    return "images/food_pakora.png";
  }

  // 9. Chana Chilly & Chana Snacks
  if (name.includes("chana chilly")) {
    return "images/food_chana_chilly.png";
  }

  // 6. Item-specific Tea & Milk Drinks
  if (name === "tea" || name === "masala chai") {
    return "images/food_tea.png";
  }
  if (name.includes("special milk tea") || name.includes("milk tea")) {
    return "images/food_milk_tea.png";
  }
  if (name === "hot milk") {
    return "images/food_hot_milk.png";
  }

  // 7. Lassi
  if (name.includes("lassi")) {
    return "images/food_lassi.png";
  }

  // 8. Poha
  if (name.includes("poha")) {
    return "images/food_poha.png";
  }

  // 9. Paranthas & Stuffed Breads
  if (name.includes("paneer prantha") || name.includes("paneer parantha")) {
    return "images/food_paneer_paratha.png";
  }
  if (name.includes("parantha") || name.includes("prantha") || name.includes("naan") || name.includes("roti") || (name.includes("bread") && !name.includes("omelette") && !name.includes("sandwich")) || name.includes("puri") || name.includes("missi") || cat === "bread") {
    return "images/food_paratha.png";
  }

  // 10. Egg Dishes
  if (name.includes("bread omelette") || name.includes("bread omellete")) {
    return "images/food_bread_omelette.png";
  }
  if (name.includes("bhurji")) {
    return "images/food_egg_bhurji.png";
  }
  if (name.includes("half fry")) {
    return "images/food_egg_half_fry.png";
  }
  if (name.includes("omlate") || name.includes("omelette") || name.includes("egg")) {
    return "images/food_omelette.png";
  }

  // 11. Maggi & Noodles
  if (name.includes("maggi") || name.includes("meggie") || name.includes("noodle")) {
    return "images/food_maggi.png";
  }

  // 12. Shakes & Beverages
  if (name.includes("shake") || name.includes("coffee") || name.includes("drink") || name.includes("soda") || cat === "beverages") {
    return "images/food_shake.png";
  }

  // 13. Soups
  if (name.includes("soup") || cat === "soups") {
    return "images/food_soup.png";
  }

  // 14. Biryani, Pulao & Rice Dishes
  if (name.includes("biryani") || name.includes("pulao") || name.includes("rice") || name.includes("chawal") || cat === "rice") {
    return "images/food_biryani.png";
  }

  // 15. Dal, Lentils & Rajma/Chole Gravies
  if (name.includes("makhani") || name.includes("dal") || name.includes("dall") || name.includes("chole") || name.includes("rajma") || name.includes("tadka") || cat === "dal") {
    return "images/food_dal_makhani.png";
  }

  // 16. Paneer & Cheese Dishes
  if (name.includes("paneer") || name.includes("shahi") || name.includes("kadai") || name.includes("pasanda") || name.includes("cheese")) {
    return "images/food_paneer_tikka.png";
  }

  // 17. Chaap, Tikka, Seekh & Kebabs
  if (name.includes("chaap") || name.includes("tikka") || name.includes("seekh") || name.includes("kabab") || name.includes("kebab") || cat === "tandoori") {
    return "images/food_chaap.png";
  }

  // 18. Non-Veg Chicken, Mutton, Fish, Meat
  if (item.type === "nonveg" || name.includes("chicken") || name.includes("mutton") || name.includes("fish") || name.includes("kfc") || name.includes("meat") || cat === "nonveg") {
    return "images/food_butter_chicken.png";
  }

  // 19. Chinese, Pasta, Manchurian, Fries
  if (name.includes("pasta") || name.includes("manchurian") || name.includes("fries") || name.includes("chilly") || name.includes("chilli") || cat === "chinese" || cat === "maggi") {
    return "images/food_chinese.png";
  }

  // 20. Vegetable Curries & Mix Veg
  if (name.includes("mix veg") || name.includes("aloo") || name.includes("gobhi") || name.includes("kaju") || name.includes("sev") || name.includes("dum") || name.includes("curry") || name.includes("gravy") || name.includes("kofta") || cat === "mainveg") {
    return "images/food_mix_veg.png";
  }

  // 21. Salad & Raita & Papad
  if (name.includes("salad") || name.includes("raita") || name.includes("curd") || name.includes("papad") || name.includes("dahi") || cat === "raita") {
    return "images/food_salad.png";
  }

  // 22. Default fallback by Veg / Non-Veg
  return item.type === "nonveg" ? "images/food_nonveg.png" : "images/food_mix_veg.png";
}

  grid.innerHTML = items.map(item => {
    const fullKey = `${item.cat}__${item.name}__Full`;
    const halfKey = `${item.cat}__${item.name}__Half`;
    const singleKey = `${item.cat}__${item.name}`;

    const inCartFull = cart[fullKey] > 0;
    const inCartHalf = cart[halfKey] > 0;
    const inCartSingle = cart[singleKey] > 0;

    const dishImgSrc = getDishImage(item);
    const imgMarkup  = `<img src="${dishImgSrc}?v=2" alt="${item.name}" loading="lazy"/>`;

    let actionButtons = "";
    if (item.halfPrice) {
      actionButtons = `
        <div class="mc-price-opts">
          <button class="btn-add-opt ${inCartHalf ? 'added' : ''}" onclick="addToCart('${halfKey}', '${item.name} (Half)', ${item.halfPrice})">
            ${inCartHalf ? `Half (${cart[halfKey]})` : `+ Half ₹${item.halfPrice}`}
          </button>
          <button class="btn-add-opt ${inCartFull ? 'added' : ''}" onclick="addToCart('${fullKey}', '${item.name} (Full)', ${item.price})">
            ${inCartFull ? `Full (${cart[fullKey]})` : `+ Full ₹${item.price}`}
          </button>
        </div>`;
    } else {
      actionButtons = `
        <button class="btn-add ${inCartSingle ? "added" : ""}" onclick="addToCart('${singleKey}','${item.name}',${item.price})">
          ${inCartSingle ? `✅ Added (${cart[singleKey]})` : "+ Add"}
        </button>`;
    }

    return `
    <div class="menu-card">
      <div class="mc-img ${item.type === "veg" ? "veg-bg" : "nonveg-bg"}">
        ${imgMarkup}
        <span class="mc-meal-tag">${categoryLabels[item.cat] || "Dish"}</span>
      </div>
      <div class="mc-body">
        <div class="mc-type">
          <span class="mc-dot ${item.type}"></span>
          <span>${item.type === "veg" ? "Vegetarian" : "Non-Veg"}</span>
        </div>
        <h4>${item.name}</h4>
        <p>${item.desc}</p>
        <div class="mc-footer">
          <div class="mc-price">
            ${item.halfPrice ? `Half ₹${item.halfPrice} / Full ₹${item.price}` : `₹${item.price}`}
          </div>
          ${actionButtons}
        </div>
      </div>
    </div>`;
  }).join("");
}

// ===== CART LOGIC =====
function addToCart(key, displayName, price) {
  cart[key] = (cart[key] || 0) + 1;
  showToast(`🛒 ${displayName} added to cart!`);
  updateCart();
  renderMenu();
}

function changeQty(key, delta) {
  cart[key] = (cart[key] || 0) + delta;
  if (cart[key] <= 0) delete cart[key];
  updateCart();
  renderMenu();
}

function clearCart() {
  cart = {};
  updateCart();
  renderMenu();
}

function getCartItemInfo(key) {
  const parts = key.split("__");
  const cat = parts[0];
  const name = parts[1];
  const portion = parts[2]; // 'Half', 'Full', or undefined

  const list = menuData[cat] || [];
  const item = list.find(i => i.name === name);
  if (!item) return { name: name, price: 0 };

  if (portion === "Half" && item.halfPrice) {
    return { name: `${item.name} (Half)`, price: item.halfPrice };
  } else if (portion === "Full") {
    return { name: `${item.name} (Full)`, price: item.price };
  }
  return { name: item.name, price: item.price };
}

function updateCart() {
  const keys  = Object.keys(cart);
  let total   = 0;
  let count   = 0;

  keys.forEach(k => {
    const info = getCartItemInfo(k);
    total += info.price * cart[k];
    count += cart[k];
  });

  const badge = document.getElementById("cartBadge");
  if (badge) badge.textContent = count;

  if (!keys.length) {
    document.getElementById("cartEmpty").style.display     = "block";
    document.getElementById("cartItemsList").style.display = "none";
    document.getElementById("cartFooter").style.display    = "none";
    return;
  }

  document.getElementById("cartEmpty").style.display     = "none";
  document.getElementById("cartItemsList").style.display = "block";
  document.getElementById("cartFooter").style.display    = "block";
  document.getElementById("cartTotal").textContent       = `₹${total.toLocaleString("en-IN")}`;

  document.getElementById("cartItemsList").innerHTML = keys.map(k => {
    const info = getCartItemInfo(k);
    const itemTotal = info.price * cart[k];
    return `<div class="cart-item-row">
      <div class="ci-name">${info.name}</div>
      <div class="ci-qty">
        <button onclick="changeQty('${k}',-1)">−</button>
        <span>${cart[k]}</span>
        <button onclick="changeQty('${k}',1)">+</button>
      </div>
      <div class="ci-price">₹${itemTotal.toLocaleString("en-IN")}</div>
    </div>`;
  }).join("");
}

// ===== CHECKOUT MODAL =====
function checkout() {
  const keys = Object.keys(cart);
  if (!keys.length) { showToast("Your cart is empty! Add items first.", "red"); return; }

  let total = 0;
  document.getElementById("modalSummary").innerHTML = keys.map(k => {
    const info = getCartItemInfo(k);
    const itemTotal = info.price * cart[k];
    total += itemTotal;
    return `<div class="cs-item">
      <span>${info.name} × ${cart[k]}</span>
      <strong>₹${itemTotal.toLocaleString("en-IN")}</strong>
    </div>`;
  }).join("");

  document.getElementById("modalTotal").textContent = `₹${total.toLocaleString("en-IN")}`;

  // Set UPI QR
  const upiStr = `upi://pay?pa=8742026903@ybl&pn=Sahil%20Palace&am=${total}&cu=INR&tn=Food%20Order`;
  document.getElementById("upiQR").src = `https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=${encodeURIComponent(upiStr)}`;
  document.getElementById("upiPayLink").href = upiStr;

  document.getElementById("checkoutModal").classList.add("open");
  document.body.style.overflow = "hidden";
}

function closeCheckout() {
  document.getElementById("checkoutModal").classList.remove("open");
  document.body.style.overflow = "";
}

function closeSuccess() {
  document.getElementById("successModal").classList.remove("open");
  document.body.style.overflow = "";
}

// Close modal on backdrop click
document.getElementById("checkoutModal").addEventListener("click", e => {
  if (e.target.id === "checkoutModal") closeCheckout();
});

// Payment method selector
document.querySelectorAll(".pay-opt").forEach(opt => {
  opt.addEventListener("click", function() {
    document.querySelectorAll(".pay-opt").forEach(o => o.classList.remove("selected"));
    this.classList.add("selected");
    this.querySelector("input").checked = true;
    document.getElementById("upiInfo").style.display =
      this.dataset.pm === "upi" ? "block" : "none";
  });
});

// Copy UPI ID
function copyUPI() {
  const upi = "8742026903@ybl";
  navigator.clipboard.writeText(upi)
    .then(() => showToast("✅ UPI ID copied!"))
    .catch(() => prompt("Copy UPI ID:", upi));
}

// ===== PLACE ORDER =====
async function placeOrder(e) {
  e.preventDefault();
  const btn   = document.getElementById("placeOrderBtn");
  const name  = document.getElementById("cfName").value.trim();
  const phone = document.getElementById("cfPhone").value.trim();
  const addr  = document.getElementById("cfAddress").value.trim();
  const pm    = document.querySelector('input[name="payMethod"]:checked')?.value || "cash";

  if (!name || !phone || phone.length < 10) {
    showToast("Please fill in name and valid phone number", "red"); return;
  }

  const keys  = Object.keys(cart);
  let total   = 0;
  const items = keys.map(k => {
    const info = getCartItemInfo(k);
    const subtotal = info.price * cart[k];
    total += subtotal;
    return {
      name:     info.name,
      qty:      cart[k],
      price:    info.price,
      subtotal: subtotal
    };
  });

  btn.textContent = "Placing Order..."; btn.disabled = true;

  try {
    const res  = await fetch(`${API_BASE}/api/orders`, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify({ customer_name: name, phone, address: addr, items, total, payment_method: pm })
    });
    const data = await res.json();

    if (data.success) {
      closeCheckout();
      document.getElementById("successMsg").textContent =
        pm === "cash"
          ? "Your order has been received! Pay cash on delivery. We'll prepare it shortly."
          : pm === "upi"
          ? "Your order is confirmed! Please complete the UPI payment to the ID shown."
          : "Your order is confirmed! Pay by card when delivered.";
      document.getElementById("successOrderId").textContent = `Order ID: #${data.orderId}`;
      document.getElementById("successModal").classList.add("open");
      document.body.style.overflow = "hidden";
      cart = {};
      updateCart();
      renderMenu();
      document.getElementById("checkoutForm").reset();
    } else {
      showToast(data.message || "Order failed. Please try again!", "red");
    }
  } catch(err) {
    showToast("Could not place order. Please call us at 8742026903", "red");
  }
  btn.textContent = "✅ Confirm Order"; btn.disabled = false;
}

// ===== FILTER BUTTONS =====
document.querySelectorAll(".filter-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    currentCat = this.dataset.cat;
    renderMenu();
  });
});

document.querySelectorAll(".type-btn").forEach(btn => {
  btn.addEventListener("click", function() {
    document.querySelectorAll(".type-btn").forEach(b => b.classList.remove("active"));
    this.classList.add("active");
    currentType = this.dataset.type;
    renderMenu();
  });
});

// ===== TOAST =====
function showToast(msg, type = "green") {
  const t = document.getElementById("menuToast");
  if (!t) return;
  t.textContent = msg;
  t.style.background = type === "red" ? "#c0392b" : "#27ae60";
  t.style.opacity = "1";
  clearTimeout(t._to);
  t._to = setTimeout(() => t.style.opacity = "0", 2500);
}

// Initialize
renderMenu();
