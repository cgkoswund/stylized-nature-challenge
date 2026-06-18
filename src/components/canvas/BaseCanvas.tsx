import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import styles from "../../styles/canvas.module.scss";
import PlayerModel from "./Player/PlayerModel";
import Lights from "./Lights";
import Environment from "./Environment";
import PersonForScale from "./PersonForScale";

const BaseCanvas = () => {
  return (
    <div className={styles.container}>
      <Canvas shadows camera={{ position: [0, 1.8, 5] }}>
        <color attach="background" args={["#7fe5ff"]} />
        <Lights />
        <PlayerModel />
        <Environment />
        <OrbitControls
          makeDefault
          target={[0, 1.8, 0]}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 1.75}
        />
        <PersonForScale />
        {/* @TODO: Add soft shadoes, but fix map size */}
      </Canvas>
    </div>
  );
};

export default BaseCanvas;
