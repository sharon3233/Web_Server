const  dependency = require('express')
const path = require('path')
const { Restaurant, Menu, Item } = require('./models/index')




const myapp = dependency() 
const myport = 8000

 myapp.use(dependency.json())
 myapp.use(dependency.static(path.join(__dirname, 'public')))

//flip coin
myapp.get('/flip', (req,res) => {
    const mycoin = (Math.floor(Math.random() * 8)  === 0)
    if(mycoin) res.send('Heads')
    else res.send('Tails')
   })
   
myapp.get('/restaurants', async (req, res) => {
       const allRestaurants = await Restaurant.findAll()
       res.json(allRestaurants)
   })

myapp.get('/restaurant/:id', async (req, res) => {
	const restaurant = await Restaurant.findByPk(req.params.id, {include : Menu});
	res.json({ restaurant })
})

myapp.get('/menu', async (req, res) => {
    const allMenus = await Menu.findAll()
    res.json(allMenus)
})

myapp.get('/menu/:id', async (req, res) => {
	const menu = await Menu.findByPk(req.params.id, {include : Restaurant});
	res.json({ menu })
})
// testing 
myapp.get('/:chicken', (req, res) => {
	res.send(`I Love barbeque ${req.params.chicken} YUM !!!!`);
})
// Create Restaurant
myapp.post('/restaurant', async (req, res) => {
    let newRestaurant = await Restaurant.create(req.body)
    res.status(200).send('New Restaurant Created!')

})
// Delete Restaurant 
myapp.delete('/restaurant/:id', async (req, res) => {
	await Restaurant.destroy({
		where : {id : req.params.id} 
	})
	res.status(200).send("Deleted a Restaurant")
})

// Update my Restaurants
myapp.put("/restaurant/:id", async (req, res) => {
	let update = await Restaurant.update(req.body, {
		where : {id : req.params.id} 
	})
	res.status(200).send("Updated my Restaurant")
})




myapp.listen(myport, () => {
    console.log(`My Server is running ok on http://localhost${myport}`)
})

//******COULD NOT GET IT TO WORK********** */
//async function seed(){
//	await sequelize.sync({ force: true });

	// const madeas = await Menu.create({title : 'Madeas Menus'})
	// const dinner = await Item.create({name : 'Chicken fried Chicken', image : 'picture', price : 13.50, vegetarian : false})

	// const hibachi = await Menu.create({ title : 'Hibachi Lunch and Dinner Specials'})
	// const lunch = await Item.create({ name : 'Ninja', image : 'picture', price : 33.79, vegetarian : false})


	// await madeas.addItem(dinner);
	

	// await hibachi.addItem(lunch);


	// console.log("db seeded!!")

// }



