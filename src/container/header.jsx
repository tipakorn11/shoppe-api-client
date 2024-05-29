import React from "react"

export default function TheHeader() {
  return (
    <div className="bg-gradient-to-b from-[#f53d2d] to-[#f63]">
      <div className="flex-column sm:flex justify-between pt-2 text-white text-sm">
        <div className="flex divide-x-2 *:px-2 divide-slate-100/25 ">
          <div>Seller Center</div>
          <div>เริ่มต้นขายสินค้า</div>
          <div>ดาวโหลด</div>
          <div className="flex *:px-2">
            ติดตามเราบน
            <i className="pi pi-facebook"></i>
            <i className="pi pi-instagram"></i>
            <i className="pi pi-whatsapp"></i>
          </div>
        </div>

        <div className="flex *:px-2 ">
          <div>
            <i className="pi pi-bell px-1"></i>การแจ้งเตือน
          </div>
          <div>
            <i className="pi pi-question-circle px-1"></i>ช่วยเหลือ
          </div>
          <div>
            <i className="pi pi pi-globe px-1"></i>ไทย
          </div>
          <div>
            <i className="pi pi-user px-1"></i>tipakorn jomko
          </div>
        </div>
      </div>

      <div className="flex">
        <img src="/image/shopee-logo-white.png" alt="" width={162} height={50} />
        <div className="group relative cursor-pointer m-auto w-full px-6">
          <div className="flex items-center justify-between space-x-5 bg-white px-4 rounded-sm h-10">
            <input className="menu-hover  font-medium text-slate-500/80  text-sm lg:mx-4 outline-none" placeholder="หมา"></input>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </span>
          </div>

          <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Sunday</a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Monday</a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Tuesday</a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Wednesday</a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Thursday</a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Friday</a>

            <a className="my-2 block border-b border-gray-100 py-1 font-semibold text-gray-500 hover:text-black md:mx-2">Saturday</a>
          </div>
        </div>
      </div>
    </div>
  )
}
