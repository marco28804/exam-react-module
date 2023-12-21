import "./personCard.scss";

export default({id,name,occupation,sex,popularity,works,imagePath}) =>{
    return(
        <>
      
        <div className="personCard">
        <h2>{name}</h2>
            <figure id='flag'>
            <img src={`https://image.tmdb.org/t/p/w200${imagePath}`} alt="" />
            </figure>
          
            <p id='p'>Occupation:{occupation}</p>
            <p>Sex:{sex}</p>
            <p>popularity:{popularity}</p>
            <p>work:{works}</p>
             <p>{id}</p>

        </div>
        </>
    )
}