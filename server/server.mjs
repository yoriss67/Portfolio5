

// server.js
// const express = require('express');
// const xml2js = require('xml2js');
// const fetch = require('node-fetch');
// const cors = require('cors');

// 新しいESモジュールインポート
import fetch from 'node-fetch';
import express from 'express';
import xml2js from 'xml2js';
import cors from 'cors';
import axios from 'axios'; 

const app = express();
const parser = new xml2js.Parser();

app.use(cors());
app.use(express.json());

app.get('/latest-articles', async (req, res) => {
  try {
    const response = await fetch('https://note.com/yoriss_b0607/rss');
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    const text = await response.text();
    parser.parseString(text, (err, result) => {
      if (err) {
        console.error('XML parsing error:', err);
        res.status(500).send(err);
        return;
      }
      const items = result.rss.channel[0].item.slice(0, 4); // 最新の4つの記事だけを取得

      const articles = items.map((item) => {
        return {
          title: item.title && item.title[0] ? item.title[0] : null,
          link: item.link && item.link[0] ? item.link[0] : null,
          description: item.description && item.description[0] ? item.description[0] : null,
          thumbnail: item['media:thumbnail'] && item['media:thumbnail'][0] ? item['media:thumbnail'][0] : null,
          pubDate: item.pubDate && item.pubDate[0] ? item.pubDate[0] : null,
        };
      });

      res.json(articles);
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

// // New endpoint for translation
// app.post('/translate', async (req, res) => {
//   try {
//     const { text, targetLang } = req.body;
//     const response = await axios.post('https://libretranslate.com/translate', {
//       q: text,
//       source: 'ja',  // Assuming source language is Japanese
//       target: targetLang
//     });
//     res.json({ translatedText: response.data.translatedText });
//   } catch (error) {
//     console.error('Translation error:', error.message);
//     res.status(500).send(error.message);
//   }
// });

app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});
