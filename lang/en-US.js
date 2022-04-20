export default {
  actions: {
    open: 'Open',
    close: 'Close',
  },
  header: {
    careers: {
      label: 'Blog',
      url: '#',
    },
    docs: {
      label: 'Potion Unlock',
      url: '#',
    },
    launch_app: {
      label: 'Join the Community',
      url: '#',
    },
  },
  hero: {
    title: "Democratise Risk Management",
    description: "Potion protects you from risk in the DeFi ecosystem, making it sustainable. It’s easy to access, open and transparent.",
    highlights: [
      "Built for the Community, Owned by the Community"
    ],
    lp: {
      label: 'Become LP',
      url: '#',
    },
    buyer: {
      label: 'Protect my funds',
      url: '#',
    },
    discover: {
      label: 'Discover more',
      url: '#content-wrap',
    },
  },
  mission: {
    label: 'Mission',
    title:
      'We facilitate DeFi adoption by providing Automated Risk Management on chain',
    description: 'Potion makes the crypto market more secure offering risk products that are safe and sustainable for both buyers and sellers.',
  },
  buyer: {
    label: 'Potion Buyers',
    title: 'When price volatility is high, you need to get the right tools',
    description:
      'Potion provides protection for your assets.\n Fully collateralised on chain, public and transparent.',
    features: {
      insurance: {
        title: 'Insurance on Price',
      },
      savings: {
        title: 'Gas Saving Features',
      },
      token: {
        title: 'Represented by an ERC20 token',
      },
    },
  },
  lp: {
    label: 'Potion Liquidity Providers',
    title: 'When you’re selling protection, you need to protect yourself first',
    description:
      'Potion allows you to earn attractive yields by selling insurance in a way that statistically safeguards you from ruin.',
    features: {
      growth: {
        title: 'Sustainable Growth',
      },
      risk_management: {
        title: 'Automated Risk Management',
      },
      efficiency: {
        title: 'Capital Efficient',
      },
    },
  },
  sc: {
    label: 'Under The Hood',
    title: 'A next-gen automated market maker for risk instruments',
    description:
      'Potion creates an automated market for risk trading. Pricing is dynamically responsive to risk, using Kelly optimal bonding curves, for the safety of all its participants.',
    consumer: {
      title: 'Liquidity Consumers',
      description:
        'Buyers can reduce their risk exposure by purchasing fully collateralised insurance contracts.',
      input: 'Premium',
      output: 'Risk Off',
    },
    provider: {
      title: 'Liquidity Providers',
      description:
        'LPs can provide liquidity and earn sustainable yield by selling insurance contracts and collecting premiums.',
      input: 'Risk On',
      output: 'Alpha',
    },
    black_box: {
      title: 'AMM Smart Contract',
      description: 'Automated Market Maker',
      curve: 'Bonding Curve',
      x_axis: 'Pool Utilization',
      y_axis: 'Insurance Premium'
    },
  },
  bc: {
    label: 'Bonding What?',
    title: 'A Bonding Curve to rule them all',
    description:
      'Potion is pioneering a new type of bonding curve that derives from the Kelly Criterion. Liquidity providers can easily and automatically trade according to the Kelly Criterion, maximising survival and long-term capital growth.',
    curves: {
      asp: 'Automated Swap Pricer Bonding Curve',
      arp: 'Automated Risk Pricer Bonding Curve',
    },
    white_paper: {
      label: 'Read our Whitepaper',
      url: 'https://caring-bee-56a.notion.site/The-Kelly-Machine-AMM-6d1966c2dfc04c64bac1beacfa53f282',
    },
  },
  kelly: {
    label: 'What’s in it for Buyers?',
    title: 'Best Price Execution',
    description:
      'Potion uses a decentralized order book approach, which allows each LP to specify their independent pricing. Potion’s router automatically finds the best price for your insurance available in the network.',
    flow_graph: {
      pools: {
        title: "Distributed Liquidity",
      },
      curve: {
        title: "Market aggregate bonding curve computed by router",
        y_axis: "Premium",
        x_axis: "Utilization (VAR)"
      },
      router: {
        distribution: "Distribute order to cheapest pools",
        title: "Router",
        premium: "Get lowest combined premium",
      },
      demand: {
        title: "Demand",
      }
    },
    info: {
      kelly: {
        title: 'Kelly',
        details: [
          'Any information model',
          'Ant payoff structure',
          'Price Curve = F(VaR)',
        ],
      },
      bsm: {
        title: 'BSM',
        details: [
          'Constrained to Normal Distribution',
          'Call & Put only',
          'Ignores VaR',
        ],
      },
    },
  },
  analytics: {
    label: 'Potion Analytics',
    title: 'Design your Alpha with Potion Analytics',
    description:
      'Potion Analytics is a comprehensive suite of interactive tools for bonding curve analytics. With it LPs can design, backtest and cluster their own curves to reflect their unique risk/reward appetite.',
    kelly_curve: {
      label: 'Create your own Kelly Curve',
      url: 'https://kelly.finance/',
    },
  },
  unlock: {
    label: 'Potion Unlock',
    title: 'Community is the Key that unlocks Potion.',
    descriptions: [
      "You can join the Potion project by playing Potion Unlock, an on-chain social game. Potion Unlock is an aggressive decentralization approach that transfers full control of the project to the community from day 1.",
    ],
    flow_graph: {
      devs: {
        title: "Devs",
      },
      ipfs: {
        title: "Stored encrypted in Ipfs",
        features: [
          {
            title: "Smart Contract Code"
          },
          {
            title: "Front End Code"
          },
          {
            title: "Financial Analytics"
          },
          {
            title: "Audit Reports + Testing + Documentation"
          }
        ]
      },
      encrypt: {
        title: "Password split & securely distributed through 10,000 NFT"
      },
      cooperation: {
        title: "Cooperation and consensus needed to open source code"
      }
    },
    potion_unlock: {
      label: 'Potion Unlock',
      url: 'https://www.potion.auction/'
    }
  },
  faq: {
    label: 'FAQ',
    title: 'Lorem Ipsum dolor sit amet.',
    questions: {
      how_potion_works: 'How does Potion Insurance work?',
      lp_earnings: 'How much should I expect to make as an LP?',
      how_is_potion_different:
        'How is Potion different to other Options Protocols?',
      who_owns_potion: 'Who owns Potion?',
      insurance_cost: 'How much does insurance cost?',
      who_is_kelly: 'Who is Kelly?',
    },
    answers: {
      how_potion_works: '',
      lp_earnings: '',
      how_is_potion_different: '',
      who_owns_potion: '',
      insurance_cost: '',
      who_is_kelly: '',
    },
  },
  investors: {
    title: 'Our Backers',
  },
  footer: {
    terms_conditions: 'Terms & Conditions',
    privacy_policy: 'GDPR Policy',
    hq: {
      street: 'PUT YOUR ADDRESS HERE',
      location: 'PUT YOUR LOCATION HERE',
      cif: 'PUT YOUR CIF HERE',
    },
    discord: {
      label: 'Discord',
      url: 'PUT YOUR DISCORD URL HERE',
    },
    twitter: {
      label: 'Twitter',
      url: 'PUT YOUR TWITTER URL HERE',
    },
    medium: {
      label: 'Medium',
      url: 'PUT YOUR MEDIUM URL HERE',
    },
  },
}
