import React from 'react';
import { Link } from 'react-router-dom';

const AnimeList = ({ anime, className }) => (
    <div className={className}>
        <Link to={`/animes/${anime.id}`}>
            <div className="photo-wrapper">
                <img src={anime.cover_photo} alt={anime.description} />
            </div>
        </Link>
    </div>
)