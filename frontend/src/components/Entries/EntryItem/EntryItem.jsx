

const EntryItem = ({ Comment, Name, Email, createdAt }) => {

    const formattedDate = new Date(createdAt).toLocaleDateString('en-US', {
        month: 'short', 
        day: 'numeric', 
        year: 'numeric', 
    });


    return (
        <div className="create w-full mt-5 shadow-md rounded-md md:w-1/2 mx-auto border-2">
            <h1 className="text-xl px-4 py-3 bg-gray-200">{formattedDate} 🤓</h1>
            <div className="p-3 px-4">
                <h1 className="text-xl" >{Comment}</h1>
                <h1 className="mt-4 text-gray-400">— {Name} <span className="text-red-500">({Email})</span></h1>
            </div>
        </div>
    )
}

export default EntryItem