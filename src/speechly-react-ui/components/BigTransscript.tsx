import React, { useEffect } from "react";
import { SpeechSegment, useSpeechContext } from "@speechly/react-client";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";

type ITaggedWord = {
  word: string;
  serialNumber: number;
  entityType: string | null;
};

const BigTransscript: React.FC = (props) => {
  const { segment } = useSpeechContext();
  const [springProps, setSpringProps] = useSpring(() => ({
    effectOpacity: 1,
  }));

  useEffect(() => {
    if (segment?.isFinal) {
      setSpringProps({
        effectOpacity: 0,
        delay: 2000,
        config: { tension: 200 },
      });
    } else {
      setSpringProps({
        effectOpacity: 1,
        config: { tension: 500 },
      });
    }
  }, [segment, setSpringProps]);

  if (!segment) return <BigTransscriptDiv className="BigTransscript"/>;

  // Assign words to a new list with original index (segments.words array indices may not correlate with entity.startIndex)
  let words: ITaggedWord[] = [];
  segment.words.forEach((w) => {
    words[w.index] = { word: w.value, serialNumber: w.index, entityType: null };
  });

  // Tag words with entities
  segment.entities.forEach((e) => {
    words.slice(e.startPosition, e.endPosition).forEach((w) => {
      w.entityType = e.type;
    });
  });

  // Remove holes from word array
  words = words.flat();
  // console.log(words);

  // Combine words of same type into HTML element snippets
  return (
    <BigTransscriptDiv
    className="BigTransscript"
    style={{ opacity: springProps.effectOpacity }}
  >

      {words.map<React.ReactNode>((w, index) => {
        const key = `${segment.contextId}/${segment.id}/${index}`;
        return (
          <span key={key}>
            <TransscriptItem entityType={w.entityType}>
              {w.word}
            </TransscriptItem>{" "}
          </span>
        );
      })}
    </BigTransscriptDiv>
  );
};

const TransscriptItem: React.FC<{ entityType: string | null }> = (props) => {
  const [springProps] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 500 },
  }));

  const entityProps = useSpring({
    entityEffect: props.entityType !== null ? 1 : 0,
    config: { duration: 250 },
  });

  return (
    <TransscriptItemDiv
      className={`${props.entityType ? "Entity" : ""} ${
        props.entityType ? props.entityType : ""
      }`}
    >
      <TransscriptItemBgDiv style={springProps} />
      <TransscriptItemContent
        style={{
          ...springProps,
          transform: entityProps.entityEffect.interpolate(
            (x) => `translate3d(0, ${Math.sin(x * Math.PI) * -5}px, 0)`
          ),
        }}
      >
        {props.children}
      </TransscriptItemContent>
    </TransscriptItemDiv>
  );
};

const BigTransscriptDiv = styled(animated.div)`
  white-space: "pre";
`;

const TransscriptItemDiv = styled(animated.div)`
  position: relative;
  white-space: pre;
  display: inline-block;
`;

const TransscriptItemContent = styled(animated.div)`
  z-index: 1;
`;

const TransscriptItemBgDiv = styled(animated.div)`
  position: absolute;
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  margin: -0.5rem;
  padding: 0.5rem;
  background-color: #000;
  z-index: -1;
`;

export default BigTransscript;
