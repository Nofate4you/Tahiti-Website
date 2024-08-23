import Cards from "@/components/Cards";
import Image from "next/image";

export default function Home() {
  const locationPhotos = [
    {
      src: "Volcano.webp",
      title: "Volcano",
      alt: "Volcano",
      text: "Stay in luxurious beachfront villas in Tahiti",
    },
    {
      src: "FishingTrip.jpg",
      title: "Fishing Trip",
      alt: "Fishing Trip",
      text: "Experience thrilling fishing trips in Tahiti",
    },
    {
      src: "Rainforest.webp",
      title: "Rainforest",
      alt: "rainforest",
      text: "Discover the beatiful rainforest of Tahiti",
    },
  ];
  
  const lodgingPhotos = [
    {
      src: "BeachHouse.webp",
      title: "Beach House",
      alt: "Beach House",
      text: "Stay in luxurious beachfront villas in Tahiti",
    },
    {
      src: "resorts.jpg",
      title: "Resort",
      alt: "Resort",
      text: "Relax and unwind at the beautiful resorts of Tahiti",
    },
    {
      src: "Hotels.jpg",
      title: "Hotels",
      alt: "Hotels",
      text: "Experience luxury at the best hotels in Tahiti",
    },
  ];
  
  const foodPhotos = [
    {
      src: "LocalCuisine.jpg",
      title: "Local Cuisine",
      alt: "Local Cuisine",
      text: "Indulge in the delicious local Cuisine of Tahiti",
    },
    {
      src: "Restaurant.webp",
      title: "Restaurant",
      alt: "Restaurant",
      text: "Discover the best restaurant in Tahiti",
    },
    {
      src: "LocalDelicacies.webp",
      title: "Local Delicacies",
      alt: "Local Delicacies",
      text: "Try the unique local delicacies of Tahiti",
    },
  ];

  return (
<main>
  <div className="relative w-full" style={{ height: '900px', overflow: 'hidden' }}>
    <Image
      src="/photos/Banner.jpg"
      alt="banner"
      fill  
      style={{ objectFit: 'cover', objectPosition: 'center' }}  
      quality={100}
    />
    <h1 className="absolute right-20 text-6xl mt-6 text-white">Welcome to Tahiti</h1>
  </div>
<section id="locations" className="pt-25">
  <h2 className="text-center mt-8 text-3xl text-blue-400 bg-gray-700">Locations</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 justify-items-center">
    {locationPhotos.map((x, i) => (
      <Cards
        key={i}
        src={x.src}
        alt={x.alt}
        title={x.title}
        text={x.text}
        className="h-48 w-48"
      />
    ))}
  </div>
</section>

  <h2 id="lodging" className="text-center mt-8 text-3xl text-blue-400 bg-gray-700">Lodging</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 justify-items-center">
    {lodgingPhotos.map((x, i) => (
      <Cards
        key={i}
        src={x.src}
        alt={x.alt}
        title={x.title}
        text={x.text}
        className="h-48 w-48"
      />
    ))}
  </div>

  <h2 id="food" className="text-center mt-8 text-3xl text-blue-400 bg-gray-700">Food</h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-10 justify-items-center">
    {foodPhotos.map((x, i) => (
      <Cards
        key={i}
        src={x.src}
        alt={x.alt}
        title={x.title}
        text={x.text}
        className="h-48 w-48"
      />
    ))}
  </div>

  <h2 id="faqs" className="text-center mt-8 text-3xl text-blue-400 bg-gray-700">FAQs</h2>
  <ul className="text-center flex flex-col gap-3">
    <li>
      <strong>Where do most tourists spend their time in Tahiti?</strong>
      <p>Most tourists spend most of their time in Tahiti City.</p>
    </li>
    <li>
      <strong>What currency is used in Tahiti?</strong>
      <p>Most tourists spend most of their time in Tahiti City.</p>
    </li>
    <li>
      <strong>Tahiti uses the U.S. dollar as its currency.</strong>
      <p>How common is violent crime in Tahiti?</p>
    </li>
    <li>
      <strong>Where do most tourists spend their time in Tahiti?</strong>
      <p>Violent crime is very rare in Tahiti.</p>
    </li>
    <li>
      <strong>What is the drinking age in Tahiti?</strong>
      <p>The drinking age in Tahiti is 18.</p>
    </li>
  </ul>
  <section id='contact' className="bg-gray-700 p-10 mt-8">
    <h2 className="text-center text-3xl text-blue-300">Contact Us</h2>
    <form className="flex flex-col gap-4 items-center">
    <input type="text" placeholder="Name" className="w-full max-w-md p-2 rounded" />
    <input type="email" placeholder="Email" className="w-full max-w-md p-2 rounded" />
    <textarea placeholder="Questions?" className="w-full max-w-md p-2 rounded h-28"></textarea>
    <button type="submit" className="bg-blue-300 text-black p-2 rounded">Submit</button>
    </form>
  </section>
</main>)}
