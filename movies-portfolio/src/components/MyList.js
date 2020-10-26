import React from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";

const StledMyList = styled.div`
  & {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin: 2%;
  }

  .list {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;

    border: 2px solid white;
    -moz-box-shadow: 10px 10px 50px black;
    -webkit-box-shadow: 10px 10px 50px black;
    box-shadow: 10px 10px 50px black;
    max-width: 15%;
    margin: 1%;
  }

  h2 {
    text-align: center;
    width: 73%;
    height: 7vh;
  }

  button {
    background: red;
    border: none;
    outline: none;
    cursor: pointer;
    margin: 1%;
    padding: 2%;
  }

  p {
    font-size: 3rem;
  }
`;

const MyList = ({ myList, setMyList }) => {
  const onRemoveClick = (name) => {
    const newList = myList.filter((cur) => cur.name !== name);

    setMyList([...newList]);

    console.log(myList);
  };

  const renderedmyList = myList.map((cur, index) => {
    return (
      <AnimatePresence>
        <motion.div
          exit={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 0.5 }}
          key={index}
          className="list"
        >
          <img src={cur.url} />
          <h2>{cur.name}</h2>
          <button onClick={() => onRemoveClick(cur.name)}>Remove</button>
        </motion.div>
      </AnimatePresence>
    );
  });

  return (
    <StledMyList>
      {renderedmyList.length !== 0 ? (
        renderedmyList
      ) : (
        <p>Currently empty, add some movies!</p>
      )}
    </StledMyList>
  );
};

export default MyList;
