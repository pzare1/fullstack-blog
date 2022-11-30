import React from 'react'

function BlogSection({ food }) {
    return (
        <div className="container">
            <div className="row">
               
                    {food.map(item => (
                        <>
                         <div className="col-12 col-sm-8 col-md-6 col-lg-4 mb-4">
                            <div className="card">
                                <img className="card-img" src={item.strMealThumb} alt={item.strMeal} />
                                <div className="card-img-overlay">
                                    <a href="#" className="btn btn-light btn-sm">{item.strCategory}</a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">{item.strMeal}</h4>
                                    <small className="text-muted cat">
                                        <i className="far fa-clock text-info"></i><span>{item.idMeal}</span>
                                        <i className="fas fa-users text-info"></i><span>{item.strIngredient1}</span>
                                    </small>
                                    <p className="card-text text-justify des">{item.strInstructions.length>140 ? item.strInstructions.substring(0,140): item.strInstructions}</p>
                                    <a href="#" className="btn btn-cu">Read Recipe</a>
                                </div>
                                <div className="card-footer text-muted d-flex justify-content-between bg-transparent border-top-0">
                                    <div className="views">
                                    </div>
                                    <div className="stats">
                                        <i className="far fa-eye"></i>
                                        <i className="far fa-comment"></i>
                                    </div>

                                </div>
                            </div>
                        </div>
                        </>
                    ))}

               
            </div>
        </div>
    )
}

export default BlogSection