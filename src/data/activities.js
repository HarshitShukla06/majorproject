// 🌍 Activities Data for Indian Destinations

const activitiesData = {
  goa: {
    adventure: ["Scuba Diving", "Jet Ski", "Parasailing", "Banana Ride"],
    romantic: ["Beach Dinner", "Sunset Cruise", "Couple Spa", "Beach Walk"],
    family: ["Beach Fun", "Boat Ride", "Dolphin Tour", "Water Park"],
    relaxation: ["Beach Relax", "Cafe Hopping", "Sunset View", "Yoga"],
  },

  manali: {
    adventure: ["Skiing", "Snow Trek", "Paragliding", "River Rafting"],
    romantic: ["Snow Walk", "Hot Springs", "River Dinner", "Mountain View"],
    family: ["Snow Play", "Temple Visit", "Mall Road", "Picnic"],
    relaxation: ["Nature Walk", "Cafe", "Mountain View", "Spa"],
  },

  shimla: {
    adventure: ["Trekking", "Ice Skating", "Camping"],
    romantic: ["Snow Walk", "Mall Road", "Sunset Point"],
    family: ["Toy Train", "Zoo", "Park"],
    relaxation: ["Hill View", "Cafe", "Nature Walk"],
  },

  jaipur: {
    adventure: ["Fort Climb", "Desert Safari", "Zipline", "Camel Ride"],
    romantic: ["Palace Dinner", "Hawa Mahal Visit", "Shopping", "Sunset View"],
    family: ["Zoo", "Museum", "Fort Tour", "Garden Visit"],
    relaxation: ["City Tour", "Cafe", "Market", "Cultural Show"],
  },

  udaipur: {
    adventure: ["Boat Ride", "Cycling", "Fort Visit"],
    romantic: ["Lake Dinner", "Sunset Boat Ride", "Palace Visit"],
    family: ["Zoo", "Garden", "City Tour"],
    relaxation: ["Lake View", "Cafe", "Shopping"],
  },

  jaisalmer: {
    adventure: ["Desert Safari", "Dune Bashing", "Camel Ride"],
    romantic: ["Desert Dinner", "Sunset Dunes", "Camping"],
    family: ["Fort Visit", "Cultural Show", "Desert Tour"],
    relaxation: ["Heritage Walk", "Cafe", "Shopping"],
  },

  delhi: {
    adventure: ["Cycle Tour", "Heritage Walk", "Street Explore"],
    romantic: ["India Gate Night", "Cafe Date", "Garden Walk"],
    family: ["Zoo", "Museum", "Akshardham", "Science Center"],
    relaxation: ["Shopping", "Food Tour", "Monuments"],
  },

  mumbai: {
    adventure: ["Boat Ride", "Cycling", "Water Sports"],
    romantic: ["Marine Drive", "Dinner Cruise", "Beach Walk"],
    family: ["Zoo", "Gateway of India", "Film City"],
    relaxation: ["Cafe", "Shopping", "Street Food"],
  },

  pune: {
    adventure: ["Trekking", "Camping", "Cycling"],
    romantic: ["Hill Sunset", "Cafe Date", "Lake Visit"],
    family: ["Zoo", "Museum", "Park"],
    relaxation: ["Cafe", "Shopping", "Food Tour"],
  },

  bangalore: {
    adventure: ["Trekking", "Cycling", "Camping"],
    romantic: ["Lake Date", "Cafe Hopping", "Night Walk"],
    family: ["Zoo", "Park", "Science Museum"],
    relaxation: ["Garden Visit", "Shopping", "Food Tour"],
  },

  hyderabad: {
    adventure: ["City Ride", "Trekking", "Boating"],
    romantic: ["Lake Dinner", "Night View", "Cafe Date"],
    family: ["Zoo", "Ramoji Film City", "Museum"],
    relaxation: ["Shopping", "Food Tour", "Charminar Visit"],
  },

  chennai: {
    adventure: ["Water Sports", "Beach Cycling"],
    romantic: ["Beach Walk", "Sunset View", "Cafe"],
    family: ["Zoo", "Aquarium", "Park"],
    relaxation: ["Temple Visit", "Shopping", "Beach Relax"],
  },

  kerala: {
    adventure: ["Trekking", "Wildlife Safari", "Boating"],
    romantic: ["Houseboat Stay", "Backwater Cruise", "Beach Walk"],
    family: ["Village Tour", "Zoo", "Beach Fun"],
    relaxation: ["Ayurvedic Spa", "Nature Walk", "Backwater Relax"],
  },

  alleppey: {
    adventure: ["Kayaking", "Boat Ride"],
    romantic: ["Houseboat Stay", "Sunset Cruise"],
    family: ["Village Tour", "Boat Ride"],
    relaxation: ["Backwater Relax", "Nature View"],
  },

  rishikesh: {
    adventure: ["River Rafting", "Bungee Jumping", "Cliff Jumping"],
    romantic: ["Ganga Aarti", "River Walk"],
    family: ["Temple Visit", "Nature Walk"],
    relaxation: ["Yoga", "Meditation", "River Side Relax"],
  },

  haridwar: {
    adventure: ["Temple Trek", "River Walk"],
    romantic: ["Ganga Aarti", "Evening Walk"],
    family: ["Temple Visit", "Market"],
    relaxation: ["Spiritual Stay", "Meditation"],
  },

  darjeeling: {
    adventure: ["Trekking", "Camping"],
    romantic: ["Tea Garden Walk", "Sunrise View"],
    family: ["Toy Train", "Zoo"],
    relaxation: ["Tea Tasting", "Nature Walk"],
  },

  gangtok: {
    adventure: ["Trekking", "Cable Car Ride"],
    romantic: ["Lake Visit", "Mountain View"],
    family: ["Zoo", "Monastery"],
    relaxation: ["Cafe", "Nature Walk"],
  },

  leh: {
    adventure: ["Bike Trip", "Trekking"],
    romantic: ["Lake View", "Camping"],
    family: ["Monastery Visit", "Sightseeing"],
    relaxation: ["Photography", "Nature View"],
  },

  andaman: {
    adventure: ["Scuba Diving", "Snorkeling", "Sea Walk"],
    romantic: ["Beach Dinner", "Sunset Cruise"],
    family: ["Boat Ride", "Beach Fun"],
    relaxation: ["Beach Relax", "Island Walk"],
  },

  agra: {
    adventure: ["City Ride", "Cycling Tour"],
    romantic: ["Taj Mahal Sunrise", "Garden Walk"],
    family: ["Fort Visit", "Museum"],
    relaxation: ["Cafe", "Shopping"],
  },



  // ===============================
// ➕ ADDITIONAL DESTINATIONS
// ===============================

varanasi: {
  adventure: ["Boat Ride", "Ghat Walk"],
  romantic: ["Evening Aarti View", "River Walk"],
  family: ["Temple Visit", "Museum", "Ghat Tour"],
  relaxation: ["Meditation", "Spiritual Walk"],
},

munnar: {
  adventure: ["Trekking", "Camping"],
  romantic: ["Tea Garden Walk", "Sunset Point"],
  family: ["Park Visit", "Dam Visit"],
  relaxation: ["Tea Plantation Visit", "Nature Walk"],
},

coorg: {
  adventure: ["Trekking", "River Rafting"],
  romantic: ["Coffee Estate Stay", "Sunset View"],
  family: ["Waterfall Visit", "Zoo"],
  relaxation: ["Nature Walk", "Coffee Tour"],
},

ooty: {
  adventure: ["Trekking", "Boating"],
  romantic: ["Lake View", "Garden Walk"],
  family: ["Toy Train", "Botanical Garden"],
  relaxation: ["Hill View", "Tea Garden"],
},

hampi: {
  adventure: ["Rock Climbing", "Cycling"],
  romantic: ["Sunset View", "Temple Walk"],
  family: ["Temple Tour", "Museum"],
  relaxation: ["Heritage Walk", "Photography"],
},

amritsar: {
  adventure: ["City Tour", "Border Visit"],
  romantic: ["Golden Temple Night View"],
  family: ["Jallianwala Bagh", "Museum"],
  relaxation: ["Langar Experience", "Market Walk"],
},

kashmir: {
  adventure: ["Skiing", "Trekking"],
  romantic: ["Shikara Ride", "Houseboat Stay"],
  family: ["Garden Visit", "Cable Car"],
  relaxation: ["Lake View", "Nature Stay"],
},

pondicherry: {
  adventure: ["Cycling", "Water Sports"],
  romantic: ["Beach Walk", "Cafe Date"],
  family: ["Auroville Visit", "Park"],
  relaxation: ["French Colony Walk", "Shopping"],
},

tirupati: {
  adventure: ["Hill Trek"],
  romantic: ["Temple Visit"],
  family: ["Temple Darshan"],
  relaxation: ["Spiritual Stay"],
},

araku: {
  adventure: ["Trekking", "Cave Visit"],
  romantic: ["Valley View", "Train Ride"],
  family: ["Coffee Museum", "Garden"],
  relaxation: ["Nature Walk"],
},

visakhapatnam: {
  adventure: ["Water Sports", "Trekking"],
  romantic: ["Beach Walk", "Sunset View"],
  family: ["Submarine Museum", "Zoo"],
  relaxation: ["Beach Relax"],
},

srisailam: {
  adventure: ["Forest Trek", "Boating"],
  romantic: ["Temple View"],
  family: ["Temple Visit"],
  relaxation: ["Nature Stay"],
},

vijayawada: {
  adventure: ["River Boating"],
  romantic: ["Hill View"],
  family: ["Temple Visit", "Park"],
  relaxation: ["City Tour"],
},

gandikota: {
  adventure: ["Camping", "Rock Climbing"],
  romantic: ["Canyon Sunset"],
  family: ["Fort Visit"],
  relaxation: ["Viewpoint Relax"],
},

lambasingi: {
  adventure: ["Trekking"],
  romantic: ["Fog View", "Sunrise"],
  family: ["Nature Walk"],
  relaxation: ["Hill Relax"],
},

tawang: {
  adventure: ["Trekking", "Mountain Ride"],
  romantic: ["Lake View"],
  family: ["Monastery Visit"],
  relaxation: ["Nature Stay"],
},

ziro: {
  adventure: ["Trekking"],
  romantic: ["Valley View"],
  family: ["Cultural Visit"],
  relaxation: ["Nature Walk"],
},

kaziranga: {
  adventure: ["Jeep Safari", "Elephant Safari"],
  romantic: ["Nature Stay"],
  family: ["Wildlife Tour"],
  relaxation: ["Nature Walk"],
},

guwahati: {
  adventure: ["River Cruise"],
  romantic: ["Sunset View"],
  family: ["Temple Visit"],
  relaxation: ["City Walk"],
},

pangong: {
  adventure: ["Camping"],
  romantic: ["Lake View"],
  family: ["Sightseeing"],
  relaxation: ["Photography"],
},

nubra: {
  adventure: ["Camel Ride", "Trekking"],
  romantic: ["Desert Sunset"],
  family: ["Monastery Visit"],
  relaxation: ["Valley View"],
},

bodhgaya: {
  adventure: ["Temple Walk"],
  romantic: ["Meditation"],
  family: ["Temple Visit"],
  relaxation: ["Spiritual Stay"],
},

nalanda: {
  adventure: ["Site Walk"],
  romantic: ["Historical Tour"],
  family: ["Museum Visit"],
  relaxation: ["Heritage Walk"],
},

rajgir: {
  adventure: ["Cable Car Ride"],
  romantic: ["Hill View"],
  family: ["Temple Visit"],
  relaxation: ["Hot Springs"],
}
};

export default activitiesData;