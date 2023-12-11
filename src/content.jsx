
function Content() {
    const data = [
        {
            name:"Kiara Advani",
            occupation:"Actress",
            image:"https://tse3.explicit.bing.net/th?id=OIP.40biZOi53SM66Ip2uUVd4AHaEo&pid=Api&P=0&h=180"

        },
        {
            name:"Murnal Thakur",
            occupation:"Actress",
            image:"https://tse4.mm.bing.net/th?id=OIP.R7MIOBg_eWkVI_KTtE6HGAHaLG&pid=Api&P=0&h=180"
        },
        {
            name:"Pawan Singh",
            occupation:"Actor and Singer",
            image:"https://tse3.mm.bing.net/th?id=OIP.s-SPlZtpRa9SkjQ0YBBUQwHaHa&pid=Api&P=0&h=180"
        }
        
    ]
  return (
    <div>
        <h1>Listes</h1>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Occupation</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {data.map(p=>(
                    <tr>
                        <td>{p.name}</td>
                        <td>{p.occupation}</td>
                        <td><img width='180' src={p.image}></img></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
  )
}

export default Content