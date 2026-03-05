/**
 * ═══════════════════════════════════════════════════════════════════
 *  CLYVANTA CREDIT CARD DATA — AFFILIATE MONETIZATION GUIDE
 * ═══════════════════════════════════════════════════════════════════
 *
 *  HOW TO EARN MONEY:
 *  Replace the `affiliateLink` for each card with YOUR affiliate tracking
 *  link from the networks below. You earn a commission every time someone
 *  clicks your link and gets approved for the card.
 *
 *  ┌──────────────────────────────────────────────────────────────────┐
 *  │  AFFILIATE NETWORK        │ CARDS / ISSUERS      │ COMMISSION   │
 *  ├──────────────────────────────────────────────────────────────────┤
 *  │ CJ (Commission Junction)  │ American Express     │ ~$150-200/   │
 *  │ https://www.cj.com        │ Canada               │  approved    │
 *  │                           │                      │  lead        │
 *  ├──────────────────────────────────────────────────────────────────┤
 *  │ Fintel Connect            │ Scotiabank, Neo      │ ~$50-100/    │
 *  │ https://fintelconnect.com │ Financial, Plastk,   │  approved    │
 *  │                           │ Borrowell            │  account     │
 *  ├──────────────────────────────────────────────────────────────────┤
 *  │ FlexOffers                │ BMO, CIBC, TD, RBC,  │ ~$30-100/    │
 *  │ https://flexoffers.com    │ various Canadian     │  approved    │
 *  │                           │ cards                │  lead        │
 *  ├──────────────────────────────────────────────────────────────────┤
 *  │ Rates.ca Partner Program  │ Multi-issuer         │ Per-lead     │
 *  │ https://rates.ca/partners │ (comparison leads)   │ commission   │
 *  ├──────────────────────────────────────────────────────────────────┤
 *  │ LeadScout.ca              │ Canada-only finance  │ Custom CPA   │
 *  │ https://leadscout.ca      │ offers               │ per lender   │
 *  └──────────────────────────────────────────────────────────────────┘
 *
 *  STEPS TO MONETIZE:
 *  1. Sign up at CJ.com → Search for "American Express Canada" → Apply
 *     to the advertiser → Get your unique tracking link → Paste below.
 *  2. Sign up at FintelConnect.com → Apply for Scotiabank & Neo programs
 *     → Get tracking links → Paste below.
 *  3. Sign up at FlexOffers.com → Search for Canadian bank credit cards
 *     → Apply → Get links → Paste below.
 *  4. Optionally sign up at Rates.ca/partners and LeadScout.ca for
 *     additional coverage.
 *
 *  IMPORTANT: Until your affiliate applications are approved, the links
 *  below point to the bank's real application pages (no commission).
 *  Replace them with your affiliate tracking URLs once approved.
 * ═══════════════════════════════════════════════════════════════════
 */

