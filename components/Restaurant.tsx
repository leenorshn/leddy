import Image from "next/image";

function Restaurant({ img, title, description }) {
    return (
        <section className="px-4 py-6 space-y-3 bg-white rounded shadow">
            <div className="flex items-start space-x-6">
                <Image src={img} width={40} height={40} />
                <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
            </div>
            <p className="text-lg text-gray-600">{description}</p>

        </section>
    )
}

export default Restaurant;