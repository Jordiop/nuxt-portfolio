const clientID = process.env.SPOTIFY_CLIENT_ID
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET
const refreshToken = process.env.SPOTIFY_REFRESH_TOKEN

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