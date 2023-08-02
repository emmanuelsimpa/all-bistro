export const RestuarantData = {
  search: (query) => {
    const restaurants = [
      {
        place: "Lagos",
        restaurant: [
          {
            id: "4b94c9f3-2867-4ec2-aea2-e216d4501921",
            name: "The Place",
            address: "123 Main Street, Lagos",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/The_Place_logo.svg/1200px-The_Place_logo.svg.png",
            rating: 4.5,
            price: "$$$",
            categories: ["Italian", "pizza"],
            geometry: { lat: 6.5244, lng: 3.3792 },
          },
          {
            id: "3463dd64-73d3-4928-92a8-a9cd35b8fa86",
            name: "Kogi Place",
            address: "456 Broad Street, Lagos",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Kogi_logo.svg/1200px-Kogi_logo.svg.png",
            rating: 4.0,
            price: "$",
            categories: ["Nigerian", "Street Food"],
            geometry: { lat: 6.465422, lng: 3.406448 },
          },
          {
            id: "314b705d-8939-43a9-a905-26dea5ce6869",
            name: "Ikoyi BBQ",
            address: "789 Lekki Road, Lagos",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["BBQ", "Steakhouse"],
            geometry: { lat: 6.42157, lng: 3.446244 },
          },
          {
            id: "c79fb679-8de5-4a9f-a4a4-dc3b41022c22",
            name: "Hard Rock Cafe",
            address: "Landmark Village, Water Corporation Road, Oniru, VI",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["American"],
            geometry: { lat: 6.462932, lng: 3.407142 },
          },
          {
            id: "9eaa9480-8101-4f29-a1cc-0454911a0019",
            name: "Taco Bell",
            address: "Shop 20, 3rd Floor, The Palms Shopping Mall, Lekki",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["Mexican"],
            geometry: { lat: 6.421234, lng: 3.444765 },
          },
          {
            id: "1f599b64-cc89-4250-ab75-0a420cb00af5",
            name: "Domino's Pizza",
            address: "Plot 103, Adeola Odeku Street, Victoria Island",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["Pizza"],
            geometry: { lat: 6.46289, lng: 3.385316 },
          },
          {
            id: "de7b2d2f-7a6d-4b7b-a0fc-1e8f2de361a7",
            name: "Chicken Republic",
            address: "111 Awolowo Road, Ikoyi",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["Nigerian"],
            geometry: { lat: 6.52518, lng: 3.391351 },
          },
          {
            id: "8156a764-b5c4-458a-999a-ee806a72b0b4",
            name: "The Alchemist",
            address: "143A Akin Adesola Street, Victoria Island",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["Mediterranean"],
            geometry: { lat: 6.464024, lng: 3.383886 },
          },
          {
            id: "3e3e9c53-76ab-47a7-ac3d-befa512f58b9",
            name: "Terra Kulture",
            address: "137 Herbert Macaulay Way, Yaba",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["African"],
            geometry: { lat: 6.510657, lng: 3.368505 },
          },
          {
            id: "e84327ef-c589-4eff-9ac0-62307fc9cb2f",
            name: "Tantalayo",
            address: "153A Herbert Macaulay Way, Yaba",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["Nigerian"],
            geometry: { lat: 6.510167, lng: 3.367961 },
          },
          {
            id: "07aab220-c196-4f4f-9714-0d3e48243c65",
            name: "Sweet Sensation",
            address: "22A Adeola Odeku Street, Victoria Island",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["Desserts"],
            geometry: { lat: 6.463791, lng: 3.385472 },
          },
          {
            id: "72564d8c-c4fa-4844-aa7b-b1622c16fc0a",
            name: "The Palms Restaurant",
            address: "Shop 104, 3rd Floor, The Palms Shopping Mall, Lekki",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["Seafood"],
            geometry: { lat: 6.421234, lng: 3.444765 },
          },
          {
            id: "9e360512-c60e-4f62-952b-55c585866330",
            name: "Burger Republic",
            address: "Plot 26, 1st Avenue, Oniru Estate, VI",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["Burgers"],
            geometry: { lat: 6.462915, lng: 3.405745 },
          },
          {
            id: "a4c2ca9d-9214-4fd9-a39c-0a799f41b8c2",
            name: "The Grill Room",
            address: "260 Herbert Macaulay Way, Yaba",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["Steakhouse"],
            geometry: { lat: 6.510729, lng: 3.368386 },
          },
          {
            id: "e149c73e-d760-4001-83c0-6839c7b691f1",
            name: "Zuma",
            address: "106A Akin Adesola Street, Victoria Island",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["Japanese"],
            geometry: { lat: 6.464024, lng: 3.383886 },
          },
          {
            id: "e3dfb478-3c76-4e46-b058-40d693e1154c",
            name: "Nikki's Restaurant",
            address: "173 Herbert Macaulay Way, Yaba",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["Caribbean"],
            geometry: { lat: 6.510458, lng: 3.368297 },
          },
          {
            id: "6adc3703-d6d3-4ae4-b099-08a14f10995a",
            name: "The Vedge",
            address: "Plot 7, Block 11, Admiralty Way, Lekki Phase 1",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["Vegan"],
            geometry: { lat: 6.419554, lng: 3.443127 },
          },
          {
            id: "42fe9cf4-89df-4429-b7ad-e691ee47df45",
            name: "Mainland Sandwiches",
            address: "148A Broad Street, Lagos",
            image:
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Ikoyi_BBQ_logo.svg/1200px-Ikoyi_BBQ_logo.svg.png",
            rating: 4.3,
            price: "$$$$",
            categories: ["Sandwiches"],
            geometry: { lat: 6.465577, lng: 3.406134 },
          },
        ],
      },
    ];

    const results = restaurants.reduce((accumlate, currentValue) => {
      return accumlate === currentValue.place ? currentValue : "N/A";
    }, query[0]);
    return results;
  },
};

export const MockImages = [
  "https://www.foodiesfeed.com/wp-content/uploads/2021/01/fried-egg-and-guacamole-sandwiches.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2023/04/cheeseburger.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2019/06/top-view-for-box-of-2-burgers-home-made.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2023/05/freshly-prepared-beef-steak-with-vegetables.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2023/06/cappuccino-croissant.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2023/03/heavenly-looking-croissant-detail.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2023/06/vegan-curry-with-fresh-herbs.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2023/07/fresh-fruit-platter.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2023/06/piles-of-pancake-with-honey.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2023/06/cake-with-macarons-on-top.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2023/06/ice-cream-splash.jpg",
  "https://www.foodiesfeed.com/wp-content/uploads/2023/06/french-pastry-with-berries.jpg",
];
