const PlayerModel = () => {
  const capsuleHeight = 2;
  const capsuleRadius = 0.5;
  const cylinderHeight = capsuleHeight - 2 * capsuleRadius;
  const capsuleColor = "red";

  const capsuleR3fMaterial = <meshStandardMaterial color={capsuleColor} />;
  return (
    <>
      <group position={[0, capsuleRadius, 0]} castShadow>
        <mesh position={[0, 0, -cylinderHeight / 2]} castShadow>
          <sphereGeometry args={[capsuleRadius, 32, 32]} />
          {capsuleR3fMaterial}
        </mesh>

        <mesh position={[0, 0, 0]} rotation={[Math.PI / 2, 0, 0]} castShadow>
          <cylinderGeometry
            args={[capsuleRadius, capsuleRadius, cylinderHeight, 32]}
          />
          {capsuleR3fMaterial}
        </mesh>

        <mesh position={[0, 0, cylinderHeight / 2]} castShadow>
          <sphereGeometry args={[capsuleRadius, 32, 32]} />
          {capsuleR3fMaterial}
        </mesh>
      </group>
    </>
  );
};

export default PlayerModel;
