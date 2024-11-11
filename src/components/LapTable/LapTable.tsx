import './LapTable.scss'

interface LapTableProps {
    array: string[];
}

export const LapTable = ({ array }: LapTableProps) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nr okrążenia</th>
                    <th>Czas</th>
                </tr>
            </thead>
            <tbody>
                {array.map((time, index) => (
                    <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{time}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};