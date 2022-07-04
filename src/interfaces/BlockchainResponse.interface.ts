interface HistoryData {
  date: Date
  value: number
}
interface SelectedFarm {
  _locks: string[]
  active: true
  blockchain: string
  dateAdded: Date
  dateUpdated: Date
  farmId: string
  farmName: string
  farmType: string
  lastFullUpdate: Date
  riskLevel: string
  scam: false
  scamInfo: string
  tvlChange24h: string
  tvlChange24hValue: number
  tvlStaked: number
  tvlStakedHistory: HistoryData[]
}

export interface ParsedData {
  name: string
  assetId: string
  aprYearly: number
  tvl: number
}

export interface BlockchainResponse {
  data: ReponseData
}
export interface ReponseData {
  active: true
  antiWhale: string | null
  aprDaily: number
  aprWeekly: number
  aprYearly: number
  apyYearly: number
  asset: string
  assetAddress: string | null
  assetId: string
  assetLockup: false
  assetPopupMessage: string | null
  assetPrice: number
  auditInfo: string
  blockchain: string
  category: string | null
  collateralLockPeriod: string | null
  d_active_reason: string | null
  dateAdded: Date
  dateEnding: string | null
  dateStarted: string | null
  dateUpdated: Date
  daysRemaining: string | null
  depositFee: string | null
  exchangeName: string | null
  exchangePicture: string | null
  exchangeUrl: string | null
  exchangeVersion: string | null
  farm: string
  farmId: string
  farmImage: string | null
  farmName: string
  farmType: string | null
  feeAprYearly: number
  harvestLockup: string | null
  harvestLockupInfo: string | null
  impermanentLoss: string | null
  impermanentLoss3numberd: string | null
  info: string | null
  investmentLink: string | null
  manuallyCalculatedAPR: false
  maxPoolCap: string | null
  multiplier: string | null
  nativeToken: string | null
  nativeTokenAddress: string | null
  nativeTokenInvestLink: string | null
  nativeTokenMarketCap: number
  nativeTokenPrice: number
  new_asset: true
  otherFees: string | null
  otherPoolEconomicsInfo: string | null
  pid: number
  poolAlreadyFilled: false
  priceCorrelation_3numberd: string | null
  rewardTokenA: string | null
  rewardTokenAAddress: string | null
  rewardTokenAAprYearly: number
  rewardTokenAAprYearlyMaxBoosted: number
  rewardTokenAPrice: number
  rewardTokenAWeeklyAmount: number
  rewardTokenAWeeklyDollarAmount: number
  rewardTokenB: string | null
  rewardTokenBAddress: string | null
  rewardTokenBAprYearly: number
  rewardTokenBAprYearlyMaxBoosted: number
  rewardTokenBPrice: number
  rewardTokenBWeeklyAmount: number
  rewardTokenBWeeklyDollarAmount: number
  scam: false
  scamInfo: string | null
  selected_farm: SelectedFarm[]
  stakingAddress: string | null
  stakingLink: string
  status: string
  tokenA: string | null
  tokenAAddress: string | null
  tokenABacking: number
  tokenAHolders: number
  tokenAHoldersHistory: HistoryData[]
  tokenAPicture: string | null
  tokenAPrice: number
  tokenAPriceHistory: HistoryData[]
  tokenB: string | null
  tokenBAddress: string | null
  tokenBBacking: number
  tokenBHolders: number
  tokenBPicture: string | null
  tokenBPrice: number
  tokenC: string | null
  tokenCAddress: string | null
  tokenCBacking: number
  tokenCHolders: number
  tokenCPicture: string | null
  tokenCPrice: number
  tokenD: string | null
  tokenDAddress: string | null
  tokenDBacking: number
  tokenDHolders: number
  tokenDPicture: string | null
  tokenDPrice: number
  tokenE: string | null
  tokenEAddress: string | null
  tokenEBacking: number
  tokenEHolders: number
  tokenEPicture: string | null
  tokenEPrice: number
  transferTax: string | null
  transferTaxInfo: string | null
  tvlChange24h: string
  tvlChange24hValue: number
  tvlExchange: number
  tvlFarm: number
  tvlStaked: number
  underlyingFarm: string | null
  url: string | null
  vaultAddress: string | null
  volume_24h: string | null
  weight: string | null
  withdrawalFee: string | null
  yearlyTokenRewardPool: number
  yieldType: string
}
