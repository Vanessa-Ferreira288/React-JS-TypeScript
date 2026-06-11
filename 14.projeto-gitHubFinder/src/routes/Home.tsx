import { useState } from "react";
import Search from "../components/Search";
import User  from "../components/User";
import type { UserProps } from "../types/user";
import Error from "../components/Error";
import Loader from "../components/Loader";


const Home = () => {
  const [user, setUser] = useState<UserProps | null>(null);
  const [error, setError] = useState(false);
  const [isLoanding, setLoading] = useState(false);

  const loadUser = async (userName: string) => {
    setLoading(true);
    setError(false);
    setUser(null);

    const res = await fetch(
      `https://api.github.com/users/${userName}`
    );

    const data = await res.json();

    setLoading(false);

    if (res.status === 404) {
      setError(true);
      return;
    }

    const { avatar_url, login, location, followers, following } = data;

    const userData: UserProps = {
      avatar_url,
      login,
      location,
      followers,
      following,
    };

    setUser(userData);
  };

  return (
    <div>
      <Search loadUser={loadUser} />
      {isLoanding && <Loader/>}
      {user && <User {...user}/>}
      {error && <Error/>}
    </div>
  );
};

export default Home;