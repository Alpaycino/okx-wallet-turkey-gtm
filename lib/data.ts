// Single source of truth for all GTM content.
// Edit values here — no layout changes needed.

export const NAV_SECTIONS = [
  { id: "summary", label: "Executive Summary" },
  { id: "targets", label: "Key Targets" },
  { id: "friction", label: "Friction Points" },
  { id: "positioning", label: "Positioning" },
  { id: "framework", label: "6-Month Framework" },
  { id: "phase-1", label: "Phase 1 — Foundation" },
  { id: "phase-2", label: "Phase 2 — Activation" },
  { id: "phase-3", label: "Phase 3 — Scale" },
  { id: "kols", label: "KOL Ecosystem" },
  { id: "community", label: "Community & Education" },
  { id: "supplementary", label: "Supplementary Q&A" },
  { id: "mock-campaigns", label: "Mock Campaigns" },
  { id: "past-campaigns", label: "Past Campaigns" },
  { id: "metrics", label: "Success Metrics" },
  { id: "recommendations", label: "Closing" },
] as const;

export const EXECUTIVE_SUMMARY = {
  intro:
    "Türkiye is one of the most active cryptocurrency markets globally, with strong retail trading culture but limited on-chain participation. While OKX already has strong brand recognition through its CEX, the next growth lever is converting Turkish CEX traders and active Web3 users through OKX Wallet.",
  plan:
    "This 6-month plan reduces the friction between CEX and Web3 by leveraging localized education, KOL-driven community growth, and ecosystem partnerships.",
  deliverables: [
    "A localized GTM model tailored to the Turkish crypto market",
    "A scalable KOL and partner ecosystem strategy",
    "Community and education programs designed to drive on-chain adoption",
    "Operational campaigns to increase wallet activity and trading volume",
  ],
  objective:
    "Position OKX Wallet as the primary Web3 gateway for Turkish users.",
};

export const KEY_TARGETS = [
  {
    metric: "DEX Aggregator Volume (30d)",
    current: "$6.4B (Global)",
    target: "$500M (TR)",
    note: "Channel Turkish on-chain demand through OKX DEX Aggregator",
  },
  {
    metric: "Turkish Wallet MAU",
    current: "Baseline undisclosed",
    target: "20,000",
    note: "Monthly active Turkish OKX Wallet users",
  },
  {
    metric: "CEX → Wallet Conversion",
    current: "Baseline undisclosed",
    target: "10 – 15%",
    note: "OKX CEX users who graduate to self-custody wallet flow",
  },
  {
    metric: "KOL Partnerships (TR)",
    current: "Baseline undisclosed",
    target: "30+",
    note: "Active KOL network across 4 content categories",
  },
];

export const FRICTION_POINTS = [
  {
    title: "Seed Phrase Anxiety",
    problem: "Users fear managing private keys and a single point of loss.",
    solution:
      "Promote OKX MPC Keyless Wallet — no seed phrase, key split into 3 parts stored across user, cloud, and OKX.",
  },
  {
    title: "On-Chain Complexity",
    problem: "Gas fees, bridges, and liquidity pools intimidate beginners.",
    solution:
      "Gas Abstraction (pay in USDT/USDC) + step-by-step Turkish tutorials on swaps, bridges, and yield.",
  },
  {
    title: "No Clear Use Case",
    problem: "Users don't see why to leave CEX.",
    solution:
      "Surface DeFi yield, meme trading, and airdrop farming — on-chain-only opportunities.",
  },
  {
    title: "Language Gap",
    problem: "Most Web3 content is English-only.",
    solution:
      "Build a full Turkish content ecosystem via KOLs, weekly Twitter Spaces, and Telegram support.",
  },
];

