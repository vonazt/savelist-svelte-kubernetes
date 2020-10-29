export type LoggedInStore = {
  loggedIn: boolean;
};


export type ExternalUrls = {
  spotify: string;
};

export type SpotifyImage = {
  height: number;
  url: string;
  width: number;
};

export type SpotifyOwner = {
  display_name: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  type: string;
  uri: string;
};

export type SpotifyPlaylistTracks = {
  href: string;
  total: number;
};


export type SpotifyPlaylist = {
  collaborative: boolean;
  description: string;
  external_urls: ExternalUrls;
  href: string;
  id: string;
  images: SpotifyImage[];
  name: string;
  owner: SpotifyOwner;
  primary_color: string;
  public: boolean;
  snapshot_id: string;
  tracks: SpotifyPlaylistTracks;
  type: string;
  uri: string;
};



export type SavedPlaylist = {
  savePlaylist: string;
};
