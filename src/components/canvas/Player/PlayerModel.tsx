const PlayerModel = () => {
  const capsuleHeight = 1.8;
  const capsuleRadius = 0.5;
  const cylinderHeight = capsuleHeight - 2 * capsuleRadius;
  const capsuleColor = "red";

  const capsuleR3fMaterial = <meshStandardMaterial color={capsuleColor} />;
  return (
    <>
      {/* possible height control on group */}
      <group position={[0, 0, 0]} castShadow>
        <mesh position={[0, capsuleRadius, 0]} castShadow>
          <sphereGeometry args={[capsuleRadius, 32, 32]} />
          {capsuleR3fMaterial}
        </mesh>

        <mesh position={[0, capsuleRadius + cylinderHeight / 2, 0]} castShadow>
          <cylinderGeometry
            args={[capsuleRadius, capsuleRadius, cylinderHeight, 32]}
          />
          {capsuleR3fMaterial}
        </mesh>

        <mesh position={[0, capsuleRadius + cylinderHeight, 0]} castShadow>
          <sphereGeometry args={[capsuleRadius, 32, 32]} />
          {capsuleR3fMaterial}
        </mesh>
      </group>
    </>
  );
};

export default PlayerModel;
