import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, incrementByAmount } from "./app/counterSlice";
import { useMutation, useQuery, useQueryClient } from "react-query";

function App() {
  const queryClient = useQueryClient();
  const dispatch = useDispatch();
  const counter = useSelector((state) => {
    return state.counter.counter;
  });

  const addHandler = () => {
    dispatch(increment());
  };
  const subHandler = () => {
    dispatch(decrement());
  };

  const amountHandler = () => {
    dispatch(incrementByAmount(430));
  };

  const { data, isLoading, error } = useQuery("posts", () => {
    const data = fetch("https://jsonplaceholder.typicode.com/posts/")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      });
    return data;
  });

  const mutation = useMutation(
    (post) => {
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: JSON.stringify(post),
      })
        .then((data) => {
          console.log(data);
          return data.json();
        })
        .then((data) => {
          console.log(data);
        });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  if (isLoading) return <p>isLoading</p>;

  return (
    <div className="App">
      <h1>My Counter</h1>
      <p>{counter}</p>
      <button onClick={addHandler}>Add</button>
      <button onClick={subHandler}>Soustraction</button>
      <button onClick={amountHandler}>Add by amount</button>
      <h2>Todos List</h2>
      <div>{data && data.map((todo) => <h1>{todo.title}</h1>)}</div>
      <button
        onClick={() => {
          const post = {
            userId: 1,
            title: "sidali",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
          };
          mutation.mutate(post);
        }}
      >
        add new post
      </button>
    </div>
  );
}

export default App;
