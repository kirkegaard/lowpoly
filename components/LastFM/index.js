import useSWR from "swr";
import { Spinner } from "../UI/Spinner";

const apikey = process.env.NEXT_PUBLIC_LASTFM_APIKEY;

const Artist = ({ name, title, href }) => {
  return (
    <a title={title} href={href}>
      {name}
    </a>
  );
};

export const LastFM = ({ username, limit, ...rest }) => {
  const { data, error } = useSWR(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&period=7day&limit=${limit}&api_key=${apikey}&format=json`
  );

  if (error) return <>Could not fetch LastFM</>;
  if (!data) return <Spinner />;
  if (!data.topartists.artist) return <>No latest artists found</>;

  const latestArtists = data.topartists.artist;
  const latest = latestArtists
    .map((item, index) => (
      <Artist
        key={index}
        name={item.name}
        title={`Played: ${item.playcount}`}
        href={item.url}
      />
    ))
    .reduce((prev, curr) => {
      const sep = curr.key === `${latestArtists.length - 1}` ? " & " : ", ";
      return [prev, sep, curr];
    });

  return <>{latest}</>;
};
