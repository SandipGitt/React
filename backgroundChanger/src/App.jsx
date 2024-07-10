import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
    <div className="w-full h-screen "
    style = {{ backgroundColor: color}}>
      <div className=" fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2  ">
        <div className="flex flex-wrap justify-center gap-2 bg-white px-3 py-2 rounded-full ">
          <button onClick={() => setColor("red")} className="px-4 py-2 rounded-3xl"
          style={{backgroundColor: "Red"}}>
            Red
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 bg-white px-3 py-2 rounded-full ">
          <button onClick={() => setColor("green")} className="px-4 py-2 rounded-3xl"
          style={{backgroundColor: "Green"}}>
            Green
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 bg-white px-3 py-2 rounded-full ">
          <button onClick={() => setColor("Blue")} className="px-4 py-2 rounded-3xl"
          style={{backgroundColor: "Blue"}}>
            Blue
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 bg-white px-3 py-2 rounded-full ">
          <button onClick={() => setColor("Yellow")} className="px-4 py-2 rounded-3xl"
          style={{backgroundColor: "Yellow"}}>
            Yellow
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 bg-white px-3 py-2 rounded-full ">
          <button onClick={() => setColor("Gray")} className="px-4 py-2 rounded-3xl"
          style={{backgroundColor: "Gray"}}>
            Gray
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 bg-white px-3 py-2 rounded-full ">
          <button onClick={() => setColor("Pink")} className="px-4 py-2 rounded-3xl"
          style={{backgroundColor: "Pink"}}>
            Pink
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 bg-white px-3 py-2 rounded-full ">
          <button onClick={() => setColor("Purple")} className="px-4 py-2 rounded-3xl"
          style={{backgroundColor: "Purple"}}>
            Purple
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 bg-white px-3 py-2 rounded-full shadow-xl ">
          <button onClick={() => setColor("White")} className="px-4 py-2 rounded-3xl shadow-xl"
          style={{backgroundColor: "White"}}>
            White
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 bg-white text-white px-3 py-2 rounded-full ">
          <button onClick={() => setColor("Black")} className="px-4 py-2 rounded-3xl"
          style={{backgroundColor: "Black"}}>
            Black
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-2 bg-white px-3 py-2 rounded-full ">
          <button onClick={() => setColor("lavender")} className="px-4 py-2 rounded-3xl"
          style={{backgroundColor: "lavender"}}>
            lavender
          </button>
        </div>
      </div>

    </div>
    </>
  )
}

export default App
