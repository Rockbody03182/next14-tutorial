import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar(){
  const router = useRouter();
  console.log(router.pathname);
  return(
    <nav >
      <img src="/vercel.svg"/>
      <Link href="/" legacyBehavior >
        <span className={router.pathname === "/" ? "active" : "" }>Home</span>
      </Link>
      <Link href="/about" legacyBehavior>
        <span  className={router.pathname === "/about" ? "active" : "" }>About Us</span> 
      </Link>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav span {
          font-weight: 600;
          font-size: 18px;
          cursor: pointer;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
      {/* legacyBehavior 13버전으로 되돌리는 속성  */}
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