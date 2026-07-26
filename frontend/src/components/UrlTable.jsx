function UrlTable(){


const links=[

{
original:"google.com",
short:"abc123",
clicks:540
},

{
original:"github.com",
short:"github123",
clicks:230
}];


return (

<table>
    <thead>
        <tr>

            <th>Original</th>

            <th>Short Link</th>

            <th>Clicks</th>

        </tr>

    </thead>

    <tbody>

    {links.map((link,index)=>(

    <tr key={index}>
    
    <td>{link.original}</td>
    
    <td>localhost:8080/{link.short}</td>

    <td>{link.clicks}</td>

    </tr>))}

    </tbody>

</table>)}

export default UrlTable;