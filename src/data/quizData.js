export const quizData = [
  {
    id: "q1",
    chapterId: 1,
    chapterName: "Solutions",
    question: "Which of the following colligative properties is the best for determining the molar mass of polymers and proteins?",
    options: [
      "Relative lowering of vapour pressure",
      "Elevation in boiling point",
      "Depression in freezing point",
      "Osmotic pressure"
    ],
    correctIndex: 3,
    explanation: "Osmotic pressure is measured at room temperature (prevents thermal denaturation of biomolecules) and its magnitude is large enough to be measured accurately even for very dilute polymer solutions."
  },
  {
    id: "q2",
    chapterId: 1,
    chapterName: "Solutions",
    question: "When common salt (NaCl) is dissolved in water, the boiling point of water:",
    options: [
      "Decreases",
      "Increases",
      "Remains constant",
      "First increases then decreases"
    ],
    correctIndex: 1,
    explanation: "Adding a non-volatile solute lowers the vapour pressure of the solvent. Hence, a higher temperature is required for its vapour pressure to equal atmospheric pressure (Elevation in Boiling Point: ΔTb = i·Kb·m)."
  },
  {
    id: "q3",
    chapterId: 2,
    chapterName: "Electrochemistry",
    question: "In the Lead storage battery, during discharge, what happens to the density of H₂SO₄?",
    options: [
      "Increases",
      "Decreases",
      "Remains unchanged",
      "First increases then decreases"
    ],
    correctIndex: 1,
    explanation: "During discharging, H₂SO₄ is consumed to form PbSO₄ and H₂O: Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O. The consumption of sulfuric acid and production of water causes its density to decrease from ~1.30 g/mL to ~1.15 g/mL."
  },
  {
    id: "q4",
    chapterId: 2,
    chapterName: "Electrochemistry",
    question: "Which cell has a constant potential throughout its operating life?",
    options: [
      "Dry cell (Leclanché)",
      "Lead storage cell",
      "Mercury cell",
      "Ni-Cd cell"
    ],
    correctIndex: 2,
    explanation: "The overall reaction of mercury cell is Zn(Hg) + HgO(s) → ZnO(s) + Hg(l). It does not involve any ions in solution whose concentration can change during its lifecycle."
  },
  {
    id: "q5",
    chapterId: 3,
    chapterName: "Chemical Kinetics",
    question: "The unit of rate constant for a zero order reaction is:",
    options: [
      "s⁻¹",
      "mol L⁻¹ s⁻¹",
      "L mol⁻¹ s⁻¹",
      "L² mol⁻² s⁻¹"
    ],
    correctIndex: 1,
    explanation: "For zero order, Rate = k[A]⁰ = k. Since rate has units mol L⁻¹ s⁻¹, the rate constant k also has units mol L⁻¹ s⁻¹."
  },
  {
    id: "q6",
    chapterId: 3,
    chapterName: "Chemical Kinetics",
    question: "If the initial concentration of a reactant in a first-order reaction is doubled, its half-life (t₁/₂):",
    options: [
      "Is doubled",
      "Is halved",
      "Remains unchanged",
      "Becomes four times"
    ],
    correctIndex: 2,
    explanation: "For a first order reaction, t₁/₂ = 0.693 / k. It is completely independent of the initial concentration of the reactant."
  },
  {
    id: "q7",
    chapterId: 4,
    chapterName: "d- and f-Block Elements",
    question: "The highest oxidation state exhibited by an element of the 3d transition series is:",
    options: [
      "+6 (Cr)",
      "+7 (Mn)",
      "+8 (Os)",
      "+5 (V)"
    ],
    correctIndex: 1,
    explanation: "Manganese (Mn) exhibits a maximum oxidation state of +7 in KMnO₄ by utilizing all its 3d⁵ and 4s² valence electrons."
  },
  {
    id: "q8",
    chapterId: 4,
    chapterName: "d- and f-Block Elements",
    question: "Which of the following ions is diamagnetic and colourless in aqueous solution?",
    options: [
      "Fe²⁺",
      "Cu²⁺",
      "Sc³⁺",
      "Ni²⁺"
    ],
    correctIndex: 2,
    explanation: "Sc³⁺ has atomic number 21 and electronic configuration [Ar] 3d⁰. Having zero unpaired electrons (d⁰), it is diamagnetic and cannot undergo d-d electronic transitions, making it colourless."
  },
  {
    id: "q9",
    chapterId: 5,
    chapterName: "Coordination Compounds",
    question: "The geometry and magnetic character of [Ni(CO)₄] are respectively:",
    options: [
      "Tetrahedral and diamagnetic",
      "Square planar and paramagnetic",
      "Tetrahedral and paramagnetic",
      "Square planar and diamagnetic"
    ],
    correctIndex: 0,
    explanation: "CO is a strong field ligand that forces pairing of all 3d electrons of Ni(0) [3d⁸ 4s² → 3d¹⁰], forcing sp³ hybridisation. Hence, it is tetrahedral and diamagnetic (n = 0)."
  },
  {
    id: "q10",
    chapterId: 6,
    chapterName: "Haloalkanes and Haloarenes",
    question: "An SN2 reaction at an asymmetric carbon of an optical isomer always results in:",
    options: [
      "Racemisation",
      "Retention of configuration",
      "Inversion of configuration",
      "Both inversion and retention in equal amounts"
    ],
    correctIndex: 2,
    explanation: "SN2 proceeds via backside attack of the incoming nucleophile opposite to the leaving group, causing a 100% Walden inversion of configuration."
  },
  {
    id: "q11",
    chapterId: 7,
    chapterName: "Alcohols, Phenols and Ethers",
    question: "Phenol reacts with chloroform and aqueous sodium hydroxide at 340 K to form:",
    options: [
      "Benzoic acid",
      "Salicylaldehyde",
      "Salicylic acid",
      "Chlorobenzene"
    ],
    correctIndex: 1,
    explanation: "This is the Reimer-Tiemann reaction. Phenol + CHCl₃ + 3NaOH → Salicylaldehyde (o-hydroxybenzaldehyde) via intermediate dichlorocarbene (:CCl₂)."
  },
  {
    id: "q12",
    chapterId: 8,
    chapterName: "Aldehydes, Ketones and Carboxylic Acids",
    question: "Which compound gives a yellow precipitate with iodine and aqueous sodium hydroxide (Iodoform test)?",
    options: [
      "Methanol",
      "Acetophenone (C₆H₅COCH₃)",
      "Benzaldehyde",
      "Benzophenone (C₆H₅COC₆H₅)"
    ],
    correctIndex: 1,
    explanation: "Acetophenone contains the methyl ketone group (-COCH₃) which oxidises and iodinates to produce a yellow precipitate of iodoform (CHI₃)."
  },
  {
    id: "q13",
    chapterId: 9,
    chapterName: "Amines",
    question: "Which of the following tests is given ONLY by primary amines (both aliphatic and aromatic)?",
    options: [
      "Lucas test",
      "Carbylamine test",
      "Tollens' test",
      "Biuret test"
    ],
    correctIndex: 1,
    explanation: "Primary amines when heated with chloroform and alcoholic KOH yield foul-smelling isocyanides (carbylamines). Secondary and tertiary amines do not react."
  },
  {
    id: "q14",
    chapterId: 10,
    chapterName: "Biomolecules",
    question: "Which amino acid is optically inactive?",
    options: [
      "Alanine",
      "Glycine",
      "Valine",
      "Lysine"
    ],
    correctIndex: 1,
    explanation: "Glycine (H₂N-CH₂-COOH) has two hydrogen atoms attached to its α-carbon, making it achiral and therefore optically inactive."
  },
  {
    id: "q15",
    chapterId: 10,
    chapterName: "Biomolecules",
    question: "During denaturation of a protein, which structure remains intact?",
    options: [
      "Primary structure",
      "Secondary structure",
      "Tertiary structure",
      "Quaternary structure"
    ],
    correctIndex: 0,
    explanation: "Denaturation breaks weak hydrogen and disulfide bonds causing unfolding of tertiary/secondary conformations, but the covalent peptide bonds of the primary amino acid sequence remain intact."
  }
];
