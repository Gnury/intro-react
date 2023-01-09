import* as react from 'react'

function getTitle(title){
  return title
}

const welcome = {
  grecting: 'Hey',
  title: 'React',
}

function App() {


  return (
    <div className="App">
      <div>
       <h1>{welcome.grecting} {welcome.title}</h1>
       <label htmlFor="search">search</label>
       <input type="text" id = 'search' />
      </div>
    </div>
  )
}

export default App
