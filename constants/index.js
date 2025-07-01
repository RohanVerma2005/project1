const navLinks = [
 {
	id: "cocktails",
	title: "Cocktails",
 },
 {
	id: "about",
	title: "About Us",
 },
 {
	id: "work",
	title: "The Art",
 },
 {
	id: "contact",
	title: "Contact",
 },
];

const cocktailLists = [
 {
	name: "Irish Coffee",
	country: "IRL",
	detail: "400 ml",
	price: "₹500",
 },
 {
	name: "Negroni",
	country: "ITA",
	detail: "500 ml",
	price: "₹600",
 },
 {
	name: "Daiquiri",
	country: "CU",
	detail: "750 ml",
	price: "₹850",
 },
 {
	name: "Mai Tai",
	country: "USD",
	detail: "600 ml",
	price: "₹700",
 },
];

const mockTailLists = [
 {
	name: "Mango Magic",
	country: "IND",
	detail: "500 ml",
	price: "₹1200",
 },
 {
	name: "Gimlet",
	country: "UK",
	detail: "850 ml",
	price: "₹1000",
 },
 {
	name: "Boulevardier ",
	country: "USA",
	detail: "700 ml",
	price: "₹1500",
 },
 {
	name: "Blue Lagoon ",
	country: "FRA",
	detail: "650 ml",
	price: "₹1100",
 },
];

const profileLists = [
 {
	imgPath: "/images/profile1.png",
 },
 {
	imgPath: "/images/profile2.png",
 },
 {
	imgPath: "/images/profile3.png",
 },
 {
	imgPath: "/images/profile4.png",
 },
];

const featureLists = [
 "Perfectly balanced blends",
 "Garnished to perfection",
 "Ice-cold every time",
 "Expertly shaken & stirred",
];

const goodLists = [
 "Handpicked ingredients",
 "Signature techniques",
 "Bartending artistry in action",
 "Freshly muddled flavors",
];

const storeInfo = {
 heading: "Where to Find Us",
 address: "456, Raq Blvd. #404, Los Angeles, CA 90210",
 contact: {
	phone: "(555) 987-6543",
	email: "hello@jsmcocktail.com",
 },
};

const openingHours = [
 { day: "Mon–Thu", time: "11:00am – 12am" },
 { day: "Fri", time: "11:00am – 2am" },
 { day: "Sat", time: "9:00am – 2am" },
 { day: "Sun", time: "9:00am – 1am" },
];

const socials = [
 {
	name: "Instagram",
	icon: "/images/insta.png",
	url: "#",
 },
 {
	name: "X (Twitter)",
	icon: "/images/x.png",
	url: "#",
 },
 {
	name: "Facebook",
	icon: "/images/fb.png",
	url: "#",
 },
];

