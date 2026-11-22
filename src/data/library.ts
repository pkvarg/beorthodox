export type LibraryCategory = {
  slug: string;
  name: string;
  subcategories: string[];
};

export const articleCountLabel = (count: number) =>
  `${count} ${count === 1 ? "article" : "articles"}`;

export const LIBRARY: LibraryCategory[] = [
  {
    slug: "who-are-we",
    name: "Who are we?",
    subcategories: [],
  },
  {
    slug: "the-phenomenon",
    name: "The Phenomenon",
    subcategories: ["Why Protestants are turning to Orthodoxy and Catholicism"],
  },
  {
    slug: "the-question-of-authority",
    name: "The Question of Authority",
    subcategories: [
      "“Who gave you the Bible? The Church!”",
      "Is every Protestant his own pope?",
      "Is there a boundary and a governing vision in the Bible?",
    ],
  },
  {
    slug: "the-biblical-foundation",
    name: "The Biblical Foundation",
    subcategories: [
      "What is a Christian according to the Bible?",
      "What is it to be saved?",
      "The Church in the New Testament",
    ],
  },
  {
    slug: "the-deviation",
    name: "The Deviation",
    subcategories: [
      "Hierarchy, tradition, Eucharist: where the drift began",
      "Liturgy, temples, vestments: back to the shadows",
    ],
  },
  {
    slug: "assessing-the-present",
    name: "Assessing the Present",
    subcategories: [
      "What is missing in today’s Protestantism?",
      "The Local Churches (Watchman Nee, Witness Lee, “the Lord’s Recovery”)",
      "After conversion: satisfaction, or a 7–10 year cycle?",
    ],
  },
  {
    slug: "the-way-forward",
    name: "The Way Forward",
    subcategories: [
      "Back to the pattern: one Church from house to house today",
    ],
  },
];
