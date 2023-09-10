import { useEffect, useState } from "react";
import axios from "axios";
import views from "../assets/views.svg";
import Preloader from "../helpers/Preloader.tsx";

interface ViewData {
  total: number;
}

const dateToday: string = new Date().toISOString();

function UserViews() {
  const [data, setData] = useState<ViewData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const originalUrl = import.meta.env.VITE_VERCEL_URL;
        const params = {
          environment: "production",
          filter: "{}",
          from: "2023-09-02T00:00:00.000Z",
          projectId: "russiancasualties",
          to: dateToday,
        };

        const token = import.meta.env.VITE_VERCEL_TOKEN;
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const response = await axios.get(originalUrl, {
          params,
          headers,
        });

        if (response.status === 200) {
          const responseData = response.data;

          setData(responseData);
        } else {
          console.error("Failed to fetch data. Status code:", response.status);
        }
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <span className="flex gap-1">
      <img src={views} alt="eye icon" />
      {data ? data?.total : <Preloader />}
    </span>
  );
}

export default UserViews;
