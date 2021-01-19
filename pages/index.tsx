import Link from 'next/link'

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/simple" as="/simple">
          <a>simple</a>
        </Link>
      </li>
      <li>
        <Link href="/image" as="/image">
          <a>image</a>
        </Link>
      </li>
      <li>
        <Link href="/redux" as="/redux">
          <a>redux</a>
        </Link>
      </li>
    </ul>
  )
}
