import { useRef } from "react"
import { useCallback, useEffect, useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const [isClicked, setIsClicked] = useState(false)

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
      let pass = ""
      let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
      if (numberAllowed)  str += "0123456789"
      if (charAllowed) str += "!@#$%^&*()"

      for (let i = 1; i <= length; i++) {
        let char = Math.floor((Math.random() * str.length +1))
        pass += str.charAt(char)
      }
      setPassword(pass)
    },
    [length, numberAllowed, charAllowed],
  )

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed,charAllowed,passwordGenerator])


  const  copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0, 10)
    window.navigator.clipboard.writeText(password)
    setIsClicked(true)
  },[password])

  return (
    <div className="max-w-md mx-auto rounded-lg
    px-4 my-8 text-orange-500 bg-gray-800">
      <h1 className="text-white text-center">Password Generator</h1>
      <div className="flex mb-4 rounded-lg overflow-hidden">
        <input type="text"
        value={password}
        className=" outline-none  w-full py-2"
        placeholder="password"
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className={` px-2 text-white ${isClicked ? 'bg-green-500' : 'bg-blue-500'}`}>Copy</button>
      </div>

      <div className="flex text-sm gap-x-2 w-full ">
        <div className="flex items-center gap-x-1">
          <input type="range"
          min={8}
          max={100}
          value={length}
          className="cursor-pointer"
          onChange={(e) => setLength(e.target.value)}
          />
          <label>Length:{length}</label>

        </div>

        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked = {numberAllowed}
          id = "numberInput"
          onChange={
            () => setNumberAllowed( (prev) => !prev)
          }
          />
          <laber htmlFor = 'numberInput'>Number</laber>
        </div>
        <div className="flex items-center gap-x-1">
          <input type="checkbox"
          defaultChecked = {charAllowed}
          id = "charInput"
          onChange={
            () => setCharAllowed( (prev) => !prev)
          }
          />
          <laber htmlFor = 'charInput'>Character</laber>
        </div>
      </div>
    </div>
  )
}

export default App
