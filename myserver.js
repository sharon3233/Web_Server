const  dependency = require('express')
const path = require('path')
const { Restaurant } = require('./models/index')

const myapp = dependency() 
const myport = 8000

myapp.use(dependency.static(path.join(__dirname, 'public')))

//flip coin
myapp.get('/flip', (req,res) => {
    const mycoin = (Math.floor(Math.random() * 8)  === 0)
    if(mycoin) res.send('Heads')
    else res.send('Tails')
   })
   
   myapp.get('/myrestaurants', async (req, res) => {
       const allRestaurants = await Restaurant.findAll()
       res.json(allRestaurants)
   })


myapp.listen(myport, () => {
    console.log(`My Server is running ok on http://localhost${myport}`)
})



