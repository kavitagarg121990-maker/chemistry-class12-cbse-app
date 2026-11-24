export const pyqData = [
  // CHAPTER 1: SOLUTIONS
  {
    id: "pyq-101",
    chapterId: 1,
    chapterName: "Solutions",
    year: "CBSE 2024",
    marks: 1,
    type: "Assertion-Reason",
    question: "Assertion (A): Aquatic species are more comfortable in cold water than in warm water.\nReason (R): Different gases have different K_H values at the same temperature.",
    options: [
      "Both (A) and (R) are true and (R) is the correct explanation of (A).",
      "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
      "(A) is true but (R) is false.",
      "(A) is false but (R) is true."
    ],
    answer: "Both (A) and (R) are true but (R) is NOT the correct explanation of (A).",
    explanation: "According to Henry's law, p = K_H · x. As temperature decreases, K_H decreases, which means solubility of oxygen in water increases. Thus, cold water contains more dissolved oxygen than warm water, making aquatic species more comfortable. While both statements are factually correct, the real reason for (A) is the temperature dependence of K_H, not just that different gases have different values."
  },
  {
    id: "pyq-102",
    chapterId: 1,
    chapterName: "Solutions",
    year: "CBSE 2023",
    marks: 2,
    type: "Short Answer",
    question: "State Raoult's law for a solution containing non-volatile solute. What type of deviation from Raoult's law is shown by a mixture of ethanol and acetone? Give reason.",
    answer: `• **Raoult's Law (1 Mark):** The relative lowering of vapour pressure of a solution containing a non-volatile solute is equal to the mole fraction of the solute in the solution:
  (p°_A - p_A) / p°_A = x_B

• **Type of Deviation & Reason (1 Mark):**
  A mixture of ethanol and acetone exhibits **Positive Deviation** from Raoult's law.
  *Reason:* Pure ethanol molecules are held together by strong intermolecular hydrogen bonds. When acetone is added, its molecules get in between ethanol molecules and break some of the hydrogen bonds. As a result, the A-B attractive interactions become weaker than A-A and B-B interactions, allowing molecules to escape into vapour phase more easily.`
  },
  {
    id: "pyq-103",
    chapterId: 1,
    chapterName: "Solutions",
    year: "CBSE 2022",
    marks: 3,
    type: "Numerical",
    question: "A 5% solution (by mass) of cane sugar (molar mass = 342 g/mol) in water has a freezing point of 271 K. Calculate the freezing point of a 5% solution (by mass) of glucose (molar mass = 180 g/mol) in water. (Freezing point of pure water = 273.15 K)",
    answer: `• **Step 1: Cane sugar solution:**
  ΔTf = T°f - Tf = 273.15 K - 271 K = 2.15 K
  Mass of sugar (w_B) = 5 g, Mass of water (w_A) = 100 - 5 = 95 g
  Molality (m₁) = (5 / 342) / (95 / 1000) = (5 × 1000) / (342 × 95) = 0.1539 mol/kg
  ΔTf = Kf · m₁  ==>  Kf = ΔTf / m₁ = 2.15 / 0.1539 = 13.97 K kg mol⁻¹  [1.5 Marks]

• **Step 2: Glucose solution:**
  Mass of glucose (w_B) = 5 g, Mass of water (w_A) = 95 g, Molar mass = 180 g/mol
  Molality (m₂) = (5 × 1000) / (180 × 95) = 0.2924 mol/kg
  ΔTf = Kf · m₂ = 13.97 × 0.2924 = 4.08 K  [1 Mark]

• **Step 3: Freezing point of glucose solution:**
  Tf = T°f - ΔTf = 273.15 K - 4.08 K = **269.07 K**  [0.5 Mark]`
  },
  {
    id: "pyq-104",
    chapterId: 1,
    chapterName: "Solutions",
    year: "CBSE 2020",
    marks: 5,
    type: "Long Answer / Case Study",
    question: "(a) What is Van 't Hoff factor (i)? What is its value for 100% dissociated Al₂(SO₄)₃?\n(b) Determine the osmotic pressure of a solution prepared by dissolving 25 mg of K₂SO₄ in 2 litre of water at 25 °C, assuming that it is completely dissociated. (Molar mass of K₂SO₄ = 174 g/mol, R = 0.0821 L atm K⁻¹ mol⁻¹).",
    answer: `• **Part (a) [2 Marks]:**
  Van 't Hoff factor (i) is defined as the ratio of normal (theoretical) molar mass to the observed (experimental) molar mass, or the ratio of total number of moles of particles after dissociation/association to the total number of moles of particles before:
  i = (Theoretical Molar Mass) / (Observed Molar Mass)
  For Al₂(SO₄)₃ → 2 Al³⁺ + 3 SO₄²⁻ (Total ions n = 2 + 3 = 5)
  For 100% dissociation (α = 1): **i = 5**.

• **Part (b) [3 Marks]:**
  Given: Mass of K₂SO₄ (w) = 25 mg = 0.025 g
  Molar mass (M) = 174 g/mol
  Volume (V) = 2 L
  Temperature (T) = 25 + 273 = 298 K
  Dissociation: K₂SO₄ → 2 K⁺ + SO₄²⁻  ==> n = 3, so **i = 3**
  Formula: π = i · C · R · T = i · (w / (M · V)) · R · T
  π = 3 × [ 0.025 / (174 × 2) ] × 0.0821 × 298
  π = 3 × (0.025 / 348) × 24.4658
  π = 3 × 0.0000718 × 24.4658 = **5.27 × 10⁻³ atm** (or 5.34 × 10⁻³ bar).`
  },

  // CHAPTER 2: ELECTROCHEMISTRY
  {
    id: "pyq-201",
    chapterId: 2,
    chapterName: "Electrochemistry",
    year: "CBSE 2024",
    marks: 1,
    type: "MCQ",
    question: "The unit of molar conductivity is:",
    options: [
      "S cm⁻¹",
      "S cm² mol⁻¹",
      "S⁻¹ cm² mol⁻¹",
      "S cm mol⁻¹"
    ],
    answer: "S cm² mol⁻¹",
    explanation: "Λm = (κ × 1000) / M. κ is in S cm⁻¹ and M is in mol L⁻¹ (mol cm⁻³), so Λm has SI unit S m² mol⁻¹ or CGS unit S cm² mol⁻¹."
  },
  {
    id: "pyq-202",
    chapterId: 2,
    chapterName: "Electrochemistry",
    year: "CBSE 2023",
    marks: 3,
    type: "Numerical",
    question: "Calculate the EMF of the following cell at 298 K:\nNi(s) | Ni²⁺(0.01 M) || Ag⁺(0.1 M) | Ag(s)\nGiven: E°(Ni²⁺/Ni) = -0.25 V, E°(Ag⁺/Ag) = +0.80 V. [log 10 = 1]",
    answer: `• **Step 1: Cell reaction & E°cell:**
  Anode: Ni(s) → Ni²⁺(aq) + 2e⁻
  Cathode: 2 Ag⁺(aq) + 2e⁻ → 2 Ag(s)
  Overall: Ni(s) + 2 Ag⁺(aq) → Ni²⁺(aq) + 2 Ag(s)  [n = 2 electrons transferred]
  E°cell = E°cathode - E°anode = 0.80 V - (-0.25 V) = **+1.05 V**  [1 Mark]

• **Step 2: Nernst Equation application:**
  Ecell = E°cell - (0.0591 / n) · log₁₀ [ [Ni²⁺] / [Ag⁺]² ]
  Ecell = 1.05 - (0.0591 / 2) · log₁₀ [ 0.01 / (0.1)² ]
  Ecell = 1.05 - 0.02955 · log₁₀ [ 10⁻² / 10⁻² ]
  Ecell = 1.05 - 0.02955 · log₁₀(1)  [Since log 1 = 0]
  **Ecell = +1.05 V**  [2 Marks]`
  },
  {
    id: "pyq-203",
    chapterId: 2,
    chapterName: "Electrochemistry",
    year: "CBSE 2020",
    marks: 5,
    type: "Long Answer",
    question: "(a) State Kohlrausch's law of independent migration of ions. Write its two applications.\n(b) The conductivity of 0.001028 mol L⁻¹ acetic acid is 4.95 × 10⁻⁵ S cm⁻¹. Calculate its dissociation constant (Ka) if Λ°m for acetic acid is 390.5 S cm² mol⁻¹.",
    answer: `• **Part (a) [2 Marks]:**
  *Statement:* Limiting molar conductivity of an electrolyte can be represented as the sum of individual contributions of anion and cation of the electrolyte:
  Λ°m = ν₊ λ°₊ + ν₋ λ°₋
  *Applications:*
  1. Calculation of limiting molar conductivity (Λ°m) for weak electrolytes (e.g. CH₃COOH from strong electrolytes HCl, NaCl, CH₃COONa).
  2. Determination of degree of dissociation (α = Λm / Λ°m) and dissociation constant (Ka).

• **Part (b) [3 Marks]:**
  1. Molar conductivity:
     Λm = (κ × 1000) / C = (4.95 × 10⁻⁵ × 1000) / 0.001028 = 48.15 S cm² mol⁻¹
  2. Degree of dissociation (α):
     α = Λm / Λ°m = 48.15 / 390.5 = **0.1233**
  3. Dissociation constant (Ka):
     Ka = (C · α²) / (1 - α) = [ 0.001028 × (0.1233)² ] / (1 - 0.1233)
     Ka = [ 0.001028 × 0.0152 ] / 0.8767 = **1.78 × 10⁻⁵ mol L⁻¹**.`
  },

  // CHAPTER 3: CHEMICAL KINETICS
  {
    id: "pyq-301",
    chapterId: 3,
    chapterName: "Chemical Kinetics",
    year: "CBSE 2024",
    marks: 2,
    type: "Short Answer",
    question: "A first order reaction is found to have a rate constant k = 5.5 × 10⁻¹⁴ s⁻¹. Find the half-life of the reaction. How does temperature affect rate constant k?",
    answer: `• **Calculation of Half-life (1 Mark):**
  For a first order reaction:
  t₁/₂ = 0.693 / k = 0.693 / (5.5 × 10⁻¹⁴ s⁻¹) = **1.26 × 10¹³ s**

• **Effect of Temperature (1 Mark):**
  Rate constant k increases exponentially with temperature according to Arrhenius equation:
  k = A · e^(-Ea / RT)
  For every 10 °C rise in temperature, rate constant roughly doubles or triples due to significant increase in fraction of molecules having energy greater than activation energy (Ea).`
  },
  {
    id: "pyq-302",
    chapterId: 3,
    chapterName: "Chemical Kinetics",
    year: "CBSE 2023",
    marks: 3,
    type: "Derivation / Proof",
    question: "Show that for a first order reaction, time required for 99% completion is twice the time required for the completion of 90% of reaction.",
    answer: `• **For 99% completion:**
  [R]₀ = 100, [R] = 100 - 99 = 1
  t_99% = (2.303 / k) · log₁₀ (100 / 1)
  Since log₁₀(100) = 2:
  t_99% = (2.303 / k) × 2 = **4.606 / k**  ... (Equation 1)  [1.5 Marks]

• **For 90% completion:**
  [R]₀ = 100, [R] = 100 - 90 = 10
  t_90% = (2.303 / k) · log₁₀ (100 / 10) = (2.303 / k) · log₁₀(10)
  Since log₁₀(10) = 1:
  t_90% = **2.303 / k**  ... (Equation 2)  [1 Mark]

• **Comparison:**
  t_99% / t_90% = (4.606 / k) / (2.303 / k) = **2**
  Hence, **t_99% = 2 × t_90%** (Proved).  [0.5 Mark]`
  },

  // CHAPTER 4: d- and f-BLOCK ELEMENTS
  {
    id: "pyq-401",
    chapterId: 4,
    chapterName: "d- and f-Block Elements",
    year: "CBSE 2023",
    marks: 3,
    type: "Conceptual Reasoning",
    question: "Account for the following observations:\n(i) Transition metals show catalytic properties.\n(ii) Zr and Hf have almost identical atomic and ionic radii.\n(iii) Zn, Cd and Hg are soft metals and have low melting points.",
    answer: `(i) **Catalytic properties (1 Mark):** Due to their ability to exhibit multiple/variable oxidation states and form unstable reactive intermediates, and their large surface area providing free valencies for adsorption of reactant molecules.

(ii) **Zr and Hf identical radii (1 Mark):** Due to **Lanthanoid Contraction** — poor shielding effect of 14 inner 4f electrons causes continuous shrinkage in size across the 4f series, compensating for expected size increase down Group 4.

(iii) **Zn, Cd, Hg soft with low MP (1 Mark):** All 3d, 4d, 5d electrons in these elements are completely paired (d¹⁰ configuration) and not available for metallic bonding. As a result, interatomic metallic bonding is extremely weak.`
  },

  // CHAPTER 5: COORDINATION COMPOUNDS
  {
    id: "pyq-501",
    chapterId: 5,
    chapterName: "Coordination Compounds",
    year: "CBSE 2024",
    marks: 2,
    type: "Nomenclature & VBT",
    question: "Write IUPAC name of [Co(NH₃)₅(CO₃)]Cl. Predict its magnetic behaviour using Valence Bond Theory.",
    answer: `• **IUPAC Name (1 Mark):**
  Pentaamminecarbonatocobalt(III) chloride

• **Magnetic Behaviour (1 Mark):**
  Co³⁺ has electronic configuration [Ar] 3d⁶. Under the strong crystal field of NH₃, all 6 d-electrons pair up in the lower t₂g orbitals (d²sp³ inner orbital complex). Since there are **no unpaired electrons (n = 0)**, the complex is **Diamagnetic**.`
  },

  // CHAPTER 8: ALDEHYDES, KETONES AND CARBOXYLIC ACIDS
  {
    id: "pyq-801",
    chapterId: 8,
    chapterName: "Aldehydes, Ketones and Carboxylic Acids",
    year: "CBSE 2023",
    marks: 3,
    type: "Distinction Tests",
    question: "Give simple chemical tests to distinguish between:\n(i) Propanal and Propanone\n(ii) Benzaldehyde and Acetophenone\n(iii) Formic acid and Acetic acid",
    answer: `(i) **Propanal vs Propanone (1 Mark):**
  • **Tollens' Test:** Propanal forms a silver mirror with Tollens' reagent:
    CH₃CH₂CHO + 2 [Ag(NH₃)₂]⁺ + 3 OH⁻ → CH₃CH₂COO⁻ + 2 Ag↓ + 4 NH₃ + 2 H₂O
  • Propanone gives no reaction with Tollens' reagent.

(ii) **Benzaldehyde vs Acetophenone (1 Mark):**
  • **Iodoform Test:** Acetophenone has a methyl carbonyl group (CH₃-C=O) and forms a yellow precipitate of iodoform (CHI₃) with I₂/NaOH:
    C₆H₅COCH₃ + 3 I₂ + 4 NaOH → C₆H₅COONa + CHI₃↓ + 3 NaI + 3 H₂O
  • Benzaldehyde does not give iodoform test.

(iii) **Formic acid vs Acetic acid (1 Mark):**
  • **Tollens' Test / Fehling's Test:** Formic acid (HCOOH) possesses both an aldehyde group (-CHO) and carboxyl group (-COOH). It reduces Tollens' reagent to black/silver Ag precipitate.
  • Acetic acid does not reduce Tollens' reagent.`
  },
  {
    id: "pyq-802",
    chapterId: 8,
    chapterName: "Aldehydes, Ketones and Carboxylic Acids",
    year: "CBSE 2022",
    marks: 5,
    type: "Mechanism & Named Reactions",
    question: "(a) Write the chemical equation for Aldol condensation of ethanal.\n(b) Explain Cannizzaro reaction with an example.\n(c) Why are carboxylic acids more acidic than phenols?",
    answer: `• **(a) Aldol Condensation (2 Marks):**
  2 CH₃-CHO --[dil. NaOH]--> CH₃-CH(OH)-CH₂-CHO (3-hydroxybutanal) --[heat, -H₂O]--> CH₃-CH=CH-CHO (But-2-enal).

• **(b) Cannizzaro Reaction (1.5 Marks):**
  Aldehydes with NO α-hydrogen undergo self oxidation and reduction in presence of concentrated alkali:
  2 C₆H₅CHO + conc. NaOH → C₆H₅CH₂OH (Benzyl alcohol) + C₆H₅COONa (Sodium benzoate).

• **(c) Acidity Comparison (1.5 Marks):**
  Carboxylic acids are stronger acids than phenols because the conjugate carboxylate ion (RCOO⁻) is stabilized by two equivalent resonance structures where the negative charge is delocalised over two highly electronegative oxygen atoms. In phenoxide ion, the negative charge is delocalised over less electronegative carbon atoms in the benzene ring, offering less effective stabilization.`
  },

  // CHAPTER 9: AMINES
  {
    id: "pyq-901",
    chapterId: 9,
    chapterName: "Amines",
    year: "CBSE 2024",
    marks: 2,
    type: "Mechanism & Reasoning",
    question: "Why cannot aniline be prepared by Gabriel Phthalimide synthesis? How does Hinsberg reagent distinguish 1° and 2° amines?",
    answer: `• **Gabriel Phthalimide for Aniline (1 Mark):**
  Gabriel synthesis requires nucleophilic attack of phthalimide anion on an alkyl halide. In aryl halides (like chlorobenzene), the C-halogen bond has partial double bond character due to resonance with the benzene ring, so it does not undergo nucleophilic substitution under normal reaction conditions.

• **Hinsberg Distinction (1 Mark):**
  Benzenesulphonyl chloride reacts with 1° amine to form N-alkylbenzenesulphonamide, which has an acidic hydrogen on nitrogen and is soluble in aqueous KOH. With 2° amine, it forms N,N-dialkylbenzenesulphonamide which has no acidic hydrogen on nitrogen and is completely INSOLUBLE in KOH.`
  },

  // CHAPTER 10: BIOMOLECULES
  {
    id: "pyq-1001",
    chapterId: 10,
    chapterName: "Biomolecules",
    year: "CBSE 2023",
    marks: 3,
    type: "Structure & Biochemical Tests",
    question: "(i) What are reducing and non-reducing sugars? Give one example of each.\n(ii) What is meant by denaturation of proteins? Which structure remains intact?\n(iii) Name the vitamin whose deficiency causes scurvy.",
    answer: `(i) **Sugars (1 Mark):**
  • **Reducing sugars:** Sugars capable of reducing Tollens' or Fehling's reagents due to free aldehydic or ketonic carbonyl groups. Example: Glucose, Maltose.
  • **Non-reducing sugars:** Sugars where carbonyl groups are involved in glycosidic bond formation and are not free. Example: Sucrose.

(ii) **Denaturation (1 Mark):**
  Loss of biological activity and native conformation of a protein when exposed to extreme temperature, pH, or chemical agents due to disruption of hydrogen and secondary/tertiary bonds. The **Primary structure (amino acid peptide sequence)** remains completely intact.

(iii) **Vitamin (1 Mark):**
  **Vitamin C (Ascorbic acid)**.`
  }
];
