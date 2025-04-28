import { useState } from "react";

const DiceGame = () => {
    const [num, setNum] = useState(0);
    const faces = ['1', '2', '3', '4', '5', '6'];
  
    return (
      <div style={styles.wrapper}>
        <div style={styles.face}>{faces[num]}</div>
        <button onClick={() => setNum(Math.floor(Math.random() * 6))} style={styles.btn}>
          Roll
        </button>
      </div>
    );
  };
  
  const styles = {
    wrapper: { textAlign: 'center', marginTop: 50, fontFamily: 'Arial' },
    face: { fontSize: 100, marginBottom: 20 },
    btn: { padding: '10px 20px', fontSize: 18, cursor: 'pointer' }
  };
  
  export default DiceGame;
