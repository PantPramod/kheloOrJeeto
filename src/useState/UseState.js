import { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);
    const [input, setInput] = useState('');
    const [arr, setArr] = useState([]);
    const [date, setDate] = useState('');
    const [obj, setObj] = useState({ task: "", date: "" });
    const [arrayObj, setArrayObj] = useState([]);
    const [nestedarray, setNestedArray] = useState([]);

    const [task, setTask] = useState('');
    const [subTask, setSubTask] = useState('');
    const [taskno, setTaskno] = useState(0);

    const increment = () => {
        setCount((prevCount) => (prevCount + 1))

    }
    const decrement = () => {
        setCount(prevCount => prevCount - 1)

    }

    const addInArray = () => {
        setArr((prevArr) => [input, ...prevArr])
    }

    const addObj = () => {
        const newObj = {
            task: input,
            date: date
        }
        // setObj(newObj)

        setObj({ ...newObj })
    }

    const addinArrayObj = () => {
        const newObj = {
            task: input,
            date: date
        }
        setArrayObj([...arrayObj, newObj])
    }

    const add_Task = () => {
        setNestedArray([...nestedarray, { task: task, subTask: [] }])
    }

    const add_subTask = () => {


        let newarr = [...nestedarray];
        newarr[taskno].subTask.push(subTask)
        setNestedArray((prev) => newarr);


    }

    return (
        <div>
            <div className="normalvariable">
                Count:{count}
                <button onClick={() => setCount(1)}>Reset</button>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
            </div>
            <hr />
            <div className="arr">
                <input type="text" placeholder='Enter Some text' onChange={(e) => setInput(e.target.value)} />
                <button onClick={addInArray}>Add</button>
                {arr.map(i => <p>{i}</p>)}
            </div>
            <hr />

            <div className='obj'>

                <input type="text" placeholder='taskname' onChange={(e) => setObj({ ...obj, task: e.target.value })} value={obj.task} /><br />
                <input type="date" placeholder='date' onChange={(e) => setObj({ ...obj, date: e.target.value })} value={obj.date} /><br />
                <button onClick={addObj}>Add</button>
                {obj.task}||{obj.date}
            </div>
            <hr />

            <div className="arrayOfObjects">
                <input type="text" placeholder='taskname' onChange={(e) => setInput(e.target.value)} /><br />
                <input type="date" placeholder='date' onChange={(e) => setDate(e.target.value)} /><br />
                <button onClick={addinArrayObj}>Add</button>
                {arrayObj.map((obj, id) => <p key={id}>{obj.task}......{obj.date}</p>)}
            </div>
            <hr />
            <div className='nestedarray'>
                <input type="text" onChange={(e) => setTask(e.target.value)} value={task} placeholder="task" />
                <button onClick={add_Task}>Add Task</button><br />
                <input type="text" onChange={(e) => setSubTask(e.target.value)} value={subTask} placeholder="subtask" />
                <button onClick={add_subTask}>Add Sub-task</button>
                {/* nestedobj = [{task:"Reading",subTask:["books", "newsPaper","blog"]},{}] */}
                {nestedarray.map((obj, id) => <p onClick={() => setTaskno(id)}>{obj.task}.....
                    {obj.subTask.map(item => <p>{item}</p>)}
                </p>)}
            </div>
        </div >
    )
}

export default UseState;
