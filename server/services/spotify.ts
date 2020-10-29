import { repository } from '../repositories';
import { ISpotifyTrack, SpotifyPlaylist, FormattedPlaylist } from '../models';
import { Parser } from 'json2csv';

export const savePlaylist = async (
  id: string,
  accessToken: string,
): Promise<string> => {
  console.log(`Fetching playlist tracks...`);
  console.time(`Fetched playlist tracks in`);
  const playlistTracks = await repository.listPlaylistTracksRecursive(
    `https://api.spotify.com/v1/playlists/${id}/tracks`,
    accessToken,
    [],
  );
  console.timeEnd(`Fetched playlist tracks in`);
  const formattedTracks = playlistTracks.map(
    ({ track: { name, album, artists, id } }: ISpotifyTrack) => ({
      track: name,
      album: album.name,
      artists: artists.map(({ name }) => name),
      spotifyId: id,
    }),
  );

  const json2csvParser = new Parser();
  const playlistCsv = json2csvParser.parse(
    formattedTracks.map((playlist: FormattedPlaylist) => ({
      ...playlist,
      artists: playlist.artists.join(`, `),
    })),
  );

  const buff = Buffer.from(playlistCsv);
  const buffed = buff.toString(`base64`);
  return buffed;
};

export const listCollectiblesPlaylist = repository.listCollectiblesPlaylist;

export const listUserPlaylists = async (
  accessToken: string,
): Promise<SpotifyPlaylist[]> => {
  console.log(`Fetching user's playlists...`);
  console.time(`Fetched playlists in`);
  const playlists = await repository.listUserPlaylistsRecursive(
    accessToken,
    `https://api.spotify.com/v1/me/playlists`,
    [],
  );
  console.timeEnd(`Fetched playlists in`);
  return playlists;
};
