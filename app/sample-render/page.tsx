import Layout from "@/components/Layout/layout";
import CarListing from "../../components/cardSample/carListing";
import Pagination from "@/components/cardSample/pagination";
import CarButtons from "@/components/cardSample/carButtons";

export default function carListing() {
    return (
        <Layout>
            <div className="md:container mt-0 p-4">
                <main>
                    <CarButtons />
                    <div className="mt-5">
                        <CarListing />
                    </div>

                    <div className="flex mt-14 justify-center">
                        <Pagination />
                    </div>
                </main>
            </div>
        </Layout>
    );
}
