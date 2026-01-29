import { Link } from 'react-router-dom'

function Submsission(props){
    const {submitHistory} = props
    return (
        <div className='flex flex-col h-full bg-white justify-center'>
            <Link to="/" className='px-4 py-2 bg-blue-700 text-white w-fit rounded'>Kembali ke Form</Link>
            <div className='flex flex-col mx-auto w-3/4'>
                <table className='w-3/4'>
                    <thead>
                    <tr className='text-center [&>th]:border [&>th]:border-gray-300 [&>th]:p-2 bg-blue-400'>
                        <th>No</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Is Smoker</th>
                        <th>Cigarette</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        submitHistory.map((s, index) => (
                        <tr key={index} className='text-center [&>td]:border [&>td]:border-gray-300 [&>td]:p-2'>
                            <td>{index + 1}</td>
                            <td>{s.name}</td>
                            <td>{s.age}</td>
                            <td>{s.gender}</td>
                            <td>{s.isSmoker}</td>
                            <td>{s.cigarette}</td>
                        </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Submsission