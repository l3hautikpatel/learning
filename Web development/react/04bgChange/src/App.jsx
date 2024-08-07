import { useState } from 'react'
import './App.css'

function App() {

  let colorList = [
    'red',
    'blue',
    'green',
    'yellow',
    'orange',
    'purple',
    'pink',
    'brown',
    'black',
    'white',
    'gray',
    'cyan',
    'magenta',
    'violet',
    'teal',
    'olive',
    'navy',
    'maroon',
    'gold',
    'silver',
    'aquamarine',
    'coral',
    'crimson',
    'indigo',
    'lavender',
    'lime',
    'peach',
    'turquoise',
    'plum',
    'salmon'
  ]


  let [color , setColor] = useState(colorList[Math.floor(Math.random()*30) + 1])


  return (
    <div className='w-full h-screen duration-300' style={{backgroundColor: color}} >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl' id="btns">
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-red-600' onClick={()=>setColor("red")} id="btn">Red</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-green-600' onClick={()=>setColor("green")} id="btn">Green</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-yellow-600' onClick={()=>setColor("yellow")} id="btn">yellow</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-orange-600' onClick={()=>setColor("orange")} id="btn">orange</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-pink-700' onClick={()=>setColor("pink")} id="btn">Pink</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black' onClick={()=>setColor("black")} id="btn">Black</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-black' onClick={()=>setColor("salmon")} id="btn">salmon</button>
            <button className='outline-none px-4 py-1 rounded-full text-white shadow-lg bg-blue-600' onClick={()=>setColor("blue")} id="btn">Blue</button>
            <button className="mx-2 px-4 bg-slate-400 rounded-full py-2" onClick={()=>setColor(colorList[Math.floor(Math.random()*29+1)])}>Suffal</button>
          </div>
        </div>
    </div>
  )
}

export default App
