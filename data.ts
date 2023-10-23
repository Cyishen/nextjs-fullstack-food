type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  
  export const pizzas: Products = [
    {
      id: 1,
      title: "捲捲德腸烤牛堡",
      desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
      img: "/burgers/b1.png",
      price: 24.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
      ],
    },
    {
      id: 2,
      title: "香酥鮭魚堡",
      desc: "Embark on a culinary journey with this Mediterranean-inspired creation, featuring zesty feta cheese, Kalamata olives, sun-dried tomatoes, and a sprinkle of oregano.",
      img: "/burgers/b2.png",
      price: 32.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
      ],
    },
    {
      id: 3,
      title: "香酥鮭魚烤牛堡",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/burgers/b3.png",
      price: 26.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
      ],
    },
    {
      id: 4,
      title: "香酥鮭魚海老堡",
      desc: "A classic Italian delight featuring a thin, crispy crust, tangy tomato sauce, fresh mozzarella, and a medley of aromatic herbs topped with lettuce, tomatoes, and a dollop of tangy mayo.",
      img: "/burgers/b4.png",
      price: 28.9,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
      ],
    },
  ];
  
  export const singleProduct: Product = {
    id: 1,
    title: "捲捲德腸烤牛堡",
    desc: "Ignite your taste buds with a fiery combination of spicy pepperoni, jalapeños, crushed red pepper flakes, and melted mozzarella cheese, delivering a kick with every bite.",
    img: "/burgers/b1.png",
    price: 24.5,
    options: [
      {
        title: "單點",
        additionalPrice: 0,
      },
      {
        title: "套餐",
        additionalPrice: 4,
      },
    ],
  };
  
  type Combo = {
    id: number;
    title: string;
    title2: string;
    img?: string;
    img2?: string;
  }
  export const combo: Combo = {
    id: 1,
    title: "薯條",
    title2: "可樂",
    img: "/burgers/fries.png",
    img2: "/burgers/coca.png",
  }
  
  type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menu: Menu = [
    {
      id: 1,
      slug: "burgers",
      title: "Juicy Burgers",
      desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
      img: "/m2.png",
      color: "black",
    },
    {
      id: 2,
      slug: "pizzas",
      title: "Cheesy Pizzas",
      desc: "Pizza Paradise: Irresistible slices, mouthwatering toppings, and cheesy perfection.",
      img: "/m3.png",
      color: "white",
    },
  ];