export const formulaData = [
  {
    chapterId: 1,
    chapterName: "Solutions",
    formulas: [
      {
        name: "Molarity (M)",
        formula: "M = \\frac{w_B \\times 1000}{M_B \\times V_{(mL)}}",
        units: "mol L⁻¹",
        notes: "Temperature-dependent; volume expands on heating."
      },
      {
        name: "Molality (m)",
        formula: "m = \\frac{w_B \\times 1000}{M_B \\times W_{A(g)}}",
        units: "mol kg⁻¹",
        notes: "Temperature-independent; preferred in colligative calculations."
      },
      {
        name: "Henry's Law",
        formula: "p = K_H \\cdot x",
        units: "p in bar or atm, K_H in bar",
        notes: "Higher K_H means lower solubility; K_H increases with temperature."
      },
      {
        name: "Raoult's Law (Volatile binary mixture)",
        formula: "P_{total} = p_A^\\circ x_A + p_B^\\circ x_B = p_A^\\circ + (p_B^\\circ - p_A^\\circ)x_B",
        units: "mm Hg / torr / bar",
        notes: "Applies strictly to ideal solutions (ΔH_mix = 0, ΔV_mix = 0)."
      },
      {
        name: "Relative Lowering of Vapour Pressure (RLVP)",
        formula: "\\frac{p_A^\\circ - p_A}{p_A^\\circ} = i \\cdot x_B \\approx i \\cdot \\frac{n_B}{n_A} = i \\cdot \\frac{w_B \\cdot M_A}{M_B \\cdot w_A}",
        units: "Dimensionless",
        notes: "Colligative property used to determine molar mass of non-volatile solute."
      },
      {
        name: "Elevation in Boiling Point",
        formula: "\\Delta T_b = i \\cdot K_b \\cdot m = i \\cdot \\frac{K_b \\times w_B \\times 1000}{M_B \\times w_A}",
        units: "K or °C, K_b in K kg mol⁻¹",
        notes: "For water, K_b = 0.52 K kg mol⁻¹."
      },
      {
        name: "Depression in Freezing Point",
        formula: "\\Delta T_f = i \\cdot K_f \\cdot m = i \\cdot \\frac{K_f \\times w_B \\times 1000}{M_B \\times w_A}",
        units: "K or °C, K_f in K kg mol⁻¹",
        notes: "For water, K_f = 1.86 K kg mol⁻¹."
      },
      {
        name: "Osmotic Pressure",
        formula: "\\pi = i \\cdot C R T = i \\cdot \\frac{w_B R T}{M_B V}",
        units: "atm / bar (R = 0.0821 L atm K⁻¹ mol⁻¹ or 0.0831 L bar K⁻¹ mol⁻¹)",
        notes: "Best property for finding molecular weights of proteins and polymers."
      },
      {
        name: "Van 't Hoff Factor (i) & Degree of Dissociation/Association",
        formula: "\\alpha_{diss} = \\frac{i - 1}{n - 1}, \\quad \\alpha_{assoc} = \\frac{1 - i}{1 - 1/n}",
        units: "Dimensionless fraction",
        notes: "For 100% dissociation of NaCl (n=2), i=2; for K₂SO₄ (n=3), i=3."
      }
    ]
  },
  {
    chapterId: 2,
    chapterName: "Electrochemistry",
    formulas: [
      {
        name: "Standard Cell EMF",
        formula: "E^\\circ_{cell} = E^\\circ_{cathode} - E^\\circ_{anode} = E^\\circ_{right} - E^\\circ_{left}",
        units: "Volts (V)",
        notes: "Both values must be standard reduction potentials."
      },
      {
        name: "Nernst Equation (at 298 K)",
        formula: "E_{cell} = E^\\circ_{cell} - \\frac{0.0591}{n} \\log_{10} Q = E^\\circ_{cell} - \\frac{0.0591}{n} \\log_{10} \\left[\\frac{[\\text{Products}]^c}{[\\text{Reactants}]^a}\\right]",
        units: "Volts (V)",
        notes: "n = number of electrons exchanged in balanced redox equation."
      },
      {
        name: "Equilibrium Constant from E°cell",
        formula: "\\log_{10} K_c = \\frac{n \\cdot E^\\circ_{cell}}{0.0591}",
        units: "Dimensionless",
        notes: "At equilibrium, E_cell = 0."
      },
      {
        name: "Standard Gibbs Free Energy Change",
        formula: "\\Delta_r G^\\circ = -n F E^\\circ_{cell} = -2.303 R T \\log_{10} K_c",
        units: "J mol⁻¹ or kJ mol⁻¹ (F = 96,500 C mol⁻¹)",
        notes: "Spontaneous reaction requires E°cell > 0 and ΔrG° < 0."
      },
      {
        name: "Cell Constant & Conductivity",
        formula: "G^* = \\frac{l}{A} = R \\cdot \\kappa",
        units: "G* in cm⁻¹ or m⁻¹, κ in S cm⁻¹",
        notes: "Cell constant depends only on electrode geometry."
      },
      {
        name: "Molar Conductivity (Λm)",
        formula: "\\Lambda_m = \\frac{\\kappa \\times 1000}{M}",
        units: "S cm² mol⁻¹",
        notes: "M is molarity in mol L⁻¹, κ in S cm⁻¹."
      },
      {
        name: "Kohlrausch's Law",
        formula: "\\Lambda^\\circ_m = \\nu_+ \\lambda^\\circ_+ + \\nu_- \\lambda^\\circ_-",
        units: "S cm² mol⁻¹",
        notes: "Enables calculation of Λ°m for weak electrolytes."
      },
      {
        name: "Degree of Dissociation (α) & Ka for Weak Electrolyte",
        formula: "\\alpha = \\frac{\\Lambda_m}{\\Lambda^\\circ_m}, \\quad K_a = \\frac{C \\alpha^2}{1 - \\alpha} = \\frac{C (\\Lambda_m/\\Lambda^\\circ_m)^2}{1 - (\\Lambda_m/\\Lambda^\\circ_m)}",
        units: "Ka in mol L⁻¹",
        notes: "Applicable to acetic acid, ammonium hydroxide, etc."
      },
      {
        name: "Faraday's First Law",
        formula: "w = Z \\cdot I \\cdot t = \\frac{M \\cdot I \\cdot t}{n \\cdot F}",
        units: "Mass in g, I in Amperes, t in seconds",
        notes: "1 Faraday (96,500 C) deposits 1 gram equivalent of any substance."
      }
    ]
  },
  {
    chapterId: 3,
    chapterName: "Chemical Kinetics",
    formulas: [
      {
        name: "Rate of Reaction",
        formula: "\\text{Rate} = -\\frac{1}{a}\\frac{d[A]}{dt} = +\\frac{1}{b}\\frac{d[B]}{dt}",
        units: "mol L⁻¹ s⁻¹",
        notes: "Negative sign indicates decrease in reactant concentration."
      },
      {
        name: "Zero Order Integrated Rate Law",
        formula: "k = \\frac{[R]_0 - [R]}{t}, \\quad t_{1/2} = \\frac{[R]_0}{2k}",
        units: "k in mol L⁻¹ s⁻¹",
        notes: "t₁/₂ is directly proportional to initial concentration [R]₀."
      },
      {
        name: "First Order Integrated Rate Law",
        formula: "k = \\frac{2.303}{t} \\log_{10} \\left(\\frac{[R]_0}{[R]}\\right), \\quad t_{1/2} = \\frac{0.693}{k}",
        units: "k in s⁻¹ or min⁻¹",
        notes: "t₁/₂ is completely independent of initial concentration."
      },
      {
        name: "First Order Gas Phase Reaction",
        formula: "k = \\frac{2.303}{t} \\log_{10} \\left(\\frac{p_i}{2p_i - p_t}\\right)",
        units: "k in s⁻¹",
        notes: "For A(g) → B(g) + C(g) where pi = initial pressure, pt = total pressure."
      },
      {
        name: "Arrhenius Equation",
        formula: "k = A \\cdot e^{-E_a / RT} \\iff \\log_{10} k = \\log_{10} A - \\frac{E_a}{2.303 R T}",
        units: "Ea in J mol⁻¹ or kJ mol⁻¹ (R = 8.314 J K⁻¹ mol⁻¹)",
        notes: "Slope of log k vs 1/T plot is -Ea / (2.303 R)."
      },
      {
        name: "Arrhenius Two-Temperature Form",
        formula: "\\log_{10}\\left(\\frac{k_2}{k_1}\\right) = \\frac{E_a}{2.303 R} \\left[\\frac{T_2 - T_1}{T_1 T_2}\\right]",
        units: "T in Kelvin (K)",
        notes: "Used to determine activation energy from rates at two temperatures."
      }
    ]
  },
  {
    chapterId: 4,
    chapterName: "d- and f-Block Elements",
    formulas: [
      {
        name: "Spin-Only Magnetic Moment",
        formula: "\\mu = \\sqrt{n(n + 2)} \\text{ B.M.}",
        units: "B.M. (Bohr Magnetons)",
        notes: "n = number of unpaired electrons. e.g. Fe²⁺ (3d⁶, n=4) → μ = √24 ≈ 4.90 B.M."
      },
      {
        name: "Chromate-Dichromate Acid-Base Equilibrium",
        formula: "2 \\text{CrO}_4^{2-} (\\text{yellow}) + 2 \\text{H}^+ \\rightleftharpoons \\text{Cr}_2\\text{O}_7^{2-} (\\text{orange}) + \\text{H}_2\\text{O}",
        units: "Equilibrium",
        notes: "Acidic pH favours orange dichromate; alkaline pH favours yellow chromate."
      },
      {
        name: "Acidic KMnO₄ Reduction Half-Cell",
        formula: "\\text{MnO}_4^- + 8\\text{H}^+ + 5e^- \\rightarrow \\text{Mn}^{2+} + 4\\text{H}_2\\text{O} \\quad (E^\\circ = +1.51\\text{ V})",
        units: "Volts",
        notes: "Equivalent weight = Molar Mass / 5."
      }
    ]
  },
  {
    chapterId: 5,
    chapterName: "Coordination Compounds",
    formulas: [
      {
        name: "Octahedral Crystal Field Splitting (CFT)",
        formula: "\\text{CFSE} = [-0.4 \\cdot n(t_{2g}) + 0.6 \\cdot n(e_g)] \\Delta_o + m \\cdot P",
        units: "kJ mol⁻¹ or cm⁻¹",
        notes: "P is pairing energy. If Δo > P: Low spin (strong ligand). If Δo < P: High spin."
      },
      {
        name: "Tetrahedral vs Octahedral Splitting",
        formula: "\\Delta_t = \\frac{4}{9} \\Delta_o",
        units: "cm⁻¹",
        notes: "Δt is always less than pairing energy; tetrahedral complexes are always high spin."
      }
    ]
  },
  {
    chapterId: 6,
    chapterName: "Organic Chemistry Reactions Master Sheet",
    formulas: [
      {
        name: "Sandmeyer Reaction",
        formula: "\\text{Ar-N}_2^+\\text{Cl}^- + \\text{Cu}_2\\text{Cl}_2 / \\text{HCl} \\rightarrow \\text{Ar-Cl} + \\text{N}_2 \\uparrow",
        units: "Organic Synthesis",
        notes: "Excellent for preparing chlorobenzene and bromobenzene."
      },
      {
        name: "Finkelstein Reaction",
        formula: "\\text{R-Cl / R-Br} + \\text{NaI} \\xrightarrow{\\text{dry acetone}} \\text{R-I} + \\text{NaCl} \\downarrow",
        units: "Halogen Exchange",
        notes: "Acetone precipitates NaCl/NaBr, shifting equilibrium forward."
      },
      {
        name: "Reimer-Tiemann Reaction",
        formula: "\\text{Phenol} + \\text{CHCl}_3 + 3\\text{NaOH} \\xrightarrow{340 \\text{ K}} \\text{Salicylaldehyde}",
        units: "Formylation",
        notes: "Active electrophile is dichlorocarbene (:CCl₂)."
      },
      {
        name: "Kolbe's Reaction",
        formula: "\\text{Sodium phenoxide} + \\text{CO}_2 \\xrightarrow{400 \\text{ K}, 4-7 \\text{ atm}} \\text{Salicylic acid}",
        units: "Carboxylation",
        notes: "Used in industrial manufacture of Aspirin."
      },
      {
        name: "Aldol Condensation",
        formula: "2\\text{CH}_3\\text{CHO} \\xrightarrow{\\text{dil. NaOH}} \\text{CH}_3\\text{CH(OH)CH}_2\\text{CHO} \\xrightarrow{\\Delta} \\text{CH}_3\\text{CH=CH-CHO}",
        units: "Condensation",
        notes: "Requires at least one α-hydrogen atom."
      },
      {
        name: "Cannizzaro Reaction",
        formula: "2\\text{HCHO} + \\text{conc. NaOH} \\rightarrow \\text{HCOONa} + \\text{CH}_3\\text{OH}",
        units: "Disproportionation",
        notes: "Requires absence of α-hydrogen (Formaldehyde, Benzaldehyde)."
      },
      {
        name: "Hoffmann Bromamide Degradation",
        formula: "\\text{R-CONH}_2 + \\text{Br}_2 + 4\\text{NaOH} \\rightarrow \\text{R-NH}_2 + \\text{Na}_2\\text{CO}_3 + 2\\text{NaBr} + 2\\text{H}_2\\text{O}",
        units: "Decarbonylation",
        notes: "Yields 1° amine with 1 less carbon than parent amide."
      },
      {
        name: "Gabriel Phthalimide Synthesis",
        formula: "\\text{Phthalimide} \\xrightarrow{\\text{KOH}} \\text{Potassium salt} \\xrightarrow{\\text{R-X}} \\text{N-Alkyl} \\xrightarrow{\\text{aq. NaOH}} \\text{R-NH}_2 (1^\\circ)",
        units: "Pure 1° Amine",
        notes: "Cannot be used for aromatic amines (Aniline) because aryl halides do not react."
      }
    ]
  }
];
