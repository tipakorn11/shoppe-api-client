import React, { useState } from "react"

export default function TheHeader() {
  const [state, setState] = useState({
    dropdownSearch: "",
    dropdownitem: ["ปากกา", "พนักพิง", "เสื้อกล้าม", "คีย์บอร์ด", "RK", "เมาส์ไร้สาย", "mouse glorius"],
  })

  return (
    <div className="bg-gradient-to-b from-[#f53d2d] to-[#f63] 2xl:px-[20rem]">
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

      <div className="flex items-center px-6">
        <img src="/image/shopee-logo-white.png" alt="" width={162} height={50} />
        <div className="group  relative cursor-pointer m-0 w-full px-4 ">
          <div className="md:flex hidden  items-center justify-between space-x-5 bg-white p-[0.2rem] rounded-sm h-10">
            <input className="menu-hover  font-medium text-slate-500/80  text-sm lg:mx-4 outline-none" placeholder="ค้นหาในแคมเปญ"></input>
            <div className="h-[2.3rem]">
              <div className="flex justify-center items-center  bg-[#fb5533] rounded-sm  active:bg-violet-700 h-full text-center w-14">
                <i className="pi pi-search"></i>{" "}
              </div>
            </div>
          </div>
          <div className="flex justify-center  md:hidden">
            <i className=" text-white pi pi-search"></i>
          </div>

          <div className="invisible absolute z-50 flex w-full flex-col bg-gray-100 py-1 px-4 text-gray-800 shadow-xl group-hover:visible">
            {state.dropdownitem.map((item, idx) => (
              <a key={idx} className="my-2 block border-b py-1  text-gray-500 hover:text-black hover:bg-gray-800/10 md:mx-2">
                {item}
              </a>
            ))}
          </div>
        </div>
        <i className=" pi pi-shopping-cart text-white text-2xl"></i>
      </div>
      <div className="justify-center hidden md:flex *:px-2">
        {state.dropdownitem?.map((item, idx) => (
          <label key={idx} className="text-white texet-sm cursor-pointer hover:text-slate-200">
            {item}
          </label>
        ))}
      </div>
    </div>
  )
}
