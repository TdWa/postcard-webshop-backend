"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "products",
      [
        {
          name: "happy birthday - vehicles",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-15-om-11.37.08-723x1024.png",
          price: 1.5,
          popularity: 220,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "wedding-mermaids",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-13-om-13.17.52-723x1024.png",
          price: 1.5,
          popularity: 50,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "baby-boy",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.08.32-726x1024.png",
          price: 1.5,
          popularity: 101,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "baby-girl",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/03/Schermafbeelding-2019-03-09-om-21.20.32-727x1024.png",
          price: 1.5,
          popularity: 100,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "christmas-tree",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/09/Schermafbeelding-2019-09-11-om-15.06.05-728x1024.png",
          price: 1.5,
          popularity: 500,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "stroller",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/0000-18735.jpg",
          price: 1.75,
          popularity: 160,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "carriage",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.37.00-1024x683.png",
          price: 1.75,
          popularity: 90,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "baby delivery",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.37.17-1024x722.png",
          price: 1.75,
          popularity: 95,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "have a cool birthday",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.42.56-736x1024.png",
          price: 1.5,
          popularity: 115,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "birthday fox",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/0001-11840.jpg",
          price: 1.5,
          popularity: 165,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "birthday pineapple",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/0001-11841.jpg",
          price: 1.5,
          popularity: 165,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "celestial birthday",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.40.18-732x1024.png",
          price: 1.5,
          popularity: 175,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "dinner party",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.48.08-731x1024.png",
          price: 1.5,
          popularity: 175,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "birthday music",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.54.44-1024x731.png",
          price: 1.75,
          popularity: 211,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "birthday queen",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.43.18-732x1024.png",
          price: 1.5,
          popularity: 222,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "happy-birthday-elephants-pink",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-13-om-13.18.15-1024x729.png",
          price: 1.75,
          popularity: 78,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "happy-birthday-elephants-blue",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-19-om-14.02.09-1024x724.png",
          price: 1.75,
          popularity: 60,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "smile bitch",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.51.13-730x1024.png",
          price: 1.5,
          popularity: 79,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "vegan vibes",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.43.43-731x1024.png",
          price: 1.5,
          popularity: 49,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "coffee stand",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/0000-18736.jpg",
          price: 1.75,
          popularity: 88,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Utrecht skyline",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/0000-18713.jpg",
          price: 2.0,
          popularity: 411,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "flowers on table",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/0000-18730.jpg",
          price: 1.5,
          popularity: 111,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "lots of luck",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/0000-18725.jpg",
          price: 1.5,
          popularity: 290,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "good luck",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.45.19-732x1024.png",
          price: 1.5,
          popularity: 290,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "you are beautiful",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.44.20-1024x731.png",
          price: 1.5,
          popularity: 190,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "bon voyage",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.46.08-733x1024.png",
          price: 1.5,
          popularity: 99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "oops sorry",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.44.54-733x1024.png",
          price: 1.5,
          popularity: 99,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "get well soon",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.54.06-731x1024.png",
          price: 1.5,
          popularity: 233,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "who run the world?",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.55.31.png",
          price: 1.5,
          popularity: 150,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "hug",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.46.33-1024x731.png",
          price: 1.75,
          popularity: 289,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "tree house",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.50.33-732x1024.png",
          price: 1.5,
          popularity: 289,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "girl power",
          description:
            "Some extra info about this card.. maybe an object with stuff like the size, kind of paper, etc, etc",
          url:
            "http://jiskadewaard.com/wp-content/uploads/2019/02/Schermafbeelding-2019-02-27-om-12.49.20-730x1024.png",
          price: 1.5,
          popularity: 600,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("products", null, {});
  },
};
