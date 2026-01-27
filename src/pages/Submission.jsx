import { Link } from 'react-router-dom'

function Submsission(props){
    const {submitHistory} = props
    return (
        <div>
            <Link to="/">Kembali ke Form</Link>
            <div className='flex flex-col'>
                <table>
                    <thead>
                    <tr>
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
                        <tr key={index} className='text-center'>
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