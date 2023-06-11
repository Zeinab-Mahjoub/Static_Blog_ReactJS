import styles from "./Banner.module.css";
import BannerImage from "../images/banner.jpg";
const Banner = () => {
  return (
    <div className={styles.container}>
      <img className={styles.banner} src={BannerImage} alt="banner" />
      <div className={styles.textContainer}>
        <h1>ReactJS</h1>
        <p>
          is so fun to <span>&lt;&gt; code &lt;/&gt; </span>
          with!
        </p>
      </div>
    </div>
  );
};

export default Banner;
