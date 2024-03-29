import CradsPromo from "../components/CradsPromo"
import Crypto from "../components/Crypto"
import PageHolder from "../components/PageHolder"
import ToggleSection from "../components/ToggleSection"
import TrendingCoins from "../components/TrendingCoins"
import SuggestionSection from "../components/SuggestionSection"


function CoinPage() {
  return (
    <div className="h-full w-full bg-slate-200/40">
      <PageHolder/>

      <div className="w-full lg:flex">
        <div className="lg:w-8/12 lg:ml-14 mx-4">
            <Crypto/>
             <ToggleSection/>
        </div>
        <div className="lg:w-4/12 lg:mr-14 mx-2">
          <CradsPromo/>
          <TrendingCoins/>
        </div>
        
      </div>
        <SuggestionSection/>
    </div>
  )
}

export default CoinPage