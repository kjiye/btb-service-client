import styles from "./dropdown-inner-text.module.css";
import text from "../../../../text.json";
import { LangContext } from "@/context/lang.context";
import { Suspense, useContext } from "react";
import ModelRender from "./model";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

// const CAMERA_SETTING = { position: [1.9, 0, -0.8], near: 0.1, far: 10 };
const CAMERA_SETTING = {
  position: new THREE.Vector3(1.9, -0.01, -0.8),
  near: 0.1,
  far: 10,
};

export default function DropdownInnerText() {
  const textObj = Object(text);
  const {
    state: { lang },
  } = useContext(LangContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{textObj.about.title[lang]}</div>
        <div className={styles.content}>{textObj.about.content[lang]}</div>
      </div>
      <div className={styles.glbWrapper}>
        <Canvas camera={CAMERA_SETTING}>
          <ambientLight intensity={1} />
          <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
          <pointLight position={[10, 10, 0]} />
          <Suspense>
            <ModelRender url={"/img/glb/room.glb"} />
          </Suspense>
          <OrbitControls enableDamping={true} />
        </Canvas>
      </div>
      <div className={styles.container}>
        <div className={styles.title}>Artist and Creators</div>
        <div>
          <p className={styles.secWrapper}>
            <span className={styles.name}>
              {textObj.creators.name.artist[lang]}
            </span>
            {textObj.creators.content.artist[lang]}
          </p>
          <p className={styles.secWrapper}>
            <span className={styles.name}>
              {textObj.creators.name.curation[lang]}
            </span>
            {textObj.creators.content.curation[lang]}
          </p>
          <p className={styles.secWrapper}>
            <span className={styles.name}>
              {textObj.creators.name.dev[lang]}
            </span>
            {textObj.creators.content.dev[lang]}
          </p>
          <p className={styles.secWrapper}>
            <span className={styles.name}>
              {textObj.creators.name.mapping[lang]}
            </span>
            {textObj.creators.content.mapping[lang]}
          </p>
          <p className={styles.secWrapper}>
            <span className={styles.name}>
              {textObj.creators.name.design[lang]}
            </span>
            {textObj.creators.content.design[lang]}
          </p>
          <div>{textObj.creators.name.translate[lang]}</div>
        </div>
      </div>
    </>
  );
}
