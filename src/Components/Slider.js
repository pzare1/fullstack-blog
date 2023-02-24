import React from 'react'

function Slider({food}) {
    return (
        <>
           <div className="container">
               <div className="row mb-4">
                   <div className="col-md-4 h-100 holder">
                        <img className="w-100" src="https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg"/>
                   </div>
                   <div className="col-md-4 h-100">
                       <div className="overlay"></div>
                        <img className="w-100" src="https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg"/>
                   </div>
                   <div className="col-md-4 h-100">
                       <div className="overlay"></div>
                        <img className="w-100" src="https://www.themealdb.com/images/media/meals/n7qnkb1630444129.jpg"/>
                   </div>
               </div>
           </div>
        </>
    )
}

export default Slider
