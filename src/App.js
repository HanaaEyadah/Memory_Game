import React, { useEffect, useState } from "react";
import "./App.css";
import img1 from "./Images/1.png"
import img2 from "./Images/2.png"
import img3 from "./Images/3.png"
import img4 from "./Images/4.png"
import img5 from "./Images/5.png"
import img6 from "./Images/6.png"
import img7 from "./Images/7.png"
import img8 from "./Images/8.png"



export default function App() {
  
  const [openedCard, setOpenedCard] = useState([]);
  const [matched, setMatched] = useState([]);
  const babyAnimals = [
    { id: 1, name: "1", image: img1},
    { id: 2, name: "2", image: img2 },
    { id: 3, name: "3", image: img3 },
    { id: 4, name: "4", image: img4},
    { id: 5, name: "5", image: img5 },
    { id: 6, name: "6", image: img6 },
    { id: 7, name: "7", image: img7 },
    { id: 8, name: "8", image: img8 },
  ];


  const pairOfbabyAnimals = [...babyAnimals, ...babyAnimals];

  function flipCard(index) {
    setOpenedCard((opened) => [...opened, index]);
  }

  useEffect(() => {
    if (openedCard < 2) return;

    const firstMatched = pairOfbabyAnimals[openedCard[0]];
    const secondMatched = pairOfbabyAnimals[openedCard[1]];

    if (secondMatched && firstMatched.id === secondMatched.id) {
      setMatched([...matched, firstMatched.id]);
    }

    if (openedCard.length === 2) setTimeout(() => setOpenedCard([]), 1000);
  }, [openedCard]);

  return (
    <div><h1>Test your Memory 🧠 💪🏻 </h1>
    <div className="App">
      <div className="cards">
        {pairOfbabyAnimals.map((babyAnimals, index) => {
         

          let isFlipped = false;

          if (openedCard.includes(index)) isFlipped = true;
          if (matched.includes(babyAnimals.id)) isFlipped = true;
          return (
            <div
              className={`babyAnimals-card ${isFlipped ? "flipped" : ""} `}
              key={index}
              onClick={() => flipCard(index)}
            >
              <div className="inner">
                <div className="front">
                  <img id="babyImage"
                    src={`${babyAnimals.image}`}
                    alt="babyAnimals"
                    width="100"
                  />
                </div>
                <div className="back"></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
    </div>
  );
}


