"use client";
import { ParallaxScroll } from "@/components/ui/ParallaxScroll";

export default function ParallaxScrollComponent() {
  return (
    <ParallaxScroll
      images={images}
      className="bg-white dark:bg-[#222] rounded-xl"
    />
  );
}

const images = [
  "/art_portfolio/animals/animal_1.svg",
  "/art_portfolio/animals/animal_2.svg",
  "/art_portfolio/animals/animal_3.svg",
  "/art_portfolio/animals/animal_4.svg",
  "/art_portfolio/animals/animal_5.svg",
  "/art_portfolio/animals/elephants.svg",
  "/art_portfolio/animals/fox.svg",
  "/art_portfolio/animals/puppy.svg",
  "/art_portfolio/animals/skunk_filled.svg",
  "/art_portfolio/food/decco_8.svg",
  "/art_portfolio/food/food_2.svg",
  "/art_portfolio/food/food_3.svg",
  "/art_portfolio/food/food_4.svg",
  "/art_portfolio/food/food_5.svg",
  "/art_portfolio/food/food_6.svg",
  "/art_portfolio/food/food.svg",
  "/art_portfolio/food/pumpkin-pie.svg",
  "/art_portfolio/nature/decco_17.svg",
  "/art_portfolio/nature/leaf.svg",
  "/art_portfolio/nature/snowflake_1.svg",
  "/art_portfolio/nature/snowflake_2.svg",
  "/art_portfolio/plants/dead_cactus_1.svg",
  "/art_portfolio/plants/dead_cactus_2.svg",
  "/art_portfolio/plants/succ_1.svg",
  "/art_portfolio/plants/succ_2.svg",
  "/art_portfolio/plants/succ_3.svg",
  "/art_portfolio/plants/succ_4.svg",
  "/art_portfolio/plants/succ_5.svg",
  "/art_portfolio/plants/succ_6.svg",
  "/art_portfolio/plants/succ_7.svg",
  "/art_portfolio/plants/succ_8.svg",
  "/art_portfolio/space/alien.svg",
  "/art_portfolio/space/astroid.svg",
  "/art_portfolio/space/astronaut.svg",
  "/art_portfolio/space/earth.svg",
  "/art_portfolio/space/moon.svg",
  "/art_portfolio/space/planet.svg",
  "/art_portfolio/space/raygun.svg",
  "/art_portfolio/space/rocket.svg",
  "/art_portfolio/space/telescope.svg",
  "/art_portfolio/space/ufo_tattoo.svg",
  "/art_portfolio/space/ufo.svg",
];
