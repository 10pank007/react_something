import logo from './logo.svg';
import './App.css';
import {useForm} from "react-hook-form";
import {savePosts} from "./services/post.api.service";

function App() {
    let {register, handleSubmit,
        watch, formState: {errors}} = useForm({defaultValues: {title: "title default"}});
    const onSubmit = (data) => {
        console.log(data);
        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        //     .then((response) => response.json())
        //     .then((json) => console.log(json));
        savePosts(data).then(({data}) => console.log(data));
    }
    console.log(watch("title"));
    return (
    <div className="App">
      Hello world!!! Ukraine win war in 2023
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("title", {required: true})}/>
            {errors.title && <span>filed is required</span>}
            <input {...register("body")}/>
            <input type={"submit"} value={"is submit"}/>
            <select {...register("userId")}>
                <option value={"1"}>1</option>
                <option value={"2"}>2</option>
                <option value={"3"}>3</option>
                <option value={"4"}>4</option>
                <option value={"5"}>5</option>
                <option value={"6"}>6</option>
                <option value={"7"}>7</option>
                <option value={"8"}>8</option>
                <option value={"9"}>9</option>
                <option value={"10"}>10</option>
            </select>
        </form>
    </div>
  );
}

export default App;