export const POSITIONING = {
  headline: "OKX Wallet's edge is CeDeFi — not just another wallet.",
  oneLiner:
    "The most powerful CeDeFi gateway — centralized liquidity meets multi-chain Web3 access.",
  shouldNotBe: [
    "Just another mobile wallet",
    "A yield-first DeFi product",
    "A CEX companion app",
    "A speculative airdrop tool",
  ],
  advantages: [
    {
      title: "CEX Liquidity Integration",
      detail:
        "Direct access to OKX exchange liquidity for superior execution vs. pure on-chain routers.",
    },
    {
      title: "DEX Aggregation",
      detail: "500+ DEXs across 130+ chains routed via X Routing.",
    },
    {
      title: "CEX → Wallet Bridge",
      detail:
        "Seamless asset transfer between exchange and self-custody — no new account, no new KYC.",
    },
    {
      title: "Gas Abstraction",
      detail:
        "Pay gas in any supported token. Removes the native-token barrier for first-time bridgers.",
    },
  ],
};

export const FRAMEWORK_PHASES = [
  {
    key: "phase-1",
    label: "Phase 1",
    months: "Month 1–2",
    title: "Foundation & Education",
    goal: "Introduce Turkish users to Web3 and simplify OKX Wallet onboarding.",
    accent: "blue",
    pillars: [
      "Wallet onboarding",
      "DeFi education",
      "First swap incentives",
      "KOL network setup",
    ],
  },
  {
    key: "phase-2",
    label: "Phase 2",
    months: "Month 3–4",
    title: "Trading Activation & DeFi Growth",
    goal: "Drive on-chain volume and establish OKX Wallet as the preferred DeFi trading platform.",
    accent: "green",
    pillars: [
      "Meme trading competitions",
      "AI Agent campaigns",
      "DeFi yield programs",
      "Trading leaderboards",
    ],
  },
  {
    key: "phase-3",
    label: "Phase 3",
    months: "Month 5–6",
    title: "CeDeFi Expansion & Partnerships",
    goal: "Scale adoption through ecosystem integrations and cross-chain activity.",
    accent: "white",
    pillars: [
      "L2 ecosystem campaigns",
      "DeFi partnerships",
      "Cross-chain usage",
      "Airdrop programs",
    ],
  },
] as const;

export type PhaseTask = {
  title: string;
  description: string;
  kols?: string[];
  owner?: string;
  due?: string;
};

export const PHASE_1_TASKS: PhaseTask[] = [
  {
    title: "OKX Wallet Turkey GTM Kickoff Planning",
    description:
      "Define GTM strategy milestones, KOL partnership pipeline, content calendar, and budget allocation for the 6-month Turkey campaign. Coordinate with global marketing for brand guidelines.",
    due: "Month 1",
    owner: "Alpay",
  },
  {
    title: "Turkey Market Messaging Alignment",
    description:
      "Develop Turkish-specific messaging: CeDeFi narrative, self-custody value props, DeFi yield framing against Turkish Lira inflation. Create content briefs and brand guidelines for KOL partners.",
    due: "Month 1",
    owner: "Alpay",
  },
  {
    title: "Localized Web3 Education Content Production",
    description:
      "Turkish-language content covering wallet setup, DeFi basics, and on-chain trading fundamentals. Formats: Twitter threads, YouTube tutorials, Instagram reels.",
    kols: ["@CryptoKemal", "@Kriptomessi", "@Selcoin"],
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "Turkish Educational Thread Series Launch",
    description:
      "Weekly Turkish educational thread series across KOL accounts covering OKX Wallet features, DeFi concepts, and on-chain trading.",
    kols: ["@Vemutlu", "@coinmuhendisi", "@Kriptolik"],
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "DeFi Beginner Video Content",
    description:
      "'What is DeFi?', 'How to use a DEX', 'Understanding gas fees and bridging'. Distribution through YouTube, Twitter, and TikTok.",
    kols: ["@Kriptolik", "@Vemutlu", "@coinmuhendisi"],
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "OKX Wallet Onboarding Tutorial Campaign",
    description:
      "Step-by-step Turkish onboarding: wallet creation, seed phrase backup, funding from CEX, first DeFi interaction. Video guides and threads.",
    kols: ["@coinmuhendisi", "@CryptoKemal"],
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "Weekly DeFi Twitter Spaces Program",
    description:
      "Weekly Turkish DeFi Twitter Spaces with rotating KOL hosts. Topics: DeFi strategy, yield farming, on-chain trading, wallet security. Target 500+ live listeners per session.",
    kols: ["@TheBullduck", "@CoinHuntersTR"],
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "OKX Wallet 'First Swap' Campaign",
    description:
      "Users who complete their first DEX swap via OKX Wallet receive gas fee reimbursement + token reward. Lowers the psychological barrier for CEX-only users.",
    kols: ["@CryptoKemal", "@Kriptomessi", "@Selcoin", "@dotiryaki"],
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "CEX → Wallet Education Content Series",
    description:
      "CeDeFi integration content guiding OKX CEX users to discover DEX trading. Funnel: CEX trade → Wallet intro → Fund transfer → DeFi interaction.",
    kols: ["@TheBullduck"],
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "Stablecoin & DeFi Yield Education",
    description:
      "Positioning OKX Wallet DeFi yield against Turkish Lira inflation: stablecoin staking, LP strategies, yield farming basics.",
    kols: ["@TheBullduck", "@dotiryaki", "@coinmuhendisi"],
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "Airdrop Discovery Educational Campaign",
    description:
      "Educational content on using OKX Wallet for emerging ecosystem airdrops: hunting guides, farming tutorials, wallet-based participation walkthroughs.",
    kols: ["@BurakEth33", "@Modularityx", "@artuntan"],
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "KOL Airdrop Farming Guide Campaign",
    description:
      "Airdrop-focused KOLs create detailed farming guides: L2 strategies, protocol interaction walkthroughs, multi-chain farming techniques.",
    kols: ["@BurakEth33", "@CoinHuntersTR", "@kriptobi"],
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "OKX DEX Aggregator Awareness Campaign",
    description:
      "Dedicated campaign highlighting best-price routing across 500+ DEXs and 130+ chains. Comparison content vs competitors.",
    kols: ["@Kriptolik", "@zenerbabax"],
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "Telegram Community Education Program",
    description:
      "Turkish Telegram community with daily education content: DeFi tips, on-chain alpha, wallet tutorials, community Q&A with KOL guest appearances.",
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "Security Awareness Campaign",
    description:
      "'Not your keys, not your crypto' Turkish narrative. Seed phrase protection, scam recognition, approval revoke awareness — addresses the #1 friction for CEX users.",
    kols: ["@coinmuhendisi", "@Coinisan", "@zenerbabax"],
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "First On-Chain Transaction Incentive",
    description:
      "Gas fee reimbursement, bonus token rewards, achievement NFTs — designed to pull CEX-only users into their first on-chain action.",
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "Referral Campaign Launch",
    description:
      "Existing wallet users earn rewards for referring new users who complete their first DeFi transaction. Viral growth mechanism across all KOL networks.",
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "Turkish Knowledge Base Launch",
    description:
      "Turkish-language @wallet FAQ, troubleshooting, DeFi glossary. Weekly digest covering on-chain trends and alpha.",
    due: "Month 1–2",
    owner: "Alpay",
  },
  {
    title: "Education Performance Tracking",
    description:
      "Track KPIs: views, engagement rate, RTs, wallet creation conversions, first swap completions. Weekly reporting to optimize KOL ROI.",
    due: "Month 2",
    owner: "Alpay",
  },
  {
    title: "Community Metrics Dashboard",
    description:
      "Track first on-chain transaction rate, wallet creations, Space attendance, and CEX-to-Wallet conversion rate. Target: 10–15% CEX conversion, 20K Turkish Wallet MAU.",
    due: "Month 2",
    owner: "Alpay",
  },
];

