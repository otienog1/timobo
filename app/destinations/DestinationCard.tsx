import { Destination } from "@/lib/types"
import Image from "next/image";

const DestinationCard = ({ destination }: { destination: Destination }) => {

    return (
        <section>
            <div className="mx-auto max-w-screen-xl">
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 sm:mb-28">
                    <div className="flex items-center w-full sm:w-1/2 bg-slate-50 py-4 px-4 sm:px-6 sm:py-8 lg:px-8">
                        <div>
                            <header>
                                <h2 className="text-xl font-bold text-gray-900 sm:text-3xl">{destination.name}</h2>
                            </header>
                            <p className="mt-4 text-gray-500" dangerouslySetInnerHTML={{ __html: destination.content }}></p>
                        </div>
                    </div>
                    <div className="relative h-[calc(70vh)] w-full sm:w-1/2">
                        <Image
                            src={destination.image}
                            alt={`${destination.name} - African Citril Safaris`}
                            fill
                            className="object-cover aspect-square w-full "
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default DestinationCard