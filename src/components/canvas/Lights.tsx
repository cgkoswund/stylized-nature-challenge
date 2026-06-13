const Lights = () => {
  return (
    <>
      <ambientLight />
      <directionalLight position={[10, 10, 10]} castShadow />
    </>
  );
};

export default Lights;
