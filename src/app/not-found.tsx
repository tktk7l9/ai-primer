import { NotFoundBody } from "@/components/not-found-body";

// Unmatched URLs and unknown locales render here, outside the locale layout.
export default function RootNotFound() {
  return (
    <main className="container">
      <NotFoundBody />
    </main>
  );
}