export const PHASE_2_TASKS: PhaseTask[] = [
  {
    title: "Trading Activation Campaign Planning",
    description:
      "Define KPI targets, prize pools, and KOL schedule for meme trading, AI agent, and DeFi yield campaigns.",
    due: "Month 3",
    owner: "Alpay",
  },
  {
    title: "Meme Token Trading Competition",
    description:
      "Leaderboard-based competition via OKX DEX Aggregator. Rewards in USDT / partner tokens. Meme tokens are the natural entry point for CEX-to-on-chain traders.",
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "KOL Meme Trading Activation",
    description:
      "Meme-focused KOLs run trading sessions, analysis threads, and strategy shares during the competition window.",
    kols: ["@artuntan", "@Kriptolik"],
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "Weekly Meme Trading Twitter Spaces",
    description:
      "AI trading strategies, meme token market opportunities, and leaderboard updates broadcast live.",
    kols: ["@CoinHuntersTR"],
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "Trade-to-Earn Points Campaign",
    description:
      "Users earn points for every on-chain swap, bridge, and DeFi interaction via OKX Wallet. Points redeemable for USDT and partner tokens.",
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "On-Chain Activity Incentive",
    description:
      "Daily active trading bonuses, streak rewards, volume milestones. Drives consistent wallet usage beyond one-offs.",
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "AI Agent Meme Trading Competition",
    description:
      "Nationwide competition using OKX Wallet AI Agents to discover and trade trending meme tokens. Rankings by volume and profitability.",
    kols: ["@Kriptolik", "@zenerbabax", "@Coinisan", "@Modularityx"],
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "OnchainOS Education Campaign",
    description:
      "'Your wallet is now an OS' Turkish narrative. AI agents for token discovery, market analysis, and trade execution.",
    kols: ["@Kriptolik", "@zenerbabax", "@Coinisan", "@Modularityx"],
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "AI Agent Strategy Workshop Series",
    description:
      "Setup, configuration, and combining AI agents with on-chain trading. Spaces + video tutorials.",
    kols: ["@Modularityx", "@kriptobi", "@CoinHuntersTR"],
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "Alpha Radar Token Discovery Campaign",
    description:
      "Turkish campaign showcasing emerging token discovery, early entry strategies, and screening techniques.",
    kols: ["@Kriptolik", "@zenerbabax"],
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "Smart Money Scanner Education",
    description:
      "Tracking whale activity, following institutional wallets, identifying smart money flows.",
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "On-Chain Trading Tutorial Content",
    description:
      "Advanced trading content: limit orders on DEX, cross-chain arbitrage, MEV protection, optimal routing via OKX DEX Aggregator.",
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "KOL Live Trading Session Campaign",
    description:
      "Real-time trade execution, strategy explanation, and market analysis streamed via Spaces and YouTube.",
    kols: ["@TheBullduck"],
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "DEX Aggregator Phase 2 Campaign",
    description:
      "Advanced features, best routing demonstrations, gas optimization. Target active traders seeking better execution.",
    kols: ["@Kriptolik", "@zenerbabax"],
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "DeFi Strategy Content Series",
    description:
      "Yield optimization, IL management, protocol risk assessment, cross-chain portfolio diversification.",
    kols: ["@TheBullduck", "@dotiryaki", "@coinmuhendisi"],
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "Stablecoin Yield Strategy Campaign",
    description:
      "OKX Wallet DeFi yield positioned against Turkish Lira inflation. Stablecoin staking, USDT/USDC yield comparison, risk-adjusted returns.",
    kols: ["@TheBullduck", "@dotiryaki"],
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "Liquidity Pool Education Campaign",
    description:
      "How LPs work, providing liquidity via OKX Wallet, IL risk, choosing optimal pools. Beginner to intermediate.",
    kols: ["@coinmuhendisi", "@Kriptolik"],
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "Cross-Chain Trading Tutorial",
    description:
      "Bridging assets, multi-chain DEX trading, cross-chain yield strategies across 130+ chains.",
    kols: ["@zenerbabax", "@HeathleyETH", "@CasanovaWeb3"],
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "Weekly On-Chain Alpha Twitter Spaces",
    description:
      "Summaries of on-chain trends and alpha opportunities. Signal-channel format with actionable insights.",
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "Community Trading Leaderboard",
    description:
      "Weekly / monthly rankings based on trading volume and profitability via OKX Wallet.",
    due: "Month 3–4",
    owner: "Alpay",
  },
  {
    title: "Trading Competition Performance Tracking",
    description:
      "AI agent adoption, meme trading volume, competition participation. Target: $500M monthly on-chain transaction volume.",
    due: "Month 4",
    owner: "Alpay",
  },
  {
    title: "DeFi Engagement Metrics Dashboard",
    description:
      "DEX Aggregator volume, trading competition participation, DeFi TVL from Turkish users, yield campaign conversions.",
    due: "Month 4",
    owner: "Alpay",
  },
];

