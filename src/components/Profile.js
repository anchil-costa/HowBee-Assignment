import React from 'react'
import { VscGraph } from "react-icons/vsc";
import { PiPersonArmsSpreadLight } from "react-icons/pi";
import { FiMonitor } from "react-icons/fi";
import { IoCalendarOutline } from "react-icons/io5";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { BsRecordCircleFill } from "react-icons/bs";
import { IoWalletOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";
import { MdOutlineEdit } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import profile_pic from '../assets/profilepic.jpeg'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Modal from './Modal';



const Profile = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);


    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };

    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
  
    const handleItemClick = (item) => {
      console.log(`You selected ${item}`);
      setIsOpen(false); // Close the dropdown after selecting an item
    };
   

    const [options, setOptions] = React.useState([
        { id: 1, name: 'Dashboard', image: <VscGraph size={23} /> },
        { id: 2, name: 'Posture Routine', image: <PiPersonArmsSpreadLight size={23} /> },
        { id: 3, name: 'Classroom', image: <FiMonitor size={23} /> },
        { id: 4, name: 'Calendar', image: <IoCalendarOutline size={23} /> },
        { id: 5, name: 'Music', image: <IoMusicalNotesOutline size={23} /> },
        { id: 6, name: 'Recordings', image: <BsRecordCircleFill size={23} /> },
        { id: 7, name: 'Earnings', image: <IoWalletOutline size={23} />},
        { id: 8, name: 'Settings', image: <IoSettingsOutline size={23} /> },
      ]);




  return (
    <div className='flex bg-white'>
        <div className='flex flex-col border-r border-customWhite2 h-[1024px] w-[300px] bg-white'>
            <div className='w-[178px] h-[40px] mt-[22px] ml-[32px]'>
            <svg width="178" height="40" viewBox="0 0 178 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="20" cy="20" r="20" fill="#FFCC00"/>
<path d="M64.61 14H66.69V28H64.61V21.54H58.28V28H56.2V14H58.28V19.46H64.61V14ZM73.9164 28.26C72.9964 28.26 72.1564 28.0233 71.3964 27.55C70.6431 27.0767 70.0397 26.4433 69.5864 25.65C69.1397 24.85 68.9164 23.9667 68.9164 23C68.9164 22.2667 69.0464 21.5833 69.3064 20.95C69.5664 20.31 69.9231 19.75 70.3764 19.27C70.8364 18.7833 71.3697 18.4033 71.9764 18.13C72.5831 17.8567 73.2297 17.72 73.9164 17.72C74.8364 17.72 75.6731 17.9567 76.4264 18.43C77.1864 18.9033 77.7897 19.54 78.2364 20.34C78.6897 21.14 78.9164 22.0267 78.9164 23C78.9164 23.7267 78.7864 24.4067 78.5264 25.04C78.2664 25.6733 77.9064 26.2333 77.4464 26.72C76.9931 27.2 76.4631 27.5767 75.8564 27.85C75.2564 28.1233 74.6097 28.26 73.9164 28.26ZM73.9164 26.18C74.4697 26.18 74.9664 26.0333 75.4064 25.74C75.8464 25.4467 76.1931 25.06 76.4464 24.58C76.7064 24.0933 76.8364 23.5667 76.8364 23C76.8364 22.42 76.7031 21.8867 76.4364 21.4C76.1764 20.9133 75.8264 20.5267 75.3864 20.24C74.9464 19.9467 74.4564 19.8 73.9164 19.8C73.3697 19.8 72.8731 19.9467 72.4264 20.24C71.9864 20.5333 71.6364 20.9233 71.3764 21.41C71.1231 21.8967 70.9964 22.4267 70.9964 23C70.9964 23.5933 71.1297 24.13 71.3964 24.61C71.6631 25.09 72.0164 25.4733 72.4564 25.76C72.9031 26.04 73.3897 26.18 73.9164 26.18ZM85.4458 28H83.3758L80.0258 18H82.0658L84.4258 25.02L86.7658 18H88.8658L91.2058 25.02L93.5558 18H95.5958L92.2558 28H90.1658L87.8058 20.93L85.4458 28Z" fill="black"/>
<path d="M97.9656 28V14H102.936C103.656 14 104.306 14.1467 104.886 14.44C105.472 14.7333 105.936 15.1567 106.276 15.71C106.622 16.2567 106.796 16.9133 106.796 17.68C106.796 18.0533 106.736 18.42 106.616 18.78C106.496 19.14 106.326 19.4567 106.106 19.73C105.886 20.0033 105.619 20.1967 105.306 20.31C105.732 20.4167 106.086 20.61 106.366 20.89C106.652 21.1633 106.879 21.4833 107.046 21.85C107.212 22.2167 107.329 22.5967 107.396 22.99C107.469 23.3833 107.506 23.7567 107.506 24.11C107.506 24.8567 107.326 25.5233 106.966 26.11C106.606 26.6967 106.122 27.16 105.516 27.5C104.916 27.8333 104.252 28 103.526 28H97.9656ZM100.046 26.2H103.326C103.752 26.2 104.139 26.0933 104.486 25.88C104.839 25.6667 105.119 25.3733 105.326 25C105.532 24.62 105.636 24.1933 105.636 23.72C105.636 23.3067 105.532 22.9167 105.326 22.55C105.119 22.1767 104.839 21.8767 104.486 21.65C104.139 21.4233 103.752 21.31 103.326 21.31H100.046V26.2ZM100.046 19.54H102.716C103.262 19.54 103.732 19.3733 104.126 19.04C104.519 18.7067 104.716 18.25 104.716 17.67C104.716 17.05 104.519 16.5867 104.126 16.28C103.732 15.9667 103.262 15.81 102.716 15.81H100.046V19.54ZM114.002 28.26C113.082 28.26 112.242 28.0233 111.482 27.55C110.729 27.0767 110.126 26.4433 109.672 25.65C109.226 24.85 109.002 23.9667 109.002 23C109.002 22.2667 109.132 21.5833 109.392 20.95C109.652 20.31 110.009 19.75 110.462 19.27C110.922 18.7833 111.456 18.4033 112.062 18.13C112.669 17.8567 113.316 17.72 114.002 17.72C114.769 17.72 115.472 17.88 116.112 18.2C116.752 18.5133 117.299 18.95 117.752 19.51C118.206 20.0633 118.539 20.7033 118.752 21.43C118.966 22.15 119.029 22.9167 118.942 23.73H111.232C111.319 24.19 111.486 24.6067 111.732 24.98C111.986 25.3467 112.306 25.6367 112.692 25.85C113.086 26.0633 113.522 26.1733 114.002 26.18C114.509 26.18 114.969 26.0533 115.382 25.8C115.802 25.5467 116.146 25.1967 116.412 24.75L118.522 25.24C118.122 26.1267 117.519 26.8533 116.712 27.42C115.906 27.98 115.002 28.26 114.002 28.26ZM111.162 22.14H116.842C116.776 21.66 116.606 21.2267 116.332 20.84C116.066 20.4467 115.729 20.1367 115.322 19.91C114.922 19.6767 114.482 19.56 114.002 19.56C113.529 19.56 113.089 19.6733 112.682 19.9C112.282 20.1267 111.949 20.4367 111.682 20.83C111.422 21.2167 111.249 21.6533 111.162 22.14ZM125.541 28.26C124.621 28.26 123.781 28.0233 123.021 27.55C122.268 27.0767 121.665 26.4433 121.211 25.65C120.765 24.85 120.541 23.9667 120.541 23C120.541 22.2667 120.671 21.5833 120.931 20.95C121.191 20.31 121.548 19.75 122.001 19.27C122.461 18.7833 122.995 18.4033 123.601 18.13C124.208 17.8567 124.855 17.72 125.541 17.72C126.308 17.72 127.011 17.88 127.651 18.2C128.291 18.5133 128.838 18.95 129.291 19.51C129.745 20.0633 130.078 20.7033 130.291 21.43C130.505 22.15 130.568 22.9167 130.481 23.73H122.771C122.858 24.19 123.025 24.6067 123.271 24.98C123.525 25.3467 123.845 25.6367 124.231 25.85C124.625 26.0633 125.061 26.1733 125.541 26.18C126.048 26.18 126.508 26.0533 126.921 25.8C127.341 25.5467 127.685 25.1967 127.951 24.75L130.061 25.24C129.661 26.1267 129.058 26.8533 128.251 27.42C127.445 27.98 126.541 28.26 125.541 28.26ZM122.701 22.14H128.381C128.315 21.66 128.145 21.2267 127.871 20.84C127.605 20.4467 127.268 20.1367 126.861 19.91C126.461 19.6767 126.021 19.56 125.541 19.56C125.068 19.56 124.628 19.6733 124.221 19.9C123.821 20.1267 123.488 20.4367 123.221 20.83C122.961 21.2167 122.788 21.6533 122.701 22.14Z" fill="#FFCC00"/>
</svg>
            </div>
            <div className='w-[300px] mt-[22px] border border-customWhite2 '></div>
            <div className='ml-[32px] mt-[20px]'><p className='text-[20px] opacity-[50%]'>MENU</p></div>
            <div className='flex flex-col h-[887px] justify-between'>
            <div className='flex flex-col ml-[32px] mt-[18px] h-[332px] justify-evenly'>
                {
                    options.map((option)=>(
                        <div className='flex items-center cursor-pointer'>{option.image}
                        <p className='opacity-[50%] ml-[10px]'>{option.name}</p>
                        </div>
                        
                    ))
                }
            </div>
            <div className='flex flex-col ml-[32px] mb-[20px] justify-evenly cursor-pointer'>
            <div className='flex items-center '><IoInformationCircleOutline size={23} />
                        <p className='opacity-[50%] ml-[10px]'>Help and Support</p>
                        </div>
                        <div className='flex items-center mt-2'><TbLogout size={23} />
                       <Link to='/login'> <p className='opacity-[50%] ml-[10px]'>Logout</p></Link>
                        </div>

            </div>
            </div>
        </div>
        <div className='flex flex-col ml-[80px] mr-[30px]  w-[1200px] bg-white'>
            <div className='flex mt-[44px] w-[1110px] items-center justify-between'>
                <div className='flex items-center w-[177px] h-[29px]'>
                <MdOutlineEdit size={28} />
                <p className='text-[25px] font-bold ml-[10px]'>Profile</p>
                </div>
                <div className='flex'>
                <FaBell />
                </div>
            </div>
            <div className='flex mt-[50px]'>
                <div className='flex flex-col'>
                    <div className='flex justify-center'>
                        <img className='border rounded-full h-[165px] w-[160px] ' src={profile_pic} alt='profile_pic'/>
                    </div>
                    <div className='flex flex-col w-[372px] h-[354px] mt-[10px]'>
                        <p className='font-bold text-[15.56px]'>About</p>
                        <div className='bg-customWhite h-[328px] flex'>
                            <p className='text-[14.36px] mt-[10px] ml-[15px] text-customBlack'>Mehrab Bozorgi</p>
                        </div>
                    </div>
                    <div className='flex flex-col mt-[8px] w-[372px] h-[131px]'>
                    <p className='font-bold text-[15.56px]'>Pricing</p>
                    <div className='flex w-[372px] h-[108px] bg-customWhite justify-between '>
                        <div className='flex flex-col text-customBlack p-2 text-[14.36px]'>
                            <p>Thrice a week</p>
                            <p>Twice a week</p>
                            <p className='text-[14.36px]'>Monday to Friday</p>
                            <p className='text-[14.36px]'>Elderly Batch</p>
                        </div>
                        <div className='h-[108px] border border-customWhite2 w-auto '></div>
                        <div className='flex flex-col text-customBlack justify-center items-center w-11'>
                        <p className='text-[14.36px]'>$_</p>
                            <p className='text-[14.36px]'>$_</p>
                            <p className='text-[14.36px]'>$_</p>
                            <p className='text-[14.36px]'>$_</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className='flex flex-col w-[524px]  ml-[30px]'>
                <div className='flex flex-col h-[64.48px] w-[522.1px]'>
                <p className='font-bold text-[15.56px]'>Name</p>
                <input type='text' value='Mehrab Bozorgi' disabled className='h-[41.67px] text-[14.36px] text-customBlack  bg-customWhite rounded-lg mt-2 p-4 cursor-not-allowed'/>
            </div>
            <div className='flex flex-col h-[64.48px] w-[522.1px] mt-2'>
                <p className='font-bold text-[15.56px]'>Email</p>
                <input type='email' value='MehrabBozorgi@gmail.com' className='h-[41.67px] text-[14.36px] text-customBlack  bg-customWhite rounded-lg mt-2 p-4 '/>
            </div>
            <div className='flex flex-col h-[64.48px] w-[522.1px] mt-2'>
                <p className='font-bold text-[15.56px]'>Contact Number</p>
                <input type='number' value='5877937275' className='h-[41.67px] text-[14.36px] text-customBlack  bg-customWhite rounded-lg mt-2 p-4 '/>
            </div>
            <div className='flex mt-2'>
                <div className='flex flex-col h-[64.63px] w-[242.37px]'>
                <p className='font-bold text-[15.56px]'>Gender</p>
                <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        Options
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button onClick={() => handleItemClick('Item 1')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Item 1
            </button>
            <button onClick={() => handleItemClick('Item 2')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Item 2
            </button>
            <button onClick={() => handleItemClick('Item 3')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Item 3
            </button>
          </div>
        </div>
      )}
    </div>
                </div>
                <div className='flex flex-col h-[64.63px] w-[242.37px] ml-9'>
                <p className='font-bold text-[15.56px]'>DOB</p>
                <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none"
      >
        Options
        <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <button onClick={() => handleItemClick('Item 1')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Item 1
            </button>
            <button onClick={() => handleItemClick('Item 2')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Item 2
            </button>
            <button onClick={() => handleItemClick('Item 3')} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left">
              Item 3
            </button>
          </div>
        </div>
      )}
    </div>
                </div>
                
            </div>
            <div className='flex flex-col h-[64.48px] w-[522.1px] mt-2'>
                <p className='font-bold text-[15.56px]'>User Id</p>
                <input type='text' value='user_01' className='h-[41.67px] text-[14.36px] text-customBlack  bg-customWhite rounded-lg mt-2 p-4 '/>
            </div>
            <div className='flex flex-col h-[64.48px] w-[522.1px] mt-2'>
                <p className='font-bold text-[15.56px]'>Password</p>
                <input type='number' value='5877937275' className='h-[41.67px] text-[14.36px] text-customBlack  bg-customWhite rounded-lg mt-2 p-4 '/>
            </div>
            <div className='flex flex-col h-[125.84px] w-[524px] mt-2'>
                <p className='font-bold text-[15.56px]'>Class Categories</p>
                <div className='h-[103px] text-[14.36px] text-customBlack  bg-customWhite rounded-lg mt-2 p-4 '>
                    <p className='text-[14.36px] text-customBlack'>Yoga for flexibility, elderly, beginner level classes for all.</p>
                </div>
            </div>
            <div className='flex flex-col h-[125.84px] w-[524px] mt-2'>
                <p className='font-bold text-[15.56px]'>Available Timings</p>
                <div className='h-[103px] text-[14.36px] text-customBlack  bg-customWhite rounded-lg mt-2 p-4 '>
                    <p className='text-[14.36px] text-customBlack'>7-10 AM, 4-7 PM</p>
                </div>
            </div>
            <div className='flex items-center justify-end mt-[50px]'>
            <button className=' flex justify-evenly items-center w-[137px] h-[41.86px] border border-yellow-400 rounded-md text-yellow-400 font-bold mr-[20px]'>Cancel</button>
            <button className=' flex justify-evenly items-center w-[137px] h-[41.86px] bg-yellow-500  rounded-md text-black font-bold'  onClick={openModal}>Save</button>
        </div>
                </div>
            </div>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className='flex flex-col'>
          <p>Verify via Email</p>
          <input type='email' className='h-[35px] bg-customWhite border border-customBlack rounded-md'/>
        </div>
        <p className=' text-center'>OR</p>
        <div className='flex flex-col'>
          <p>Verify via Phone No.</p>
          <input type='number' className='h-[35px] bg-customWhite border border-customBlack rounded-md'/>
        </div>
        <div>
        <button className=' flex justify-evenly items-center w-[100px] h-[41.86px] bg-yellow-500  rounded-md text-black font-bold mt-4'  onClick={openModal}>Save</button>
        </div>
      </Modal>
    </div>
  )
}

export default Profile