const clientID = 'f94320e1a2e043c18cf80fc36733cfd2'
const clientSecret = 'a4982d11ae714068999321afee3f1d1f'
const refreshToken = 'AQC3TAO2ZuTISf9jWb1-sVWtWylwQt1C5mYicpXYoOHuMux4e-ShFPZUNgiL4RbmKeQj6pTD0lMVWZiJS2I97oW2Ff-fCO5hhP_rbql27a7Yk66PP6WL2IjvpNDrTFn5334'

const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'

// This gets the access token from Spotify to connect to the API using provided refresh token.
const getAccessToken = async () => {
  const response = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      client_id: clientID,
      client_secret: clientSecret,
      grant_type: 'refresh_token',
      refresh_token: refreshToken
    }).toString()
  })
  return response.json()
}

// Get the current now playing track of given user access token.
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'
export const getNowPlaying = async () => {
  const { access_token: accessToken } = await getAccessToken()
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
  })
}