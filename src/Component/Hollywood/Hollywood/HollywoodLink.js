import React from "react";
import HollyImg from "../Hollywood/hollyImg.jpg";

function HollywoodLink(props) {
  return (
    <div className="SubLinkContents">
      <div className="NavbarInnerHeadings">
        Batman: The Animated Series’ Audio Drama in the Works with Original Cast
      </div>
      <hr className="horizontalLineStyling" />
      <div>
        <img src={HollyImg} alt="" className="reactCoverImg"></img>
      </div>
      <div>
        <p>
          Batman: The Animated Series ran for 85 episodes from 1992-95 and also
          included Mark Hamill as Joker and introduced the world to the show’s
          breakout character, Harley Quinn (Arleen Sorkin). It was set in a
          1940s-style world and embraced the noir nature of the Dark Knight. It
          also launched Conroy as what many consider the definitive Batman voice
          actor, and saw the series jump to the big screen for Batman: Mask of
          the Phantasm. The series is considered one of the great animated comic
          book series, and won the Emmy for outstanding animated program in
          1993. While it is unknown which castmembers might return for the audio
          drama, surviving voice actors include Paul Williams (The Penguin),
          Richard Moll (Two-Face), David Warner (Ra’s Al Ghul), Diane Pershing
          (Poison Ivy), Adrienne Barbeau (Catwoman), Ron Perlman (Clayface),
          Melissa Gilbert (Barbara Gordon) and Loren Lester (Dick Grayson /
          Nightwing). There are multiple Batman audio dramas in the marketplace.
          HBO Max has Batman: The Audio Adventures, starring Jeffrey Wright as
          Batman, while Spotify has the upcoming Batman Unburied, starring
          Winston Duke as the Caped Crusader, with The Dark Knight screenwriter
          David S. Goyer overseeing. Marvel, too, has delved into the audio
          drama space, with Wolverine: The Long Night and Wolverine: The Last
          Trail. Meanwhile, Bruce Timm, the animator behind Batman: The Animated
          Series is developing a separate animated Batman show with J.J. Abrams
          and The Batman filmmaker Matt Reeves. That series bow on HBO Max.
        </p>
      </div>
    </div>
  );
}

export default HollywoodLink;
