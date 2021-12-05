import React from "react";
import JoshuaPic from './joshuaAdventureImg1.jpg';

function LatestLink(props) {
  return (
    <div className="SubLinkContents">
      <div className="NavbarInnerHeadings">
      Joshua tree
      </div>
      <hr className="horizontalLineStyling" />
      <div>
        <img src={JoshuaPic} alt="" className="reactCoverImg"></img>
      </div>
      <div>
        <p>
        We will start at Joshua Tree National Park. This is a desert so if your visit is during the summer, be prepared for some pretty serious heat. The name Joshua tree comes from the infamous trees that litter the entire desert. Joshua Trees were named after the biblical story of Joshua reaching up to god. It was said the tree looked like the character Joshua.
        </p>
        <p>This place is probably prettiest at sunset, sunrise, or at night. The weather is also nicest at these times. I would very strongly recommend staying at Joshua Tree for one night. If camping is your speed, I would suggest that as your first option. If you choose to camp I am most familiar with Black Rock campsite which is only a few minutes from a park entrance and as well as grocery stores if needed. However, if you prefer the luxuries of travel, there are a couple of really nice resorts throughout the park. These can also get a little pricey so if you would prefer a place just for sleeping, I would recommend finding a hotel near the park. Palm Springs is a great option.</p>
      </div>
    </div>
  );
}

export default LatestLink;
