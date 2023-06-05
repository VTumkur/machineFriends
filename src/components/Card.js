import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robo_photo' src={`https://robohash.org/${id}?250X250`} />
            <div>
                <h2>{name} </h2>
                <p>{email}</p>
            </div>
        </div>
    );
}

export default Card; 