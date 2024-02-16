import './App.css'
import img from "./assets/img1.png"

function App() {

  return (
    <>
      <div className="container">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <h1>Landing</h1>
          <button>Buy Now</button>
        </nav>

        <div className="main">
          <div className="text">
            <h1>Introduce Your Product <br /> Quickly & Effectively</h1>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean <br />
             commodo ligula eget dolor. Aenean massa. Cum sociis natoque <br /> 
             penatibus et magnis dis parturient montes, nascetur ridiculus <br /><br />
              mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, <br />
             sem. Nulla consequat massa quis enim.</p>
            <div className="btn">
              <button className='btn1'>Purchase UI Kit</button>
              <button className='btn2'>Learn More</button>
            </div>
          </div>
          <div className="img">
            <img src={img}/>
          </div>
        </div>

      </div>
    </>
  )
}

export default App
