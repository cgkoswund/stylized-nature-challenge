import { useTexture } from "@react-three/drei";
import * as THREE from "three";

const PersonForScale = () => {
  const personTexture = useTexture("/tex/fennec_mannequin.png");
  const personHeight = 1.8; // meters
  return (
    <>
      <group position={[-2, personHeight / 2, -2]}>
        <mesh>
          <planeGeometry args={[personHeight / 3, personHeight]} />
          <meshStandardMaterial
            map={personTexture}
            transparent
            opacity={0.85}
            alphaTest={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh rotation={[0, Math.PI / 2, 0]}>
          <planeGeometry args={[personHeight / 3, personHeight]} />
          <meshStandardMaterial
            map={personTexture}
            transparent
            opacity={0.85}
            alphaTest={0.5}
            side={THREE.DoubleSide}
          />
        </mesh>
      </group>
    </>
  );
};

export default PersonForScale;
