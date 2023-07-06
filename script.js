function compute(){
    const inputTemp = document.getElementById("temp").value;
    const unitSelected = document.getElementById("temp_unit").value;

    const ctof = (cel) => {
        let f = ((cel * 9 / 5) + 32).toFixed(1);
        return f;
    }

    const ctok = (cel) => {
        let k = (Number (cel) + 273.15).toFixed(1);
        return k;
    }

    const ftoc = (fah) => {
        let c = ((fah - 32) * 5 / 9).toFixed(1);
        return c;
    }

    const ftok = (fah) => {
        let k = ((fah - 32) * 5 / 9 + 273.15).toFixed(1);
        return k;
    }

    const ktoc = (kel) => {
        let c = (kel - 273.15).toFixed(1);
        return c;
    }

    const ktof = (kel) => {
        let f = ((kel - 273.15) * 9 / 5 + 32).toFixed(1);
        return f;
    }

    if (unitSelected == 'cel') {
        document.getElementById("result").innerHTML = ctof(inputTemp) + " F" + "<br>" + ctok(inputTemp) + " K";
    }
    else if (unitSelected == 'fah') {
        document.getElementById("result").innerHTML = ftoc(inputTemp) + " C" + "<br>" + ftok(inputTemp) + " K";
    }
    else if (unitSelected == 'kel') {
        document.getElementById("result").innerHTML = ktoc(inputTemp) + " C" + "<br >" + ktof(inputTemp) + " F";
    }
    else{
        alert('select an unit');
    }
}