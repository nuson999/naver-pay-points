"use client";

import React, { useState, useEffect } from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { ListItemButton, Typography } from "@mui/joy";
import Chip from "@mui/joy/Chip";

const UrlList = () => {
  const JSONURL = "https://nuson999.github.io/get-click-points/point_links.json";

  // State for storing the list of items
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newLinksLength, setNewLinksLength] = useState(0);

  // Function for fetching data from the URL
  const fetchData = async () => {
    try {
      const response = await fetch(JSONURL);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      const jsonData = JSON.parse(data);
      setNewLinksLength(jsonData[0]);
      // remove the first element from the array
      jsonData.shift();
      jsonData.reverse();
      setItems(jsonData); // Or, if the data is nested, use data.rows or similar
    } catch (error) {
      console.error("There was a problem fetching the data", error);
    }
  };

  // useEffect to call fetchData on component mount
  useEffect(() => {
    fetchData();
    setIsLoading(false);
  }, []); // The empty array means this effect runs once on mount

  return (
    <List size="md" sx={{ maxWidth: "700px" }}>
      {isLoading ? (
        <p>Loading...</p> // Replace this with your actual loading indicator
      ) : (
        items.map((item, index) => {
          let eventId = item.match(/eventId=([^%&]*)/)[1];
          let chipContent = index < newLinksLength ? "New" : eventId.slice(-4);
          let chipColor = index < newLinksLength ? "danger" : "primary"; // Set chip color based on index
          let textColor = item.includes("shoppinglive") ? "#7d1212" : "inherit"; // Check if item contains 'shoppinglive' and set text color accordingly
          return (
            <ListItem key={index} sx={{ borderBottom: "1px solid lightgray" }}>
              <ListItemButton component="a" target="_blank" href={item} variant="plain" sx={{ p: 1 }}>
                <Chip color={chipColor} disabled={false} size="lg" variant="soft">
                  {chipContent}
                </Chip>
                <Typography noWrap sx={{ color: textColor }}>
                  {item}
                </Typography>
              </ListItemButton>
            </ListItem>
          );
        })
      )}
    </List>
  );
};

export default UrlList;