export const PHASE_3_TASKS: PhaseTask[] = [
  {
    title: "Ecosystem Growth Campaign Planning",
    description:
      "Define partner pipeline, co-marketing budgets, and ecosystem KPIs for the scale phase.",
    due: "Month 5",
    owner: "Alpay",
  },
  {
    title: "L2 Ecosystem Partnership Campaign",
    description:
      "Collaborate with emerging L1/L2 ecosystems launching new protocols or token incentives. Quests, DeFi integrations, token rewards. Partners: Arbitrum, Base, Solana TR community leaders.",
    kols: ["@BurakEth33", "@Modularityx", "@CoinHuntersTR", "@kriptobi"],
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "Partner Token Incentive Activation",
    description:
      "Users complete ecosystem tasks in partner protocols for token rewards. Co-marketing with partner projects.",
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "Airdrop Season Campaign",
    description:
      "Position OKX Wallet as the multi-chain airdrop hub. Educational farming guides, quest programs, L2 tutorials.",
    kols: ["@BurakEth33", "@CoinHuntersTR", "@kriptobi", "@artuntan"],
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "Multi-Chain Ecosystem Quest Campaign",
    description:
      "Swaps, bridges, staking, LP provision across multiple ecosystems. Completion rewarded with tokens / NFTs.",
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "Cross-Chain DeFi Exploration Campaign",
    description:
      "KOLs demonstrate real on-chain strategies across OKX 500+ DEX aggregation and 130+ chains.",
    kols: ["@Kriptolik", "@zenerbabax", "@HeathleyETH", "@CasanovaWeb3"],
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "New Protocol Discovery Campaign",
    description:
      "Alpha Radar integration for early token discovery. New protocol launches and early interaction opportunities.",
    kols: ["@Kriptolik", "@Coinisan", "@Modularityx"],
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "Ecosystem Token Launch Support",
    description:
      "Wallet-based distribution, liquidity mining, ecosystem discovery events for new Web3 token launches.",
    kols: ["@CryptoKemal", "@Kriptomessi", "@Selcoin"],
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "L2 Airdrop Farming Campaign",
    description:
      "Arbitrum, Base, zkSync, Scroll farming guides via OKX Wallet. Step-by-step tutorials.",
    kols: ["@BurakEth33", "@artuntan"],
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "Partner Protocol DeFi Campaign",
    description:
      "Exclusive yield, boosted staking rewards, and liquidity mining accessible through OKX Wallet.",
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "Ecosystem AMA Twitter Spaces Series",
    description:
      "Protocol introductions, roadmap discussions, and community Q&A co-hosted with partner teams.",
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "On-Chain Ecosystem Discovery Content",
    description:
      "Which chains to explore, top protocols per chain, optimal multi-chain strategies.",
    kols: ["@Kriptolik", "@zenerbabax", "@Coinisan"],
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "CeDeFi Narrative Campaign",
    description:
      "CEX liquidity + on-chain freedom. Target CEX-heavy Turkish users, bridge to self-custody.",
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "Cross-Chain Bridge Awareness Campaign",
    description:
      "Beginner-friendly content: how bridges work, security, gas optimization, supported networks.",
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "Partner Ecosystem Trading Incentives",
    description:
      "Fee discounts and bonus rewards for trading partner tokens via OKX DEX Aggregator.",
    kols: ["@TheBullduck", "@BurakEth33"],
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "Web3 Event & Community Meetups",
    description:
      "Turkish Web3 meetups, event sponsorships. Gaming Guild partnerships. Media: Cointurk, Koinmedya.",
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "University Web3 Community Campaign",
    description:
      "Blockchain Club ambassador program at ITU, METU, Boğaziçi. Student workshops and campus events.",
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "On-Chain Retention Campaign",
    description:
      "Loyalty rewards, streak bonuses, exclusive access to partner airdrops — keeps active users engaged.",
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "Seasonal Trading Competition Campaign",
    description:
      "Quarterly tournaments and event-driven trading competitions. Keeps engagement consistent.",
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "DeFi Yield Campaign Expansion",
    description:
      "Expanded yield campaigns across new protocols and chains, including institutional-grade DeFi products.",
    due: "Month 5–6",
    owner: "Alpay",
  },
  {
    title: "Ecosystem Growth Metrics Tracking",
    description:
      "Partnership count, co-marketing reach, cross-chain volume, airdrop participation, quest completion. Target: 20K Turkish Wallet MAU, 30+ KOL partnerships.",
    due: "Month 6",
    owner: "Alpay",
  },
  {
    title: "Wallet MAU & On-Chain Volume Reporting",
    description:
      "Final 6-month assessment: MAU, on-chain volume, DeFi TVL from Turkish users, retention rates. Next-phase planning.",
    due: "Month 6",
    owner: "Alpay",
  },
];

