import React from 'react';
import fakeData from "./fakeData";

function App() {
    return (
        <div className="App">
            {fakeData.columns.map(column => {
                const {title, data} = column;
                return <div>
                    <div>{title}</div>
                    <div>{data.map((item) => {
                        if (item.type === 'table') {
                            const {children} = item;
                            return (
                                <table>
                                    {children.map(({value, name}) => {
                                        return <tr>
                                            <td>{value}</td>
                                            <td>{name}</td>
                                        </tr>
                                    })}
                                </table>
                            )
                        }

                        if (item.type === 'expander') {
                            const {children, value, name} = item;

                            return <div>
                                <div>{name}</div>
                                <div>{value}</div>

                            </div>
                        }

                    })}</div>
                </div>
            })}
        </div>
    );
}

export default App;
