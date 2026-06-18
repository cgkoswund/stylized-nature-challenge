import { useGLTF, useTexture } from "@react-three/drei";
import * as THREE from "three";

const Ground = () => {
  const [groundTexture, duneTexture] = useTexture([
    "tex/CloseSand/Ground079L_1K-JPG_Color.jpg",
    "/tex/DuneSand/Ground055L_2K-JPG_Color.jpg",
  ]);

  groundTexture.wrapS = THREE.RepeatWrapping;
  groundTexture.wrapT = THREE.RepeatWrapping;
  groundTexture.repeat.set(10000, 10000);

  duneTexture.wrapS = THREE.RepeatWrapping;
  duneTexture.wrapT = THREE.RepeatWrapping;
  duneTexture.repeat.set(5, 5);

  const groundMaterial = new THREE.MeshStandardMaterial({
    color: "#e9bd83",
    map: groundTexture,
  });
  const duneMaterial = new THREE.MeshStandardMaterial({
    color: "#f5d7b4",
    map: duneTexture,
  });
  const poolMaterial = new THREE.MeshStandardMaterial({ color: "#4a759e" });
  const groundAndDuneModels = useGLTF("/models/env_blockout.glb");
  groundAndDuneModels.scene.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      if (child.name.toLowerCase().includes("pool")) {
        child.material = poolMaterial;
      } else if (
        child.name.toLowerCase().includes("dune") ||
        child.name.toLowerCase().includes("cone")
      ) {
        child.material = duneMaterial;
      } else {
        child.material = groundMaterial;
      }
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });
  return (
    <>
      <primitive object={groundAndDuneModels.scene} />
      {/* <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#e9bd83" />
      </mesh> */}
    </>
  );
};

export default Ground;
