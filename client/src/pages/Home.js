import React from "react";
//import ThoughtList
import ThoughtList from "../components/ThoughtList";

//allows us to make requests to the GraphQL server
import { useQuery } from "@apollo/client";
import { QUERY_THOUGHTS } from "../utils/queries";

const Home = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_THOUGHTS);
  //optional chaining: if data exists, store it in the thoughts constant we just created. If data is undefined, then save an empty array to the thoughts component.
  const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-space-between">
        <div className="col-12 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
