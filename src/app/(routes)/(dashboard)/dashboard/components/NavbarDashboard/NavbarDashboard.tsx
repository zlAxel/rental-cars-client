import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import SidebarRoutes from "../SidebarRoutes/SidebarRoutes"
import LogoDashboard from "../LogoDashboard/LogoDashboard"
import { UserButton } from "@clerk/nextjs"


export default function NavbarDashboard() {
  return (
    <nav className="flex items-center justify-between xl:justify-end w-full h-20 px-2 border-b gap-x-4 md:px-6 bg-background">
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <MenuIcon className="w-6 h-6" />
          </SheetTrigger>
          <SheetContent side="left">
            <LogoDashboard />
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="justify-end">
        <UserButton />
      </div>
    </nav>
  )
}
