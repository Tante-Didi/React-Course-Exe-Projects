import './App.css'
import image from './assets/image.jpg'
function App() {
  const imageUrl = new URL('../assets/image.jpg')
  return (
    <>
      <div>
        <h1>Hello world</h1>
        <img src={imageUrl} alt="sadna" />
      </div>
    </>
  )
}

export default App
