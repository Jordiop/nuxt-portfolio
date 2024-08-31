const TOKEN_ENDPOINT = 'https://accounts.spotify.com/api/token'
const NOW_PLAYING_ENDPOINT = 'https://api.spotify.com/v1/me/player/currently-playing'

export default {
  async getAccessToken() {
    const config = useRuntimeConfig();

    const response = await fetch(TOKEN_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        client_id: config.public.spotifyClientID,
        client_secret: config.public.spotifyClientSecret,
        grant_type: 'refresh_token',
        refresh_token: config.public.spotifyRefreshToken,
      }).toString(),
    });

    return response.json();
  },

  async getNowPlaying() {
    const { access_token: accessToken } = await this.getAccessToken();
    return fetch(NOW_PLAYING_ENDPOINT, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
  },
};
