import React from 'react';

const HowToPlay = () => {
    return(
        <div>
            <div className="row">
                <div className="col-sm-6 right-border">
                    <div className="modal-content-wrapper">
                        <h5>Play mode</h5>
                        <div className="modal-inner-content">
                            <p className="content-subtitle">Simulation Instructions</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            <div className="payoffs-list">
                                <ul>
                                    <li>Payoffs</li>
                                    <li>
                                        <span className="payoffs-box T">T</span><span className="box-text-T">Take</span>
                                    </li>
                                    <li>
                                        <span className="payoffs-box G">G</span><span className="box-text-G">Give</span>
                                    </li>
                                </ul>
                                <div className="list-wrapper">
                                    <ul>
                                        <li>5x</li>
                                        <li>
                                            <span className="payoffs-box T">T</span>
                                        </li>
                                        <li>
                                            <p>Each player subtracts $100</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list-wrapper">
                                    <ul>
                                        <li>4x</li>
                                        <li>
                                            <span className="payoffs-box T">T</span>
                                        </li>
                                        <li>
                                            <p>T players adds $100 each</p>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>1x</li>
                                        <li>
                                            <span className="payoffs-box G">G</span>
                                        </li>
                                        <li>
                                            <p>G player subtracting $400</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list-wrapper">
                                    <ul>
                                        <li>3x</li>
                                        <li>
                                            <span className="payoffs-box T">T</span>
                                        </li>
                                        <li>
                                            <p>T players adds $200 each</p>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>2x</li>
                                        <li>
                                            <span className="payoffs-box G">G</span>
                                        </li>
                                        <li>
                                            <p>G players subtracting $300</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list-wrapper">
                                    <ul>
                                        <li>2x</li>
                                        <li>
                                            <span className="payoffs-box T">T</span>
                                        </li>
                                        <li>
                                            <p>T players adds $300 each</p>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>3x</li>
                                        <li>
                                            <span className="payoffs-box G">G</span>
                                        </li>
                                        <li>
                                            <p>G (Give) players subtracting $200</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list-wrapper">
                                    <ul>
                                        <li>1x</li>
                                        <li>
                                            <span className="payoffs-box T">T</span>
                                        </li>
                                        <li>
                                            <p>Player adds $400</p>
                                        </li>
                                    </ul>
                                    <ul>
                                        <li>4x</li>
                                        <li>
                                            <span className="payoffs-box G">G</span>
                                        </li>
                                        <li>
                                            <p>Other subtracting $100</p>
                                        </li>
                                    </ul>
                                </div>
                                <div className="list-wrapper">
                                    <ul>
                                        <li>5x</li>
                                        <li>
                                            <span className="payoffs-box T">T</span>
                                        </li>
                                        <li>
                                            <p>All players add $100</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="modal-content-wrapper">
                        <h5>How to play</h5>
                        <ul className="how-to-play">
                            <li className="choose-move">
                                <ul>
                                    <li>1. Choose your move</li>
                                    <li><span className="payoffs-box T">T</span><span className="payoffs-box G">G</span></li>
                                </ul>
                            </li>
                            <li>
                                <ul>
                                    <li>2. View result & consider strategy</li>
                                    <li>
                                        <ul className="result">
                                            <li className="me">
                                               <div>1</div>
                                                <div></div>
                                                <div>Me</div>
                                                <div>$2000</div>
                                            </li>
                                            <li>
                                                <div>2</div>
                                                <div></div>
                                                <div>Ramil Gonzales</div>
                                                <div>$1500</div>
                                            </li>
                                            <li>
                                                <div>3</div>
                                                <div></div>
                                                <div>Jason Horca</div>
                                                <div>$500</div>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowToPlay;