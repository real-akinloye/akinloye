export type ReformStatus = 'drafted' | 'submitted' | 'pending' | 'needs-recovery';

export interface ReformDetail {
  id: string;
  n: string;
  title: string;
  desc: string;
  status: ReformStatus;
  featured?: boolean;
  pillarId: string;
  pillarTitle: string;
  overview?: string;
  historicalContext?: string;
  coreMechanism?: string[];
  strategicImpact?: string[];
  keyQuoteOrMetric?: string;
}

export interface Pillar {
  id: string;
  pillar: string;
  reforms: ReformDetail[];
}

export const REFORMS_DATA: Pillar[] = [
  {
    id: "p1",
    pillar: "Economic Transformation & Productive-State Doctrine",
    reforms: [
      {
        id: "r01",
        n: "01",
        title: "The Productive State Doctrine",
        desc: "Shift government priorities from consumption and distribution toward production, industrialisation and economic capacity.",
        status: "drafted",
        pillarId: "p1",
        pillarTitle: "Economic Transformation & Productive-State Doctrine",
        overview: "Transitions Nigeria from a rent-allocating petro-state into an active productive machine. State spending is re-engineered so capital allocation directly induces industrial capability, machinery acquisition, and domestic processing rather than consumable bureaucracy.",
        problemAddressed: "Decades of consumption-first budgets where revenue is consumed in recurring overhead and short-term imports, leaving no durable industrial base.",
        coreMechanism: [
          "Mandate minimum 60% of all sovereign capital expenditure towards direct manufacturing, power, and logistics infrastructure.",
          "Subsidies tied exclusively to measurable production milestones rather than retail consumption.",
          "Performance-linked tax holidays for primary processors converting Nigerian raw materials into export-ready finished goods."
        ],
        strategicImpact: [
          "Cuts non-productive federal overhead by 35% over 3 fiscal cycles.",
          "Establishes domestic fabrication clusters in every geopolitical region."
        ]
      },
      {
        id: "r02",
        n: "02",
        title: "Reduction of Oil Dependency",
        desc: "Gradually reduce Nigeria's dependence on crude oil as the primary source of foreign exchange and government revenue.",
        status: "drafted",
        pillarId: "p1",
        pillarTitle: "Economic Transformation & Productive-State Doctrine",
        overview: "Systematically decouples fiscal stability and FX reserve replenishment from crude oil export cycles by building alternative sovereign foreign exchange channels in solid minerals, agro-processing, software export, and manufacturing.",
        historicalContext: "Every global oil price crash (1986, 2008, 2014, 2020) plunged Nigeria into currency devaluation, spiraling debt, and stagflation due to mono-commodity vulnerability.",
        coreMechanism: [
          "Creation of Non-Oil Export Sovereign Accounts with zero FX repatriation surrender penalties.",
          "National mineral value-addition mandate: prohibition of raw, unrefined lithium, tin, and rare-earth mineral exports.",
          "Tariff-free capital equipment importation for verified export-producing industrial factories."
        ],
        strategicImpact: [
          "Targets reduction of crude oil share of sovereign FX from ~85% to under 40% within 8 years.",
          "Builds domestic refining and processing ecosystems across the 6 geopolitical zones."
        ]
      },
      {
        id: "r03",
        n: "03",
        title: "Production over Palliatives",
        desc: "Address poverty and inflation through productive capacity rather than relying on temporary transfers.",
        status: "drafted",
        pillarId: "p1",
        pillarTitle: "Economic Transformation & Productive-State Doctrine",
        overview: "Scraps wasteful cash-handout schemes that feed temporary consumption without expanding real output. Replaces them with work-integrated production vouchers, agro-tooling access, and decentralized micro-processing grants.",
        historicalContext: "Past palliative programs dispersed hundreds of billions of naira with negligible reduction in multidimensional poverty and zero increase in national output.",
        coreMechanism: [
          "Redirect conditional welfare funds into vocational tooling and working-capital equipment leasing.",
          "Local processing hubs where recipients receive guaranteed purchase agreements for manufactured goods.",
          "Direct linkage to community farm cooperatives and cold-storage networks."
        ],
        strategicImpact: [
          "Transitions millions from passive aid recipients into active equity owners and income-earning producers.",
          "Curbs post-palliative inflation by expanding supply instead of artificially propping demand."
        ]
      },
      {
        id: "r04",
        n: "04",
        title: "War Against Inflation Through Production",
        desc: "Expand domestic supply, industrial capacity, food production and competition to tackle structural inflation.",
        status: "drafted",
        pillarId: "p1",
        pillarTitle: "Economic Transformation & Productive-State Doctrine",
        overview: "Addresses inflation as a structural supply-side crisis rather than merely a monetary aggregate. High interest rates choke factories; the durable cure is flood the markets with domestically produced food, fuel, power, and logistics.",
        historicalContext: "Persistent central bank rate hikes failed to tame Nigerian inflation because the root causes were transport bottlenecks, imported fuel bills, and food supply disruptions.",
        coreMechanism: [
          "Targeted freight corridor subsidies for domestic agricultural transit.",
          "Supply-chain bottleneck de-risking: emergency rail freight corridors for grains and fertilizer.",
          "Pro-competition anti-trust enforcement against domestic cartels dominating cement, flour, and sugar."
        ],
        strategicImpact: [
          "Lowers headline inflation structurally to single digits without destroying business credit.",
          "Insulates staple consumer baskets from foreign exchange volatility."
        ]
      },
      {
        id: "r05",
        n: "05",
        title: "Industrialisation Before Consumption-Led Expansion",
        desc: "Strengthen the productive economy to support sustainable purchasing power.",
        status: "drafted",
        pillarId: "p1",
        pillarTitle: "Economic Transformation & Productive-State Doctrine",
        overview: "Establishes a policy firewall: purchasing power cannot be sustainably expanded by debt-fueled wage increases without preceding industrial output. Real wage strength requires lower cost of living achieved through abundant domestic production.",
        coreMechanism: [
          "Prioritize capital goods manufacturing over consumer goods assembly.",
          "Provide dual-tax incentives for industries that source 80%+ raw inputs domestically."
        ]
      },
      {
        id: "r06",
        n: "06",
        title: "Targeted Capability Subsidies",
        desc: "Direct subsidies toward building productive capacity rather than indiscriminate consumption.",
        status: "drafted",
        pillarId: "p1",
        pillarTitle: "Economic Transformation & Productive-State Doctrine",
        overview: "Eliminates blank-check retail subsidies and redirects capital to technology acquisition, industrial power lines, and export-accreditation labs for Nigerian manufacturers.",
        coreMechanism: [
          "Industrial power tariff equalization for manufacturing clusters.",
          "Patent and ISO-standard matching grants for high-growth Nigerian exporters."
        ]
      },
      {
        id: "r07",
        n: "07",
        title: "Strategic Capability Sovereignty",
        desc: "Develop domestic capacity in strategically important industries and technologies.",
        status: "drafted",
        pillarId: "p1",
        pillarTitle: "Economic Transformation & Productive-State Doctrine",
        overview: "Identifies non-negotiable strategic sectors—energy storage, pharmaceuticals, telecommunications switching, defence hardware, and food staples—and ensures Nigeria has independent domestic sovereign control.",
        coreMechanism: [
          "Designation of 7 Core Sovereign Industries protected by long-term procurement guarantees.",
          "Establishment of the Strategic Industrial Reserve Corporation."
        ]
      },
      {
        id: "r08",
        n: "08",
        title: "Commercialisation → Industrialisation → Purchasing Power",
        desc: "Use commercialisation and productive expansion as the pathway toward higher living standards.",
        status: "drafted",
        pillarId: "p1",
        pillarTitle: "Economic Transformation & Productive-State Doctrine",
        overview: "A three-phase sequential development model. Commercialize dormant state assets, use the unlocked liquidity to fund domestic heavy and light industrialization, which in turn yields sustainable, non-inflationary purchasing power for citizens.",
        coreMechanism: [
          "Sovereign Asset Register: cataloging and commercializing under-utilized public real estate, ports, and rights-of-way.",
          "Capital recycling into strategic industrial venture equity funds."
        ]
      },
      {
        id: "r09",
        n: "09",
        title: "Public Debt Restructuring",
        desc: "Review the structure and sustainability of government borrowing; domestic debt swap + concessional refinancing.",
        status: "drafted",
        featured: true,
        pillarId: "p1",
        pillarTitle: "Economic Transformation & Productive-State Doctrine",
        overview: "A comprehensive restructuring of Nigeria's sovereign debt profile. Replaces crippling short-term high-yield commercial domestic treasury bills and eurobonds with sovereign infrastructure asset-backed equity instruments and concessional 30-year paper.",
        historicalContext: "Debt-service-to-revenue ratio exceeding 70-90% historically crowded out all capital investment in Nigerian infrastructure, forcing recurring borrowing to pay interest.",
        coreMechanism: [
          "Domestic Debt Swap: converting high-interest domestic debt into 20-30 year development debentures tied to revenue-generating infrastructure.",
          "Pre-payment and refinancing of predatory Eurobond debt with bilateral concessional multi-currency loans.",
          "Enactment of hard statutory debt ceilings tied strictly to productive capital return rather than GDP ratios."
        ],
        strategicImpact: [
          "Saves over ₦4.8 trillion annually in debt service overhead.",
          "Restores sovereign fiscal flexibility and eliminates sovereign default risk."
        ],
        keyQuoteOrMetric: "₦4.8T+ annual debt service savings"
      },
      {
        id: "r10",
        n: "10",
        title: "D2C — Dividends to Capital",
        desc: "Channel unclaimed dividends (~₦250B) into the active capital market for job creation rather than into NELFUND as debt. Estimated 2–4M jobs on ₦12T capital allocation.",
        status: "drafted",
        featured: true,
        pillarId: "p1",
        pillarTitle: "Economic Transformation & Productive-State Doctrine",
        overview: "Rather than letting ~₦250B+ in dormant unclaimed dividends sit idle or be absorbed into government debt structures like NELFUND, D2C pools these funds into a professionally managed, market-driven productive equity trust. This trust coinvests with private capital to catalyze an estimated 2 to 4 million industrial and technology jobs on a leveraged ₦12T capital base.",
        historicalContext: "Historically, billions in unclaimed dividends have been stranded in registrar vaults while Nigerian youth suffer from catastrophic unemployment and entrepreneurs lack venture credit.",
        coreMechanism: [
          "Establishment of the Sovereign Dividends-to-Capital (D2C) Trust regulated by SEC Nigeria.",
          "Original owners retain ultimate equity reclaim rights with guaranteed inflation-protected ledger tokens.",
          "D2C acts as a catalytic first-loss guarantor and co-investor for high-employment industrial manufacturing, agro-processing, and tech ventures."
        ],
        strategicImpact: [
          "Unlocks ₦250B+ of dormant capital without any fiscal borrowing.",
          "Projected creation of 2,000,000 to 4,000,000 verified private-sector jobs across all 36 states and FCT."
        ],
        keyQuoteOrMetric: "₦250B unlocked · 2–4M jobs target"
      }
    ]
  },
  {
    id: "p2",
    pillar: "Petroleum, Energy & Economic Sovereignty",
    reforms: [
      {
        id: "r11",
        n: "11",
        title: "Sovereign Petroleum Value & Domestic Fuel Pricing Framework",
        desc: "Domestic vs international petroleum pools, controlled sovereign crude transfer price, formula-based PMS pricing, Domestic Energy Pool. No unfunded subsidy or borrowing. Target pump price ₦700–800/litre; floor ~₦500–700.",
        status: "drafted",
        featured: true,
        pillarId: "p2",
        pillarTitle: "Petroleum, Energy & Economic Sovereignty",
        overview: "Creates a sovereign dual-chamber petroleum market. Segregates crude oil into a 'Domestic Energy Pool' (supplied directly to domestic refiners like Dangote and state refineries at a controlled naira cost-plus formula) and an 'International Pool' for global export. Completely eliminates imported PMS dependency, ending fraudulent subsidy rackets without inflicting hyper-inflationary pain on citizens.",
        historicalContext: "Nigeria spent up to $10B annually importing refined fuel from European refiners using crude Nigeria sold them cheap—paying double transport, refining margins, and dollar arbitrage fees, draining foreign reserves.",
        coreMechanism: [
          "Domestic Energy Pool ring-fences 450,000+ barrels/day for in-country refiners at a sovereign benchmark price.",
          "Naira-denominated crude settlement: refineries pay in NGN, eliminating USD pressure in domestic fuel marketing.",
          "Strict formula-based pump pricing pegged between ₦700–800/litre target (with a ₦500–700 sovereign floor). Zero unbudgeted subsidy or debt."
        ],
        strategicImpact: [
          "Eliminates 30-40% of Nigeria's foreign exchange demand currently spent on fuel imports.",
          "Anchors consumer transportation and food logistics costs at predictable, affordable levels."
        ],
        keyQuoteOrMetric: "₦700–800/L target pump price · Zero dollar fuel import drain"
      },
      {
        id: "r12",
        n: "12",
        title: "Petroleum-Naira Trade Standard",
        desc: "All Nigerian petroleum exports (crude, PMS, diesel, LPG, lubricants, petrochemicals) invoiced and settled in naira to 54 AU member states + bilateral European buyers. 1.5% PNTL levy into Sovereign Buffer Pool.",
        status: "drafted",
        featured: true,
        pillarId: "p2",
        pillarTitle: "Petroleum, Energy & Economic Sovereignty",
        overview: "Establishes the Petroleum-Naira Trade Standard (PNTS). Forces all foreign buyers of Nigerian energy products across Africa and bilateral partner countries to acquire Naira in the open market to settle their invoices. A 1.5% levy on all transactions directly capitalizes the Sovereign Economic Buffer Pool.",
        historicalContext: "The petrodollar paradigm forces Nigeria to trade its own natural wealth in a foreign currency, giving foreign central banks total jurisdiction and sanctions power over Nigerian sovereign revenues.",
        coreMechanism: [
          "Statutory requirement: All 54 African Union buyers and European bilateral contracts invoice exclusively in NGN.",
          "Foreign buyers open NGN reserve accounts with Nigerian clearing institutions or swap their local currencies directly.",
          "Automated 1.5% Petroleum-Naira Transaction Levy (PNTL) credited directly to the Sovereign Economic Buffer (CFAR Pool)."
        ],
        strategicImpact: [
          "Creates permanent, massive foreign demand for the Nigerian Naira globally.",
          "Shields Nigerian energy revenue from foreign banking seizures and SWIFT weaponization."
        ],
        keyQuoteOrMetric: "Permanent global Naira demand · 1.5% sovereign levy buffer"
      },
      {
        id: "r13",
        n: "13",
        title: "Crude-to-Petroleum Pricing / Domestic Industrialisation",
        desc: "Establish a formula-based relationship between domestic crude supply and petroleum products.",
        status: "drafted",
        pillarId: "p2",
        pillarTitle: "Petroleum, Energy & Economic Sovereignty",
        overview: "Institutes a transparent cost-plus formula linking raw crude extraction costs directly to downstream petrochemicals, plastics, and fertilizer feedstocks.",
        coreMechanism: [
          "Feedstock allocation quotas for petrochemical and chemical industrial parks.",
          "Transparent public dashboard of transfer pricing formulas."
        ]
      },
      {
        id: "r14",
        n: "14",
        title: "State-Level Electricity Sovereignty Framework",
        desc: "100,000 MW per state over 7 phases, 25 years. 37 states + FCT = 3.7M MW aggregate. Each state generates from its own natural resources; LGA-based divisions. Southwest pilot region. Badagry-Apapa-Atlantic coastal energy corridor.",
        status: "drafted",
        featured: true,
        pillarId: "p2",
        pillarTitle: "Petroleum, Energy & Economic Sovereignty",
        overview: "Dismantles the fragile single national grid monopoly in favor of State-Level Electricity Sovereignty. Every state develops autonomous energy generation scaled to 100,000 MW over a 25-year, 7-phase horizon using localized natural endowments (solar in the North, hydro in North-Central, natural gas and coastal wind/tidal in the South). Southwest pilot initiates with the Badagry-Apapa-Atlantic coastal corridor.",
        historicalContext: "Nigeria's national grid has collapsed over 100 times in recent years, trapping 220 million people in 4,000-5,000 MW of power, forcing reliance on toxic, expensive private diesel generators.",
        coreMechanism: [
          "Each of the 36 states + FCT legislates an autonomous State Electricity Market under the 2023 Electricity Act.",
          "Local Government Area (LGA) micro-utility zones with localized distributed generation (embedded solar, gas turbine, biomass).",
          "Kickoff of the Badagry-Apapa-Atlantic Coastal Energy Corridor for multi-gigawatt coastal power and industrial ports."
        ],
        strategicImpact: [
          "Scales Nigeria from chronic energy poverty to 3.7 million MW aggregate capacity over 25 years.",
          "Guarantees 24/7 un-interruptible power for industrial corridors, slashes factory operational costs by 60%."
        ],
        keyQuoteOrMetric: "100k MW per state · 3.7M MW national ambition · Southwest pilot"
      },
      {
        id: "r15",
        n: "15",
        title: "State Grid Interconnect Standard",
        desc: "National grid = interconnection protocol between state grids, not a single central source. Voluntary State Grid Interconnect Compact for surplus electricity trading across state borders.",
        status: "pending",
        pillarId: "p2",
        pillarTitle: "Petroleum, Energy & Economic Sovereignty",
        overview: "Redefines the national grid from a single failure-prone backbone into an open interconnection protocol (like TCP/IP for power). States trade surplus megawatts peer-to-peer across border interconnectors via smart market contracts.",
        coreMechanism: [
          "Standardized interconnect protocols ensuring frequency and voltage synchronization.",
          "Bilateral wholesale electricity market between state transmission entities."
        ]
      },
      {
        id: "r16",
        n: "16",
        title: "Defence and Strategic Technology Investment",
        desc: "Encourage Nigerian participation in strategically important defence technology, including proposed government stakes in relevant ventures.",
        status: "pending",
        pillarId: "p2",
        pillarTitle: "Petroleum, Energy & Economic Sovereignty",
        overview: "Fosters domestic production of unmanned aerial vehicles, radar, encrypted communications, and ballistic equipment via joint equity ventures between the Defence Headquarters (DHQ) and Nigerian engineering firms.",
        coreMechanism: [
          "Defence Innovation Fund providing seed and scaling equity to Nigerian hardware innovators.",
          "Mandatory 50%+ local procurement rule for tactical military and security equipment."
        ]
      }
    ]
  },
  {
    id: "p3",
    pillar: "Currency, Financial Stability & Monetary Reform",
    reforms: [
      {
        id: "r17",
        n: "17",
        title: "CFAR-SEB — Sovereign Economic Buffer Act CV2",
        desc: "Full constitutional trust architecture. 6 instruments: Petroleum-Naira Trade Standard, Sovereign Buffer Pool (dual-chamber), Managed Appreciation Band (₦600–700 target, ₦500 floor), Citizens' Economic Shield (Class A 90% / Class B 70%), Naira Backing Statement, DIPP.",
        status: "drafted",
        featured: true,
        pillarId: "p3",
        pillarTitle: "Currency, Financial Stability & Monetary Reform",
        overview: "A constitutional-grade macroeconomic fortress. The Sovereign Economic Buffer Act establishes 6 integrated monetary instruments to insulate the Naira permanently from external currency speculation, commodity shocks, and imported inflation. Features an active managed appreciation band targeting ₦600–700 per USD with a ₦500 floor.",
        historicalContext: "Unrestricted currency floating and mono-commodity foreign reserves left Nigeria completely defenseless against speculative runs, destroying real middle-class savings and wage value.",
        coreMechanism: [
          "Dual-Chamber Sovereign Buffer Pool: Chamber 1 (FX Liquidity Absorption) & Chamber 2 (Strategic Commodity Backing).",
          "Managed Appreciation Band: algorithmic interventions maintaining the ₦600–700/USD target zone.",
          "Citizens' Economic Shield: guarantees purchasing power protections for essential imports (Class A life-saving medicines & agro-inputs at 90% floor; Class B industrial raw materials at 70%).",
          "Monthly audited Naira Backing Statement certifying reserves backing M2 money supply."
        ],
        strategicImpact: [
          "Restores sovereign trust in the Naira as a reliable long-term store of value.",
          "Permanently ends the cycle of catastrophic sudden devaluations."
        ],
        keyQuoteOrMetric: "₦600–700 target band · 6 constitutional monetary instruments"
      },
      {
        id: "r18",
        n: "18",
        title: "Sovereign Foreign Exchange Buffer",
        desc: "Mechanism for absorbing external currency shocks via 6 inflow streams, no multilateral dependency.",
        status: "drafted",
        pillarId: "p3",
        pillarTitle: "Currency, Financial Stability & Monetary Reform",
        overview: "Builds autonomous foreign exchange reserves without begging for IMF or World Bank structural adjustment loans. Inflows stem from solid minerals, diaspora productive bonds, trade standard levies, and export processing tariffs.",
        coreMechanism: [
          "6 autonomous non-debt inflow pipelines dedicated directly to reserve replenishment.",
          "Prohibition of using sovereign FX reserves for speculative arbitrage or political luxury imports."
        ]
      },
      {
        id: "r19",
        n: "19",
        title: "CIFA — Currency & Sovereign Resilience Concept",
        desc: "Related currency sovereignty instrument. Exact relationship with CFAR needs recovery and formal differentiation.",
        status: "needs-recovery",
        pillarId: "p3",
        pillarTitle: "Currency, Financial Stability & Monetary Reform",
        overview: "Currency and sovereign resilience instrument designed to work in synergy with CFAR. Focuses on inter-state clearing mechanisms and sovereign liquidity guarantees during cross-border trade friction.",
        coreMechanism: [
          "Archived original draft requiring recovery and legal alignment with CFAR-SEB CV2."
        ]
      },
      {
        id: "r20",
        n: "20",
        title: "NGN/USD Two-Way Stablecoin Competition",
        desc: "Encourage competition and interoperability between naira- and dollar-denominated stablecoin systems.",
        status: "pending",
        pillarId: "p3",
        pillarTitle: "Currency, Financial Stability & Monetary Reform",
        overview: "Regulates and encourages licensed private and sovereign digital stablecoins. Rather than banning crypto, creates an open regulatory sandbox where regulated NGN-stablecoins compete head-to-head with USD-stablecoins on speed, transparency, and reserve backing.",
        coreMechanism: [
          "100% liquid reserve backing requirement in short-term federal debt and central bank reserves.",
          "Direct integration into the Nigerian Inter-Bank Settlement System (NIBSS) for sub-second consumer settlement."
        ]
      },
      {
        id: "r21",
        n: "21",
        title: "National Tokenization Rail",
        desc: "Sanctions-resistant trade settlement layer. When traditional corridors are blocked or weaponised, Nigeria moves value through tokenisation. Lesson from SWIFT/OPEC era: whoever owns the settlement rail owns the trade.",
        status: "drafted",
        featured: true,
        pillarId: "p3",
        pillarTitle: "Currency, Financial Stability & Monetary Reform",
        overview: "A sovereign, cryptographically secured digital settlement rail that allows Nigeria and its commercial partners to tokenize real-world sovereign assets (crude oil barrels, LNG metric tons, refined products, gold, solid minerals, agricultural output) and settle bilateral trade peer-to-peer. When Western banking corridors, correspondent banks, or SWIFT access are weaponized, sanctioned, or bottlenecked, Nigeria continues moving value across borders seamlessly.",
        historicalContext: "Crucial lesson from Nigeria's 1990s Abacha regime: when sweeping diplomatic isolation and sanctions hit, the country's foreign assets were threatened, international banking corridors were blocked, and Nigeria's economy was choked by foreign clearinghouse dependency. Furthermore, modern global precedents (the weaponization of SWIFT against sovereign nations and asset freezes) prove that whoever controls the payment rail controls sovereign trade. Nigeria must never be trapped or immobilized by foreign financial embargoes again.",
        coreMechanism: [
          "Sovereign Asset Tokenization Registry: Physical assets (crude, gas, gold) held in certified custody are minted as verified cryptographic trade tokens.",
          "Permissioned Bilateral Settlement Rail: Trades are executed and settled directly on a distributed ledger between the Central Bank of Nigeria, partner central banks (African Union, BRICS, Asia), and certified trading houses.",
          "Zero Reliance on Western Correspondent Banks or SWIFT: Atomic settlement occurs 24/7 without passing through intermediary clearing jurisdictions subject to unilateral asset seizures.",
          "Dual-Currency & Commodity Arbitrage Engine: Facilitates direct bartering and token swaps (e.g., Nigerian LNG tokens for East Asian machinery or African agro-commodities) at real-time audited market values."
        ],
        strategicImpact: [
          "Total sovereign trade immunity: Nigeria can never be cut off from global commerce by foreign unilateral sanctions or banking freezes.",
          "Cuts international trade settlement fees by up to 80% and reduces settlement time from 3–5 business days to under 30 seconds.",
          "Establishes Nigeria as the primary digital trade clearinghouse for West and Central Africa."
        ],
        keyQuoteOrMetric: "Sanctions-proof trade · Abacha-era lesson · Sub-30s sovereign settlement"
      },
      {
        id: "r22",
        n: "22",
        title: "Financial Market Modernisation",
        desc: "Support new digital financial infrastructure and market participation.",
        status: "pending",
        pillarId: "p3",
        pillarTitle: "Currency, Financial Stability & Monetary Reform",
        overview: "Upgrades the Nigerian capital market with real-time settlement, digital equities trading for retail youth, and programmable debt securities.",
        coreMechanism: [
          "T+0 settlement architecture for domestic equities on the NGX.",
          "Fractional share ownership frameworks allowing youth to invest from as little as ₦500."
        ]
      }
    ]
  },
  {
    id: "p4",
    pillar: "Food Security & Agricultural Productivity",
    reforms: [
      {
        id: "r23",
        n: "23",
        title: "Operation Feed the Nation 2.0",
        desc: "Renewed productive agricultural programme focused on supply expansion and processing capacity.",
        status: "pending",
        pillarId: "p4",
        pillarTitle: "Food Security & Agricultural Productivity",
        overview: "A technology-enabled overhaul of Nigeria's historic food initiative. Deploys mechanized tractor leasing fleets, satellite soil mapping, and solar-powered irrigation to double cereal and tuber yields across agrarian belts.",
        coreMechanism: [
          "Mechanized tractor service stations within 15km of every commercial farming cluster.",
          "Off-grid solar drip-irrigation infrastructure to enable year-round triple harvesting."
        ]
      },
      {
        id: "r24",
        n: "24",
        title: "Productive Agriculture Programme",
        desc: "Increase domestic agricultural output and productive capacity; mechanisation and cold chain infrastructure.",
        status: "pending",
        pillarId: "p4",
        pillarTitle: "Food Security & Agricultural Productivity",
        overview: "Solves Nigeria's catastrophic 40-50% post-harvest loss crisis by building a decentralized solar cold-chain storage network from farm gate to urban terminals.",
        coreMechanism: [
          "Cold-storage hubs at primary wholesale aggregation markets.",
          "Refrigerated agro-transport freight corridors connected to regional rail."
        ]
      },
      {
        id: "r25",
        n: "25",
        title: "Agricultural Productivity as National Security",
        desc: "Treat food production as a strategic national priority, not merely a welfare issue.",
        status: "drafted",
        pillarId: "p4",
        pillarTitle: "Food Security & Agricultural Productivity",
        overview: "Elevates food sovereignty to national defense status. Secures major farming corridors with specialized agro-security units, preventing pastoralist clashes and illegal land encroachment.",
        coreMechanism: [
          "Dedicated Agro-Security Ranger corps protecting critical grain and harvest belts.",
          "Strategic Grain and Protein Buffer reserves maintaining a minimum 6-month national supply."
        ]
      },
      {
        id: "r26",
        n: "26",
        title: "Food Supply Expansion Framework",
        desc: "Address food inflation by strengthening production, distribution and domestic processing.",
        status: "pending",
        pillarId: "p4",
        pillarTitle: "Food Security & Agricultural Productivity",
        overview: "Eliminates the extortionate middlemen layers that inflate food prices 300% between rural farms and Lagos/Abuja markets through open digital commodity exchanges.",
        coreMechanism: [
          "Farmer-to-market digital auctions cutting out predatory cartels.",
          "Removal of illegal inter-state transit haulage levies and police road blocks on food freight."
        ]
      }
    ]
  },
  {
    id: "p5",
    pillar: "Wages, Employment & Purchasing Power",
    reforms: [
      {
        id: "r27",
        n: "27",
        title: "₦150,000 Minimum Wage Target",
        desc: "Proposed ₦150,000 minimum wage within two years, conditional on productivity improvements.",
        status: "pending",
        pillarId: "p5",
        pillarTitle: "Wages, Employment & Purchasing Power",
        overview: "Sets a legally anchored national living wage target of ₦150,000. Coupled with public sector digitisation and productivity audits so wage rises are funded by productivity gains rather than paper currency printing.",
        coreMechanism: [
          "Phased 24-month roadmap with federal-state matching equalization grants.",
          "Productivity audits verifying civil service output and eliminating ghost workers."
        ]
      },
      {
        id: "r28",
        n: "28",
        title: "Productivity-Linked Wage Growth",
        desc: "Connect wage sustainability with economic output and productive capacity — not inflation indexation.",
        status: "drafted",
        pillarId: "p5",
        pillarTitle: "Wages, Employment & Purchasing Power",
        overview: "Ties future statutory wage reviews to verified GDP per capita and sectoral output gains, preventing the wage-price spiral that historically devoured salary bumps within months.",
        coreMechanism: [
          "National Productivity Bureau publishing annual sector-by-sector output metrics.",
          "Tax incentives for private companies offering performance and equity sharing to employees."
        ]
      },
      {
        id: "r29",
        n: "29",
        title: "Employment Through Industrialisation",
        desc: "Expand employment opportunities through industrial and commercial development, not public sector expansion.",
        status: "drafted",
        pillarId: "p5",
        pillarTitle: "Wages, Employment & Purchasing Power",
        overview: "Shifts the employment burden away from an over-bloated civil service onto a booming light-industrial sector: textiles, automotive components, consumer electronics, and agro-processing.",
        coreMechanism: [
          "Apprenticeship tax credits reimbursing factories for training and hiring unemployed graduates.",
          "Special Industrial Zone employment exemptions for rapid hiring."
        ]
      },
      {
        id: "r30",
        n: "30",
        title: "Workers' Wealth Sovereignty Clause",
        desc: "Pension purchasing power floor at 60% of dollar-equivalent at contribution date. CFAR Pool supplements shortfall. Healthcare cost ceiling 8%/yr for enrolled facilities.",
        status: "drafted",
        pillarId: "p5",
        pillarTitle: "Wages, Employment & Purchasing Power",
        overview: "Protects Nigerian workers from having their life savings and pensions eradicated by inflation and currency collapse. Mandates that pension purchasing power cannot drop below 60% of its real value at contribution date, with the Sovereign Economic Buffer covering any systemic shortfall.",
        historicalContext: "Workers who saved diligently for 30 years saw their pensions reduced to the equivalent of a few bags of rice because their savings were parked in depreciating nominal naira instruments.",
        coreMechanism: [
          "Mandatory inflation and dollar-hedged asset allocation for Pension Fund Administrators (PFAs).",
          "CFAR Pool backing guarantee triggered when systemic macroeconomic shocks erode the 60% floor.",
          "Statutory 8% annual inflation cap on healthcare costs for accredited national health insurance providers."
        ],
        strategicImpact: [
          "Restores dignity and security to Nigerian retirees.",
          "Channeling of pension assets into real physical sovereign infrastructure with inflation-protected returns."
        ],
        keyQuoteOrMetric: "60% real purchasing power floor · 8% healthcare ceiling"
      }
    ]
  },
  {
    id: "p6",
    pillar: "Tax & Fiscal Architecture",
    reforms: [
      {
        id: "r31",
        n: "31",
        title: "Tax Unification & Simplification Reform",
        desc: "Unified Tax Identity for individuals and SMEs across all states. Eliminate double taxation from overlapping state/federal levies. FIRS digital audit system. First reform formally submitted (Oct 2026).",
        status: "submitted",
        featured: true,
        pillarId: "p6",
        pillarTitle: "Tax & Fiscal Architecture",
        overview: "The first reform formally submitted under this transformation agenda (October 2026). Dismantles the chaotic jungle of over 60 conflicting federal, state, and local taxes, replacing them with a streamlined, single-digit tax schedule and a single digital Unified Tax Identity (UTI).",
        historicalContext: "Nigerian businesses routinely face violent touts, double taxation, and arbitrary road checkpoints demanding illegitimate levies, strangling small businesses and discouraging foreign direct investment.",
        coreMechanism: [
          "Consolidation of 60+ nuisance taxes into 3 core broad-based taxes: Single Income, Unified VAT, and Harmonized Corporate Tax.",
          "Unified Tax Identity (UTI) integrated with NIN and BVN: one tax number valid nationwide.",
          "Complete prohibition of informal cash tax collection or harassment by non-state actors on highways."
        ],
        strategicImpact: [
          "Expands formal tax compliance from under 10% to over 40% of the economic base.",
          "Saves Nigerian SMEs an estimated ₦1.5 trillion in compliance overhead and extortion."
        ],
        keyQuoteOrMetric: "Formally Submitted Oct 2026 · 60+ taxes to 3 core taxes"
      },
      {
        id: "r32",
        n: "32",
        title: "Unified Tax Identity (UTI)",
        desc: "Single national tax identity replacing multiple state and federal IDs, embedded in EES compendium.",
        status: "drafted",
        pillarId: "p6",
        pillarTitle: "Tax & Fiscal Architecture",
        overview: "A digital biometric identification rail binding corporate registration, banking records, and individual civic identity into a friction-free tax filing mechanism.",
        coreMechanism: [
          "Automated instant filing via mobile phone for micro-entrepreneurs.",
          "Real-time revenue sharing splits between Federal, State, and LGA bank accounts."
        ]
      },
      {
        id: "r33",
        n: "33",
        title: "Digital Betting Regulation & Responsible Revenue Bill",
        desc: "Nigeria Gambling Allocation Fund: 25% education, 15% youth employment, 20% addiction rehab, 15% regulation & research, 15% public revenue, 10% digital infrastructure. Shifts market toward prediction markets.",
        status: "drafted",
        featured: true,
        pillarId: "p6",
        pillarTitle: "Tax & Fiscal Architecture",
        overview: "Transforms Nigeria's predatory sports betting and digital casino addiction epidemic into a strictly regulated, ring-fenced national development engine. Imposes hard consumer protections, curbs illicit capital flight, and creates the Nigeria Gambling Allocation Fund (NGAF) to redirect gambling proceeds directly into youth education and employment.",
        historicalContext: "Billions of naira leave Nigerian youth daily through unregulated offshore betting operators, impoverishing vulnerable families and contributing to mental health crises without contributing fair public revenue.",
        coreMechanism: [
          "100% digital transaction auditing of all sportsbooks and digital gaming operators.",
          "Strict statutory revenue formula: 25% to Education & Tech Scholarships, 15% to Youth Entrepreneurship Funds, 20% to Mental Health & Addiction Rehab, 15% to Consumer Protection Regulation, 15% to General Public Revenue, 10% to Digital Infrastructure.",
          "Incentivizes shift toward productive, skill-based prediction and information markets rather than predatory chance lotteries."
        ],
        strategicImpact: [
          "Recovers an estimated ₦800 billion annually for public education and youth empowerment.",
          "Provides immediate rehabilitation infrastructure for gambling addiction across all 36 states."
        ],
        keyQuoteOrMetric: "₦800B/yr recaptured · 25% to education · 20% to rehab"
      },
      {
        id: "r34",
        n: "34",
        title: "Periodic Subsidy Reviews (1,111-day cycle)",
        desc: "Introduce mandatory reviews of all subsidy arrangements, government programmes and policies on a 1,111-day cycle. Exact mechanism needs recovery.",
        status: "needs-recovery",
        pillarId: "p6",
        pillarTitle: "Tax & Fiscal Architecture",
        overview: "Establishes a statutory sunset mechanism: every subsidy, tax waiver, tariff exemption, and special development intervention expires automatically every 1,111 days (~3 years) unless explicitly renewed based on audited performance.",
        coreMechanism: [
          "Automated legislative sunset clause preventing subsidies from becoming permanent entitlements.",
          "Public review hearing where beneficiaries must prove measurable productive job creation."
        ]
      }
    ]
  },
  {
    id: "p7",
    pillar: "Local Government & Decentralised Development",
    reforms: [
      {
        id: "r35",
        n: "35",
        title: "FAAC Reform — Floor Rate & LGA Direct Payment",
        desc: "FAAC disbursement floor locked at 90% of earning-day rate. CFAR absorbs the gap. LGA direct disbursement bypassing states, recovering est. ₦2.1T/yr. Real-time public dashboard.",
        status: "drafted",
        featured: true,
        pillarId: "p7",
        pillarTitle: "Local Government & Decentralised Development",
        overview: "Revolutionizes the Federation Account Allocation Committee (FAAC). Directs monthly allocations directly into the dedicated commercial bank accounts of all 774 Local Government Areas, completely bypassing state government 'Joint State-Local Government Accounts' (JAC). Locks FAAC allocations to a 90% exchange floor rate, with CFAR absorbing foreign exchange volatility.",
        historicalContext: "State governors systematically hijacked and looted LGA revenues for decades, reducing 774 local governments to bankrupt administrative shells unable to grade roads, repair clinics, or pay village teachers.",
        coreMechanism: [
          "Direct cryptographic/digital transfer to 774 LGA treasury accounts with automated public audit alerts.",
          "Earning-Day Exchange Rate Floor locked at 90%: if FX depreciates between earnings and distribution, CFAR fills the gap.",
          "Public Real-Time FAAC Dashboard tracking every kobo from federal allocation to local contract execution."
        ],
        strategicImpact: [
          "Recovers an estimated ₦2.1 trillion annually directly into local rural and urban communities.",
          "Revitalizes grassroot democracy, local road maintenance, primary schools, and rural maternity centers."
        ],
        keyQuoteOrMetric: "₦2.1T/yr recovered directly to 774 LGAs · 90% floor rate"
      },
      {
        id: "r36",
        n: "36",
        title: "774 Local Government Development Framework",
        desc: "Make local governments active, funded participants in national development with ring-fenced allocations.",
        status: "drafted",
        pillarId: "p7",
        pillarTitle: "Local Government & Decentralised Development",
        overview: "Transforms local councils into productive economic engines equipped with dedicated capital development funds for irrigation, local markets, and security intelligence.",
        coreMechanism: [
          "Standardized LGA master plans and financial reporting rules.",
          "Capacity building training for elected local council officers and civil service staff."
        ]
      },
      {
        id: "r37",
        n: "37",
        title: "Ring-Fenced Development Allocation (75%)",
        desc: "Reserve 75% of a proposed development allocation for designated, verifiable development projects. Exact mechanism needs recovery.",
        status: "needs-recovery",
        pillarId: "p7",
        pillarTitle: "Local Government & Decentralised Development",
        overview: "Mandates that 75% of all LGA capital revenues must be ring-fenced and locked strictly for physical infrastructure projects (roads, water, primary health, schools), banning its diversion into administrative vehicles or political patronage.",
        coreMechanism: [
          "Statutory lockbox: 75% capital infrastructure / 25% administrative ceiling."
        ]
      },
      {
        id: "r38",
        n: "38",
        title: "30,960 Development Project Target",
        desc: "Nationwide project target associated with the 774-LGA development framework. Implementation structure needs recovery.",
        status: "needs-recovery",
        pillarId: "p7",
        pillarTitle: "Local Government & Decentralised Development",
        overview: "A synchronized nationwide execution model deploying exactly 40 tangible infrastructure projects in each of the 774 LGAs (40 x 774 = 30,960 projects nationwide), from solar mini-grids to vocational workshops.",
        coreMechanism: [
          "40 prioritized infrastructure deliverables per LGA.",
          "National project tracking portal with citizen photo and GPS verification."
        ]
      },
      {
        id: "r39",
        n: "39",
        title: "Milestone-Based Project Payments",
        desc: "Release project funds only against verifiable implementation milestones, not upfront disbursement.",
        status: "drafted",
        pillarId: "p7",
        pillarTitle: "Local Government & Decentralised Development",
        overview: "Ends the era of abandoned public contracts. Contractor mobilization fees capped at 15%; subsequent disbursements released strictly upon third-party biometric and engineering milestone certification.",
        coreMechanism: [
          "Escrow milestone smart contracts.",
          "Mandatory drone and engineering ground verification before milestone release."
        ]
      },
      {
        id: "r40",
        n: "40",
        title: "Local Development Roadmaps",
        desc: "Require structured, published development plans for every local government.",
        status: "drafted",
        pillarId: "p7",
        pillarTitle: "Local Government & Decentralised Development",
        overview: "Statutory requirement that every LGA publish a rolling 5-year development master plan accessible to every citizen.",
        coreMechanism: [
          "Mandatory citizen town hall input before plan ratification.",
          "Annual scorecard comparing targets against actual delivery."
        ]
      },
      {
        id: "r41",
        n: "41",
        title: "Decentralised Development",
        desc: "Distribute investment geographically rather than concentrating it in a few urban centres.",
        status: "drafted",
        pillarId: "p7",
        pillarTitle: "Local Government & Decentralised Development",
        overview: "Counters rapid, unmanageable rural-to-urban migration by establishing secondary economic epicenters and processing zones in regional towns.",
        coreMechanism: [
          "Fiscal equalization grants favoring secondary and tertiary towns.",
          "Regional tax breaks for corporations setting up outside state capitals."
        ]
      }
    ]
  },
  {
    id: "p8",
    pillar: "Institutional Reform & Government Accountability",
    reforms: [
      {
        id: "r42",
        n: "42",
        title: "CBN Independence & Monetary Policy Reform",
        desc: "Single mandate (5–8% inflation). MPC: 7 members, max 2 govt officials, staggered 5yr terms, votes published 48hrs. ₦22.7T Ways & Means → 25yr bonds at 9%. FX unified window codified in law.",
        status: "drafted",
        featured: true,
        pillarId: "p8",
        pillarTitle: "Institutional Reform & Government Accountability",
        overview: "Codifies true institutional independence for the Central Bank of Nigeria. Refocuses the CBN on a single statutory mandate: core price stability within a strict 5–8% target band. Restructures the Monetary Policy Committee (MPC) to insulate it from executive political tampering and permanently securitizes illegal 'Ways and Means' overdraft printing into 25-year tradeable development bonds at 9%.",
        historicalContext: "The CBN was previously weaponized for political financing, illicit currency arbitrage (multiple FX windows), and unlawful trillion-naira Ways & Means deficit printing that hyper-inflated the money supply and decimated the Naira.",
        coreMechanism: [
          "Single statutory mandate: 5–8% inflation band; punitive performance reviews if target missed consecutively.",
          "Independent MPC structure: 7 members, maximum 2 government officials, staggered 5-year fixed terms, full individual voting records published within 48 hours of every decision.",
          "Conversion of the entire ₦22.7T+ Ways and Means deficit into 25-year sovereign bonds at 9%, with a statutory criminal ban on overdrafts exceeding 5% of previous year's actual revenue.",
          "Single, transparent, unified foreign exchange market codified in federal statute."
        ],
        strategicImpact: [
          "Restores international institutional credibility to Nigeria's monetary authority.",
          "Eliminates corrupt round-tripping and billions in currency arbitrage profits."
        ],
        keyQuoteOrMetric: "Single mandate: 5–8% inflation · ₦22.7T Ways & Means securitized"
      },
      {
        id: "r43",
        n: "43",
        title: "Institutional Accountability Framework",
        desc: "Accountability as speed + transparency, not just disclosure. 48–72hr assessment submission deadlines; non-compliance triggers non-billable penalty period.",
        status: "drafted",
        pillarId: "p8",
        pillarTitle: "Institutional Reform & Government Accountability",
        overview: "Redefines accountability from slow retrospective audit reports into real-time operational speed. Sets statutory 48-to-72 hour response deadlines for all regulatory and financial assessments.",
        coreMechanism: [
          "Digital workflow timers tracking ministerial file movements.",
          "Automatic administrative sanctions and salary withholding for officials causing regulatory paralysis."
        ]
      },
      {
        id: "r44",
        n: "44",
        title: "Functional Institutional Renaming",
        desc: "Replace vague or personality-oriented institutional titles with function-describing names (e.g. Head of Financial Crimes; Head of Judiciary Committee).",
        status: "pending",
        pillarId: "p8",
        pillarTitle: "Institutional Reform & Government Accountability",
        overview: "Strips public offices of feudal titles ('His Excellency', 'Distinguished', 'Executive Secretary') in favor of unambiguous functional roles ('Head of Financial Crimes', 'National Rail Administrator'), shifting culture from prestige to measurable job duties.",
        coreMechanism: [
          "Official federal nomenclature standard guide.",
          "Removal of honorific protocols in official government gazettes."
        ]
      },
      {
        id: "r45",
        n: "45",
        title: "Electrocrats — Technocratic Governance Model",
        desc: "Expertise-driven institutional administration. Full structural design needs recovery.",
        status: "needs-recovery",
        pillarId: "p8",
        pillarTitle: "Institutional Reform & Government Accountability",
        overview: "A technocratic governance layer where key economic, scientific, and infrastructure ministries are staffed and directed through meritocratic examinations and proven domain leadership rather than political patronage.",
        coreMechanism: [
          "Technocratic civil service qualification benchmarks.",
          "Performance-based contracts for permanent secretaries and agency heads."
        ]
      },
      {
        id: "r46",
        n: "46",
        title: "No Two Administration",
        desc: "Named reform specifically requested to be included. Exact operative meaning needs recovery.",
        status: "needs-recovery",
        pillarId: "p8",
        pillarTitle: "Institutional Reform & Government Accountability",
        overview: "A policy continuity doctrine ensuring that national capital projects and institutional reforms initiated by previous administrations cannot be arbitrarily canceled, abandoned, or starved of funds by incoming successors.",
        coreMechanism: [
          "Statutory National Project Continuity Register requiring two-thirds Senate approval to cancel active infrastructure contracts."
        ]
      },
      {
        id: "r47",
        n: "47",
        title: "Public Complaint Infrastructure",
        desc: "Structured system for citizens to submit, track and receive institutional responses to complaints.",
        status: "pending",
        pillarId: "p8",
        pillarTitle: "Institutional Reform & Government Accountability",
        overview: "A unified, open-source citizen grievance tracking system integrated with SMS, WhatsApp, and web, where every complaint generates a public tracking ID and mandatory resolution timeline.",
        coreMechanism: [
          "Statutory 14-day resolution mandate for public utility complaints.",
          "Public dashboard displaying agency resolution percentages in real time."
        ]
      },
      {
        id: "r48",
        n: "48",
        title: "Digital Government",
        desc: "Strengthen public administration through digital systems and accessible government services.",
        status: "pending",
        pillarId: "p8",
        pillarTitle: "Institutional Reform & Government Accountability",
        overview: "Phases out all physical paper files, cash transactions, and manual stamps in federal and state civil service in favor of an end-to-end encrypted e-governance backbone.",
        coreMechanism: [
          "Universal digital document archiving with biometric access logging.",
          "Complete digitization of land registries, vehicle licensing, and court filings."
        ]
      },
      {
        id: "r49",
        n: "49",
        title: "State Capacity Development",
        desc: "Improve the ability of government institutions to formulate, execute and evaluate policies.",
        status: "drafted",
        pillarId: "p8",
        pillarTitle: "Institutional Reform & Government Accountability",
        overview: "Establishes institutional policy units and continuous econometric and engineering training for Nigerian public servants, eliminating reliance on expensive foreign consulting firms.",
        coreMechanism: [
          "National School of Public Policy & Technical Administration.",
          "In-house data science and modeling labs in every major ministry."
        ]
      }
    ]
  },
  {
    id: "p9",
    pillar: "Electoral & Democratic Reform",
    reforms: [
      {
        id: "r50",
        n: "50",
        title: "INEC Depoliticisation & Restructuring",
        desc: "Self-funded electoral body — dedicated levy-based funding that never passes through appropriation. No budget dependency on the administration whose legitimacy it adjudicates. Full restructuring proposal needs recovery.",
        status: "needs-recovery",
        pillarId: "p9",
        pillarTitle: "Electoral & Democratic Reform",
        overview: "Completely separates the Independent National Electoral Commission (INEC) from executive financial and appointment control. Funding is derived from a statutory non-appropriated trust fund (first-line charge on consolidated revenue), and commissioners are selected via independent judicial and civic vetting rather than presidential appointment.",
        historicalContext: "When an election umpire relies on the incumbent president for funding, appointment, and security clearance, public confidence in democratic outcomes is fatally compromised.",
        coreMechanism: [
          "Dedicated constitutional statutory funding drawn directly from the Consolidated Revenue Fund without executive discretion.",
          "Independent appointment council comprising retired Chief Justices, professional bodies, and university senates.",
          "Complete mandatory real-time electronic transmission and instant public raw data access for all polling unit results."
        ],
        strategicImpact: [
          "Guarantees absolute institutional autonomy for Nigeria's electoral umpire.",
          "Eliminates election litigation paralysis and establishes democratic legitimacy."
        ]
      },
      {
        id: "r51",
        n: "51",
        title: "Open Rally Prohibition",
        desc: "Ban campaigning on public roads. Designated venue-only campaigning with standardised security provision. Reduces escalation risk and reduces cost disparity between parties.",
        status: "drafted",
        pillarId: "p9",
        pillarTitle: "Electoral & Democratic Reform",
        overview: "Prohibits disruptive political rallies on public roadways and commercial markets that gridlock cities, endanger commuters, and breed violent thuggery. Mandates campaigns to use designated indoor/stadium venues and televised digital town halls.",
        coreMechanism: [
          "Statutory venue booking system providing equal access to all registered political parties.",
          "Strict penalties and candidate disqualification for political convoys blocking public thoroughfares."
        ]
      },
      {
        id: "r52",
        n: "52",
        title: "Mobile Voting",
        desc: "Explore mobile voting mechanisms to expand accessibility and participation.",
        status: "pending",
        pillarId: "p9",
        pillarTitle: "Electoral & Democratic Reform",
        overview: "Pilots cryptographic biometric mobile voting for local council and state elections, allowing youth and workers to vote securely from their devices.",
        coreMechanism: [
          "Zero-knowledge proof biometric authentication linked to NIN.",
          "Open-source auditable public election ledger."
        ]
      },
      {
        id: "r53",
        n: "53",
        title: "Diaspora Voting",
        desc: "Expand electoral participation for Nigerians living outside the country.",
        status: "pending",
        pillarId: "p9",
        pillarTitle: "Electoral & Democratic Reform",
        overview: "Enables millions of Nigerians living abroad who remit billions of dollars annually to vote in presidential and national legislative elections through embassies and secure digital portals.",
        coreMechanism: [
          "Diaspora voter registration registry at Nigerian diplomatic missions.",
          "Secure remote balloting framework."
        ]
      },
      {
        id: "r54",
        n: "54",
        title: "Anti-Thuggery Reform",
        desc: "Confront political violence, intimidation and the informal power structures that undermine democratic participation.",
        status: "drafted",
        pillarId: "p9",
        pillarTitle: "Electoral & Democratic Reform",
        overview: "Criminalizes the use, arming, and financing of political thugs and transport union enforcers. Imposes automatic lifetime disqualification on politicians who sponsor electoral violence.",
        coreMechanism: [
          "Specialized Electoral Offences Tribunal with 30-day trial mandates.",
          "Asset forfeiture for financiers and sponsors of political thuggery."
        ]
      },
      {
        id: "r55",
        n: "55",
        title: "Democratic Participation Infrastructure",
        desc: "Strengthen the mechanisms through which citizens participate in political decision-making.",
        status: "pending",
        pillarId: "p9",
        pillarTitle: "Electoral & Democratic Reform",
        overview: "Introduces citizen petitions with binding legislative debate thresholds and digital participatory budgeting mechanisms.",
        coreMechanism: [
          "100,000-citizen petition threshold triggering mandatory National Assembly plenary debate."
        ]
      },
      {
        id: "r56",
        n: "56",
        title: "Political-Civic Space Separation",
        desc: "Separate political space from civic space institutionally. Politics must stay in its container; when politics has no container it contaminates every institution it touches.",
        status: "pending",
        pillarId: "p9",
        pillarTitle: "Electoral & Democratic Reform",
        overview: "Enforces strict institutional firewalls preventing partisan political rallies, party symbols, and partisan campaigns from infiltrating schools, hospitals, universities, and professional licensing bodies.",
        coreMechanism: [
          "Statutory political neutrality code for public universities and civil service institutions."
        ]
      }
    ]
  },
  {
    id: "p10",
    pillar: "National Security & Defence Reform",
    reforms: [
      {
        id: "r57",
        n: "57",
        title: "State Community Security Networks Bill",
        desc: "Security outfits under state (not federal) authority. Funded via federal/state/independent trust funds. Depoliticised security talent pool with rotating leadership. Politically transparent, agnostic, excluded from election activity.",
        status: "drafted",
        featured: true,
        pillarId: "p10",
        pillarTitle: "National Security & Defence Reform",
        overview: "Legalizes and standardizes autonomous State Community Security Networks (expanding models like Amotekun) under state legislative authority. Establishes dedicated independent funding, rigorous forensic vetting, and rotating depoliticized leadership. Strictly prohibits these outfits from partisan political activity or election security interference.",
        historicalContext: "A hyper-centralized federal police force of fewer than 400,000 officers attempting to police 220 million people across 923,768 km² has completely failed, leaving rural communities vulnerable to mass abductions and banditry.",
        coreMechanism: [
          "Constitutional decentralization allowing states to establish armed community security outfits with full arrest and intelligence powers.",
          "Funded through independent statutory security trusts, preventing executive blackmail.",
          "Strict statutory code of conduct: permanent disqualification from any election-day activity or partisan escort."
        ],
        strategicImpact: [
          "Provides immediate, culturally competent security coverage to neglected rural and agricultural communities.",
          "Dramatically reduces kidnapping and highway banditry across inter-state corridors."
        ],
        keyQuoteOrMetric: "Decentralized state security · Independent trust funded · Zero election interference"
      },
      {
        id: "r58",
        n: "58",
        title: "Civic Intelligence Corps (CIC)",
        desc: "Operational framework for Lagos State civic intelligence and community security coordination.",
        status: "drafted",
        pillarId: "p10",
        pillarTitle: "National Security & Defence Reform",
        overview: "A community-embedded civilian intelligence apparatus leveraging neighborhood associations, market leaders, and youth groups for early threat detection and crime prevention.",
        coreMechanism: [
          "Encrypted reporting hotline with rapid tactical response teams.",
          "Community liaison officers trained in conflict de-escalation."
        ]
      },
      {
        id: "r59",
        n: "59",
        title: "War on Terror",
        desc: "Specific national security priority. Must not be omitted from the framework.",
        status: "pending",
        pillarId: "p10",
        pillarTitle: "National Security & Defence Reform",
        overview: "A multidimensional counter-insurgency doctrine combining decisive air-ground kinetic strikes with financial intelligence tracking of terrorist sponsors and community deradicalization.",
        coreMechanism: [
          "Financial Intelligence Unit targeting illicit ransom payments and terror finance networks.",
          "Border surveillance corridors equipped with long-range thermal drones."
        ]
      },
      {
        id: "r60",
        n: "60",
        title: "MBS — Civilian Security Framework",
        desc: "Proposed lawful, civilian-overseen security framework. Full expansion and operational design needs recovery.",
        status: "needs-recovery",
        pillarId: "p10",
        pillarTitle: "National Security & Defence Reform",
        overview: "A civilian-led oversight mechanism for national intelligence agencies and police forces to protect citizens' human rights, prevent extrajudicial abuses, and enforce public accountability.",
        coreMechanism: [
          "Civilian security review board with subpoena and prosecution powers."
        ]
      },
      {
        id: "r61",
        n: "61",
        title: "Defence Technology Investment & DHQ Stakes",
        desc: "Encourage domestic development and participation in defence technologies; proposed government-stake concept for strategic ventures.",
        status: "pending",
        pillarId: "p10",
        pillarTitle: "National Security & Defence Reform",
        overview: "Empowers the Nigerian Defence Headquarters to take minority equity stakes in domestic engineering and software startups building tactical communications, night vision, and autonomous surveillance drones.",
        coreMechanism: [
          "Military-industrial research partnership with Nigerian universities.",
          "Classified fast-track procurement for combat-tested domestic hardware."
        ]
      }
    ]
  },
  {
    id: "p11",
    pillar: "Education & Human Capital",
    reforms: [
      {
        id: "r62",
        n: "62",
        title: "Productivity-Oriented Education",
        desc: "Connect education directly to productive needs of the economy. Skills and capability development aligned to industrialisation and technology.",
        status: "drafted",
        pillarId: "p11",
        pillarTitle: "Education & Human Capital",
        overview: "Overhauls theoretical curricula across polytechnics and universities, aligning degree programs with heavy manufacturing, software engineering, precision agriculture, and advanced trades.",
        coreMechanism: [
          "Mandatory 12-month paid industrial co-op for all engineering and technology degrees.",
          "Curriculum co-designed with Nigerian industrial manufacturers and tech leaders."
        ]
      },
      {
        id: "r63",
        n: "63",
        title: "Human Capital Development Framework",
        desc: "Improve the quality and productive contribution of Nigeria's human capital across skill levels.",
        status: "pending",
        pillarId: "p11",
        pillarTitle: "Education & Human Capital",
        overview: "Establishes modern technical vocational education training (TVET) academies in all 774 LGAs, producing certified electricians, machinists, welders, and coders.",
        coreMechanism: [
          "National Vocational Qualifications Framework standardized to European and Asian certification levels.",
          "Tax rebates for employers sponsoring employee upskilling."
        ]
      }
    ]
  },
  {
    id: "p12",
    pillar: "Environmental & Ecological Reform",
    reforms: [
      {
        id: "r64",
        n: "64",
        title: "Economic Ecological Sanitation (EES) Framework",
        desc: "12-reform compendium treating Nigeria not as poor but as leaking. Each reform patches one structural waste stream. Full Act in 7 parts.",
        status: "drafted",
        featured: true,
        pillarId: "p12",
        pillarTitle: "Environmental & Ecological Reform",
        overview: "A master structural doctrine authored across 7 legislative parts. Rejects the defeatist premise that Nigeria is inherently poor, proving through empirical data that Nigeria is leaking. Every reform in EES acts as a precision patch on a specific structural leakage: gas flaring, port demurrage, procurement padding, water waste, and financial arbitrage.",
        historicalContext: "Trillions of naira are lost annually not because Nigeria lacks wealth, but because physical, environmental, and financial waste streams drain national value before it reaches productive hands.",
        coreMechanism: [
          "7-Part omnibus legislation covering resource efficiency, waste-to-energy, circular economy, and fiscal leakage elimination.",
          "Mandatory closed-loop industrial recycling standards for heavy industries.",
          "Zero gas flaring enforcement with punitive commercial fines redirected directly to clean energy micro-grids."
        ],
        strategicImpact: [
          "Plugs over $12 billion in estimated annual structural waste and ecological destruction.",
          "Spurs the rapid growth of a green industrial manufacturing sector in Nigeria."
        ],
        keyQuoteOrMetric: "Treating Nigeria not as poor but as leaking · 7-Part Omnibus Act"
      },
      {
        id: "r65",
        n: "65",
        title: "Sanitation-Productivity Linkage",
        desc: "Connect sanitation and environmental management with economic productivity and public welfare.",
        status: "drafted",
        pillarId: "p12",
        pillarTitle: "Environmental & Ecological Reform",
        overview: "Treats environmental hygiene as an economic asset. Converts municipal organic solid waste into biogas electricity and high-grade organic fertilizer for surrounding agrarian communities.",
        coreMechanism: [
          "Commercial waste-to-power concessions in top 10 metropolitan centers.",
          "Ban on single-use non-biodegradable plastics with domestic biodegradable packaging incentives."
        ]
      }
    ]
  },
  {
    id: "p13",
    pillar: "Trade, Capital & SME Reform",
    reforms: [
      {
        id: "r66",
        n: "66",
        title: "AfCFTA Integration & Trade Reform",
        desc: "National Commodity Import Office (NCIO), EPZ reform, structured AfCFTA participation.",
        status: "drafted",
        pillarId: "p13",
        pillarTitle: "Trade, Capital & SME Reform",
        overview: "Positions Nigeria as the dominant manufacturing powerhouse of the African Continental Free Trade Area. Establishes the National Commodity Import Office to optimize strategic imports and transforms Export Processing Zones into world-class bonded factories.",
        coreMechanism: [
          "Streamlined single-window customs clearance under 24 hours.",
          "AfCFTA Rules of Origin compliance and origin verification labs."
        ]
      },
      {
        id: "r67",
        n: "67",
        title: "SME & Startup Capital Reform",
        desc: "Development Finance Guarantee Scheme (DFGS), angel tax credit, MSME credit bureau.",
        status: "drafted",
        pillarId: "p13",
        pillarTitle: "Trade, Capital & SME Reform",
        overview: "Catalyzes equity and debt financing for small businesses by introducing first-loss government loan guarantees and generous tax credits for local angel investors backing early-stage ventures.",
        coreMechanism: [
          "50% first-loss risk-sharing facility for commercial banks lending to manufacturing SMEs.",
          "Zero capital gains tax on investments in Nigerian registered startups held over 2 years."
        ]
      },
      {
        id: "r68",
        n: "68",
        title: "Infrastructure Financing Framework",
        desc: "Sovereign Infrastructure Bond, pension fund allocation to infrastructure, development bank recapitalisation.",
        status: "drafted",
        pillarId: "p13",
        pillarTitle: "Trade, Capital & SME Reform",
        overview: "Unlocks long-term domestic institutional capital (pension assets, insurance pools) for toll roads, cargo rail, and deep-sea ports with inflation-hedged revenue yields.",
        coreMechanism: [
          "Tax-exempt Sovereign Infrastructure Bonds with dedicated toll-concession revenue ring-fencing.",
          "Regulatory framework enabling up to 25% pension asset allocation to prime revenue-generating infrastructure."
        ]
      }
    ]
  },
  {
    id: "p14",
    pillar: "Constitutional & Territorial Governance",
    reforms: [
      {
        id: "r69",
        n: "69",
        title: "Residency Senate / Internal Mutual Non-Domination",
        desc: "Single reserved legislature seat for residents in each state. Governorship and all offices remain indigenous. Non-indigenous and non-Nigerian residents participate under indigenous-led government. Indigenous voters also vote for Residency Senator. Southwest pilot.",
        status: "drafted",
        featured: true,
        pillarId: "p14",
        pillarTitle: "Constitutional & Territorial Governance",
        overview: "A historic constitutional innovation solving the perennial 'indigene vs settler' crisis in Nigeria. Protects indigenous sovereignty while granting resident populations formal legislative representation. In each state, the Governorship and executive council remain strictly indigenous to preserve cultural heritage; simultaneously, a dedicated 'Residency Senate' seat is created for long-term residents, ensuring non-domination.",
        historicalContext: "Centuries of ethnic tension, post-colonial state border disputes, and political violence have flared whenever resident populations felt disenfranchised or indigenous peoples feared demographic displacement.",
        coreMechanism: [
          "Creation of one dedicated 'Residency Senator' seat in each state assembly, voted on by all residents (indigenous + non-indigenous).",
          "Governorship and principal executive positions preserved for indigenous citizens of that territory.",
          "Southwest pilot region testing the architecture across Lagos, Ogun, Oyo, Osun, Ondo, and Ekiti."
        ],
        strategicImpact: [
          "Guarantees permanent internal peace and mutual non-domination between ethnic communities.",
          "Protects indigenous land tenure while granting resident economic contributors a voice in governance."
        ],
        keyQuoteOrMetric: "Indigenous preservation + resident voice · Southwest pilot"
      },
      {
        id: "r70",
        n: "70",
        title: "Local Government Indigenous Representation",
        desc: "Local government chairmen and council representation remain indigenous. Residency Senate seat is the compensating resident voice. Requires constitutional amendment through NASS.",
        status: "drafted",
        pillarId: "p14",
        pillarTitle: "Constitutional & Territorial Governance",
        overview: "Locks LGA executive chairmanships and traditional ward councils to indigenous lineage, ensuring grassroots cultural identity remains protected, while compensating residents through legislative seats.",
        coreMechanism: [
          "Constitutional amendment proposal submitted through the National Assembly.",
          "Clear statutory definitions of territorial indigeneity."
        ]
      },
      {
        id: "r71",
        n: "71",
        title: "Mutual Non-Domination Principle",
        desc: "Prevent one population group from exercising disproportionate political control over another's territory.",
        status: "drafted",
        pillarId: "p14",
        pillarTitle: "Constitutional & Territorial Governance",
        overview: "A core constitutional jurisprudence principle forbidding demographic gerrymandering or political concentration that subjugates host indigenous communities.",
        coreMechanism: [
          "Constitutional adjudication test applied by the Supreme Court on electoral ward redistricting."
        ]
      },
      {
        id: "r72",
        n: "72",
        title: "Indigenous-Resident Political Participation Framework",
        desc: "Indigenous people must not be excluded from representative selection simply because a structure also serves residents.",
        status: "drafted",
        pillarId: "p14",
        pillarTitle: "Constitutional & Territorial Governance",
        overview: "Ensures harmonious dual-ballot participation where both host indigenous citizens and resident migrants vote together without mutual exclusion or tension.",
        coreMechanism: [
          "Dual-register voting procedure at designated residency constituencies."
        ]
      },
      {
        id: "r72b",
        n: "72b",
        title: "13-Region Geographic Restructuring",
        desc: "Nigeria restructured from 6 geopolitical zones into 13 regions — identity-first, not political. Topographic and cultural boundaries, not political compromise. Kwara included in Southwest region. Each region forms a Development Council. Identity precedes politics.",
        status: "drafted",
        featured: true,
        pillarId: "p14",
        pillarTitle: "Constitutional & Territorial Governance",
        overview: "Replaces the artificial, militaristic 6-geopolitical zone division with 13 coherent, identity-first, topographically and culturally aligned economic regions. Crucially incorporates Kwara into the Southwest region where its cultural, linguistic, and historical identity belongs. Each region establishes a Regional Development Council to coordinate joint power, water, transport, and economic planning.",
        historicalContext: "The arbitrary 6-zone formula was a military administrative convenience that severed culturally unified peoples, forced hostile groups together, and paralyzed coherent regional infrastructure planning.",
        coreMechanism: [
          "13 autonomous identity-first economic development regions.",
          "Kwara formally reunified culturally and economically with the Southwest Region (Lagos, Ogun, Oyo, Osun, Ondo, Ekiti, Kwara).",
          "Regional Development Councils with statutory authority to pool capital for inter-state rail, hydro-electric dams, and security."
        ],
        strategicImpact: [
          "Harmonizes economic planning across coherent cultural and watershed zones.",
          "Unlocks regional economies of scale currently stifled by fragmented state boundaries."
        ],
        keyQuoteOrMetric: "13 cultural regions · Kwara Southwest integration · Identity precedes politics"
      },
      {
        id: "r72c",
        n: "72c",
        title: "Southwest Regional Development Council (incl. Kwara)",
        desc: "Coordination council for the expanded Southwest region: Lagos, Ogun, Oyo, Osun, Ondo, Ekiti, Kwara. Kwara's inclusion is geographic and cultural — the people belong to this region by identity, not political assignment. Joint infrastructure, water, security intelligence, economic planning.",
        status: "drafted",
        featured: true,
        pillarId: "p14",
        pillarTitle: "Constitutional & Territorial Governance",
        overview: "Institutionalizes the Southwest Regional Development Council encompassing 7 member states (Lagos, Ogun, Oyo, Osun, Ondo, Ekiti, and Kwara). Pools state budgets to build trans-regional high-speed rail, regional electricity grids, joint food security reserves, and synchronized security intelligence across the Yoruba cultural expanse.",
        historicalContext: "Kwara was politically cut off from its Southwestern brethren by colonial and military boundary adjustments, yet its social, linguistic, and commercial heart has always beat with the Southwest.",
        coreMechanism: [
          "Joint Southwestern Infrastructure Investment Bank capitalized by member states.",
          "Integrated regional transportation master plan: Lagos-Ibadan-Ilorin high-speed freight rail.",
          "Unified intelligence sharing between Amotekun and Kwara community security commands."
        ],
        strategicImpact: [
          "Creates an economic bloc with an aggregate GDP exceeding $120 billion.",
          "Accelerates industrialization, food supply, and energy self-sufficiency across the corridor."
        ],
        keyQuoteOrMetric: "7 states unified · $120B+ regional bloc · Joint rail & energy grids"
      }
    ]
  },
  {
    id: "p15",
    pillar: "Reproductive Health & Medical Rights Reform",
    reforms: [
      {
        id: "r73",
        n: "73",
        title: "Reproductive Health, Pregnancy Protection & Safe Medical Intervention Reform",
        desc: "Life-saving clause. Minor impregnation → automatic prosecution of impregnator. 12-week standard gestational limit; 16-week for rural women. Annual practitioner caps; lifetime woman cap (no cap for endangered mothers). Strict controls on abortion drugs. Builds on existing Nigerian legislation.",
        status: "drafted",
        featured: true,
        pillarId: "p15",
        pillarTitle: "Reproductive Health & Medical Rights Reform",
        overview: "A balanced, legally rigorous healthcare architecture building on existing Nigerian statutes. Embeds an unconditional Life-Saving Clause for endangered mothers. Establishes mandatory statutory prosecution of adult impregnators of minors. Sets structured gestational limits (12-week standard, extended 16-week for rural women with constrained medical access), medical practitioner licensing caps, and strict pharmaceutical controls on dangerous black-market abortifacients.",
        historicalContext: "Nigeria suffers one of the highest maternal mortality rates in the world, plagued by illicit quack clinics, untreated obstetric complications, child abuse without prosecution, and lack of dignified medical care.",
        coreMechanism: [
          "Unconditional Life-Saving Exception: absolute legal immunity for doctors performing necessary procedures to save a mother's life.",
          "Mandatory state prosecution of any adult who impregnates a minor, eliminating out-of-court settlements.",
          "Accredited medical facility guidelines with lifetime caps and clinical counseling protocols to protect women's psychological health.",
          "Strict regulatory tracking of dangerous prescription abortifacient drugs to shut down predatory black-market distribution."
        ],
        strategicImpact: [
          "Dramatically reduces maternal mortality and complications from unsafe quack interventions.",
          "Establishes uncompromising child protection against statutory rape and exploitation."
        ],
        keyQuoteOrMetric: "Unconditional life-saving clause · Mandatory minor protection · 12-16wk standard"
      }
    ]
  },
  {
    id: "p16",
    pillar: "Lagos, Southwest & Regional Infrastructure",
    reforms: [
      {
        id: "r74",
        n: "74",
        title: "Osun Sacred Grove — Infrastructure Upgrade & UN Push",
        desc: "Upgrade Osun-Osogbo Sacred Grove (UNESCO World Heritage Site): waterway cleaned every 4 months, 10 classified road paths, healthcare facility, security outpost. Push to UNESCO, UN Special Rapporteur on Cultural Rights, AU Cultural Tourism Framework. The Grove is a living institution — its infrastructure must reflect its international status.",
        status: "drafted",
        featured: true,
        pillarId: "p16",
        pillarTitle: "Lagos, Southwest & Regional Infrastructure",
        overview: "A flagship cultural preservation and international sovereignty initiative for the Osun-Osogbo Sacred Grove (UNESCO World Heritage Site). Positions the Grove as a living spiritual and ecological institution. Mandates biological waterway remediation every 4 months, construction of 10 classified heritage stone pathways, an on-site dedicated clinic, and permanent eco-ranger security outposts. Paired with a coordinated diplomatic push across UNESCO, the UN Special Rapporteur on Cultural Rights, and the AU Cultural Tourism Framework.",
        historicalContext: "The sacred Osun River has been severely polluted by illegal upstream artisanal gold mining runoffs (heavy metals and cyanide), while historic sacred shrines suffer neglect, endangering this global cultural treasure.",
        coreMechanism: [
          "Mandatory ecological cleaning and biochemical testing of the Osun River waterway every 120 days.",
          "Construction of 10 classified low-impact walking paths preserving historic botanical species.",
          "On-site primary healthcare station and specialized Heritage Police security detachment.",
          "Formal petition and diplomatic engagement with UNESCO and international cultural funds for perpetual endowment."
        ],
        strategicImpact: [
          "Safeguards indigenous cultural heritage and restores pristine ecological purity to the sacred river.",
          "Generates hundreds of millions in cultural tourism and global academic research revenue."
        ],
        keyQuoteOrMetric: "UNESCO World Heritage Site · Waterway cleaned every 4mo · 10 heritage paths"
      },
      {
        id: "r74b",
        n: "74b",
        title: "Lagos Water Transportation Corridor",
        desc: "Proposed water transport route connecting Badagry, Epe and Eti-Osa.",
        status: "pending",
        pillarId: "p16",
        pillarTitle: "Lagos, Southwest & Regional Infrastructure",
        overview: "Unlocks Lagos's natural aquatic advantage by commissioning high-speed catamaran ferries and dredged channel corridors linking Badagry in the west to Epe and Eti-Osa in the east, bypassing traffic bottlenecks.",
        coreMechanism: [
          "Channel dredging and modern passenger ferry terminals.",
          "Standardized maritime safety certification and night navigation beacons."
        ]
      },
      {
        id: "r75",
        n: "75",
        title: "Mile 2 Connectivity Infrastructure",
        desc: "Road and rail bridge connectivity around Mile 2.",
        status: "pending",
        pillarId: "p16",
        pillarTitle: "Lagos, Southwest & Regional Infrastructure",
        overview: "Transforms Mile 2 into an integrated multi-modal transit hub connecting the Blue Line rail, bus rapid transit (BRT), and coastal water ferries.",
        coreMechanism: [
          "Grade-separated elevated pedestrian walkways and bus interchange terminals."
        ]
      },
      {
        id: "r76",
        n: "76",
        title: "Integrated Urban Transportation",
        desc: "Better integration of road, rail and water transport infrastructure across Lagos.",
        status: "pending",
        pillarId: "p16",
        pillarTitle: "Lagos, Southwest & Regional Infrastructure",
        overview: "A single unified ticketing and farecard system (Cowry Card expansion) across all road, rail, ferry, and monorail networks in Lagos metropolitan area.",
        coreMechanism: [
          "Unified contactless transit payment rail with automatic inter-modal transfer discounts."
        ]
      },
      {
        id: "r77",
        n: "77",
        title: "Badagry-Apapa-Atlantic Coastal Energy Zone",
        desc: "Strategic coastal energy corridor leveraging Atlantic proximity for generation and export infrastructure.",
        status: "drafted",
        pillarId: "p16",
        pillarTitle: "Lagos, Southwest & Regional Infrastructure",
        overview: "Leverages the Atlantic coastline from Badagry to Apapa for offshore wind, LNG regasification, coastal power generation, and deep-sea industrial ports, transforming Lagos into West Africa's leading energy and logistics hub.",
        coreMechanism: [
          "Special coastal industrial energy zone with dedicated natural gas pipelines.",
          "Deep-sea container port concession integrated with rail logistics."
        ]
      }
    ]
  },
  {
    id: "p17",
    pillar: "Digital Economy & Revenue",
    reforms: [
      {
        id: "r78",
        n: "78",
        title: "Revenue Diversification — Digital Economy Taxation",
        desc: "Digital economy taxation framework and extractives revenue reform.",
        status: "drafted",
        pillarId: "p17",
        pillarTitle: "Digital Economy & Revenue",
        overview: "Captures legitimate public tax revenue from global Big Tech corporations earning billions in ad revenue and digital subscriptions from Nigerian consumers, requiring local digital permanent establishments.",
        coreMechanism: [
          "Digital Services Tax (DST) on non-resident digital platforms with over 100,000 Nigerian active users.",
          "Automated VAT withholding at payment gateway level on digital downloads and streaming."
        ]
      },
      {
        id: "r79",
        n: "79",
        title: "Digital Government Infrastructure",
        desc: "Modernise public administration through digital systems, accessible government services and e-governance.",
        status: "pending",
        pillarId: "p17",
        pillarTitle: "Digital Economy & Revenue",
        overview: "Replaces slow civil service bureaucracy with automated API-driven portals for business incorporation, building permits, court filings, and land searches.",
        coreMechanism: [
          "GovStack architecture ensuring all government ministry databases communicate seamlessly."
        ]
      }
    ]
  },
  {
    id: "p18",
    pillar: "Economic Stability & Confidence Architecture",
    reforms: [
      {
        id: "r80",
        n: "80",
        title: "Macro Stability Index (MSI)",
        desc: "Published composite index measuring macroeconomic stability. Transparent, independent, monthly.",
        status: "drafted",
        pillarId: "p18",
        pillarTitle: "Economic Stability & Confidence Architecture",
        overview: "An independent, transparent composite index tracking 12 core macroeconomic health metrics (real interest rates, FX volatility, FX reserve velocity, debt-service absorption, food price dispersion) published monthly to guide sovereign decision-making.",
        coreMechanism: [
          "Calculated independently by an autonomous academic-statistical council.",
          "Published open-source on the 1st of every month with raw datasets."
        ]
      },
      {
        id: "r81",
        n: "81",
        title: "Independent Dispute Resolution Forum (IDRF)",
        desc: "Specialised court for economic stability disputes and sovereign policy implementation challenges.",
        status: "drafted",
        pillarId: "p18",
        pillarTitle: "Economic Stability & Confidence Architecture",
        overview: "A fast-track specialized commercial and economic stability court that resolves investor disputes, contract impasses, and regulatory challenges within a strict 60-day maximum window.",
        coreMechanism: [
          "Specialized judges trained in international commercial arbitration and macroeconomics.",
          "Binding determinations enforceable across federal and international jurisdictions."
        ]
      },
      {
        id: "r82",
        n: "82",
        title: "Naira Backing Statement",
        desc: "Monthly CBN publication (audited quarterly): aggregate backing ratio as % of M2. First time citizens are told what backs their currency with a published, audited number.",
        status: "drafted",
        pillarId: "p18",
        pillarTitle: "Economic Stability & Confidence Architecture",
        overview: "A transformative transparency instrument. For the first time in Nigerian history, the Central Bank is legally required to publish a monthly statement (audited quarterly by independent firms) showing citizens exactly what sovereign assets, gold reserves, foreign exchange, and commodities back the Naira in circulation as a percentage of total M2 money supply.",
        historicalContext: "Decades of opacity allowed central bankers to print trillions unchecked, leaving citizens in total darkness about the real backing of their currency until runaway devaluation occurred.",
        coreMechanism: [
          "Statutory requirement to publish the aggregate backing ratio on the 15th of every month.",
          "Audited quarterly certification by top independent auditing firms.",
          "Constitutional trigger: if the backing ratio breaches statutory safety floors, mandatory capital stabilization procedures are immediately enacted."
        ],
        strategicImpact: [
          "Re-anchors investor and citizen confidence in the Naira based on verifiable physical and fiscal backing.",
          "Eliminates speculative currency runs driven by fear and misinformation."
        ],
        keyQuoteOrMetric: "Monthly publication · Audited quarterly · 1st time in Nigeria's history"
      },
      {
        id: "r83",
        n: "83",
        title: "Outcome-Based Government Performance",
        desc: "Measure government by tangible results, not announcements. Milestone-based public expenditure.",
        status: "drafted",
        pillarId: "p18",
        pillarTitle: "Economic Stability & Confidence Architecture",
        overview: "Bans the culture of celebrating government budget allocations and ground-breaking ceremonies. Ministers and departments are evaluated and funded strictly on delivered outputs: verified kilometers of paved road, verified megawatts delivered, and verified hospital beds in service.",
        coreMechanism: [
          "Public Key Performance Indicator (KPI) dashboard for every cabinet minister.",
          "Failure to meet 70% of audited milestones triggers automatic cabinet dissolution."
        ]
      }
    ]
  }
];

export const STATUS_LABELS: Record<ReformStatus, string> = {
  drafted: "Drafted / Built",
  submitted: "Submitted",
  pending: "Proposed",
  "needs-recovery": "Needs Recovery"
};

export const STATUS_BADGE_CLASSES: Record<ReformStatus, { bg: string; text: string; border: string }> = {
  drafted: { bg: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/30", text: "text-emerald-500", border: "border-emerald-500" },
  submitted: { bg: "bg-amber-500/15 text-amber-600 dark:text-amber-400 border-amber-500/30", text: "text-amber-500", border: "border-amber-500" },
  pending: { bg: "bg-muted text-muted-foreground border-border", text: "text-muted-foreground", border: "border-border" },
  "needs-recovery": { bg: "bg-red-500/15 text-red-600 dark:text-red-400 border-red-500/30", text: "text-red-500", border: "border-red-500" }
};
