import React, { Children, createRef, useEffect } from "react";
import { Flipped } from "react-flip-toolkit";
import { DropdownRoot, DropdownBackground, AltBackground, InvertedDiv } from "./components";

import FadeContents from "./fadeContent";

const getFirstDropdownSectionHeight = (el: any) => {
  if (!el || !el.querySelector || !el.querySelector("*[data-first-dropdown-section]")) return 0;
  return el.querySelector("*[data-first-dropdown-section]").offsetHeight;
};

const updateAltBackground = ({ altBackground, prevDropdown, currentDropdown }: any) => {
  const prevHeight = getFirstDropdownSectionHeight(prevDropdown);
  const currentHeight = getFirstDropdownSectionHeight(currentDropdown);

  const immediateSetTranslateY = (el: any, translateY: any) => {
    el.style.transform = `translateY(${translateY}px)`;
    el.style.transition = "transform 0s";
    requestAnimationFrame(() => (el.style.transitionDuration = ""));
  };

  if (prevHeight) {
    // transition the grey ("alt") background from its previous height to its current height
    immediateSetTranslateY(altBackground, prevHeight);
    requestAnimationFrame(() => {
      altBackground.style.transform = `translateY(${currentHeight}px)`;
    });
  } else {
    // just immediately set the background to the appropriate height
    // since we don't have a stored value
    immediateSetTranslateY(altBackground, currentHeight);
  }
};

const DropdownContainer = ({ children, direction, animatingOut, duration }: any) => {
  const currentDropdownEl = createRef();
  const prevDropdownEl = createRef();

  let altBackgroundEl: any;

  const [currentDropdown, prevDropdown] = Children.toArray(children);

  useEffect(() => {
    updateAltBackground({
      altBackground: altBackgroundEl,
      prevDropdown: prevDropdownEl.current,
      currentDropdown: currentDropdownEl.current,
      duration: duration,
    });
  }, []);

  return (
    <DropdownRoot duration={duration} direction={direction} animatingOut={animatingOut}>
      <Flipped flipId="dropdown-caret">
        <span className="w-0 h-0 border-x-8 border-x-transparent border-b-[16px] border-b-[#1E2A37]"></span>
      </Flipped>

      <Flipped flipId="dropdown">
        <DropdownBackground>
          <Flipped inverseFlipId="dropdown">
            <InvertedDiv>
              <AltBackground ref={(el) => (altBackgroundEl = el)} duration={duration} />
              <FadeContents direction={direction} duration={duration} ref={currentDropdownEl}>
                {currentDropdown}
              </FadeContents>
            </InvertedDiv>
          </Flipped>

          <Flipped inverseFlipId="dropdown" scale>
            <InvertedDiv absolute>
              {prevDropdown && (
                <FadeContents
                  animatingOut
                  direction={direction}
                  duration={duration}
                  ref={prevDropdownEl}
                >
                  {prevDropdown}
                </FadeContents>
              )}
            </InvertedDiv>
          </Flipped>
        </DropdownBackground>
      </Flipped>
    </DropdownRoot>
  );
};

export default DropdownContainer;
