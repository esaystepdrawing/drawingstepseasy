/**src/Data/data.js**/
const HEADER = "DrawingStepsEasy";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#drawings", label: "Drawings" },
  { id: 3, url: "#about-us", label: "About us" },
  { id: 4, url: "#testimonials", label: "Testimonials" },
  { id: 5, url: "#footer", label: "Contacts" }
];

const CATEGORY_DATA = {
  HEADING: "Step By Step easy Drawing by Category",
  ALLCAT: [
    {
      id:1, 
      name:"Animal", 
      image: "images/category/animal.jpg", 
      url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=animal"
    },
    {
      id:2, 
      name:"Baby", 
      image: "images/category/baby.jpg",
      url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=baby"
    },
    {
      id:3, 
      name:"Beach", 
      image: "images/category/beach.jpg",
      url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=beach"
    },
    {
      id:4, 
      name:"Building", 
      image: "images/category/buildings.jpg",
      url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=building"
    },
    {id:5, name:"Carnival", 
    image: "images/category/carnival.jpg",
      url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=carnival"
    },
    {id:6, name:"Character", image: "images/category/characters.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=character"},
    {id:7, name:"Chritsmas", image: "images/category/christmas.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=christmas"},
    {id:8, name:"Holiday", image: "images/category/holiday.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=holiday"},
    {id:9, name:"Farm", image: "images/category/farmer.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=farmer"},
    {id:10, name:"Medical", image: "images/category/firstaid.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=firstaid"},
    {id:11, name:"Food", image: "images/category/food.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=food"},
    {id:12, name:"Furniture", image: "images/category/furniture.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=furniture"},
    {id:13, name:"Gadget", image: "images/category/gadget.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=gadget"},
    {id:14, name:"Halloween", image: "images/category/halloween.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=halloween"},
    {id:15, name:"Instrument", image: "images/category/instruments.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=instruments"},
    {id:16, name:"Monument", image: "images/category/monument.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=monument"},
    {id:17, name:"Nature", image: "images/category/nature.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=nature"},
    {id:18, name:"Party", image: "images/category/party.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=party"},
    {id:19, name:"Random", image: "images/category/random.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=random"},
    {id:20, name:"School Supplies", image: "images/category/school.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=school"},
    {id:21, name:"Space", image: "images/category/space.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=space"},
    {id:22, name:"Sport", image: "images/category/sports.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=sport"},
    {id:23, name:"St. Patrick Day", image: "images/category/st.patrick.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=st.patrick"},
    {id:24, name:"Tool", image: "images/category/tools.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=tool"},
    {id:25, name:"Toy", image: "images/category/toy.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=toy"},
    {id:26, name:"Valentine", image: "images/category/valentine.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=valentine"},
    {id:27, name:"Vehicle", image: "images/category/vehicle.jpg",
    url: "https://www.easystepdrawing.com/categorydetail.html?easystepdrawing=vehicle"}
  ]
};

