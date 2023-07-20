import styles from "./dropdown-inner-text.module.css";

export default function DropdownInnerText() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.title}>About</div>
        <div className={styles.content}>
          &quot;Beyond the Birthplace&quot; is a project that broadens the scope
          of &quot;Birthplace 2020,&quot; a project by the sculptor Goyoson who
          crafted small sculptures using exclusively discarded or overlooked
          items found in a single room and showcased them online. The new
          project presents both Goyoson&apos;s physical sculptures and their
          digital counterparts — &apos;digital twins&apos; — in the form of
          NFTs. &quot;Beyond the Birthplace&quot; offers users the ability to
          assemble digital sculptures by selecting and arranging pieces placed
          throughout the various themed virtual spaces designed by the artist.
          Once users assemble their preferred digital sculptures, they can then
          purchase them as NFTs.
        </div>
      </div>
      {/* 준우님 방 모델 출력하기 */}
      <div className={styles.container}>
        <div className={styles.title}>Artist and Creators</div>
        <div>
          <p className={styles.secWrapper}>
            Artist: Goyoson Goyoson challenges traditional genre boundaries and
            experiments with the viewing experience of sculpture. He creates
            &quot;sculptures that transform depending on who and how they are
            being seen.&quot; Known for his hand-carved, amorphous forms,
            Goyoson uses unorthodox materials that deviate from the conventional
            grammar of the discipline. He employs a wide range of mediums and
            formats to provide diverse viewing experiences, including movement,
            food consumption, and theatrical environment. Recently, Goyoson has
            been conducting experiments on the time-based experience of
            sculptures, in contrast to their traditional fixity.
          </p>
          <p className={styles.secWrapper}>
            Curation and Producing: Hyejin Woo Hyejin Woo holds an undergraduate
            degree in archeology and art history and a master&apos;s degree in
            curatorial studies. She has gained experience in various
            organizations, contributing to both large and small projects. As an
            independent curator, Woo is currently involved in developing media
            art exhibition centers and other related projects. For “Beyond the
            Birthplace,&quot; she oversaw the curation and implementation.
          </p>
          <p className={styles.secWrapper}>
            Smart Contract and Website Development : Jiye Kim Jiye Kim is a web
            front-end developer who has built various platforms in e-commerce,
            retail, web agencies, and media art companies. She was responsible
            for developing the web full-stack and smart contracts for this
            project.
          </p>
          <p className={styles.secWrapper}>
            3D Mapping : Seungtaek Lim Seungtaek Lim has contributed to the
            creation of spaces in various genres, ranging from theater stages to
            movies, dramas, interiors, exhibitions, and games. He is a member of
            Band Bower, a performance group dedicated to designing and
            constructing metaverse game spaces. For this project, he was in
            charge of developing the 3D map.
          </p>
          <p className={styles.secWrapper}>
            Graphic Design: Gunjung Lee Gunjung Lee sometimes designs books,
            promotional images, websites, and logos.
          </p>
          Translation : Jae Ted Kim
        </div>
      </div>
    </div>
  );
}
