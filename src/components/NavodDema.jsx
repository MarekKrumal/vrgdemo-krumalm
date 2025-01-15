export default function App() {
  return (
    <div className=" flex items-center justify-center p-4">
      <div className="max-w-4xl  shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-center 0 mb-6">
          VRG Vstupní Demo
        </h1>
        <p className=" leading-relaxed text-justify space-y-4">
          Za využití frameworku React a knihovny OpenLayers vytvořte jednoduchou
          webovou aplikaci, která bude umět:
        </p>
        <ul className="list-disc list-inside mt-4 ">
          <li>Zobrazit mapu z online zdroje.</li>
          <li>
            Poskytovat následující nástroje:
            <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
              <li>
                Měření dálky: gzobrazení délky a azimutu zadané úsečky v mapě.
              </li>
              <li>
                Měření úhlu: zobrazení velikosti úhlu svíraného dvěma úsečkami s
                jedním společným bodem.
              </li>
              <li>Kreslení a modifikace: nakreslené polyčáry.</li>
            </ul>
          </li>
        </ul>
        <p className=" leading-relaxed text-justify space-y-4 mt-4">
          Parametry potřebné pro uvedenou funkcionalitu je možné zadat pomocí
          myši v mapě anebo číselně pomocí vstupních ovládacích prvků. Tzn. je
          nutné vytvořit a vhodně použít input controly pro zadání, zobrazení a
          editaci úhlu a vzdálenosti číselnými hodnotami s tím, že bude možné
          přepínat jednotky (např. kilometry/míle, stupně/radiány).
        </p>
        <p className="leading-relaxed text-justify space-y-4 mt-4">
          Vizuální stránka, způsob a míra komplexity zvoleného řešení je na
          volbě řešitele. Vypracovanou aplikaci je vhodné opatřit návodem na
          spuštění (to by mělo být co nejjednodušší).
        </p>
      </div>
    </div>
  );
}
