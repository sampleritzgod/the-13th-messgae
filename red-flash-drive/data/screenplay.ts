export type ScriptElement =
  | { type: "action"; text: string }
  | { type: "dialogue"; character: string; parenthetical?: string; line: string }
  | { type: "transition"; text: string };

export type Scene = {
  id: string;
  number: number;
  slug: "INT." | "EXT." | "INT./EXT.";
  location: string;
  time: string;
  beat: string;
  elements: ScriptElement[];
};

export const SCREENPLAY: Scene[] = [
  {
    id: "scene-1",
    number: 1,
    slug: "INT.",
    location: "COLLEGE CLASSROOM",
    time: "EVENING",
    beat: "Flash Drive Found",
    elements: [
      {
        type: "action",
        text: "An empty lecture hall. Dust drifts through a slanting bar of orange light. Chairs sit crooked, abandoned mid-thought. ARYAN (21), backpack slung over one shoulder, walks the aisle collecting a forgotten notebook.",
      },
      {
        type: "action",
        text: "He stops. On the last desk, alone, sits a single RED FLASH DRIVE. He looks around. No one. He picks it up, turning it in the light.",
      },
      {
        type: "dialogue",
        character: "ARYAN",
        parenthetical: "to himself",
        line: "Somebody's gonna fail a submission tonight.",
      },
      {
        type: "action",
        text: "He almost sets it back down. Almost. Then he pockets it and walks out. Behind him, a SECURITY CAMERA swivels — tracking only him.",
      },
      { type: "transition", text: "CUT TO:" },
    ],
  },
  {
    id: "scene-2",
    number: 2,
    slug: "INT.",
    location: "COLLEGE CORRIDOR",
    time: "EVENING",
    beat: "First Threat",
    elements: [
      {
        type: "action",
        text: "Fluorescent lights hum over a long, emptying corridor. Aryan walks, earphones in. He unzips his bag for his keys and freezes.",
      },
      {
        type: "action",
        text: "A folded note he didn't put there. He opens it. Block letters, printed:",
      },
      {
        type: "action",
        text: "\"RETURN THE DRIVE BY MIDNIGHT. TELL NO ONE. OR YOU DISAPPEAR.\"",
      },
      {
        type: "action",
        text: "He spins around. At the far end of the corridor, a tall figure in a dark hood — THE MASKED MAN — stands perfectly still, watching. The lights flicker. When they steady, the figure is gone.",
      },
      {
        type: "dialogue",
        character: "ARYAN",
        parenthetical: "breath shaking",
        line: "Okay. Okay, not funny.",
      },
      { type: "transition", text: "CUT TO:" },
    ],
  },
  {
    id: "scene-3",
    number: 3,
    slug: "INT.",
    location: "KABIR'S DORM ROOM",
    time: "NIGHT",
    beat: "First Threat",
    elements: [
      {
        type: "action",
        text: "Monitors glow. Cables everywhere. KABIR (21), hoodie, energy drink, spins in his chair as Aryan bursts in and drops the note on the desk.",
      },
      {
        type: "dialogue",
        character: "KABIR",
        line: "You found a mystery drive and a death threat in one evening. That's efficient.",
      },
      {
        type: "dialogue",
        character: "ARYAN",
        line: "Can you open it or not?",
      },
      {
        type: "action",
        text: "Kabir plugs in the red drive. The screen throws up a wall of red text: ACCESS DENIED. ENCRYPTED.",
      },
      {
        type: "dialogue",
        character: "KABIR",
        parenthetical: "grinning",
        line: "Military-grade. On a student's keychain. Now I'm interested.",
      },
      {
        type: "dialogue",
        character: "ARYAN",
        line: "Kabir, somebody followed me.",
      },
      {
        type: "dialogue",
        character: "KABIR",
        parenthetical: "already typing",
        line: "Then let's find out why before they catch up.",
      },
      { type: "transition", text: "CUT TO:" },
    ],
  },
  {
    id: "scene-4",
    number: 4,
    slug: "INT.",
    location: "COLLEGE LIBRARY — BACK STACKS",
    time: "NIGHT",
    beat: "Investigation",
    elements: [
      {
        type: "action",
        text: "Towers of shelves. A single laptop light. Aryan and Kabir hunch over the screen. A progress bar finally hits 100%. Folders bloom open — spreadsheets, scanned documents, photographs.",
      },
      {
        type: "dialogue",
        character: "KABIR",
        parenthetical: "quiet",
        line: "These are payment records. From the college trust. Crores. Going somewhere they shouldn't.",
      },
      {
        type: "action",
        text: "A voice behind them. They jump. RIYA (21), camera around her neck, steps out from the stacks.",
      },
      {
        type: "dialogue",
        character: "RIYA",
        line: "I've been chasing that file for three weeks. You two just walked into the middle of it.",
      },
      {
        type: "dialogue",
        character: "ARYAN",
        line: "Who are you?",
      },
      {
        type: "dialogue",
        character: "RIYA",
        line: "Someone who knows that everyone who's held that drive has gone missing. You're number four.",
      },
      {
        type: "action",
        text: "She turns her own screen toward them — three student ID photos, each stamped: MISSING.",
      },
      {
        type: "dialogue",
        character: "RIYA",
        line: "The names in those records? They're all signed off by one person on campus.",
      },
      { type: "transition", text: "CUT TO:" },
    ],
  },
  {
    id: "scene-5",
    number: 5,
    slug: "INT.",
    location: "PROFESSOR MEHTA'S OFFICE",
    time: "NIGHT",
    beat: "Investigation",
    elements: [
      {
        type: "action",
        text: "Warm lamplight. Bookshelves. PROFESSOR MEHTA (50s), composed, pours tea he won't drink. Aryan sits across from him, drive clutched in his fist.",
      },
      {
        type: "dialogue",
        character: "MEHTA",
        line: "You did the right thing coming to me, Aryan. A campus has eyes everywhere. Some of them are not friendly.",
      },
      {
        type: "dialogue",
        character: "ARYAN",
        line: "Sir, there are records on it. Money. Students who vanished.",
      },
      {
        type: "action",
        text: "A flicker — barely — crosses Mehta's face. He smiles it away.",
      },
      {
        type: "dialogue",
        character: "MEHTA",
        line: "Then we take it to the authorities together. Tomorrow. Tonight, you stay where it's safe. Give it to me for safekeeping.",
      },
      {
        type: "action",
        text: "Aryan's hand tightens on the drive. Outside the window, a shadow crosses the glass. He doesn't hand it over.",
      },
      {
        type: "dialogue",
        character: "ARYAN",
        parenthetical: "standing",
        line: "I'll hold onto it. Thank you, sir.",
      },
      { type: "transition", text: "CUT TO:" },
    ],
  },
  {
    id: "scene-6",
    number: 6,
    slug: "INT.",
    location: "COLLEGE CORRIDOR",
    time: "NIGHT",
    beat: "Chase Begins",
    elements: [
      {
        type: "action",
        text: "Aryan walks fast. Footsteps echo — not his. He glances back. THE MASKED MAN, moving with terrible calm, then faster. Aryan runs.",
      },
      {
        type: "action",
        text: "Doors blur past. He shoulders through a fire exit. Phone buzzing — KABIR calling.",
      },
      {
        type: "dialogue",
        character: "KABIR",
        parenthetical: "over phone, frantic",
        line: "Aryan, the drive pings a location every ten minutes — they can SEE you. Get to the parking area, I'm bringing the bike!",
      },
      {
        type: "action",
        text: "The Masked Man hurls a chair. It shatters glass beside Aryan's head. Aryan crashes through the stairwell door, taking the steps three at a time.",
      },
      { type: "transition", text: "CUT TO:" },
    ],
  },
  {
    id: "scene-7",
    number: 7,
    slug: "EXT.",
    location: "PARKING AREA",
    time: "NIGHT",
    beat: "Betrayal",
    elements: [
      {
        type: "action",
        text: "Rows of silent cars under sick yellow light. Aryan sprints out, chest heaving. Riya stands by a parked car, waving him over.",
      },
      {
        type: "dialogue",
        character: "RIYA",
        line: "Here! Get in, quick!",
      },
      {
        type: "action",
        text: "Aryan runs to her — then slows. The car door opens from inside. PROFESSOR MEHTA steps out. Calm. Holding a gun.",
      },
      {
        type: "dialogue",
        character: "ARYAN",
        parenthetical: "to Riya, betrayed",
        line: "You brought me to him.",
      },
      {
        type: "dialogue",
        character: "RIYA",
        parenthetical: "stricken",
        line: "I didn't — Aryan, I swear I didn't know —",
      },
      {
        type: "dialogue",
        character: "MEHTA",
        line: "The drive, Aryan. Slowly. You have no idea how many people I've kept quiet to protect this institution.",
      },
      {
        type: "action",
        text: "Aryan slowly holds out the red drive. Mehta snatches it — and in that instant, THE MASKED MAN steps from the shadows behind Mehta. Gun raised. At Mehta.",
      },
      {
        type: "dialogue",
        character: "MASKED MAN",
        parenthetical: "voice low",
        line: "Drop it, Professor. It was never yours to bury.",
      },
      { type: "transition", text: "CUT TO:" },
    ],
  },
  {
    id: "scene-8",
    number: 8,
    slug: "EXT.",
    location: "COLLEGE ROOFTOP",
    time: "NIGHT",
    beat: "Final Confrontation",
    elements: [
      {
        type: "action",
        text: "Wind and city lights. Mehta backs onto the rooftop, gun swinging between Aryan and the advancing Masked Man. Kabir and Riya edge through the door behind Aryan.",
      },
      {
        type: "dialogue",
        character: "MEHTA",
        parenthetical: "to the Masked Man",
        line: "Whoever you are — name your price.",
      },
      {
        type: "dialogue",
        character: "MASKED MAN",
        line: "You already paid it. Three students. They were my price.",
      },
      {
        type: "action",
        text: "The Masked Man pulls off the mask. It's a face Aryan knows from a missing-student photo — older now, scarred. The brother of a vanished boy.",
      },
      {
        type: "dialogue",
        character: "MASKED MAN",
        parenthetical: "trembling",
        line: "My brother held this drive. Then he was just... gone. I needed someone to finally open it where the world could see.",
      },
      {
        type: "action",
        text: "Mehta lunges for the ledge to throw the drive into the dark. Aryan tackles him. The gun skitters away. A struggle at the edge — Riya's camera FLASHING, recording everything live.",
      },
      {
        type: "dialogue",
        character: "RIYA",
        parenthetical: "shouting",
        line: "It's already uploading, Mehta! Every file! It's done!",
      },
      {
        type: "action",
        text: "Mehta freezes, realizing. Sirens rise from below. He sags against the ledge, finished.",
      },
      { type: "transition", text: "CUT TO:" },
    ],
  },
  {
    id: "scene-9",
    number: 9,
    slug: "EXT.",
    location: "COLLEGE ROOFTOP",
    time: "DAWN",
    beat: "Twist Ending",
    elements: [
      {
        type: "action",
        text: "First light. Below, red and blue lights wash the campus. Mehta is led away. Kabir exhales for what feels like the first time all night.",
      },
      {
        type: "dialogue",
        character: "KABIR",
        line: "It's over. We actually—it's over.",
      },
      {
        type: "action",
        text: "Aryan turns the red drive over in his palm one last time. On the back, almost worn away, three tiny scratched letters he hadn't noticed before: his own initials. A.R.S.",
      },
      {
        type: "dialogue",
        character: "ARYAN",
        parenthetical: "barely audible",
        line: "This was mine. I left it in that classroom... last year. Before I forgot I ever made it.",
      },
      {
        type: "action",
        text: "Riya stares at him. The Masked Man — now unmasked, in handcuffs himself — meets Aryan's eyes and nods slowly, as if to say: now you understand.",
      },
      {
        type: "dialogue",
        character: "RIYA",
        parenthetical: "quiet",
        line: "You weren't pulled into this story, Aryan. You started it.",
      },
      {
        type: "action",
        text: "Aryan looks at the drive — the smallest thing in his hand, and the biggest secret he ever kept from himself. He closes his fist around it as the dawn rises.",
      },
      { type: "transition", text: "FADE OUT." },
    ],
  },
];
