import React from 'react';
import { Link } from 'react-router-dom';

const AnimeList = ({ anime, className }) => (
    <div className={className}>
        <Link to={`/animes/${anime.id}`}>
            <div className="photo-wrapper">
                <img 
                    src={anime.cover_photo} 
                    alt={anime.description}
                    className="anime-photo-list" 
                />
            </div>
            <div className="list-description-wrapper">
                <div className="list-anime-title">{anime.title}</div>
                <div className="list-anime-title">{anime.description}</div>
            </div>
        </Link>
    </div>
)

export default AnimeList;