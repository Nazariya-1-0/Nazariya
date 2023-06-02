import React, { useState } from 'react'
import "./detail.css"
import { Link } from 'react-router-dom'

const Detail = () => {

  const [input, setInput] = useState("");
  const [data, setData] = useState("");

  const getData = async () => {

    console.log(input)

    //eslint-disable-next-line
    const response = await fetch('https://response-gpt-api.azurewebsites.net/api/completionAPI', {

      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({
        "model": "text-davinci-003",
        "prompt": "What is python",
        "max_tokens": 100,
        "temperature": 0.2,
        "key" : "<h1>#HelloWorld9328161#</h1>"
      }),
      mode: 'cors',
      referrerPolicy: "origin-when-cross-origin",
    });

    const res = await response.text();
    console.log(res)
    setData(res);
  }



  return (
    <div className='mainDetail' >
      <div className="topDiv bg-opacity-10">
        <div className="overlay">
          <div className="topNav flex row justify-between p-6 opacity-100 items-center">
            <Link to="/">
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z" className='icons' />
              </svg>
            </Link>
            <p className=' txtCol text-center'>Detail Book</p>
            <Link>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" className='icons' viewBox="0 0 16 16">
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
              </svg>
            </Link>
          </div>
          <div className="mid flex flex-col justify-center items-center">
            <img src={require("./assets/images/rich_dad_poor_dad.jpeg")} className='w-38 h-52' alt="" srcset="" />
            <p className='txtCol text-lg font-bold'>The Tiny Dragon</p>
            <p className='txtCol font-semibold'>Rupret Carter</p>
          </div>
          <div className="bottomDiv flex flex-row justify-between m-6 p-4 mt-10">
            <div className="flex flex-col items-center justify-center ndifh">
              <p className="font-bold txtCol">4.5</p>
              <p className="font-regular txtCol">rating</p>
            </div>
            <div className="flex flex-col items-center justify-center ndifh">
              <p className="font-bold txtCol">160</p>
              <p className="font-regular txtCol">Pages</p>
            </div>
            <div className="flex flex-col items-center justify-center ndifh">
              <p className="font-bold txtCol">Eng</p>
              <p className="font-regular txtCol">Language</p>
            </div>
          </div>
        </div>
      </div>
      <div className="midMain flex flex-col p-4">
        <h2 className='txtCol text-xl font-semibold'>Description</h2>
        <p className="mt-4 text-slate-300 book_desc">In the enchanting world of dragons, where grand tales of fire-breathing behemoths abound, there lies a captivating legend of a tiny dragon that defies expectations. "The Tiny Dragon's Tale" is a heartwarming and whimsical story that will transport readers of all ages into a realm brimming with magic, friendship, and discovery.</p>
      </div>
      <div className="btmMain flex flex-row p-4 justify-between">
        <Link className='bookMark'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='icons' viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
          </svg>
        </Link>
        <Link className='read txtCol' to="/detail/rich_dad/notes">Start Reading Notes</Link>
      </div>
      <div className="p-4">
        <div class="mb-3">
          <div class="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="text"
              class="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-700 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary txtCol"
              placeholder="Search Anything About/from This book"
              aria-label="Search"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              aria-describedby="button-addon2" />
            <Link onClick={getData}>
              <span
                class="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
                id="basic-addon2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  class="h-5 w-5 icons">
                  <path
                    fill-rule="evenodd"
                    d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                    clip-rule="evenodd" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </div>
      {data}
    </div >
  )
}

export default Detail
