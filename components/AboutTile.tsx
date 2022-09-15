import React from "react";

const AboutTile = () => {
  return <div className="max-w-5xl  mx-auto my-8 ">
    <div className="bg-black text-white rounded-xl p-8 h-full w-full">
      <div className="max-w-3xl text-left">
        <h1 className="text-3xl text-orange-500 mb-5 font-bold">Lady-hotel</h1>
        <p className="py-2 text-sm text-slate-100 font-thin">L établissement <span className="text-[#21CE99] font-bold">Ladys-hotel</span> vous offre une service impecable pour passer vos sejours dans le bonheurs.</p>
        <p className="py-2 text-base font-thin"> D autres petits plus vous attendent, notamment :</p>
        <ul className="pl-8 list-disc font-semibold">
          <li className="text-orange-500">Parking en libre-service gratuit</li>
          <li >Petit-déjeuner complet (en supplément)</li>
          <li className="text-orange-500">réception ouverte 24 h/24</li>
          <li>distributeur automatique / services bancaires</li>
          <li className="text-orange-500">Salle de banquet, bagagiste/groom et poste informatique</li>
          <li>La connexion Wi-Fi gratuit dans toutes nos chambres</li>
        </ul>
        <p className="py-2 text-sm text-slate-100 font-thin">
          Les 24 chambres, qui sont décorées individuellement,  un coffre-fort (suffisamment grand pour accueillir un ordinateur portable), en plus dautres atouts appréciables, et un système de réglage de la climatisation.</p>
      </div>
    </div>
  </div>;
};

export default AboutTile;
