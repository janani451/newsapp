// import axios from 'axios';
// import React, { useEffect, useState } from 'react'


// export const GeneralContext = React.createContext();

// const GeneralContextProvider = ({children}) => {

//     const [topNews, setTopNews] = useState([])

//     const [businessNews, setBusinessNews] = useState([]);
//     const [technologyNews, setTechnologyNews] = useState([]);
//     const [politicsNews, setPoliticsNews] = useState([]);

//     useEffect(() => { 
//         fetchTopNews() 
//         fetchBusinessNews()
//         fetchPoliticsNews()
//         fetchTechnologyNews()
//       }, [])
    
//       const fetchTopNews = async () => {
//         try {
//           const response = await axios.get("https://newsapi.org/v2/everything?q=popular&apiKey=37306aca596542f0a8402978de3d4224");
//           setTopNews(response.data.articles);
//         } catch (error) {
//           console.error(error);
//         }
//       }

//       const fetchBusinessNews = async () => {
//         try {
//           const response = await axios.get("https://newsapi.org/v2/everything?q=business&apiKey=37306aca596542f0a8402978de3d4224");
//           setBusinessNews(response.data.articles);
//         } catch (error) {
//           console.error(error);
//         }
//       }
//       const fetchPoliticsNews = async () => {
//         try {
//           const response = await axios.get("https://newsapi.org/v2/everything?q=politics&apiKey=37306aca596542f0a8402978de3d4224");
//           setPoliticsNews(response.data.articles);
//         } catch (error) {
//           console.error(error);
//         }
//       }
//       const fetchTechnologyNews = async () => {
//         try {
//           const response = await axios.get("https://newsapi.org/v2/everything?q=technology&apiKey=37306aca596542f0a8402978de3d4224");
//           setTechnologyNews(response.data.articles);
//         } catch (error) {
//           console.error(error);
//         }
//       }

    
//   return (
//     <GeneralContext.Provider value={{topNews, businessNews, technologyNews, politicsNews}} >{children}</GeneralContext.Provider>
//   )
// }

// export default GeneralContextProvider

import axios from "axios";
import React, { useEffect, useState } from "react";

export const GeneralContext = React.createContext();

const GeneralContextProvider = ({ children }) => {
  const [topNews, setTopNews] = useState([]);
  const [businessNews, setBusinessNews] = useState([]);
  const [technologyNews, setTechnologyNews] = useState([]);
  const [politicsNews, setPoliticsNews] = useState([]);

  // Store API Key securely in an environment variable (.env)
  const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {
    const fetchAllNews = async () => {
      try {
        const [top, business, politics, tech] = await Promise.all([
          axios.get(
            `https://newsapi.org/v2/everything?q=popular&apiKey=bd6854d7f7af43a0a68639cc1ec9e016`
          ),
          axios.get(
            `https://newsapi.org/v2/everything?q=business&apiKey=bd6854d7f7af43a0a68639cc1ec9e016`
          ),
          axios.get(
            `https://newsapi.org/v2/everything?q=politics&apiKey=bd6854d7f7af43a0a68639cc1ec9e016`
          ),
          axios.get(
            `https://newsapi.org/v2/everything?q=technology&apiKey=bd6854d7f7af43a0a68639cc1ec9e016`
          ),
        ]);

        setTopNews(top.data.articles);
        setBusinessNews(business.data.articles);
        setPoliticsNews(politics.data.articles);
        setTechnologyNews(tech.data.articles);
      } catch (error) {
        console.error(
          "Error fetching news:",
          error.response ? error.response.data : error.message
        );
      }
    };

    fetchAllNews();
  }, [API_KEY]); // Depend on API_KEY in case it changes

  return (
    <GeneralContext.Provider
      value={{ topNews, businessNews, technologyNews, politicsNews }}
    >
      {children}
    </GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
