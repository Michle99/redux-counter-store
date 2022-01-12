import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { useAppSelector, useAppDispatch } from 'app/hooks';
import { 
    decrement, 
    increment,
    incrementByAmount,
    incrementAsync,
    selectCount 
} from "./counterSlice";
import styles from "./Counter.module.css";

// step 7 - use Redux state and Actions in React components
export function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    // const count = useAppSelector(selectCount);
    // const dispatch = useAppDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <div className={styles.row}>
                <button 
                    className={styles.button}
                    aria-label="Increment vlaue" 
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
                <button 
                    className={styles.button}
                    aria-label="Decrement vlaue" 
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            <div className={styles.row}>
                <input 
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() =>
                        dispatch(incrementByAmount(Number(incrementAmount) || 0))    
                    }   
                >
                    Add Amount
                </button>
                <button
                    className={styles.asyncButton}
                    onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
                >
                    Add Async
                </button>
            </div>
        </div>
    );
}