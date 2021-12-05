import React from "react";
import FoodImg from '../BlogContent/foodImg.webp';

function FoodLink(props) {
  return (
    <div className="SubLinkContents">
      <div className="NavbarInnerHeadings">
      Wait, What? Viral Hack Shows How To Cook Different Pasta In The Same Pan
      </div>
      <hr className="horizontalLineStyling" />
      <div>
        <img src={FoodImg} alt="" className="reactCoverImg"></img>
      </div>
      <div>
        <p>
        Here Are 5 Delicious And Easy Pasta Recipes For The Pasta-Lover In You:1. Egg PastaMake a simple yet delicious meal with this easy pasta recipe. For this dish, you'll need penne pasta, eggs, vegetables, ginger-garlic paste, and spices.2. Butter Chicken PastaGet the best of both worlds in one dish with the Indian flavours of butter chicken and the zing of Italian pasta.3. Chicken LasagnaIf you want to try a different kind of pasta recipe, here's the recipe for you. Layer pasta sheets with juicy chicken filling for this dish.4. Pasta PrimaveraThis recipe is rich in vegetables, mushrooms, and peas. Make it a cheesy affair and let the wholewheat pasta burst with flavours.5. Chicken Caesar Pasta SaladWant a delicious spin on salads? Toss some penne pasta into crunchy lettuce and juicy chicken chunks. Drizzle them with pasta sauce and cheese.
        </p>
      </div>
    </div>
  );
}

export default FoodLink;
