import { Calendar, Car, Heart, SquareGanttChart } from "lucide-react";

export const dataGeneralSidebar = [
  {
    icon: Car,
    label: "Vehículos",
    href: "/dashboard",
  },
  {
    icon:  Calendar,
    label: "Reservar vehículo",
    href: "/reserves",
  },
  {
    icon: Heart,
    label: "Favoritos",
    href: "/favorites",
  }
];

export const dataAdminSidebar = [
  {
    icon: SquareGanttChart,
    label: "Manage your cars",
    href: "/dashboard/admin/cars-manager",
  },
  {
    icon: Calendar,
    label: "All reserves",
    href: "/dashboard/admin/reserves-admin",
  },
];