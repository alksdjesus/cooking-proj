import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import { Container, Stars, Radio, Rating } from "./ratingStyles";
const Rate = () => {
  const [rate, setRate] = useState(0);
  return (
    <Container>
      <Stars>
        {[...Array(5)].map((item, index) => {
          const givenRating = index + 1;
          return (
            <label>
              <Radio
                type="radio"
                value={givenRating}
                onClick={() => {
                  setRate(givenRating);
                }}
              />
              <Rating>
                <FaStar
                  color={
                    givenRating < rate || givenRating === rate
                      ? "000"
                      : "rgb(192,192,192)"
                  }
                />
              </Rating>
            </label>
          );
        })}
      </Stars>
    </Container>
  );
};
  
export default Rate;