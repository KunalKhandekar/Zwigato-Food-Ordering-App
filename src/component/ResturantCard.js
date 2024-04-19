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
        <Link to={'/app/restaurants/' + ResData.info.id} style={{ textDecoration: 'none' }} className="ssm:w-full">

            <div className="p-3 rounded-lg transition-all hover:bg-[#ececec] hover:shadow-lg slg:shadow">


                <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                    <img src={RES_URL + cloudinaryImageId} className="w-full h-full object-cover rounded-lg" />
                </div>

                <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">

                    <div className="flex justify-between items-center my-2">
                        <h4 className='w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap'>{name}</h4>
                        <h5 className='px-3 py-0.5 rounded-lg bg-green-600 text-white'><FontAwesomeIcon className="w-3.5 pr-1" icon={faStar} style={{ color: "#ffffff" }} />{avgRating}</h5>
                    </div>

                    <div className="flex justify-between my-2">
                        <p className='w-7/12 text-ellipsis overflow-hidden whitespace-nowrap text-gray-800 font-light'>{cuisines.join(', ')}</p>
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