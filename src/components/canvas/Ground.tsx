const Ground = () => {
  return (
    <>
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#e9bd83" />
      </mesh>
    </>
  );
};

export default Ground;
