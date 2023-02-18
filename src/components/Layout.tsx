import { ReactNode } from "react"
import Header from "./Header"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className=" bg-[f9f9fb] dark:bg-[#0d0e0e] dark:text-gray-200 w-full h-screen">
      <Header />
      {children}
      <div>
      </div>
    </div>
  )
}

export default Layout
