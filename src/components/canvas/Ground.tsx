const Ground = () => {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshBasicMaterial color="#af8754" />
      </mesh>
    </>
  );
};

export default Ground;
