// Navbar.js
"use client";
import { useState } from "react";
import Link from "next/link"; // Import Link from Next.js
import { auth } from "../../firebase"; // Adjust the path as needed
import { signOut } from "firebase/auth"; // Import signOut from Firebase
import { useRouter } from 'next/navigation'; // Import useRouter
import styles from "./navbarpenguji.module.css"; // Create this CSS file for styling
import DosenListKaprodi from "../kaprodilist/page";

export default function NavbarPenguji({ isLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter(); // Create router instance

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      router.push("/"); // Redirect to home page
    } catch (error) {
      console.error("Logout failed: ", error.message);
    }
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/dashboard-penguji">Penguji</Link> {/* Dashboard link */}
      </div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        {/* Hamburger Icon */}
        <div className={`${styles.bar} ${isOpen ? styles.change : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.change : ""}`}></div>
        <div className={`${styles.bar} ${isOpen ? styles.change : ""}`}></div>
      </div>
      <ul className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
        <li className={styles.menuItem}>
          <Link href="/dashboard-penguji">Home</Link> {/* Home link */}
        </li>
        <li className={styles.menuItem}>
          <Link href="/tampilankaprodilist2">Kaprodi List</Link> 
          {/* <DosenListKaprodi/> */}
        </li>
        {/* <li className={styles.menuItem}> */}
          {/* <Link href="/mahasiswalist">Mahasiswa List</Link> Mahasiswa List link */}
        {/* </li> */}
        <li className={styles.menuItem}>
          <Link href="/tampilanlistpenguji2">Penguji List</Link> {/* Mahasiswa List link */}
        </li>
        <li className={styles.menuItem}>
          <Link href="/tampilanlistaccpenguji">Penguji Sempro Mahasiswa Acc</Link> {/* Dosen List link */}
        </li>
        <li className={styles.menuItem}>
          <Link href="/tampilanlistaccpenguji2">Penguji Skripsi Mahasiswa Acc</Link> {/* Dosen List link */}
        </li>
        <li className={styles.menuItem}>
          <Link href="/services">Services</Link> {/* Services link */}
        </li>
        <li className={styles.menuItem}>
          <Link href="/contact">Contact</Link> {/* Contact link */}
        </li>
        {/* Show logout option only if logged in */}
        {isLoggedIn && (
          <li className={styles.menuItem}>
            <button onClick={handleLogout} className={styles.logoutButton}>
              Logout
            </button>
          </li>
        )}
      </ul>
    </nav>
  );
}



// // components/NavbarPenguji.js
// "use client";
// import { useState } from "react";
// import Link from "next/link"; // Import Link from Next.js
// import { auth } from "../../firebase"; // Adjust the path as needed
// import { signOut } from "firebase/auth"; // Import signOut from Firebase
// import { useRouter } from 'next/navigation'; // Import useRouter
// import styles from "./navbarpenguji.module.css"; // Create this CSS file for styling

// export default function NavbarPenguji({ isLoggedIn, role }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const router = useRouter(); // Create router instance

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleLogout = async () => {
//     try {
//       await signOut(auth); // Sign out the user
//       router.push("/"); // Redirect to home page
//     } catch (error) {
//       console.error("Logout failed: ", error.message);
//     }
//   };

//   return (
//     <nav className={styles.navbar}>
//       <div className={styles.logo}>
//         <Link href="/dashboard-penguji">Penguji</Link> {/* Dashboard link */}
//       </div>
//       <div className={styles.hamburger} onClick={toggleMenu}>
//         {/* Hamburger Icon */}
//         <div className={`${styles.bar} ${isOpen ? styles.change : ""}`}></div>
//         <div className={`${styles.bar} ${isOpen ? styles.change : ""}`}></div>
//         <div className={`${styles.bar} ${isOpen ? styles.change : ""}`}></div>
//       </div>
//       <ul className={`${styles.menu} ${isOpen ? styles.active : ""}`}>
//         <li className={styles.menuItem}>
//           <Link href="/dashboard-penguji">Home</Link>
//         </li>
//         {role === "penguji" && (
//           <>
//             <li className={styles.menuItem}>
//               <Link href="/kaprodilist">Kaprodi List</Link> {/* Penguji access */}
//             </li>
//             <li className={styles.menuItem}>
//               <Link href="/mahasiswalist">Mahasiswa List</Link> {/* Penguji access */}
//             </li>
//           </>
//         )}
//         {isLoggedIn && (
//           <li className={styles.menuItem}>
//             <button onClick={handleLogout} className={styles.logoutButton}>
//               Logout
//             </button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// }