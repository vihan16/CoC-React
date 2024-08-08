import { useCallback, useEffect, useState, useRef } from "react";


function App() {
  const [length, setlength] = useState("8");
  const [addnum, setaddnum] = useState("false");
  const [includeChar, setincludeChar] = useState("false");
  const [password, setpassword] = useState("");

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (addnum) str += "0123456789";
    if (includeChar) str += "`~!@#$%^&*?,./|_";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setpassword(pass);
  }, [length, addnum, includeChar, setpassword]);

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange()
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  },[length, addnum, includeChar, passwordGenerator])

  return (
    <>
      <div className="w-full max-w-md mx-auto  shadow-md rounded-lg px-4 py-3 my-8 bg-indigo-500 text-yellow-600">
        <h1 className="text-white text-center my-2">Password Generator</h1>
        <div
          className="flex shadow rounded-lg
          overflow-hidden mb-4">
        
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="outline-none bg-red-400 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input type="range" min={6} max={15} value={length} className="cursor-pointer" onChange={(e) => {setlength(e.target.value)}}/>
            <label>length:{length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={addnum} id="numberInput" onChange={() => {setaddnum((prev) => !prev);}} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
          <input
              type="checkbox"
              defaultChecked={includeChar}
              id="characterInput"
              onChange={() => {
                  setincludeChar((prev) => !prev )
              }}
          />
          <label htmlFor="characterInput">Characters</label>
      </div>
        </div>
      </div>
    </>
  );
}

export default App;
