const url =
"https://my-json-server.typicode.com/FreSauce/json-ipl/data";

fetch(url)
.then(response => response.json())
.then(data => {

    data.sort((a,b) => a.NRR - b.NRR);

    const tableBody =
    document.getElementById("table-body");

    data.forEach(team => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${team.Team}</td>
            <td>${team.Matches}</td>
            <td>${team.Won}</td>
            <td>${team.Lost}</td>
            <td>${team.NRR}</td>
            <td>${team.Points}</td>
        `;

        tableBody.appendChild(row);
    });

})
.catch(error => console.log(error));