export interface Product {
    category_id: number;
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    link: string;
    like: number;
    appear: boolean;
    // image_array: [string];
  }
  export const products = [
    {
      category_id: 1,
      id: 1,
      name: 'Google Pixel XL',
      price: 399,
      description: 'A large phone with one of the best screens',
      image: 'https://www.kickmobiles.com/images/thumbs/0013491_google-pixel-1-xl_808.jpeg',
      link: 'https://kaspi.kz/shop/p/google-pixel-3-xl-128gb-chernyi-1004484/?c=750000000#!/item',
      like: 0,
      appear: true
      
    },
    {
      category_id: 1,
      id: 2,
      name: 'IPhone Mini',
      price: 699,
      description: 'Mini Iphone form with the same design',
      image: 'https://www.mechta.kz/images/product/12590/30000001322_1-286.webp',
      link: "https://kaspi.kz/shop/p/apple-iphone-12-mini-64gb-chernyi-100657220/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorisLxHQEAUyjLW9UenLT7SlC1k62921F2wLcxswWRTfO6XDmtI8l9sRoCN2IQAvD_BwE#!/item",
      like: 0,
      appear: true
    },
    {
      id: 3,
      name: 'Macbook air 13',
      price: 499,
      description: 'One of the stablest laptops',
      image: 'https://m.media-amazon.com/images/I/61Ehhzc9o5L.jpg',
      link: "https://kaspi.kz/shop/p/apple-macbook-air-13-mgn93-serebristyi-100798912/?c=750000000#!/item",
      category_id: 1,
      like: 0,
      appear: true
    },
    {
      id: 4,
      name: 'Samsung s22',
      price: 799,
      description: 'The best phone of Samsung',
      image: 'https://fora.kz/images/content/products/627528/samsung-galaxy-s22-256-gb-sm-s901bzggskz-green_6204aecb9ed08.jpg',
      link: "https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_apple_desktop&gclid=CjwKCAiAl9efBhAkEiwA4TorisLxHQEAUyjLW9UenLT7SlC1k62921F2wLcxswWRTfO6XDmtI8l9sRoCN2IQAvD_BwE#!/item",
      category_id: 1,
      like: 0,
      appear: true
    },
    {
      id: 5,
      name: 'Xiaomi Redmi 8',
      price: 299,
      description: 'From Redmi series',
      image: 'https://fdn2.mobgsm.com/vv/pics/xiaomi/xiaomi-redmi-8-3.jpg',
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-8-3-gb-32-gb-chernyi-1005266/?c=750000000#!/item",
      category_id: 1,
      like: 0,
      appear: true
    },
    {
      id: 6,
      name: 'Samsung Galaxy A52',
      price: 499,
      description: 'Samsung in cheap price',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5a/hdf/49171850625054/samsung-galaxy-a52-4-128gb-cernyj-101198176-2-Container.jpg',
      link: "https://kaspi.kz/shop/p/samsung-galaxy-a52-4-gb-128-gb-chernyi-101198176/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_samsung_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToriiOZFY5FaMeF139qpQdhlL7vfYBC2v-ff61iaY_Uhy4q4gmPHXTxKBoCtCEQAvD_BwE#!/item",
      category_id: 1,
      like: 0,
      appear: true
    },
    {
      id: 7,
      name: 'Xiaomi Redmi 10A',
      price: 299,
      description: 'Redmi series',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/haf/h81/52289124499486/xiaomi-redmi-10a-3-gb-64-gb-seryi-grafit-105711712-1.jpg',
      link: "https://kaspi.kz/shop/p/xiaomi-redmi-10a-3-gb-64-gb-seryi-grafit-105711712/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_samsung_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToriiOZFY5FaMeF139qpQdhlL7vfYBC2v-ff61iaY_Uhy4q4gmPHXTxKBoCtCEQAvD_BwE#!/item",
      category_id: 1,
      like: 0,
      appear: true
    },
    {
      id: 8,
      name: 'ASUS TUF Gaming A15',
      price: 599,
      description: 'The gaming laptop',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6b/h33/62100002701342/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-cernyj-106255184-1.jpg',
      link: "https://kaspi.kz/shop/p/asus-tuf-gaming-a15-fa506ihrb-hn084-90nr07g7-m008c0-chernyi-106255184/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_samsung_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToriiOZFY5FaMeF139qpQdhlL7vfYBC2v-ff61iaY_Uhy4q4gmPHXTxKBoCtCEQAvD_BwE#!/item",
      category_id: 1,
      like: 0,
      appear: true
    },
    {
      id: 9,
      name: 'Acer Nitro 5 AN515-45',
      price: 649,
      description: 'The gaming laptop',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h7b/h65/66626494398494/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784-1.jpg',
      link: "https://kaspi.kz/shop/p/acer-nitro-5-an515-45-nh-qb9er-004-chernyi-107535784/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_samsung_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToriiOZFY5FaMeF139qpQdhlL7vfYBC2v-ff61iaY_Uhy4q4gmPHXTxKBoCtCEQAvD_BwE#!/item",
      category_id: 1,
      like: 0,
      appear: true
    },
    {
      id: 10,
      name: 'Legion 5 Pro',
      price: 849,
      description: 'The gaming laptop',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hab/h32/62832992092190/lenovo-legion-5-pro-16ach6h-82jq010crk-seryj-106652334-1.jpg',
      link: "https://kaspi.kz/shop/p/lenovo-legion-5-pro-16ach6h-82jq010crk-seryi-106652334/?c=750000000&utm_source=google&utm_medium=cpc&utm_campaign=shop_google_search_smartphones_samsung_desktop&gclid=CjwKCAiAl9efBhAkEiwA4ToriiOZFY5FaMeF139qpQdhlL7vfYBC2v-ff61iaY_Uhy4q4gmPHXTxKBoCtCEQAvD_BwE#!/item",
      category_id: 1,
      like: 0,
      appear: true
    },
    {
      id: 11,
      name: 'Baursaks',
      price: 1,
      description: 'just come and eat. It is made for pleasure and starving people',
      image: 'https://static.insales-cdn.com/images/products/1/1143/300893303/Баурсаки.jpg',
      link: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fgreenwich-shop.kz%2Fproduct%2Fbaursaki-1-kg&psig=AOvVaw1LTBcjxmTczMe1F3_jIExa&ust=1677687703076000&source=images&cd=vfe&ved=0CBEQjhxqFwoTCNjN--3PuP0CFQAAAAAdAAAAABAE",
      category_id: 2,
      like: 0,
      appear: true
    },
    {
      category_id: 2,
      id: 12,
      name: 'Салат морковь по-корейски',
      price: 1,
      description: 'Salat',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h73/hd9/66200937824286/magnum-morkov-po-koreiski-250-g-104747754-1.jpg',
      link: "https://kaspi.kz/shop/p/magnum-morkov-po-koreiski-250-g-104747754/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    {
      category_id: 2,
      id: 13,
      name: 'Самса с курицей',
      price: 1,
      description: 'Not ichpochmak',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h52/haf/62748633661470/magnum-samsa-s-kuricej-240-g-105144032-1.jpg',
      link: "https://kaspi.kz/shop/p/magnum-samsa-s-kuritsei-240-g-105144032/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    {
      category_id: 2,
      id: 14,
      name: 'Круассан с вареной сгущенкой ',
      price: 1,
      description: 'croissant',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/ha5/h4a/62749601431582/magnum-kruassan-s-varenoj-sgusenkoj-105-g-104976838-1.jpg',
      link: "https://kaspi.kz/shop/p/magnum-kruassan-s-varenoi-sguschenkoi-105-g-104976838/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    {
      category_id: 2,
      id: 15,
      name: 'Слойка с яблоком',
      price: 1,
      description: 'Sloyka',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h1f/h69/62187806916638/magnum-slojka-ablokom-100-g-106312804-1.jpg',
      link: "https://kaspi.kz/shop/p/magnum-sloika-s-jablokom-100-g-106312804/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    {
      category_id: 3,
      id: 16,
      name: 'Перекись Водорода-DF раствор 3%',
      price: 1,
      description: 'назначение: ссадины, ,мелкие порезы, ,лечебные процедуры',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb8/h3e/33957855133726/dosfarm-too-perekis-vodoroda-df-3-100-ml-101112037-1-Container.jpg',
      link: "https://kaspi.kz/shop/p/perekis-vodoroda-df-rastvor-3-100-ml-101112037/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    {
      category_id: 3,
      id: 17,
      name: 'Магне В6 Премиум таблетки',
      price: 12,
      description: 'назначение: общеукрепляющее',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hf9/he0/34346600202270/sanofi-magne-v6-premium-100-mg-60-101326865-1-Container.jpg',
      link: "https://kaspi.kz/shop/p/magne-v6-premium-tabletki-100-mg-60-sht-101326865/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    {
      category_id: 3,
      id: 18,
      name: 'Хлоргексидин биглюконат раствор ',
      price: 0.5,
      description: 'назначение: обработка ран',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h57/hed/52610786754590/hlorgeksidin-biglukonat-1-st-103489854-1.jpg',
      link: "https://kaspi.kz/shop/p/hlorgeksidin-bigljukonat-rastvor-0-05-mg-ml-100-ml-103489854/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    {
      category_id: 3,
      id: 19,
      name: 'Супрастин таблетки ',
      price: 5,
      description: 'назначение: аллергические реакции на укусы, ,аллергический конъюнктивит, ,аллергический ринит, ,атопический дерматит, ,крапивница, ,поллиноз',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h50/h43/33892912037918/egis-suprastin-25-mg-20-tabletok-101142377-1.jpg',
      link: "https://kaspi.kz/shop/p/suprastin-tabletki-25-mg-20-sht-101142377/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    {
      category_id: 3,
      id: 20,
      name: 'Валериана таблетки ',
      price: 0.5,
      description: 'назначение: проблемы со сном',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hcb/h50/63229903536158/borisovskij-zavod-medicin-valeriany-ekstrakt-20-mg-50-tabletok-100972313-1-Container.jpg',
      link: "https://kaspi.kz/shop/p/valeriana-tabletki-20-mg-50-sht-100972313/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    {
      category_id: 4,
      id: 21,
      name: 'Скотч прозрачный ',
      price: 2.5,
      description: 'вид: универсальная, клейкая основа: односторонняя',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/he3/h03/51725260455966/kz-shop-skotc-100002721s-250-m-105404389-1.jpg',
      link: "https://kaspi.kz/shop/p/skotch-prozrachnyi-48mm-250-m-105404389/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    {
      category_id: 4,
      id: 22,
      name: 'Клей Момент Кристалл',
      price: 2.5,
      description: 'материалы для склеивания: бетон, ,дерево, ,керамика',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hb6/h93/34346637885470/moment-kristall-30-ml-101355718-1-Container.jpg',
      link: "https://kaspi.kz/shop/p/moment-kristall-30-ml-101355718/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    {
      category_id: 4,
      id: 23,
      name: 'Клей TYTAN Classic Fix монтажный прозрачный',
      price: 6,
      description: 'материалы для склеивания: керамика, ,пластик, ,стекло',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hd5/hd2/34168885248030/tytan-classic-fix-montaznyj-prozracnyj-300-ml-101586357-1.jpg',
      link: "https://kaspi.kz/shop/p/tytan-classic-fix-montazhnyi-prozrachnyi-300-ml-101586357/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    {
      category_id: 4,
      id: 24,
      name: 'Finnblock пескоцементный полнотелый',
      price: 5.5,
      description: 'тип блока: пескоцементный, назначение: опорные, ,стеновые',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/hfc/ha1/47088733093918/finnblock-pramoj-m-200-600h350h200-102835901-1.jpg',
      link: "https://kaspi.kz/shop/p/finnblock-peskotsementnyi-polnotelyi-1-sht-102835901/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    {
      category_id: 4,
      id: 25,
      name: 'Тау Строй Газоблок автоклавный теплоблок ',
      price: 1.5,
      description: 'назначение: перегородочные',
      image: 'https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h30/h8f/50604208259102/tau-stroj-gazoblok-aceistyj-1-st-104774748-1.jpg',
      link: "https://kaspi.kz/shop/p/tau-stroi-gazoblok-avtoklavnyi-teploblok-600h250h100-1-sht-104774748/?c=750000000#!/item",
      like: 0,
      appear: true
    },
    // {
    //   category_id: ,
    //   id: 26,
    //   name: '',
    //   price: ,
    //   description: '',
    //   image: '',
    //   link: "",
    //   like: ,
    //   appear: true
    // },
    // {
    //   category_id: ,
    //   id: 27,
    //   name: '',
    //   price: ,
    //   description: '',
    //   image: '',
    //   link: "",
    //   like: ,
    //   appear: true
    // },
    // {
    //   category_id: ,
    //   id: 28,
    //   name: '',
    //   price: ,
    //   description: '',
    //   image: '',
    //   link: "",
    //   like: ,
    //   appear: true
    // },
    // {
    //   category_id: ,
    //   id: 29,
    //   name: '',
    //   price: ,
    //   description: '',
    //   image: '',
    //   link: "",
    //   like: ,
    //   appear: true
    // },
    // {
    //   category_id: ,
    //   id: 30,
    //   name: '',
    //   price: ,
    //   description: '',
    //   image: '',
    //   link: "",
    //   like: ,
    //   appear: true
    // },
    // {
    //   category_id: ,
    //   id: 31,
    //   name: '',
    //   price: ,
    //   description: '',
    //   image: '',
    //   link: "",
    //   like: ,
    //   appear: true
    // },
    // {
    //   category_id: ,
    //   id: 32,
    //   name: '',
    //   price: ,
    //   description: '',
    //   image: '',
    //   link: "",
    //   like: ,
    //   appear: true
    // },


    
    

  ];
  
