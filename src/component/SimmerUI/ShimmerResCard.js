import React from 'react'
import './ShimmerAnimation.css'

const ShimmerResCard = () => {
  return (
    <div>
      <div className="max-w-[1500] m-auto">
        <div className="flex items-center py-4 gap-8 justify-between mx-5 lg:flex-col lg:text-sm">
          <div className="">
            <input
              placeholder=""
              className=" px-3 py-2 text-[#e6e6e6] bg-[#e6e6e6] font-medium rounded-3xl border border-solid border-[#e6e6e6] outline-none mr-2"
            />
          </div>
          <div className="button_container flex gap-4 flex-wrap items-center justify-center">
            <button className="btn px-4 cursor-default py-1 border border-solid border-[#e6e6e6] font-medium rounded-2xl bg-[#e6e6e6] text-[#e6e6e6]">
              Reset
            </button>
            <button className="btn px-4 cursor-default py-1 bg-[#e6e6e6] text-[#e6e6e6] border border-solid border-[#e6e6e6] font-medium rounded-2xl focus:bg-[#e6e6e6] focus:text-[#e6e6e6]">
              4+ Rating
            </button>
            <button className="btn px-4 cursor-default py-1 bg-[#e6e6e6] text-[#e6e6e6] border border-solid border-[#e6e6e6] font-medium rounded-2xl focus:bg-[#e6e6e6] focus:text-[#e6e6e6]">
              Fast Delivery
            </button>
            <button className="btn px-4 cursor-default py-1 bg-[#e6e6e6] text-[#e6e6e6] border border-solid border-[#e6e6e6] font-medium rounded-2xl focus:bg-[#e6e6e6] focus:text-[#e6e6e6]">
              Pura Veg
            </button>
            <button className="btn px-4 cursor-default py-1 bg-[#e6e6e6] text-[#e6e6e6] border border-solid border-[#e6e6e6] font-medium rounded-2xl focus:bg-[#e6e6e6] focus:text-[#e6e6e6]">
              Less than 300
            </button>
            <button className="btn px-4 cursor-default py-1 bg-[#e6e6e6] text-[#e6e6e6] border border-solid border-[#e6e6e6] font-medium rounded-2xl focus:bg-[#e6e6e6] focus:text-[#e6e6e6]">
              Rs. 300 - 600
            </button>
          </div>
        </div>
        <div className="flex justify-center flex-wrap gap-4 m-7">
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>
          <a
            style={{ textDecoration: "none" }}
            className="ssm:w-full cursor-default"
            href=""
          >
            <div className="p-3 rounded-lg transition-all bg-[#ececec] slg:shadow relative">
              <div className="w-[320] h-[250] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full rounded-xl bg-[#c4c4c45d]">
                <img
                  src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/70995c10def761ed1733f4e32c213ff7"
                  className="w-full h-full object-cover rounded-lg opacity-0"
                />
              </div>
              <div className="w-[320] 2xl:w-[280] xl:w-[240] lg:w-[260] slg:w-[230] md:w-[280] sm:w-[240] ssm:w-full">
                <div className="flex justify-between items-center my-2 btn_top">
                  <h4 className="w-8/12 text-lg font-semibold text-ellipsis overflow-hidden whitespace-nowrap bg-[#c4c4c45d] rounded-xl text-[#c4c4c41d]">
                    Poetry By Love &amp; Cheesecake
                  </h4>
                  <h5 className="px-3 py-0.5 rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">
                    <svg
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="star"
                      className="svg-inline--fa fa-star w-3.5 pr-1"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                      style={{ color: "#c4c4c41d" }}
                    >
                      <path
                        fill="currentColor"
                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"
                      />
                    </svg>
                    4.4
                  </h5>
                </div>
                <div className="flex justify-between my-2">
                  <p className="w-7/12 text-ellipsis overflow-hidden whitespace-nowrap rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d] font-light">
                    Desserts
                  </p>
                  <p className="font-normal rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">₹900 for two</p>
                </div>
                <div className="flex justify-end">
                  <div className="font-normal text-right rounded-xl bg-[#c4c4c45d] text-[#c4c4c41d]">35-40 xxcd two</div>
                </div>
              </div>
            </div>
          </a>

        </div>
      </div>

    </div>
  )
}

export default ShimmerResCard
