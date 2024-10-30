import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import Dish from './Dish';

const DishContainer = (props) => {
    const { data, ResID, ResName, ResArea } = props; // Destructuring data, ResID, ResName, and ResArea from props
    const [state, setState] = useState(false); // Using useState hook to manage state of dish container

    // Function to handle click event and toggle state
    const handleClick = () => {
        setState(!state);
    };

    return (
        <div className="shadow-md p-1 rounded-lg my-4 px-2.5 slg:mx-6">
            {/* Title and toggle icon */}
            <div className='flex items-center justify-between py-1 px-1 cursor-pointer my-1' onClick={handleClick}>
                <h1 className='text-lg font-semibold'>{data?.card?.card?.title} ({data?.card?.card?.itemCards.length})</h1>
                <span>{(state) ? <FontAwesomeIcon icon={faCaretUp} className="w-[14px] h-[22px]" style={{ color: '#000000' }} /> : <FontAwesomeIcon icon={faCaretDown} className="w-[14px] h-[22px]" style={{ color: '#000000' }} />}</span>
            </div>
            {/* Display dishes if state is true */}
            {state && data?.card?.card?.itemCards.map((items, index)=>(
                <Dish menu={items} key={index} ResID={ResID} input={'dish'} ResName={ResName} ResArea={ResArea}/>
            ))}
        </div>
    );
};

export default DishContainer; // Exporting DishContainer Component