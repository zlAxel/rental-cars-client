import Sidebar from "./dashboard/components/Sidebar/Sidebar";

export default function LayoutDashboard( { children } : { children: React.ReactNode }) {
  return (
    <div className="w-full h-full flex">
      <div className="hidden h-full xl:block w-80 xl:fixed">
        <Sidebar />
      </div>
      <div className="h-full w-full xl:ml-80">
        Navbar...
        <div className="p-6 h-max">
          {children}
        </div>
      </div>
    </div>
  )
}
