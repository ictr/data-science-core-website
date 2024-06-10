import Link from "next/link";

export default function HeaderComp() {
  return (
    <header className="bg-customBlue text-white p-4">
      <nav className="container mx-auto flex justify-between">
        <a class="logo" href="https://bcm.edu"></a>
        <div className="main-title text-xl">Data Science Core</div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/about">About</Link>
        </div>
      </nav>
    </header>
  );
}
