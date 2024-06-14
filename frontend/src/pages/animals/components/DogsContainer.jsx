import React, { useState } from "react";
import DropDown from "./DropDown";
import AnimalCard from "./AnimalCard";
import { pets } from "../../../data/pets-data";

const DogsContainer = () => {
  const [currPet, setCurrPet] = useState("cat");
  return (
    <div className="pt-6 flex flex-col gap-10 mx-10">
      <div className="flex gap-8">
        <h1
          onClick={() => setCurrPet("cat")}
          className={`text-2xl text-slate-600 font-semibold cursor-pointer hover:underline ${
            currPet === "cat" && "underline text-purple-600"
          }`}
        >
          Cats
        </h1>

        <h1
          onClick={() => setCurrPet("dog")}
          className={`text-2xl text-slate-600 font-semibold cursor-pointer hover:underline ${
            currPet === "dog" && "underline text-purple-600"
          }`}
        >
          Dogs
        </h1>
      </div>
      <div className="flex gap-24 justify-center ">
        <DropDown />
        <DropDown title="sex" data={["Male", "Female"]} />
        <DropDown title="age" data={[1, 2, 3, 4, 5, 6]} />
        <DropDown
          title="color"
          data={["White", "Grey", "Black", "Multi-colored"]}
        />
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        {pets.map((pet) => {
          return (
            <div key={pet.id}>
              <AnimalCard
                title={pet.title}
                image={pet.image}
                description={pet.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DogsContainer;
