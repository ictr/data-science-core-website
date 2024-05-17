import Link from "next/link";

export default function Projects() {
  return (
    <>
      <h1>projects page</h1>
      <ul className="list-disc list-inside">
        <li><Link target="_blank" href="http://google.com/" className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">NLP Web Interface</Link></li>
      </ul>
    </>
  );
}
