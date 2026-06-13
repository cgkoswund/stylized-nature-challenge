import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "../../styles/canvas.module.scss";
import Ground from "./Ground";
import PlayerModel from "./Player/PlayerModel";
import Lights from "./Lights";

const BaseCanvas = () => {
  return (
    <div className={styles.container}>
      <Canvas shadows camera={{ position: [0, 2, 5] }}>
        <color attach="background" args={["#3ed8ff"]} />
        <Lights />
        <PlayerModel />
        <Ground />
        <OrbitControls />
      </Canvas>
    </div>
  );
};

export default BaseCanvas;
