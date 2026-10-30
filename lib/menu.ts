export type Category = "wraps" | "shakes" | "waffles"

export interface MenuItem {
  id: string
  name: string
  category: Category
  description: string
  protein: number
  kcal: number
  price: number
  // What the protein comes from, shown as a tag on the card
  source: "Chicken" | "Paneer" | "Plant-based" | "Whey" | "Egg" | "Protein batter"
  image: string
}

export const categories: { id: Category; name: string; blurb: string; image: string }[] = [
  {
    id: "wraps",
    name: "Power Wraps",
    blurb: "Grilled chicken, paneer or tofu with crisp veggies in a whole-wheat wrap",
    image: "/protein-wrap-with-grilled-chicken-and-fresh-vegeta.jpg",
  },
  {
    id: "shakes",
    name: "Fuel Shakes",
    blurb: "Whey or plant protein blended with fresh fruit, no added sugar syrups",
    image: "/protein-shake-with-berries-and-banana.jpg",
  },
  {
    id: "waffles",
    name: "Protein Waffles",
    blurb: "High-protein batter, sweet or savoury toppings, made to order",
    image: "/protein-waffles-with-berries-and-syrup.jpg",
  },
]

export const menu: MenuItem[] = [
  {
    id: "chicken-power-wrap",
    name: "Chicken Power Wrap",
    category: "wraps",
    description: "Grilled chicken breast, mixed greens, tomato, cucumber, protein mayo",
    protein: 40,
    kcal: 450,
    price: 220,
    source: "Chicken",
    image: "/chicken-wrap.jpg",
  },
  {
    id: "paneer-tikka-wrap",
    name: "Paneer Tikka Wrap",
    category: "wraps",
    description: "Tandoori paneer, bell peppers, onions, mint chutney",
    protein: 35,
    kcal: 420,
    price: 200,
    source: "Paneer",
    image: "/paneer-tikka-wrap-with-vegetables.jpg",
  },
  {
    id: "tofu-delight-wrap",
    name: "Tofu Delight Wrap",
    category: "wraps",
    description: "Marinated tofu, avocado, sprouts, hummus, multigrain wrap",
    protein: 32,
    kcal: 380,
    price: 180,
    source: "Plant-based",
    image: "/tofu-wrap-with-vegetables.jpg",
  },
  {
    id: "chocolate-fuel",
    name: "Chocolate Fuel",
    category: "shakes",
    description: "Whey protein, banana, cocoa, almond milk, dates",
    protein: 30,
    kcal: 320,
    price: 180,
    source: "Whey",
    image: "/chocolate-protein-shake.jpg",
  },
  {
    id: "berry-blast",
    name: "Berry Blast",
    category: "shakes",
    description: "Mixed berries, whey protein, Greek yogurt, honey",
    protein: 28,
    kcal: 290,
    price: 170,
    source: "Whey",
    image: "/berry-protein-shake.jpg",
  },
  {
    id: "green-machine",
    name: "Green Machine",
    category: "shakes",
    description: "Spinach, pea protein, mango, chia seeds, coconut water",
    protein: 25,
    kcal: 260,
    price: 150,
    source: "Plant-based",
    image: "/green-protein-smoothie.jpg",
  },
  {
    id: "classic-berry-waffle",
    name: "Classic Berry Waffle",
    category: "waffles",
    description: "Protein waffle, Greek yogurt, mixed berries, honey drizzle",
    protein: 25,
    kcal: 350,
    price: 170,
    source: "Protein batter",
    image: "/protein-waffle-with-berries.jpg",
  },
  {
    id: "chocolate-dream",
    name: "Chocolate Dream",
    category: "waffles",
    description: "Chocolate protein waffle, peanut butter, banana slices",
    protein: 27,
    kcal: 380,
    price: 160,
    source: "Protein batter",
    image: "/chocolate-protein-waffle.jpg",
  },
  {
    id: "savory-special",
    name: "Savory Special",
    category: "waffles",
    description: "Protein waffle, scrambled eggs, avocado, cherry tomatoes",
    protein: 28,
    kcal: 340,
    price: 140,
    source: "Egg",
    image: "/savory-protein-waffle.jpg",
  },
]

export const itemById = (id: string) => {
  const item = menu.find((m) => m.id === id)
  if (!item) throw new Error(`Unknown menu item ${id}`)
  return item
}

export const itemsIn = (category: Category) => menu.filter((m) => m.category === category)

// "12–40" style range for a list of numbers
export const range = (values: number[]) => {
  const min = Math.min(...values)
  const max = Math.max(...values)
  return min === max ? `${min}` : `${min}–${max}`
}

// Grams of protein you get for every ₹100 spent
export const proteinPer100 = (protein: number, price: number) => Math.round((protein / price) * 1000) / 10

export const formatINR = (amount: number) => `₹${amount.toLocaleString("en-IN")}`
