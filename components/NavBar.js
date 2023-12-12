import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar(){
  const router = useRouter();
  console.log(router.pathname);
  return(
    <nav >
      <Link href="/" legacyBehavior >
        <span className={router.pathname === "/" ? "active" : "" }>Home</span>
      </Link>
      <Link href="/about" legacyBehavior>
        <span  className={router.pathname === "/about" ? "active" : "" }>About Us</span> 
      </Link>
      <style jsx>{`
        nav {
          background-color:tomato;
        }
        span {
          text-decoration: none;
          cursor: pointer;
        }
        .active{
          color:yellow;
        }
        /* legacyBehavior 13버전으로 되돌리는 속성 */
      `}</style>
      {/* <Link href="/" className={`${styles.link} ${router.pathname === "/" ? styles.active : ""}` }>
        Home
      </Link>
      <Link href="/about" className={[styles.link,router.pathname === "/about" ? styles.active : ""].join(" ")}>
        About Us
      </Link> */}
      {/* <a href="/">Home</a>
      <a href="/about">About</a> */}
    </nav>
  );
}