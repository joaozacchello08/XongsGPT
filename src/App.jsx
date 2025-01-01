import "./app.css"
import { useState } from "react"
import { GoogleGenerativeAI } from "@google/generative-ai"

export default function App() {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const gen_ai = new GoogleGenerativeAI(import.meta.env.VITE_api_key)
    const model = gen_ai.getGenerativeModel({ model: "gemini-1.5-flash" })

    const result = await model.generateContent(question)
    setAnswer(result.response.text())
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

      <textarea
        disabled
        rows={15}
        cols={55}
        style={{ padding: 15, color: "black", fontSize: 18 }}
        value={answer ? answer : "Aqui aparecerá sua resposta..."}
      />
    </div>
  )
}
