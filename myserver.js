const  dependency = require('express')

const myapp = dependency() 
const myport = 8000

myapp.use(dependency.static('../public'))

myapp.listen(myport, () => {
    console.log(`My Server is running ok on http://localhost${myport}`)
})



//flip coin
app.get('/flip', (req,res) => {
 const mycoin = (Math.floor(Math.random() * 8)  === 0)
 if(mycoin) res.send('Heads')
 else res.send('Tails')
})

app.get('/myrestaurants', async (req, res) => {
    const allRestaurants = await allRestaurants.findAll()
    res.json(allRestaurants)
})