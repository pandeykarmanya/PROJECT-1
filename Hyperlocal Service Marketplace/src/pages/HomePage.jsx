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
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow transition-all duration-300 group">
      <img src="/images/salon-w.png" alt="Women's Salon & Spa" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full">
        Women's Salon & Spa
      </p>
    </div>
    
    {/* Card 2 */}
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow transition-all duration-300 group">
      <img src="/images/salon-m.png" alt="Men's Salon & Massage" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full">
        Men's Salon & Massage
      </p>
    </div>
    
    {/* Card 3 */}
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow transition-all duration-300 group">
      <img src="/images/ac-repair.png" alt="AC & Appliance Repair" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full">
        AC & Appliance Repair
      </p>
    </div>
    
    {/* Card 4 */}
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow transition-all duration-300 group">
      <img src="/images/cleaning.png" alt="Cleaning & Pest Control" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full">
        Cleaning & Pest Control
      </p>
    </div>
    
    {/* Card 5 */}
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow transition-all duration-300 group">
      <img src="/images/worker.png" alt="Electrician, Plumber & Carpenter" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full">
        Electrician, Plumber & Carpenter
      </p>
    </div>
    
    {/* Card 6 */}
    <div className="flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow transition-all duration-300 group">
      <img src="/images/water-filter.png" alt="Water Purifier" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full">
        Water Purifier
      </p>
    </div>
    
    {/* Card 7 */}
    <div className="col-span-3 flex flex-col items-center bg-gray-100 p-4 rounded-lg shadow transition-all duration-300 group">
      <img src="/images/painter.png" alt="Wall Painting and Waterproofing" className="w-16 h-16 mb-2" />
      <p className="text-sm text-center font-medium relative after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 group-hover:after:w-full">
        Wall Painting and Waterproofing
      </p>
    </div>
    
  </div>
</div>

      </div>
             {/* Salon for Women Section */}
             <div className="w-full p-8 mt-6 bg-white rounded-lg relative">
               <div className="flex justify-between items-center mb-6 px-6">
                 <h2 className=" text-3xl font-bold text-orange-500">Salon for Women</h2>
                 <button className="w-14 h-8 text-sm text-orange-500 border border-orange-500 rounded-md hover:text-orange-600 font-medium transition">More</button>
               </div>
             
               <div className="flex gap-6 overflow-x-auto justify-center">
                 {[
                   { title: 'Facial & Cleanup', image: '/images/cleanup.webp' },
                   { title: 'Waxing', image: '/images/waxing.webp' },
                   { title: 'Hair Spa & Styling', image: '/images/hair-spa.webp' },
                   { title: 'Threading & Eyebrow', image: '/images/threading.webp' },
                   { title: 'Manicure', image: '/images/manicure.webp' },
                 ].map((item, idx) => (
                   <div key={idx} className="group relative w-60 h-72 min-w-[15rem] rounded-xl overflow-hidden shadow-md hover:shadow-orange-400 transition">
                     <img src={item.image} alt={item.title} className="w-full h-full object-cover transition duration-300" />
                     <div className="absolute inset-0 group-hover:bg-opacity-40 flex items-center justify-center transition duration-300">
                       <p className="text-white group-hover:text-orange-300 text-lg font-semibold transition duration-300">{item.title}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
             
             {/* Salon for Men Section */}
             <div className="w-full p-8 mt-6 bg-white rounded-lg relative">
               <div className="flex justify-between items-center mb-6 px-6">
                 <h2 className="text-3xl font-bold text-orange-500">Salon for Men</h2>
                 <button className="w-14 h-8 text-sm text-orange-500 border border-orange-500 rounded-md hover:text-orange-600 font-medium transition">More</button>
               </div>
             
               <div className="flex gap-6 overflow-x-auto justify-center">
                 {[
                   { title: 'Haircut & Styling', image: '/images/haircut.webp' },
                   { title: 'Beard Grooming', image: '/images/beard-grooming.webp' },
                   { title: 'Facial & Cleanup', image: '/images/men-facial.webp' },
                   { title: 'Head Massage', image: '/images/men-massage.jpg' },
                   { title: 'Hair Color', image: '/images/hair-color-men.webp' },
                 ].map((item, idx) => (
                   <div key={idx} className="group relative w-60 h-72 min-w-[15rem] rounded-xl overflow-hidden shadow-md hover:shadow-orange-400 transition">
                     <img src={item.image} alt={item.title} className="w-full h-full object-cover transition duration-300" />
                     <div className="absolute inset-0 group-hover:bg-opacity-40 flex items-center justify-center transition duration-300">
                       <p className="text-white group-hover:text-orange-300 text-lg font-semibold transition duration-300">{item.title}</p>
                     </div>
                   </div>
                 ))}
               </div>
             </div>
    </div>
  );
}