export const FILM = {
  title: "THE RED FLASH DRIVE",
  tagline: "Sometimes the smallest file contains the biggest secret.",
  runtime: "15 Minutes",
  genre: "Action Thriller",
  year: "2026",
  rating: "Festival Cut",
};

export type Character = {
  id: string;
  name: string;
  role: string;
  importance: string;
  description: string;
};

export const CHARACTERS: Character[] = [
  {
    id: "aryan",
    name: "Aryan",
    role: "Main Lead",
    importance: "Protagonist",
    description:
      "A sharp but unremarkable final-year computer science student. When he picks up a stray red flash drive in an empty classroom, his ordinary life fractures into a 24-hour fight for survival. Quick thinking is his only weapon.",
  },
  {
    id: "kabir",
    name: "Kabir",
    role: "The Friend",
    importance: "Ally",
    description:
      "Aryan's loyal best friend and the campus tech prodigy. Funny, fearless, and dangerously curious. He cracks the drive's encryption — and in doing so, paints a target on both their backs.",
  },
  {
    id: "riya",
    name: "Riya",
    role: "The Investigator",
    importance: "Wildcard",
    description:
      "A relentless student-journalist chasing a story everyone told her to drop. She has been watching the campus for weeks. Aryan can't tell if she is his lifeline or his liability.",
  },
  {
    id: "mehta",
    name: "Professor Mehta",
    role: "The Mentor",
    importance: "Authority",
    description:
      "A respected faculty member who offers Aryan protection and counsel. Calm, articulate, and always two steps ahead — which is precisely what makes him impossible to read.",
  },
  {
    id: "masked-man",
    name: "The Masked Man",
    role: "The Threat",
    importance: "Antagonist",
    description:
      "A silent figure who appears wherever the drive goes. Methodical and merciless, he wants the file erased and every witness with it. His mask hides a face Aryan already knows.",
  },
];

export type TimelineBeat = {
  id: string;
  label: string;
  detail: string;
};

export const TIMELINE: TimelineBeat[] = [
  {
    id: "found",
    label: "Flash Drive Found",
    detail:
      "Aryan discovers a red flash drive left behind in an empty classroom and pockets it out of curiosity.",
  },
  {
    id: "threat",
    label: "First Threat",
    detail:
      "A typed note in his bag warns him to return the drive by midnight — or disappear.",
  },
  {
    id: "investigation",
    label: "Investigation",
    detail:
      "Kabir decrypts the drive in the library while Riya reveals what the hidden files really expose.",
  },
  {
    id: "chase",
    label: "Chase Begins",
    detail:
      "The Masked Man corners them. A breathless run through corridors spills into the parking area.",
  },
  {
    id: "betrayal",
    label: "Betrayal",
    detail:
      "Someone Aryan trusted hands him over. The drive changes hands at gunpoint.",
  },
  {
    id: "confrontation",
    label: "Final Confrontation",
    detail:
      "On the rooftop, masks come off and the truth detonates between accusations and gunfire.",
  },
  {
    id: "twist",
    label: "Twist Ending",
    detail:
      "The file was never the secret. Aryan realizes he was the message all along.",
  },
];

export const PRODUCTION = {
  facts: [
    { label: "Genre", value: "Action Thriller" },
    { label: "Duration", value: "15 Minutes" },
    { label: "Cast", value: "5 Members" },
    { label: "Format", value: "Vertical-ready 4K" },
  ],
  locations: ["Classroom", "Corridor", "Library", "Parking Area", "Rooftop"],
  equipment: ["iPhone", "Tripod", "Basic Lighting"],
};
