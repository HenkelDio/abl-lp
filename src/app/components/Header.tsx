import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-around p-6 font-semibold">
      <div>
        Logo
      </div>
      <div className="flex gap-9">
        <Link href="/">Home</Link>
        <Link href="/">Gás</Link>
        <Link href="/">Pedir Gás</Link>
        <Link href="/">Contato</Link>
        <Link href="/">Sobre</Link>
      </div>
    </header>
  )
}