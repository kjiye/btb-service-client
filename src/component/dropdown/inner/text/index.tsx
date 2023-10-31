import styles from "./dropdown-inner-text.module.scss";
import { LangContext } from "@/context/lang.context";
import { Suspense, useContext } from "react";
import ModelRender from "./model";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { textBundle } from "@/util/format.util";

const CAMERA_SETTING = {
  position: new THREE.Vector3(1.9, -0.01, -0.8),
  near: 0.1,
  far: 10,
};

export default function DropdownInnerText() {
  const text = textBundle();
  const {
    state: { lang },
  } = useContext(LangContext);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>{text.about.title[lang]}</div>
        <div className={styles.content}>{text.about.content[lang]}</div>
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
        <div className={styles.title}>{text.creators.title[lang]}</div>
        <div>
          <p className={styles.secWrapper}>
            <span className={styles.name}>
              {text.creators.name.artist[lang]}
            </span>
            {text.creators.content.artist[lang]}
          </p>
          <p className={styles.secWrapper}>
            <span className={styles.name}>
              {text.creators.name.curation[lang]}
            </span>
            {text.creators.content.curation[lang]}
          </p>
          <p className={styles.secWrapper}>
            <span className={styles.name}>{text.creators.name.dev[lang]}</span>
            {text.creators.content.dev[lang]}
          </p>
          <p className={styles.secWrapper}>
            <span className={styles.name}>
              {text.creators.name.mapping[lang]}
            </span>
            {text.creators.content.mapping[lang]}
          </p>
          <p className={styles.secWrapper}>
            <span className={styles.name}>
              {text.creators.name.design[lang]}
            </span>
            {text.creators.content.design[lang]}
          </p>
          <div>{text.creators.name.translate[lang]}</div>
        </div>
      </div>
    </>
  );
}
