import MapComponent from "./MapComponent";

export default function MainPage() {
  return (
    <div className="p-4 md:p-6 lg:pl-12">
      <div className="shadow-lg p-4 md:p-8">
        <h1 className="text-lg text-center md:text-2xl font-bold ">MAPA</h1>
        <div className="mt-4 ml-80">
          <MapComponent />
        </div>
      </div>
    </div>
  );
}
