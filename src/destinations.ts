// src/destinations.ts
export interface Destination {
  id: number;
  ville: string;
  prix: string;
  duree: string;
  image: string;
}

export const listeDestinations: Destination[] = [
  { id: 1, ville: "Rome, Italie", prix: "$5.42k", duree: "10 Jours", image: "https://images.pexels.com/photos/34048470/pexels-photo-34048470.jpeg" },
  { id: 2, ville: "Londres, UK", prix: "$4.2k", duree: "12 Jours", image: "https://images.pexels.com/photos/19466056/pexels-photo-19466056.jpeg" },
  { id: 3, ville: "Tokyo, Japon", prix: "$6.5k", duree: "14 Jours", image: "https://images.pexels.com/photos/39083282/pexels-photo-39083282.jpeg" },
  { id: 4, ville: "Paris, France", prix: "$3.9k", duree: "7 Jours", image: "https://images.pexels.com/photos/34773160/pexels-photo-34773160.jpeg" },
  { id: 5, ville: "Barcelone, Espagne", prix: "$4.8k", duree: "9 Jours", image: "https://images.pexels.com/photos/14965414/pexels-photo-14965414.jpeg" },
  { id: 6, ville: "New York, USA", prix: "$7.2k", duree: "11 Jours", image: "https://media.istockphoto.com/id/1406960186/photo/the-skyline-of-new-york-city-united-states.jpg?s=2048x2048&w=is&k=20&c=24qoEDZ89uG9yeBwXeauvBpRWSl0gRQVpSnc7AL0Nw4=" }
];
