export interface Category {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    // image_array: [string];
  }
export const categories = [
    {
        id: 1,
        name: "Phones and laptops",
        description: "There you can find phones and laptops which you are looking for",
        image: "https://i.pcmag.com/imagery/lineups/067nHL7x7FLjB28RuLvKFzS-1..v1569470817.jpg"
    },
    {
      id: 3,
      name: "Medicine",
      description: "What your health need",
      image: "https://wwwnc.cdc.gov/travel/images/travel-with-medicine.jpg"
    },
    {
      id: 4,
      name: "Construction Materials",
      description: "Materials for your building",
      image: "https://www.structuralguide.com/wp-content/uploads/2022/01/Construction-Materials.jpg"
    },
    {
      id: 2,
      name: "Food",
      description: "What you want",
      image: "https://www.budgetbytes.com/wp-content/uploads/2023/01/Ranch-Chicken-Meal-Prep-lined-up.jpg"
    },
  
  ];