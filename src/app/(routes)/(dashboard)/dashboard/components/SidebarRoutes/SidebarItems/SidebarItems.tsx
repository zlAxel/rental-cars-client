import { cn } from "@/lib/utils";
import { dataAdminSidebar, dataGeneralSidebar } from "../SidebarRoutes.data";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Separator } from "@/components/ui/separator";

export default function SidebarItems() {
  const pathname = usePathname();

  const activePath = (path: string) => {
    return pathname === path ? "bg-slate-400/20 font-semibold cursor-default" : "";
  }
  return (
    <>
      <p className="mb-2 text-slate-500">GENERAL</p>
      <ul>
        {
          dataGeneralSidebar.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className={cn(`flex gap-x-2 mt-2 text-slate-700 text-sm items-center hover:bg-slate-400/20 hover:font-semibold p-2 rounded-lg cursor-pointer`, activePath(item.href))}>
                <item.icon className="w-5 h-5" strokeWidth={1} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))
        }
      </ul>

      <Separator className="my-4" />

      <p className="mb-2 text-slate-500">ADMIN</p>
      <ul>
        {
          dataAdminSidebar.map((item, index) => (
            <li key={index}>
              <Link href={item.href} className={cn(`flex gap-x-2 mt-2 text-slate-700 text-sm items-center hover:bg-slate-400/20 hover:font-semibold p-2 rounded-lg cursor-pointer`, activePath(item.href))}>
                <item.icon className="w-5 h-5" strokeWidth={1} />
                <span>{item.label}</span>
              </Link>
            </li>
          ))
        }
      </ul>
    </>
  )
}
