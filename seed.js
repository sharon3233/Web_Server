const {sequelize} = require('./db')
const {Restaurant, Menu, Item} = require('./models/index') //Q: WHY import these models from index vs. from each separate model file?

//Q: Why do you think each object inside of the arrays are structured the way that they are?
//Q: What do you think will happen when we 'seed' this file?
const seedRestaurant = [
  {
    name: 'Rosas',
    location: 'Texas',
    cuisine: 'Mexian'
  },
  {
    name: 'Madeas',
    location: 'Everman,Tx',
    cuisine: 'American'
  },
  {
    name: 'Sake Hibachi Sushi',
    location: 'Arlington,Tx',
    cuisine: 'Japanese'
  },
  {
    name: 'burgetking',
    location: 'Dallas',
    cuisine: 'Hotpot'
  },
  {
    name: 'MCDS',
    location: 'Dallas',
    cuisine: 'Hotpot'
  },
]
const seedMenu = [
  {
    title: 'Breakfast',
    RestaurantId : 1,
  },
  {
    title: 'Lunch',
    RestaurantId : 2,
  },
  {
    title: 'Dinner',
    RestaurantId : 3,
  },
]
const seedItem = [
  {
    name: 'chicken fried chicken',
    image: 'someimage.jpg',
    price: 13.50,
    vegetarian: false,
    MenuId : 3,
  },
  {
    name: 'Ceasar Chicken Wrap',
    image: 'someimage.jpg',
    price: 9.50,
    vegetarian: false,
    MenuId : 2,
  },
  {
    name: 'Eggless French Toast',
    image: 'someimage.jpg',
    price: 4.50,
    vegetarian: true,
    MenuId : 1,
  }
]


//Q: Try to decifer the following function.
//Q: Why are we using async and await?
const seed = async () => {
  try {
    await sequelize.sync({force: true})
    await Restaurant.bulkCreate(seedRestaurant, {validate: true})
    await Menu.bulkCreate(seedMenu, {validate: true})
    await Item.bulkCreate(seedItem, {validate: true})
    console.log('Seeding success!')
    sequelize.close()
  } catch (error) {
    console.log('SOMETHING WENT WRONG WITH THE SEEDING: ', error)
  }
}

//Q: What is seed() returning?
seed()
    .then(() => {
      console.log('Seeding success!')
    })
    .catch(err => {
      console.error('Oh NO! Something went wrong!')
      console.error(err)
    })

