import React from 'react'
import "./detail.css"
import { Link } from 'react-router-dom'

const Detail = () => {
  return (
    <div className='mainDetail'>
      <div className="topDiv bg-opacity-10">
        <div className="overlay">
          <div className="topNav flex row justify-between p-6 opacity-100 items-center">
            <Link>
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
          <div className="mid flex flex-col justify-center items-center mt-10">
            <img src={require("./assets/images/the_tiny_dragon.jpg")} alt="" srcset="" />
            <p className='txtCol text-lg font-bold'>The Tiny Dragon</p>
            <p className='txtCol font-semibold'>Rupret Carter</p>
          </div>
          <div className="bottomDiv flex flex-row justify-between m-6 p-4 mt-10">
            <div className="flex flex-col items-center justify-center ndifh">
              <p className="font-bold txtCol">4.5</p>
              <p className="font-bold txtCol">rating</p>
            </div>
            <div className="flex flex-col items-center justify-center ndifh">
              <p className="font-bold txtCol">160</p>
              <p className="font-bold txtCol">Pages</p>
            </div>
            <div className="flex flex-col items-center justify-center ndifh">
              <p className="font-bold txtCol">Eng</p>
              <p className="font-bold txtCol">Language</p>
            </div>
          </div>
        </div>
      </div>
      <div className="midMain flex flex-col p-4">
        <h2 className='txtCol text-xl font-semibold'>Description</h2>
        <p className="mt-4 text-slate-300 book_desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Et dignissimos fugiat magnam quod voluptates aliquam est eius earum vero, nihil adipisci, iure atque. Dolor magnam nihil incidunt, ab quas quisquam animi obcaecati. Consequatur nostrum beatae sint iste optio, ipsum nobis non molestias laudantium quisquam hic quis rerum accusamus corrupti rem inventore deserunt qui in, error vel quod delectus repellendus! Mollitia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, vero hic commodi fugiat facere obcaecati quas vel quo, dolore nulla adipisci delectus nobis excepturi, sint est beatae error provident deserunt reprehenderit rem. Sit, neque?</p>
      </div>
      <div className="btmMain flex flex-row p-4 justify-between">
        <Link className='bookMark'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className='icons' viewBox="0 0 16 16">
            <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
          </svg>
        </Link>
        <Link className='read txtCol'>Start Reading</Link>

      </div>




    </div>
  )
}

export default Detail