export const KOL_CATEGORIES = [
  {
    category: "General Crypto",
    cadence: "Mass reach",
    focus: "Brand awareness · Wallet onboarding · Mass campaigns",
    kols: [
      { handle: "@CryptoKemal", reach: "655K" },
      { handle: "@Kriptomessi", reach: "600K" },
      { handle: "@Selcoin", reach: "580K" },
      { handle: "@dotiryaki", reach: "—" },
      { handle: "@artuntan", reach: "—" },
    ],
  },
  {
    category: "DeFi / On-Chain",
    cadence: "High-trust conversion",
    focus: "DeFi tutorials · Yield strategies · DEX Aggregator demos",
    kols: [
      { handle: "@TheBullduck", reach: "—" },
      { handle: "@Kriptolik", reach: "—" },
      { handle: "@zenerbabax", reach: "—" },
      { handle: "@coinmuhendisi", reach: "—" },
      { handle: "@Vemutlu", reach: "—" },
    ],
  },
  {
    category: "Research / Airdrops",
    cadence: "Signal-driven",
    focus: "Airdrop farming · Ecosystem research · Alpha content",
    kols: [
      { handle: "@BurakEth33", reach: "—" },
      { handle: "@Modularityx", reach: "—" },
      { handle: "@CoinHuntersTR", reach: "—" },
      { handle: "@kriptobi", reach: "—" },
      { handle: "@Coinisan", reach: "—" },
    ],
  },
  {
    category: "Meme / Trading",
    cadence: "High-frequency",
    focus: "Meme trading · Competitions · Live trading sessions",
    kols: [
      { handle: "@HeathleyETH", reach: "—" },
      { handle: "@CasanovaWeb3", reach: "—" },
    ],
  },
];

export const KOL_ONBOARDING = {
  steps: [
    "Outreach",
    "Campaign Briefing",
    "Technical Review",
    "Publish & Amplify",
  ],
  compensation: [
    {
      title: "Referral-Based",
      detail:
        "Performance rewards tied to wallet activations and on-chain activity.",
    },
    {
      title: "Revenue Share",
      detail:
        "Long-term KOLs receive share of trading volume generated by their audience.",
    },
    {
      title: "Token Incentives",
      detail: "Partner protocol campaigns structured around token distribution.",
    },
    {
      title: "Fixed + Performance",
      detail:
        "Guaranteed base payment plus on-chain conversion bonuses.",
    },
  ],
  qc: [
    "Content Brief",
    "Technical Review (DeFi specialists)",
    "Compliance Check",
    "Final Approval",
  ],
};

