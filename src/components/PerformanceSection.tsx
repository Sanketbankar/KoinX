import { IoMdInformationCircle } from "react-icons/io";
import axios from 'axios';
import { useEffect, useState } from 'react';

const PerformanceSection = ({ url }) => {
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(url);
      setResponse(result.data);
    };

    fetchData();
  }, [url]);

  return { response };
};


function Table() {
  const { response } = PerformanceSection({
    url: `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en`
  });

  const bitcoinData = response && response.length > 0 ? response[0] : {};

 
  return (
    <div className="bg-white mt-5 rounded-lg p-6 h-max">
      <div>
        <div className="text-2xl font-semibold text-[#0F1629]">Performance</div>
        <div className="py-4 mt-2">
          <div className="flex justify-between ">
            <div className="text-start">
              <div className="text-sm text-[#44475B] font-normal p-1">
                Today's Low
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
              ${bitcoinData.low_24h}
              </div>
            </div>
            <div className="w-[500px] h-2">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-full rounded-2xl mt-7"></div>
              <div className="relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-4">
                <svg
                  viewBox="0 0 100 100"
                  className="w-3 fill-current text-black ml-7"
                >
                  <polygon points="0,100 50,0 100,100" />
                </svg>
                <span className="text-[#44475B] text-sm font-normal">
                ${bitcoinData.current_price}
                </span>
              </div>
            </div>
            <div className="text-end">
              <div className="text-sm text-[#44475B] font-normal p-1 ">
                Today's High
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
              ${bitcoinData.high_24h}
              </div>
            </div>
          </div>
          <div className="flex justify-between  mt-5">
            <div className="text-start">
              <div className="text-sm text-[#44475B] font-normal p-1">
                52W Low
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                16,930.22{" "}
              </div>
            </div>
            <div className="w-[500px] h-2">
              <div className="bg-gradient-to-r from-red-500 via-orange-500 to-green-500 h-full rounded-2xl mt-7"></div>
            </div>
            <div className="text-end">
              <div className="text-sm text-[#44475B] font-normal p-1">
                52W High{" "}
              </div>
              <div className="text-[#44475B] text-lg font-medium p-1">
                49,743.83{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="flex items-center">
            <div className="text-[#44475B] font-semibold text-xl">
              Fundamentals
            </div>
            <div className="">
              <IoMdInformationCircle className="text-[#ABB9BF] text-lg ml-2" />
            </div>
          </div>
          <div className="lg:flex mb-8">
            <div className="w-full lg:w-1/2 mr-10 mt-3  ">
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Bitcoin Price
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                ${bitcoinData.current_price}
                </div>
              </div>
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  24h Low / 24h High{" "}
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                ${bitcoinData.low_24h}/${bitcoinData.high_24h}
                </div>
              </div>
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  7d Low / 7d High
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                ${bitcoinData.ath}/${bitcoinData.atl}
                </div>
              </div>
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Trading Volume
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  ${bitcoinData.total_volume}
                </div>
              </div>
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Market Cap Rank
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  #{bitcoinData.market_cap_rank}
                </div>
              </div>
            </div>
            <div className=" w-full lg:w-1/2  lg:ml-10 mt-3">
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Market Cap
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                ${bitcoinData.market_cap}
                </div>
              </div>
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Market Cap Dominance
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                  {bitcoinData.market_cap_change_percentage_24h}%
                </div>
              </div>
              <div className="flex justify-between py-5 border-b-2 border-[#D3E0E6]">
                <div className="text-[#768396] text-sm font-semibold">
                  Volume / Market Cap
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4">
                {bitcoinData.total_volume / bitcoinData.market_cap}
                </div>
              </div>
              <div className="flex justify-between py-3 border-b-2 border-[#D3E0E6] items-center">
                <div className="text-[#768396] text-sm font-semibold ">
                  All-Time High
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4 -p-2">
                  <div className="text-end">
                    ${bitcoinData.ath} <span className="text-red-500">-75.6%</span>
                  </div>
                  <div className="text-xs font-normal">
                    Nov 10, 2021 (about 1 year)
                  </div>
                </div>
              </div>
              <div className="flex justify-between py-3 border-b-2 border-[#D3E0E6] items-center">
                <div className="text-[#768396] text-sm font-semibold">
                  All-Time Low
                </div>
                <div className="text-[#111827] text-sm font-semibold mr-4 -p-2">
                  <div className="text-end">
                    ${bitcoinData.atl} <span className="text-green-500">24729.1%</span>
                  </div>
                  <div className="text-xs font-normal">
                    Jul 06, 2013 (over 9 years)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;
