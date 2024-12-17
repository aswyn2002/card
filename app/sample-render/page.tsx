import Layout from "@/components/Layout/layout";
import CarListing from "../../components/cardSample/carListing"

export default function carListing() {
  return (
    <Layout>
      <div className="md:container mt-0 p-4">
        <main>
          <CarListing />
        </main>
      </div>
    </Layout>
  );
}
