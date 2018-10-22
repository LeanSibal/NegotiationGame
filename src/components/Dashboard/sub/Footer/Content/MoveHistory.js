import React from 'react';

const MoveHistory = () => {
    return(
        <div className="move-history-wrapper">
            <table>
                <thead>
                    <tr>
                        <td>Level</td>
                        <td>Player</td>
                        <td>Move</td>
                        <td>Score</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Level 1</td>
                        <td>
                            <p>Eric McBride</p>
                            <p>Aaron Parker</p>
                            <p>Gertrude Cortez</p>
                            <p>Luke Parker</p>
                        </td>
                        <td>
                            <p className="take">Take</p>
                            <p className="take">Take</p>
                            <p className="give">Get</p>
                            <p className="take">Take</p>
                        </td>
                        <td>
                            <p>+ $500</p>
                            <p>+ $500</p>
                            <p>+ $100</p>
                            <p>+ $500</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Level 2</td>
                        <td>
                            <p>Eric McBride</p>
                            <p>Aaron Parker</p>
                            <p>Gertrude Cortez</p>
                            <p>Luke Parker</p>
                        </td>
                        <td>
                            <p className="give">Get</p>
                            <p className="take">Take</p>
                            <p className="give">Get</p>
                            <p className="take">Take</p>
                        </td>
                        <td>
                            <p>+ $500</p>
                            <p>+ $500</p>
                            <p>+ $100</p>
                            <p>+ $500</p>
                        </td>
                    </tr>
                    <tr>
                        <td>Level 2</td>
                        <td>
                            <p>Eric McBride</p>
                            <p>Aaron Parker</p>
                            <p>Gertrude Cortez</p>
                            <p>Luke Parker</p>
                        </td>
                        <td>
                            <p className="give">Get</p>
                            <p className="take">Take</p>
                            <p className="give">Get</p>
                            <p className="take">Take</p>
                        </td>
                        <td>
                            <p>+ $500</p>
                            <p>+ $500</p>
                            <p>+ $100</p>
                            <p>+ $500</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default MoveHistory;