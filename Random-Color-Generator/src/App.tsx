import { useState, useEffect } from "react"

const App = () => {
  const [color, setColor] = useState<string>('#456789')
  const styleColor = {
    backgroundColor: color
  }
  const changeColor = () => {
    const generateColor = '#' + Math.floor(Math.random() * 1000000).toString()
    setColor(generateColor)
  }

  useEffect(() => {
    const interval = setInterval(() => { changeColor() }, 2000);
    return () => clearInterval(interval)
  }, [color])
  return (
    <div style={styleColor} className="landing">
      <h1>{color}</h1>
      <button onClick={changeColor}>Change the background color</button>
    </div>
  )
}

export default App