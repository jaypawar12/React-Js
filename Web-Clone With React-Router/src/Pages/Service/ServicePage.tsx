import Service from "./Service";

export default function ServicePage() {
  return (
    <>
      <div
        className="w-full py-20 bg-cover bg-center"
        style={{ backgroundImage: "url('../Public/img/bg.jpg')" }}
      >
        <div className="max-w-6xl mx-auto text-center py-8">
          <h1 className="text-4xl md:text-6xl font-bold text-black">
            Service
          </h1>
        </div>
      </div>
      <Service/>
    </>
  )
}
