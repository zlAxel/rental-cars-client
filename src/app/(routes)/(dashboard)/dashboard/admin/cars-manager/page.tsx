import ButtonAddCar from "./components/ButtonAddCar/ButtonAddCar";

export default function CarsManagerPage() {
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold text-gray-800">
          Administra tus vehículos
        </h2>
        <ButtonAddCar />
      </div>
    </div>
  )
}
