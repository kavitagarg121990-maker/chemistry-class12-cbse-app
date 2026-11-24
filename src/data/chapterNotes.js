export const chapterNotes = {
  1: {
    title: "Solutions",
    chapterNo: 1,
    weightage: "7 Marks (CBSE Board Exam)",
    overview: "A homogeneous mixture of two or more chemically non-reacting substances whose composition can be varied within certain limits. Composed of solvent (major component) and solute (minor component).",
    sections: [
      {
        heading: "1. Concentration Expressions & Units",
        content: `
• **Molarity (M):** Moles of solute per litre of solution. Unit: mol L⁻¹. It is temperature-dependent because volume changes with temperature.
  M = (w_B × 1000) / (M_B × V_in_mL)

• **Molality (m):** Moles of solute per kilogram of solvent. Unit: mol kg⁻¹. It is temperature-independent because mass is unaffected by temperature. Preferred in thermodynamics.
  m = (w_B × 1000) / (M_B × W_A_in_g)

• **Mole Fraction (x):** Ratio of number of moles of a component to the total number of moles of all components.
  x_A = n_A / (n_A + n_B),  x_B = n_B / (n_A + n_B),  x_A + x_B = 1. Dimensionless and temperature independent.

• **Parts Per Million (ppm):** Useful when solute is present in trace quantities (e.g., pollutants in water/air).
  ppm = (Mass of solute / Total mass of solution) × 10⁶
        `
      },
      {
        heading: "2. Henry's Law (Solubility of Gases in Liquids)",
        content: `
• **Statement:** The partial pressure of the gas in vapour phase (p) is directly proportional to the mole fraction of the gas (x) in the solution:
  p = K_H · x
  Where K_H is Henry's law constant.

• **Crucial High-Yield Characteristics of K_H:**
  1. K_H is a function of the nature of the gas and solvent.
  2. Higher value of K_H at a given pressure means LOWER solubility of the gas in the liquid.
  3. K_H increases with an increase in temperature; hence solubility of gases in water decreases as temperature rises (Explanation: dissolution of gas is exothermic, ΔH_sol < 0; according to Le Chatelier's principle, equilibrium shifts backwards on heating. That is why aquatic species are more comfortable in cold water than in warm water).

• **Key Applications of Henry's Law:**
  1. To increase solubility of CO₂ in soft drinks and soda water, the bottle is sealed under high pressure.
  2. To avoid the bends (painful and dangerous condition caused by nitrogen bubbles in blood), deep sea divers carry scuba tanks diluted with helium (11.7% He, 56.2% N₂, 32.1% O₂).
  3. At high altitudes, low atmospheric pressure leads to low dissolved oxygen in blood and tissues, causing hypoxia (weakness and inability to think clearly).
        `
      },
      {
        heading: "3. Raoult's Law & Liquid-Liquid Solutions",
        content: `
• **Raoult's Law for Volatile Liquids:**
  For any solution of volatile liquids, the partial vapour pressure of each component in the solution is directly proportional to its mole fraction:
  p_A = p°_A · x_A    and    p_B = p°_B · x_B
  Total Pressure: P_total = p_A + p_B = p°_A + (p°_B - p°_A)x_B

• **Vapour Phase Composition (Dalton's Law):**
  y_A = p_A / P_total   and   y_B = p_B / P_total

• **Ideal vs Non-Ideal Solutions:**
  - **Ideal Solutions:** Obey Raoult's law over entire concentration range. ΔH_mix = 0, ΔV_mix = 0. Intermolecular forces A-B are identical to A-A and B-B. Examples: n-hexane + n-heptane, bromoethane + chloroethane, benzene + toluene.
  - **Non-Ideal with Positive Deviation:** p_A > p°_A · x_A. Intermolecular attraction A-B is WEAKER than A-A and B-B. ΔH_mix > 0 (endothermic), ΔV_mix > 0. Forms minimum boiling azeotrope. Examples: Ethanol + Water, CS₂ + Acetone, CCl₄ + Chloroform.
  - **Non-Ideal with Negative Deviation:** p_A < p°_A · x_A. Intermolecular attraction A-B is STRONGER than A-A and B-B (e.g. hydrogen bonding formed). ΔH_mix < 0 (exothermic), ΔV_mix < 0. Forms maximum boiling azeotrope. Examples: Chloroform + Acetone (H-bonding between O and H), HNO₃ + Water, Phenol + Aniline.

• **Azeotropes (Constant Boiling Mixtures):**
  Binary liquid mixtures having the same composition in liquid and vapour phases and boiling at a constant temperature. Components cannot be separated by fractional distillation.
        `
      },
      {
        heading: "4. Colligative Properties (4 Pillars)",
        content: `
Properties of dilute solutions which depend only on the number of solute particles and not on the chemical nature of the solute:

1. **Relative Lowering of Vapour Pressure (RLVP):**
   (p°_A - p_A) / p°_A = x_B = (w_B / M_B) / (w_A / M_A)   (for dilute solutions)

2. **Elevation in Boiling Point (ΔTb):**
   ΔTb = Tb - T°b = Kb · m = (Kb × w_B × 1000) / (M_B × w_A)
   Where Kb is Molal Boiling Point Elevation Constant (Ebullioscopic Constant). Unit: K kg mol⁻¹.
   Kb = (R · M_A · (T°b)²) / (1000 · ΔH_vap)

3. **Depression in Freezing Point (ΔTf):**
   ΔTf = T°f - Tf = Kf · m = (Kf × w_B × 1000) / (M_B × w_A)
   Where Kf is Molal Freezing Point Depression Constant (Cryoscopic Constant). Unit: K kg mol⁻¹.
   Kf = (R · M_A · (T°f)²) / (1000 · ΔH_fusion)
   *Application:* Ethylene glycol is used as antifreeze in automobile radiators. NaCl or CaCl₂ is used to clear snow from roads (lowers freezing point of water).

4. **Osmotic Pressure (π):**
   π = CRT = (n_B / V) R T = (w_B · R · T) / (M_B · V)
   Best colligative property to determine molar mass of polymers, proteins, and biomolecules because:
   - Measured at room temperature (prevents protein denaturation).
   - Uses molarity rather than molality (readily measurable).
   - Magnitude of π is significant even for very dilute polymer solutions.
        `
      },
      {
        heading: "5. Abnormal Molar Mass & Van 't Hoff Factor (i)",
        content: `
When a solute undergoes association or dissociation in solution, the observed molar mass deviates from calculated theoretical value:
  i = (Normal / Theoretical Molar Mass) / (Observed / Experimental Molar Mass)
  i = (Total moles of particles after association/dissociation) / (Total moles of particles before)

• **Dissociation (e.g. NaCl, K₂SO₄):**
  NaCl → Na⁺ + Cl⁻ (n = 2), i > 1
  Degree of dissociation: α = (i - 1) / (n - 1)

• **Association (e.g. Acetic acid in Benzene forms dimer):**
  2 CH₃COOH ⇌ (CH₃COOH)₂, n = 1/2, i < 1
  Degree of association: α = (1 - i) / (1 - 1/n)

• **Modified Colligative Equations:**
  1. (p°_A - p_A) / p°_A = i · x_B
  2. ΔTb = i · Kb · m
  3. ΔTf = i · Kf · m
  4. π = i · C · R · T
        `
      }
    ],
    ncertPointers: [
      "Aquatic life prefers cold water over warm water because gas solubility is inversely proportional to temperature (Henry's Law, KH increases with T).",
      "Ethylene glycol lowers the freezing point of water and protects car engines in sub-zero climates.",
      "Intravenous injections must be isotonic with 0.9% (m/V) NaCl solution (normal saline). Hypertonic solutions shrink red blood cells (plasmolysis/crenation); hypotonic solutions burst them (hemolysis)."
    ]
  },
  2: {
    title: "Electrochemistry",
    chapterNo: 2,
    weightage: "9 Marks (Highest in Physical Chemistry)",
    overview: "Study of production of electricity from energy released during spontaneous chemical reactions and the use of electrical energy to bring about non-spontaneous chemical transformations.",
    sections: [
      {
        heading: "1. Electrochemical Cells & Daniell Cell",
        content: `
• **Daniell Cell:** Zn(s) | Zn²⁺(aq) || Cu²⁺(aq) | Cu(s)
  - Anode (Oxidation, Negative): Zn(s) → Zn²⁺(aq) + 2e⁻
  - Cathode (Reduction, Positive): Cu²⁺(aq) + 2e⁻ → Cu(s)
  - Cell EMF: E°_cell = E°_cathode - E°_anode = 0.34 V - (-0.76 V) = +1.10 V
  - Salt Bridge: U-tube filled with agar-agar jelly containing inert electrolyte (KCl, KNO₃, NH₄NO₃). Functions: Completes inner electrical circuit and maintains electrical neutrality of half-cell solutions without mixing.
  - If External Voltage (E_ext) is applied:
    * E_ext < 1.10 V: Electrons flow from Zn to Cu, current from Cu to Zn (Galvanic cell).
    * E_ext = 1.10 V: No current flows, no chemical reaction.
    * E_ext > 1.10 V: Electrons flow from Cu to Zn; cell operates as an electrolytic cell.
        `
      },
      {
        heading: "2. Nernst Equation & Gibbs Free Energy",
        content: `
• For general reaction: aA + bB + ne⁻ → cC + dD
  E_cell = E°_cell - (RT / nF) · ln Q = E°_cell - (0.0591 / n) · log₁₀ [ [C]^c [D]^d / [A]^a [B]^b ]  (at 298 K)

• **At Equilibrium:** E_cell = 0 and Q = Kc
  E°_cell = (0.0591 / n) · log₁₀ Kc
  log₁₀ Kc = (n · E°_cell) / 0.0591

• **Relationship with Gibbs Free Energy (ΔrG):**
  ΔrG = -n · F · E_cell
  ΔrG° = -n · F · E°_cell = -2.303 R T log₁₀ Kc
  *Note:* E_cell is an intensive property (does not depend on stoichiometry coefficients), while ΔrG is an extensive property.
        `
      },
      {
        heading: "3. Conductance, Conductivity & Kohlrausch's Law",
        content: `
• **Conductivity (κ - Kappa):** Inverse of resistivity. κ = (1/R) · (l/A) = G · G*.
  Where G* = l/A is cell constant (measured using standard KCl solution). Unit: S cm⁻¹ or S m⁻¹.
  Conductivity decreases with dilution because number of current-carrying ions per unit volume decreases.

• **Molar Conductivity (Λm):**
  Λm = (κ × 1000) / M   (where M is molarity in mol L⁻¹ and κ in S cm⁻¹). Unit: S cm² mol⁻¹.
  Molar conductivity INCREASES with dilution for both strong and weak electrolytes:
  - For Strong Electrolytes: Interionic attractions decrease, ion mobility increases. Described by Debye-Hückel-Onsager equation: Λm = Λ°m - A · √C.
  - For Weak Electrolytes: Degree of dissociation (α) increases sharply at high dilution (Ostwald's dilution law).

• **Kohlrausch's Law of Independent Migration of Ions:**
  Limiting molar conductivity of an electrolyte can be represented as the sum of individual contributions of anion and cation:
  Λ°m (A_x B_y) = x · λ°_A⁺ + y · λ°_B⁻
  *Applications:*
  1. Calculation of Λ°m of weak electrolytes (e.g. CH₃COOH from HCl, NaCl, CH₃COONa).
  2. Calculation of degree of dissociation of weak electrolyte: α = Λm / Λ°m.
  3. Calculation of dissociation constant: Ka = (C · α²) / (1 - α) = (C · (Λm/Λ°m)²) / (1 - Λm/Λ°m).
        `
      },
      {
        heading: "4. Faraday's Laws & Batteries",
        content: `
• **Faraday's 1st Law:** Mass deposited w = Z · Q = Z · I · t = (M · I · t) / (n · F)
  (1 Faraday = 96,487 ≈ 96,500 C mol⁻¹ = charge carried by 1 mole of electrons).

• **Faraday's 2nd Law:** w₁ / w₂ = E₁ / E₂ (where E = Molar Mass / n-factor is equivalent weight).

• **Primary vs Secondary Batteries:**
  - **Dry Cell (Leclanché Cell):** Anode: Zn container, Cathode: Carbon rod surrounded by MnO₂ + C. Electrolyte: paste of NH₄Cl + ZnCl₂. EMF ≈ 1.5 V. (Non-rechargeable).
  - **Mercury Cell:** Gives constant voltage (1.35 V) throughout life because overall reaction does not involve ions in solution whose concentration can change.
  - **Lead Storage Battery (Secondary/Car Battery):**
    * Discharging: Anode: Pb(s) + SO₄²⁻ → PbSO₄(s) + 2e⁻; Cathode: PbO₂(s) + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄(s) + 2H₂O. Overall: Pb + PbO₂ + 2H₂SO₄ → 2PbSO₄ + 2H₂O (Density of H₂SO₄ drops).
    * Charging: Reverse reactions occur; H₂SO₄ is regenerated.
  - **H₂-O₂ Fuel Cell:** Efficient (~70%), eco-friendly (produces water). Used in Apollo space missions.

• **Corrosion:** Electrochemical phenomenon (Rusting of iron: Fe₂O₃·xH₂O). Prevention: Galvanisation (zinc coating - sacrificial protection), cathodic protection.
        `
      }
    ],
    ncertPointers: [
      "Molar conductivity increases with dilution, but conductivity (κ) always decreases with dilution because number of ions per mL drops.",
      "Mercury cell has a constant potential of 1.35 V throughout its operating life because its overall cell reaction does not involve any electrolyte in solution.",
      "Rusting requires both oxygen and moisture simultaneously."
    ]
  },
  3: {
    title: "Chemical Kinetics",
    chapterNo: 3,
    weightage: "7 Marks (CBSE Board Exam)",
    overview: "Branch of chemistry concerned with the rates of chemical reactions, the factors influencing reaction rates, and the mechanism by which reactions proceed.",
    sections: [
      {
        heading: "1. Rate, Order and Molecularity",
        content: `
• **Rate of Reaction:**
  Average Rate: r_avg = -Δ[R]/Δt = +Δ[P]/Δt
  Instantaneous Rate: r_inst = -d[R]/dt = +d[P]/dt

• **Order vs Molecularity:**
  - **Order:** Sum of powers of concentration of reactants in the experimentally determined rate law equation. Can be 0, fraction, or integer. Can be determined ONLY experimentally.
  - **Molecularity:** Number of reacting species (atoms, ions or molecules) colliding simultaneously in an elementary step. Always a whole number (1, 2, or 3). Cannot be zero, negative, or fractional. Not applicable for complex reactions.

• **Units of Rate Constant (k):**
  Unit of k = (mol L⁻¹)^(1 - n) · s⁻¹  (where n is overall order of reaction)
  - Zero order: mol L⁻¹ s⁻¹
  - First order: s⁻¹
  - Second order: L mol⁻¹ s⁻¹
        `
      },
      {
        heading: "2. Integrated Rate Laws & Half-Life",
        content: `
• **Zero Order Reaction:** r = k [R]⁰ = k
  - Integrated Rate Equation: k = ([R]₀ - [R]) / t
  - Half-Life (t₁/₂): t₁/₂ = [R]₀ / (2k). Directly proportional to initial concentration.
  - Graph: [R] vs t gives straight line with slope = -k and intercept = [R]₀.

• **First Order Reaction:** r = k [R]¹
  - Integrated Rate Equation: k = (2.303 / t) · log₁₀ ([R]₀ / [R])
  - Half-Life (t₁/₂): t₁/₂ = 0.693 / k. Completely INDEPENDENT of initial concentration.
  - Graph: log₁₀ [R] vs t gives slope = -k / 2.303.
  - For gas phase reaction A(g) → B(g) + C(g):
    k = (2.303 / t) · log₁₀ [ p_i / (2p_i - p_t) ]
    where p_i is initial pressure of A, p_t is total pressure at time t.
        `
      },
      {
        heading: "3. Pseudo First Order Reactions",
        content: `
Reactions which are higher order theoretically, but behave as first order because one of the reactants is present in large excess so its concentration remains practically constant.
Examples:
1. Acid-catalysed hydrolysis of ethyl acetate:
   CH₃COOC₂H₅ + H₂O (excess) --[H⁺]--> CH₃COOH + C₂H₅OH
   Rate = k' [CH₃COOC₂H₅][H₂O] = k [CH₃COOC₂H₅]   (where k = k'[H₂O])
2. Inversion of cane sugar (sucrose):
   C₁₂H₂₂O₁₁ + H₂O (excess) --[H⁺]--> C₆H₁₂O₆ (glucose) + C₆H₁₂O₆ (fructose)
        `
      },
      {
        heading: "4. Arrhenius Equation & Activation Energy",
        content: `
• **Arrhenius Equation:** k = A · e^(-Ea / RT)
  Where A is frequency factor / pre-exponential factor, Ea is activation energy.
  Logarithmic form:
  ln k = ln A - (Ea / RT)
  log₁₀ k = log₁₀ A - (Ea / (2.303 R T))
  Graph: log₁₀ k vs 1/T yields a straight line with slope = -Ea / (2.303 R).

• **Two Temperatures Formula:**
  log₁₀ (k₂ / k₁) = (Ea / (2.303 R)) · [ (T₂ - T₁) / (T₁ · T₂) ]

• **Role of Catalyst:**
  A catalyst increases reaction rate by providing an alternate reaction pathway with LOWER activation energy. It lowers Ea for both forward and reverse reactions equally. It DOES NOT alter ΔG, ΔH, or equilibrium constant Kc; it only helps establish equilibrium faster.
        `
      }
    ],
    ncertPointers: [
      "For a first-order reaction, time required for 99.9% completion is 10 times the half-life: t_99.9% = 10 × t₁/₂.",
      "Most chemical reaction rates roughly double (increase by factor of 2 to 3) for every 10°C rise in temperature.",
      "Molecularity greater than 3 is rare because simultaneous collision of more than three molecules has very low statistical probability."
    ]
  },
  4: {
    title: "d- and f-Block Elements",
    chapterNo: 4,
    weightage: "7 Marks (CBSE Board Exam)",
    overview: "Elements in Groups 3-12 of periodic table where d-orbitals are progressively filled. Also includes lanthanoids (4f) and actinoids (5f) transition elements.",
    sections: [
      {
        heading: "1. General Properties of Transition Metals (3d Series)",
        content: `
• Electronic Configuration: (n-1)d¹⁻¹⁰ ns¹⁻²
  Exceptions: Cr [Ar] 3d⁵ 4s¹ and Cu [Ar] 3d¹⁰ 4s¹ (extra stability of half-filled and fully-filled d-subshells).
• Atomic and Ionic Radii:
  Radii decrease from Sc to Cr (effective nuclear charge increases), remain nearly constant from Mn to Ni (shielding by d-electrons cancels nuclear attraction), and slightly increase from Cu to Zn (electron-electron repulsion in completely filled 3d¹⁰).
• Variable Oxidation States:
  Due to small energy difference between (n-1)d and ns electrons.
  Highest oxidation state in 3d series is +7 shown by Manganese (Mn) in KMnO₄.
• Catalytic Properties:
  Transition metals and their compounds are excellent catalysts due to:
  1. Variable oxidation states (ability to form unstable intermediates).
  2. Large surface area with free valencies to adsorb reactant molecules.
• Magnetic Properties:
  Paramagnetism due to unpaired electrons.
  Spin-only formula: μ = √(n(n + 2)) B.M. (Bohr Magnetons), where n is number of unpaired electrons.
• Coloured Ions:
  Due to d-d transitions when d-orbitals split in presence of ligands. Zn²⁺, Cd²⁺, Hg²⁺, Sc³⁺, Ti⁴⁺ are colourless (d⁰ or d¹⁰, no d-d transition possible).
        `
      },
      {
        heading: "2. Lanthanoid Contraction (Crucial Board Concept)",
        content: `
• **Definition:** The steady decrease in atomic and ionic radii of lanthanoid elements with increasing atomic number from Lanthanum (La) to Lutetium (Lu).
• **Cause:** Poor shielding effect of 4f electrons due to their highly diffused shapes. As atomic number increases by 1, nuclear charge increases by +1, pulling the outer electron cloud closer.
• **Consequences:**
  1. **Similarity in atomic radii of 4d and 5d elements:** Zr (160 pm) ≈ Hf (159 pm), Nb ≈ Ta, Mo ≈ W. Because of identical radii and chemical properties, they occur together and are hard to separate.
  2. **Decrease in basic strength of hydroxides:** La(OH)₃ is most basic, Lu(OH)₃ is least basic (covalent character increases as cation size shrinks).
  3. **High density of 5d transition series.**
        `
      },
      {
        heading: "3. Potassium Dichromate (K₂Cr₂O₇) & Permanganate (KMnO₄)",
        content: `
• **Potassium Dichromate (K₂Cr₂O₇):**
  - Prepared from chromite ore (FeCr₂O₄):
    4 FeCr₂O₄ + 8 Na₂CO₃ + 7 O₂ → 8 Na₂CrO₄ (yellow) + 2 Fe₂O₃ + 8 CO₂
    2 Na₂CrO₄ + H₂SO₄ → Na₂Cr₂O₇ (orange) + Na₂SO₄ + H₂O
    Na₂Cr₂O₇ + 2 KCl → K₂Cr₂O₇ + 2 NaCl
  - Chromate / Dichromate Equilibrium:
    2 CrO₄²⁻ (yellow) + 2 H⁺ ⇌ Cr₂O₇²⁻ (orange) + H₂O
    (In acidic medium dichromate dominates; in alkaline medium chromate dominates).
  - Strong oxidising agent in acidic medium:
    Cr₂O₇²⁻ + 14 H⁺ + 6e⁻ → 2 Cr³⁺ + 7 H₂O  (E° = +1.33 V)
    *Oxidises I⁻ to I₂, Fe²⁺ to Fe³⁺, H₂S to S, Sn²⁺ to Sn⁴⁺.*

• **Potassium Permanganate (KMnO₄):**
  - Prepared from pyrolusite ore (MnO₂):
    2 MnO₂ + 4 KOH + O₂ → 2 K₂MnO₄ (dark green manganate) + 2 H₂O
    3 MnO₄²⁻ + 4 H⁺ → 2 MnO₄⁻ (purple permanganate) + MnO₂ + 2 H₂O
  - In acidic medium: MnO₄⁻ + 8 H⁺ + 5e⁻ → Mn²⁺ + 4 H₂O  (Oxidises Fe²⁺ → Fe³⁺, C₂O₄²⁻ → CO₂).
  - In neutral/weakly alkaline medium: MnO₄⁻ + 2 H₂O + 3e⁻ → MnO₂ + 4 OH⁻  (Oxidises I⁻ to IO₃⁻ iodate!).
        `
      }
    ],
    ncertPointers: [
      "Cu⁺ ion is unstable in aqueous solution and undergoes disproportionation: 2 Cu⁺(aq) → Cu²⁺(aq) + Cu(s) because hydration enthalpy of Cu²⁺ is much more negative than Cu⁺.",
      "Zn, Cd, and Hg are not regarded as typical transition elements because they have fully filled d-orbitals (d¹⁰) in both ground state and common oxidation states.",
      "KMnO₄ acts as its own indicator in titrations (self-indicator) due to its intense purple colour."
    ]
  },
  5: {
    title: "Coordination Compounds",
    chapterNo: 5,
    weightage: "7 Marks (CBSE Board Exam)",
    overview: "Molecules or complex ions in which a central metal atom/ion is surrounded by a group of oppositely charged ions or neutral molecules (ligands) via coordinate covalent bonds.",
    sections: [
      {
        heading: "1. Werner's Coordination Theory & Terminology",
        content: `
• **Primary Valency:** Ionisable, corresponds to oxidation state of the metal ion, satisfied by negative ions.
• **Secondary Valency:** Non-ionisable, corresponds to coordination number of the central metal ion, satisfied by neutral molecules or negative ions. Directed towards fixed positions in space (determines geometry).

• **Ligand Types:**
  - Unidentate: H₂O, NH₃, Cl⁻, CN⁻
  - Bidentate / Didentate: Oxalate ion (ox = C₂O₄²⁻), ethylenediamine (en = H₂NCH₂CH₂NH₂)
  - Polydentate / Hexadentate: EDTA⁴⁻ (Ethylene diamine tetraacetate ion - binds via 2 N and 4 O atoms).
  - Ambidentate Ligands: Monodentate ligands with two different donor atoms (e.g. NO₂⁻ vs ONO⁻, SCN⁻ vs NCS⁻). Produce linkage isomerism.
  - Chelating Ligands: Di- or polydentate ligands forming cyclic ring complexes. Chelate complexes are extraordinarily stable (Chelate Effect).
        `
      },
      {
        heading: "2. IUPAC Nomenclature Rules",
        content: `
1. Positive ion is named first, then negative ion.
2. In coordination entity, ligands are named in alphabetical order before the metal name.
3. Anionic ligands end in '-o' (chloro, cyano, hydroxo); neutral ligands have special names: H₂O (aqua), NH₃ (ammine with double m), CO (carbonyl), NO (nitrosyl).
4. Multipliers: di, tri, tetra. If ligand name already has prefix (e.g. ethylenediamine), use bis, tris, tetrakis.
5. Metal ending: If complex is anionic, metal name ends in '-ate' (ferrate, cobaltate, cuprate). If neutral or cationic, normal metal name is used.
6. Oxidation state of metal is written in Roman numerals in parentheses: e.g., [Co(NH₃)₆]Cl₃ = Hexaamminecobalt(III) chloride; K₃[Fe(CN)₆] = Potassium hexacyanoferrate(III).
        `
      },
      {
        heading: "3. Isomerism in Coordination Compounds",
        content: `
• **Structural Isomerism:**
  - Ionisation Isomerism: [Co(NH₃)₅SO₄]Br (gives precipitate with Ag⁺) vs [Co(NH₃)₅Br]SO₄ (gives precipitate with Ba²⁺).
  - Hydrate / Solvate Isomerism: [Cr(H₂O)₆]Cl₃ (violet) vs [Cr(H₂O)₅Cl]Cl₂·H₂O (grey-green).
  - Linkage Isomerism: Due to ambidentate ligands e.g. [Co(NH₃)₅(NO₂)]²⁺ (yellow-red, nitro) vs [Co(NH₃)₅(ONO)]²⁺ (red, nitrito).
  - Coordination Isomerism: Interchange of ligands between cationic and anionic complexes: [Co(NH₃)₆][Cr(CN)₆] vs [Cr(NH₃)₆][Co(CN)₆].

• **Stereoisomerism:**
  - Geometrical (cis / trans): e.g. [Pt(NH₃)₂Cl₂] (cis-platin is active anti-cancer drug; trans-platin is inactive).
  - Optical (Chiral): Non-superimposable mirror images (dextro / laevo). e.g., [Co(en)₃]³⁺ and cis-[Co(en)₂Cl₂]⁺ show optical activity. (Trans isomer has plane of symmetry and is optically inactive!).
        `
      },
      {
        heading: "4. Valence Bond Theory (VBT) vs Crystal Field Theory (CFT)",
        content: `
• **Valence Bond Theory:**
  - Involves d²sp³ (inner orbital, low spin, diamagnetic/weakly paramagnetic) or sp³d² (outer orbital, high spin, strongly paramagnetic).
  - Limitations: Could not explain why some ligands form strong fields and others weak fields, nor the colour of complexes.

• **Crystal Field Theory (CFT):**
  - Assumes electrostatic interaction between central metal cation and ligands (treated as point charges/dipoles).
  - **Octahedral Complex Splitting:** Degenerate d-orbitals split into two sets: lower energy triply degenerate t₂g (dxy, dyz, dzx) and higher energy doubly degenerate eg (dx²-y², dz²). Energy separation is Δo (Crystal Field Splitting Energy).
  - **Spectrochemical Series:** Ligands arranged in increasing order of crystal field splitting strength:
    I⁻ < Br⁻ < S²⁻ < Cl⁻ < F⁻ < OH⁻ < C₂O₄²⁻ < H₂O < NCS⁻ < edta⁴⁻ < NH₃ < en < CN⁻ < CO.
  - If Δo < P (Pairing Energy): Weak field ligand → high spin complex (electrons occupy eg before pairing in t₂g).
  - If Δo > P: Strong field ligand (CN⁻, CO) → low spin complex (electrons pair up in t₂g).
  - **Tetrahedral Complex Splitting:** Splitting is inverted: lower e (dx²-y², dz²) and higher t₂ (dxy, dyz, dzx). Δt = (4/9) Δo. Pairing never occurs because Δt is always less than P (always high spin!).
        `
      }
    ],
    ncertPointers: [
      "[Ni(CO)₄] has sp³ hybridisation and tetrahedral geometry with 0 unpaired electrons (diamagnetic), because CO is a very strong ligand that pairs all electrons.",
      "[Fe(H₂O)₅(NO)]SO₄ (Brown Ring Complex): Iron is in +1 oxidation state with d⁷ configuration (3 unpaired electrons, paramagnetism).",
      "EDTA is used in treatment of lead poisoning because the lead-EDTA chelate complex is stable and excreted through urine."
    ]
  },
  6: {
    title: "Haloalkanes and Haloarenes",
    chapterNo: 6,
    weightage: "6 Marks (CBSE Board Exam)",
    overview: "Hydrocarbons in which one or more hydrogen atoms are replaced by halogen atoms (F, Cl, Br, I). Fundamental building block for organic synthetic chemistry.",
    sections: [
      {
        heading: "1. SN1 vs SN2 Nucleophilic Substitution Mechanisms",
        content: `
• **SN1 Mechanism (Substitution Nucleophilic Unimolecular):**
  - Rate = k [Substrate] (First order kinetics, two steps).
  - Step 1: Slow, rate-determining ionisation to form a planar carbocation intermediate.
  - Step 2: Fast attack by nucleophile from either front or back face.
  - Stereochemistry: Leads to **Racemisation** (mixture of retention + inversion).
  - Reactivity Order: 3° > 2° > 1° > CH₃X (Governed by stability of carbocation: 3° > 2° > 1°). Allylic and benzylic halides undergo SN1 extremely fast due to resonance stabilization of carbocation!
  - Solvent: Favoured by polar protic solvents (H₂O, alcohol) which solvate the halide ion.

• **SN2 Mechanism (Substitution Nucleophilic Bimolecular):**
  - Rate = k [Substrate][Nucleophile] (Second order kinetics, single concerted step).
  - Mechanism: Backside attack of nucleophile with simultaneous departure of leaving group via a pentavalent transition state.
  - Stereochemistry: Complete **Walden Inversion** (100% inversion of configuration like an umbrella turned inside out in high wind).
  - Reactivity Order: CH₃X > 1° > 2° > 3° (Governed by **steric hindrance**; bulky alkyl groups block backside approach).
  - Solvent: Favoured by polar aprotic solvents (Acetone, DMSO, DMF).
        `
      },
      {
        heading: "2. Key Named Reactions of Haloalkanes & Haloarenes",
        content: `
• **Finkelstein Reaction (Iodide Exchange):**
  R-Cl / R-Br + NaI --[dry acetone]--> R-I + NaCl / NaBr (ppt)

• **Swarts Reaction (Fluoride Synthesis):**
  CH₃Br + AgF (or Hg₂F₂, CoF₃, SbF₃) → CH₃F + AgBr

• **Sandmeyer Reaction:**
  Aniline + NaNO₂ + HCl (0-5 °C) → Benzene diazonium chloride
  Benzene diazonium chloride + Cu₂Cl₂/HCl → Chlorobenzene + N₂

• **Wurtz Reaction:**
  2 R-X + 2 Na --[dry ether]--> R-R + 2 NaX (Symmetrical alkanes with even carbons)

• **Wurtz-Fittig Reaction:**
  Ar-X + R-X + 2 Na --[dry ether]--> Ar-R (Alkylbenzene) + 2 NaX

• **Fittig Reaction:**
  2 Ar-X + 2 Na --[dry ether]--> Ar-Ar (Diphenyl) + 2 NaX

• **Grignard Reagent Preparation:**
  R-X + Mg --[dry ether]--> R-Mg-X (Extremely reactive; decomposes instantly in presence of water/moisture to form alkane: RMgX + H₂O → R-H + Mg(OH)X).
        `
      },
      {
        heading: "3. Low Reactivity of Haloarenes towards Nucleophilic Substitution",
        content: `
Chlorobenzene is extremely unreactive towards nucleophilic substitution compared to chloroethane because:
1. **Resonance Effect:** Lone pair of halogen is delocalised over the benzene ring, imparting partial double bond character to C-Cl bond (bond length 169 pm vs 177 pm in alkyl halide), making it harder to break.
2. **Hybridisation of Carbon:** Carbon attached to halogen in haloarene is sp² hybridised (33.3% s-character, more electronegative, holds C-Cl bond tightly) vs sp³ carbon in haloalkane (25% s-character).
3. **Instability of Phenyl Cation:** Self-ionisation would produce phenyl cation, which cannot be stabilized by resonance.
4. **Electronic Repulsion:** Electron-rich nucleophile is repelled by the electron-rich π-electron cloud of the aromatic ring.
*Important Exception:* Presence of electron-withdrawing groups (-NO₂) at ortho- and para-positions dramatically increases reactivity of haloarenes towards nucleophilic substitution.
        `
      }
    ],
    ncertPointers: [
      "Allyl chloride and Benzyl chloride undergo both SN1 and SN2 reactions rapidly.",
      "Thionyl chloride (SOCl₂) method is the best method for preparing alkyl chlorides from alcohols because both side products (SO₂ and HCl) are escape-ready gases, leaving pure alkyl chloride.",
      "Freon-12 (CCl₂F₂) causes stratospheric ozone depletion via chlorine free-radical catalysis."
    ]
  },
  7: {
    title: "Alcohols, Phenols and Ethers",
    chapterNo: 7,
    weightage: "6 Marks (CBSE Board Exam)",
    overview: "Hydroxyl (-OH) and alkoxy (-OR) derivatives of aliphatic and aromatic hydrocarbons. Covers preparation, chemical acidity, identification tests, and key industrial ethers.",
    sections: [
      {
        heading: "1. Acidity of Alcohols and Phenols",
        content: `
• **Alcohols vs Water:**
  Alcohols are weaker acids than water because electron-donating alkyl (+I) groups increase electron density on oxygen and destabilise the alkoxide ion (RO⁻).
  Acidity order: CH₃OH > 1° alcohol > 2° alcohol > 3° alcohol.

• **Phenol vs Alcohol:**
  Phenol is significantly more acidic than alcohol (Ka of phenol is ~10⁶ times higher).
  Reason: Phenoxide ion is stabilized by resonance (negative charge is delocalised over the ortho and para positions of benzene ring), whereas alkoxide ion (RO⁻) has localized charge and no resonance stabilization.

• **Effect of Substituents on Phenol Acidity:**
  - Electron Withdrawing Groups (-NO₂, -CN, -X) at ortho and para positions stabilize phenoxide ion and INCREASE acidity. (e.g. Picric acid: 2,4,6-trinitrophenol is strongly acidic!).
  - Electron Donating Groups (-CH₃, -OCH₃, -NH₂) destabilise phenoxide ion and DECREASE acidity. (o-cresol is less acidic than phenol).
        `
      },
      {
        heading: "2. Key Distinguishing Tests: Lucas Test",
        content: `
• **Lucas Reagent:** Anhydrous ZnCl₂ + Concentrated HCl
  Reaction: R-OH + HCl --[anhyd. ZnCl₂]--> R-Cl (turbidity) + H₂O
  - 3° Alcohol: Immediate turbidity appears within seconds at room temperature.
  - 2° Alcohol: Turbidity appears after 5 minutes.
  - 1° Alcohol: No turbidity at room temperature; appears only on prolonged heating.
        `
      },
      {
        heading: "3. Landmark Named Reactions of Phenols",
        content: `
• **Reimer-Tiemann Reaction:**
  Phenol + CHCl₃ + 3 NaOH (at 340 K) → Salicylaldehyde (o-hydroxybenzaldehyde) + 3 NaCl + 2 H₂O
  *Electrophile:* Dichlorocarbene (:CCl₂).

• **Kolbe's Reaction:**
  Phenol + NaOH → Sodium phenoxide
  Sodium phenoxide + CO₂ (at 400 K, 4-7 atm) followed by H⁺ → Salicylic acid (o-hydroxybenzoic acid).
  *Application:* Salicylic acid is acetylated with acetic anhydride to synthesize Aspirin (Acetylsalicylic acid).

• **Friedel-Crafts & Bromination of Phenols:**
  - Phenol + Br₂ in CS₂ (low polarity solvent, 273 K) → p-Bromophenol (major product).
  - Phenol + Bromine Water (Br₂/H₂O) → 2,4,6-Tribromophenol (white precipitate - used as confirmatory test for phenol!).
        `
      },
      {
        heading: "4. Ethers & Williamson Synthesis",
        content: `
• **Williamson Ether Synthesis:**
  Reaction between alkyl halide and sodium alkoxide:
  R-X + R'-O⁻ Na⁺ → R-O-R' + NaX
  *Crucial Rule:* For best yield, alkyl halide MUST be 1° (primary).
  - If 3° alkyl halide is used with alkoxide, elimination predominates and an ALKENE is formed instead of ether!
    (CH₃)₃C-Br + CH₃ONa → (CH₃)₂C=CH₂ (2-methylpropene) + CH₃OH + NaBr.

• **Cleavage of Ethers by HI (CBSE Classic Question):**
  R-O-R' + HI → R-I + R'-OH
  - With unsymmetrical ether having primary/secondary alkyl groups: I⁻ attacks the smaller alkyl group via SN2 (steric ease):
    CH₃-O-CH₂CH₃ + HI → CH₃I + CH₃CH₂OH
  - With ether having one 3° alkyl group: Reaction proceeds via SN1 through stable 3° carbocation; iodide attaches to the 3° alkyl group:
    (CH₃)₃C-O-CH₃ + HI → (CH₃)₃C-I + CH₃OH
  - In Anisole (C₆H₅-O-CH₃) + HI: The C_aryl-O bond has partial double bond character due to resonance; hence cleavage gives Phenol (C₆H₅OH) and Methyl iodide (CH₃I). Phenol never converts to iodobenzene!
        `
      }
    ],
    ncertPointers: [
      "Phenol turns into pink/red on long exposure to air due to slow oxidation to benzoquinone.",
      "Ethanol is made unfit for drinking by adding methanol and pyridine (denatured alcohol).",
      "Hydroboration-oxidation of alkenes yields primary alcohols anti-Markovnikov style without carbocation rearrangement."
    ]
  },
  8: {
    title: "Aldehydes, Ketones and Carboxylic Acids",
    chapterNo: 8,
    weightage: "8 Marks (CBSE Board Exam)",
    overview: "Organic compounds containing the carbonyl functional group (>C=O) and carboxyl group (-COOH). One of the most heavily tested chapters in CBSE Board Exams.",
    sections: [
      {
        heading: "1. Preparation of Carbonyl Compounds",
        content: `
• **Rosenmund Reduction:**
  Acyl chloride (RCOCl) + H₂ --[Pd/BaSO₄, quinoline/sulfur]--> R-CHO + HCl
  (BaSO₄ poisons the catalyst and prevents further reduction of aldehyde to alcohol).

• **Stephen Reaction:**
  R-CN + SnCl₂ + HCl → R-CH=NH·HCl --[H₃O⁺]--> R-CHO

• **Etard Reaction:**
  Toluene (C₆H₅CH₃) + CrO₂Cl₂ (chromyl chloride) in CS₂ → Brown chromium complex --[H₃O⁺]--> Benzaldehyde (C₆H₅CHO).

• **Gattermann-Koch Reaction:**
  Benzene + CO + HCl --[anhyd. AlCl₃ / CuCl]--> Benzaldehyde + HCl.
        `
      },
      {
        heading: "2. Nucleophilic Addition & Distinction Tests",
        content: `
• **Nucleophilic Addition Reactivity:**
  Aldehydes are generally more reactive than ketones towards nucleophilic addition due to:
  1. Steric reason: Ketones have two bulky alkyl groups shielding the carbonyl carbon.
  2. Electronic reason: Two alkyl groups in ketones push electron density (+I effect) and reduce the electrophilic character of the carbonyl carbon.
  Order: HCHO > CH₃CHO > CH₃COCH₃ > C₆H₅COCH₃.

• **Chemical Distinguishing Tests:**
  1. **Tollens' Test (Silver Mirror Test):**
     R-CHO + 2 [Ag(NH₃)₂]⁺ + 3 OH⁻ → R-COO⁻ + 2 Ag(s) (shining silver mirror) + 4 NH₃ + 2 H₂O
     *Note:* Aldehydes (both aliphatic and aromatic) give positive test. Ketones do NOT give this test.
  2. **Fehling's Test:**
     Aliphatic aldehydes reduce blue Fehling solution (Cu²⁺ tartrate complex) to red cuprous oxide precipitate (Cu₂O).
     *Warning:* Benzaldehyde (aromatic aldehyde) does NOT reduce Fehling's solution!
  3. **Iodoform Test:**
     Given by compounds containing CH₃-C=O (methyl carbonyl) or CH₃-CH(OH)- (methyl carbinol) group:
     Compound + I₂ + NaOH → Yellow precipitate of Iodoform (CHI₃) with characteristic medicinal smell.
     *Example:* Ethanol gives positive test, but methanol does not. Acetaldehyde gives it, but benzaldehyde does not. Acetophenone gives it, but benzophenone does not.
        `
      },
      {
        heading: "3. Aldol Condensation vs Cannizzaro Reaction",
        content: `
• **Aldol Condensation:**
  - Condition: Aldehydes or ketones having AT LEAST ONE α-hydrogen atom in presence of dilute alkali (NaOH / Ba(OH)₂).
  - Products: β-hydroxyaldehyde (Aldol) or β-hydroxyketone (Ketol), which upon heating lose water to give α,β-unsaturated carbonyl compound:
    2 CH₃CHO --[dil. NaOH]--> CH₃-CH(OH)-CH₂-CHO --[Δ]--> CH₃-CH=CH-CHO (But-2-enal).
  - Cross-Aldol: Between two different carbonyl compounds (yields mixture of 4 products if both have α-hydrogens).

• **Cannizzaro Reaction:**
  - Condition: Aldehydes having NO α-hydrogen atom in presence of concentrated alkali (50% NaOH/KOH).
  - Reaction: Self oxidation-reduction (disproportionation): one molecule is reduced to alcohol, other is oxidised to carboxylic acid salt:
    2 HCHO + conc. NaOH → CH₃OH + HCOONa
    2 C₆H₅CHO + conc. KOH → C₆H₅CH₂OH (Benzyl alcohol) + C₆H₅COOK (Potassium benzoate).
        `
      },
      {
        heading: "4. Carboxylic Acids & HVZ Reaction",
        content: `
• **Acidity of Carboxylic Acids:**
  Carboxylic acids are stronger acids than phenols because carboxylate ion is stabilized by two equivalent resonance structures where negative charge is delocalised over two highly electronegative oxygen atoms.
  - Formic acid (HCOOH) is more acidic than Acetic acid (CH₃COOH) because methyl group has +I effect.
  - Chloroacetic acid is more acidic than acetic acid due to -I effect of chlorine. (CF₃COOH > CCl₃COOH > CHCl₂COOH > CH₂ClCOOH > HCOOH > CH₃COOH).

• **Hell-Volhard-Zelinsky (HVZ) Reaction:**
  Carboxylic acids having an α-hydrogen halogenate at the α-position upon treatment with chlorine/bromine in presence of small amount of red phosphorus:
  R-CH₂-COOH + X₂ --[Red P / H₂O]--> R-CH(X)-COOH + HX   (X = Cl, Br).
        `
      }
    ],
    ncertPointers: [
      "Formaldehyde and Benzaldehyde do not possess α-hydrogen and undergo Cannizzaro reaction instead of Aldol.",
      "Aromatic aldehydes do not reduce Fehling's solution, enabling distinction between aliphatic and aromatic aldehydes.",
      "Carboxylic acids do not give carbonyl reactions (like 2,4-DNP or NaHSO₃ addition) because resonance delocalises the >C=O double bond with the -OH group."
    ]
  },
  9: {
    title: "Amines",
    chapterNo: 9,
    weightage: "6 Marks (CBSE Board Exam)",
    overview: "Nitrogenous organic derivatives of ammonia (NH₃) in which one, two, or three hydrogen atoms are replaced by alkyl or aryl groups. Important in medicines, polymers, and synthetic dyes.",
    sections: [
      {
        heading: "1. Basicity Order of Amines",
        content: `
Amines are Lewis bases due to the presence of an unshared pair of electrons on the nitrogen atom.

• **In Gaseous Phase:**
  Basicity is governed purely by +I inductive effect of alkyl groups:
  3° Amine > 2° Amine > 1° Amine > NH₃

• **In Aqueous Solution (The Classic CBSE Board Question):**
  Basicity is governed by a subtle interplay of three factors:
  1. +I Inductive Effect (favours 3° > 2° > 1°)
  2. Solvation / Hydration Effect (smaller cations are more hydrated by H-bonds: 1° > 2° > 3°)
  3. Steric Hindrance of alkyl groups.
  - **For Methyl substituted amines (-CH₃):**
    (CH₃)₂NH (2°) > CH₃NH₂ (1°) > (CH₃)₃N (3°) > NH₃   [Remember code: 213]
  - **For Ethyl substituted amines (-C₂H₅):**
    (C₂H₅)₂NH (2°) > (C₂H₅)₃N (3°) > C₂H₅NH₂ (1°) > NH₃   [Remember code: 231]

• **Aromatic Amines (Aniline) vs Ammonia:**
  Aniline is much weaker base than ammonia (pKb of aniline is 9.38 vs 4.75 for NH₃) because lone pair of nitrogen in aniline is delocalised into the benzene ring via resonance, making it less available for protonation.
        `
      },
      {
        heading: "2. Key Preparations: Gabriel & Hoffmann",
        content: `
• **Gabriel Phthalimide Synthesis:**
  Used for exclusive preparation of pure primary aliphatic amines.
  Phthalimide + ethanolic KOH → Potassium phthalimide + R-X → N-alkylphthalimide --[aq. NaOH]--> Primary amine (R-NH₂) + Sodium phthalate.
  *High-Yield Board Question:* Why can aromatic primary amines (like aniline) NOT be prepared by this method?
  *Answer:* Because aryl halides (Ar-X) do not undergo nucleophilic substitution with potassium phthalimide anion due to partial double bond character of C-X bond!

• **Hoffmann Bromamide Degradation Reaction:**
  Primary acid amide is treated with bromine and aqueous/ethanolic NaOH to yield primary amine containing ONE LESS carbon atom than the amide (step-down reaction):
  R-CONH₂ + Br₂ + 4 NaOH → R-NH₂ + Na₂CO₃ + 2 NaBr + 2 H₂O
        `
      },
      {
        heading: "3. Distinction Tests: Carbylamine & Hinsberg Test",
        content: `
• **Carbylamine Test (Isocyanide Test):**
  Only 1° amines (both aliphatic and aromatic) give this test when warmed with chloroform and ethanolic KOH:
  R-NH₂ + CHCl₃ + 3 KOH --[heat]--> R-NC (Carbylamine / Isocyanide - offensive, foul nauseating smell!) + 3 KCl + 3 H₂O
  Secondary and tertiary amines do NOT give this test.

• **Hinsberg Test (Separation & Distinction of 1°, 2°, 3° Amines):**
  Hinsberg Reagent: Benzenesulphonyl chloride (C₆H₅SO₂Cl)
  - **1° Amine:** Forms N-alkylbenzenesulphonamide, which has an acidic hydrogen attached to nitrogen and therefore DISSOLVES in aqueous KOH.
  - **2° Amine:** Forms N,N-dialkylbenzenesulphonamide, which has NO acidic hydrogen on nitrogen and therefore remains INSOLUBLE in KOH.
  - **3° Amine:** Does not react with benzenesulphonyl chloride (remains unreacted).
        `
      },
      {
        heading: "4. Diazonium Salts & Synthetic Applications",
        content: `
• **Diazotisation:**
  C₆H₅NH₂ + NaNO₂ + 2 HCl (0 - 5 °C) → C₆H₅N₂⁺Cl⁻ (Benzene diazonium chloride) + NaCl + 2 H₂O
  (Must be kept cold; decomposes violently at higher temperatures).

• **Coupling Reactions (Azo Dye Formation):**
  - With Phenol (mild alkaline pH 9-10):
    C₆H₅N₂⁺Cl⁻ + C₆H₅OH → p-Hydroxyazobenzene (Orange dye) + HCl
  - With Aniline (mild acidic pH 4-5):
    C₆H₅N₂⁺Cl⁻ + C₆H₅NH₂ → p-Aminoazobenzene (Yellow dye) + HCl
        `
      }
    ],
    ncertPointers: [
      "Gabriel Phthalimide synthesis fails for aniline because aryl halides cannot undergo nucleophilic substitution under normal conditions.",
      "Aniline does not undergo Friedel-Crafts alkylation or acylation because the Lewis acid catalyst (AlCl₃) complexes with the basic amino group (-NH₂).",
      "During nitration of aniline, direct nitration yields significant amount (47%) of m-nitroaniline because in acidic medium aniline is protonated to meta-directing anilinium ion!"
    ]
  },
  10: {
    title: "Biomolecules",
    chapterNo: 10,
    weightage: "7 Marks (CBSE Board Exam)",
    overview: "Complex organic compounds like carbohydrates, proteins, nucleic acids, lipids and vitamins which form the chemical basis of living organisms and life processes.",
    sections: [
      {
        heading: "1. Carbohydrates & Glucose Chemistry",
        content: `
• **Classification:**
  - Monosaccharides: Cannot be hydrolysed further (Glucose, Fructose, Ribose).
  - Disaccharides: Yield 2 monosaccharide units on hydrolysis (Sucrose → Glucose + Fructose; Maltose → 2 Glucose; Lactose → Glucose + Galactose).
  - Reducing Sugars: Carbohydrates containing free aldehydic or ketonic groups that reduce Fehling's or Tollens' reagent (All monosaccharides; Maltose, Lactose). Sucrose is a NON-REDUCING sugar because reducing groups are bonded in glycosidic linkage (C1 of α-glucose and C2 of β-fructose).

• **Structure Proof of D-(+)-Glucose:**
  1. Prolonged heating with HI gives n-hexane → confirms all 6 carbon atoms are in a straight chain.
  2. Reaction with Hydroxylamine (NH₂OH) gives oxime, and with HCN gives cyanohydrin → confirms presence of carbonyl group (>C=O).
  3. Mild oxidation with Bromine water (Br₂/H₂O) gives Gluconic acid (6-carbon monocarboxylic acid) → confirms carbonyl is an aldehyde (-CHO).
  4. Acetylation with acetic anhydride yields glucose pentaacetate → confirms presence of 5 -OH groups attached to different carbons.
  5. Oxidation with HNO₃ yields Saccharic acid (dicarboxylic acid) → confirms presence of one primary alcohol (-CH₂OH) group.

• **Invert Sugar:**
  Sucrose is dextrorotatory (+66.5°). On hydrolysis, it gives equimolar mixture of D-(+)-glucose (+52.5°) and D-(-)-fructose (-92.4°). The net mixture is laevorotatory (-39.9°). Hence, hydrolysis of sucrose is accompanied by inversion of optical sign, and the hydrolysed mixture is called invert sugar.
        `
      },
      {
        heading: "2. Amino Acids, Peptides & Proteins",
        content: `
• **Zwitterion Structure:**
  Amino acids contain both acidic (-COOH) and basic (-NH₂) groups. In aqueous solution, proton transfers from carboxyl to amino group:
  H₃N⁺-CH(R)-COO⁻
  This dipolar ion is called a Zwitterion. It is neutral and shows amphoteric behaviour.
  All naturally occurring α-amino acids (except Glycine, H₂N-CH₂-COOH) are optically active due to chiral α-carbon and have L-configuration.

• **Peptide Bond:**
  Amide linkage (-CO-NH-) formed between carboxyl group of one amino acid and amino group of another with loss of a water molecule.

• **Four Levels of Protein Structure:**
  - **Primary Structure:** Specific linear sequence of amino acids held by covalent peptide bonds. Any alteration produces defective protein (e.g. Sickle cell anaemia: substitution of glutamic acid by valine at position 6 of β-chain of haemoglobin).
  - **Secondary Structure:** Conformation of polypeptide chain due to regular hydrogen bonding between >C=O and -NH- groups:
    * α-Helix: Polypeptide chain coils like right-handed screw (e.g. Keratin in hair/nails, Myosin in muscle).
    * β-Pleated Sheet: Polypeptide chains lie side-by-side in sheet form (e.g. Silk fibroin).
  - **Tertiary Structure:** Overall folding and 3D architecture stabilized by disulfide bonds (-S-S-), hydrogen bonds, ionic interactions, and van der Waals forces. Yields fibrous proteins (insoluble in water) and globular proteins (soluble in water, e.g., albumin, insulin).
  - **Quaternary Structure:** Spatial arrangement of two or more polypeptide subunits (e.g. Haemoglobin has 4 subunits).

• **Denaturation of Proteins:**
  When a native protein is subjected to physical change (temperature) or chemical change (pH change), hydrogen bonds are broken, globules unfold and helix uncoils. Protein loses its biological activity.
  *Key Concept:* Secondary and tertiary structures are destroyed during denaturation, but PRIMARY structure remains INTACT. Examples: Coagulation of egg white on boiling; curdling of milk by lactic acid bacteria.
        `
      },
      {
        heading: "3. Nucleic Acids (DNA & RNA)",
        content: `
• **Components of Nucleic Acids:**
  1. Pentose Sugar: β-D-2-deoxyribose (DNA) or β-D-ribose (RNA).
  2. Phosphoric Acid (forms phosphodiester linkage between C3' and C5' of adjacent sugars).
  3. Nitrogenous Bases:
     - Purines: Adenine (A), Guanine (G).
     - Pyrimidines: Cytosine (C), Thymine (T) in DNA, and Uracil (U) in RNA.

• **Nucleoside vs Nucleotide:**
  - Nucleoside = Pentose Sugar + Nitrogenous Base (at C1').
  - Nucleotide = Nucleoside + Phosphate group (at C5').

• **Watson & Crick Double Helix (DNA):**
  - Two polynucleotide strands running antiparallel held together by hydrogen bonds between complementary base pairs:
    Adenine pairs with Thymine via 2 hydrogen bonds (A = T).
    Guanine pairs with Cytosine via 3 hydrogen bonds (G ≡ C).
  - RNA is typically single stranded and has three main types: mRNA, tRNA, rRNA.
        `
      }
    ],
    ncertPointers: [
      "Glycine is the only naturally occurring amino acid that is optically inactive because its α-carbon is achiral (attached to two hydrogen atoms).",
      "During denaturation of proteins, primary structure remains completely unaffected because covalent peptide bonds do not break under mild heat or pH shift.",
      "Vitamin C (Ascorbic acid) cannot be stored in the body because it is water soluble and is regularly excreted in urine; hence it must be supplied continuously in diet."
    ]
  }
};
