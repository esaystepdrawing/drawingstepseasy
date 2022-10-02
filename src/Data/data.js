/**src/Data/data.js**/
const HEADER = "DrawingStepsEasy";

const NAVBAR_DATA = [
  { id: 1, url: "/", label: "Home" },
  { id: 2, url: "#drawings", label: "Drawings" },
  { id: 3, url: "#about-us", label: "About us" },
  { id: 4, url: "#testimonials", label: "Testimonials" },
  { id: 5, url: "#footer", label: "Contacts" }
];
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
    EMAIL: "info@easystepdrawing.com"
  },
  SUBSCRIBE_NEWSLETTER: "Subscribe newsletter",
  SUBSCRIBE: "Subscribe"
};

const MOCK_DATA = {
  HEADER,
  NAVBAR_DATA,
  BANNER_DATA,
  SERVICE_DATA,
  ABOUT_DATA,
  TESTIMONIAL_DATA,
  SOCIAL_DATA,
  FOOTER_DATA
};
export default MOCK_DATA;