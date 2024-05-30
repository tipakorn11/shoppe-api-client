import React, { useState, useEffect } from "react"

export default function TheContent() {
  const [state, setState] = useState({
    products: [],
  })
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=20&skip=10&select=title,price")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.products)
        setState({ ...state, products: data.products }) // Log the data here
      })
      .catch((error) => {
        console.error(error) // Handle any errors
      })
  }, [])
  return (
    <div className="flex justify-center 2xl:px-[20rem] min-h-screen bg-slate-100/50">
      <div className="grid grid-cols-3 lg:grid-cols-4 pt-4  gap-4">
        {state.products?.map((item, idx) => (
          <div
            key={idx}
            className="px-4 h-[10rem] w-[8rem] md:h-[18rem] md:w-[14rem] bg-white hover:shadow-md cursor-pointer hover:mt-[-0.3rem] rounded-sm relative"
          >
            <div className="flex flex-col  ">
              <img src="/image/shoppe-md.png" alt="" className="h-[6rem] md:h-[12rem]" />
              <label className=" text-ellipsis  line-clamp-1 md:line-clamp-2 ">{item.title.toUpperCase()}</label>
              <label className="absolute bottom-2 left-2 text-xl text-[#fb5533]">{`฿ ${item.price}`.toUpperCase()}</label>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
