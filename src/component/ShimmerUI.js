const ShimmerUI = () => {




    
    return (

        <div className='main-container'>

            <button className="filter-btn shimmer-filter-btn"></button>
            <div className="restruant-container">
                {Array.from({length:25}).map((el, index)=> {
                   return <div key={index} className="resturant-card shimmer-card">
                    <div className="img-container shimmer-img">
                    </div>
                    <div className="information">

                        <div className="first-row">
                            <h4 className='title'></h4>
                            <h5 className='star'></h5>
                        </div>

                        <div className="second-row">
                            <p className='cuisine'></p>
                            <p className="price"></p>
                        </div>

                        <div className="delivery-time"></div>
                    </div>
                </div>
                })}
                
                
            </div>

        </div>
    )
};

export default ShimmerUI;