import { Link } from "react-router-dom";
import { RES_URL } from "../utils/constants";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons';

const RestrauntCard = (props) => {
    const { ResData } = props;

    const {
        name,
        cloudinaryImageId,
        cuisines,
        costForTwo,
        sla,
        avgRating
    } = ResData?.info;

    return (
        <Link to={'/restaurants/'+ ResData.info.id} style={{ textDecoration: 'none' }}><div className=" p-3 rounded-lg transition-all hover:bg-[#ececec] hover:shadow-lg">
        <div className="w-[350] h-[250]">
            <img src={RES_URL + cloudinaryImageId} className="w-full h-full object-cover rounded-lg" />
        </div>
        <div className="information">

            <div className="flex justify-between items-center my-2">
                <h4 className='w-72 text-lg font-semibold'>{name}</h4>
                <h5 className='px-3 py-0.5 rounded-lg bg-green-600 text-white'><FontAwesomeIcon className="w-3.5 pr-1" icon={faStar} style={{ color: "#ffffff" }} />{avgRating}</h5>
            </div>

            <div className="flex justify-between my-2">
                <p className='w-60 text-ellipsis overflow-hidden whitespace-nowrap text-gray-800 font-light'>{cuisines.join(', ')}</p>
                <p className="font-normal">{costForTwo}</p>
            </div>

            <div className="font-normal text-right">{sla.slaString}</div>
        </div>
    </div></Link>
    )
};


// ------------ Higher Order Component ---------------- //

// export const withPromotedLabel = (RestrauntCard) => {
//     return ({ResData}) => {
//         return (
//             <>
//             <label>Promoted</label>
//             <RestrauntCard ResData={ResData}/>
//             </>
//         );
//     };
// };

export default RestrauntCard;