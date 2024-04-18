const AboutShimmer = () => {
    return (
        <div className='max-w-[900px] min-h-[350px] m-auto my-5 rounded-xl p-5 flex gap-3 items-center bg-[#dedede] slg:mx-4 md:flex-col md:justify-center md:h-[700px] md:gap-8'>
      <div className="w-[650px] md:w-[350px] ">
        <div className="w-[309px] h-[309px] rounded-[50%] bg-[#d1d0d0] m-auto"></div>
      </div>
      <div className="about_info w-full flex flex-col justify-between">
        <div className='mb-7'>
        <h1 className=' w-8/12 h-8 bg-[#c4c4c4] rounded-xl'></h1>
        <h3 className=" w-4/12 h-8 bg-[#d1d0d0] mt-3 rounded-xl"></h3>
        <h2 className='mt-6'></h2>
        </div>
        
        <p className="w-10/12 h-40 bg-[#d1d0d0] rounded-xl"></p>
      </div>
    </div>
    )
};

export default AboutShimmer;