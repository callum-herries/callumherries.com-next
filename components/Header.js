import Link from 'next/link'

export default function Header() {
  return (
    <>
      <div id="menu">
          <ul>
            <li>
                <span>Callum Herries</span>
            </li>
            <li>
                <Link href="/">
                    <a>Blog</a>
                </Link>
            </li>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
          </ul>
      </div>
      <style jsx>{`
        #menu {
          text-align: left;
          margin-top: 20px;
          float: left;
          height: 100px;
          display: flex;
          justify-content: right;
          align-items: right;
          font-weight: bold;
          font-size: 1.3rem;
        }
        #menu ul {
          list-style-type: none;
        }
        #menu a {
          color: #0086FF;
          text-decoration: none;
        }
        #menu a:hover {
          text-decoration: underline;
        }
      `}</style>
    </>
  )
}
