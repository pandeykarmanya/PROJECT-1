export default function HomePage() {
  return (
    <div className="pt-20 bg-white min-h-screen"> {/* 👈 Push below navbar */}
      <div className="flex">
        {/* Left Side - 2x2 Image Grid */}
        <div className="w-[650px] p-8 flex flex-wrap gap-4 items-start rounded-xl bg-white">
          <img src="/images/wall.jpg" alt="Salon" className="rounded-tl-xl max-w-[48%] h-auto object-cover" />
          <img src="/images/massage.jpg" alt="Massage" className="rounded-tr-xl max-w-[48%] h-auto object-cover" />
          <img src="/images/salon.jpg" alt="Electrician" className="rounded-bl-xl max-w-[48%] h-auto object-cover" />
          <img src="/images/ac.jpg" alt="AC Service" className="rounded-br-xl max-w-[48%] -mt-59 h-auto object-cover" />
        </div>

        {/* Right Side - Services */}
        <div className="w-1/2 p-6 flex flex-col items-start">
  <h2 className="text-3xl font-bold mb-6">What are you looking for?</h2>

  <div className="grid grid-cols-3 gap-4 w-full">
    {/* Card 1 */}
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
      <img src="/images/wall.jpg" alt="Women's Salon & Spa" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium">Women's Salon & Spa</p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
      <img src="/images/massage.jpg" alt="Men's Salon & Massage" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium">Men's Salon & Massage</p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
      <img src="/images/ac.jpg" alt="AC & Appliance Repair" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium">AC & Appliance Repair</p>
    </div>

    {/* Card 4 */}
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
      <img src="/images/cleaning.jpg" alt="Cleaning & Pest Control" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium">Cleaning & Pest Control</p>
    </div>

    {/* Card 5 */}
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
      <img src="/images/electrician.jpg" alt="Electrician, Plumber & Carpenter" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium">Electrician, Plumber & Carpenter</p>
    </div>

    {/* Card 6 */}
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
      <img src="/images/water.jpg" alt="Water Purifier" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium">Water Purifier</p>
    </div>

    {/* Card 7 */}
    <div className="col-span-3 flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition">
      <img src="/images/water.jpg" alt="Water Purifier" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium">Water Purifier</p>
    </div>
    
  </div>
</div>
      </div>
    </div>
  );
}