import { Sky } from "@react-three/drei";

const SkyComponent = () => {
  const skyDistance: number = 100000000;
  return (
    <Sky
      sunPosition={[skyDistance * 1, skyDistance * 1, skyDistance * 1]}
      distance={skyDistance}
      rayleigh={2}
      mieCoefficient={0.007}
      mieDirectionalG={0.97}
      turbidity={0.5}
      //   azimuth={180}
    />
  );
};

export default SkyComponent;
