export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    link: string;
    // image_array: [string];
  }
  
  export const products = [
    {
      id: 1,
      name: 'Google Pixel XL',
      price: 399,
      description: 'A large phone with one of the best screens',
      image: 'https://www.kickmobiles.com/images/thumbs/0013491_google-pixel-1-xl_808.jpeg',
      link: 'https://kaspi.kz/shop/p/google-pixel-3-xl-128gb-chernyi-1004484/?c=750000000#!/item'
      
    },
    {
      id: 2,
      name: 'IPhone Mini',
      price: 699,
      description: 'Mini Iphone form with the same design',
      image: 'https://www.mechta.kz/images/product/12590/30000001322_1-286.webp',
      link: "https://kaspi.kz/shop/p/apple-iphone-12-mini-64gb-chernyi-100657220/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorisLxHQEAUyjLW9UenLT7SlC1k62921F2wLcxswWRTfO6XDmtI8l9sRoCN2IQAvD_BwE#!/item"
    },
    {
      id: 3,
      name: 'Macbook air 13',
      price: 499,
      description: 'One of the stablest laptops',
      image: 'https://m.media-amazon.com/images/I/61Ehhzc9o5L.jpg',
      link: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000#!/item"
    },
    {
      id: 4,
      name: 'Samsung s22',
      price: 799,
      description: 'The best phone of Samsung',
      image: 'https://fora.kz/images/content/products/627528/samsung-galaxy-s22-256-gb-sm-s901bzggskz-green_6204aecb9ed08.jpg',
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorisLxHQEAUyjLW9UenLT7SlC1k62921F2wLcxswWRTfO6XDmtI8l9sRoCN2IQAvD_BwE#!/item"
    },
    {
      id: 5,
      name: 'Xiaomi Redmi 8',
      price: 299,
      description: 'From Redmi series',
      image: 'https://fdn2.mobgsm.com/vv/pics/xiaomi/xiaomi-redmi-8-3.jpg',
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-8-3-gb-32-gb-chernyi-1005266/?c=750000000#!/item"
    },
    {
      id: 6,
      name: 'Samsung Galaxy A52',
      price: 499,
      description: 'Samsung in cheap price',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5a/hdf/49171850625054/samsung-galaxy-a52-4-128gb-cernyj-101198176-2-Container.jpg',
      link: "https://kaspi.kz/shop/p/samsung-galaxy-a52-4-gb-128-gb-chernyi-101198176/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_samsung_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToriiOZFY5FaMeF139qpQdhlL7vfYBC2v-ff61iaY_Uhy4q4gmPHXTxKBoCtCEQAvD_BwE#!/item"
    },
    {
      id: 7,
      name: 'Xiaomi Redmi 10A',
      price: 299,
      description: 'Redmi series',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/h81/52289124499486/xiaomi-redmi-10a-3-gb-64-gb-seryi-grafit-105711712-1.jpg',
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-10a-3-gb-64-gb-seryi-grafit-105711712/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_samsung_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToriiOZFY5FaMeF139qpQdhlL7vfYBC2v-ff61iaY_Uhy4q4gmPHXTxKBoCtCEQAvD_BwE#!/item"
    },
    {
      id: 8,
      name: 'ASUS TUF Gaming A15',
      price: 599,
      description: 'The gaming laptop',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
      link: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_samsung_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToriiOZFY5FaMeF139qpQdhlL7vfYBC2v-ff61iaY_Uhy4q4gmPHXTxKBoCtCEQAvD_BwE#!/item"
    },
    {
      id: 9,
      name: 'Acer Nitro 5 AN515-45',
      price: 649,
      description: 'The gaming laptop',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h65/66626494398494/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784-1.jpg',
      link: "https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_samsung_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToriiOZFY5FaMeF139qpQdhlL7vfYBC2v-ff61iaY_Uhy4q4gmPHXTxKBoCtCEQAvD_BwE#!/item"
    },
    {
      id: 10,
      name: 'Legion 5 Pro',
      price: 849,
      description: 'The gaming laptop',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/h32/62832992092190/lenovo-legion-5-pro-16ach6h-82jq010crk-seryj-106652334-1.jpg',
      link: "https://kaspi.kz/shop/p/lenovo-legion-5-pro-16ach6h-82jq010crk-seryi-106652334/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_samsung_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToriiOZFY5FaMeF139qpQdhlL7vfYBC2v-ff61iaY_Uhy4q4gmPHXTxKBoCtCEQAvD_BwE#!/item"
    }
    

  ];
  
