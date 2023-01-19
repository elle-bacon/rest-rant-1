node_modules
.env
.DS_Store

require('dotenv').config()
const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
  res.send('Hello world home page')
})

app.get('*', (req, res) => {
  res.send('404 page')
})

app.listen(process.env.PORT)


app.get('/', (req, res) => {
    res.render('home')
  })

  // GET /places
app.get('/', (req, res) => {
    res.render('places/index')
  })
  
  // GET /places
app.get('/', (req, res) => {
    let places = []
    res.render('places/index')
  })
  
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: 'http://placekitten.com/250/250'
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'http://placekitten.com/250/250'
  }]

  res.render('places/index', { places })

  function index (data) {
    // ...
  }

  function index (data) {
    let placesFormatted = data.places.map((place) => {
      return (
        <div>
          <h2>{place.name}</h2>
          <img src={place.pic} alt={place.name}>
        </div>
      )
    })
    // ...
  }



  function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div>
        <h2>{place.name}</h2>
        <img src={place.pic} alt={place.name}/>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>PLACES INDEX PAGE</h1>
            {placesFormatted}
        </main>
    </Def>
)
}

app.use(express.urlencoded({ extended: true }))

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})
