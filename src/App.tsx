import React, { useState, useEffect } from "react"
import Charts from "./components/Chart/Charts"
import { ParsedData, ReponseData } from "./interfaces/BlockchainResponse.interface"
import axios from "axios"

function App() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState<ParsedData[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://api.multifarm.fi/jay_flamingo_random_6ix_vegas/get_assets?pg=1&tvl_min=50000&sort=tvlStaked&sort_order=desc&farms_tvl_staked_gte=10000000"
      )
      let removeInfinity = data.replaceAll("Infinity", "null")
      let parsedResult = JSON.parse(removeInfinity)

      let parsedData: ParsedData[] = parsedResult.data.map((item: ReponseData) => ({
        name: item.asset,
        assetId: item.assetId,
        type: "area",
        aprYearly: item.aprYearly,
        tvl: item.tvlFarm + item.tvlStaked,
      }))
      setData(parsedData)
      setLoading(false)
    }
    fetchData()
  }, [])

  return (
    <div>
      {loading ? (
        <div style={{ height: 380 }}>
          <div style={{ color: "white", fontSize: "20px" }}>Loading....</div>
        </div>
      ) : (
        <Charts data={data} />
      )}
    </div>
  )
}

export default App
