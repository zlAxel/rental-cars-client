"use client"

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { PlusCircle } from "lucide-react";
import { useState } from "react";
import FormAddCar from "../FormAddCar/FormAddCar";


export default function ButtonAddCar() {
  const [openDialog, setOpenDialog] = useState(false);

  return (
    <Dialog open={openDialog}>
      <DialogTrigger asChild>
        <Button variant="outline" onClick={() => setOpenDialog(true)}>
          <PlusCircle className="mr-2 w-4 h-4" />
          Agregar vehículo
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Agregar vehículo</DialogTitle>
          <DialogDescription>
            <FormAddCar />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
