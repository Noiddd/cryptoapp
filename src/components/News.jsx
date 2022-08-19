import React from "react";

import { Select, Typography, Row, Colm, Avatar, Card } from "antd";
import moment from "moment";

import { useGetCryptoNewsQuery } from "../services/cryptoNewsApi";
import { ConsoleSqlOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;
const { Options } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery({
    newsCategory: "Cryptocurrency",
    count: simplified ? 10 : 100,
  });

  console.log(cryptoNews);

  return <div>News</div>;
};

export default News;
