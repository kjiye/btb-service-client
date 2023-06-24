"use client";
import { Clone, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense } from "react";

const Models = [{ title: "3DTest", url: "/P1.glb" }];

function Model({ url }: any) {
  const gltf: Record<string, any> = useGLTF(url);
  return (
    <Clone
      object={gltf.scene}
      key={undefined}
      attach={undefined}
      args={undefined}
      onUpdate={undefined}
      position={[0, 0, 0]}
      up={undefined}
      scale={0.4}
      rotation={undefined}
      matrix={undefined}
      quaternion={undefined}
      layers={undefined}
      dispose={undefined}
      onClick={undefined}
      onContextMenu={undefined}
      onDoubleClick={undefined}
      onPointerUp={undefined}
      onPointerDown={undefined}
      onPointerOver={undefined}
      onPointerOut={undefined}
      onPointerEnter={undefined}
      onPointerLeave={undefined}
      onPointerMove={undefined}
      onPointerMissed={undefined}
      onPointerCancel={undefined}
      onWheel={undefined}
      visible={undefined}
      type={undefined}
      isGroup={undefined}
      id={undefined}
      uuid={undefined}
      name={undefined}
      parent={undefined}
      modelViewMatrix={undefined}
      normalMatrix={undefined}
      matrixWorld={undefined}
      matrixAutoUpdate={undefined}
      matrixWorldAutoUpdate={undefined}
      matrixWorldNeedsUpdate={undefined}
      frustumCulled={undefined}
      renderOrder={undefined}
      animations={undefined}
      userData={undefined}
      customDepthMaterial={undefined}
      customDistanceMaterial={undefined}
      isObject3D={undefined}
      onBeforeRender={undefined}
      onAfterRender={undefined}
      applyMatrix4={undefined}
      applyQuaternion={undefined}
      setRotationFromAxisAngle={undefined}
      setRotationFromEuler={undefined}
      setRotationFromMatrix={undefined}
      setRotationFromQuaternion={undefined}
      rotateOnAxis={undefined}
      rotateOnWorldAxis={undefined}
      rotateX={undefined}
      rotateY={undefined}
      rotateZ={undefined}
      translateOnAxis={undefined}
      translateX={undefined}
      translateY={undefined}
      translateZ={undefined}
      localToWorld={undefined}
      worldToLocal={undefined}
      lookAt={undefined}
      add={undefined}
      remove={undefined}
      removeFromParent={undefined}
      clear={undefined}
      getObjectById={undefined}
      getObjectByName={undefined}
      getObjectByProperty={undefined}
      getObjectsByProperty={undefined}
      getWorldPosition={undefined}
      getWorldQuaternion={undefined}
      getWorldScale={undefined}
      getWorldDirection={undefined}
      raycast={undefined}
      traverse={undefined}
      traverseVisible={undefined}
      traverseAncestors={undefined}
      updateMatrix={undefined}
      updateMatrixWorld={undefined}
      updateWorldMatrix={undefined}
      toJSON={undefined}
      clone={undefined}
      copy={undefined}
      addEventListener={undefined}
      hasEventListener={undefined}
      removeEventListener={undefined}
      dispatchEvent={undefined}
    />
  );
}

// const CAMERA_SETTING = { position: [0, 0, -0.2], near: 0.025 };
// 카메라의 near와 position z축 설정으로 모델이 출력되는 거리를 조정하면 실직적으로 표시되는 크기를 제어할 수 있음
const CAMERA_SETTING = { position: [-0.3, 0, -0.2], near: 0.02, far: 10 };

export default function Home() {
  // const { title } = useControls({
  //   title: {
  //     options: Models.map(({ title }) => title),
  //   },
  // });
  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        margin: "20px auto 0",
        backgroundColor: "black",
      }}
    >
      <Canvas camera={CAMERA_SETTING}>
        {/* <Environment files="/StudioHDR_2_StarField_01_2K.hdr" background /> */}
        {/* <Environment files="/workshop_1k.hdr" background /> */}
        {/* 
        <Environment
          files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@useGLTF/public/img/workshop_1k.hdr"
          background
        />
         */}
        <ambientLight intensity={0.5} />
        {/* 스팟라이트 빼야 모델이 더 잘 보임 */}
        {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
        <pointLight position={[2, 2, 0]} />
        <Suspense>
          <Model url={Models[0].url} />
          {/* <Model url={Models[Models.findIndex((m) => m.title === title)].url} /> */}
        </Suspense>
        {/* 우측 컨트롤러 */}
        {/* <OrbitControls autoRotate /> */}
        <OrbitControls enableDamping={true} />
        {/* 좌측 상태바 */}
        {/* <Stats /> */}
      </Canvas>
    </div>
  );
}
