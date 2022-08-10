import Link from "next/link";
import Image from "next/image";
import styles from "../styles/BlogCard.module.css";

export default function BlogPost({
  title,
  author,
  coverPhoto,
  content,
  datePublished,
  slug,
}) {
  return (
    <Link href={"/posts/" + slug}>
      <div className={styles.card} style={{ cursor: "pointer" }}>
        <div className={styles.imgContainer}>
          <Image
            src={coverPhoto.url}
            alt={coverPhoto.url}
            width={1000}
            height={600}
          />
        </div>

        <h2>{title}</h2>
        <div className={styles.details}>
          <div className={styles.author}>
            <Image
              src={author.avatar.url}
              alt={author.avatar.url}
              decoding
              width={50}
              height={50}
            />
            <h3>{author.name}</h3>
          </div>
          <div className={styles.date}>
            <h3>{datePublished}</h3>
          </div>
          {/* {console.log(content)}
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: content }}
        ></div> */}
        </div>
      </div>
    </Link>
  );
}
