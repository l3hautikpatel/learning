import { useState, useCallback, useRef, useEffect } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAlloed, setCharAllowd] = useState(true);
  const [password, setPassword] = useState("");
  const passwordRef = useRef(null);

  let passwordGenrator = useCallback(() => {
    let psw = "";
    let string = "ABCDEFGHIJKLMOPQRSTUVWabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) {
      string += "1234567890";
    }
    if (charAlloed) {
      string += "!@#$%^&*()+/<>[]=-_";
    }
    for (let i = 0; i < length; i++) {
      psw += string.charAt(Math.floor(Math.random() * string.length + 1));
    }
    setPassword(psw);
  }, [length, numberAllowed, charAlloed, setPassword]); // to optimize password genrator function use reuasebal portion of this function in back end

  let copyPasswordToClipbord = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 51);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenrator();
  }, [length, numberAllowed, charAlloed]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          className="outline-none w-full py-1 px-3"
          readOnly
          placeholder="PASSWORD"
          value={password}
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          onClick={copyPasswordToClipbord}
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={50}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
            defaultChecked={numberAllowed}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            onChange={() => {
              setCharAllowd((prev) => !prev);
            }}
            defaultChecked={charAlloed}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
