import {useState} from 'react'
import moviesData from '../movies-list.json'
import { v4 as uuidv4 } from 'uuid';


function MovieList() {
    console.log(uuidv4())

    const [movies,setMovies] = useState(moviesData)





    function deleteMovie(movieId){
        console.log(movieId)

      const newMovies =  movies.filter((oneMovie)=>{
            return oneMovie._id !== movieId
        })
        console.log(newMovies)
        setMovies(newMovies)
    }
    function sortMovies(){
     
        let copiedMovies = [...movies]
        copiedMovies.sort((a,b)=>{
            return a.title.localeCompare(b.title)
        })
        console.log(copiedMovies)
        setMovies(copiedMovies)
    
    }

  return (
    <div>
        <button onClick={()=>{sortMovies()}}>sort movies</button>
        {movies.map((oneMovie)=>{
            return(
                <div style={{border:"solid red",margin:"0 0 5px 0"}} key={oneMovie._id}>
                    <h2>{oneMovie.title}</h2>
                    <h3>{oneMovie.director}</h3>
                    <button onClick={()=>{deleteMovie(oneMovie._id)}}>Delete {oneMovie.title}</button>
                </div>
            )
        })}
    </div>
  )
}

export default MovieList