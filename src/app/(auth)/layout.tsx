import Image from "next/image"

export default function layout({ children } : { children: React.ReactNode }) {
  return (
    <div className="grid lg:grid-cols-2 h-full items-center justify-center">
      <div className="flex items-center justify-center">
        {children}
      </div>
      <div className=" hidden lg:flex lg:bg-slate-300 h-full justify-center items-center lg:flex-col">
        <Image src="/logo.svg" alt="Logo Adgear Cars" width={80} height={80} />
        <h1 className="text-lg font-semibold mt-3">
          Adgear Cars
        </h1>
      </div>
    </div>
  )
}
