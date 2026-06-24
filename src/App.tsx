
import heroImg from './assets/logo ifb.png'
import './App.css'

function App() {
  
  return (
    <>
      <section id="center">
        <div className="hero">
          <img src={heroImg}  width="170" alt="" />
        </div>
        <div>
          <h1>Instituto Federal de Brasília</h1>
        </div>
        
      </section>

      <div className="ticks"></div>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
