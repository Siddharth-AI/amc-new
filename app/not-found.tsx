import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/layout/PublicLayout";

export default function NotFound() {
  return (
    <PublicLayout>
      <main className="flex min-h-[70vh] items-center pt-24">
        <Container>
        <div className="mx-auto max-w-xl text-center">
          <p className="eyebrow mb-4">404 — Page not found</p>
          <h1 className="mb-5 text-navy">We couldn&apos;t find that page</h1>
          <p className="mb-9 text-lg text-text-muted">
            The page you&apos;re looking for may have moved or no longer exists.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="primary">
              <Link href="/"><ArrowLeft className="h-4 w-4" /> Back to Home</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/products">Browse Solutions</Link>
            </Button>
          </div>
        </div>
      </Container>
      </main>
    </PublicLayout>
  );
}
