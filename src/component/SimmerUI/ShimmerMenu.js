import React from 'react';
import './ShimmerAnimation.css';

const ShimmerMenu = () => {
    return (
        <>
            <div className="btn_menu max-w-[900px] m-auto p-6 pb-2 mt-6 rounded-lg slg:mx-6 bg-[#ececec]">
                <div>
                    <h2 className="font-semibold text-3xl mb-3 xsm:text-2xl xxsm:text-xl inline-block bg-[#c4c4c45d] rounded-xl text-[#c4c4c40d]">
                        Chinese Wok
                    </h2>
                    <div className="border-2 items-start border-[#c4c4c45d] border-solid flex flex-col gap-2 p-3 rounded-lg shadow-sm">
                        <div className="flex xxsm:flex-col xxsm:gap-2">
                            <div className="flex items-center gap-1 bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                                {"  "}
                                4.1 (1K+ ratings)
                            </div>
                            <div className="mx-2 xxsm:hidden bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">|</div>
                            <div className="price bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">₹250 for two</div>
                        </div>
                        <div className="bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d] inline font-normal">Chinese, Asian, Chinese,</div>
                        <div className="time bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">25-30 MINS</div>
                        <div className="flex items-start bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                           
                            <p className="font-thin bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                                0.9 kms | ₹39 Delivery fee will apply
                            </p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center gap-2 my-5">
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="utensils"
                        className="svg-inline--fa fa-utensils "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        style={{ color: "rgb(192, 192, 192)" }}
                    >
                        <path
                            fill="currentColor"
                            d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                        />
                    </svg>
                    <h2 className="font-normal text-lg bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">Dishes</h2>
                    <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="utensils"
                        className="svg-inline--fa fa-utensils "
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        style={{ color: "rgb(192, 192, 192)" }}
                    >
                        <path
                            fill="currentColor"
                            d="M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"
                        />
                    </svg>
                </div>
            </div>
            <div className="max-w-[900px] m-auto mb-10">
                <div className="p-1 my-4 px-2.5 slg:mx-6 bg-[#ececec] rounded-xl text-[#c4c4c41d]">
                    <div className="flex items-center justify-between py-1 px-1 cursor-pointer my-1 ">
                        <h1 className="text-lg font-semibold bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">Recommended (14)</h1>
                        <span className='bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d] w-[20px] h-[20px]'>
                        </span>
                    </div>
                </div>
                <div className="p-1 my-4 px-2.5 slg:mx-6 bg-[#ececec] rounded-xl text-[#c4c4c41d]">
                    <div className="flex items-center justify-between py-1 px-1 cursor-pointer my-1 ">
                        <h1 className="text-lg font-semibold bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">Recommended (14)</h1>
                        <span className='bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d] w-[20px] h-[20px]'>
                        </span>
                    </div>
                </div>
                <div className="p-1 my-4 px-2.5 slg:mx-6 bg-[#ececec] rounded-xl text-[#c4c4c41d]">
                    <div className="flex items-center justify-between py-1 px-1 cursor-pointer my-1 ">
                        <h1 className="text-lg font-semibold bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">Recommended (14)</h1>
                        <span className='bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d] w-[20px] h-[20px]'>
                        </span>
                    </div>
                </div>
                <div className="p-1 my-4 px-2.5 slg:mx-6 bg-[#ececec] rounded-xl text-[#c4c4c41d]">
                    <div className="flex items-center justify-between py-1 px-1 cursor-pointer my-1 ">
                        <h1 className="text-lg font-semibold bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">Recommended (14)</h1>
                        <span className='bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d] w-[20px] h-[20px]'>
                        </span>
                    </div>
                </div>
                <div className="p-1 my-4 px-2.5 slg:mx-6 bg-[#ececec] rounded-xl text-[#c4c4c41d]">
                    <div className="flex items-center justify-between py-1 px-1 cursor-pointer my-1 ">
                        <h1 className="text-lg font-semibold bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">Recommended (14)</h1>
                        <span className='bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d] w-[20px] h-[20px]'>
                        </span>
                    </div>
                </div>
                <div className="p-1 my-4 px-2.5 slg:mx-6 bg-[#ececec] rounded-xl text-[#c4c4c41d]">
                    <div className="flex items-center justify-between py-1 px-1 cursor-pointer my-1 ">
                        <h1 className="text-lg font-semibold bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">Recommended (14)</h1>
                        <span className='bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d] w-[20px] h-[20px]'>
                        </span>
                    </div>
                </div>
                
            </div>
            <div className="max-w-[900px] m-auto p-6 pb-[50px] mt-6 rounded-tl-lg rounded-tr-lg slg:mx-6 bg-[#ececec]">
                <div className="flex gap-5 items-center mb-6 pb-8 ">
                    <img
                        className="w-20 opacity-0"
                        src='i'
                        alt="FSSAI"
                    />
                    <h3 className='bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]'> License No. 11520110000105</h3>
                </div>
                <div className='flex flex-col items-start gap-4'>
                    <h2 className="font-semibold text-lg  bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">Chinese Wok Chinese Wok Chinese Wok</h2>
                    <h4 className="font-semibold text-sm pb-8 bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                        Address : Gala No-105, First Floor, Sanghavi Industrial Estate, M.G. Road,
                        Opp Hindustan Naka , Kandivali West, Mumbai, Greater Mumbai Ward-R/S,
                        Greater Mumbai, Maharashtra
                    </h4>
                </div>
            </div>

        </>

    )
}

export default ShimmerMenu