export const COMMUNITY = {
  flywheel: [
    { step: "Learn", detail: "Educational content introduces Web3 concepts" },
    { step: "Create", detail: "Users set up OKX Wallet" },
    { step: "Trade", detail: "First on-chain swap via incentive campaign" },
    { step: "Engage", detail: "DeFi participation, trading competitions, quests" },
    { step: "Retain", detail: "Leaderboards, airdrop alerts, AI strategy updates" },
  ],
  channels: [
    {
      name: "Twitter / X",
      cadence: "Daily",
      role: "Content distribution threads, campaign announcements, ecosystem updates. Weekly Spaces with KOL hosts.",
    },
    {
      name: "Telegram",
      cadence: "Real-time",
      role: "Community hub for DeFi discussions, wallet support, trading signals, Q&A sessions.",
    },
    {
      name: "YouTube",
      cadence: "Weekly",
      role: "Long-form Turkish tutorials, trading sessions, OnchainOS workshops, live Spaces recaps.",
    },
  ],
  retention: [
    "Weekly trading competitions with leaderboard resets",
    "Recurring ecosystem quests with token rewards",
    "AI trading strategy updates via OnchainOS",
    "Airdrop discovery alerts and smart money signals",
    "Community-driven trading discussions and alpha sharing",
  ],
};

export const SUPPLEMENTARY = [
  {
    id: "q1",
    question: "Ecosystem Strategy Priority Verticals",
    body: "The three verticals that compound fastest in Türkiye are meme, DeFi yield, and airdrop ecosystems.",
    verticals: [
      {
        name: "Meme Ecosystem",
        detail:
          "Turkish traders are highly active speculators. Meme tokens are a natural CEX → on-chain entry. OKX Meme Mode + Meme Pump = best discovery and trading experience.",
      },
      {
        name: "DeFi Yield",
        detail:
          "Turkish Lira inflation drives yield demand. Stablecoin staking, LP strategies, and yield farming via OKX Earn are real alternatives to traditional finance.",
      },
      {
        name: "Airdrop Ecosystems",
        detail:
          "Airdrops remain the strongest driver of on-chain activity. OKX Wallet as multi-chain airdrop hub. Cryptopedia learn-to-earn for guided participation.",
      },
    ],
  },
  {
    id: "q2",
    question: "CeDeFi Integration",
    body: "OKX's CEX-DEX synergy eliminates the cold-start problem — users graduate from CEX naturally instead of learning Web3 from scratch.",
    steps: [
      "Users trade on OKX CEX (familiar environment)",
      "DEX trading opportunities surfaced within CEX interface",
      "One-click fund transfer from CEX to OKX Wallet",
      "Users interact with DeFi protocols through wallet",
    ],
  },
  {
    id: "q3",
    question: "Partner Synergy Budget Split",
    body: "60% Technical DeFi Analysts (high trust) · 40% Lifestyle Creators (high reach). Both accountable to on-chain KPIs.",
    kpis: [
      {
        title: "KPI 1 — First On-Chain Transaction Rate",
        detail: "% of users executing first swap after wallet install.",
      },
      {
        title: "KPI 2 — Avg On-Chain Volume per User",
        detail: "Measures depth of engagement per KOL's audience.",
      },
    ],
  },
  {
    id: "q4",
    question: "Growth Hack — First Swap Gas Refund",
    body: "Users who complete their first DEX swap receive gas reimbursement + bonus token reward. This eliminates the #1 barrier (cost anxiety) and creates an immediate aha moment.",
    loop:
      "UX Feedback Loop: Pain points collected via Telegram support, community surveys, and KOL reports → monthly digest forwarded to the global product team for wallet UX improvements.",
  },
];

