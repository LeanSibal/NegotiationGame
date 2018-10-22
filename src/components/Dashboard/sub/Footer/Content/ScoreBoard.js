import React from 'react';

const ScoreBoard = () => {
    return(
        <div className="scoreboard-wrapper">
            <ul className="">
                <li>
                    <div>1</div>
                    <div></div>
                    <div>Ramil Gonzales</div>
                    <div>$2000</div>
                </li>
                <li>
                    <div>2</div>
                    <div></div>
                    <div>Mike Gonzales</div>
                    <div>$1500</div>
                </li>
                <li>
                    <div>3</div>
                    <div></div>
                    <div>Jason Horca</div>
                    <div>$500</div>
                </li>
                <li>
                    <div>4</div>
                    <div></div>
                    <div>Sam Pinto</div>
                    <div>$200</div>
                </li>
            </ul>
        </div>
    )
}

export default ScoreBoard;