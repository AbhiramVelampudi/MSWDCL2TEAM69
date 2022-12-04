import { BigHead } from "@bigheads/core";

import {
  generateFakerAvatar,
  generateUnsplashImage,
  generateFakerAnimal,
  generateDiceBearGridy,
  generateDiceBearAvataaars,
  generateDiceBearBottts
} from "./bigheads";
import { getRandomOptions } from "./bigheads";

export default function App() {
  const array = [0, 0, 0, 0, 0, 0];

  return (
    <div style={{ display: "flex", height: "100%" }}>
      {array.map((_, index) => (
        <div
          key={index}
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <img src={generateFakerAvatar()} width="200" alt="faker_avatar" />
          {/* <img src={generateFakerAnimal()} width="200" alt="animal_avatar" />
          <img
            src={generateUnsplashImage()}
            width="200"
            alt="unsplash_avatar"
          /> */}
          <img
            src={generateDiceBearGridy(Math.random())}
            width="200"
            alt="bottts_avatar"
          />
          <img
            src={generateDiceBearBottts(Math.random())}
            width="200"
            alt="bottts_avatar"
          />
          <div style={{ width: "200px" }}>
            <BigHead {...getRandomOptions()} />
          </div>
          <img
            src={generateDiceBearAvataaars(Math.random())}
            width="200"
            alt="avataaars_avatar"
          />
          <img
            src={generateDiceBearBottts(Math.random())}
            width="200"
            alt="bottts_avatar"
          />
        </div>
      ))}
    </div>
  );
}
