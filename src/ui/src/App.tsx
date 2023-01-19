import { useState } from 'react';
import './App.css';

function App() {
    const [count, setCount] = useState(5);

    return (
        <div className="App">
            <h1>Rectangle Creator</h1>
            <div className="card">
                <p>
                    Count:{' '}
                    <input
                        id="count"
                        value={count}
                        defaultValue={5}
                        onChange={(ev) => {
                            const val = ev.target.valueAsNumber;
                            setCount(val);
                        }}
                    />
                </p>
                <button
                    onClick={() => {
                        parent.postMessage(
                            {
                                pluginMessage: {
                                    type: 'create-rectangles',
                                    count
                                }
                            },
                            '*'
                        );
                    }}
                >
                    Create
                </button>
                <button
                    onClick={() => {
                        parent.postMessage(
                            {
                                pluginMessage: {
                                    type: 'cancel'
                                }
                            },
                            '*'
                        );
                    }}
                >
                    Cancel
                </button>
            </div>
        </div>
    );
}

export default App;
