import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCasualties } from "./reduxTK/features/byCasualtiesSlice";
import { getByDateCasualties } from "./reduxTK/features/byDateSlice";
import DatePicker from "./components/DatePicker";
import ShowAllStatsButton from "./components/ShowAllStatsButton";
import Title from "./components/Title";
import Skeleton from "./components/Skeleton";
import { cardData } from "./data/listOfData.ts";
import LoadingIcon from "./icons/loading.tsx";
import RenderCard from "./components/RenderCard.tsx";
import { generateDateOptions } from "./helpers/GeneratorDataOptions.ts";
import "./App.css";
import Footer from "./components/Footer.tsx";
import UserViews from "./components/UserViews.tsx";

// import SubscribeForm from "./components/Subscription.tsx";

function App() {
  const [selectedStartDate, setSelectedStartDate] = useState<string>("");
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const { allCasualties } = useSelector((store: any) => store.casualties);
  const { byDateCasualties } = useSelector((store: any) => store.byCasualties);
  const displayData = selectedStartDate ? byDateCasualties : allCasualties;

  useEffect(() => {
    //@ts-ignore
    dispatch(getAllCasualties())
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  }, [dispatch]);

  const fetchByDateCasualties = async () => {
    if (selectedStartDate) {
      try {
        // @ts-ignore
        dispatch(getByDateCasualties(selectedStartDate));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching by date casualties:", error);
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchByDateCasualties();
  }, [selectedStartDate, dispatch]);

  const showAllStats = async () => {
    setSelectedStartDate("");
    try {
      // @ts-ignore
      dispatch(getAllCasualties());
    } catch (error) {
      console.error("Error fetching all casualties:", error);
    }
  };

  const dateOptions = generateDateOptions();

  const onChangeStartDate = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStartDate(event.target.value);
  };

  if (loading) {
    return (
      <div className="loading-container">
        <LoadingIcon />
      </div>
    );
  }

  return (
    <>
      <Title displayData={displayData} selectedStartDate={selectedStartDate} />
      <main className="flex max-w-screen-xl md:flex md:flex-row flex-col gap-6 sm:w-[90%] mx-auto my-[2rem] py-4">
        <div className="w-[220px] flex-col flex gap-2.5 items-center md:mb-0 mx-auto">
          <DatePicker
            selectedStartDate={selectedStartDate}
            onChangeStartDate={onChangeStartDate}
            dateOptions={dateOptions}
          />
          {!selectedStartDate ? (
            ""
          ) : (
            <ShowAllStatsButton showAllStats={showAllStats} />
          )}

          <UserViews />
        </div>

        <div className="w-full min-w-0 max-w-6xl px-6">
          <main className="">
            <div className="rounded-2xl">
              <div className="flex flex-col gap-4">
                {Object.entries(cardData).map(([title]) =>
                  loading ? (
                    <Skeleton key={title} title={title} loading={loading} />
                  ) : (
                    RenderCard({ title, displayData })
                  ),
                )}
              </div>
            </div>
          </main>
        </div>
        {/*<SubscribeForm />*/}
      </main>
      <Footer />
    </>
  );
}

export default App;