export const MOCK_CAMPAIGNS = [
  {
    title: "Campaign 1 — AI Agent Meme Trading League",
    positioning: "The Home of AI-Powered Meme Trading",
    concept:
      "Nationwide trading competition using OKX Wallet AI Agents to discover and trade meme tokens.",
    mechanics: [
      "Discover tokens via Alpha Radar",
      "Execute meme token swaps via OKX DEX Aggregator",
      "Use AI agents to generate trading strategies",
      "Leaderboard ranked by volume and profitability",
    ],
    rewards: [
      "USDT prize pools",
      "Partner token incentives",
      "Limited OKX NFT collectibles",
    ],
    kols: ["@HeathleyETH", "@CasanovaWeb3", "@Kriptolik", "@zenerbabax"],
    metrics: [
      "AI agent adoption rate",
      "Meme trading volume via OKX Wallet",
      "New wallet downloads driven by campaign",
      "Participating traders",
    ],
  },
  {
    title: "Campaign 2 — Partner Ecosystem Trading Incentive",
    positioning: "CeDeFi ecosystem discovery, token-incentivized",
    concept:
      "Co-marketing with a partner Web3 protocol launching a token incentive campaign. Turkish users complete guided on-chain tasks to earn token rewards.",
    mechanics: [
      "Bridge assets to partner chain",
      "Execute swaps via OKX Wallet",
      "Stake tokens within partner protocol",
      "Provide liquidity to selected pools",
    ],
    rewards: [
      "Partner protocol token allocations",
      "Additional OKX ecosystem incentives",
      "Bonus rewards for top participants",
    ],
    kols: ["@TheBullduck", "@BurakEth33", "@artuntan"],
    metrics: [
      "Campaign task completion rate",
      "Wallet activity generated",
      "Partner TVL growth from Turkish users",
      "New wallet installs driven by ecosystem discovery",
    ],
  },
];

export const PAST_CAMPAIGNS = [
  {
    title: "Dappad × Clave",
    note: "Campaign execution — X post",
    url: "https://x.com/Dappadofficial/status/1792591723425575005?s=20",
  },
  {
    title: "Dappad × SyncSwap",
    note: "Campaign execution — X post",
    url: "https://x.com/Dappadofficial/status/1798395856728563828?s=20",
  },
  {
    title: "Scouthub × Fenerbahçe",
    note: "Partnership launch — Fenerbahçe post",
    url: "https://x.com/Fenerbahce/status/1655131623132651520?s=20",
  },
  {
    title: "IBC × Impakt × Berachain",
    note: "Ecosystem collaboration — Impakt post",
    url: "https://x.com/impaktofficial/status/1927045052691341785?s=20",
  },
];

export const SUCCESS_METRICS = [
  {
    bucket: "Month 2 — Foundation Checkpoint",
    subtitle: "Early-execution quality benchmark (weekly measured).",
    items: [
      { label: "Turkish Wallet MAU", value: "5,000+" },
      { label: "First on-chain swaps", value: "2,000+" },
      { label: "Published KOL pieces", value: "40+" },
      { label: "Weekly Spaces attendance", value: "500+" },
      { label: "CEX → Wallet funnel rate", value: "5%+" },
      { label: "Telegram members", value: "3,000+" },
    ],
  },
  {
    bucket: "Month 4 — Activation Checkpoint",
    subtitle: "First full-cycle GTM signal checkpoint.",
    items: [
      { label: "Turkish Wallet MAU", value: "12,000+" },
      { label: "Monthly on-chain volume", value: "$150M+" },
      { label: "AI Agent adoption rate", value: "25%+" },
      { label: "Meme trading competition participants", value: "5,000+" },
      { label: "DeFi TVL from TR users", value: "$20M+" },
      { label: "Active KOL partnerships", value: "20+" },
    ],
  },
  {
    bucket: "Month 6 — Scale Checkpoint",
    subtitle: "Conversion depth and retention benchmark.",
    items: [
      { label: "Turkish Wallet MAU", value: "20,000+" },
      { label: "Monthly DEX Aggregator volume", value: "$500M" },
      { label: "CEX → Wallet conversion", value: "10–15%" },
      { label: "Active KOL partnerships", value: "30+" },
      { label: "Airdrop season participants", value: "10,000+" },
      { label: "Avg on-chain volume per user", value: "$25K+" },
    ],
  },
];

export const CLOSING = {
  headline:
    "OKX Wallet's Türkiye GTM should run on one clear operating system.",
  principles: [
    "Education drives onboarding",
    "KOLs drive high-trust conversion",
    "Incentives convert attention into first-touch on-chain actions",
    "Ecosystem partnerships drive retention and depth",
    "CeDeFi narrative unifies CEX users with on-chain upside",
    "All activity measured by on-chain KPIs — not impressions",
  ],
  rule:
    "The most important rule is consistency. Every channel should sound like OKX Wallet — the CeDeFi gateway for Türkiye — not a campaign chasing a narrative.",
};
