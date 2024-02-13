"use client";

import React, { useState, useEffect } from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { ListItemButton, Typography } from "@mui/joy";
import Chip from "@mui/joy/Chip";

const UrlList = () => {
  const JSONURL = "https://eungangku.github.io/get-click-points/point_links.json";

  // State for storing the list of items
  const [items, setItems] = useState([]);

  // Function for fetching data from the URL
  const fetchData = async () => {
    try {
      const response = await fetch(JSONURL);
      // const response = await fetch(JSONURL, requestOptions);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const jsonData = JSON.parse(data);
      jsonData.reverse();
      setItems(jsonData); // Or, if the data is nested, use data.rows or similar
    } catch (error) {
      console.error("There was a problem fetching the data", error);
    }
  };

  // useEffect to call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []); // The empty array means this effect runs once on mount

  return (
    <List size="md" sx={{ maxWidth: "700px" }}>
      {items.map((item, index) => {
        let eventId = item.match(/eventId=([^%&]*)/)[1];
        let lastFourChars = eventId.slice(-4);
        return (
          <ListItem key={index} sx={{ borderBottom: "1px solid lightgray" }}>
            <ListItemButton component="a" target="_blank" href={item} variant="plain" sx={{ p: 1 }}>
              <Chip color="primary" disabled={false} size="lg" variant="soft">
                {lastFourChars}
              </Chip>
              <Typography noWrap>{item}</Typography>
            </ListItemButton>
          </ListItem> // Replace `item.name` with the actual property you want to display
        );
      })}
    </List>
  );
};

export default UrlList;
