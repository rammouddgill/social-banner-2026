"use client"; // This is a client component
import Banner from "@/Components/Banner";
import { analytics } from "@/config/Firebase";
import { logEvent } from "firebase/analytics";
import React, { useEffect, useState } from "react";
import Script from "next/script";

export default function Home() {
  const [res, setRes] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // useEffect(() => {
  //   logEvent(analytics, "notification_received");
  // }, []);

  useEffect(() => {
    setRes([]);
    fetchRequest();
    setLoading(true);
    // eslint-disable-next-line
  }, [selectedOption]);

  const fetchRequest = async () => {
    try {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?page=${page}&query=${searchTerm}/${selectedOption}&per_page=30&client_id=bCsUFvPO3RMfVgu4xlz7KdTZVFX6CNsDstU5Tn8mWJk`
      );

      const dataJ = await data.json();
      const result = dataJ.results;

      setRes((prevItems) => [...prevItems, ...result]);
      setPage((prevPage) => prevPage + 1);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <div>
        <Banner
          fetchRequest={fetchRequest}
          res={res}
          setRes={setRes}
          setPage={setPage}
          setSearchTerm={setSearchTerm}
          searchTerm={searchTerm}
          setSelectedOption={setSelectedOption}
          selectedOption={selectedOption}
          page={page}
          loading={loading}
          error={error}
        />
      </div>
    </>
  );
}
