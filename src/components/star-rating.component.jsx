import React, {useState} from 'react';
import {createArray} from "../helper.utils";
import StarComponent from "./star.component";


const StarRatingComponent = ({totalStars = 3}) => {
    const [selectedStars, setSelectedStars] = useState(0)

    return (
    <>
        {createArray(totalStars).map((n,i) => (
        <StarComponent
            key={i}
            selected={selectedStars > i}
            onSelect={() => setSelectedStars(i+1)}
        />
        ))}
        {<p>{selectedStars}/{totalStars}</p>}
    </>
    )

};

export default StarRatingComponent;