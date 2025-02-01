import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setHappy, setSad, setAngry, setConfused } from './features/moodSlice';

function App() {
  const dispatch = useDispatch();
  const face = useSelector((state) => state.mood.face);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Mood Face: {face}</h1>
      <div>
        <button onClick={() => dispatch(setHappy())}>Happy</button>
        <button onClick={() => dispatch(setSad())}>Sad</button>
        <button onClick={() => dispatch(setAngry())}>Angry</button>
        <button onClick={() => dispatch(setConfused())}>Confused</button>
      </div>
    </div>
  );
}

export default App;