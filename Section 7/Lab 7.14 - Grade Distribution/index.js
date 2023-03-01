function parseScores(scoresString) {
    let scores = scoresString.split(' ');
    return scores;
}

function buildDistributionArray(scoresArray) {
    let grades = [0, 0, 0, 0, 0];

    for (let i = 0; i < scoresArray.length; i++) {
        if (scoresArray[i] >= 90) {
            grades[0]++;
        }
        else if (scoresArray[i] >= 80) {
            grades[1]++;
        }
        else if (scoresArray[i] >= 70) {
            grades[2]++;
        }
        else if (scoresArray[i] >= 60) {
            grades[3]++;
        }
        else {
            grades[4]++;
        }
    }

    return grades;
}

function setTableContent(userInput) {
    let scores = parseScores(userInput);
    if (scores.length > 0 && (userInput !== "")){
        let grades = buildDistributionArray(scores);
        
        let innerHTML = '';
        innerHTML += "<tr>";
        for (let count in grades) {
            innerHTML += "<td><div style='height:" + grades[count] * 10 + "px' class='bar" + count + "'></div></td>";

        }

        innerHTML += "</tr>";
        innerHTML += "<tr>";
        innerHTML += "<td>A</td>";
        innerHTML += "<td>B</td>";
        innerHTML += "<td>C</td>";
        innerHTML += "<td>D</td>";
        innerHTML += "<td>F</td>";
        innerHTML += "</tr>";

        innerHTML += "<tr>";
        for (let count in grades) {
            innerHTML += "<td>" + grades[count] + "</td>";

        }
        innerHTML += "</tr>";

        document.getElementById("distributionTable").innerHTML = innerHTML;
    }
    else {
        document.getElementById("distributionTable").innerHTML = "<td>No graph to display</td>";
    }
}

function bodyLoaded() {
    // The argument passed to writeTableContent can be changed for 
    // testing purposes
    setTableContent("45 78 98 83 86 99 90 59");
}