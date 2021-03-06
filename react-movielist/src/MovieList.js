import React from 'react';
import MovieListItem from './MovieListItem';

export default function MovieList(props) {
    return(
        <div>
            <h1>Inlagda filmer</h1>
            <ul className='list-group'>
                {props.movies.map(movie => <MovieListItem key={movie.id} item={movie} deleteMovie={props.deleteMovie}/>)}
            </ul>

            <button type="button" class="btn btn-primary" onClick={() => {props.alphabeticalSort()}}>Alfabetsik ordning</button>
            <button type="button" class="btn btn-primary ms-3" onClick={() => {props.ratingSort()}}>Betygsordning</button>
        </div>
    )
};