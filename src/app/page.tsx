"use client";
import {
  Clone,
  Environment,
  OrbitControls,
  Stats,
  useGLTF,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import React, { Suspense } from "react";

const Models = [{ title: "3DTest", url: "/P1.glb" }];

function Model({ url }: any) {
  const gltf: Record<string, any> = useGLTF(url);
  console.log(gltf.scene);
  return (
    <Clone
      object={gltf.scene}
      key={undefined}
      attach={undefined}
      args={undefined}
      onUpdate={undefined}
      position={[0, 0, 0]}
      up={undefined}
      scale={0.2}
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

export default function Home() {
  const { title } = useControls({
    title: {
      options: Models.map(({ title }) => title),
    },
  });
  return (
    <div style={{ width: "500px", height: "600px", margin: "20px auto 0" }}>
      <Canvas camera={{ position: [0, 0, -0.2], near: 0.025 }}>
        {/* three js 빛 추가해서 배경 제거해보기 */}
        {/* <Environment files="/StudioHDR_2_StarField_01_2K.hdr" background /> */}
        <Environment files="/workshop_1k.hdr" background />
        {/* 
        <Environment
          files="https://cdn.jsdelivr.net/gh/Sean-Bradley/React-Three-Fiber-Boilerplate@useGLTF/public/img/workshop_1k.hdr"
          background
        />
         */}
        <Suspense>
          <Model url={Models[0].url} />
          {/* <Model url={Models[Models.findIndex((m) => m.title === title)].url} /> */}
        </Suspense>
        <OrbitControls autoRotate />
        <Stats />
      </Canvas>
    </div>
  );
}