const allCocktails = [
 {
	id: 1,
	name: "Margarita",
	image: "/images/Margarita_1.jpg",
	title: "Simple Ingredients, Bold Flavor",
	description:
	 "A captivating blend of tequila, citrusy lime juice, and velvety orange liqueur, elegantly crowned with a salted rim — a true masterpiece.",
 },
 {
	id: 2,
	name: "Old Fashioned",
	image: "/images/Old Fashioned_2.jpg",
	title: "Timeless Sophistication in a Glass",
	description:
	 "An enduring symbol of sophistication, this whiskey-based drink is stirred gently with bitters, sugar, and a twist of orange zest.",
 },
 {
	id: 3,
	name: "Moscow Mule",
	image: "/images/Moscow Mule_4.jpg",
	title: "Zesty Kick in a Copper Mug",
	description:
	 "A lively union of vodka, zesty ginger beer, and lime juice, served in its iconic copper mug for a sharp, invigorating flavour.",
 },
 {
	id: 4,
	name: "Espresso Martini",
	image: "/images/Espresso Martini_7.jpg",
	title: "Caffeine Meets Class",
	description:
	 " Bold and seductive, this elegant cocktail awakens the palate with espresso, vodka, and coffee liqueur, delivering energy and elegance.",
 },
{
	id: 5,
	name: "Cosmopolitan",
	image: "/images/Cosmopolitan_13.jpg",
	title: "Chic, Tart, and Cosmopolitan",
	description:
		"A chic, cosmopolitan fusion of vodka, cranberry, orange liqueur, and lime — stylish and refreshing.",
},
{
	id: 6,
	name: "Dark ’n’ Stormy",
	image: "/images/Dark ’n’ Stormy_15.jpg",
	title: "Bold Rum, Spicy Storm",
	description:
		"The unofficial drink of Bermuda, made from dark rum, spicy ginger beer, and lime for a stormy bite.",
},
{
	id: 7,
	name: "Negroni",
	image: "/images/Negroni_20.jpg",
	title: "Bittersweet Italian Perfection",
	description:
		"A bold Italian aperitif, this ruby-red blend of gin, Campari, and vermouth is a bitter beauty.",
},
{
	id: 8,
	name: "Blue Lagoon",
	image: "/images/Blue Lagoon_23.jpg",
	title: "Vivid Hue, Cool Vibe",
	description:
		"Electric blue and vibrant, this blend of vodka, curaçao, and lemon juice dazzles with citrusy sparkle.",
},
{
	id: 9,
	name: "Rum Runner",
	image: "/images/Rum Runner_29.jpg",
	title: "Adventurous Island Blend",
	description:
		"Fruity and vibrant, this rum cocktail features banana and blackberry liqueurs with a tropical twist.",
},
{
	id: 10,
	name: "Tiki Punch",
	image: "/images/Tiki Punch_30.jpg",
	title: "The Party in Your Glass",
	description:
		"A festive medley of rums and juices, this punch is a celebration in a glass.",
},
{
	id: 11,
	name: "White Russian",
	image: "/images/White Russian_33.jpg",
	title: "Smooth and Unapologetically Rich",
	description:
		"Decadent and smooth, this blend of vodka, coffee liqueur, and cream is a true classic.",
},
{
	id: 12,
	name: "Black Russian",
	image: "/images/Black Russian_34.jpg",
	title: "Bold, Simple, Seductive",
	description:
		"Vodka and coffee liqueur merge for a dark, mysterious sip.",
},
{
	id: 13,
	name: "Chocolate Martini",
	image: "/images/Chocolate Martini_36.jpg",
	title: "Decadence Meets Mixology",
	description:
		"Velvety vodka and chocolate liqueur shaken to decadent perfection.",
},
{
	id: 14,
	name: "Banana Daiquiri",
	image: "/images/Banana Daiquiri_38.jpg",
	title: "Banana Bliss, Caribbean Style",
	description:
		"A tropical treat of banana, rum, and lime blended to smooth richness.",
},
{
	id: 15,
	name: "Frozen Strawberry Margarita",
	image: "/images/Frozen Strawberry Margarita_39.jpg",
	title: "Chilled Berry Temptation",
	description:
		"A frosty blend of strawberries, tequila, and lime, perfect for summer days.",
},
{
	id: 16,
	name: "Frozen Mudslide",
	image: "/images/Frozen Mudslide_40.jpg",
	title: "Ice Cream Meets Cocktail Hour",
	description:
		"A boozy milkshake with vodka, Irish cream, coffee liqueur, and ice cream.",
},
{
	id: 17,
	name: "Clover Club",
	image: "/images/Clover Club_48.jpg",
	title: "Pink, Pretty, Powerful",
	description:
		"A pre-Prohibition beauty of gin, raspberry syrup, lemon, and egg white.",
},
{
	id: 18,
	name: "Irish Coffee",
	image: "/images/Irish Coffee_49.jpg",
	title: "Cozy with a Kick",
	description:
		"Warm Irish whiskey, dark coffee, and cream rise to velvety heights.",
},
{
	id: 19,
	name: "Long Island Iced Tea",
	image: "/images/Long Island Iced Tea_51.jpg",
	title: "Five Spirits, One Smooth Ride",
	description:
		"A surprisingly smooth mix of five spirits, citrus, and cola for a serious kick.",
},
{
	id: 20,
	name: "Sea Breeze",
	image: "/images/Sea Breeze_60.jpg",
	title: "Crisp, Cool, Coastal",
	description:
		"A breezy vodka cocktail balanced with cranberry and grapefruit juices for crisp refreshment.",
},
{
	id: 21,
	name: "Margherita Pizza",
	image: "/images/Margherita Pizza_1.jpg",
	title: "Simplicity, Baked to Perfection",
	description:
			"Neapolitan pride—fresh mozzarella, basil, and tomatoes on a thin crust kissed by wood-fired flames.",
},
{
	id: 22,
	name: "Sushi Platter",
	image: "/images/Sushi Platter_2.jpg",
	title: "Precision in Every Bite",
	description:
		"An artful mix of nigiri, maki, and sashimi celebrating Japan’s culinary elegance and precision.",
},
{
	id: 23,
	name: "Pad Thai",
	image: "/images/Pad Thai_8.jpg",
	title: "The Thai Street Classic",
	description:
		"Wok-fried rice noodles in tamarind sauce with peanuts, eggs, tofu, and a lime kick."
},
{
	id: 24,
	name: "Spaghetti Carbonara",
	image: "/images/Spaghetti Carbonara_10.jpg",
	title: "Creamless Roman Elegance",
	description:
		"Eggs, Pecorino, pancetta, and pepper tossed with al dente pasta—pure Roman indulgence.",
},
{
	id: 25,
	name: "Gajar Halwa",
	image: "/images/Gajar Halwa_29.jpg",
	title: "Winter’s Sweet Heart",
	description:
		"Grated carrots cooked in milk and ghee, laced with dry fruits.",
},
{
	id: 26,
	name: "Falafel Wrap",
	image: "/images/Falafel Wrap_11.jpg",
	title: "Middle Eastern Pocket Delight",
	description:
		"Crispy chickpea patties tucked in warm pita with tahini, veggies, and pickled punch."},
{
	id: 27,
	name: "Ratatouille",
	image: "/images/Ratatouille_13.jpg",
	title: "Provencal Symphony",
	description:
		"A humble stew of zucchini, tomatoes, and eggplant layered with love and French finesse."
},
{
	id: 28,
	name: "Baklava",
	image: "/images/Baklava_14.jpg",
	title: "Sweet Layers of History",
	description:
		"Phyllo pastry soaked in honey syrup, layered with crushed nuts for a flaky, decadent bite.",
},
{
	id: 29,
	name: "Bulgogi",
	image: "/images/Bulgogi_20.jpg",
	title: "Korea’s Fiery BBQ",
	description:
		"Thinly sliced beef marinated in soy, garlic, and pear, grilled for a sweet, smoky punch.",
},
{
	id: 30,
	name: " Mac and Cheese",
	image: "/images/Mac & Cheese_28.jpg",
	title: "America’s Cheesy Hug",
	description:
		"Elbow pasta bathed in velvety cheddar sauce, baked with a golden breadcrumb crust.",
},
{
	id: 31,
	name: "Cheesecake",
	image: "/images/Cheesecake_30.jpg",
	title: "Smooth and Unapologetically Rich",
	description:
		"Dense yet smooth, this vanilla-scented slice rests on a buttery graham cracker base.",
},
{
	id: 32,
	name: "Butter Chicken",
	image: "/images/Butter Chicken_1.jpg",
	title: "Delhi’s Creamy Delight",
	description:
		"Tender chicken cooked in a velvety tomato-butter gravy, finished with cream and spices.",
},
{
	id: 33,
	name: "Paneer Tikka",
	image: "/images/Paneer Tikka_2.jpg",
	title: "Charred Cottage Cheese Marvel",
	description:
		"Cubes of paneer marinated in yogurt and spices, grilled to smoky perfection.",
},
{
	id: 34,
	name: "Biryani",
	image: "/images/Biryani _3.jpg",
	title: "Aromatic Royal Feast",
	description:
		"Fragrant basmati rice layered with saffron, meat, and caramelized onions.",
},
{
	id: 35,
	name: " Rogan Josh",
	image: "/images/Rogan Josh_5.jpg",
	title: "Kashmir’s Fiery Embrace",
	description:
		"Slow-cooked lamb curry with Kashmiri spices in a rich red gravy.",
},
{
	id: 36,
	name: "Chole Bhature",
	image: "/images/Chole Bhature_6.jpg",
	title: "North’s Puffy Spice Combo",
	description:
		"Spiced chickpea curry paired with deep-fried, fluffy bhature bread.",
},
{
	id: 37,
	name: " Tandoori Chicken",
	image: "/images/Tandoori Chicken_7.jpg",
	title: "Smoky Clay Oven Classic",
	description:
		"Yogurt-marinated chicken grilled in a tandoor, tinged with char and chili.",
},
{
	id: 38,
	name: "Pav Bhaji",
	image: "/images/Pav Bhaji_9.jpg",
	title: " Mumbai’s Spicy Smash",
	description:
		"A buttery mashed vegetable curry served with griddled buns and chopped onions.",
},
{
	id: 39,
	name: "Chicken Starter",
	image: "/images/Chicken 65_17.jpg",
	title: "Southern Spice Blast",
	description:
		"Deep-fried chicken chunks tossed in fiery red masala, curry leaves, and chilies.",
},
{
	id: 40,
	name: "Moong Dal Halwa",
	image: "/images/Moong Dal Halwa_26.jpg",
	title: " Golden Grain Indulgence",
	description:
		"Rich dessert made from slow-roasted moong dal, ghee, and cardamom.",
}
];

export {
 navLinks,
 cocktailLists,
 mockTailLists,
 profileLists,
 featureLists,
 goodLists,
 openingHours,
 storeInfo,
 socials,
 allCocktails,
};
