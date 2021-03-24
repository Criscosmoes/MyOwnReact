import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const StyledSpinner = styled.div`
  & {
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .circle-container {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 30%;
  }

  .loading-circle {
    display: block;
    width: 5rem;
    height: 5rem;
    background: white;
    border-radius: 50%;
  }



  

  @media (max-width: 500px){

    .circle-container {
      display: flex;
      justify-content: space-around;
      align-items: center;
      width: 50%;
    }

    .loading-circle {
      display: block;
      width: 5rem;
      height: 5rem;
      background: white;
      border-radius: 50%;
    }



  }



`;

const loadingContainerVariants = {
    start: {
        transition: {
            staggerChildren: 0.1
        }
    }, 
    end: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const loadingCircleVariants = {

    start: {
        y: '0%'
    }, 
    end: {
        y: '100%'
    }
}; 

const loadingCircleTransition = {
    duration: 0.3, 
    yoyo: Infinity, 
    ease: "easeInOut", 
}

const Spinner = () => {
  return (
    <StyledSpinner>
      <motion.div
        className="circle-container"
        variants={loadingContainerVariants}
        initial="start"
        animate="end"
      >
        <motion.span
          className="loading-circle"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className="loading-circle"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
        <motion.span
          className="loading-circle"
          variants={loadingCircleVariants}
          transition={loadingCircleTransition}
        />
      </motion.div>
    </StyledSpinner>
  );
};

export default Spinner;
