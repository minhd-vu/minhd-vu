export interface IProject {
  title: string;
  subtitle: string;
  description: string;
  demo: string;
  code: string;
}

export const projects: IProject[] = [
  {
    title: "Assassins",
    subtitle: "MERN Stack",
    description:
      "Assassins is a game that can be played almost anywhere, but best done in semi-crowded environments. The goal of the game is to be the last remaining person alive and to assassinate whomever you are assigned. This project is designed to easily faciliate the distribution of targets to players, along with the transfer of targets post-assassination.",
    demo: "https://assassinspartygame.herokuapp.com/",
    code: "https://github.com/minhd-vu/assassins",
  },
  {
    title: "BookTailor",
    subtitle: "Flutter Firebase MERN",
    description:
      "Have you ever struggled with finding a new book to read? Can’t get out of your reading slump? BookTailor will tailor book recommendations to YOU, based purely on what you do on the app! You won’t need to tell us which books you’ve read in the past or what you like. After all, you don’t want to read the same book twice.",
    demo: "https://play.google.com/store/apps/details?id=com.booktailor.booktailor",
    code: "https://github.com/BookTailor",
  },
  {
    title: "Location-Based NFT Minter",
    subtitle: "Solidity React IPFS",
    description:
      "Allows users to mint custom NFTs with location data. Users can view NFTs on interactive map with images pinned to the minting location. Planned future developments in AR+GPS with Unity for Pok ́emon GO like interaction with NFTs.",
    demo: "https://minhd-vu.github.io/cryptocurrency-p1/",
    code: "https://github.com/minhd-vu/cryptocurrency-p1",
  },
];

export const skills = [
  "Go",
  "Node",
  "React",
  "MongoDB",
  "SQL",
  "C/C++",
  "Java",
  "Python",
  "C#",
  "Unity",
  "Flutter",
  "JS/TS",
];
