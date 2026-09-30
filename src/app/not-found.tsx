import { NotFoundBody } from "@/components/not-found-body";

// Unmatched URLs and unknown locales render here, outside the locale layout,
// so the body brings its own header and footer.
export default function RootNotFound() {
  return <NotFoundBody chrome />;
}
