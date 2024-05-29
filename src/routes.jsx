// routes.jsx
import React from "react"
const routes = [
  { path: "/", key: "หน้าหลัก", name: "หน้าหลัก", exact: true, component: React.lazy(() => import("./view/home")) },
]
export default routes
