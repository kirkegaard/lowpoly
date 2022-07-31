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

const ErrorRequest = () => (
  <span className="text-sm italic opacity-75">
    Could not fetch data from LastFM
  </span>
);

const ErrorNoLatestArtists = () => (
  <span className="text-sm italic opacity-75">No latest artists found</span>
);

export const LastFM = ({ username, limit, ...rest }) => {
  const { data, error } = useSWR(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&period=7day&limit=${limit}&api_key=${apikey}&format=json`
  );

  if (error) return <ErrorRequest />;
  if (!data) return <Spinner />;

  const latestArtists = data.topartists.artist;

  if (!latestArtists || !latestArtists.length) return <ErrorNoLatestArtists />;

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
