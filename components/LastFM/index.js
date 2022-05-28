import useSWR from "swr";
import { Spinner } from "../UI/Spinner";

const apikey = process.env.NEXT_PUBLIC_LASTFM_APIKEY;

const Artist = ({ name, title, href }) => {
  return (
    <a
      className="no-underline decoration-pink-500 decoration-4 hover:underline"
      title={title}
      href={href}
    >
      {name}
    </a>
  );
};

export const LastFM = ({ username, limit, ...rest }) => {
  const { data, error } = useSWR(
    `https://ws.audioscrobbler.com/2.0/?method=user.gettopartists&user=${username}&period=7day&limit=${limit}&api_key=${apikey}&format=json`
  );

  if (error) return <div>failed to load</div>;
  if (!data) return <Spinner />;

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
