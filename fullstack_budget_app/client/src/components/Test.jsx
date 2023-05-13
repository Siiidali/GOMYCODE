import axios from "axios";
import { useQuery } from "react-query";

const getBudgets = async () => {
  const data = await axios.get("http://localhost:4000/api/budget");
  return data.data;
};

const Test = () => {
  const { error, isError, data } = useQuery("test", getBudgets);
  console.log(error);
  console.log(data);
  console.log(isError);
  const errorMessage = error?.response
    ? error.response.data.error
    : "An error occurred.";
  if (isError)
    return (
      <p className="text-black">
        {JSON.stringify(error?.response?.data?.error)}
      </p>
    );
  return <div>sss</div>;
};

export default Test;
