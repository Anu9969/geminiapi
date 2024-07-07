'use client'
import Image from "next/image";
import {useState} from "react";
import { run } from "../../action/prompt";

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState("");

   async function handleChange(){
    const data = await run(search);
    console.log(data);
    setResults(data);
  }
  return (
    <div className="h-screen w-screen flex flex-col gap-4 justify-center items-center  overflow-hidden" >
      <div className="h-2/3 w-2/5 border flex flex-col justify-center items-center gap-5 rounded-xl columns-2">
        <input 
          className="bg-transparent border rounded-md px-3 py-2" 
          type="text" 
          onChange={(e) => setSearch(e.target.value)} 
        />
        <button className="border rounded-xl px-2 py-2 flex-col text-white hover:bg-white hover:text-black" onClick={handleChange}>Search</button>
      </div>

      <div className=" relative py-4 scroll-p-5 border-spacing-4 h-1/3 w-4/5 border space-y-4 flex flex-col gap-3 px-6 mb-6 rounded-lg overflow-y-scroll no-scrollbar">
        <h1 className=" relative rounded flex bg-slate-900 text-center items-center justify-center text-cyan-50  p-1 font-bold gap-6 ">Output</h1>
          <p className="">{results}</p>
        </div>
      
    </div>
  );
}

