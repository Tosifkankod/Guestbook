import { useState } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const CreateEntry = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    Email: "",
    Name: "",
    Comment: ""
  })


  const handleOnChange = (e) => {
    setData((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (data.Name == "" || data.Comment == "") {
      alert("form bharna");
      return;
    }

    axios.post('/api/v1/guest/new', data).then((res) => {
      alert('posted Successfully')
      navigate('/entries')
      setData({
        Email: "",
        Name: "",
        Comment: ""
      })

    }).catch((err) => {
      alert(err.message)
    })
  }

  return (
    <div className="p-4 border-[1px] border-gray-300 h-screen">
      <div className="create w-full shadow-md rounded-md md:w-1/3 mx-auto border-2">
        <h1 className="text-xl px-4 py-3 bg-gray-200">Write a new entry 🤓</h1>
        <div className="p-3">
          <form onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="Name">Name</label>
              <br />
              <input
                name="Name"
                type="text"
                id="Name"
                value={data.Name}
                onChange={handleOnChange}
                className="w-full p-2 mt-2 rounded-md border-[1px]"

              />
            </div>
            <div className="mt-4">
              <label htmlFor="Email">Email</label>
              <br />
              <input
                name="Email"
                type="Email"
                id="Email"
                value={data.Email}
                onChange={handleOnChange}
                className="w-full p-2 mt-2 rounded-md border-[1px]"
              />
            </div>
            <div className="mt-4">
              <label htmlFor="Comment">Comment</label>
              <br />
              <textarea
                id="Comment"
                onChange={handleOnChange}
                name="Comment"
                value={data.Comment}
                className="w-full mt-2 p-2 h-[100px] border-[1px]"
                type="text"
              />
            </div>
            <p className="mt-2">😃</p>
            <input
              type="submit"
              className="px-4  cursor-pointer rounded-lg py-2 mt-4 bg-blue-600 text-white text-lg"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateEntry;
