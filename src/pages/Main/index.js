import "./style.css";
import Sidebar from "../../components/Sidebar";
import Card from "../../components/Card";
import cards from "../../cards";
import { useState } from "react";
import CongratsImg from "../../assets/congrats.png";

function Main() {
    const [stateCards, setStateCards] = useState([...cards]);

    return (
        <div className="container">
            <Sidebar cards={cards} setStateCards={setStateCards} />

            <div className="container-main">
                <div
                    className="container-cards"
                    style={{
                        justifyContent: `${
                            stateCards.length ? "flex-start" : "center"
                        }`,
                    }}
                >
                    {stateCards.length ? (
                        stateCards.map((card) => (
                            <Card
                                key={card.id}
                                card={card}
                                stateCards={stateCards}
                                setStateCards={setStateCards}
                            />
                        ))
                    ) : (
                        <img src={CongratsImg} alt="congrats!" />
                    )}
                </div>
            </div>
        </div>
    );
}

export default Main;
