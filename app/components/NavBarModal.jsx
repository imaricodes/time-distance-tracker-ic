"user client";

import Link from "next/link";

export default function NavBarModal({ links, onClose }) {
  return (
    <div>
      <div>
        <ul>
          {links.map((link) => (
            <li key={link.id}>
              <Link href={link.url} className={styles.link} onClick={onClose}>
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
