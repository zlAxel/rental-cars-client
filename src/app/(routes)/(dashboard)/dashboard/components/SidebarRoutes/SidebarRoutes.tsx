"use client"

import { useAuth } from "@clerk/nextjs"
import SidebarItems from "./SidebarItems/SidebarItems";

export default function SidebarRoutes() {
  const { userId } = useAuth();
  return (
    <div className="flex flex-col justify-between h-full">
      <div className="flex flex-col justify-between h-full">
        <div>
          <div className="p-2 md:p-6">
            <SidebarItems />
          </div>
        </div>
      </div>
    </div>
  )
}