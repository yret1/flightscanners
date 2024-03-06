

import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Authenticate and get the access token
    const tokenResponse = await axios.post("https://test.api.amadeus.com/v1/security/oauth2/token", {
      client_id: process.env.AMADEUS_CLIENT_KEY || "ZgABglQAdarxCWUw3f9PAYqIg17AYxmM",
      client_secret: process.env.AMADEUS_CLIENT_SECRET || "jT1bSQM0nGDu8NYJ",
      grant_type: "client_credentials"
    });

    const accessToken = tokenResponse.data.access_token;

    // Fetch recommended locations using the access token
    const recommendedResponse = await axios.get("https://test.api.amadeus.com/v1/reference-data/recommended-locations?cityCodes=PAR&travelerCountryCode=FR", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });

    const recommendedData = recommendedResponse.data;

    // Return the fetched data
    res.status(200).json(recommendedData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}