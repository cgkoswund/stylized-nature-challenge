const Lights = () => {
  return (
    <>
      <ambientLight intensity={3} />
      <directionalLight position={[10, 10, 10]} castShadow />
    </>
  );
};

export default Lights;