const BANNER_DATA = {
  HEADING: "Drawing with Family and have fun. Drawing made simple following Steps Easy",
  DECRIPTION:
    "Drawing Steps Easy is a family fun activity website; encouraging all ages to draw and share.",
  TUTORIAL_URL:
    "https://www.youtube.com/channel/UCBugY7Y3eYsOZPVnZTys9aw/videos",
  WATCH_TUTORIAL: "Watch Tutorials"
};
const SERVICE_DATA = {
  HEADING: "Easy Step Drawing Category",
  ALL_SERVICES: "Click to see All Drawings",
  SERVICE_LIST: [
    {
      LABEL: "Halloween Drawings",
      DESCRIPTION:
        "Hand drawn Halloween traditional symbols. Doodle style illustrations, carved pumpkin, spider webs, witch on a broom, bat, zombie hands, skulls, grim reaper, magic potion pot.",
      URL: "images/service1.png"
    },
    {
      LABEL: "Christmas Drawings",
      DESCRIPTION:
        "Easy Christmas Drawings. Easy Christmas drawings for kids can be achieved in any of the simple drawing list.",
      URL: "images/service2.png"
    },
    {
      LABEL: "Character Drawings",
      DESCRIPTION:
        "Hand drawn cartoon character for kids to follow along and can be done using paper and pencil. Family Fun drawing",
      URL: "images/service3.png"
    },
    {
      LABEL: "Animal Drawings",
      DESCRIPTION:
        "Hand drawn Halloween traditional symbols. Doodle style illustrations, carved pumpkin, spider webs, witch on a broom, bat, zombie hands, skulls, grim reaper, magic potion pot.",
      URL: "images/service1.png"
    },
    {
      LABEL: "Holiday Drawings",
      DESCRIPTION:
        "Easy Christmas Drawings. Easy Christmas drawings for kids can be achieved in any of the simple drawing list.",
      URL: "images/service2.png"
    },
    {
      LABEL: "Gadgets Drawings",
      DESCRIPTION:
        "Hand drawn cartoon character for kids to follow along and can be done using paper and pencil. Family Fun drawing",
      URL: "images/service3.png"
    }
  ]
};

const ABOUT_DATA = {
  HEADING: "Why choose us?",
  TITLE: "Why we're different",
  IMAGE_URL: "images/network.png",
  WHY_CHOOSE_US_LIST: [
   "DrawingStepsEasy is a family fun event",
   "Every age can draw and show case their art",
   "Drawing helps people feel more productive and fills us with positive feelings of others",
   "Helps and improves 'Visualization'",
   "Help and improves 'Coordination'",
   "Boosts creative thinking.",
   "Enhances Observation. People like drawing because it teaches them to rewire their thinking"
  ]
};
const TESTIMONIAL_DATA = {
  HEADING: "What clients say?",
  TESTIMONIAL_LIST: [
    {
      DESCRIPTION:
        "Drawings are simple and clear. Hand drawn drawings gives the feel of how it would look. Kids do not have to worry about straight line; it is easy to follow along. Complex drawings are made simple and easy to follow.",
      IMAGE_URL: "images/user1.jpg",
      NAME: "Julia hawkins",
      DESIGNATION: "Elementary School Teacher"
    },
    {
      DESCRIPTION:
        "Very impressive drawings and easy to follow along. There are many categories to pick and draw. I use it at school for kids to follow along and draw. Helps bring attention and kids enjoying choosing the category they best like and draw. It is a fun filled class when all heads are down drawing and following easy step",
      IMAGE_URL: "images/user2.jpg",
      NAME: "John Smith",
      DESIGNATION: "Elementary School Teacher"
    }
  ]
};

const SOCIAL_DATA = {
  HEADING: "Find us on social media",
  IMAGES_LIST: [
    "images/facebook-icon.png",
    "images/instagram-icon.png",
    "images/whatsapp-icon.png",
    "images/twitter-icon.png",
    "images/linkedin-icon.png",
    "images/snapchat-icon.png"
  ]
};

const FOOTER_DATA = {
  DESCRIPTION:
    "We are typically focused on making complex drawings into easy step. Allowing kids to follow along and ensure they love the platform.",
  CONTACT_DETAILS: {
    HEADING: "Contact us",
    ADDRESS: "Franklin, WI 53132",
    MOBILE: "We prefer email",
    EMAIL: "info@drawingstepseasy.com"
  },
  SUBSCRIBE_SOCIAL: "Subscribe Social Channel",
  SUBSCRIBE: "YouTube",
  SUBSCRIBE_YTUBE: "https://www.youtube.com/channel/UCBugY7Y3eYsOZPVnZTys9aw",
  SUBSCRIBE_TIKTOK: "TikTok",
  SUBSCRIBE_TIKTUBE: "https://www.tiktok.com/@easystepdrawing?lang=en"
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  TESTIMONIAL_DATA,
  SOCIAL_DATA,
  FOOTER_DATA,
  CATEGORY_DATA
};
export default MOCK_DATA;