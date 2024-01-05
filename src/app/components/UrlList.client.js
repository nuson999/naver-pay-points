"use client";

import React, { useState, useEffect } from "react";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import { ListItemButton } from "@mui/joy";
import { Link } from "@mui/icons-material";

const UrlList = () => {
  const JSONURL = "https://raw.githubusercontent.com/eungangku/get-click-points/master/point_links.json";
  // const JSONURL = "/proxy/eungangku/get-click-points/master/point_links.json";
  // State for storing the list of items
  const [items, setItems] = useState([]);

  // Function for fetching data from the URL
  const fetchData = async () => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Authorization", "Bearer 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");

      const requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      const response = await fetch(JSONURL, requestOptions);
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
    <List size="md">
      {items.map((item, index) => (
        <ListItem key={index} sx={{ borderBottom: "1px solid lightgray" }}>
          <ListItemButton component="a" target="_blank" href={item} variant="plain" sx={{ p: 1, overflow: "hidden", maxWidth: "700px" }}>
            <ListItemDecorator>
              <Link />
            </ListItemDecorator>
            {item}
          </ListItemButton>
        </ListItem> // Replace `item.name` with the actual property you want to display
      ))}
    </List>
  );
};

export default UrlList;
