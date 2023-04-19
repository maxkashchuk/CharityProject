import axios from "axios";

export default async function ExampleService ()
{
    return await axios.get('api/subject/delsubject');
}