const cards = [
  {
    id: 1,
    name: "American Express Cobalt Card",
    issuer: "American Express",
    network: "Amex",
    category: "Travel Rewards",
    annualFee: 156.00,
    monthlyFee: 13.00,
    purchaseRate: 20.99,
    cashAdvanceRate: 21.99,
    welcomeBonus: "Earn up to 30,000 Membership Rewards points in your first year",
    rewards: [
      { category: "Restaurants & Food Delivery", rate: "5x points" },
      { category: "Groceries", rate: "5x points" },
      { category: "Streaming & Transit", rate: "3x points" },
      { category: "Gas & Travel", rate: "2x points" },
      { category: "Everything Else", rate: "1x point" }
    ],
    benefits: [
      "Flexible point redemption (travel, gift cards, statement credits)",
      "Amex Offers & exclusive experiences",
      "Front of the Line® access to events",
      "Purchase protection & extended warranty",
      "No annual fee — billed monthly"
    ],
    pros: [
      "Best-in-class earn rates on dining & groceries",
      "Incredibly flexible rewards program",
      "Monthly fee makes it easy to try"
    ],
    cons: [
      "Amex not accepted everywhere",
      "No comprehensive travel insurance",
      "Points transfer options can be complex"
    ],
    creditScore: "Good to Excellent",
    rating: 4.8,
    color: "#006FCF",
    // AFFILIATE: Sign up at CJ.com → Search "American Express Canada" → ~$150-200 per approved lead
    affiliateLink: "https://www.americanexpress.com/ca/en/credit-cards/cobalt-card/?linknav=ca-en-amex-cardshop-allcards-702702-image-cobalt",
    featured: true
  },
  {
    id: 2,
    name: "CIBC Dividend Visa Infinite Card",
    issuer: "CIBC",
    network: "Visa",
    category: "Cash Back",
    annualFee: 99.00,
    monthlyFee: null,
    purchaseRate: 20.99,
    cashAdvanceRate: 22.99,
    welcomeBonus: "Earn up to 10% cash back in the first 4 months",
    rewards: [
      { category: "Gas & EV Charging", rate: "4% cash back" },
      { category: "Groceries", rate: "4% cash back" },
      { category: "Transportation & Dining", rate: "2% cash back" },
      { category: "Recurring Bills", rate: "2% cash back" },
      { category: "Everything Else", rate: "1% cash back" }
    ],
    benefits: [
      "Visa Infinite benefits & concierge",
      "Travel emergency medical insurance",
      "Purchase security & extended protection",
      "Auto rental collision/loss damage insurance",
      "Flexible cash back redemption"
    ],
    pros: [
      "4% on gas and groceries is excellent",
      "Strong welcome bonus",
      "Visa Infinite perks included"
    ],
    cons: [
      "$99 annual fee",
      "Cash back caps on bonus categories",
      "Higher income requirement ($60K personal)"
    ],
    creditScore: "Good to Excellent",
    rating: 4.5,
    color: "#C41F3E",
    // AFFILIATE: Sign up at FlexOffers.com → Search "CIBC" → ~$50-80 per approved lead
    affiliateLink: "https://www.cibc.com/en/personal-banking/credit-cards/all-credit-cards/dividend-visa-infinite-card.html",
    featured: true
  },
  {
    id: 3,
    name: "Simplii Financial Cash Back Visa Card",
    issuer: "Simplii Financial",
    network: "Visa",
    category: "No Annual Fee",
    annualFee: 0,
    monthlyFee: null,
    purchaseRate: 20.50,
    cashAdvanceRate: 21.00,
    welcomeBonus: "Earn up to 10% cash back in the first 4 months (up to $150)",
    rewards: [
      { category: "Restaurants, Bars & Coffee Shops", rate: "4% cash back" },
      { category: "Gas & Groceries", rate: "1.5% cash back" },
      { category: "Drugstores", rate: "1.5% cash back" },
      { category: "Pre-authorized Payments", rate: "1.5% cash back" },
      { category: "Everything Else", rate: "0.5% cash back" }
    ],
    benefits: [
      "No annual fee ever",
      "No minimum income requirement",
      "Cash back applied automatically",
      "Mobile wallet compatible",
      "Free Simplii banking integration"
    ],
    pros: [
      "Best no-fee cash back card",
      "4% on restaurants is outstanding",
      "No income requirement"
    ],
    cons: [
      "Cash back caps on bonus categories",
      "Basic card with fewer perks",
      "0.5% base rate is low"
    ],
    creditScore: "Good",
    rating: 4.4,
    color: "#FF6B00",
    // AFFILIATE: Sign up at FlexOffers.com → Search "Simplii" or "CIBC" → ~$30-50 per lead
    affiliateLink: "https://www.simplii.com/en/credit-cards/cash-back-visa-card.html",
    featured: true
  },
  {
    id: 4,
    name: "Tangerine Money-Back Credit Card",
    issuer: "Tangerine",
    network: "Mastercard",
    category: "No Annual Fee",
    annualFee: 0,
    monthlyFee: null,
    purchaseRate: 19.95,
    cashAdvanceRate: 19.95,
    welcomeBonus: "Earn an extra 10% cash back on up to $1,000 in first 2 months",
    rewards: [
      { category: "2 Chosen Categories", rate: "2% cash back" },
      { category: "3rd Category (with Tangerine Savings)", rate: "2% cash back" },
      { category: "Everything Else", rate: "0.5% cash back" }
    ],
    benefits: [
      "No annual fee",
      "Choose your own 2% categories",
      "Add a 3rd category with Tangerine Savings",
      "Cash back paid monthly (not annually)",
      "World Mastercard benefits (if eligible)"
    ],
    pros: [
      "Choose your own bonus categories",
      "Cash back paid monthly",
      "No annual fee"
    ],
    cons: [
      "Only 0.5% on non-bonus categories",
      "Need Tangerine account for 3rd category",
      "2% cap categories change periodically"
    ],
    creditScore: "Good",
    rating: 4.3,
    color: "#FF6600",
    // AFFILIATE: Sign up at FlexOffers.com or Rates.ca partner → Search "Tangerine" → ~$30-50 per lead
    affiliateLink: "https://www.tangerine.ca/en/products/spending/creditcard/money-back",
    featured: false
  },
  {
    id: 5,
    name: "Scotiabank Gold American Express Card",
    issuer: "Scotiabank",
    network: "Amex",
    category: "Travel Rewards",
    annualFee: 120.00,
    monthlyFee: null,
    purchaseRate: 20.99,
    cashAdvanceRate: 22.99,
    welcomeBonus: "Earn up to 40,000 Scene+ points on first purchases",
    rewards: [
      { category: "Groceries", rate: "5x Scene+ points" },
      { category: "Restaurants & Food Delivery", rate: "5x Scene+ points" },
      { category: "Entertainment", rate: "5x Scene+ points" },
      { category: "Transit & Gas", rate: "3x Scene+ points" },
      { category: "Everything Else", rate: "1x Scene+ point" }
    ],
    benefits: [
      "No foreign transaction fees",
      "Comprehensive travel insurance",
      "Scene+ points for travel, movies & more",
      "Purchase protection & extended warranty",
      "Priority Pass airport lounge access (limited)"
    ],
    pros: [
      "No foreign transaction fees — huge for travel",
      "5x on groceries, dining & entertainment",
      "Excellent travel insurance package"
    ],
    cons: [
      "$120 annual fee",
      "Amex acceptance can be limited",
      "Scene+ redemption value can vary"
    ],
    creditScore: "Good to Excellent",
    rating: 4.6,
    color: "#EC111A",
    // AFFILIATE: Sign up at FintelConnect.com → Apply for "Scotiabank" program → ~$75-99 per approved account
    affiliateLink: "https://www.scotiabank.com/ca/en/personal/credit-cards/american-express/gold-card.html",
    featured: true
  },
  {
    id: 6,
    name: "Scotiabank Passport Visa Infinite Card",
    issuer: "Scotiabank",
    network: "Visa",
    category: "Travel Rewards",
    annualFee: 150.00,
    monthlyFee: null,
    purchaseRate: 20.99,
    cashAdvanceRate: 22.99,
    welcomeBonus: "Earn up to 40,000 Scene+ points + first year fee waiver",
    rewards: [
      { category: "Dining & Entertainment", rate: "3x Scene+ points" },
      { category: "Groceries & Transit", rate: "2x Scene+ points" },
      { category: "Recurring Bills", rate: "2x Scene+ points" },
      { category: "Everything Else", rate: "1x Scene+ point" }
    ],
    benefits: [
      "No foreign transaction fees",
      "6 free Priority Pass airport lounge visits per year",
      "Comprehensive travel medical insurance",
      "Trip cancellation & delay insurance",
      "Visa Infinite concierge & experiences"
    ],
    pros: [
      "Priority Pass lounge access included",
      "No foreign transaction fees",
      "Excellent insurance coverage"
    ],
    cons: [
      "$150 annual fee (often waived year 1)",
      "Earn rates lower than Cobalt/Gold Amex",
      "$60K minimum income requirement"
    ],
    creditScore: "Excellent",
    rating: 4.5,
    color: "#EC111A",
    // AFFILIATE: Sign up at FintelConnect.com → Apply for "Scotiabank" program → ~$75-99 per approved account
    affiliateLink: "https://www.scotiabank.com/ca/en/personal/credit-cards/visa/passport-visa-infinite-card.html",
    featured: false
  },
  {
    id: 7,
    name: "TD Aeroplan Visa Infinite Card",
    issuer: "TD",
    network: "Visa",
    category: "Travel Rewards",
    annualFee: 139.00,
    monthlyFee: null,
    purchaseRate: 20.99,
    cashAdvanceRate: 22.99,
    welcomeBonus: "Earn up to 40,000 Aeroplan points + first year fee rebate",
    rewards: [
      { category: "Air Canada & Aeroplan Partners", rate: "3x Aeroplan points" },
      { category: "Gas, Groceries & Bill Payments", rate: "1.5x Aeroplan points" },
      { category: "Everything Else", rate: "1x Aeroplan point" }
    ],
    benefits: [
      "Earn & redeem Aeroplan points for flights worldwide",
      "Free first checked bag on Air Canada flights",
      "NEXUS application fee rebate ($50)",
      "Comprehensive travel medical & trip insurance",
      "Priority boarding on Air Canada"
    ],
    pros: [
      "Free checked bag on Air Canada saves money",
      "Aeroplan points are incredibly flexible for travel",
      "Strong sign-up bonus"
    ],
    cons: [
      "$139 annual fee",
      "Best value only if you fly Air Canada",
      "Lower everyday earn rates than competitors"
    ],
    creditScore: "Good to Excellent",
    rating: 4.4,
    color: "#008236",
    // AFFILIATE: Sign up at FlexOffers.com → Search "TD Bank" or "TD Canada" → ~$50-80 per approved lead
    affiliateLink: "https://www.td.com/ca/en/personal-banking/products/credit-cards/aeroplan/aeroplan-visa-infinite-card",
    featured: false
  },
  {
    id: 8,
    name: "RBC Avion Visa Infinite Card",
    issuer: "RBC",
    network: "Visa",
    category: "Travel Rewards",
    annualFee: 120.00,
    monthlyFee: null,
    purchaseRate: 20.99,
    cashAdvanceRate: 22.99,
    welcomeBonus: "Earn up to 55,000 Avion points (worth up to $1,100 in travel)",
    rewards: [
      { category: "Travel & Dining", rate: "1x Avion point per $1" },
      { category: "Everything Else", rate: "1x Avion point per $1" }
    ],
    benefits: [
      "Flexible travel redemption at up to 2¢ per point",
      "Transfer points to airline partners (British Airways, Cathay Pacific, etc.)",
      "Comprehensive travel medical insurance",
      "Trip delay, cancellation & lost baggage coverage",
      "Mobile device insurance"
    ],
    pros: [
      "Massive welcome bonus (up to $1,100 value)",
      "Points transfer to multiple airline partners",
      "Excellent travel insurance"
    ],
    cons: [
      "$120 annual fee",
      "Flat 1x earn rate on all purchases",
      "No bonus categories for everyday spending"
    ],
    creditScore: "Good to Excellent",
    rating: 4.3,
    color: "#003168",
    // AFFILIATE: Sign up at FlexOffers.com → Search "RBC" → ~$50-80 per approved lead
    affiliateLink: "https://www.rbcroyalbank.com/credit-cards/travel/rbc-avion-visa-infinite.html",
    featured: false
  },
  {
    id: 9,
    name: "BMO CashBack World Elite Mastercard",
    issuer: "BMO",
    network: "Mastercard",
    category: "Cash Back",
    annualFee: 120.00,
    monthlyFee: null,
    purchaseRate: 20.99,
    cashAdvanceRate: 22.99,
    welcomeBonus: "Earn up to 5% cash back in the first 3 months",
    rewards: [
      { category: "Groceries", rate: "5% cash back" },
      { category: "Transit & Gas", rate: "4% cash back" },
      { category: "Recurring Bills", rate: "3% cash back" },
      { category: "Everything Else", rate: "1% cash back" }
    ],
    benefits: [
      "World Elite Mastercard benefits",
      "Comprehensive travel insurance",
      "Purchase protection & extended warranty",
      "Airport lounge access (Mastercard Travel Pass)",
      "No foreign transaction fee on select purchases"
    ],
    pros: [
      "Highest grocery cash back (5%)",
      "Strong earn rates across categories",
      "World Elite perks included"
    ],
    cons: [
      "$120 annual fee",
      "Spending caps on bonus categories",
      "$80K minimum household income"
    ],
    creditScore: "Excellent",
    rating: 4.4,
    color: "#0075BE",
    // AFFILIATE: Sign up at FlexOffers.com → Search "BMO" → ~$40-70 per approved lead
    affiliateLink: "https://www.bmo.com/en-ca/main/personal/credit-cards/bmo-cashback-world-elite-mastercard/",
    featured: false
  },
  {
    id: 10,
    name: "Scotiabank Momentum Visa Infinite Card",
    issuer: "Scotiabank",
    network: "Visa",
    category: "Cash Back",
    annualFee: 120.00,
    monthlyFee: null,
    purchaseRate: 20.99,
    cashAdvanceRate: 22.99,
    welcomeBonus: "10% cash back on all purchases for the first 3 months (up to $2,000)",
    rewards: [
      { category: "Groceries", rate: "4% cash back" },
      { category: "Recurring Bills & Subscriptions", rate: "4% cash back" },
      { category: "Gas & EV Charging", rate: "2% cash back" },
      { category: "Food Delivery & Transit", rate: "2% cash back" },
      { category: "Everything Else", rate: "1% cash back" }
    ],
    benefits: [
      "Visa Infinite benefits & concierge",
      "Comprehensive travel insurance",
      "Purchase protection & extended warranty",
      "Auto rental collision insurance",
      "Contactless payments & digital wallet"
    ],
    pros: [
      "Amazing 10% introductory cash back offer",
      "4% on groceries and recurring bills",
      "Annual fee often waived first year"
    ],
    cons: [
      "$120 annual fee after first year",
      "Spending caps on bonus categories",
      "$60K minimum income requirement"
    ],
    creditScore: "Good to Excellent",
    rating: 4.4,
    color: "#EC111A",
    // AFFILIATE: Sign up at FintelConnect.com → Apply for "Scotiabank" program → ~$75-99 per approved account
    affiliateLink: "https://www.scotiabank.com/ca/en/personal/credit-cards/visa/momentum-visa-infinite-card.html",
    featured: false
  },
  {
    id: 11,
    name: "Neo Financial Mastercard",
    issuer: "Neo Financial",
    network: "Mastercard",
    category: "No Annual Fee",
    annualFee: 0,
    monthlyFee: null,
    purchaseRate: 19.99,
    cashAdvanceRate: 22.99,
    welcomeBonus: "Earn up to 15% cash back at select partners",
    rewards: [
      { category: "Neo Partners (7,000+ retailers)", rate: "Up to 5% cash back" },
      { category: "Minimum at Partners", rate: "1% cash back guaranteed" },
      { category: "Everything Else", rate: "0.5% cash back" }
    ],
    benefits: [
      "No annual fee",
      "No minimum income requirement",
      "High cash back at partner retailers",
      "Instant approval & digital-first experience",
      "Built-in budgeting tools in Neo app"
    ],
    pros: [
      "Up to 5% at partner stores is huge",
      "No annual fee",
      "Modern digital-first experience"
    ],
    cons: [
      "Low base rate (0.5%) outside partners",
      "Newer brand with limited history",
      "Partner availability varies by area"
    ],
    creditScore: "Fair to Good",
    rating: 4.2,
    color: "#5856D6",
    // AFFILIATE: Sign up at FintelConnect.com → Apply for "Neo Financial" program → ~$30-50 per approved account
    affiliateLink: "https://www.neofinancial.com/credit",
    featured: false
  },
  {
    id: 12,
    name: "CIBC Aventura Visa Infinite Card",
    issuer: "CIBC",
    network: "Visa",
    category: "Travel Rewards",
    annualFee: 139.00,
    monthlyFee: null,
    purchaseRate: 20.49,
    cashAdvanceRate: 22.99,
    welcomeBonus: "Earn up to 45,000 Aventura points + annual travel credit",
    rewards: [
      { category: "Travel & Transit", rate: "3x Aventura points" },
      { category: "Gas & Groceries", rate: "2x Aventura points" },
      { category: "Everything Else", rate: "1x Aventura point" }
    ],
    benefits: [
      "Annual $100 travel credit",
      "4 complimentary airport lounge visits",
      "Comprehensive travel medical insurance",
      "Trip interruption & delay insurance",
      "Visa Infinite benefits"
    ],
    pros: [
      "Annual travel credit offsets the fee",
      "Complimentary lounge visits",
      "Strong welcome bonus"
    ],
    cons: [
      "$139 annual fee",
      "Aventura points less flexible than Aeroplan",
      "$60K income requirement"
    ],
    creditScore: "Good to Excellent",
    rating: 4.3,
    color: "#C41F3E",
    // AFFILIATE: Sign up at FlexOffers.com → Search "CIBC" → ~$50-80 per approved lead
    affiliateLink: "https://www.cibc.com/en/personal-banking/credit-cards/all-credit-cards/aventura-visa-infinite-card.html",
    featured: false
  },
  {
    id: 13,
    name: "Home Trust Preferred Visa Card",
    issuer: "Home Trust",
    network: "Visa",
    category: "No Annual Fee",
    annualFee: 0,
    monthlyFee: null,
    purchaseRate: 19.99,
    cashAdvanceRate: 21.99,
    welcomeBonus: "No welcome bonus",
    rewards: [
      { category: "All Purchases", rate: "1% cash back" }
    ],
    benefits: [
      "No annual fee",
      "No foreign transaction fees",
      "1% cash back on everything including foreign purchases",
      "Ideal for international travelers on a budget",
      "Accepted worldwide with Visa network"
    ],
    pros: [
      "No foreign transaction fees (saves ~2.5%)",
      "No annual fee at all",
      "Simple flat 1% on everything"
    ],
    cons: [
      "No welcome bonus",
      "1% base rate is modest",
      "No bonus categories"
    ],
    creditScore: "Good",
    rating: 4.0,
    color: "#1A1A2E",
    // AFFILIATE: Sign up at FlexOffers.com or LeadScout.ca → Search "Home Trust" → ~$20-40 per approved lead
    affiliateLink: "https://www.hometrust.ca/credit-cards/preferred-visa/",
    featured: false
  },
  {
    id: 14,
    name: "BMO CashBack Mastercard for Students",
    issuer: "BMO",
    network: "Mastercard",
    category: "Student",
    annualFee: 0,
    monthlyFee: null,
    purchaseRate: 20.99,
    cashAdvanceRate: 22.99,
    welcomeBonus: "3% cash back for the first 3 months on all purchases",
    rewards: [
      { category: "Groceries", rate: "3% cash back" },
      { category: "Transit & Recurring Bills", rate: "2% cash back" },
      { category: "Everything Else", rate: "0.5% cash back" }
    ],
    benefits: [
      "No annual fee",
      "No income requirement — built for students",
      "SPC membership included ($10 value)",
      "Builds credit history",
      "Mobile wallet & contactless payments"
    ],
    pros: [
      "No annual fee & no income requirement",
      "Great starter card for building credit",
      "Included SPC membership for student discounts"
    ],
    cons: [
      "Low base cash back rate (0.5%)",
      "Lower credit limit initially",
      "Limited perks vs. premium cards"
    ],
    creditScore: "Fair",
    rating: 4.0,
    color: "#0075BE",
    // AFFILIATE: Sign up at FlexOffers.com → Search "BMO" → ~$20-40 per approved lead
    affiliateLink: "https://www.bmo.com/en-ca/main/personal/credit-cards/bmo-cashback-mastercard-students/",
    featured: false
  },
  {
    id: 15,
    name: "Scotiabank American Express Card",
    issuer: "Scotiabank",
    network: "Amex",
    category: "No Annual Fee",
    annualFee: 0,
    monthlyFee: null,
    purchaseRate: 20.99,
    cashAdvanceRate: 22.99,
    welcomeBonus: "Earn up to 7,500 Scene+ points in the first 3 months",
    rewards: [
      { category: "Groceries & Dining", rate: "3x Scene+ points" },
      { category: "Entertainment & Streaming", rate: "3x Scene+ points" },
      { category: "Daily Transit", rate: "2x Scene+ points" },
      { category: "Everything Else", rate: "1x Scene+ point" }
    ],
    benefits: [
      "No annual fee",
      "Scene+ points for movies, travel & shopping",
      "Amex Offers for statement credits",
      "Purchase protection",
      "Good entry point to Scene+ ecosystem"
    ],
    pros: [
      "No annual fee with Scene+ earning",
      "3x on groceries and dining",
      "Access to Amex Offers & promotions"
    ],
    cons: [
      "Amex acceptance limited at some merchants",
      "No travel insurance included",
      "Lower earning potential vs. paid cards"
    ],
    creditScore: "Good",
    rating: 4.1,
    color: "#EC111A",
    // AFFILIATE: Sign up at FintelConnect.com → Apply for "Scotiabank" program → ~$50-75 per approved account
    affiliateLink: "https://www.scotiabank.com/ca/en/personal/credit-cards/american-express/american-express-card.html",
    featured: false
  }
];

export const categories = ["All", "Cash Back", "Travel Rewards", "No Annual Fee", "Student"];
export const networks = ["All", "Visa", "Mastercard", "Amex"];
export const creditScores = ["All", "Fair", "Good", "Good to Excellent", "Excellent"];

export default cards;
