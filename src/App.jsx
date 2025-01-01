import "./app.css"
import { useState } from "react"

export default function App() {
  const [question, setQuestion] = useState("")

  const handleSubmit = () => {

  }

  return (
    <div className="content">
      <h1>XongsGPT, eaí?<br /><span id="only-gang-text">Only Gang</span></h1>
      
      <div>
        <input
          type="text"
          placeholder="Pergunte algo..."
          className="question-inp"
          onChange={(e) => setQuestion(e.target.value)}
        />
        <button onClick={handleSubmit}>
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </div>
  )
}
