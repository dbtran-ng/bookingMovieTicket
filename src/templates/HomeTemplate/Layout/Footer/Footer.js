import { AppleOutlined, FacebookOutlined } from '@ant-design/icons';
import _ from 'lodash';
import React from 'react';
import { useSelector } from 'react-redux';

export default function Footer(props) {
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);

  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) =>
    _.pick(heThongRap, ['maHeThongRap', 'tenHeThongRap', 'logo'])
  );

  return (
    <footer className="py-6 bg-coolGray-100 text-coolGray-900 bg-gray-800">
      <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="grid grid-cols-12">
          <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
            <a
              href="#"
              className="flex justify-center space-x-3 md:justify-start text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                viewBox="0 0 24 24"
              >
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
              </svg>
            </a>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3">
            <p className="pb-1 text-lg font-medium text-white">PARTNER</p>
            <div className="grid grid-cols-3" style={{ color: '#fff' }}>
              {arrHeThongRap.map((htr, index) => {
                return (
                  <div key={index}>
                    <img src={htr.logo} style={{ width: 50 }} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-span-6 text-center md:text-left md:col-span-3 text-white">
            <p className="pb-1 text-lg font-medium">Mobile app</p>
            <div className="flex text-white">
              <div className="mr-5">
                <AppleOutlined className="text-2xl" />
              </div>
              <div>
                <FacebookOutlined className="text-2xl" />
              </div>
            </div>
          </div>
        </div>
        <div className="grid justify-center pt-6 lg:justify-between text-white">
          <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
            <span>©2021 All rights reserved</span>
          </div>

          <div className=""></div>
        </div>
      </div>
    </footer>
  );
}
