"use client";

import { api } from "@/app/api/api";
import { useQuery } from "@tanstack/react-query";
import { BarChart2Icon, Building, Waypoints } from "lucide-react";

interface ChildrenProps {
  paramToSearch: string;
}

interface StockData {
  currency: string;
  twoHundredDayAverage: number;
  twoHundredDayAverageChange: number;
  twoHundredDayAverageChangePercent: number;
  marketCap: number;
  shortName: string;
  longName: string;
  regularMarketChange: number;
  regularMarketChangePercent: number;
  regularMarketTime: string;
  regularMarketPrice: number;
  regularMarketDayHigh: number;
  regularMarketDayRange: string;
  regularMarketDayLow: number;
  regularMarketVolume: number;
  regularMarketPreviousClose: number;
  regularMarketOpen: number;
  averageDailyVolume3Month: number;
  averageDailyVolume10Day: number;
  fiftyTwoWeekLowChange: number;
  fiftyTwoWeekRange: string;
  fiftyTwoWeekHighChange: number;
  fiftyTwoWeekHighChangePercent: number;
  fiftyTwoWeekLow: number;
  fiftyTwoWeekHigh: number;
  symbol: string;
  priceEarnings: number;
  earningsPerShare: number;
  logourl: string;
}

interface StockAPIResponse {
  results: StockData[];
  requestedAt: string;
  took: string;
}

export default function Children({ paramToSearch }: ChildrenProps) {
  const getDataStock = async () => {
    try {
      const { data } = await api.get<StockAPIResponse>(
        `quote/${paramToSearch}?token=${process.env.secretGet}`
      );
      return data.results[0];
    } catch (err) {
      console.log(err);
    }
  };

  const { data } = useQuery({
    queryKey: ["stock-data"],
    queryFn: getDataStock,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    staleTime: 1 * 60000 * 40,
  });
//   console.log("🚀 ~ Children ~ data:", data);

  return (
    <main>
    <header className="bg-[#293038] w-full h-[8.5rem] flex justify-center">
      <main className="flex justify-center items-center gap-20">
        <div className="flex gap-6 items-center">
          <div className="bg-white w-[6.25rem] h-[6.25rem] flex justify-center items-center rounded-xl relative mb-[-5rem]">
            <img className="w-[80%]" src={`${data?.logourl}`} />
          </div>
          <section>
            <div>
              <h1 className="text-white font-bold text-3xl">{data?.symbol}</h1>
            </div>
            <div>
              <h2 className="text-white font-extrabold text-xs">
                {data?.longName}
              </h2>
            </div>
          </section>
        </div>
        <div className="flex gap-6">
          <div className="flex flex-col items-center">
            <BarChart2Icon />
            <h2 className="text-lg text-white font-extrabold">Indicadores</h2>
          </div>
          <div className="flex flex-col items-center">
            <Waypoints />
            <h2 className="text-lg text-white font-extrabold">Cotação</h2>
          </div>
          <div className="flex flex-col items-center">
            <Building />
            <h2 className="text-lg text-white font-extrabold">Empresa</h2>
          </div>
        </div>
      </main>
    </header>

    </main>
  );
}
