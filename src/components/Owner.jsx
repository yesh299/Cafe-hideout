import React from "react";

export default function Owner() {
  const ownerName = "Yesh Thakur";
  const contactNumber = "+91 0011223344";
  const ownerEmail = "yesh.thakur@luckyhideout.com";

  const handleCall = () => {
    window.location.href = `tel:+0011223344`;
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/919876543210?text=Hello%20${ownerName}%2C%20I%20am%20interested%20in%20Lucky%20Hideout`,
      "_blank",
    );
  };

  return (
    <section id="owner" className="py-20 bg-gradient-to-b from-cream to-beige">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-coffee-900 mb-4">
            Meet Our Owner
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-gold to-beige mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Owner Image Card */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-gold to-beige rounded-2xl transform rotate-3 opacity-30"></div>
              <div className="relative bg-gradient-to-br from-coffee-800 to-coffee-900 rounded-2xl p-8 shadow-2xl">
                <div className="w-48 h-48 sm:w-64 sm:h-64 mx-auto bg-gradient-to-br from-coffee-700 to-coffee-800 rounded-xl overflow-hidden border-4 border-gold flex items-center justify-center">
                  <span className="text-8xl">👨‍💼</span>
                </div>
              </div>
            </div>
          </div>

          {/* Owner Details Card */}
          <div className="bg-white rounded-2xl shadow-2xl p-8 sm:p-10 border-l-4 border-gold transform hover:scale-105 transition-transform duration-300">
            <h3 className="font-serif text-3xl sm:text-4xl font-bold text-coffee-900 mb-2">
              {ownerName}
            </h3>
            <p className="text-gold font-bold text-lg mb-6">
              Founder & Coffee Enthusiast
            </p>

            <div className="space-y-6">
              <div className="border-b border-coffee-200 pb-4">
                <p className="text-sm font-semibold text-coffee-600 mb-2 uppercase tracking-wider">
                  📞 Phone Number
                </p>
                <p className="text-xl font-bold text-coffee-900">
                  {contactNumber}
                </p>
              </div>

              <div className="border-b border-coffee-200 pb-4">
                <p className="text-sm font-semibold text-coffee-600 mb-2 uppercase tracking-wider">
                  ✉️ Email
                </p>
                <p className="text-lg text-coffee-800">{ownerEmail}</p>
              </div>

              <div className="border-b border-coffee-200 pb-4">
                <p className="text-sm font-semibold text-coffee-600 mb-2 uppercase tracking-wider">
                  📍 Location
                </p>
                <p className="text-lg text-coffee-800">
                  Lucky Hideout, Godda Jharkhand
                </p>
              </div>

              <div>
                <p className="text-sm font-semibold text-coffee-600 mb-3 uppercase tracking-wider">
                  About Owner
                </p>
                <p className="text-coffee-700 leading-relaxed mb-6">
                  With over 10 years of experience in the hospitality industry,
                  Yesh Thakur brings passion and expertise to every cup of
                  coffee and dish served at Lucky Hideout.
                </p>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <button
                onClick={handleCall}
                className="flex-1 px-6 py-3 bg-gold text-coffee-900 font-bold rounded-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
              >
                📞 Call Now
              </button>
              <button
                onClick={handleWhatsApp}
                className="flex-1 px-6 py-3 bg-green-500 text-white font-bold rounded-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-105"
              >
                💬 WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
