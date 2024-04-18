import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import Dish from './Dish'
import { faCaretSquareUp } from "@fortawesome/free-solid-svg-icons/faCaretSquareUp";
import { faSquareCaretUp } from "@fortawesome/free-solid-svg-icons/faSquareCaretUp";

const DishContainer = (props) => {
    const { data} = props;
    const [state, setState] = useState(false);

    const handleClick = () => {
        setState(!state);
    };


    return (
        <div className="shadow-md p-1 rounded-lg my-4 px-2.5 slg:mx-6">
            <div className='flex items-center justify-between py-1 px-1 cursor-pointer my-1' onClick={handleClick}>
            <h1 className='text-lg font-semibold'>{data?.card?.card?.title} ({data?.card?.card?.itemCards.length})</h1>
            <span>{(state) ? <FontAwesomeIcon icon={faCaretUp} className="w-[14px] h-[22px]" style={{ color: '#000000' }} /> : <FontAwesomeIcon icon={faCaretDown} className="w-[14px] h-[22px]" style={{ color: '#000000' }} />}</span>
            </div>

            {state && data?.card?.card?.itemCards.map((items, index)=>(
                <Dish menu={items} key={index}/>
            ))}

        </div>

    );

};

export default DishContainer;